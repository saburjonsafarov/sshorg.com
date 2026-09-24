"""Check the full production page; SCENE_FIXTURE=1 uses a local offline fixture."""
import functools
import runpy
import http.server
import json
import os
import threading
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'test-results' / os.environ.get('BROWSER', 'chromium')
OUT.mkdir(parents=True, exist_ok=True)
FIXTURE = os.environ.get('SCENE_FIXTURE') == '1'
MATRIX = [(1440,900,'ru'), (1440,900,'en'), (1440,900,'tg'), (390,844,'ru'), (390,844,'en'), (390,844,'tg'), (375,667,'ru'), (430,932,'en'), (768,1024,'tg'), (1024,768,'en')]
if os.environ.get('VIEWPORTS'):
    MATRIX = [MATRIX[int(i)] for i in os.environ['VIEWPORTS'].split(',')]

class Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args): pass

server = http.server.ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(Handler, directory=str(ROOT/'site')))
threading.Thread(target=server.serve_forever, daemon=True).start()
URL = f'http://127.0.0.1:{server.server_port}'
report = []
assert_painted_projection = runpy.run_path(str(ROOT/'tests/camera-paint.py'))['assert_painted_projection']

def load(page, no_canvas=False):
    if FIXTURE:
        html = (ROOT/'site/fixture.html').read_text()
        html = html.replace('<link rel="stylesheet" href="experience.css?v=dev">', '<style>'+(ROOT/'site/experience.css').read_text()+'</style>')
        js = (ROOT/'site/experience.js').read_text()
        if no_canvas: js = 'HTMLCanvasElement.prototype.getContext=()=>null;'+js
        page.set_content(html.replace('<script src="experience.js?v=dev"></script>', '<script>'+js+'</script>'))
    else:
        # Keep CI visits out of analytics, but never mock first-party code.
        page.route('**/*', lambda route: route.continue_() if route.request.url.startswith(URL+'/') else route.abort())
        if no_canvas: page.add_init_script('HTMLCanvasElement.prototype.getContext=()=>null')
        page.goto(URL+'/', wait_until='domcontentloaded')

STATE = """() => {
 const copies=[...document.querySelectorAll('[data-tech-copy]')];
 const visible=copies.filter(e=>+getComputedStyle(e).opacity>.5);
 const devices=[...document.querySelectorAll('[data-device]')];
 const intersects=(a,b)=>a.left<b.right-1&&a.right>b.left+1&&a.top<b.bottom-1&&a.bottom>b.top+1;
 return {visible:visible.map(e=>e.dataset.techCopy),
 collisions:visible.flatMap(e=>devices.filter(d=>intersects(e.getBoundingClientRect(),d.getBoundingClientRect())).map(d=>d.dataset.device)),
 overflow:document.documentElement.scrollWidth>innerWidth+1,
 transforms:devices.map(e=>e.style.transform),
 deviceBoxes:devices.map(e=>({name:e.dataset.device,...e.getBoundingClientRect().toJSON()})),
 inactiveFocusable:copies.filter(e=>+getComputedStyle(e).opacity<.01&&!e.inert).length};
}"""

def scrub(page,p):
    actual=page.evaluate("""p=>{const s=document.querySelector('[data-tech-story]'),t=s.querySelector('.tech-stage');
      const top=s.getBoundingClientRect().top+scrollY,d=s.offsetHeight-t.clientHeight;
      scrollTo({top:top+d*p,behavior:'instant'});return Math.max(0,Math.min(1,(scrollY-top)/d));}""",p)
    page.wait_for_function("p=>Math.abs(Number(document.querySelector('[data-tech-story]').dataset.progress)-p)<.00012",arg=actual,timeout=15000)
    page.wait_for_timeout(70)

with sync_playwright() as p:
    opts={'headless':True}
    if os.environ.get('CHROMIUM_PATH'): opts['executable_path']=os.environ['CHROMIUM_PATH']
    browser=getattr(p,os.environ.get('BROWSER','chromium')).launch(**opts)
    for w,h,lang in MATRIX:
        label=f'{w}x{h}-{lang}'
        context=browser.new_context(viewport={'width':w,'height':h},locale=lang,device_scale_factor=1)
        page=context.new_page(); errors=[]
        page.on('pageerror',lambda error:errors.append(str(error)))
        try:
            load(page); page.wait_for_selector('.tech-ready')
            page.locator(f'[data-lang="{lang}"]').click(); page.wait_for_timeout(100)
            original=None
            for point,expected in [(0,'0'),(.18,'1'),(.405,'2'),(.65,'3'),(.875,'4'),(1,None)]:
                print('CHECK',label,point,flush=True); scrub(page,point); state=page.evaluate(STATE)
                original=original or state['transforms']
                assert state['transforms']==original, f'{label}: device roots moved'
                assert not state['collisions'], f'{label} {point}: collisions {state}'
                assert not state['overflow'], f'{label}: overflow'
                assert state['inactiveFocusable']==0, f'{label}: invisible focus targets'
                assert state['visible']==([expected] if expected else []), f'{label} {point}: missing chapter {state}'
                if point==1:
                    for box in state['deviceBoxes']:
                        assert box['left']>=0 and box['right']<=w, f'{label}: final device clipped: {box}'
                if label in ['1440x900-ru','390x844-ru']: page.screenshot(path=str(OUT/f'{label}-{point}.png'))
                if point == 1 and label in ['1440x900-ru','390x844-ru']:
                    paint = assert_painted_projection(page)
                    (OUT/f'paint-{label}.json').write_text(json.dumps(paint,indent=2))
            for point in [.405,.18,0]:
                scrub(page,point); assert page.evaluate(STATE)['transforms']==original
            page.locator('.tech-chapters button').nth(1).click()
            page.wait_for_function("()=>Math.abs(Number(document.querySelector('[data-tech-story]').dataset.progress)-.405)<.002",timeout=15000)
            page.evaluate("Object.defineProperty(document,'hidden',{configurable:true,get:()=>true});document.dispatchEvent(new Event('visibilitychange'))")
            before=page.locator('.tech-world').get_attribute('style'); page.wait_for_timeout(200)
            assert before==page.locator('.tech-world').get_attribute('style'), 'hidden tab kept animating'
            page.evaluate("delete document.hidden;document.dispatchEvent(new Event('visibilitychange'))")
            assert not errors, errors
            report.append({'viewport':label,'status':'passed','stations':6,'reverse':True,'visibility_handler':True})
            print('PASS',label,flush=True)
        except Exception:
            page.screenshot(path=str(OUT/f'FAILED-{label}.png'))
            (OUT/f'FAILED-{label}.json').write_text(json.dumps({'errors':errors,'state':page.evaluate(STATE)},indent=2))
            raise
        finally: context.close()
    for reduced,js in [('reduce',True),('no-preference',False)]:
        context=browser.new_context(viewport={'width':390,'height':844},reduced_motion=reduced,java_script_enabled=js)
        page=context.new_page(); load(page); page.wait_for_timeout(250)
        assert page.locator('[data-tech-story]').bounding_box()['height']<=1100, 'empty fallback scroll tunnel'
        assert page.locator('[data-tech-copy="0"]').is_visible()
        if js:
            assert page.locator('[data-tech-copy="0"]').evaluate('(e)=>!e.inert')
            page.emulate_media(reduced_motion='no-preference'); page.wait_for_timeout(300)
            assert page.locator('[data-tech-story]').bounding_box()['height']>3000
            assert page.locator('.tech-viewport').count()==1
        report.append({'fallback':f'motion={reduced}, JS={js}','status':'passed'}); context.close()
    context=browser.new_context(viewport={'width':390,'height':844})
    page=context.new_page(); load(page,no_canvas=True); page.wait_for_selector('.tech-ready')
    assert page.locator('[data-tech-copy="0"]').is_visible()
    report.append({'fallback':'canvas unavailable','status':'passed'}); context.close()
    browser.close()
server.shutdown()
(OUT/'report.json').write_text(json.dumps({'fixture':FIXTURE,'checks':report},indent=2))
print(f'PASS {len(report)} browser scenarios; artifacts: {OUT}',flush=True)
