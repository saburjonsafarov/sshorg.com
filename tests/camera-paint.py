"""Pixel-level regression: CSS boxes can be correct while WebKit paints at wrong scale."""
import base64


def assert_painted_projection(page):
    results = []
    for device in ['laptop', 'phone', 'tablet', 'monitor']:
        selector = f'.tech-{device}-screen'
        expected = page.locator(selector).evaluate('''screen => {
            const probe = document.createElement('span');
            probe.id = 'camera-paint-probe';
            probe.style.cssText = 'position:absolute;inset:25%;display:block;background:#ff00ff!important;z-index:9999;pointer-events:none;border:0;padding:0;margin:0;opacity:1';
            screen.append(probe);
            return probe.getBoundingClientRect().toJSON();
        }''')
        try:
            shot = base64.b64encode(page.screenshot()).decode('ascii')
            actual = page.evaluate('''async png => {
                const image = new Image();
                image.src = 'data:image/png;base64,' + png;
                await image.decode();
                const canvas = document.createElement('canvas');
                canvas.width = image.width; canvas.height = image.height;
                const ctx = canvas.getContext('2d', {willReadFrequently:true});
                ctx.drawImage(image,0,0);
                const pixels = ctx.getImageData(0,0,canvas.width,canvas.height).data;
                let left=canvas.width, right=-1, top=canvas.height, bottom=-1, count=0;
                for(let i=0;i<pixels.length;i+=4) {
                    if(pixels[i]>210 && pixels[i+1]<55 && pixels[i+2]>210) {
                        const n=i/4,x=n%canvas.width,y=Math.floor(n/canvas.width);
                        left=Math.min(left,x);right=Math.max(right,x+1);
                        top=Math.min(top,y);bottom=Math.max(bottom,y+1);count++;
                    }
                }
                return {left,right,top,bottom,count};
            }''', shot)
            assert actual['count'] > 0, f'{device}: screen pixels missing from wide shot'
            for edge in ['left', 'right', 'top', 'bottom']:
                assert abs(actual[edge] - expected[edge]) <= 5, f'{device}: painted {edge} != DOM projection: {actual}, {expected}'
            results.append({'device':device,'painted':actual,'expected':expected})
        finally:
            page.locator('#camera-paint-probe').evaluate('(probe)=>probe.remove()')
    return results
