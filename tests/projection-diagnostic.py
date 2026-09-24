"""Render isolated compositor variants to diagnose 3D paint vs DOM geometry."""
import functools, http.server, threading, json
from pathlib import Path
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parents[1]
out=root/'test-results'/'projection'; out.mkdir(parents=True,exist_ok=True)
class Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*args): pass
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Handler,directory=str(root/'site')))
threading.Thread(target=server.serve_forever,daemon=True).start()
url=f'http://127.0.0.1:{server.server_port}/'
with sync_playwright() as p:
    browser=p.webkit.launch(headless=True)
    page=browser.new_page(viewport={'width':1440,'height':900},locale='ru')
    page.route('**/*',lambda route:route.continue_() if route.request.url.startswith(url) else route.abort())
    page.goto(url,wait_until='domcontentloaded'); page.wait_for_selector('.tech-ready')
    page.evaluate("()=>{const s=document.querySelector('[data-tech-story]'),t=s.querySelector('.tech-stage');scrollTo({top:s.offsetTop+s.offsetHeight-t.clientHeight,behavior:'instant'})}")
    page.wait_for_function("()=>Number(document.querySelector('[data-tech-story]').dataset.progress)>.99998")
    page.wait_for_timeout(300)
    variants={
      'baseline':'',
      'world-one-pixel':'.tech-world{width:1px!important;height:1px!important}',
      'world-area':'.tech-world{width:1440px!important;height:900px!important}',
      'viewport-3d':'.tech-viewport{transform-style:preserve-3d!important}',
      'viewport-layer':'.tech-viewport{transform:translateZ(0)!important;transform-style:preserve-3d!important}',
      'without-will-change':'.tech-world{will-change:auto!important;width:1px!important;height:1px!important}',
      'flatten-world':'.tech-world{transform-style:flat!important}',
      'world-contain':'.tech-world{contain:layout!important;width:1px!important;height:1px!important}',
    }
    report=[]
    for name,css in variants.items():
        handle=page.add_style_tag(content=css)
        page.wait_for_timeout(250)
        page.screenshot(path=str(out/f'{name}.png'))
        report.append({'variant':name,'boxes':page.locator('[data-device]').evaluate_all('(els)=>els.map(e=>({name:e.dataset.device,rect:e.getBoundingClientRect().toJSON()}))')})
        handle.evaluate('(e)=>e.remove()')
    matrix=page.evaluate("""()=>{const e=document.querySelector('.tech-world'),s=e.style.transform;
      const d=+s.match(/perspective\(([^p]+)px/)[1], xyz=s.match(/translate3d\(([^)]+)\)/)[1].split(',').map(parseFloat),D=d-xyz[2];
      const next=`scale(${d/D}) perspective(${D}px) translate3d(${xyz[0]}px,${xyz[1]}px,0)`;
      e.style.transform=next;return {before:s,after:next};}""")
    page.wait_for_timeout(250); page.screenshot(path=str(out/'affine-depth.png'))
    report.append({'variant':'affine-depth','matrix':matrix})
    (out/'report.json').write_text(json.dumps(report,indent=2));browser.close()
server.shutdown()
