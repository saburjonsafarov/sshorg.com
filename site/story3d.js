var sx=Object.defineProperty;var ox=(i,e,t)=>e in i?sx(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var qe=(i,e,t)=>ox(i,typeof e!="symbol"?e+"":e,t);function hr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Qp(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}var ii={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_a={duration:.5,overwrite:!1,delay:0},hf,bn,Ft,wi=1e8,Ct=1/wi,ju=Math.PI*2,ax=ju/4,lx=0,jp=Math.sqrt,cx=Math.cos,hx=Math.sin,ln=function(e){return typeof e=="string"},Yt=function(e){return typeof e=="function"},fr=function(e){return typeof e=="number"},ac=function(e){return typeof e>"u"},Ki=function(e){return typeof e=="object"},ni=function(e){return e!==!1},uf=function(){return typeof window<"u"},Ql=function(e){return Yt(e)||ln(e)},em=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},In=Array.isArray,ux=/random\([^)]+\)/g,fx=/,\s*/g,Wp=/(?:-?\.?\d|\.)+/gi,ff=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_s=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Yu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,df=/[+-]=-?[.\d]+/,dx=/[^,'"\[\]\s]+/gi,px=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,Ji,ef,pf,li={},nc={},tm,nm=function(e){return(nc=so(e,li))&&Ln},lc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},xa=function(e,t){return!t&&console.warn(e)},im=function(e,t){return e&&(li[e]=t)&&nc&&(nc[e]=t)||li},va=function(){return 0},mx={suppressEvents:!0,isStart:!0,kill:!1},jl={suppressEvents:!0,kill:!1},gx={suppressEvents:!0},mf={},Or=[],tf={},rm,ei={},qu={},Xp=30,ec=[],gf="",_f=function(e){var t=e[0],n,r;if(Ki(t)||Yt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=ec.length;r--&&!ec[r].targetTest(t););n=ec[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Sf(e[r],n)))||e.splice(r,1);return e},Fr=function(e){return e._gsap||_f(Ei(e))[0]._gsap},xf=function(e,t,n){return(n=e[t])&&Yt(n)?e[t]():ac(n)&&e.getAttribute&&e.getAttribute(t)||n},Xn=function(e,t){return(e=e.split(",")).forEach(t)||e},qt=function(e){return Math.round(e*1e5)/1e5||0},kt=function(e){return Math.round(e*1e7)/1e7||0},xs=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},_x=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},ic=function(){var e=Or.length,t=Or.slice(0),n,r;for(tf={},Or.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},vf=function(e){return!!(e._initted||e._startAt||e.add)},sm=function(e,t,n,r){Or.length&&!bn&&ic(),e.render(t,n,r||!!(bn&&t<0&&vf(e))),Or.length&&!bn&&ic()},om=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(dx).length<2?t:ln(e)?e.trim():e},am=function(e){return e},ci=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},xx=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},so=function(e,t){for(var n in t)e[n]=t[n];return e},Yp=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ki(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},rc=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},pa=function(e){var t=e.parent||Vt,n=e.keyframes?xx(In(e.keyframes)):ci;if(ni(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},vx=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},lm=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},cc=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Br=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ps=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},yx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},nf=function(e,t,n,r){return e._startAt&&(bn?e._startAt.revert(jl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Sx=function i(e){return!e||e._ts&&i(e.parent)},qp=function(e){return e._repeat?oo(e._tTime,e=e.duration()+e._rDelay)*e:0},oo=function(e,t){var n=Math.floor(e=kt(e/t));return e&&n===e?n-1:n},sc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},hc=function(e){return e._end=kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ct)||0))},uc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=kt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),hc(e),n._dirty||ps(n,e)),e},cm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=sc(e.rawTime(),t),(!t._dur||Ma(0,t.totalDuration(),n)-t._tTime>Ct)&&t.render(n,!0)),ps(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ct}},$i=function(e,t,n,r){return t.parent&&Br(t),t._start=kt((fr(n)?n:n||e!==Vt?Ti(e,n,t):e._time)+t._delay),t._end=kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),lm(e,t,"_first","_last",e._sort?"_start":0),rf(t)||(e._recent=t),r||cm(e,t),e._ts<0&&uc(e,e._tTime),e},hm=function(e,t){return(li.ScrollTrigger||lc("scrollTrigger",t))&&li.ScrollTrigger.create(t,e)},um=function(e,t,n,r,s){if(Tf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!bn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&rm!==ti.frame)return Or.push(e),e._lazy=[s,r],1},Mx=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},rf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},bx=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&Mx(e)&&!(!e._initted&&rf(e))||(e._ts<0||e._dp._ts<0)&&!rf(e))?0:1,a=e._rDelay,l=0,c,h,d;if(a&&e._repeat&&(l=Ma(0,e._tDur,t),h=oo(l,a),e._yoyo&&h&1&&(o=1-o),h!==oo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||bn||r||e._zTime===Ct||!t&&e._zTime){if(!e._initted&&um(e,t,r,n,l))return;for(d=e._zTime,e._zTime=t||(n?Ct:0),n||(n=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&nf(e,t,n,!0),e._onUpdate&&!n&&ai(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ai(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Br(e,1),!n&&!bn&&(ai(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Tx=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ao=function(e,t,n,r){var s=e._repeat,o=kt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:kt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&uc(e,e._tTime=e._tDur*a),e.parent&&hc(e),n||ps(e.parent,e),e},Zp=function(e){return e instanceof Pn?ps(e):ao(e,e._dur)},wx={_start:0,endTime:va,totalDuration:va},Ti=function i(e,t,n){var r=e.labels,s=e._recent||wx,o=e.duration()>=wi?s.endTime(!1):e._dur,a,l,c;return ln(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(In(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ma=function(e,t,n){var r=fr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ni(l.vars.inherit)&&l.parent;o.immediateRender=ni(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Qt(t[0],o,t[s+1])},zr=function(e,t){return e||e===0?t(e):t},Ma=function(e,t,n){return n<e?e:n>t?t:n},Tn=function(e,t){return!ln(e)||!(t=px.exec(e))?"":t[1]},Ex=function(e,t,n){return zr(n,function(r){return Ma(e,t,r)})},sf=[].slice,fm=function(e,t){return e&&Ki(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ki(e[0]))&&!e.nodeType&&e!==Ji},Ax=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return ln(r)&&!t||fm(r,1)?(s=n).push.apply(s,Ei(r)):n.push(r)})||n},Ei=function(e,t,n){return Ft&&!t&&Ft.selector?Ft.selector(e):ln(e)&&!n&&(ef||!lo())?sf.call((t||pf).querySelectorAll(e),0):In(e)?Ax(e,n):fm(e)?sf.call(e,0):e?[e]:[]},of=function(e){return e=Ei(e)[0]||xa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ei(t,n.querySelectorAll?n:n===e?xa("Invalid scope")||pf.createElement("div"):e)}},dm=function(e){return e.sort(function(){return .5-Math.random()})},pm=function(e){if(Yt(e))return e;var t=Ki(e)?e:{each:e},n=ms(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,h=r,d=r;return ln(r)?h=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(h=r[0],d=r[1]),function(u,f,g){var _=(g||t).length,p=o[_],m,y,b,x,M,T,A,v,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,wi])[1],!w){for(A=-wi;A<(A=g[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(p=o[_]=[],m=l?Math.min(w,_)*h-.5:r%w,y=w===wi?0:l?_*d/w-.5:r/w|0,A=0,v=wi,T=0;T<_;T++)b=T%w-m,x=y-(T/w|0),p[T]=M=c?Math.abs(c==="y"?x:b):jp(b*b+x*x),M>A&&(A=M),M<v&&(v=M);r==="random"&&dm(p),p.max=A-v,p.min=v,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(w>_?_-1:c?c==="y"?_/w:w:Math.max(w,_/w))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Tn(t.amount||t.each)||0,n=n&&_<0?kx(n):n}return _=(p[u]-p.min)/p.max||0,kt(p.b+(n?n(_):_)*p.v)+p.u}},af=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=kt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(fr(n)?0:Tn(n))}},mm=function(e,t){var n=In(e),r,s;return!n&&Ki(e)&&(r=n=e.radius||wi,e.values?(e=Ei(e.values),(s=!fr(e[0]))&&(r*=r)):e=af(e.increment)),zr(t,n?Yt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=wi,h=0,d=e.length,u,f;d--;)s?(u=e[d].x-a,f=e[d].y-l,u=u*u+f*f):u=Math.abs(e[d]-a),u<c&&(c=u,h=d);return h=!r||c<=r?e[h]:o,s||h===o||fr(o)?h:h+Tn(o)}:af(e))},gm=function(e,t,n,r){return zr(In(e)?!t:n===!0?!!(n=0):!r,function(){return In(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Cx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Rx=function(e,t){return function(n){return e(parseFloat(n))+(t||Tn(n))}},Px=function(e,t,n){return xm(e,t,0,1,n)},_m=function(e,t,n){return zr(n,function(r){return e[~~t(r)]})},Ix=function i(e,t,n){var r=t-e;return In(e)?_m(e,i(0,e.length),t):zr(n,function(s){return(r+(s-e)%r)%r+e})},Lx=function i(e,t,n){var r=t-e,s=r*2;return In(e)?_m(e,i(0,e.length-1),t):zr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},co=function(e){return e.replace(ux,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(fx);return gm(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},xm=function(e,t,n,r,s){var o=t-e,a=r-n;return zr(s,function(l){return n+((l-e)/o*a||0)})},Dx=function i(e,t,n,r){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=ln(e),a={},l,c,h,d,u;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(In(e)&&!In(t)){for(h=[],d=e.length,u=d-2,c=1;c<d;c++)h.push(i(e[c-1],e[c]));d--,s=function(g){g*=d;var _=Math.min(u,~~g);return h[_](g-_)},n=t}else r||(e=so(In(e)?[]:{},e));if(!h){for(l in t)Mf.call(a,e,l,"get",t[l]);s=function(g){return Af(g,a)||(o?e.p:e)}}}return zr(n,s)},Jp=function(e,t,n){var r=e.labels,s=wi,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ai=function(e,t,n){var r=e.vars,s=r[t],o=Ft,a=e._ctx,l,c,h;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Or.length&&ic(),a&&(Ft=a),h=l?s.apply(c,l):s.call(c),Ft=o,h},fa=function(e){return Br(e),e.scrollTrigger&&e.scrollTrigger.kill(!!bn),e.progress()<1&&ai(e,"onInterrupt"),e},ro,vm=[],ym=function(e){if(e)if(e=!e.name&&e.default||e,uf()||e.headless){var t=e.name,n=Yt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:va,render:Af,add:Mf,kill:$x,modifier:Jx,rawVars:0},o={targetTest:0,get:0,getSetter:fc,aliases:{},register:0};if(lo(),e!==r){if(ei[t])return;ci(r,ci(rc(e,s),o)),so(r.prototype,so(s,rc(e,o))),ei[r.prop=t]=r,e.targetTest&&(ec.push(r),mf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}im(t,r),e.register&&e.register(Ln,r,Yn)}else vm.push(e)},At=255,da={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},Zu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*At+.5|0},Sm=function(e,t,n){var r=e?fr(e)?[e>>16,e>>8&At,e&At]:0:da.black,s,o,a,l,c,h,d,u,f,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),da[e])r=da[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&At,r&At,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&At,e&At]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Wp),!t)l=+r[0]%360/360,c=+r[1]/100,h=+r[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,r.length>3&&(r[3]*=1),r[0]=Zu(l+1/3,s,o),r[1]=Zu(l,s,o),r[2]=Zu(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(ff),n&&r.length<4&&(r[3]=1),r}else r=e.match(Wp)||da.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/At,o=r[1]/At,a=r[2]/At,d=Math.max(s,o,a),u=Math.min(s,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(h*100+.5)),n&&r.length<4&&(r[3]=1),r},Mm=function(e){var t=[],n=[],r=-1;return e.split(ur).forEach(function(s){var o=s.match(_s)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},$p=function(e,t,n){var r="",s=(e+r).match(ur),o=t?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return e;if(s=s.map(function(u){return(u=Sm(u,t,1))&&o+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Mm(e),l=n.c,l.join(r)!==h.c.join(r)))for(c=e.replace(ur,"1").split(_s),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(ur),d=c.length-1;a<d;a++)r+=c[a]+s[a];return r+c[d]},ur=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in da)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),Nx=/hsl[a]?\(/,yf=function(e){var t=e.join(" "),n;if(ur.lastIndex=0,ur.test(t))return n=Nx.test(t),e[1]=$p(e[1],n),e[0]=$p(e[0],n,Mm(e[1])),!0},ya,ti=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,h,d,u,f,g=function _(p){var m=i()-r,y=p===!0,b,x,M,T;if((m>e||m<0)&&(n+=m-t),r+=m,M=r-n,b=M-o,(b>0||y)&&(T=++d.frame,u=M-d.time*1e3,d.time=M=M/1e3,o+=b+(b>=s?4:s-b),x=1),y||(l=c(_)),x)for(f=0;f<a.length;f++)a[f](M,u,T,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){tm&&(!ef&&uf()&&(Ji=ef=window,pf=Ji.document||{},li.gsap=Ln,(Ji.gsapVersions||(Ji.gsapVersions=[])).push(Ln.version),nm(nc||Ji.GreenSockGlobals||!Ji.gsap&&Ji||{}),vm.forEach(ym)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,o-d.time*1e3+1|0)},ya=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ya=0,c=va},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=d.time*1e3+s},add:function(p,m,y){var b=m?function(x,M,T,A){p(x,M,T,A),d.remove(b)}:p;return d.remove(p),a[y?"unshift":"push"](b),lo(),b},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},d})(),lo=function(){return!ya&&ti.wake()},_t={},Ux=/^[\d.\-M][\d.\-,\s]/,Ox=/["']/g,Fx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(Ox,"").trim():+c,r=l.substr(a+1).trim();return t},Bx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},zx=function(e){var t=(e+"").split("("),n=_t[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Fx(t[1])]:Bx(e).split(",").map(om)):_t._CE&&Ux.test(e)?_t._CE("",e):n},kx=function(e){return function(t){return 1-e(1-t)}},ms=function(e,t){return e&&(Yt(e)?e:_t[e]||zx(e))||t},vs=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return Xn(e,function(a){_t[a]=li[a]=s,_t[o=a.toLowerCase()]=n;for(var l in s)_t[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_t[a+"."+l]=s[l]}),s},bm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ju=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/ju*(Math.asin(1/r)||0),a=function(h){return h===1?1:r*Math.pow(2,-10*h)*hx((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:bm(a);return s=ju/s,l.config=function(c,h){return i(e,c,h)},l},$u=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:bm(n);return r.config=function(s){return i(e,s)},r};Xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;vs(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;vs("Elastic",Ju("in"),Ju("out"),Ju());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};vs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);vs("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});vs("Circ",function(i){return-(jp(1-i*i)-1)});vs("Sine",function(i){return i===1?1:-cx(i*ax)+1});vs("Back",$u("in"),$u("out"),$u());_t.SteppedEase=_t.steps=li.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-Ct;return function(a){return((r*Ma(0,o,a)|0)+s)*n}}};_a.ease=_t["quad.out"];Xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return gf+=i+","+i+"Params,"});var Sf=function(e,t){this.id=lx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:xf,this.set=t?t.getSetter:fc},Sa=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ao(this,+t.duration,1,1),this.data=t.data,Ft&&(this._ctx=Ft,Ft.data.push(this)),ya||ti.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ao(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(lo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(uc(this,n),!s._dp||s.parent||cm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&$i(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ct||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),sm(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+qp(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+qp(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?oo(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Ct?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?sc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ct?0:this._rts,this.totalTime(Ma(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),hc(this),yx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(lo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ct&&(this._tTime-=Ct)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=kt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&$i(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ni(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?sc(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=gx);var r=bn;return bn=n,vf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),bn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Zp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Zp(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Ti(this,n),ni(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,ni(r)),this._dur||(this._zTime=-Ct),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ct,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Ct)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=Yt(n)?n:am,l=function(){var h=r.then;r.then=null,s&&s(),Yt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=h),o(a),r.then=h};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){fa(this)},i})();ci(Sa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ct,_prom:0,_ps:!1,_rts:1});var Pn=(function(i){Qp(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ni(n.sortChildren),Vt&&$i(n.parent||Vt,hr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&hm(hr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return ma(0,arguments,this),this},t.from=function(r,s,o){return ma(1,arguments,this),this},t.fromTo=function(r,s,o,a){return ma(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,pa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Qt(r,s,Ti(this,o),1),this},t.call=function(r,s,o){return $i(this,Qt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Qt(r,o,Ti(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,h){return o.runBackwards=1,pa(o).immediateRender=ni(o.immediateRender),this.staggerTo(r,s,o,a,l,c,h)},t.staggerFromTo=function(r,s,o,a,l,c,h,d){return a.startAt=o,pa(a).immediateRender=ni(a.immediateRender),this.staggerTo(r,s,a,l,c,h,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=r<=0?0:kt(r),d=this._zTime<0!=r<0&&(this._initted||!c),u,f,g,_,p,m,y,b,x,M,T,A;if(this!==Vt&&h>l&&r>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,r+=this._time-a),u=h,x=this._start,b=this._ts,m=!b,d&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(u=kt(h%p),h===l?(_=this._repeat,u=c):(M=kt(h/p),_=~~M,_&&_===M&&(u=c,_--),u>c&&(u=c)),M=oo(this._tTime,p),!a&&this._tTime&&M!==_&&this._tTime-M*p-this._dur<=0&&(M=_),T&&_&1&&(u=c-u,A=1),_!==M&&!this._lock){var v=T&&M&1,w=v===(T&&_&1);if(_<M&&(v=!v),a=v?0:h%c?c:h,this._lock=1,this.render(a||(A?0:kt(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ai(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,M=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Tx(this,kt(a),kt(u)),y&&(h-=u-(u=y._start))),this._tTime=h,this._time=u,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&c&&!s&&!M&&(ai(this,"onStart"),this._tTime!==h))return this;if(u>=a&&r>=0)for(f=this._first;f;){if(g=f._next,(f._act||u>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(r,s,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,o),u!==this._time||!this._ts&&!m){y=0,g&&(h+=this._zTime=-Ct);break}}f=g}else{f=this._last;for(var R=r<0?r:u;f;){if(g=f._prev,(f._act||R<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(r,s,o);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,s,o||bn&&vf(f)),u!==this._time||!this._ts&&!m){y=0,g&&(h+=this._zTime=R?-Ct:Ct);break}}f=g}}if(y&&!s&&(this.pause(),y.render(u>=a?0:-Ct)._zTime=u>=a?1:-1,this._ts))return this._start=x,hc(this),this.render(r,s,o);this._onUpdate&&!s&&ai(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Br(this,1),!s&&!(r<0&&!a)&&(h||a||!l)&&(ai(this,h===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(fr(s)||(s=Ti(this,s,r)),!(r instanceof Sa)){if(In(r))return r.forEach(function(a){return o.add(a,s)}),this;if(ln(r))return this.addLabel(r,s);if(Yt(r))r=Qt.delayedCall(0,r);else return this}return this!==r?$i(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-wi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Qt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return ln(r)?this.removeLabel(r):Yt(r)?this.killTweensOf(r):(r.parent===this&&cc(this,r),r===this._recent&&(this._recent=this._last),ps(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=kt(ti.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ti(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Qt.delayedCall(0,s||va,o);return a.data="isPause",this._hasPause=1,$i(this,a,Ti(this,r))},t.removePause=function(r){var s=this._first;for(r=Ti(this,r);s;)s._start===r&&s.data==="isPause"&&Br(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Ur!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Ei(r),l=this._first,c=fr(s),h;l;)l instanceof Qt?_x(l._targets,a)&&(c?(!Ur||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ti(o,r),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,g=Qt.to(o,ci({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ct,onStart:function(){if(o.pause(),!f){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&ao(g,p,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,d||[])}},s));return u?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,ci({startAt:{time:Ti(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Jp(this,Ti(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Jp(this,Ti(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ct)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=kt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return ps(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ps(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=wi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,$i(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=kt(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ao(o,o===Vt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Vt._ts&&(sm(Vt,sc(r,Vt)),rm=ti.frame),ti.frame>=Xp){Xp+=ii.autoSleep||120;var s=Vt._first;if((!s||!s._ts)&&ii.autoSleep&&ti._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ti.sleep()}}},e})(Sa);ci(Pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Vx=function(e,t,n,r,s,o,a){var l=new Yn(this._pt,e,t,0,1,Ef,null,s),c=0,h=0,d,u,f,g,_,p,m,y;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=co(r)),o&&(y=[n,r],o(y,e,t),n=y[0],r=y[1]),u=n.match(Yu)||[];d=Yu.exec(r);)g=d[0],_=r.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?xs(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=Yu.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(df.test(r)||m)&&(l.e=0),this._pt=l,l},Mf=function(e,t,n,r,s,o,a,l,c,h){Yt(r)&&(r=r(s||0,e,o));var d=e[t],u=n!=="get"?n:Yt(d)?c?e[t.indexOf("set")||!Yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Yt(d)?c?Yx:Em:wf,g;if(ln(r)&&(~r.indexOf("random(")&&(r=co(r)),r.charAt(1)==="="&&(g=xs(u,r)+(Tn(u)||0),(g||g===0)&&(r=g))),!h||u!==r||lf)return!isNaN(u*r)&&r!==""?(g=new Yn(this._pt,e,t,+u||0,r-(u||0),typeof d=="boolean"?Zx:Am,0,f),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&lc(t,r),Vx.call(this,e,t,u,r,f,l||ii.stringFilter,c))},Gx=function(e,t,n,r,s){if(Yt(e)&&(e=ga(e,s,t,n,r)),!Ki(e)||e.style&&e.nodeType||In(e)||em(e))return ln(e)?ga(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=ga(e[a],s,t,n,r);return o},bf=function(e,t,n,r,s,o){var a,l,c,h;if(ei[e]&&(a=new ei[e]).init(s,a.rawVars?t[e]:Gx(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Yn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ro))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Ur,lf,Tf=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,h=r.runBackwards,d=r.yoyoEase,u=r.keyframes,f=r.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,b=e._overwrite==="auto"&&!hf,x=e.timeline,M=r.easeReverse||d,T,A,v,w,R,N,D,V,I,B,X,G,te;if(x&&(!u||!s)&&(s="none"),e._ease=ms(s,_a.ease),e._rEase=M&&(ms(M)||e._ease),e._from=!x&&!!r.runBackwards,e._from&&(e.ratio=1),!x||u&&!r.stagger){if(V=p[0]?Fr(p[0]).harness:0,G=V&&r[V.prop],T=rc(r,mf),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&g?jl:mx),_._lazy=0),o){if(Br(e._startAt=Qt.set(p,ci({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&ni(l),startAt:null,delay:0,onUpdate:c&&function(){return ai(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn||!a&&!f)&&e._startAt.revert(jl),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(a=!1),v=ci({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ni(l),immediateRender:a,stagger:0,parent:m},T),G&&(v[V.prop]=G),Br(e._startAt=Qt.set(p,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn?e._startAt.revert(jl):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Ct,Ct);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ni(l)||l&&!g,A=0;A<p.length;A++){if(R=p[A],D=R._gsap||_f(p)[A]._gsap,e._ptLookup[A]=B={},tf[D.id]&&Or.length&&ic(),X=y===p?A:y.indexOf(R),V&&(I=new V).init(R,G||T,e,X,y)!==!1&&(e._pt=w=new Yn(e._pt,R,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(F){B[F]=w}),I.priority&&(N=1)),!V||G)for(v in T)ei[v]&&(I=bf(v,T,e,X,R,y))?I.priority&&(N=1):B[v]=w=Mf.call(e,R,v,"get",T[v],X,y,0,r.stringFilter);e._op&&e._op[A]&&e.kill(R,e._op[A]),b&&e._pt&&(Ur=e,Vt.killTweensOf(R,B,e.globalTime(t)),te=!e.parent,Ur=0),e._pt&&l&&(tf[D.id]=1)}N&&Cf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!te,u&&t<=0&&x.render(wi,!0,!0)},Hx=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,u,f;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(h=u[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return lf=1,e.vars[t]="+=0",Tf(e,a),lf=0,l?xa(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(r||r===0)&&!s?r:h.s+(r||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=qt(n)+Tn(d.e)),d.b&&(d.b=h.s+Tn(d.b))},Wx=function(e,t){var n=e[0]?Fr(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=so({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Xx=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(In(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ga=function(e,t,n,r,s){return Yt(e)?e.call(t,n,r,s):ln(e)&&~e.indexOf("random(")?co(e):e},Tm=gf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",wm={};Xn(Tm+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return wm[i]=1});var Qt=(function(i){Qp(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:pa(r))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=r.parent||Vt,y=(In(n)||em(n)?fr(n[0]):"length"in r)?[n]:Ei(n),b,x,M,T,A,v,w,R;if(a._targets=y.length?_f(y):xa("GSAP target "+n+" not found. https://gsap.com",!ii.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||u||Ql(c)||Ql(h)){r=a.vars;var N=r.easeReverse||r.yoyoEase;if(b=a.timeline=new Pn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:y}),b.kill(),b.parent=b._dp=hr(a),b._start=0,u||Ql(c)||Ql(h)){if(T=y.length,w=u&&pm(u),Ki(u))for(A in u)~Tm.indexOf(A)&&(R||(R={}),R[A]=u[A]);for(x=0;x<T;x++)M=rc(r,wm),M.stagger=0,N&&(M.easeReverse=N),R&&so(M,R),v=y[x],M.duration=+ga(c,hr(a),x,v,y),M.delay=(+ga(h,hr(a),x,v,y)||0)-a._delay,!u&&T===1&&M.delay&&(a._delay=h=M.delay,a._start+=h,M.delay=0),b.to(v,M,w?w(x,v,y):0),b._ease=_t.none;b.duration()?c=h=0:a.timeline=0}else if(g){pa(ci(b.vars.defaults,{ease:"none"})),b._ease=ms(g.ease||r.ease||"none");var D=0,V,I,B;if(In(g))g.forEach(function(X){return b.to(y,X,">")}),b.duration();else{M={};for(A in g)A==="ease"||A==="easeEach"||Xx(A,g[A],M,g.easeEach);for(A in M)for(V=M[A].sort(function(X,G){return X.t-G.t}),D=0,x=0;x<V.length;x++)I=V[x],B={ease:I.e,duration:(I.t-(x?V[x-1].t:0))/100*c},B[A]=I.v,b.to(y,B,D),D+=B.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return f===!0&&!hf&&(Ur=hr(a),Vt.killTweensOf(y),Ur=0),$i(m,hr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!g&&a._start===kt(m._time)&&ni(d)&&Sx(hr(a))&&m.data!=="nested")&&(a._tTime=-Ct,a.render(Math.max(0,-h)||0)),p&&hm(hr(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,h=r<0,d=r>l-Ct&&!h?l:r<Ct?0:r,u,f,g,_,p,m,y,b;if(!c)bx(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+r,s,o);if(u=kt(d%_),d===l?(g=this._repeat,u=c):(p=kt(d/_),g=~~p,g&&g===p?(u=c,g--):u>c&&(u=c)),m=this._yoyo&&g&1,m&&(u=c-u),p=oo(this._tTime,_),u===a&&!o&&this._initted&&g===p)return this._tTime=d,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(kt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(um(this,h?r:u,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var x=u<a;if(x!==this._inv){var M=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=M?(x?-1:1)/M:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(u/c);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!p&&(ai(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;b&&b.render(r<0?r:b._dur*b._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&nf(this,r,s,o),ai(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&ai(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&nf(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Br(this,1),!s&&!(h&&!a)&&(d||a||m)&&(ai(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){ya||ti.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Tf(this,c),h=this._ease(c/this._dur),Hx(this,r,s,o,a,h,c,l)?this.resetTo(r,s,o,a,1):(uc(this,0),this.parent||lm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?fa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!bn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ur&&Ur.vars.overwrite!==!0)._first||fa(this),this.parent&&o!==this.timeline.totalDuration()&&ao(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Ei(r):a,c=this._ptLookup,h=this._pt,d,u,f,g,_,p,m;if((!s||s==="all")&&vx(a,l))return s==="all"&&(this._pt=0),fa(this);for(d=this._op=this._op||[],s!=="all"&&(ln(s)&&(_={},Xn(s,function(y){return _[y]=1}),s=_),s=Wx(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){u=c[m],s==="all"?(d[m]=s,g=u,f={}):(f=d[m]=d[m]||{},g=s);for(_ in g)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&cc(this,p,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&fa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ma(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return ma(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Vt.killTweensOf(r,s,o)},e})(Sa);ci(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xn("staggerTo,staggerFrom,staggerFromTo",function(i){Qt[i]=function(){var e=new Pn,t=sf.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var wf=function(e,t,n){return e[t]=n},Em=function(e,t,n){return e[t](n)},Yx=function(e,t,n,r){return e[t](r.fp,n)},qx=function(e,t,n){return e.setAttribute(t,n)},fc=function(e,t){return Yt(e[t])?Em:ac(e[t])&&e.setAttribute?qx:wf},Am=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Zx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ef=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Af=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Jx=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},$x=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?cc(this,t,"_pt"):t.dep||(n=1),t=r;return!n},Kx=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Cf=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},Yn=(function(){function i(t,n,r,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Am,this.d=l||this,this.set=c||wf,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Kx,this.m=n,this.mt=s,this.tween=r},i})();Xn(gf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return mf[i]=1});li.TweenMax=li.TweenLite=Qt;li.TimelineLite=li.TimelineMax=Pn;Vt=new Pn({sortChildren:!1,defaults:_a,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ii.stringFilter=yf;var gs=[],tc={},Qx=[],Kp=0,jx=0,Ku=function(e){return(tc[e]||Qx).map(function(t){return t()})},cf=function(){var e=Date.now(),t=[];e-Kp>2&&(Ku("matchMediaInit"),gs.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Ji.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Ku("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Kp=e,Ku("matchMedia"))},Cm=(function(){function i(t,n){this.selector=n&&of(n),this.data=[],this._r=[],this.isReverted=!1,this.id=jx++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Yt(n)&&(s=r,r=n,n=Yt);var o=this,a=function(){var c=Ft,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=of(s)),Ft=o,d=r.apply(o,arguments),Yt(d)&&o._r.push(d),Ft=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Yt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=Ft;Ft=null,n(this),Ft=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Qt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Pn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=gs.length;o--;)gs[o].id===this.id&&gs.splice(o,1)},e.revert=function(n){this.kill(n||{})},i})(),ev=(function(){function i(t){this.contexts=[],this.scope=t,Ft&&Ft.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Ki(n)||(n={matches:n});var o=new Cm(0,s||this.scope),a=o.conditions={},l,c,h;Ft&&!o.selector&&(o.selector=Ft.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?h=1:(l=Ji.matchMedia(n[c]),l&&(gs.indexOf(o)<0&&gs.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(cf):l.addEventListener("change",cf)));return h&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),oc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return ym(r)})},timeline:function(e){return new Pn(e)},getTweensOf:function(e,t){return Vt.getTweensOf(e,t)},getProperty:function(e,t,n,r){ln(e)&&(e=Ei(e)[0]);var s=Fr(e||{}).get,o=n?am:om;return n==="native"&&(n=""),e&&(t?o((ei[t]&&ei[t].get||s)(e,t,n,r)):function(a,l,c){return o((ei[a]&&ei[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Ei(e),e.length>1){var r=e.map(function(h){return Ln.quickSetter(h,t,n)}),s=r.length;return function(h){for(var d=s;d--;)r[d](h)}}e=e[0]||{};var o=ei[t],a=Fr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var d=new o;ro._pt=0,d.init(e,n?h+n:h,ro,0,[e]),d.render(1,d),ro._pt&&Af(1,ro)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var r,s=Ln.to(e,ci((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return Vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ms(e.ease,_a.ease)),Yp(_a,e||{})},config:function(e){return Yp(ii,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ei[a]&&!li[a]&&xa(t+" effect requires "+a+" plugin.")}),qu[t]=function(a,l,c){return n(Ei(a),ci(l||{},s),c)},o&&(Pn.prototype[t]=function(a,l,c){return this.add(qu[t](a,Ki(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){_t[e]=ms(t)},parseEase:function(e,t){return arguments.length?ms(e,t):_t},getById:function(e){return Vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Pn(e),r,s;for(n.smoothChildTiming=ni(e.smoothChildTiming),Vt.remove(n),n._dp=0,n._time=n._tTime=Vt._time,r=Vt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Qt&&r.vars.onComplete===r._targets[0]))&&$i(n,r,r._start-r._delay),r=s;return $i(Vt,n,0),n},context:function(e,t){return e?new Cm(e,t):Ft},matchMedia:function(e){return new ev(e)},matchMediaRefresh:function(){return gs.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||cf()},addEventListener:function(e,t){var n=tc[e]||(tc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=tc[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Ix,wrapYoyo:Lx,distribute:pm,random:gm,snap:mm,normalize:Px,getUnit:Tn,clamp:Ex,splitColor:Sm,toArray:Ei,selector:of,mapRange:xm,pipe:Cx,unitize:Rx,interpolate:Dx,shuffle:dm},install:nm,effects:qu,ticker:ti,updateRoot:Pn.updateRoot,plugins:ei,globalTimeline:Vt,core:{PropTween:Yn,globals:im,Tween:Qt,Timeline:Pn,Animation:Sa,getCache:Fr,_removeLinkedListItem:cc,reverting:function(){return bn},context:function(e){return e&&Ft&&(Ft.data.push(e),e._ctx=Ft),Ft},suppressOverwrites:function(e){return hf=e}}};Xn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return oc[i]=Qt[i]});ti.add(Pn.updateRoot);ro=oc.to({},{duration:0});var tv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},nv=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=tv(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},Qu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(ln(s)&&(l={},Xn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}nv(a,s)}}}},Ln=oc.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)bn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Qu("roundProps",af),Qu("modifiers"),Qu("snap",mm))||oc;Qt.version=Pn.version=Ln.version="3.15.0";tm=1;uf()&&lo();var iv=_t.Power0,rv=_t.Power1,sv=_t.Power2,ov=_t.Power3,av=_t.Power4,lv=_t.Linear,cv=_t.Quad,hv=_t.Cubic,uv=_t.Quart,fv=_t.Quint,dv=_t.Strong,pv=_t.Elastic,mv=_t.Back,gv=_t.SteppedEase,_v=_t.Bounce,xv=_t.Sine,vv=_t.Expo,yv=_t.Circ;var Rm,kr,uo,Nf,bs,Sv,Pm,Uf,Mv=function(){return typeof window<"u"},pr={},Ms=180/Math.PI,fo=Math.PI/180,ho=Math.atan2,Im=1e8,Of=/([A-Z])/g,bv=/(left|right|width|margin|padding|x)/i,Tv=/[\s,\(]\S/,Qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Pf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},wv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ev=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Av=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Cv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},zm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},km=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Rv=function(e,t,n){return e.style[t]=n},Pv=function(e,t,n){return e.style.setProperty(t,n)},Iv=function(e,t,n){return e._gsap[t]=n},Lv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Dv=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Nv=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Gt="transform",ri=Gt+"Origin",Uv=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in pr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=dr(r,a)}):this.tfm[e]=o.x?o[e]:dr(r,e),e===ri&&(this.tfm.zOrigin=o.zOrigin);else return Qi.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Gt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ri,t,"")),e=Gt}(s||t)&&this.props.push(e,t,s[e])},Vm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ov=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Of,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Uf(),(!s||!s.isStart)&&!n[Gt]&&(Vm(n),r.zOrigin&&n[ri]&&(n[ri]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Gm=function(e,t){var n={target:e,props:[],revert:Ov,save:Uv};return e._gsap||Ln.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Hm,If=function(e,t){var n=kr.createElementNS?kr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):kr.createElement(e);return n&&n.style?n:kr.createElement(e)},hi=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Of,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,po(t)||t,1)||""},Lm="O,Moz,ms,Ms,Webkit".split(","),po=function(e,t,n){var r=t||bs,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Lm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Lm[o]:"")+e},Lf=function(){Mv()&&window.document&&(Rm=window,kr=Rm.document,uo=kr.documentElement,bs=If("div")||{style:{}},Sv=If("div"),Gt=po(Gt),ri=Gt+"Origin",bs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hm=!!po("perspective"),Uf=Ln.core.reverting,Nf=1)},Dm=function(e){var t=e.ownerSVGElement,n=If("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),uo.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),uo.removeChild(n),s},Nm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Wm=function(e){var t,n;try{t=e.getBBox()}catch{t=Dm(e),n=1}return t&&(t.width||t.height)||n||(t=Dm(e)),t&&!t.width&&!t.x&&!t.y?{x:+Nm(e,["x","cx","x1"])||0,y:+Nm(e,["y","cy","y1"])||0,width:0,height:0}:t},Xm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Wm(e))},Gr=function(e,t){if(t){var n=e.style,r;t in pr&&t!==ri&&(t=Gt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Of,"-$1").toLowerCase())):n.removeAttribute(t)}},Vr=function(e,t,n,r,s,o){var a=new Yn(e._pt,t,n,0,1,o?km:zm);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Um={deg:1,rad:1,turn:1},Fv={grid:1,flex:1},Hr=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=bs.style,l=bv.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=r==="px",f=r==="%",g,_,p,m;if(r===o||!s||Um[r]||Um[o])return s;if(o!=="px"&&!u&&(s=i(e,t,n,"px")),m=e.getCTM&&Xm(e),(f||o==="%")&&(pr[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[h],qt(f?s/g*d:s/100*g);if(a[l?"width":"height"]=d+(u?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===kr||!_.appendChild)&&(_=kr.body),p=_._gsap,p&&f&&p.width&&l&&p.time===ti.time&&!p.uncache)return qt(s/p.width*d);if(f&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=d+r,g=e[h],y?e.style[t]=y:Gr(e,t)}else(f||o==="%")&&!Fv[hi(_,"display")]&&(a.position=hi(e,"position")),_===e&&(a.position="static"),_.appendChild(bs),g=bs[h],_.removeChild(bs),a.position="absolute";return l&&f&&(p=Fr(_),p.time=ti.time,p.width=_[h]),qt(u?g*s/d:g&&s?d/g*s:0)},dr=function(e,t,n,r){var s;return Nf||Lf(),t in Qi&&t!=="transform"&&(t=Qi[t],~t.indexOf(",")&&(t=t.split(",")[0])),pr[t]&&t!=="transform"?(s=wa(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:pc(hi(e,ri))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=dc[t]&&dc[t](e,t,n)||hi(e,t)||xf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Hr(e,t,s,n)+n:s},Bv=function(e,t,n,r){if(!n||n==="none"){var s=po(t,e,1),o=s&&hi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=hi(e,"borderTopColor"))}var a=new Yn(this._pt,e.style,t,0,1,Ef),l=0,c=0,h,d,u,f,g,_,p,m,y,b,x,M;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=hi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=hi(e,t)||r,_?e.style[t]=_:Gr(e,t)),h=[n,r],yf(h),n=h[0],r=h[1],u=n.match(_s)||[],M=r.match(_s)||[],M.length){for(;d=_s.exec(r);)p=d[0],y=r.substring(l,d.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(_=u[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),p.charAt(1)==="="&&(p=xs(f,p)+x),m=parseFloat(p),b=p.substr((m+"").length),l=_s.lastIndex-b.length,b||(b=b||ii.units[t]||x,l===r.length&&(r+=b,a.e+=b)),x!==b&&(f=Hr(e,t,_,b)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:f,c:m-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?km:zm;return df.test(r)&&(a.e=0),this._pt=a,a},Om={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},zv=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Om[n]||n,t[1]=Om[r]||r,t.join(" ")},kv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],pr[a]&&(l=1,a=a==="transformOrigin"?ri:Gt),Gr(n,a);l&&(Gr(n,Gt),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",wa(n,1),o.uncache=1,Vm(r)))}},dc={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Yn(e._pt,t,n,0,0,kv);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ta=[1,0,0,1,0,0],Ym={},qm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Fm=function(e){var t=hi(e,Gt);return qm(t)?Ta:t.substr(7).match(ff).map(qt)},Ff=function(e,t){var n=e._gsap||Fr(e),r=e.style,s=Fm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ta:s):(s===Ta&&!e.offsetParent&&e!==uo&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,uo.appendChild(e)),s=Fm(e),l?r.display=l:Gr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):uo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Df=function(e,t,n,r,s,o){var a=e._gsap,l=s||Ff(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],y=l[5],b=t.split(" "),x=parseFloat(b[0])||0,M=parseFloat(b[1])||0,T,A,v,w;n?l!==Ta&&(A=f*p-g*_)&&(v=x*(p/A)+M*(-_/A)+(_*y-p*m)/A,w=x*(-g/A)+M*(f/A)-(f*y-g*m)/A,x=v,M=w):(T=Wm(e),x=T.x+(~b[0].indexOf("%")?x/100*T.width:x),M=T.y+(~(b[1]||b[0]).indexOf("%")?M/100*T.height:M)),r||r!==!1&&a.smooth?(m=x-c,y=M-h,a.xOffset=d+(m*f+y*_)-m,a.yOffset=u+(m*g+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=M,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[ri]="0px 0px",o&&(Vr(o,a,"xOrigin",c,x),Vr(o,a,"yOrigin",h,M),Vr(o,a,"xOffset",d,a.xOffset),Vr(o,a,"yOffset",u,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+M)},wa=function(e,t){var n=e._gsap||new Sf(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=hi(e,ri)||"0",h,d,u,f,g,_,p,m,y,b,x,M,T,A,v,w,R,N,D,V,I,B,X,G,te,F,C,Y,de,ae,Pe,Ue;return h=d=u=_=p=m=y=b=x=0,f=g=1,n.svg=!!(e.getCTM&&Xm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Gt]!=="none"?l[Gt]:"")),r.scale=r.rotate=r.translate="none"),A=Ff(e,n.svg),n.svg&&(n.uncache?(te=e.getBBox(),c=n.xOrigin-te.x+"px "+(n.yOrigin-te.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),Df(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,T=n.yOrigin||0,A!==Ta&&(N=A[0],D=A[1],V=A[2],I=A[3],h=B=A[4],d=X=A[5],A.length===6?(f=Math.sqrt(N*N+D*D),g=Math.sqrt(I*I+V*V),_=N||D?ho(D,N)*Ms:0,y=V||I?ho(V,I)*Ms+_:0,y&&(g*=Math.abs(Math.cos(y*fo))),n.svg&&(h-=M-(M*N+T*V),d-=T-(M*D+T*I))):(Ue=A[6],ae=A[7],C=A[8],Y=A[9],de=A[10],Pe=A[11],h=A[12],d=A[13],u=A[14],v=ho(Ue,de),p=v*Ms,v&&(w=Math.cos(-v),R=Math.sin(-v),G=B*w+C*R,te=X*w+Y*R,F=Ue*w+de*R,C=B*-R+C*w,Y=X*-R+Y*w,de=Ue*-R+de*w,Pe=ae*-R+Pe*w,B=G,X=te,Ue=F),v=ho(-V,de),m=v*Ms,v&&(w=Math.cos(-v),R=Math.sin(-v),G=N*w-C*R,te=D*w-Y*R,F=V*w-de*R,Pe=I*R+Pe*w,N=G,D=te,V=F),v=ho(D,N),_=v*Ms,v&&(w=Math.cos(v),R=Math.sin(v),G=N*w+D*R,te=B*w+X*R,D=D*w-N*R,X=X*w-B*R,N=G,B=te),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=qt(Math.sqrt(N*N+D*D+V*V)),g=qt(Math.sqrt(X*X+Ue*Ue)),v=ho(B,X),y=Math.abs(v)>2e-4?v*Ms:0,x=Pe?1/(Pe<0?-Pe:Pe):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!qm(hi(e,Gt)),G&&e.setAttribute("transform",G))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=qt(f),n.scaleY=qt(g),n.rotation=qt(_)+a,n.rotationX=qt(p)+a,n.rotationY=qt(m)+a,n.skewX=y+a,n.skewY=b+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[ri]=pc(c)),n.xOffset=n.yOffset=0,n.force3D=ii.force3D,n.renderTransform=n.svg?Gv:Hm?Zm:Vv,n.uncache=0,n},pc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Rf=function(e,t,n){var r=Tn(t);return qt(parseFloat(t)+parseFloat(Hr(e,"x",n+"px",r)))+r},Vv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Zm(e,t)},ys="0deg",ba="0px",Ss=") ",Zm=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,b=n.zOrigin,x="",M=m==="auto"&&e&&e!==1||m===!0;if(b&&(d!==ys||h!==ys)){var T=parseFloat(h)*fo,A=Math.sin(T),v=Math.cos(T),w;T=parseFloat(d)*fo,w=Math.cos(T),o=Rf(y,o,A*w*-b),a=Rf(y,a,-Math.sin(T)*-b),l=Rf(y,l,v*w*-b+b)}p!==ba&&(x+="perspective("+p+Ss),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(M||o!==ba||a!==ba||l!==ba)&&(x+=l!==ba||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ss),c!==ys&&(x+="rotate("+c+Ss),h!==ys&&(x+="rotateY("+h+Ss),d!==ys&&(x+="rotateX("+d+Ss),(u!==ys||f!==ys)&&(x+="skew("+u+", "+f+Ss),(g!==1||_!==1)&&(x+="scale("+g+", "+_+Ss),y.style[Gt]=x||"translate(0, 0)"},Gv=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,b=parseFloat(o),x=parseFloat(a),M,T,A,v,w;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=fo,c*=fo,M=Math.cos(l)*d,T=Math.sin(l)*d,A=Math.sin(l-c)*-u,v=Math.cos(l-c)*u,c&&(h*=fo,w=Math.tan(c-h),w=Math.sqrt(1+w*w),A*=w,v*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),M*=w,T*=w)),M=qt(M),T=qt(T),A=qt(A),v=qt(v)):(M=d,v=u,T=A=0),(b&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(b=Hr(f,"x",o,"px"),x=Hr(f,"y",a,"px")),(g||_||p||m)&&(b=qt(b+g-(g*M+_*A)+p),x=qt(x+_-(g*T+_*v)+m)),(r||s)&&(w=f.getBBox(),b=qt(b+r/100*w.width),x=qt(x+s/100*w.height)),w="matrix("+M+","+T+","+A+","+v+","+b+","+x+")",f.setAttribute("transform",w),y&&(f.style[Gt]=w)},Hv=function(e,t,n,r,s){var o=360,a=ln(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ms:1),c=l-r,h=r+c+"deg",d,u;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Im)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Im)%o-~~(c/o)*o)),e._pt=u=new Yn(e._pt,t,n,r,c,wv),u.e=h,u.u="deg",e._props.push(n),u},Bm=function(e,t){for(var n in t)e[n]=t[n];return e},Wv=function(e,t,n){var r=Bm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Gt]=t,a=wa(n,1),Gr(n,Gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Gt],o[Gt]=t,a=wa(n,1),o[Gt]=c);for(l in pr)c=r[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=Tn(c),g=Tn(h),d=f!==g?Hr(n,l,c,g):parseFloat(c),u=parseFloat(h),e._pt=new Yn(e._pt,a,l,d,u-d,Pf),e._pt.u=g||0,e._props.push(l));Bm(a,r)};Xn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});dc[e>1?"border"+i:i]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(g){return dr(a,g,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(g,_){return f[g]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var Bf={name:"css",register:Lf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,d,u,f,g,_,p,m,y,b,x,M,T,A,v,w;Nf||Lf(),this.styles=this.styles||Gm(e),v=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(ei[_]&&bf(_,t,n,r,e,s)))){if(f=typeof h,g=dc[_],f==="function"&&(h=h.call(n,r,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=co(h)),g)g(this,e,_,h,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",ur.lastIndex=0,ur.test(c)||(p=Tn(c),m=Tn(h),m?p!==m&&(c=Hr(e,_,c,m)+m):p&&(h+=p)),this.add(a,"setProperty",c,h,r,s,0,0,_),o.push(_),v.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],ln(c)&&~c.indexOf("random(")&&(c=co(c)),Tn(c+"")||c==="auto"||(c+=ii.units[_]||Tn(dr(e,_))||""),(c+"").charAt(1)==="="&&(c=dr(e,_))):c=dr(e,_),u=parseFloat(c),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),d=parseFloat(h),_ in Qi&&(_==="autoAlpha"&&(u===1&&dr(e,"visibility")==="hidden"&&d&&(u=0),v.push("visibility",0,a.visibility),Vr(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Qi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in pr,b){if(this.styles.save(_),w=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=hi(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=h,h=hi(e,"perspective"),R?e.style.perspective=R:Gr(e,"perspective")}d=parseFloat(h)}if(x||(M=e._gsap,M.renderTransform&&!t.parseTransform||wa(e,t.parseTransform),T=t.smoothOrigin!==!1&&M.smooth,x=this._pt=new Yn(this._pt,a,Gt,0,1,M.renderTransform,M,0,-1),x.dep=1),_==="scale")this._pt=new Yn(this._pt,M,"scaleY",M.scaleY,(y?xs(M.scaleY,y+d):d)-M.scaleY||0,Pf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(ri,0,a[ri]),h=zv(h),M.svg?Df(e,h,0,T,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==M.zOrigin&&Vr(this,M,"zOrigin",M.zOrigin,m),Vr(this,a,_,pc(c),pc(h)));continue}else if(_==="svgOrigin"){Df(e,h,1,T,0,this);continue}else if(_ in Ym){Hv(this,M,_,u,y?xs(u,y+h):h);continue}else if(_==="smoothOrigin"){Vr(this,M,"smooth",M.smooth,h);continue}else if(_==="force3D"){M[_]=h;continue}else if(_==="transform"){Wv(this,h,e);continue}}else _ in a||(_=po(_)||_);if(b||(d||d===0)&&(u||u===0)&&!Tv.test(h)&&_ in a)p=(c+"").substr((u+"").length),d||(d=0),m=Tn(h)||(_ in ii.units?ii.units[_]:p),p!==m&&(u=Hr(e,_,c,m)),this._pt=new Yn(this._pt,b?M:a,_,u,(y?xs(u,y+d):d)-u,!b&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?Cv:Pf),this._pt.u=m||0,b&&w!==h?(this._pt.b=c,this._pt.e=w,this._pt.r=Av):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Ev);else if(_ in a)Bv.call(this,e,_,c,y?y+h:h);else if(_ in e)this.add(e,_,c||e[_],y?y+h:h,r,s);else if(_!=="parseTransform"){lc(_,h);continue}b||(_ in a?v.push(_,0,a[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,c||e[_])),o.push(_)}}A&&Cf(this)},render:function(e,t){if(t.tween._time||!Uf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:dr,aliases:Qi,getSetter:function(e,t,n){var r=Qi[t];return r&&r.indexOf(",")<0&&(t=r),t in pr&&t!==ri&&(e._gsap.x||dr(e,"x"))?n&&Pm===n?t==="scale"?Lv:Iv:(Pm=n||{})&&(t==="scale"?Dv:Nv):e.style&&!ac(e.style[t])?Rv:~t.indexOf("-")?Pv:fc(e,t)},core:{_removeProperty:Gr,_getMatrix:Ff}};Ln.utils.checkPrefix=po;Ln.core.getStyleSaver=Gm;(function(i,e,t,n){var r=Xn(i+","+e+","+t,function(s){pr[s]=1});Xn(e,function(s){ii.units[s]="deg",Ym[s]=1}),Qi[r[13]]=i+","+e,Xn(n,function(s){var o=s.split(":");Qi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){ii.units[i]="px"});Ln.registerPlugin(Bf);var Ai=Ln.registerPlugin(Bf)||Ln,nE=Ai.core.Tween;function Jm(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function Xv(i,e,t){return e&&Jm(i.prototype,e),t&&Jm(i,t),i}var wn,_c,Yv,ui,Wr,Xr,go,Km,Ts,_o,Qm,mr,Ui,jm,eg=function(){return wn||typeof window<"u"&&(wn=window.gsap)&&wn.registerPlugin&&wn},tg=1,mo=[],lt=[],Oi=[],Aa=Date.now,zf=function(e,t){return t},qv=function(){var e=_o.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,lt),r.push.apply(r,Oi),lt=n,Oi=r,zf=function(o,a){return t[o](a)}},_r=function(e,t){return~Oi.indexOf(e)&&Oi[Oi.indexOf(e)+1][t]},Ca=function(e){return!!~Qm.indexOf(e)},Zn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},qn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},mc="scrollLeft",gc="scrollTop",kf=function(){return mr&&mr.isPressed||lt.cache++},xc=function(e,t){var n=function r(s){if(s||s===0){tg&&(ui.history.scrollRestoration="manual");var o=mr&&mr.isPressed;s=r.v=Math.round(s)||(mr&&mr.iOS?1:0),e(s),r.cacheID=lt.cache,o&&zf("ss",s)}else(t||lt.cache!==r.cacheID||zf("ref"))&&(r.cacheID=lt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Dn={s:mc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:xc(function(i){return arguments.length?ui.scrollTo(i,nn.sc()):ui.pageXOffset||Wr[mc]||Xr[mc]||go[mc]||0})},nn={s:gc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Dn,sc:xc(function(i){return arguments.length?ui.scrollTo(Dn.sc(),i):ui.pageYOffset||Wr[gc]||Xr[gc]||go[gc]||0})},Jn=function(e,t){return(t&&t._ctx&&t._ctx.selector||wn.utils.toArray)(e)[0]||(typeof e=="string"&&wn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Zv=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},gr=function(e,t){var n=t.s,r=t.sc;Ca(e)&&(e=Wr.scrollingElement||Xr);var s=lt.indexOf(e),o=r===nn.sc?1:2;!~s&&(s=lt.push(e)-1),lt[s+o]||Zn(e,"scroll",kf);var a=lt[s+o],l=a||(lt[s+o]=xc(_r(e,n),!0)||(Ca(e)?r:xc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=wn.getProperty(e,"scrollBehavior")==="smooth"),l},vc=function(e,t,n){var r=e,s=e,o=Aa(),a=o,l=t||50,c=Math.max(500,l*3),h=function(g,_){var p=Aa();_||p-o>l?(s=r,r=g,a=o,o=p):n?r+=g:r=s+(g-s)/(p-a)*(o-a)},d=function(){s=r=n?0:r,a=o=0},u=function(g){var _=a,p=s,m=Aa();return(g||g===0)&&g!==r&&h(g),o===a||m-a>c?0:(r+(n?p:-p))/((n?m:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},Ea=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},$m=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},ng=function(){_o=wn.core.globals().ScrollTrigger,_o&&_o.core&&qv()},ig=function(e){return wn=e||eg(),!_c&&wn&&typeof document<"u"&&document.body&&(ui=window,Wr=document,Xr=Wr.documentElement,go=Wr.body,Qm=[ui,Wr,Xr,go],Yv=wn.utils.clamp,jm=wn.core.context||function(){},Ts="onpointerenter"in go?"pointer":"mouse",Km=Zt.isTouch=ui.matchMedia&&ui.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ui||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ui=Zt.eventTypes=("ontouchstart"in Xr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Xr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return tg=0},500),_c=1),_o||ng(),_c};Dn.op=nn;lt.cache=0;var Zt=(function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){_c||ig(wn)||console.warn("Please gsap.registerPlugin(Observer)"),_o||ng();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,y=n.onDrag,b=n.onPress,x=n.onRelease,M=n.onRight,T=n.onLeft,A=n.onUp,v=n.onDown,w=n.onChangeX,R=n.onChangeY,N=n.onChange,D=n.onToggleX,V=n.onToggleY,I=n.onHover,B=n.onHoverEnd,X=n.onMove,G=n.ignoreCheck,te=n.isNormalizer,F=n.onGestureStart,C=n.onGestureEnd,Y=n.onWheel,de=n.onEnable,ae=n.onDisable,Pe=n.onClick,Ue=n.scrollSpeed,Te=n.capture,$=n.allowClicks,ne=n.lockAxis,oe=n.onLockAxis;this.target=a=Jn(a)||Xr,this.vars=n,f&&(f=wn.utils.toArray(f)),r=r||1e-9,s=s||0,g=g||1,Ue=Ue||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ui.getComputedStyle(go).lineHeight)||22);var Ce,me,Re,Ne,j,W,Q,L=this,le=0,Le=0,Fe=n.passive||!h&&n.passive!==!1,Ee=gr(a,Dn),Oe=gr(a,nn),U=Ee(),nt=Oe(),Ge=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ui[0]==="pointerdown",P=Ca(a),S=a.ownerDocument||Wr,H=[0,0,0],q=[0,0,0],ee=0,xe=function(){return ee=Aa()},fe=function(he,$e){return(L.event=he)&&f&&Zv(he.target,f)||$e&&Ge&&he.pointerType!=="touch"||G&&G(he,$e)},ie=function(){L._vx.reset(),L._vy.reset(),me.pause(),d&&d(L)},se=function(){var he=L.deltaX=$m(H),$e=L.deltaY=$m(q),ue=Math.abs(he)>=r,Ke=Math.abs($e)>=r;N&&(ue||Ke)&&N(L,he,$e,H,q),ue&&(M&&L.deltaX>0&&M(L),T&&L.deltaX<0&&T(L),w&&w(L),D&&L.deltaX<0!=le<0&&D(L),le=L.deltaX,H[0]=H[1]=H[2]=0),Ke&&(v&&L.deltaY>0&&v(L),A&&L.deltaY<0&&A(L),R&&R(L),V&&L.deltaY<0!=Le<0&&V(L),Le=L.deltaY,q[0]=q[1]=q[2]=0),(Ne||Re)&&(X&&X(L),Re&&(p&&Re===1&&p(L),y&&y(L),Re=0),Ne=!1),W&&!(W=!1)&&oe&&oe(L),j&&(Y(L),j=!1),Ce=0},Se=function(he,$e,ue){H[ue]+=he,q[ue]+=$e,L._vx.update(he),L._vy.update($e),c?Ce||(Ce=requestAnimationFrame(se)):se()},He=function(he,$e){ne&&!Q&&(L.axis=Q=Math.abs(he)>Math.abs($e)?"x":"y",W=!0),Q!=="y"&&(H[2]+=he,L._vx.update(he,!0)),Q!=="x"&&(q[2]+=$e,L._vy.update($e,!0)),c?Ce||(Ce=requestAnimationFrame(se)):se()},Me=function(he){if(!fe(he,1)){he=Ea(he,h);var $e=he.clientX,ue=he.clientY,Ke=$e-L.x,We=ue-L.y,it=L.isDragging;L.x=$e,L.y=ue,(it||(Ke||We)&&(Math.abs(L.startX-$e)>=s||Math.abs(L.startY-ue)>=s))&&(Re||(Re=it?2:1),it||(L.isDragging=!0),He(Ke,We))}},ye=L.onPress=function(pe){fe(pe,1)||pe&&pe.button||(L.axis=Q=null,me.pause(),L.isPressed=!0,pe=Ea(pe),le=Le=0,L.startX=L.x=pe.clientX,L.startY=L.y=pe.clientY,L._vx.reset(),L._vy.reset(),Zn(te?a:S,Ui[1],Me,Fe,!0),L.deltaX=L.deltaY=0,b&&b(L))},_e=L.onRelease=function(pe){if(!fe(pe,1)){qn(te?a:S,Ui[1],Me,!0);var he=!isNaN(L.y-L.startY),$e=L.isDragging,ue=$e&&(Math.abs(L.x-L.startX)>3||Math.abs(L.y-L.startY)>3),Ke=Ea(pe);!ue&&he&&(L._vx.reset(),L._vy.reset(),h&&$&&wn.delayedCall(.08,function(){if(Aa()-ee>300&&!pe.defaultPrevented){if(pe.target.click)pe.target.click();else if(S.createEvent){var We=S.createEvent("MouseEvents");We.initMouseEvent("click",!0,!0,ui,1,Ke.screenX,Ke.screenY,Ke.clientX,Ke.clientY,!1,!1,!1,!1,0,null),pe.target.dispatchEvent(We)}}})),L.isDragging=L.isGesturing=L.isPressed=!1,d&&$e&&!te&&me.restart(!0),Re&&se(),m&&$e&&m(L),x&&x(L,ue)}},Ze=function(he){return he.touches&&he.touches.length>1&&(L.isGesturing=!0)&&F(he,L.isDragging)},Qe=function(){return(L.isGesturing=!1)||C(L)},z=function(he){if(!fe(he)){var $e=Ee(),ue=Oe();Se(($e-U)*Ue,(ue-nt)*Ue,1),U=$e,nt=ue,d&&me.restart(!0)}},ve=function(he){if(!fe(he)){he=Ea(he,h),Y&&(j=!0);var $e=(he.deltaMode===1?l:he.deltaMode===2?ui.innerHeight:1)*g;Se(he.deltaX*$e,he.deltaY*$e,0),d&&!te&&me.restart(!0)}},re=function(he){if(!fe(he)){var $e=he.clientX,ue=he.clientY,Ke=$e-L.x,We=ue-L.y;L.x=$e,L.y=ue,Ne=!0,d&&me.restart(!0),(Ke||We)&&He(Ke,We)}},be=function(he){L.event=he,I(L)},Ae=function(he){L.event=he,B(L)},ce=function(he){return fe(he)||Ea(he,h)&&Pe(L)};me=L._dc=wn.delayedCall(u||.25,ie).pause(),L.deltaX=L.deltaY=0,L._vx=vc(0,50,!0),L._vy=vc(0,50,!0),L.scrollX=Ee,L.scrollY=Oe,L.isDragging=L.isGesturing=L.isPressed=!1,jm(this),L.enable=function(pe){return L.isEnabled||(Zn(P?S:a,"scroll",kf),o.indexOf("scroll")>=0&&Zn(P?S:a,"scroll",z,Fe,Te),o.indexOf("wheel")>=0&&Zn(a,"wheel",ve,Fe,Te),(o.indexOf("touch")>=0&&Km||o.indexOf("pointer")>=0)&&(Zn(a,Ui[0],ye,Fe,Te),Zn(S,Ui[2],_e),Zn(S,Ui[3],_e),$&&Zn(a,"click",xe,!0,!0),Pe&&Zn(a,"click",ce),F&&Zn(S,"gesturestart",Ze),C&&Zn(S,"gestureend",Qe),I&&Zn(a,Ts+"enter",be),B&&Zn(a,Ts+"leave",Ae),X&&Zn(a,Ts+"move",re)),L.isEnabled=!0,L.isDragging=L.isGesturing=L.isPressed=Ne=Re=!1,L._vx.reset(),L._vy.reset(),U=Ee(),nt=Oe(),pe&&pe.type&&ye(pe),de&&de(L)),L},L.disable=function(){L.isEnabled&&(mo.filter(function(pe){return pe!==L&&Ca(pe.target)}).length||qn(P?S:a,"scroll",kf),L.isPressed&&(L._vx.reset(),L._vy.reset(),qn(te?a:S,Ui[1],Me,!0)),qn(P?S:a,"scroll",z,Te),qn(a,"wheel",ve,Te),qn(a,Ui[0],ye,Te),qn(S,Ui[2],_e),qn(S,Ui[3],_e),qn(a,"click",xe,!0),qn(a,"click",ce),qn(S,"gesturestart",Ze),qn(S,"gestureend",Qe),qn(a,Ts+"enter",be),qn(a,Ts+"leave",Ae),qn(a,Ts+"move",re),L.isEnabled=L.isPressed=L.isDragging=!1,ae&&ae(L))},L.kill=L.revert=function(){L.disable();var pe=mo.indexOf(L);pe>=0&&mo.splice(pe,1),mr===L&&(mr=0)},mo.push(L),te&&Ca(a)&&(mr=L),L.enable(_)},Xv(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();Zt.version="3.15.0";Zt.create=function(i){return new Zt(i)};Zt.register=ig;Zt.getAll=function(){return mo.slice()};Zt.getById=function(i){return mo.filter(function(e){return e.vars.id===i})[0]};eg()&&wn.registerPlugin(Zt);var ke,So,ft,bt,pi,St,ed,Uc,Ga,Ua,Pa,yc,Nn,Bc,qf,Kn,rg,sg,Mo,Sg,Vf,Mg,$n,Zf,bg,Tg,Yr,Jf,td,bo,nd,Oa,$f,Gf,Sc=1,Un=Date.now,Hf=Un(),Pi=0,Ia=0,og=function(e,t,n){var r=di(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},ag=function(e,t){return t&&(!di(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Jv=function i(){return Ia&&requestAnimationFrame(i)},lg=function(){return Bc=1},cg=function(){return Bc=0},ji=function(e){return e},La=function(e){return Math.round(e*1e5)/1e5||0},wg=function(){return typeof window<"u"},Eg=function(){return ke||wg()&&(ke=window.gsap)&&ke.registerPlugin&&ke},Ps=function(e){return!!~ed.indexOf(e)},Ag=function(e){return(e==="Height"?nd:ft["inner"+e])||pi["client"+e]||St["client"+e]},Cg=function(e){return _r(e,"getBoundingClientRect")||(Ps(e)?function(){return Nc.width=ft.innerWidth,Nc.height=nd,Nc}:function(){return xr(e)})},$v=function(e,t,n){var r=n.d,s=n.d2,o=n.a;return(o=_r(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?Ag(s):e["client"+s])||0}},Kv=function(e,t){return!t||~Oi.indexOf(e)?Cg(e):function(){return Nc}},er=function(e,t){var n=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+r)&&(o=_r(e,n))?o()-Cg(e)()[s]:Ps(e)?(pi[n]||St[n])-Ag(r):e[n]-e["offset"+r])},Mc=function(e,t){for(var n=0;n<Mo.length;n+=3)(!t||~t.indexOf(Mo[n+1]))&&e(Mo[n],Mo[n+1],Mo[n+2])},di=function(e){return typeof e=="string"},On=function(e){return typeof e=="function"},Da=function(e){return typeof e=="number"},ws=function(e){return typeof e=="object"},Ra=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},xo=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},vo=Math.abs,Rg="left",Pg="top",id="right",rd="bottom",As="width",Cs="height",Fa="Right",Ba="Left",za="Top",ka="Bottom",rn="padding",Ci="margin",wo="Width",sd="Height",cn="px",Ri=function(e){return ft.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Qv=function(e){var t=Ri(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},hg=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},xr=function(e,t){var n=t&&Ri(e)[qf]!=="matrix(1, 0, 0, 1, 0, 0)"&&ke.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},Oc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Ig=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},jv=function(e){return function(t){return ke.utils.snap(Ig(e),t)}},od=function(e){var t=ke.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},ey=function(e){return function(t,n){return od(Ig(e))(t,n.direction)}},bc=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},_n=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},gn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Tc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},ug={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},wc={toggleActions:"play",anticipatePin:0},Fc={top:0,left:0,center:.5,bottom:1,right:1},Pc=function(e,t){if(di(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Fc?Fc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ec=function(e,t,n,r,s,o,a,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,g=bt.createElement("div"),_=Ps(n)||_r(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?St:n.tagName==="IFRAME"?n.contentDocument.body:n,y=e.indexOf("start")!==-1,b=y?c:h,x="border-color:"+b+";font-size:"+d+";color:"+b+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(x+=(r===nn?id:rd)+":"+(o+parseFloat(u))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=x,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+r.op.d2],Ic(g,0,r,y),g},Ic=function(e,t,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+wo]=1,s["border"+a+wo]=0,s[n.p]=t+"px",ke.set(e,s)},ct=[],Kf={},Ha,fg=function(){return Un()-Pi>34&&(Ha||(Ha=requestAnimationFrame(vr)))},yo=function(){(!$n||!$n.isPressed||$n.startX>St.clientWidth)&&(lt.cache++,$n?Ha||(Ha=requestAnimationFrame(vr)):vr(),Pi||Ls("scrollStart"),Pi=Un())},Wf=function(){Tg=ft.innerWidth,bg=ft.innerHeight},Na=function(e){lt.cache++,(e===!0||!Nn&&!Mg&&!bt.fullscreenElement&&!bt.webkitFullscreenElement&&(!Zf||Tg!==ft.innerWidth||Math.abs(ft.innerHeight-bg)>ft.innerHeight*.25))&&Uc.restart(!0)},Is={},ty=[],Lg=function i(){return gn(ht,"scrollEnd",i)||Es(!0)},Ls=function(e){return Is[e]&&Is[e].map(function(t){return t()})||ty},fi=[],Dg=function(e){for(var t=0;t<fi.length;t+=5)(!e||fi[t+4]&&fi[t+4].query===e)&&(fi[t].style.cssText=fi[t+1],fi[t].getBBox&&fi[t].setAttribute("transform",fi[t+2]||""),fi[t+3].uncache=1)},Ng=function(){return lt.forEach(function(e){return On(e)&&++e.cacheID&&(e.rec=e())})},ad=function(e,t){var n;for(Kn=0;Kn<ct.length;Kn++)n=ct[Kn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Oa=!0,t&&Dg(t),t||Ls("revert")},Ug=function(e,t){lt.cache++,(t||!Qn)&&lt.forEach(function(n){return On(n)&&n.cacheID++&&(n.rec=0)}),di(e)&&(ft.history.scrollRestoration=td=e)},Qn,Rs=0,dg,ny=function(){if(dg!==Rs){var e=dg=Rs;requestAnimationFrame(function(){return e===Rs&&Es(!0)})}},Og=function(){St.appendChild(bo),nd=!$n&&bo.offsetHeight||ft.innerHeight,St.removeChild(bo)},pg=function(e){return Ga(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Es=function(e,t){if(pi=bt.documentElement,St=bt.body,ed=[ft,bt,pi,St],Pi&&!e&&!Oa){_n(ht,"scrollEnd",Lg);return}Og(),Qn=ht.isRefreshing=!0,Oa||Ng();var n=Ls("refreshInit");Sg&&ht.sort(),t||ad(),lt.forEach(function(r){On(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ct.slice(0).forEach(function(r){return r.refresh()}),Oa=!1,ct.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),$f=1,pg(!0),ct.forEach(function(r){var s=er(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),pg(!1),$f=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),lt.forEach(function(r){On(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Ug(td,1),Uc.pause(),Rs++,Qn=2,vr(2),ct.forEach(function(r){return On(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Qn=ht.isRefreshing=!1,Ls("refresh")},Qf=0,Lc=1,Va,vr=function(e){if(e===2||!Qn&&!Oa){ht.isUpdating=!0,Va&&Va.update(0);var t=ct.length,n=Un(),r=n-Hf>=50,s=t&&ct[0].scroll();if(Lc=Qf>s?-1:1,Qn||(Qf=s),r&&(Pi&&!Bc&&n-Pi>200&&(Pi=0,Ls("scrollEnd")),Pa=Hf,Hf=n),Lc<0){for(Kn=t;Kn-- >0;)ct[Kn]&&ct[Kn].update(0,r);Lc=1}else for(Kn=0;Kn<t;Kn++)ct[Kn]&&ct[Kn].update(0,r);ht.isUpdating=!1}Ha=0},jf=[Rg,Pg,rd,id,Ci+ka,Ci+Fa,Ci+za,Ci+Ba,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Dc=jf.concat([As,Cs,"boxSizing","max"+wo,"max"+sd,"position",Ci,rn,rn+za,rn+Fa,rn+ka,rn+Ba]),iy=function(e,t,n){To(n);var r=e._gsap;if(r.spacerIsNative)To(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Xf=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=jf.length,o=t.style,a=e.style,l;s--;)l=jf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[rd]=a[id]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[As]=Oc(e,Dn)+cn,o[Cs]=Oc(e,nn)+cn,o[rn]=a[Ci]=a[Pg]=a[Rg]="0",To(r),a[As]=a["max"+wo]=n[As],a[Cs]=a["max"+sd]=n[Cs],a[rn]=n[rn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},ry=/([A-Z])/g,To=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,o;for((e.t._gsap||ke.core.getCache(e.t)).uncache=1;r<n;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(ry,"-$1").toLowerCase())}},Ac=function(e){for(var t=Dc.length,n=e.style,r=[],s=0;s<t;s++)r.push(Dc[s],n[Dc[s]]);return r.t=e,r},sy=function(e,t,n){for(var r=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Nc={left:0,top:0},mg=function(e,t,n,r,s,o,a,l,c,h,d,u,f,g){On(e)&&(e=e(l)),di(e)&&e.substr(0,3)==="max"&&(e=u+(e.charAt(4)==="="?Pc("0"+e.substr(3),n):0));var _=f?f.time():0,p,m,y;if(f&&f.seek(0),isNaN(e)||(e=+e),Da(e))f&&(e=ke.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,e)),a&&Ic(a,n,r,!0);else{On(t)&&(t=t(l));var b=(e||"0").split(" "),x,M,T,A;y=Jn(t,l)||St,x=xr(y)||{},(!x||!x.left&&!x.top)&&Ri(y).display==="none"&&(A=y.style.display,y.style.display="block",x=xr(y),A?y.style.display=A:y.style.removeProperty("display")),M=Pc(b[0],x[r.d]),T=Pc(b[1]||"0",n),e=x[r.p]-c[r.p]-h+M+s-T,a&&Ic(a,T,r,n-T<20||a._isStart&&T>20),n-=n-T}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var v=e+n,w=o._isStart;p="scroll"+r.d2,Ic(o,v,r,w&&v>20||!w&&(d?Math.max(St[p],pi[p]):o.parentNode[p])<=v+1),d&&(c=xr(a),d&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+cn))}return f&&y&&(p=xr(y),f.seek(u),m=xr(y),f._caScrollDist=p[r.p]-m[r.p],e=e/f._caScrollDist*u),f&&f.seek(_),f?e:Math.round(e)},oy=/(webkit|moz|length|cssText|inset)/i,gg=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===St){e._stOrig=s.cssText,a=Ri(e);for(o in a)!+o&&!oy.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=e._stOrig;ke.core.getCache(e).uncache=1,t.appendChild(e)}},Fg=function(e,t,n){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=Math.round(o),r}},Cc=function(e,t,n){var r={};r[t.p]="+="+n,ke.set(e,r)},_g=function(e,t){var n=gr(e,t),r="_scroll"+t.p2,s=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,g={};c=c||n();var _=Fg(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){lt.cache++,o.tween&&vr()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=ke.to(e,l),u};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},_n(e,"wheel",n.wheelHandler),ht.isTouch&&_n(e,"touchmove",n.wheelHandler),s},ht=(function(){function i(t,n){So||i.register(ke)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Jf(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ia){this.update=this.refresh=this.kill=ji;return}n=hg(di(n)||Da(n)||n.nodeType?{trigger:n}:n,wc);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,b=s.once,x=s.snap,M=s.pinReparent,T=s.pinSpacer,A=s.containerAnimation,v=s.fastScrollEnd,w=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Dn:nn,N=!d&&d!==0,D=Jn(n.scroller||ft),V=ke.core.getCache(D),I=Ps(D),B=("pinType"in n?n.pinType:_r(D,"pinType")||I&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],G=N&&n.toggleActions.split(" "),te="markers"in n?n.markers:wc.markers,F=I?0:parseFloat(Ri(D)["border"+R.p2+wo])||0,C=this,Y=n.onRefreshInit&&function(){return n.onRefreshInit(C)},de=$v(D,I,R),ae=Kv(D,I),Pe=0,Ue=0,Te=0,$=gr(D,R),ne,oe,Ce,me,Re,Ne,j,W,Q,L,le,Le,Fe,Ee,Oe,U,nt,Ge,P,S,H,q,ee,xe,fe,ie,se,Se,He,Me,ye,_e,Ze,Qe,z,ve,re,be,Ae;if(C._startClamp=C._endClamp=!1,C._dir=R,p*=45,C.scroller=D,C.scroll=A?A.time.bind(A):$,me=$(),C.vars=n,r=r||n.animation,"refreshPriority"in n&&(Sg=1,n.refreshPriority===-9999&&(Va=C)),V.tweenScroll=V.tweenScroll||{top:_g(D,nn),left:_g(D,Dn)},C.tweenTo=ne=V.tweenScroll[R.p],C.scrubDuration=function(ue){Ze=Da(ue)&&ue,Ze?_e?_e.duration(ue):_e=ke.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ze,paused:!0,onComplete:function(){return m&&m(C)}}):(_e&&_e.progress(1).kill(),_e=0)},r&&(r.vars.lazy=!1,r._initted&&!C.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),C.animation=r.pause(),r.scrollTrigger=C,C.scrubDuration(d),Me=0,l||(l=r.vars.id)),x&&((!ws(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in St.style&&ke.set(I?[St,pi]:D,{scrollBehavior:"auto"}),lt.forEach(function(ue){return On(ue)&&ue.target===(I?bt.scrollingElement||pi:D)&&(ue.smooth=!1)}),Ce=On(x.snapTo)?x.snapTo:x.snapTo==="labels"?jv(r):x.snapTo==="labelsDirectional"?ey(r):x.directional!==!1?function(ue,Ke){return od(x.snapTo)(ue,Un()-Ue<500?0:Ke.direction)}:ke.utils.snap(x.snapTo),Qe=x.duration||{min:.1,max:2},Qe=ws(Qe)?Ua(Qe.min,Qe.max):Ua(Qe,Qe),z=ke.delayedCall(x.delay||Ze/2||.1,function(){var ue=$(),Ke=Un()-Ue<500,We=ne.tween;if((Ke||Math.abs(C.getVelocity())<10)&&!We&&!Bc&&Pe!==ue){var it=(ue-Ne)/Ee,jt=r&&!N?r.totalProgress():it,ut=Ke?0:(jt-ye)/(Un()-Pa)*1e3||0,Lt=ke.utils.clamp(-it,1-it,vo(ut/2)*ut/.185),pn=it+(x.inertia===!1?0:Lt),Dt,wt,gt=x,Gn=gt.onStart,Rt=gt.onInterrupt,Cn=gt.onComplete;if(Dt=Ce(pn,C),Da(Dt)||(Dt=pn),wt=Math.max(0,Math.round(Ne+Dt*Ee)),ue<=j&&ue>=Ne&&wt!==ue){if(We&&!We._initted&&We.data<=vo(wt-ue))return;x.inertia===!1&&(Lt=Dt-it),ne(wt,{duration:Qe(vo(Math.max(vo(pn-jt),vo(Dt-jt))*.185/ut/.05||0)),ease:x.ease||"power3",data:vo(wt-ue),onInterrupt:function(){return z.restart(!0)&&Rt&&xo(C,Rt)},onComplete:function(){C.update(),Pe=$(),r&&!N&&(_e?_e.resetTo("totalProgress",Dt,r._tTime/r._tDur):r.progress(Dt)),Me=ye=r&&!N?r.totalProgress():C.progress,y&&y(C),Cn&&xo(C,Cn)}},ue,Lt*Ee,wt-ue-Lt*Ee),Gn&&xo(C,Gn,ne.tween)}}else C.isActive&&Pe!==ue&&z.restart(!0)}).pause()),l&&(Kf[l]=C),u=C.trigger=Jn(u||f!==!0&&f),Ae=u&&u._gsap&&u._gsap.stRevert,Ae&&(Ae=Ae(C)),f=f===!0?u:Jn(f),di(a)&&(a={targets:u,className:a}),f&&(g===!1||g===Ci||(g=!g&&f.parentNode&&f.parentNode.style&&Ri(f.parentNode).display==="flex"?!1:rn),C.pin=f,oe=ke.core.getCache(f),oe.spacer?Oe=oe.pinState:(T&&(T=Jn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),oe.spacerIsNative=!!T,T&&(oe.spacerState=Ac(T))),oe.spacer=Ge=T||bt.createElement("div"),Ge.classList.add("pin-spacer"),l&&Ge.classList.add("pin-spacer-"+l),oe.pinState=Oe=Ac(f)),n.force3D!==!1&&ke.set(f,{force3D:!0}),C.spacer=Ge=oe.spacer,He=Ri(f),xe=He[g+R.os2],S=ke.getProperty(f),H=ke.quickSetter(f,R.a,cn),Xf(f,Ge,He),nt=Ac(f)),te){Le=ws(te)?hg(te,ug):ug,L=Ec("scroller-start",l,D,R,Le,0),le=Ec("scroller-end",l,D,R,Le,0,L),P=L["offset"+R.op.d2];var ce=Jn(_r(D,"content")||D);W=this.markerStart=Ec("start",l,ce,R,Le,P,0,A),Q=this.markerEnd=Ec("end",l,ce,R,Le,P,0,A),A&&(be=ke.quickSetter([W,Q],R.a,cn)),!B&&!(Oi.length&&_r(D,"fixedMarkers")===!0)&&(Qv(I?St:D),ke.set([L,le],{force3D:!0}),ie=ke.quickSetter(L,R.a,cn),Se=ke.quickSetter(le,R.a,cn))}if(A){var pe=A.vars.onUpdate,he=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){C.update(0,0,1),pe&&pe.apply(A,he||[])})}if(C.previous=function(){return ct[ct.indexOf(C)-1]},C.next=function(){return ct[ct.indexOf(C)+1]},C.revert=function(ue,Ke){if(!Ke)return C.kill(!0);var We=ue!==!1||!C.enabled,it=Nn;We!==C.isReverted&&(We&&(ve=Math.max($(),C.scroll.rec||0),Te=C.progress,re=r&&r.progress()),W&&[W,Q,L,le].forEach(function(jt){return jt.style.display=We?"none":"block"}),We&&(Nn=C,C.update(We)),f&&(!M||!C.isActive)&&(We?iy(f,Ge,Oe):Xf(f,Ge,Ri(f),fe)),We||C.update(We),Nn=it,C.isReverted=We)},C.refresh=function(ue,Ke,We,it){if(!((Nn||!C.enabled)&&!Ke)){if(f&&ue&&Pi){_n(i,"scrollEnd",Lg);return}!Qn&&Y&&Y(C),Nn=C,ne.tween&&!We&&(ne.tween.kill(),ne.tween=0),_e&&_e.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(we){return we.vars.immediateRender&&we.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var jt=de(),ut=ae(),Lt=A?A.duration():er(D,R),pn=Ee<=.01||!Ee,Dt=0,wt=it||0,gt=ws(We)?We.end:n.end,Gn=n.endTrigger||u,Rt=ws(We)?We.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),Cn=C.pinnedContainer=n.pinnedContainer&&Jn(n.pinnedContainer,C),Hn=u&&Math.max(0,ct.indexOf(C))||0,en=Hn,Xt,an,qi,eo,mn,$t,Mi,to,E,k,K,Z,J;for(te&&ws(We)&&(Z=ke.getProperty(L,R.p),J=ke.getProperty(le,R.p));en-- >0;)$t=ct[en],$t.end||$t.refresh(0,1)||(Nn=C),Mi=$t.pin,Mi&&(Mi===u||Mi===f||Mi===Cn)&&!$t.isReverted&&(k||(k=[]),k.unshift($t),$t.revert(!0,!0)),$t!==ct[en]&&(Hn--,en--);for(On(Rt)&&(Rt=Rt(C)),Rt=og(Rt,"start",C),Ne=mg(Rt,u,jt,R,$(),W,L,C,ut,F,B,Lt,A,C._startClamp&&"_startClamp")||(f?-.001:0),On(gt)&&(gt=gt(C)),di(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(di(Rt)?Rt.split(" ")[0]:"")+gt:(Dt=Pc(gt.substr(2),jt),gt=di(Rt)?Rt:(A?ke.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,Ne):Ne)+Dt,Gn=u)),gt=og(gt,"end",C),j=Math.max(Ne,mg(gt||(Gn?"100% 0":Lt),Gn,jt,R,$()+Dt,Q,le,C,ut,F,B,Lt,A,C._endClamp&&"_endClamp"))||-.001,Dt=0,en=Hn;en--;)$t=ct[en]||{},Mi=$t.pin,Mi&&$t.start-$t._pinPush<=Ne&&!A&&$t.end>0&&(Xt=$t.end-(C._startClamp?Math.max(0,$t.start):$t.start),(Mi===u&&$t.start-$t._pinPush<Ne||Mi===Cn)&&isNaN(Rt)&&(Dt+=Xt*(1-$t.progress)),Mi===f&&(wt+=Xt));if(Ne+=Dt,j+=Dt,C._startClamp&&(C._startClamp+=Dt),C._endClamp&&!Qn&&(C._endClamp=j||-.001,j=Math.min(j,er(D,R))),Ee=j-Ne||(Ne-=.01)&&.001,pn&&(Te=ke.utils.clamp(0,1,ke.utils.normalize(Ne,j,ve))),C._pinPush=wt,W&&Dt&&(Xt={},Xt[R.a]="+="+Dt,Cn&&(Xt[R.p]="-="+$()),ke.set([W,Q],Xt)),f&&!($f&&C.end>=er(D,R)))Xt=Ri(f),eo=R===nn,qi=$(),q=parseFloat(S(R.a))+wt,!Lt&&j>1&&(K=(I?bt.scrollingElement||pi:D).style,K={style:K,value:K["overflow"+R.a.toUpperCase()]},I&&Ri(St)["overflow"+R.a.toUpperCase()]!=="scroll"&&(K.style["overflow"+R.a.toUpperCase()]="scroll")),Xf(f,Ge,Xt),nt=Ac(f),an=xr(f,!0),to=B&&gr(D,eo?Dn:nn)(),g?(fe=[g+R.os2,Ee+wt+cn],fe.t=Ge,en=g===rn?Oc(f,R)+Ee+wt:0,en&&(fe.push(R.d,en+cn),Ge.style.flexBasis!=="auto"&&(Ge.style.flexBasis=en+cn)),To(fe),Cn&&ct.forEach(function(we){we.pin===Cn&&we.vars.pinSpacing!==!1&&(we._subPinOffset=!0)}),B&&$(ve)):(en=Oc(f,R),en&&Ge.style.flexBasis!=="auto"&&(Ge.style.flexBasis=en+cn)),B&&(mn={top:an.top+(eo?qi-Ne:to)+cn,left:an.left+(eo?to:qi-Ne)+cn,boxSizing:"border-box",position:"fixed"},mn[As]=mn["max"+wo]=Math.ceil(an.width)+cn,mn[Cs]=mn["max"+sd]=Math.ceil(an.height)+cn,mn[Ci]=mn[Ci+za]=mn[Ci+Fa]=mn[Ci+ka]=mn[Ci+Ba]="0",mn[rn]=Xt[rn],mn[rn+za]=Xt[rn+za],mn[rn+Fa]=Xt[rn+Fa],mn[rn+ka]=Xt[rn+ka],mn[rn+Ba]=Xt[rn+Ba],U=sy(Oe,mn,M),Qn&&$(0)),r?(E=r._initted,Vf(1),r.render(r.duration(),!0,!0),ee=S(R.a)-q+Ee+wt,se=Math.abs(Ee-ee)>1,B&&se&&U.splice(U.length-2,2),r.render(0,!0,!0),E||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Vf(0)):ee=Ee,K&&(K.value?K.style["overflow"+R.a.toUpperCase()]=K.value:K.style.removeProperty("overflow-"+R.a));else if(u&&$()&&!A)for(an=u.parentNode;an&&an!==St;)an._pinOffset&&(Ne-=an._pinOffset,j-=an._pinOffset),an=an.parentNode;k&&k.forEach(function(we){return we.revert(!1,!0)}),C.start=Ne,C.end=j,me=Re=Qn?ve:$(),!A&&!Qn&&(me<ve&&$(ve),C.scroll.rec=0),C.revert(!1,!0),Ue=Un(),z&&(Pe=-1,z.restart(!0)),Nn=0,r&&N&&(r._initted||re)&&r.progress()!==re&&r.progress(re||0,!0).render(r.time(),!0,!0),(pn||Te!==C.progress||A||_||r&&!r._initted)&&(r&&!N&&(r._initted||Te||r.vars.immediateRender!==!1)&&r.totalProgress(A&&Ne<-.001&&!Te?ke.utils.normalize(Ne,j,0):Te,!0),C.progress=pn||(me-Ne)/Ee===Te?0:Te),f&&g&&(Ge._pinOffset=Math.round(C.progress*ee)),_e&&_e.invalidate(),isNaN(Z)||(Z-=ke.getProperty(L,R.p),J-=ke.getProperty(le,R.p),Cc(L,R,Z),Cc(W,R,Z-(it||0)),Cc(le,R,J),Cc(Q,R,J-(it||0))),pn&&!Qn&&C.update(),h&&!Qn&&!Fe&&(Fe=!0,h(C),Fe=!1)}},C.getVelocity=function(){return($()-Re)/(Un()-Pa)*1e3||0},C.endAnimation=function(){Ra(C.callbackAnimation),r&&(_e?_e.progress(1):r.paused()?N||Ra(r,C.direction<0,1):Ra(r,r.reversed()))},C.labelToScroll=function(ue){return r&&r.labels&&(Ne||C.refresh()||Ne)+r.labels[ue]/r.duration()*Ee||0},C.getTrailing=function(ue){var Ke=ct.indexOf(C),We=C.direction>0?ct.slice(0,Ke).reverse():ct.slice(Ke+1);return(di(ue)?We.filter(function(it){return it.vars.preventOverlaps===ue}):We).filter(function(it){return C.direction>0?it.end<=Ne:it.start>=j})},C.update=function(ue,Ke,We){if(!(A&&!We&&!ue)){var it=Qn===!0?ve:C.scroll(),jt=ue?0:(it-Ne)/Ee,ut=jt<0?0:jt>1?1:jt||0,Lt=C.progress,pn,Dt,wt,gt,Gn,Rt,Cn,Hn;if(Ke&&(Re=me,me=A?$():it,x&&(ye=Me,Me=r&&!N?r.totalProgress():ut)),p&&f&&!Nn&&!Sc&&Pi&&(!ut&&Ne<it+(it-Re)/(Un()-Pa)*p?ut=1e-4:ut===1&&j>it+(it-Re)/(Un()-Pa)*p&&(ut=.9999)),ut!==Lt&&C.enabled){if(pn=C.isActive=!!ut&&ut<1,Dt=!!Lt&&Lt<1,Rt=pn!==Dt,Gn=Rt||!!ut!=!!Lt,C.direction=ut>Lt?1:-1,C.progress=ut,Gn&&!Nn&&(wt=ut&&!Lt?0:ut===1?1:Lt===1?2:3,N&&(gt=!Rt&&G[wt+1]!=="none"&&G[wt+1]||G[wt],Hn=r&&(gt==="complete"||gt==="reset"||gt in r))),w&&(Rt||Hn)&&(Hn||d||!r)&&(On(w)?w(C):C.getTrailing(w).forEach(function(qi){return qi.endAnimation()})),N||(_e&&!Nn&&!Sc?(_e._dp._time-_e._start!==_e._time&&_e.render(_e._dp._time-_e._start),_e.resetTo?_e.resetTo("totalProgress",ut,r._tTime/r._tDur):(_e.vars.totalProgress=ut,_e.invalidate().restart())):r&&r.totalProgress(ut,!!(Nn&&(Ue||ue)))),f){if(ue&&g&&(Ge.style[g+R.os2]=xe),!B)H(La(q+ee*ut));else if(Gn){if(Cn=!ue&&ut>Lt&&j+1>it&&it+1>=er(D,R),M)if(!ue&&(pn||Cn)){var en=xr(f,!0),Xt=it-Ne;gg(f,St,en.top+(R===nn?Xt:0)+cn,en.left+(R===nn?0:Xt)+cn)}else gg(f,Ge);To(pn||Cn?U:nt),se&&ut<1&&pn||H(q+(ut===1&&!Cn?ee:0))}}x&&!ne.tween&&!Nn&&!Sc&&z.restart(!0),a&&(Rt||b&&ut&&(ut<1||!Gf))&&Ga(a.targets).forEach(function(qi){return qi.classList[pn||b?"add":"remove"](a.className)}),o&&!N&&!ue&&o(C),Gn&&!Nn?(N&&(Hn&&(gt==="complete"?r.pause().totalProgress(1):gt==="reset"?r.restart(!0).pause():gt==="restart"?r.restart(!0):r[gt]()),o&&o(C)),(Rt||!Gf)&&(c&&Rt&&xo(C,c),X[wt]&&xo(C,X[wt]),b&&(ut===1?C.kill(!1,1):X[wt]=0),Rt||(wt=ut===1?1:3,X[wt]&&xo(C,X[wt]))),v&&!pn&&Math.abs(C.getVelocity())>(Da(v)?v:2500)&&(Ra(C.callbackAnimation),_e?_e.progress(1):Ra(r,gt==="reverse"?1:!ut,1))):N&&o&&!Nn&&o(C)}if(Se){var an=A?it/A.duration()*(A._caScrollDist||0):it;ie(an+(L._isFlipped?1:0)),Se(an)}be&&be(-it/A.duration()*(A._caScrollDist||0))}},C.enable=function(ue,Ke){C.enabled||(C.enabled=!0,_n(D,"resize",Na),I||_n(D,"scroll",yo),Y&&_n(i,"refreshInit",Y),ue!==!1&&(C.progress=Te=0,me=Re=Pe=$()),Ke!==!1&&C.refresh())},C.getTween=function(ue){return ue&&ne?ne.tween:_e},C.setPositions=function(ue,Ke,We,it){if(A){var jt=A.scrollTrigger,ut=A.duration(),Lt=jt.end-jt.start;ue=jt.start+Lt*ue/ut,Ke=jt.start+Lt*Ke/ut}C.refresh(!1,!1,{start:ag(ue,We&&!!C._startClamp),end:ag(Ke,We&&!!C._endClamp)},it),C.update()},C.adjustPinSpacing=function(ue){if(fe&&ue){var Ke=fe.indexOf(R.d)+1;fe[Ke]=parseFloat(fe[Ke])+ue+cn,fe[1]=parseFloat(fe[1])+ue+cn,To(fe)}},C.disable=function(ue,Ke){if(ue!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Ke||_e&&_e.pause(),ve=0,oe&&(oe.uncache=1),Y&&gn(i,"refreshInit",Y),z&&(z.pause(),ne.tween&&ne.tween.kill()&&(ne.tween=0)),!I)){for(var We=ct.length;We--;)if(ct[We].scroller===D&&ct[We]!==C)return;gn(D,"resize",Na),I||gn(D,"scroll",yo)}},C.kill=function(ue,Ke){C.disable(ue,Ke),_e&&!Ke&&_e.kill(),l&&delete Kf[l];var We=ct.indexOf(C);We>=0&&ct.splice(We,1),We===Kn&&Lc>0&&Kn--,We=0,ct.forEach(function(it){return it.scroller===C.scroller&&(We=1)}),We||Qn||(C.scroll.rec=0),r&&(r.scrollTrigger=null,ue&&r.revert({kill:!1}),Ke||r.kill()),W&&[W,Q,L,le].forEach(function(it){return it.parentNode&&it.parentNode.removeChild(it)}),Va===C&&(Va=0),f&&(oe&&(oe.uncache=1),We=0,ct.forEach(function(it){return it.pin===f&&We++}),We||(oe.spacer=0)),n.onKill&&n.onKill(C)},ct.push(C),C.enable(!1,!1),Ae&&Ae(C),r&&r.add&&!Ee){var $e=C.update;C.update=function(){C.update=$e,lt.cache++,Ne||j||C.refresh()},ke.delayedCall(.01,C.update),Ee=.01,Ne=j=0}else C.refresh();f&&ny()},i.register=function(n){return So||(ke=n||Eg(),wg()&&window.document&&i.enable(),So=Ia),So},i.defaults=function(n){if(n)for(var r in n)wc[r]=n[r];return wc},i.disable=function(n,r){Ia=0,ct.forEach(function(o){return o[r?"kill":"disable"](n)}),gn(ft,"wheel",yo),gn(bt,"scroll",yo),clearInterval(yc),gn(bt,"touchcancel",ji),gn(St,"touchstart",ji),bc(gn,bt,"pointerdown,touchstart,mousedown",lg),bc(gn,bt,"pointerup,touchend,mouseup",cg),Uc.kill(),Mc(gn);for(var s=0;s<lt.length;s+=3)Tc(gn,lt[s],lt[s+1]),Tc(gn,lt[s],lt[s+2])},i.enable=function(){if(ft=window,bt=document,pi=bt.documentElement,St=bt.body,ke){if(Ga=ke.utils.toArray,Ua=ke.utils.clamp,Jf=ke.core.context||ji,Vf=ke.core.suppressOverwrites||ji,td=ft.history.scrollRestoration||"auto",Qf=ft.pageYOffset||0,ke.core.globals("ScrollTrigger",i),St){Ia=1,bo=document.createElement("div"),bo.style.height="100vh",bo.style.position="absolute",Og(),Jv(),Zt.register(ke),i.isTouch=Zt.isTouch,Yr=Zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Zf=Zt.isTouch===1,_n(ft,"wheel",yo),ed=[ft,bt,pi,St],ke.matchMedia?(i.matchMedia=function(h){var d=ke.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},ke.addEventListener("matchMediaInit",function(){Ng(),ad()}),ke.addEventListener("matchMediaRevert",function(){return Dg()}),ke.addEventListener("matchMedia",function(){Es(0,1),Ls("matchMedia")}),ke.matchMedia().add("(orientation: portrait)",function(){return Wf(),Wf})):console.warn("Requires GSAP 3.11.0 or later"),Wf(),_n(bt,"scroll",yo);var n=St.hasAttribute("style"),r=St.style,s=r.borderTopStyle,o=ke.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=xr(St),nn.m=Math.round(a.top+nn.sc())||0,Dn.m=Math.round(a.left+Dn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(St.setAttribute("style",""),St.removeAttribute("style")),yc=setInterval(fg,250),ke.delayedCall(.5,function(){return Sc=0}),_n(bt,"touchcancel",ji),_n(St,"touchstart",ji),bc(_n,bt,"pointerdown,touchstart,mousedown",lg),bc(_n,bt,"pointerup,touchend,mouseup",cg),qf=ke.utils.checkPrefix("transform"),Dc.push(qf),So=Un(),Uc=ke.delayedCall(.2,Es).pause(),Mo=[bt,"visibilitychange",function(){var h=ft.innerWidth,d=ft.innerHeight;bt.hidden?(rg=h,sg=d):(rg!==h||sg!==d)&&Na()},bt,"DOMContentLoaded",Es,ft,"load",Es,ft,"resize",Na],Mc(_n),ct.forEach(function(h){return h.enable(0,1)}),l=0;l<lt.length;l+=3)Tc(gn,lt[l],lt[l+1]),Tc(gn,lt[l],lt[l+2])}else if(bt){var c=function h(){i.enable(),bt.removeEventListener("DOMContentLoaded",h)};bt.addEventListener("DOMContentLoaded",c)}}},i.config=function(n){"limitCallbacks"in n&&(Gf=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(yc)||(yc=r)&&setInterval(fg,r),"ignoreMobileResize"in n&&(Zf=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Mc(gn)||Mc(_n,n.autoRefreshEvents||"none"),Mg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Jn(n),o=lt.indexOf(s),a=Ps(s);~o&&lt.splice(o,a?6:2),r&&(a?Oi.unshift(ft,r,St,r,pi,r):Oi.unshift(s,r))},i.clearMatchMedia=function(n){ct.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(di(n)?Jn(n):n).getBoundingClientRect(),a=o[s?As:Cs]*r||0;return s?o.right-a>0&&o.left+a<ft.innerWidth:o.bottom-a>0&&o.top+a<ft.innerHeight},i.positionInViewport=function(n,r,s){di(n)&&(n=Jn(n));var o=n.getBoundingClientRect(),a=o[s?As:Cs],l=r==null?a/2:r in Fc?Fc[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ft.innerWidth:(o.top+l)/ft.innerHeight},i.killAll=function(n){if(ct.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Is.killAll||[];Is={},r.forEach(function(s){return s()})}},i})();ht.version="3.15.0";ht.saveStyles=function(i){return i?Ga(i).forEach(function(e){if(e&&e.style){var t=fi.indexOf(e);t>=0&&fi.splice(t,5),fi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ke.core.getCache(e),Jf())}}):fi};ht.revert=function(i,e){return ad(!i,e)};ht.create=function(i,e){return new ht(i,e)};ht.refresh=function(i){return i?Na(!0):(So||ht.register())&&Es(!0)};ht.update=function(i){return++lt.cache&&vr(i===!0?2:0)};ht.clearScrollMemory=Ug;ht.maxScroll=function(i,e){return er(i,e?Dn:nn)};ht.getScrollFunc=function(i,e){return gr(Jn(i),e?Dn:nn)};ht.getById=function(i){return Kf[i]};ht.getAll=function(){return ct.filter(function(i){return i.vars.id!=="ScrollSmoother"})};ht.isScrolling=function(){return!!Pi};ht.snapDirectional=od;ht.addEventListener=function(i,e){var t=Is[i]||(Is[i]=[]);~t.indexOf(e)||t.push(e)};ht.removeEventListener=function(i,e){var t=Is[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ht.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,h){var d=[],u=[],f=ke.delayedCall(r,function(){h(d,u),d=[],u=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),u.push(g),s<=d.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&On(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return On(s)&&(s=s(),_n(ht,"refresh",function(){return s=e.batchMax()})),Ga(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ht.create(c))}),t};var xg=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Yf=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Zt.isTouch?" pinch-zoom":""):"none",e===pi&&i(St,t)},Rc={auto:1,scroll:1},ay=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||ke.core.getCache(s),a=Un(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==St&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Rc[(l=Ri(s)).overflowY]||Rc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Ps(s)&&(Rc[(l=Ri(s)).overflowY]||Rc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Bg=function(e,t,n,r){return Zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&ay,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&_n(bt,Zt.eventTypes[0],yg,!1,!0)},onDisable:function(){return gn(bt,Zt.eventTypes[0],yg,!0)}})},ly=/(input|label|select|textarea)/i,vg,yg=function(e){var t=ly.test(e.target.tagName);(t||vg)&&(e._gsapAllow=!0,vg=t)},cy=function(e){ws(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Jn(e.target)||pi,h=ke.core.globals().ScrollSmoother,d=h&&h.get(),u=Yr&&(e.content&&Jn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=gr(c,nn),g=gr(c,Dn),_=1,p=(Zt.isTouch&&ft.visualViewport?ft.visualViewport.scale*ft.visualViewport.width:ft.outerWidth)/ft.innerWidth,m=0,y=On(r)?function(){return r(a)}:function(){return r||2.8},b,x,M=Bg(c,e.type,!0,s),T=function(){return x=!1},A=ji,v=ji,w=function(){l=er(c,nn),v=Ua(Yr?1:0,l),n&&(A=Ua(0,er(c,Dn))),b=Rs},R=function(){u._gsap.y=La(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},N=function(){if(x){requestAnimationFrame(T);var te=La(a.deltaY/2),F=v(f.v-te);if(u&&F!==f.v+f.offset){f.offset=F-f.v;var C=La((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",u._gsap.y=C+"px",f.cacheID=lt.cache,vr()}return!0}f.offset&&R(),x=!0},D,V,I,B,X=function(){w(),D.isActive()&&D.vars.scrollY>l&&(f()>l?D.progress(1)&&f(l):D.resetTo("scrollY",l))};return u&&ke.set(u,{y:"+=0"}),e.ignoreCheck=function(G){return Yr&&G.type==="touchmove"&&N(G)||_>1.05&&G.type!=="touchstart"||a.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){x=!1;var G=_;_=La((ft.visualViewport&&ft.visualViewport.scale||1)/p),D.pause(),G!==_&&Yf(c,_>1.01?!0:n?!1:"x"),V=g(),I=f(),w(),b=Rs},e.onRelease=e.onGestureStart=function(G,te){if(f.offset&&R(),!te)B.restart(!0);else{lt.cache++;var F=y(),C,Y;n&&(C=g(),Y=C+F*.05*-G.velocityX/.227,F*=xg(g,C,Y,er(c,Dn)),D.vars.scrollX=A(Y)),C=f(),Y=C+F*.05*-G.velocityY/.227,F*=xg(f,C,Y,er(c,nn)),D.vars.scrollY=v(Y),D.invalidate().duration(F).play(.01),(Yr&&D.vars.scrollY>=l||C>=l-1)&&ke.to({},{onUpdate:X,duration:F})}o&&o(G)},e.onWheel=function(){D._ts&&D.pause(),Un()-m>1e3&&(b=0,m=Un())},e.onChange=function(G,te,F,C,Y){if(Rs!==b&&w(),te&&n&&g(A(C[2]===te?V+(G.startX-G.x):g()+te-C[1])),F){f.offset&&R();var de=Y[2]===F,ae=de?I+G.startY-G.y:f()+F-Y[1],Pe=v(ae);de&&ae!==Pe&&(I+=Pe-ae),f(Pe)}(F||te)&&vr()},e.onEnable=function(){Yf(c,n?!1:"x"),ht.addEventListener("refresh",X),_n(ft,"resize",X),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),M.enable()},e.onDisable=function(){Yf(c,!0),gn(ft,"resize",X),ht.removeEventListener("refresh",X),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new Zt(e),a.iOS=Yr,Yr&&!f()&&f(1),Yr&&ke.ticker.add(ji),B=a._dc,D=ke.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Fg(f,f(),function(){return D.pause()})},onUpdate:vr,onComplete:B.vars.onComplete}),a};ht.sort=function(i){if(On(i))return ct.sort(i);var e=ft.pageYOffset||0;return ht.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ft.innerHeight}),ct.sort(i||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ht.observe=function(i){return new Zt(i)};ht.normalizeScroll=function(i){if(typeof i>"u")return $n;if(i===!0&&$n)return $n.enable();if(i===!1){$n&&$n.kill(),$n=i;return}var e=i instanceof Zt?i:cy(i);return $n&&$n.target===e.target&&$n.kill(),Ps(e.target)&&($n=e),e};ht.core={_getVelocityProp:vc,_inputObserver:Bg,_scrollers:lt,_proxies:Oi,bridge:{ss:function(){Pi||Ls("scrollStart"),Pi=Un()},ref:function(){return Nn}}};Eg()&&ke.registerPlugin(ht);var zg="1.3.26";function Gg(i,e,t){return Math.max(i,Math.min(e,t))}function hy(i,e,t){return(1-t)*i+t*e}function uy(i,e,t,n){return hy(i,e,1-Math.exp(-t*n))}function fy(i,e){return(i%e+e)%e}var dy=class{constructor(){qe(this,"isRunning",!1);qe(this,"value",0);qe(this,"from",0);qe(this,"to",0);qe(this,"currentTime",0);qe(this,"lerp");qe(this,"duration");qe(this,"easing");qe(this,"onUpdate")}advance(i){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;let t=Gg(0,this.currentTime/this.duration,1);e=t>=1;let n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=uy(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:s,onUpdate:o}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function py(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var my=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){qe(this,"width",0);qe(this,"height",0);qe(this,"scrollHeight",0);qe(this,"scrollWidth",0);qe(this,"debouncedResize");qe(this,"wrapperResizeObserver");qe(this,"contentResizeObserver");qe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});qe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});qe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=py(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Hg=class{constructor(){qe(this,"events",{})}emit(i,...e){let t=this.events[i]||[];for(let n=0,r=t.length;n<r;n++)t[n]?.(...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{this.events[i]=this.events[i]?.filter(t=>e!==t)}}off(i,e){this.events[i]=this.events[i]?.filter(t=>e!==t)}destroy(){this.events={}}},gy=100/6,qr={passive:!1};function kg(i,e){return i===1?gy:i===2?e:1}var _y=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){qe(this,"touchStart",{x:0,y:0});qe(this,"lastDelta",{x:0,y:0});qe(this,"window",{width:0,height:0});qe(this,"emitter",new Hg);qe(this,"onTouchStart",i=>{let{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});qe(this,"onTouchMove",i=>{let{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});qe(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});qe(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i,r=kg(n,this.window.width),s=kg(n,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});qe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,qr),this.element.addEventListener("touchstart",this.onTouchStart,qr),this.element.addEventListener("touchmove",this.onTouchMove,qr),this.element.addEventListener("touchend",this.onTouchEnd,qr)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,qr),this.element.removeEventListener("touchstart",this.onTouchStart,qr),this.element.removeEventListener("touchmove",this.onTouchMove,qr),this.element.removeEventListener("touchend",this.onTouchEnd,qr)}},Vg=i=>Math.min(1,1.001-2**(-10*i)),Wg=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:p,virtualScroll:m,overscroll:y=!0,autoRaf:b=!1,anchors:x=!1,autoToggle:M=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:v=A,stopInertiaOnNavigate:w=!1,respectReducedMotion:R=!0}={}){qe(this,"_isScrolling",!1);qe(this,"_isStopped",!1);qe(this,"_isLocked",!1);qe(this,"_preventNextNativeScrollEvent",!1);qe(this,"_resetVelocityTimeout",null);qe(this,"_rafId",null);qe(this,"_isDraggingSelection",!1);qe(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));qe(this,"isTouching");qe(this,"isIos");qe(this,"time",0);qe(this,"userData",{});qe(this,"lastVelocity",0);qe(this,"velocity",0);qe(this,"direction",0);qe(this,"options");qe(this,"targetScroll");qe(this,"animatedScroll");qe(this,"animate",new dy);qe(this,"emitter",new Hg);qe(this,"dimensions");qe(this,"virtualScroll");qe(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});qe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});qe(this,"onTransitionEnd",i=>{i.propertyName?.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});qe(this,"onClick",i=>{let e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){let n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){let r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});qe(this,"onPointerDown",i=>{i.button===1&&this.reset()});qe(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;let{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let r=n.type.includes("touch"),s=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(g=>g instanceof HTMLElement&&(typeof c=="function"&&c?.(g)||g.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&g.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&g.hasAttribute?.("data-lenis-prevent-horizontal")||r&&g.hasAttribute?.("data-lenis-prevent-touch")||s&&g.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=r&&this.options.syncTouch,f=r&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});qe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});qe(this,"raf",i=>{let e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=zg,window.lenis||(window.lenis={}),window.lenis.version=zg,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=Vg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:g,autoResize:_,prevent:p,virtualScroll:m,overscroll:y,autoRaf:b,anchors:x,autoToggle:M,allowNestedScroll:T,naiveDimensions:v,stopInertiaOnNavigate:w,respectReducedMotion:R},this.dimensions=new my(i,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new _y(t,{touchMultiplier:f,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}get overflow(){let i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){let e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;let t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;let n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;let r=n[0],s=n[n.length-1],o=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(r?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=i,f=e;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let g=null;if(typeof u=="string"?(g=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),g||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&u?.nodeType&&(g=u),g){if(this.options.wrapper!==window){let x=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?x.left:x.top}let _=g.getBoundingClientRect(),p=getComputedStyle(g),m=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),y=getComputedStyle(this.rootElement),b=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(b)?0:b)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;let g=u-this.animatedScroll;g>this.limit/2?u-=this.limit:g<-this.limit/2&&(u+=this.limit)}}else u=Gg(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=Vg:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),r&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){let n=Date.now();i._lenis||(i._lenis={});let r=i._lenis,s,o,a,l,c,h,d,u,f,g;if(n-(r.time??0)>2e3){r.time=Date.now();let T=window.getComputedStyle(i);if(r.computedStyle=T,s=["auto","overlay","scroll"].includes(T.overflowX),o=["auto","overlay","scroll"].includes(T.overflowY),c=["auto"].includes(T.overscrollBehaviorX),h=["auto"].includes(T.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,g=i.clientHeight,a=d>f,l=u>g,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=u,r.clientWidth=f,r.clientHeight=g,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=h}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,d=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,g=r.clientHeight,c=r.hasOverscrollBehaviorX,h=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical",p,m,y,b,x,M;if(_==="horizontal")p=Math.round(i.scrollLeft),m=d-f,y=e,b=s,x=a,M=c;else if(_==="vertical")p=Math.round(i.scrollTop),m=u-g,y=t,b=o,x=l,M=h;else return!1;return!M&&(p>=m||p<=0)?!0:(y>0?p<m:p>0)&&b&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?fy(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(let i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};var Eo=.7894736842105263,Us=i=>Math.round(i*Eo*1e6)/1e6,ld=["intro","build","ship","connect","operate","final"],xy=[{to:1,start:.05,end:.17},{to:2,start:.29,end:.39},{to:3,start:.5,end:.6},{to:4,start:.71,end:.8},{to:5,start:.895,end:.965}],Ns=xy.map(({to:i,start:e,end:t})=>({to:i,start:Us(e),end:Us(t)})),Xg=[[0,0,.03,.06],[.17,.2,.27,.3],[.38,.41,.48,.51],[.59,.62,.69,.72],[.79,.82,.875,.9],[.955,.985,1,1]],cd=Xg.map((i,e)=>e===Xg.length-1?[Us(i[0]),Us(i[1]),1,1]:i.map(Us)),vy={lid:[.07,.185],power:[.14,.19],typing:[.18,.3],links:[.57,.7],trails:[.9,.99],pipeline:[.78,.9],cue:[0,.025]},Ds=Object.fromEntries(Object.entries(vy).map(([i,[e,t]])=>[i,[Us(e),Us(t)]])),yy=[Eo,Math.round((Eo+.035)*1e6)/1e6],Wa=i=>yr(Zr(i,yy)),hd=i=>Math.min(1,Math.max(0,i)),yr=i=>{let e=hd(i);return e*e*(3-2*e)},Os=i=>{let e=hd(i);return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2},Zr=(i,[e,t])=>t<=e?i>=t?1:0:hd((i-e)/(t-e));function ud(i){let e=0;for(let t of Ns)if(i>=t.end)e=t.to;else{if(i>t.start)return t.to-1+Os((i-t.start)/(t.end-t.start));break}return e}function Yg(i,e){let[t,n,r,s]=cd[e],o=n<=t?i>=t?1:0:yr((i-t)/(n-t)),a=s<=r?i>=s&&s<1?0:1:1-yr((i-r)/(s-r));return Math.min(o,a)}function qg(i){return{lid:Os(Zr(i,Ds.lid)),power:yr(Zr(i,Ds.power)),typing:Zr(i,Ds.typing),links:Os(Zr(i,Ds.links)),trails:Os(Zr(i,Ds.trails)),pipeline:Zr(i,Ds.pipeline),cue:1-Zr(i,Ds.cue)}}function Zg(i){let e=[[0,Ns[0].start]];for(let t=0;t<Ns.length;t+=1)e.push([Ns[t].end,t+1<Ns.length?Ns[t+1].start:Eo]);for(let t=0;t<e.length;t+=1){let[n,r]=e[t];if(i>=n&&i<=r)return yr((i-n)/(r-n));if(t===e.length-1&&i>r)return 1;let s=Ns[t];if(s&&i>s.start&&i<s.end)return 1-Os((i-s.start)/(s.end-s.start))}return 0}var Jg=i=>Math.round(ud(i));var b0=0,Jd=1,T0=2;var Cl=1,w0=2,ea=3,as=0,An=1,vi=2,Di=0,ls=1,yi=2,$d=3,Kd=4,E0=5;var qs=100,A0=101,C0=102,R0=103,P0=104,I0=200,L0=201,D0=202,N0=203,Qd=204,jd=205,U0=206,O0=207,F0=208,B0=209,z0=210,k0=211,V0=212,G0=213,H0=214,lh=0,ch=1,hh=2,Vo=3,uh=4,fh=5,dh=6,ph=7,ep=0,W0=1,X0=2,Hi=0,Rl=1,Pl=2,Il=3,Ll=4,Dl=5,Nl=6,Zs=7;var tp=300,cs=301,Js=302,Wh=303,Xh=304,Ul=306,mh=1e3,nr=1001,gh=1002,yn=1003,Y0=1004;var Ol=1005;var En=1006,Yh=1007;var hs=1008;var oi=1009,np=1010,ip=1011,ta=1012,qh=1013,Wi=1014,Xi=1015,un=1016,Zh=1017,Jh=1018,na=1020,rp=35902,sp=35899,op=1021,ap=1022,Ni=1023,rr=1026,us=1027,lp=1028,$h=1029,fs=1030,Kh=1031;var Qh=1033,Fl=33776,Bl=33777,zl=33778,kl=33779,jh=35840,eu=35841,tu=35842,nu=35843,iu=36196,ru=37492,su=37496,ou=37488,au=37489,Vl=37490,lu=37491,cu=37808,hu=37809,uu=37810,fu=37811,du=37812,pu=37813,mu=37814,gu=37815,_u=37816,xu=37817,vu=37818,yu=37819,Su=37820,Mu=37821,bu=36492,Tu=36494,wu=36495,Eu=36283,Au=36284,Gl=36285,Cu=36286;var ja=2300,_h=2301,oh=2302,Bd=2303,zd=2400,kd=2401,Vd=2402;var q0=3200;var Ru=0,Z0=1,Pr="",on="srgb",el="srgb-linear",tl="linear",vt="srgb";var ah=7680;var J0=519,$0=512,K0=513,Q0=514,Pu=515,j0=516,e_=517,Iu=518,t_=519,n_=35044;var cp="300 es",Vi=2e3,Go=2001;function Sy(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function My(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function nl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function i_(){let i=nl("canvas");return i.style.display="block",i}var $g={},Ho=null;function hp(...i){let e="THREE."+i.shift();Ho?Ho("log",e,...i):console.log(e,...i)}function r_(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function et(...i){i=r_(i);let e="THREE."+i.shift();if(Ho)Ho("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function tt(...i){i=r_(i);let e="THREE."+i.shift();if(Ho)Ho("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Vs(...i){let e=i.join(" ");e in $g||($g[e]=!0,et(...i))}function s_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var o_={[lh]:ch,[hh]:dh,[uh]:ph,[Vo]:fh,[ch]:lh,[dh]:hh,[ph]:uh,[fh]:Vo},sr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var fd=Math.PI/180,il=180/Math.PI;function ia(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fn[i&255]+Fn[i>>8&255]+Fn[i>>16&255]+Fn[i>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[t&63|128]+Fn[t>>8&255]+"-"+Fn[t>>16&255]+Fn[t>>24&255]+Fn[n&255]+Fn[n>>8&255]+Fn[n>>16&255]+Fn[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function by(i,e){return(i%e+e)%e}function dd(i,e,t){return(1-t)*i+t*e}function Xa(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var gp=class gp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gp.prototype.isVector2=!0;var ge=gp,or=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3],u=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(d!==_||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*_;p<0&&(u=-u,f=-f,g=-g,_=-_,p=-p);let m=1-a;if(p<.9995){let y=Math.acos(p),b=Math.sin(y);m=Math.sin(m*y)/b,a=Math.sin(a*y)/b,l=l*m+u*a,c=c*m+f*a,h=h*m+g*a,d=d*m+_*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+g*a,d=d*m+_*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),d=a(s/2),u=l(n/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_p=class _p{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pd.copy(this).projectOnVector(e),this.sub(pd)}reflect(e){return this.sub(pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_p.prototype.isVector3=!0;var O=_p,pd=new O,Kg=new or,xp=class xp{constructor(e,t,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=r[0],p=r[3],m=r[6],y=r[1],b=r[4],x=r[7],M=r[2],T=r[5],A=r[8];return s[0]=o*_+a*y+l*M,s[3]=o*p+a*b+l*T,s[6]=o*m+a*x+l*A,s[1]=c*_+h*y+d*M,s[4]=c*p+h*b+d*T,s[7]=c*m+h*x+d*A,s[2]=u*_+f*y+g*M,s[5]=u*p+f*b+g*T,s[8]=u*m+f*x+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,g=t*d+n*u+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(r*c-h*n)*_,e[2]=(a*n-r*o)*_,e[3]=u*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(md.makeScale(e,t)),this}rotate(e){return Vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(md.makeRotation(-e)),this}translate(e,t){return Vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(md.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xp.prototype.isMatrix3=!0;var rt=xp,md=new rt,Qg=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jg=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ty(){let i={enabled:!0,workingColorSpace:el,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===vt&&(r.r=Er(r.r),r.g=Er(r.g),r.b=Er(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(r.r=ko(r.r),r.g=ko(r.g),r.b=ko(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pr?tl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[el]:{primaries:e,whitePoint:n,transfer:tl,toXYZ:Qg,fromXYZ:jg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:Qg,fromXYZ:jg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}var dt=Ty();function Er(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ko(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ao,xh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ao===void 0&&(Ao=nl("canvas")),Ao.width=e.width,Ao.height=e.height;let r=Ao.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ao}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=nl("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Er(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Er(t[n]/255)*255):t[n]=Er(t[n]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wy=0,Wo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=ia(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(gd(r[o].image)):s.push(gd(r[o]))}else s=gd(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function gd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}var Ey=0,_d=new O,jn=class i extends sr{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=nr,r=nr,s=En,o=hs,a=Ni,l=oi,c=i.DEFAULT_ANISOTROPY,h=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=ia(),this.name="",this.source=new Wo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_d).x}get height(){return this.source.getSize(_d).y}get depth(){return this.source.getSize(_d).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mh:e.x=e.x-Math.floor(e.x);break;case nr:e.x=e.x<0?0:1;break;case gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mh:e.y=e.y-Math.floor(e.y);break;case nr:e.y=e.y<0?0:1;break;case gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=tp;jn.DEFAULT_ANISOTROPY=1;var vp=class vp{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,x=(f+1)/2,M=(m+1)/2,T=(h+u)/4,A=(d+_)/4,v=(g+p)/4;return b>x&&b>M?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=T/n,s=A/n):x>M?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=T/r,s=v/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=A/s,r=v/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vp.prototype.isVector4=!0;var zt=vp,vh=class extends sr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new jn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Wo(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends vh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},rl=class extends jn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yh=class extends jn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Hh=class Hh{constructor(e,t,n,r,s,o,a,l,c,h,d,u,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,d,u,f,g,_,p)}set(e,t,n,r,s,o,a,l,c,h,d,u,f,g,_,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hh().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Co.setFromMatrixColumn(e,0).length(),s=1/Co.setFromMatrixColumn(e,1).length(),o=1/Co.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ay,e,Cy)}lookAt(e,t,n){let r=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Jr.crossVectors(n,mi),Jr.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Jr.crossVectors(n,mi)),Jr.normalize(),zc.crossVectors(mi,Jr),r[0]=Jr.x,r[4]=zc.x,r[8]=mi.x,r[1]=Jr.y,r[5]=zc.y,r[9]=mi.y,r[2]=Jr.z,r[6]=zc.z,r[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],b=n[7],x=n[11],M=n[15],T=r[0],A=r[4],v=r[8],w=r[12],R=r[1],N=r[5],D=r[9],V=r[13],I=r[2],B=r[6],X=r[10],G=r[14],te=r[3],F=r[7],C=r[11],Y=r[15];return s[0]=o*T+a*R+l*I+c*te,s[4]=o*A+a*N+l*B+c*F,s[8]=o*v+a*D+l*X+c*C,s[12]=o*w+a*V+l*G+c*Y,s[1]=h*T+d*R+u*I+f*te,s[5]=h*A+d*N+u*B+f*F,s[9]=h*v+d*D+u*X+f*C,s[13]=h*w+d*V+u*G+f*Y,s[2]=g*T+_*R+p*I+m*te,s[6]=g*A+_*N+p*B+m*F,s[10]=g*v+_*D+p*X+m*C,s[14]=g*w+_*V+p*G+m*Y,s[3]=y*T+b*R+x*I+M*te,s[7]=y*A+b*N+x*B+M*F,s[11]=y*v+b*D+x*X+M*C,s[15]=y*w+b*V+x*G+M*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15],y=l*f-c*u,b=a*f-c*d,x=a*u-l*d,M=o*f-c*h,T=o*u-l*h,A=o*d-a*h;return t*(_*y-p*b+m*x)-n*(g*y-p*M+m*T)+r*(g*b-_*M+m*A)-s*(g*x-_*T+p*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(s*h-a*l)+r*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=t*a-n*o,b=t*l-r*o,x=t*c-s*o,M=n*l-r*a,T=n*c-s*a,A=r*c-s*l,v=h*_-d*g,w=h*p-u*g,R=h*m-f*g,N=d*p-u*_,D=d*m-f*_,V=u*m-f*p,I=y*V-b*D+x*N+M*R-T*w+A*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return e[0]=(a*V-l*D+c*N)*B,e[1]=(r*D-n*V-s*N)*B,e[2]=(_*A-p*T+m*M)*B,e[3]=(u*T-d*A-f*M)*B,e[4]=(l*R-o*V-c*w)*B,e[5]=(t*V-r*R+s*w)*B,e[6]=(p*x-g*A-m*b)*B,e[7]=(h*A-u*x+f*b)*B,e[8]=(o*D-a*R+c*v)*B,e[9]=(n*R-t*D-s*v)*B,e[10]=(g*T-_*x+m*y)*B,e[11]=(d*x-h*T-f*y)*B,e[12]=(a*w-o*N-l*v)*B,e[13]=(t*N-n*w+r*v)*B,e[14]=(_*b-g*M-p*y)*B,e[15]=(h*M-d*b+u*y)*B,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,g=s*d,_=o*h,p=o*d,m=a*d,y=l*c,b=l*h,x=l*d,M=n.x,T=n.y,A=n.z;return r[0]=(1-(_+m))*M,r[1]=(f+x)*M,r[2]=(g-b)*M,r[3]=0,r[4]=(f-x)*T,r[5]=(1-(u+m))*T,r[6]=(p+y)*T,r[7]=0,r[8]=(g+b)*A,r[9]=(p-y)*A,r[10]=(1-(u+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Co.set(r[0],r[1],r[2]).length(),a=Co.set(r[4],r[5],r[6]).length(),l=Co.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Fi.copy(this);let c=1/o,h=1/a,d=1/l;return Fi.elements[0]*=c,Fi.elements[1]*=c,Fi.elements[2]*=c,Fi.elements[4]*=h,Fi.elements[5]*=h,Fi.elements[6]*=h,Fi.elements[8]*=d,Fi.elements[9]*=d,Fi.elements[10]*=d,t.setFromRotationMatrix(Fi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=Vi,l=!1){let c=this.elements,h=2*s/(t-e),d=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===Vi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Go)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Vi,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-r),u=-(t+e)/(t-e),f=-(n+r)/(n-r),g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===Vi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Go)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Hh.prototype.isMatrix4=!0;var Bt=Hh,Co=new O,Fi=new Bt,Ay=new O(0,0,0),Cy=new O(1,1,1),Jr=new O,zc=new O,mi=new O,e0=new Bt,t0=new or,Ar=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return e0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(e0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return t0.setFromEuler(this),this.setFromQuaternion(t0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ar.DEFAULT_ORDER="XYZ";var sl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ry=0,n0=new O,Ro=new or,Sr=new Bt,kc=new O,Ya=new O,Py=new O,Iy=new or,i0=new O(1,0,0),r0=new O(0,1,0),s0=new O(0,0,1),o0={type:"added"},Ly={type:"removed"},Po={type:"childadded",child:null},xd={type:"childremoved",child:null},hn=class i extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new Ar,n=new or,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new rt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ro.setFromAxisAngle(e,t),this.quaternion.multiply(Ro),this}rotateOnWorldAxis(e,t){return Ro.setFromAxisAngle(e,t),this.quaternion.premultiply(Ro),this}rotateX(e){return this.rotateOnAxis(i0,e)}rotateY(e){return this.rotateOnAxis(r0,e)}rotateZ(e){return this.rotateOnAxis(s0,e)}translateOnAxis(e,t){return n0.copy(e).applyQuaternion(this.quaternion),this.position.add(n0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(i0,e)}translateY(e){return this.translateOnAxis(r0,e)}translateZ(e){return this.translateOnAxis(s0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kc.copy(e):kc.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sr.lookAt(Ya,kc,this.up):Sr.lookAt(kc,Ya,this.up),this.quaternion.setFromRotationMatrix(Sr),r&&(Sr.extractRotation(r.matrixWorld),Ro.setFromRotationMatrix(Sr),this.quaternion.premultiply(Ro.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(o0),Po.child=e,this.dispatchEvent(Po),Po.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ly),xd.child=e,this.dispatchEvent(xd),xd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(o0),Po.child=e,this.dispatchEvent(Po),Po.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,e,Py),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,Iy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};hn.DEFAULT_UP=new O(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dy={type:"move"},Xo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dy)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},a_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$r={h:0,s:0,l:0},Vc={h:0,s:0,l:0};function vd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=dt.workingColorSpace){if(e=by(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=vd(o,s,e+1/3),this.g=vd(o,s,e),this.b=vd(o,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=on){function n(s){s!==void 0&&parseFloat(s)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){let n=a_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return dt.workingToColorSpace(Bn.copy(this),e),Math.round(pt(Bn.r*255,0,255))*65536+Math.round(pt(Bn.g*255,0,255))*256+Math.round(pt(Bn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Bn.copy(this),t);let n=Bn.r,r=Bn.g,s=Bn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Bn.copy(this),t),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=on){dt.workingToColorSpace(Bn.copy(this),e);let t=Bn.r,n=Bn.g,r=Bn.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL($r),this.setHSL($r.h+e,$r.s+t,$r.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($r),e.getHSL(Vc);let n=dd($r.h,Vc.h,t),r=dd($r.s,Vc.s,t),s=dd($r.l,Vc.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bn=new je;je.NAMES=a_;var Gs=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ar,this.environmentIntensity=1,this.environmentRotation=new Ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bi=new O,Mr=new O,yd=new O,br=new O,Io=new O,Lo=new O,a0=new O,Sd=new O,Md=new O,bd=new O,Td=new zt,wd=new zt,Ed=new zt,es=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bi.subVectors(e,t),r.cross(Bi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Bi.subVectors(r,t),Mr.subVectors(n,t),yd.subVectors(e,t);let o=Bi.dot(Bi),a=Bi.dot(Mr),l=Bi.dot(yd),c=Mr.dot(Mr),h=Mr.dot(yd),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,br)===null?!1:br.x>=0&&br.y>=0&&br.x+br.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,br)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,br.x),l.addScaledVector(o,br.y),l.addScaledVector(a,br.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Td.setScalar(0),wd.setScalar(0),Ed.setScalar(0),Td.fromBufferAttribute(e,t),wd.fromBufferAttribute(e,n),Ed.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Td,s.x),o.addScaledVector(wd,s.y),o.addScaledVector(Ed,s.z),o}static isFrontFacing(e,t,n,r){return Bi.subVectors(n,t),Mr.subVectors(e,t),Bi.cross(Mr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),Mr.subVectors(this.a,this.b),Bi.cross(Mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Io.subVectors(r,n),Lo.subVectors(s,n),Sd.subVectors(e,n);let l=Io.dot(Sd),c=Lo.dot(Sd);if(l<=0&&c<=0)return t.copy(n);Md.subVectors(e,r);let h=Io.dot(Md),d=Lo.dot(Md);if(h>=0&&d<=h)return t.copy(r);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Io,o);bd.subVectors(e,s);let f=Io.dot(bd),g=Lo.dot(bd);if(g>=0&&f<=g)return t.copy(s);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Lo,a);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return a0.subVectors(s,r),a=(d-h)/(d-h+(f-g)),t.copy(r).addScaledVector(a0,a);let m=1/(p+_+u);return o=_*m,a=u*m,t.copy(n).addScaledVector(Io,o).addScaledVector(Lo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zi):zi.fromBufferAttribute(s,o),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gc.copy(n.boundingBox)),Gc.applyMatrix4(e.matrixWorld),this.union(Gc)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),Hc.subVectors(this.max,qa),Do.subVectors(e.a,qa),No.subVectors(e.b,qa),Uo.subVectors(e.c,qa),Kr.subVectors(No,Do),Qr.subVectors(Uo,No),Fs.subVectors(Do,Uo);let t=[0,-Kr.z,Kr.y,0,-Qr.z,Qr.y,0,-Fs.z,Fs.y,Kr.z,0,-Kr.x,Qr.z,0,-Qr.x,Fs.z,0,-Fs.x,-Kr.y,Kr.x,0,-Qr.y,Qr.x,0,-Fs.y,Fs.x,0];return!Ad(t,Do,No,Uo,Hc)||(t=[1,0,0,0,1,0,0,0,1],!Ad(t,Do,No,Uo,Hc))?!1:(Wc.crossVectors(Kr,Qr),t=[Wc.x,Wc.y,Wc.z],Ad(t,Do,No,Uo,Hc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Tr=[new O,new O,new O,new O,new O,new O,new O,new O],zi=new O,Gc=new Sn,Do=new O,No=new O,Uo=new O,Kr=new O,Qr=new O,Fs=new O,qa=new O,Hc=new O,Wc=new O,Bs=new O;function Ad(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Bs.fromArray(i,s);let a=r.x*Math.abs(Bs.x)+r.y*Math.abs(Bs.y)+r.z*Math.abs(Bs.z),l=e.dot(Bs),c=t.dot(Bs),h=n.dot(Bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var sn=new O,Xc=new ge,Ny=0,Li=class extends sr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ny++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=n_,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xc.fromBufferAttribute(this,t),Xc.applyMatrix3(e),this.setXY(t,Xc.x,Xc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xa(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=si(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xa(t,this.array)),t}setX(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xa(t,this.array)),t}setY(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xa(t,this.array)),t}setW(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),n=si(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),n=si(n,this.array),r=si(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),n=si(n,this.array),r=si(r,this.array),s=si(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ol=class extends Li{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var al=class extends Li{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var It=class extends Li{constructor(e,t,n){super(new Float32Array(e),t,n)}},Uy=new Sn,Za=new O,Cd=new O,Yo=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Uy.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Za.subVectors(e,this.center);let t=Za.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Za,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Za.copy(e.center).add(Cd)),this.expandByPoint(Za.copy(e.center).sub(Cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Oy=0,Ii=new Bt,Rd=new hn,Oo=new O,gi=new Sn,Ja=new Sn,xn=new O,kn=class i extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sy(e)?al:ol)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,t,n){return Ii.makeTranslation(e,t,n),this.applyMatrix4(Ii),this}scale(e,t,n){return Ii.makeScale(e,t,n),this.applyMatrix4(Ii),this}lookAt(e){return Rd.lookAt(e),Rd.updateMatrix(),this.applyMatrix4(Rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oo).negate(),this.translate(Oo.x,Oo.y,Oo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new It(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];gi.setFromBufferAttribute(s),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ja.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(gi.min,Ja.min),gi.expandByPoint(xn),xn.addVectors(gi.max,Ja.max),gi.expandByPoint(xn)):(gi.expandByPoint(Ja.min),gi.expandByPoint(Ja.max))}gi.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)xn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(xn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xn.fromBufferAttribute(a,c),l&&(Oo.fromBufferAttribute(e,c),xn.add(Oo)),r=Math.max(r,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Li(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new O,l[v]=new O;let c=new O,h=new O,d=new O,u=new ge,f=new ge,g=new ge,_=new O,p=new O;function m(v,w,R){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,R),u.fromBufferAttribute(s,v),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,R),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(N),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(N),a[v].add(_),a[w].add(_),a[R].add(_),l[v].add(p),l[w].add(p),l[R].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,w=y.length;v<w;++v){let R=y[v],N=R.start,D=R.count;for(let V=N,I=N+D;V<I;V+=3)m(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let b=new O,x=new O,M=new O,T=new O;function A(v){M.fromBufferAttribute(r,v),T.copy(M);let w=a[v];b.copy(w),b.sub(M.multiplyScalar(M.dot(w))).normalize(),x.crossVectors(T,w);let N=x.dot(l[v])<0?-1:1;o.setXYZW(v,b.x,b.y,b.z,N)}for(let v=0,w=y.length;v<w;++v){let R=y[v],N=R.start,D=R.count;for(let V=N,I=N+D;V<I;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Li(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,h=new O,d=new O;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new Li(u,h,d)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Pd=new O,Fy=new O,By=new rt,ki=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Pd.subVectors(n,t).cross(Fy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Pd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||By.getNormalMatrix(e),r=this.coplanarPoint(Pd).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},zy=0,ts=class extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=ia(),this.name="",this.type="Material",this.blending=ls,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qd,this.blendDst=jd,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=J0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ah,this.stencilZFail=ah,this.stencilZPass=ah,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ki().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var wr=new O,Id=new O,Yc=new O,qc=new O,Sh=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wr.copy(this.origin).addScaledVector(this.direction,t),wr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Id.copy(e).add(t).multiplyScalar(.5),Yc.copy(t).sub(e).normalize(),qc.copy(this.origin).sub(Id);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Yc),a=qc.dot(this.direction),l=-qc.dot(Yc),c=qc.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=s*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Id).addScaledVector(Yc,u),f}intersectSphere(e,t){if(e.radius<0)return null;wr.subVectors(e.center,this.origin);let n=wr.dot(this.direction),r=wr.dot(wr)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,wr)!==null}intersectTriangle(e,t,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,g=t.x-o.x,_=t.y-o.y,p=t.z-o.z,m=n.x-o.x,y=n.y-o.y,b=n.z-o.z,x=Math.abs(l),M=Math.abs(c),T=Math.abs(h),A,v,w,R,N,D,V,I,B,X,G,te;if(x>=M&&x>=T?(w=l,D=d,B=g,te=m,l>=0?(A=c,v=h,R=u,N=f,V=_,I=p,X=y,G=b):(A=h,v=c,R=f,N=u,V=p,I=_,X=b,G=y)):M>=T?(w=c,D=u,B=_,te=y,c>=0?(A=h,v=l,R=f,N=d,V=p,I=g,X=b,G=m):(A=l,v=h,R=d,N=f,V=g,I=p,X=m,G=b)):(w=h,D=f,B=p,te=b,h>=0?(A=l,v=c,R=d,N=u,V=g,I=_,X=m,G=y):(A=c,v=l,R=u,N=d,V=_,I=g,X=y,G=m)),w===0)return null;let F=A/w,C=v/w,Y=1/w,de=R-F*D,ae=N-C*D,Pe=V-F*B,Ue=I-C*B,Te=X-F*te,$=G-C*te,ne=Te*Ue-$*Pe,oe=de*$-ae*Te,Ce=Pe*ae-Ue*de;if(r){if(ne<0||oe<0||Ce<0)return null}else if((ne<0||oe<0||Ce<0)&&(ne>0||oe>0||Ce>0))return null;let me=ne+oe+Ce;if(me===0)return null;let Re=Y*(ne*D+oe*B+Ce*te);return(me>0?Re<0:Re>0)?null:this.at(Re/me,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mn=class extends ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ar,this.combine=ep,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},l0=new Bt,zs=new Sh,Zc=new Yo,c0=new O,Jc=new O,$c=new O,Kc=new O,Ld=new O,Qc=new O,h0=new O,jc=new O,st=class extends hn{constructor(e=new kn,t=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Qc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(Ld.fromBufferAttribute(d,e),o?Qc.addScaledVector(Ld,h):Qc.addScaledVector(Ld.sub(t),h))}t.add(Qc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zc.copy(n.boundingSphere),Zc.applyMatrix4(s),zs.copy(e.ray).recast(e.near),!(Zc.containsPoint(zs.origin)===!1&&(zs.intersectSphere(Zc,c0)===null||zs.origin.distanceToSquared(c0)>(e.far-e.near)**2))&&(l0.copy(s).invert(),zs.copy(e.ray).applyMatrix4(l0),!(n.boundingBox!==null&&zs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zs)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),b=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let x=y,M=b;x<M;x+=3){let T=a.getX(x),A=a.getX(x+1),v=a.getX(x+2);r=eh(this,m,e,n,c,h,d,T,A,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let y=a.getX(p),b=a.getX(p+1),x=a.getX(p+2);r=eh(this,o,e,n,c,h,d,y,b,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=y,M=b;x<M;x+=3){let T=x,A=x+1,v=x+2;r=eh(this,m,e,n,c,h,d,T,A,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let y=p,b=p+1,x=p+2;r=eh(this,o,e,n,c,h,d,y,b,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function ky(i,e,t,n,r,s,o,a){let l;if(e.side===An?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===as,a),l===null)return null;jc.copy(a),jc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(jc);return c<t.near||c>t.far?null:{distance:c,point:jc.clone(),object:i}}function eh(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Jc),i.getVertexPosition(l,$c),i.getVertexPosition(c,Kc);let h=ky(i,e,t,n,Jc,$c,Kc,h0);if(h){let d=new O;es.getBarycoord(h0,Jc,$c,Kc,d),r&&(h.uv=es.getInterpolatedAttribute(r,a,l,c,d,new ge)),s&&(h.uv1=es.getInterpolatedAttribute(s,a,l,c,d,new ge)),o&&(h.normal=es.getInterpolatedAttribute(o,a,l,c,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new O,materialIndex:0};es.getNormal(Jc,$c,Kc,u.normal),h.face=u,h.barycoord=d}return h}var Mh=class extends jn{constructor(e=null,t=1,n=1,r,s,o,a,l,c=yn,h=yn,d,u){super(null,o,a,l,c,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ks=new Yo,Vy=new ge(.5,.5),th=new O,qo=class{constructor(e=new ki,t=new ki,n=new ki,r=new ki,s=new ki,o=new ki){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vi,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],g=s[8],_=s[9],p=s[10],m=s[11],y=s[12],b=s[13],x=s[14],M=s[15];if(r[0].setComponents(c-o,f-h,m-g,M-y).normalize(),r[1].setComponents(c+o,f+h,m+g,M+y).normalize(),r[2].setComponents(c+a,f+d,m+_,M+b).normalize(),r[3].setComponents(c-a,f-d,m-_,M-b).normalize(),n)r[4].setComponents(l,u,p,x).normalize(),r[5].setComponents(c-l,f-u,m-p,M-x).normalize();else if(r[4].setComponents(c-l,f-u,m-p,M-x).normalize(),t===Vi)r[5].setComponents(c+l,f+u,m+p,M+x).normalize();else if(t===Go)r[5].setComponents(l,u,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(e){ks.center.set(0,0,0);let t=Vy.distanceTo(e.center);return ks.radius=.7071067811865476+t,ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(th.x=r.normal.x>0?e.max.x:e.min.x,th.y=r.normal.y>0?e.max.y:e.min.y,th.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(th)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ll=class extends jn{constructor(e=[],t=cs,n,r,s,o,a,l,c,h){super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Cr=class extends jn{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ns=class extends jn{constructor(e,t,n=Wi,r,s,o,a=yn,l=yn,c,h=rr,d=1){if(h!==rr&&h!==us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},bh=class extends ns{constructor(e,t=Wi,n=cs,r,s,o=yn,a=yn,l,c=rr){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},cl=class extends jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ar=class i extends kn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(d,2));function g(_,p,m,y,b,x,M,T,A,v,w){let R=x/A,N=M/v,D=x/2,V=M/2,I=T/2,B=A+1,X=v+1,G=0,te=0,F=new O;for(let C=0;C<X;C++){let Y=C*N-V;for(let de=0;de<B;de++){let ae=de*R-D;F[_]=ae*y,F[p]=Y*b,F[m]=I,c.push(F.x,F.y,F.z),F[_]=0,F[p]=0,F[m]=T>0?1:-1,h.push(F.x,F.y,F.z),d.push(de/A),d.push(1-C/v),G+=1}}for(let C=0;C<v;C++)for(let Y=0;Y<A;Y++){let de=u+Y+B*C,ae=u+Y+B*(C+1),Pe=u+(Y+1)+B*(C+1),Ue=u+(Y+1)+B*C;l.push(de,ae,Ue),l.push(ae,Pe,Ue),te+=6}a.addGroup(f,te,w),f+=te,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Zo=class i extends kn{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],d=[],u=[],f=[],g=0,_=[],p=n/2,m=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new It(d,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(f,2));function y(){let x=new O,M=new O,T=0,A=(t-e)/n;for(let v=0;v<=s;v++){let w=[],R=v/s,N=R*(t-e)+e;for(let D=0;D<=r;D++){let V=D/r,I=V*l+a,B=Math.sin(I),X=Math.cos(I);M.x=N*B,M.y=-R*n+p,M.z=N*X,d.push(M.x,M.y,M.z),x.set(B,A,X).normalize(),u.push(x.x,x.y,x.z),f.push(V,1-R),w.push(g++)}_.push(w)}for(let v=0;v<r;v++)for(let w=0;w<s;w++){let R=_[w][v],N=_[w+1][v],D=_[w+1][v+1],V=_[w][v+1];(e>0||w!==0)&&(h.push(R,N,V),T+=3),(t>0||w!==s-1)&&(h.push(N,D,V),T+=3)}c.addGroup(m,T,0),m+=T}function b(x){let M=g,T=new ge,A=new O,v=0,w=x===!0?e:t,R=x===!0?1:-1;for(let D=1;D<=r;D++)d.push(0,p*R,0),u.push(0,R,0),f.push(.5,.5),g++;let N=g;for(let D=0;D<=r;D++){let I=D/r*l+a,B=Math.cos(I),X=Math.sin(I);A.x=w*X,A.y=p*R,A.z=w*B,d.push(A.x,A.y,A.z),u.push(0,R,0),T.x=B*.5+.5,T.y=X*.5*R+.5,f.push(T.x,T.y),g++}for(let D=0;D<r;D++){let V=M+D,I=N+D;x===!0?h.push(I,I+1,V):h.push(I+1,I,V),v+=3}c.addGroup(m,v,x===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hl=class i extends Zo{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var _i=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){et("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let h=n[r],u=n[r+1]-h,f=(o-h)/u;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ge:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new O,r=[],s=[],o=[],a=new O,l=new Bt;for(let f=0;f<=e;f++){let g=f/e;r[f]=this.getTangentAt(g,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(pt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(pt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Jo=class extends _i{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ge){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Th=class extends Jo{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function up(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,r(o,a,u,f)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var u0=new O,f0=new O,Dd=new up,Nd=new up,Ud=new up,Hs=class extends _i{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new O){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(f0.subVectors(r[0],r[1]).add(r[0]),c=f0);let d=r[a%s],u=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(u0.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=u0),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Dd.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,p),Nd.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,p),Ud.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Dd.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Nd.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ud.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Dd.calc(l),Nd.calc(l),Ud.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function d0(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function Gy(i,e){let t=1-i;return t*t*e}function Hy(i,e){return 2*(1-i)*i*e}function Wy(i,e){return i*i*e}function Ka(i,e,t,n){return Gy(i,e)+Hy(i,t)+Wy(i,n)}function Xy(i,e){let t=1-i;return t*t*t*e}function Yy(i,e){let t=1-i;return 3*t*t*i*e}function qy(i,e){return 3*(1-i)*i*i*e}function Zy(i,e){return i*i*i*e}function Qa(i,e,t,n,r){return Xy(i,e)+Yy(i,t)+qy(i,n)+Zy(i,r)}var ul=class extends _i{constructor(e=new ge,t=new ge,n=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ge){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Qa(e,r.x,s.x,o.x,a.x),Qa(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wh=class extends _i{constructor(e=new O,t=new O,n=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new O){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Qa(e,r.x,s.x,o.x,a.x),Qa(e,r.y,s.y,o.y,a.y),Qa(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fl=class extends _i{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eh=class extends _i{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dl=class extends _i{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ka(e,r.x,s.x,o.x),Ka(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ws=class extends _i{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ka(e,r.x,s.x,o.x),Ka(e,r.y,s.y,o.y),Ka(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pl=class extends _i{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(d0(a,l.x,c.x,h.x,d.x),d0(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ge().fromArray(r))}return this}},Ah=Object.freeze({__proto__:null,ArcCurve:Th,CatmullRomCurve3:Hs,CubicBezierCurve:ul,CubicBezierCurve3:wh,EllipseCurve:Jo,LineCurve:fl,LineCurve3:Eh,QuadraticBezierCurve:dl,QuadraticBezierCurve3:Ws,SplineCurve:pl}),Ch=class extends _i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ah[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Ah[r.type]().fromJSON(r))}return this}},ml=class extends Ch{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new fl(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new dl(this.currentPoint.clone(),new ge(e,t),new ge(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new ul(this.currentPoint.clone(),new ge(e,t),new ge(n,r),new ge(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new pl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new Jo(e,t,n,r,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Xs=class extends ml{constructor(e){super(e),this.uuid=ia(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new ml().fromJSON(r))}return this}};function Jy(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=l_(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=eS(i,e,s,t)),i.length>80*t){a=i[0],l=i[1];let h=a,d=l;for(let u=t;u<r;u+=t){let f=i[u],g=i[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return gl(s,o,t,a,l,c,0),o}function l_(i,e,t,n,r){let s;if(r===uS(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=p0(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=p0(o/n|0,i[o],i[o+1],s);return s&&$o(s,s.next)&&(xl(s),s=s.next),s}function Ys(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&($o(t,t.next)||Ht(t.prev,t,t.next)===0)){if(xl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function gl(i,e,t,n,r,s,o){if(!i)return;!o&&s&&sS(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?Ky(i,n,r,s):$y(i)){e.push(l.i,i.i,c.i),xl(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Qy(Ys(i),e),gl(i,e,t,n,r,s,2)):o===2&&jy(i,e,t,n,r,s):gl(Ys(i),e,t,n,r,s,1);break}}}function $y(i){let e=i.prev,t=i,n=i.next;if(Ht(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(r,s,o),d=Math.min(a,l,c),u=Math.max(r,s,o),f=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&$a(r,a,s,l,o,c,g.x,g.y)&&Ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ky(i,e,t,n){let r=i.prev,s=i,o=i.next;if(Ht(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,d=s.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,d,u),_=Math.max(a,l,c),p=Math.max(h,d,u),m=Gd(f,g,e,t,n),y=Gd(_,p,e,t,n),b=i.prevZ,x=i.nextZ;for(;b&&b.z>=m&&x&&x.z<=y;){if(b.x>=f&&b.x<=_&&b.y>=g&&b.y<=p&&b!==r&&b!==o&&$a(a,h,l,d,c,u,b.x,b.y)&&Ht(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==r&&x!==o&&$a(a,h,l,d,c,u,x.x,x.y)&&Ht(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=_&&b.y>=g&&b.y<=p&&b!==r&&b!==o&&$a(a,h,l,d,c,u,b.x,b.y)&&Ht(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==r&&x!==o&&$a(a,h,l,d,c,u,x.x,x.y)&&Ht(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Qy(i,e){let t=i;do{let n=t.prev,r=t.next.next;!$o(n,r)&&h_(n,t,t.next,r)&&_l(n,r)&&_l(r,n)&&(e.push(n.i,t.i,r.i),xl(t),xl(t.next),t=i=r),t=t.next}while(t!==i);return Ys(t)}function jy(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lS(o,a)){let l=u_(o,a);o=Ys(o,o.next),l=Ys(l,l.next),gl(o,e,t,n,r,s,0),gl(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function eS(i,e,t,n){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=l_(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(aS(c))}r.sort(tS);for(let s=0;s<r.length;s++)t=nS(r[s],t);return t}function tS(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function nS(i,e){let t=iS(i,e);if(!t)return e;let n=u_(t,i);return Ys(n,n.next),Ys(t,t.next)}function iS(i,e){let t=e,n=i.x,r=i.y,s=-1/0,o;if($o(i,t))return t;do{if($o(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&c_(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){let d=Math.abs(r-t.y)/(n-t.x);_l(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&rS(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function rS(i,e){return Ht(i.prev,i,e.prev)<0&&Ht(e.next,i,i.next)<0}function sS(i,e,t,n){let r=i;do r.z===0&&(r.z=Gd(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,oS(r)}function oS(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function Gd(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function aS(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function c_(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function $a(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&c_(i,e,t,n,r,s,o,a)}function lS(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!cS(i,e)&&(_l(i,e)&&_l(e,i)&&hS(i,e)&&(Ht(i.prev,i,e.prev)||Ht(i,e.prev,e))||$o(i,e)&&Ht(i.prev,i,i.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function $o(i,e){return i.x===e.x&&i.y===e.y}function h_(i,e,t,n){let r=ih(Ht(i,e,t)),s=ih(Ht(i,e,n)),o=ih(Ht(t,n,i)),a=ih(Ht(t,n,e));return!!(r!==s&&o!==a||r===0&&nh(i,t,e)||s===0&&nh(i,n,e)||o===0&&nh(t,i,n)||a===0&&nh(t,e,n))}function nh(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ih(i){return i>0?1:i<0?-1:0}function cS(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&h_(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function _l(i,e){return Ht(i.prev,i,i.next)<0?Ht(i,e,i.next)>=0&&Ht(i,i.prev,e)>=0:Ht(i,e,i.prev)<0||Ht(i,i.next,e)<0}function hS(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function u_(i,e){let t=Hd(i.i,i.x,i.y),n=Hd(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function p0(i,e,t,n){let r=Hd(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function xl(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hd(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function uS(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Wd=class{static triangulate(e,t,n=2){return Jy(e,t,n)}},ir=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];m0(e),g0(n,e);let o=e.length;t.forEach(m0);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,g0(n,t[l]);let a=Wd.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function m0(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function g0(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var vl=class i extends kn{constructor(e=new Xs([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new It(r,3)),this.setAttribute("uv",new It(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:fS,b,x=!1,M,T,A,v;if(m){b=m.getSpacedPoints(h),x=!0,u=!1;let j=m.isCatmullRomCurve3?m.closed:!1;M=m.computeFrenetFrames(h,j),T=new O,A=new O,v=new O}u||(p=0,f=0,g=0,_=0);let w=a.extractPoints(c),R=w.shape,N=w.holes;if(!ir.isClockWise(R)){R=R.reverse();for(let j=0,W=N.length;j<W;j++){let Q=N[j];ir.isClockWise(Q)&&(N[j]=Q.reverse())}}function V(j){let Q=10000000000000001e-36,L=j[0];for(let le=1;le<=j.length;le++){let Le=le%j.length,Fe=j[Le],Ee=Fe.x-L.x,Oe=Fe.y-L.y,U=Ee*Ee+Oe*Oe,nt=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(L.x),Math.abs(L.y)),Ge=Q*nt*nt;if(U<=Ge){j.splice(Le,1),le--;continue}L=Fe}}V(R),N.forEach(V);let I=N.length,B=R;for(let j=0;j<I;j++){let W=N[j];R=R.concat(W)}function X(j,W,Q){return W||tt("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(W,Q)}let G=R.length;function te(j,W,Q){let L,le,Le,Fe=j.x-W.x,Ee=j.y-W.y,Oe=Q.x-j.x,U=Q.y-j.y,nt=Fe*Fe+Ee*Ee,Ge=Fe*U-Ee*Oe;if(Math.abs(Ge)>Number.EPSILON){let P=Math.sqrt(nt),S=Math.sqrt(Oe*Oe+U*U),H=W.x-Ee/P,q=W.y+Fe/P,ee=Q.x-U/S,xe=Q.y+Oe/S,fe=((ee-H)*U-(xe-q)*Oe)/(Fe*U-Ee*Oe);L=H+Fe*fe-j.x,le=q+Ee*fe-j.y;let ie=L*L+le*le;if(ie<=2)return new ge(L,le);Le=Math.sqrt(ie/2)}else{let P=!1;Fe>Number.EPSILON?Oe>Number.EPSILON&&(P=!0):Fe<-Number.EPSILON?Oe<-Number.EPSILON&&(P=!0):Math.sign(Ee)===Math.sign(U)&&(P=!0),P?(L=-Ee,le=Fe,Le=Math.sqrt(nt)):(L=Fe,le=Ee,Le=Math.sqrt(nt/2))}return new ge(L/Le,le/Le)}let F=[];for(let j=0,W=B.length,Q=W-1,L=j+1;j<W;j++,Q++,L++)Q===W&&(Q=0),L===W&&(L=0),F[j]=te(B[j],B[Q],B[L]);let C=[],Y,de=F.concat();for(let j=0,W=I;j<W;j++){let Q=N[j];Y=[];for(let L=0,le=Q.length,Le=le-1,Fe=L+1;L<le;L++,Le++,Fe++)Le===le&&(Le=0),Fe===le&&(Fe=0),Y[L]=te(Q[L],Q[Le],Q[Fe]);C.push(Y),de=de.concat(Y)}let ae;if(p===0)ae=ir.triangulateShape(B,N);else{let j=[],W=[];for(let Q=0;Q<p;Q++){let L=Q/p,le=f*Math.cos(L*Math.PI/2),Le=g*Math.sin(L*Math.PI/2)+_;for(let Fe=0,Ee=B.length;Fe<Ee;Fe++){let Oe=X(B[Fe],F[Fe],Le);oe(Oe.x,Oe.y,-le),L===0&&j.push(Oe)}for(let Fe=0,Ee=I;Fe<Ee;Fe++){let Oe=N[Fe];Y=C[Fe];let U=[];for(let nt=0,Ge=Oe.length;nt<Ge;nt++){let P=X(Oe[nt],Y[nt],Le);oe(P.x,P.y,-le),L===0&&U.push(P)}L===0&&W.push(U)}}ae=ir.triangulateShape(j,W)}let Pe=ae.length,Ue=g+_;for(let j=0;j<G;j++){let W=u?X(R[j],de[j],Ue):R[j];x?(A.copy(M.normals[0]).multiplyScalar(W.x),T.copy(M.binormals[0]).multiplyScalar(W.y),v.copy(b[0]).add(A).add(T),oe(v.x,v.y,v.z)):oe(W.x,W.y,0)}for(let j=1;j<=h;j++)for(let W=0;W<G;W++){let Q=u?X(R[W],de[W],Ue):R[W];x?(A.copy(M.normals[j]).multiplyScalar(Q.x),T.copy(M.binormals[j]).multiplyScalar(Q.y),v.copy(b[j]).add(A).add(T),oe(v.x,v.y,v.z)):oe(Q.x,Q.y,d/h*j)}for(let j=p-1;j>=0;j--){let W=j/p,Q=f*Math.cos(W*Math.PI/2),L=g*Math.sin(W*Math.PI/2)+_;for(let le=0,Le=B.length;le<Le;le++){let Fe=X(B[le],F[le],L);oe(Fe.x,Fe.y,d+Q)}for(let le=0,Le=N.length;le<Le;le++){let Fe=N[le];Y=C[le];for(let Ee=0,Oe=Fe.length;Ee<Oe;Ee++){let U=X(Fe[Ee],Y[Ee],L);x?oe(U.x,U.y+b[h-1].y,b[h-1].x+Q):oe(U.x,U.y,d+Q)}}}Te(),$();function Te(){let j=r.length/3;if(u){let W=0,Q=G*W;for(let L=0;L<Pe;L++){let le=ae[L];Ce(le[2]+Q,le[1]+Q,le[0]+Q)}W=h+p*2,Q=G*W;for(let L=0;L<Pe;L++){let le=ae[L];Ce(le[0]+Q,le[1]+Q,le[2]+Q)}}else{for(let W=0;W<Pe;W++){let Q=ae[W];Ce(Q[2],Q[1],Q[0])}for(let W=0;W<Pe;W++){let Q=ae[W];Ce(Q[0]+G*h,Q[1]+G*h,Q[2]+G*h)}}n.addGroup(j,r.length/3-j,0)}function $(){let j=r.length/3,W=0;ne(B,W),W+=B.length;for(let Q=0,L=N.length;Q<L;Q++){let le=N[Q];ne(le,W),W+=le.length}n.addGroup(j,r.length/3-j,1)}function ne(j,W){let Q=j.length;for(;--Q>=0;){let L=Q,le=Q-1;le<0&&(le=j.length-1);for(let Le=0,Fe=h+p*2;Le<Fe;Le++){let Ee=G*Le,Oe=G*(Le+1),U=W+L+Ee,nt=W+le+Ee,Ge=W+le+Oe,P=W+L+Oe;me(U,nt,Ge,P)}}}function oe(j,W,Q){l.push(j),l.push(W),l.push(Q)}function Ce(j,W,Q){Re(j),Re(W),Re(Q);let L=r.length/3,le=y.generateTopUV(n,r,L-3,L-2,L-1);Ne(le[0]),Ne(le[1]),Ne(le[2])}function me(j,W,Q,L){Re(j),Re(W),Re(L),Re(W),Re(Q),Re(L);let le=r.length/3,Le=y.generateSideWallUV(n,r,le-6,le-3,le-2,le-1);Ne(Le[0]),Ne(Le[1]),Ne(Le[3]),Ne(Le[1]),Ne(Le[2]),Ne(Le[3])}function Re(j){r.push(l[j*3+0]),r.push(l[j*3+1]),r.push(l[j*3+2])}function Ne(j){s.push(j.x),s.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return dS(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ah[r.type]().fromJSON(r)),new i(n,e.options)}},fS={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],h=e[r*3+1];return[new ge(s,o),new ge(a,l),new ge(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[r*3],f=e[r*3+1],g=e[r*3+2],_=e[s*3],p=e[s*3+1],m=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ge(o,1-l),new ge(c,1-d),new ge(u,1-g),new ge(_,1-m)]:[new ge(a,1-l),new ge(h,1-d),new ge(f,1-g),new ge(p,1-m)]}};function dS(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Gi=class i extends kn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let y=m*u-o;for(let b=0;b<c;b++){let x=b*d-s;g.push(x,-y,0),_.push(0,0,1),p.push(b/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let b=y+c*m,x=y+c*(m+1),M=y+1+c*(m+1),T=y+1+c*m;f.push(b,x,T),f.push(x,M,T)}this.setIndex(f),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var yl=class i extends kn{constructor(e=new Xs([new ge(0,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new It(r,3)),this.setAttribute("normal",new It(s,3)),this.setAttribute("uv",new It(o,2));function c(h){let d=r.length/3,u=h.extractPoints(t),f=u.shape,g=u.holes;ir.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let y=g[p];ir.isClockWise(y)===!0&&(g[p]=y.reverse())}let _=ir.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let y=g[p];f=f.concat(y)}for(let p=0,m=f.length;p<m;p++){let y=f[p];r.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let p=0,m=_.length;p<m;p++){let y=_[p],b=y[0]+d,x=y[1]+d,M=y[2]+d;n.push(b,x,M),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return pS(t,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];n.push(o)}return new i(n,e.curveSegments)}};function pS(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}var Sl=class i extends kn{constructor(e=new Ws(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new O,l=new O,c=new ge,h=new O,d=[],u=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new It(d,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(f,2));function _(){for(let b=0;b<t;b++)p(b);p(s===!1?t:0),y(),m()}function p(b){h=e.getPointAt(b/t,h);let x=o.normals[b],M=o.binormals[b];for(let T=0;T<=r;T++){let A=T/r*Math.PI*2,v=Math.sin(A),w=-Math.cos(A);l.x=w*x.x+v*M.x,l.y=w*x.y+v*M.y,l.z=w*x.z+v*M.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let b=1;b<=t;b++)for(let x=1;x<=r;x++){let M=(r+1)*(b-1)+(x-1),T=(r+1)*b+(x-1),A=(r+1)*b+x,v=(r+1)*(b-1)+x;g.push(M,T,v),g.push(T,A,v)}}function y(){for(let b=0;b<=t;b++)for(let x=0;x<=r;x++)c.x=b/t,c.y=x/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ah[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function $s(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(_0(r))r.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(_0(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Vn(i){let e={};for(let t=0;t<i.length;t++){let n=$s(i[t]);for(let r in n)e[r]=n[r]}return e}function _0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function mS(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var Ir={clone:$s,merge:Vn},gS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_S=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wt=class extends ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gS,this.fragmentShader=_S,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=mS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new je().setHex(r.value);break;case"v2":this.uniforms[n].value=new ge().fromArray(r.value);break;case"v3":this.uniforms[n].value=new O().fromArray(r.value);break;case"v4":this.uniforms[n].value=new zt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new rt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Bt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ko=class extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qo=class extends ts{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ru,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ar,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Rr=class extends Qo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Rh=class extends ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=q0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ph=class extends ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Od(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var is=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ih=class extends is{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zd,endingEnd:zd}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case kd:s=e,a=2*t-n;break;case Vd:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case kd:o=e,l=2*n-t;break;case Vd:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(r-t),_=g*g,p=_*g,m=-u*p+2*u*_-u*g,y=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*g+1,b=(-1-f)*p+(1.5+f)*_+.5*g,x=f*p-f*_;for(let M=0;M!==a;++M)s[M]=m*o[h+M]+y*o[c+M]+b*o[l+M]+x*o[d+M];return s}},Lh=class extends is{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(r-t),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},Dh=class extends is{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Nh=class extends is{interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(r-t),_=1-g;for(let p=0;p!==a;++p)s[p]=o[c+p]*_+o[l+p]*g;return s}let u=a*2,f=e-1;for(let g=0;g!==a;++g){let _=o[c+g],p=o[l+g],m=f*u+g*2,y=d[m],b=d[m+1],x=e*u+g*2,M=h[x],T=h[x+1],A=vS(n,t,y,M,r);s[g]=f_(A,_,b,T,p)}return s}};function f_(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function xS(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function vS(i,e,t,n,r){let s=(i-e)/(r-e);for(let o=0;o<8;o++){let a=f_(s,e,t,n,r)-i;if(Math.abs(a)<1e-10)break;let l=xS(s,e,t,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var xi=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fo(t,this.TimeBufferType),this.values=Fo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fo(e.times,Array),values:Fo(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Od(e.settings)&&(n.settings={inTangents:Fo(e.settings.inTangents,Array),outTangents:Fo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ih(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Nh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ja:t=this.InterpolantFactoryMethodDiscrete;break;case _h:t=this.InterpolantFactoryMethodLinear;break;case oh:t=this.InterpolantFactoryMethodSmooth;break;case Bd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return et("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ja;case this.InterpolantFactoryMethodLinear:return _h;case this.InterpolantFactoryMethodSmooth:return oh;case this.InterpolantFactoryMethodBezier:return Bd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Od(this.settings)&&(x0(this.settings.inTangents,e),x0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(tt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){tt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){tt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&My(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){tt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===oh,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Od(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function x0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}xi.prototype.ValueTypeName="";xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=_h;var rs=class extends xi{constructor(e,t,n){super(e,t,n)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=ja;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Uh=class extends xi{constructor(e,t,n,r){super(e,t,n,r)}};Uh.prototype.ValueTypeName="color";var Oh=class extends xi{constructor(e,t,n,r){super(e,t,n,r)}};Oh.prototype.ValueTypeName="number";var Fh=class extends is{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let h=c+a;c!==h;c+=4)or.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ml=class extends xi{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Fh(this.times,this.values,this.getValueSize(),e)}};Ml.prototype.ValueTypeName="quaternion";Ml.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends xi{constructor(e,t,n){super(e,t,n)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=ja;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Bh=class extends xi{constructor(e,t,n,r){super(e,t,n,r)}};Bh.prototype.ValueTypeName="vector";var zh=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},d_=new zh,kh=class{constructor(e){this.manager=e!==void 0?e:d_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};kh.DEFAULT_MATERIAL_NAME="__DEFAULT";var bl=class extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Fd=new Bt,v0=new O,y0=new O,Tl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qo,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;v0.setFromMatrixPosition(e.matrixWorld),t.position.copy(v0),y0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(y0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Fd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Fd,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Go||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Fd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},rh=new O,sh=new or,tr=new O,wl=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(rh,sh,tr),tr.x===1&&tr.y===1&&tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rh,sh,tr.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(rh,sh,tr),tr.x===1&&tr.y===1&&tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rh,sh,tr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},jr=new O,S0=new ge,M0=new ge,vn=class extends wl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=il*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return il*2*Math.atan(Math.tan(fd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jr.x,jr.y).multiplyScalar(-e/jr.z),jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jr.x,jr.y).multiplyScalar(-e/jr.z)}getViewSize(e,t){return this.getViewBounds(e,S0,M0),t.subVectors(M0,S0)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fd*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xd=class extends Tl{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=il*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},El=class extends bl{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Xd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var os=class extends wl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yd=class extends Tl{constructor(){super(new os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jo=class extends bl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new Yd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Bo=-90,zo=1,Vh=class extends hn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new vn(Bo,zo,e,t);r.layers=this.layers,this.add(r);let s=new vn(Bo,zo,e,t);s.layers=this.layers,this.add(s);let o=new vn(Bo,zo,e,t);o.layers=this.layers,this.add(o);let a=new vn(Bo,zo,e,t);a.layers=this.layers,this.add(a);let l=new vn(Bo,zo,e,t);l.layers=this.layers,this.add(l);let c=new vn(Bo,zo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Go)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Gh=class extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Al=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=yS.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function yS(){this._document.hidden===!1&&this.reset()}var dp="\\[\\]\\.:\\/",SS=new RegExp("["+dp+"]","g"),pp="[^"+dp+"]",MS="[^"+dp.replace("\\.","")+"]",bS=/((?:WC+[\/:])*)/.source.replace("WC",pp),TS=/(WCOD+)?/.source.replace("WCOD",MS),wS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pp),ES=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pp),AS=new RegExp("^"+bS+TS+wS+ES+"$"),CS=["material","materials","bones","map"],qd=class{constructor(e,t,n){let r=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(SS,"")}static parseTrackName(e){let t=AS.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);CS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){et("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;tt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=qd;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mE=new Float32Array(1);var yp=class yp{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};yp.prototype.isMatrix2=!0;var Zd=yp;function mp(i,e,t,n){let r=RS(n);switch(t){case op:return i*e;case lp:return i*e/r.components*r.byteLength;case $h:return i*e/r.components*r.byteLength;case fs:return i*e*2/r.components*r.byteLength;case Kh:return i*e*2/r.components*r.byteLength;case ap:return i*e*3/r.components*r.byteLength;case Ni:return i*e*4/r.components*r.byteLength;case Qh:return i*e*4/r.components*r.byteLength;case Fl:case Bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zl:case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eu:case nu:return Math.max(i,16)*Math.max(e,8)/4;case jh:case tu:return Math.max(i,8)*Math.max(e,8)/2;case iu:case ru:case ou:case au:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case su:case Vl:case lu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case uu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case du:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case mu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case gu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _u:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case yu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Su:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Mu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bu:case Tu:case wu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Eu:case Au:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Gl:case Cu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function RS(i){switch(i){case oi:case np:return{byteLength:1,components:1};case ta:case ip:case un:return{byteLength:2,components:1};case Zh:case Jh:return{byteLength:2,components:4};case Wi:case qh:case Xi:return{byteLength:4,components:1};case rp:case sp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function U_(){let i=null,e=!1,t=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function IS(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var LS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,NS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,US=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,VS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,XS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,YS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$S=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,QS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,tM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lM="gl_FragColor = linearToOutputTexel( gl_FragColor );",cM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_M=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,TM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,wM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,IM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,LM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,UM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,GM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,JM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$M=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,KM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,QM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ib=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ob=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ab=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,lb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ub=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,db=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_b=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ab=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ib=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Db=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ub=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$b=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,e1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,i1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:LS,alphahash_pars_fragment:DS,alphamap_fragment:NS,alphamap_pars_fragment:US,alphatest_fragment:OS,alphatest_pars_fragment:FS,aomap_fragment:BS,aomap_pars_fragment:zS,batching_pars_vertex:kS,batching_vertex:VS,begin_vertex:GS,beginnormal_vertex:HS,bsdfs:WS,iridescence_fragment:XS,bumpmap_pars_fragment:YS,clipping_planes_fragment:qS,clipping_planes_pars_fragment:ZS,clipping_planes_pars_vertex:JS,clipping_planes_vertex:$S,color_fragment:KS,color_pars_fragment:QS,color_pars_vertex:jS,color_vertex:eM,common:tM,cube_uv_reflection_fragment:nM,defaultnormal_vertex:iM,displacementmap_pars_vertex:rM,displacementmap_vertex:sM,emissivemap_fragment:oM,emissivemap_pars_fragment:aM,colorspace_fragment:lM,colorspace_pars_fragment:cM,envmap_fragment:hM,envmap_common_pars_fragment:uM,envmap_pars_fragment:fM,envmap_pars_vertex:dM,envmap_physical_pars_fragment:TM,envmap_vertex:pM,fog_vertex:mM,fog_pars_vertex:gM,fog_fragment:_M,fog_pars_fragment:xM,gradientmap_pars_fragment:vM,lightmap_pars_fragment:yM,lights_lambert_fragment:SM,lights_lambert_pars_fragment:MM,lights_pars_begin:bM,lights_toon_fragment:wM,lights_toon_pars_fragment:EM,lights_phong_fragment:AM,lights_phong_pars_fragment:CM,lights_physical_fragment:RM,lights_physical_pars_fragment:PM,lights_fragment_begin:IM,lights_fragment_maps:LM,lights_fragment_end:DM,lightprobes_pars_fragment:NM,logdepthbuf_fragment:UM,logdepthbuf_pars_fragment:OM,logdepthbuf_pars_vertex:FM,logdepthbuf_vertex:BM,map_fragment:zM,map_pars_fragment:kM,map_particle_fragment:VM,map_particle_pars_fragment:GM,metalnessmap_fragment:HM,metalnessmap_pars_fragment:WM,morphinstance_vertex:XM,morphcolor_vertex:YM,morphnormal_vertex:qM,morphtarget_pars_vertex:ZM,morphtarget_vertex:JM,normal_fragment_begin:$M,normal_fragment_maps:KM,normal_pars_fragment:QM,normal_pars_vertex:jM,normal_vertex:eb,normalmap_pars_fragment:tb,clearcoat_normal_fragment_begin:nb,clearcoat_normal_fragment_maps:ib,clearcoat_pars_fragment:rb,iridescence_pars_fragment:sb,opaque_fragment:ob,packing:ab,premultiplied_alpha_fragment:lb,project_vertex:cb,dithering_fragment:hb,dithering_pars_fragment:ub,roughnessmap_fragment:fb,roughnessmap_pars_fragment:db,shadowmap_pars_fragment:pb,shadowmap_pars_vertex:mb,shadowmap_vertex:gb,shadowmask_pars_fragment:_b,skinbase_vertex:xb,skinning_pars_vertex:vb,skinning_vertex:yb,skinnormal_vertex:Sb,specularmap_fragment:Mb,specularmap_pars_fragment:bb,tonemapping_fragment:Tb,tonemapping_pars_fragment:wb,transmission_fragment:Eb,transmission_pars_fragment:Ab,uv_pars_fragment:Cb,uv_pars_vertex:Rb,uv_vertex:Pb,worldpos_vertex:Ib,background_vert:Lb,background_frag:Db,backgroundCube_vert:Nb,backgroundCube_frag:Ub,cube_vert:Ob,cube_frag:Fb,depth_vert:Bb,depth_frag:zb,distance_vert:kb,distance_frag:Vb,equirect_vert:Gb,equirect_frag:Hb,linedashed_vert:Wb,linedashed_frag:Xb,meshbasic_vert:Yb,meshbasic_frag:qb,meshlambert_vert:Zb,meshlambert_frag:Jb,meshmatcap_vert:$b,meshmatcap_frag:Kb,meshnormal_vert:Qb,meshnormal_frag:jb,meshphong_vert:e1,meshphong_frag:t1,meshphysical_vert:n1,meshphysical_frag:i1,meshtoon_vert:r1,meshtoon_frag:s1,points_vert:o1,points_frag:a1,shadow_vert:l1,shadow_frag:c1,sprite_vert:h1,sprite_frag:u1},Ie={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},cr={basic:{uniforms:Vn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Vn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Vn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Vn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Vn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Vn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Vn([Ie.points,Ie.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Vn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Vn([Ie.common,Ie.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Vn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Vn([Ie.sprite,Ie.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:Vn([Ie.common,Ie.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:Vn([Ie.lights,Ie.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};cr.physical={uniforms:Vn([cr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var Lu={r:0,b:0,g:0},f1=new Bt,O_=new rt;O_.set(-1,0,0,0,1,0,0,0,1);function d1(i,e,t,n,r,s){let o=new je(0),a=r===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let x=y.backgroundBlurriness>0;b=e.get(b,x)}return b}function g(y){let b=!1,x=f(y);x===null?p(o,a):x&&x.isColor&&(p(x,1),b=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,b){let x=f(b);x&&(x.isCubeTexture||x.mapping===Ul)?(c===void 0&&(c=new st(new ar(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:$s(cr.backgroundCube.uniforms),vertexShader:cr.backgroundCube.vertexShader,fragmentShader:cr.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(f1.makeRotationFromEuler(b.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(O_),c.material.toneMapped=dt.getTransfer(x.colorSpace)!==vt,(h!==x||d!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new st(new Gi(2,2),new Wt({name:"BackgroundMaterial",uniforms:$s(cr.background.uniforms),vertexShader:cr.background.vertexShader,fragmentShader:cr.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=dt.getTransfer(x.colorSpace)!==vt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,b){y.getRGB(Lu,fp(i)),t.buffers.color.setClear(Lu.r,Lu.g,Lu.b,b,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:g,addToRenderList:_,dispose:m}}function p1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null),s=r,o=!1;function a(N,D,V,I,B){let X=!1,G=d(N,I,V,D);s!==G&&(s=G,c(s.object)),X=f(N,I,V,B),X&&g(N,I,V,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(N,D,V,I),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,D,V,I){let B=I.wireframe===!0,X=n[D.id];X===void 0&&(X={},n[D.id]=X);let G=N.isInstancedMesh===!0?N.id:0,te=X[G];te===void 0&&(te={},X[G]=te);let F=te[V.id];F===void 0&&(F={},te[V.id]=F);let C=F[B];return C===void 0&&(C=u(l()),F[B]=C),C}function u(N){let D=[],V=[],I=[];for(let B=0;B<t;B++)D[B]=0,V[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,D,V,I){let B=s.attributes,X=D.attributes,G=0,te=V.getAttributes();for(let F in te)if(te[F].location>=0){let Y=B[F],de=X[F];if(de===void 0&&(F==="instanceMatrix"&&N.instanceMatrix&&(de=N.instanceMatrix),F==="instanceColor"&&N.instanceColor&&(de=N.instanceColor)),Y===void 0||Y.attribute!==de||de&&Y.data!==de.data)return!0;G++}return s.attributesNum!==G||s.index!==I}function g(N,D,V,I){let B={},X=D.attributes,G=0,te=V.getAttributes();for(let F in te)if(te[F].location>=0){let Y=X[F];Y===void 0&&(F==="instanceMatrix"&&N.instanceMatrix&&(Y=N.instanceMatrix),F==="instanceColor"&&N.instanceColor&&(Y=N.instanceColor));let de={};de.attribute=Y,Y&&Y.data&&(de.data=Y.data),B[F]=de,G++}s.attributes=B,s.attributesNum=G,s.index=I}function _(){let N=s.newAttributes;for(let D=0,V=N.length;D<V;D++)N[D]=0}function p(N){m(N,0)}function m(N,D){let V=s.newAttributes,I=s.enabledAttributes,B=s.attributeDivisors;V[N]=1,I[N]===0&&(i.enableVertexAttribArray(N),I[N]=1),B[N]!==D&&(i.vertexAttribDivisor(N,D),B[N]=D)}function y(){let N=s.newAttributes,D=s.enabledAttributes;for(let V=0,I=D.length;V<I;V++)D[V]!==N[V]&&(i.disableVertexAttribArray(V),D[V]=0)}function b(N,D,V,I,B,X,G){G===!0?i.vertexAttribIPointer(N,D,V,B,X):i.vertexAttribPointer(N,D,V,I,B,X)}function x(N,D,V,I){_();let B=I.attributes,X=V.getAttributes(),G=D.defaultAttributeValues;for(let te in X){let F=X[te];if(F.location>=0){let C=B[te];if(C===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(C=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(C=N.instanceColor)),C!==void 0){let Y=C.normalized,de=C.itemSize,ae=e.get(C);if(ae===void 0)continue;let Pe=ae.buffer,Ue=ae.type,Te=ae.bytesPerElement,$=Ue===i.INT||Ue===i.UNSIGNED_INT||C.gpuType===qh;if(C.isInterleavedBufferAttribute){let ne=C.data,oe=ne.stride,Ce=C.offset;if(ne.isInstancedInterleavedBuffer){for(let me=0;me<F.locationSize;me++)m(F.location+me,ne.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let me=0;me<F.locationSize;me++)p(F.location+me);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let me=0;me<F.locationSize;me++)b(F.location+me,de/F.locationSize,Ue,Y,oe*Te,(Ce+de/F.locationSize*me)*Te,$)}else{if(C.isInstancedBufferAttribute){for(let ne=0;ne<F.locationSize;ne++)m(F.location+ne,C.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let ne=0;ne<F.locationSize;ne++)p(F.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let ne=0;ne<F.locationSize;ne++)b(F.location+ne,de/F.locationSize,Ue,Y,de*Te,de/F.locationSize*ne*Te,$)}}else if(G!==void 0){let Y=G[te];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(F.location,Y);break;case 3:i.vertexAttrib3fv(F.location,Y);break;case 4:i.vertexAttrib4fv(F.location,Y);break;default:i.vertexAttrib1fv(F.location,Y)}}}}y()}function M(){w();for(let N in n){let D=n[N];for(let V in D){let I=D[V];for(let B in I){let X=I[B];for(let G in X)h(X[G].object),delete X[G];delete I[B]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;let D=n[N.id];for(let V in D){let I=D[V];for(let B in I){let X=I[B];for(let G in X)h(X[G].object),delete X[G];delete I[B]}}delete n[N.id]}function A(N){for(let D in n){let V=n[D];for(let I in V){let B=V[I];if(B[N.id]===void 0)continue;let X=B[N.id];for(let G in X)h(X[G].object),delete X[G];delete B[N.id]}}}function v(N){for(let D in n){let V=n[D],I=N.isInstancedMesh===!0?N.id:0,B=V[I];if(B!==void 0){for(let X in B){let G=B[X];for(let te in G)h(G[te].object),delete G[te];delete B[X]}delete V[I],Object.keys(V).length===0&&delete n[D]}}}function w(){R(),o=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function m1(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function g1(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Ni&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let v=A===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==oi&&A!==Xi&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(et("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:x,maxSamples:M,samples:T}}function _1(i){let e=this,t=null,n=0,r=!1,s=!1,o=new ki,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||r;return r=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!r||g===null||g.length===0||s&&!p)s?h(null):c();else{let y=s?0:n,b=y*4,x=m.clippingState||null;l.value=x,x=h(g,u,b,f);for(let M=0;M!==b;++M)x[M]=t[M];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=f+_*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,x=f;b!==_;++b,x+=4)o.copy(d[b]).applyMatrix4(y,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var sa=4,x1=6,v1=20,y1=256,Hl=new os,p_=new je,Sp=null,Mp=0,bp=0,Tp=!1,S1=new O,Ks=new O,aa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=S1}=s;Sp=this._renderer.getRenderTarget(),Mp=this._renderer.getActiveCubeFace(),bp=this._renderer.getActiveMipmapLevel(),Tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=__(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sp,Mp,bp),this._renderer.xr.enabled=Tp,e.scissorTest=!1,ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sp=this._renderer.getRenderTarget(),Mp=this._renderer.getActiveCubeFace(),bp=this._renderer.getActiveMipmapLevel(),Tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:un,format:Ni,colorSpace:el,depthBuffer:!1},r=m_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=m_(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=M1(s)),this._blurMaterial=T1(s,e,t),this._ggxMaterial=b1(s,e,t)}return r}_compileMaterial(e){let t=new st(new kn,e);this._renderer.compile(t,Hl)}_sceneToCubeUV(e,t,n,r,s){let l=new vn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(p_),d.toneMapping=Hi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new st(new ar,new Mn({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,m=!0):(p.color.copy(p_),m=!0);for(let b=0;b<6;b++){let x=b%3;x===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[b],s.y,s.z)):x===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[b]));let M=this._cubeSize;ra(r,x*M,b>2?M:0,M,M),d.setRenderTarget(r),m&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===cs||e.mapping===Js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=__()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=g_());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;ra(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Hl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-sa?n-g+sa:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ra(s,p,m,3*_,2*_),r.setRenderTarget(s),r.render(a,Hl),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,ra(e,p,m,3*_,2*_),r.setRenderTarget(e),r.render(a,Hl)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,o),this._blurPass(s,e,n,n,o)}_blurPass(e,t,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],d=3*h*(r>this._lodMax-sa?r-this._lodMax+sa:0),u=4*(this._cubeSize-h);ra(t,d,u,3*h,2*h),o.setRenderTarget(t),o.render(l,Hl)}};function M1(i){let e=[],t=[],n=i,r=i-sa+1+x1;for(let s=0;s<r;s++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let m=0;m<d;m++){let y=m%3*2/3-1,b=m>2?0:-1,x=[y,b,0,y+2/3,b,0,y+2/3,b+1,0,y,b,0,y+2/3,b+1,0,y,b+1,0];g.set(x,f*u*m);for(let M=0;M<u;M++){let T=h[M*2]*2-1,A=h[M*2+1]*2-1;m===0?Ks.set(1,A,T):m===1?Ks.set(-T,1,-A):m===2?Ks.set(-T,A,1):m===3?Ks.set(-1,A,-T):m===4?Ks.set(-T,-1,A):Ks.set(T,A,-1),Ks.toArray(_,(m*u+M)*f)}}let p=new kn;p.setAttribute("position",new Li(g,f)),p.setAttribute("outputDirection",new Li(_,f)),t.push(new st(p,null)),n>sa&&n--}return{lodMeshes:t,sizeLods:e}}function m_(i,e,t){let n=new Jt(i,e,t);return n.texture.mapping=Ul,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ra(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function b1(i,e,t){return new Wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:y1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ou(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function T1(i,e,t){return new Wt({name:"SphericalGaussianBlur",defines:{SAMPLES:v1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ou(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function g_(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function __(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Ou(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Nu=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ll(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ar(5,5,5),s=new Wt({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:Di});s.uniforms.tEquirect.value=t;let o=new st(r,s),a=t.minFilter;return t.minFilter===hs&&(t.minFilter=En),new Vh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};function w1(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===Wh||f===Xh)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new Nu(g.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===Wh||f===Xh,_=f===cs||f===Js;if(g||_){let p=t.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new aa(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let y=u.image;return g&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new aa(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===Wh?u.mapping=cs:f===Xh&&(u.mapping=Js),u}function l(u){let f=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function E1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Vs("WebGLRenderer: "+n+" extension not supported."),r}}}function A1(i,e,t,n){let r={},s=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete r[u.id];let f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let y=f.array;_=f.version;for(let b=0,x=y.length;b<x;b+=3){let M=y[b+0],T=y[b+1],A=y[b+2];u.push(M,T,T,A,A,M)}}else{let y=g.array;_=g.version;for(let b=0,x=y.length/3-1;b<x;b+=3){let M=b+0,T=b+1,A=b+2;u.push(M,T,T,A,A,M)}}let p=new(g.count>=65535?al:ol)(u,1);p.version=_;let m=s.get(d);m&&e.remove(m),s.set(d,p)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function C1(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,s,d*o),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,s,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];t.update(_,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function R1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:tt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function P1(i,e,t){let n=new WeakMap,r=new zt;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let x=a.attributes.position.count*b,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*M*4*d),A=new rl(T,x,M,d);A.type=Xi,A.needsUpdate=!0;let v=b*4;for(let R=0;R<d;R++){let N=p[R],D=m[R],V=y[R],I=x*M*4*R;for(let B=0;B<N.count;B++){let X=B*v;f===!0&&(r.fromBufferAttribute(N,B),T[I+X+0]=r.x,T[I+X+1]=r.y,T[I+X+2]=r.z,T[I+X+3]=0),g===!0&&(r.fromBufferAttribute(D,B),T[I+X+4]=r.x,T[I+X+5]=r.y,T[I+X+6]=r.z,T[I+X+7]=0),_===!0&&(r.fromBufferAttribute(V,B),T[I+X+8]=r.x,T[I+X+9]=r.y,T[I+X+10]=r.z,T[I+X+11]=V.itemSize===4?r.w:1)}}u={count:d,texture:A,size:new ge(x,M)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function I1(i,e,t,n,r){let s=new WeakMap;function o(c){let h=r.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var L1={[Rl]:"LINEAR_TONE_MAPPING",[Pl]:"REINHARD_TONE_MAPPING",[Il]:"CINEON_TONE_MAPPING",[Ll]:"ACES_FILMIC_TONE_MAPPING",[Nl]:"AGX_TONE_MAPPING",[Zs]:"NEUTRAL_TONE_MAPPING",[Dl]:"CUSTOM_TONE_MAPPING"};function D1(i,e,t,n,r,s){let o=new Jt(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new kn;c.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new It([0,2,0,0,2,0],2));let h=new Ko({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new st(c,h),u=new os(-1,1,1,-1,0,1),f=null,g=null,_=!1,p,m=null,y=[],b=!1;this.setSize=function(x,M){o.setSize(x,M),a!==null&&a.setSize(x,M),l!==null&&l.setSize(x,M);for(let T=0;T<y.length;T++){let A=y[T];A.setSize&&A.setSize(x,M)}},this.setEffects=function(x){y=x,b=y.length>0&&y[0].isRenderPass===!0;let M=o.width,T=o.height;y.length>0&&a===null&&(a=new Jt(M,T,{type:un,depthBuffer:!1,stencilBuffer:!1}),l=new Jt(M,T,{type:un,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let v=y[A];v.setSize&&v.setSize(M,T)}},this.begin=function(x,M){if(_||x.toneMapping===Hi&&y.length===0)return!1;if(m=M,M!==null){let T=M.width,A=M.height;(o.width!==T||o.height!==A)&&this.setSize(T,A)}return b===!1&&x.setRenderTarget(o),p=x.toneMapping,x.toneMapping=Hi,!0},this.hasRenderPass=function(){return b},this.end=function(x,M){x.toneMapping=p,_=!0;let T=o,A=a;for(let v=0;v<y.length;v++){let w=y[v];w.enabled!==!1&&(w.render(x,A,T,M),w.needsSwap!==!1&&(T=A,A=A===a?l:a))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,h.defines={},dt.getTransfer(f)===vt&&(h.defines.SRGB_TRANSFER="");let v=L1[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(m),x.render(d,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var F_=new jn,Ap=new ns(1,1),B_=new rl,z_=new yh,k_=new ll,x_=[],v_=[],y_=new Float32Array(16),S_=new Float32Array(9),M_=new Float32Array(4);function la(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=x_[r];if(s===void 0&&(s=new Float32Array(r),x_[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function fn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fu(i,e){let t=v_[e];t===void 0&&(t=new Int32Array(e),v_[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function N1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function U1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2fv(this.addr,e),dn(t,e)}}function O1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;i.uniform3fv(this.addr,e),dn(t,e)}}function F1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4fv(this.addr,e),dn(t,e)}}function B1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;M_.set(n),i.uniformMatrix2fv(this.addr,!1,M_),dn(t,n)}}function z1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;S_.set(n),i.uniformMatrix3fv(this.addr,!1,S_),dn(t,n)}}function k1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;y_.set(n),i.uniformMatrix4fv(this.addr,!1,y_),dn(t,n)}}function V1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function G1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2iv(this.addr,e),dn(t,e)}}function H1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3iv(this.addr,e),dn(t,e)}}function W1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4iv(this.addr,e),dn(t,e)}}function X1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Y1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2uiv(this.addr,e),dn(t,e)}}function q1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3uiv(this.addr,e),dn(t,e)}}function Z1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4uiv(this.addr,e),dn(t,e)}}function J1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ap.compareFunction=t.isReversedDepthBuffer()?Iu:Pu,s=Ap):s=F_,t.setTexture2D(e||s,r)}function $1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||z_,r)}function K1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||k_,r)}function Q1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||B_,r)}function j1(i){switch(i){case 5126:return N1;case 35664:return U1;case 35665:return O1;case 35666:return F1;case 35674:return B1;case 35675:return z1;case 35676:return k1;case 5124:case 35670:return V1;case 35667:case 35671:return G1;case 35668:case 35672:return H1;case 35669:case 35673:return W1;case 5125:return X1;case 36294:return Y1;case 36295:return q1;case 36296:return Z1;case 35678:case 36198:case 36298:case 36306:case 35682:return J1;case 35679:case 36299:case 36307:return $1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return Q1}}function eT(i,e){i.uniform1fv(this.addr,e)}function tT(i,e){let t=la(e,this.size,2);i.uniform2fv(this.addr,t)}function nT(i,e){let t=la(e,this.size,3);i.uniform3fv(this.addr,t)}function iT(i,e){let t=la(e,this.size,4);i.uniform4fv(this.addr,t)}function rT(i,e){let t=la(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sT(i,e){let t=la(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function oT(i,e){let t=la(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function aT(i,e){i.uniform1iv(this.addr,e)}function lT(i,e){i.uniform2iv(this.addr,e)}function cT(i,e){i.uniform3iv(this.addr,e)}function hT(i,e){i.uniform4iv(this.addr,e)}function uT(i,e){i.uniform1uiv(this.addr,e)}function fT(i,e){i.uniform2uiv(this.addr,e)}function dT(i,e){i.uniform3uiv(this.addr,e)}function pT(i,e){i.uniform4uiv(this.addr,e)}function mT(i,e,t){let n=this.cache,r=e.length,s=Fu(t,r);fn(n,s)||(i.uniform1iv(this.addr,s),dn(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ap:o=F_;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function gT(i,e,t){let n=this.cache,r=e.length,s=Fu(t,r);fn(n,s)||(i.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||z_,s[o])}function _T(i,e,t){let n=this.cache,r=e.length,s=Fu(t,r);fn(n,s)||(i.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||k_,s[o])}function xT(i,e,t){let n=this.cache,r=e.length,s=Fu(t,r);fn(n,s)||(i.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||B_,s[o])}function vT(i){switch(i){case 5126:return eT;case 35664:return tT;case 35665:return nT;case 35666:return iT;case 35674:return rT;case 35675:return sT;case 35676:return oT;case 5124:case 35670:return aT;case 35667:case 35671:return lT;case 35668:case 35672:return cT;case 35669:case 35673:return hT;case 5125:return uT;case 36294:return fT;case 36295:return dT;case 36296:return pT;case 35678:case 36198:case 36298:case 36306:case 35682:return mT;case 35679:case 36299:case 36307:return gT;case 35680:case 36300:case 36308:case 36293:return _T;case 36289:case 36303:case 36311:case 36292:return xT}}var Cp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=j1(t.type)}},Rp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vT(t.type)}},Pp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},wp=/(\w+)(\])?(\[|\.)?/g;function b_(i,e){i.seq.push(e),i.map[e.id]=e}function yT(i,e,t){let n=i.name,r=n.length;for(wp.lastIndex=0;;){let s=wp.exec(n),o=wp.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){b_(t,c===void 0?new Cp(a,i,e):new Rp(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Pp(a),b_(t,d)),t=d}}}var oa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);yT(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function T_(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ST=37297,MT=0;function bT(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var w_=new rt;function TT(i){dt._getMatrix(w_,dt.workingColorSpace,i);let e=`mat3( ${w_.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case tl:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function E_(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+bT(i.getShaderSource(e),a)}else return s}function wT(i,e){let t=TT(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ET={[Rl]:"Linear",[Pl]:"Reinhard",[Il]:"Cineon",[Ll]:"ACESFilmic",[Nl]:"AgX",[Zs]:"Neutral",[Dl]:"Custom"};function AT(i,e){let t=ET[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Du=new O;function CT(){dt.getLuminanceCoefficients(Du);let i=Du.x.toFixed(4),e=Du.y.toFixed(4),t=Du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RT(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xl).join(`
`)}function PT(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function IT(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xl(i){return i!==""}function A_(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function C_(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var LT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ip(i){return i.replace(LT,NT)}var DT=new Map;function NT(i,e){let t=at[e];if(t===void 0){let n=DT.get(e);if(n!==void 0)t=at[n],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ip(t)}var UT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R_(i){return i.replace(UT,OT)}function OT(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function P_(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var FT={[Cl]:"SHADOWMAP_TYPE_PCF",[ea]:"SHADOWMAP_TYPE_VSM"};function BT(i){return FT[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var zT={[cs]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[Ul]:"ENVMAP_TYPE_CUBE_UV"};function kT(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":zT[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var VT={[Js]:"ENVMAP_MODE_REFRACTION"};function GT(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":VT[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var HT={[ep]:"ENVMAP_BLENDING_MULTIPLY",[W0]:"ENVMAP_BLENDING_MIX",[X0]:"ENVMAP_BLENDING_ADD"};function WT(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":HT[i.combine]||"ENVMAP_BLENDING_NONE"}function XT(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function YT(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=BT(t),c=kT(t),h=GT(t),d=WT(t),u=XT(t),f=RT(t),g=PT(s),_=r.createProgram(),p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xl).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xl).join(`
`),m.length>0&&(m+=`
`)):(p=[P_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xl).join(`
`),m=[P_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?at.tonemapping_pars_fragment:"",t.toneMapping!==Hi?AT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,wT("linearToOutputTexel",t.outputColorSpace),CT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xl).join(`
`)),o=Ip(o),o=A_(o,t),o=C_(o,t),a=Ip(a),a=A_(a,t),a=C_(a,t),o=R_(o),a=R_(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===cp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=y+p+o,x=y+m+a,M=T_(r,r.VERTEX_SHADER,b),T=T_(r,r.FRAGMENT_SHADER,x);r.attachShader(_,M),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(N){if(i.debug.checkShaderErrors){let D=r.getProgramInfoLog(_)||"",V=r.getShaderInfoLog(M)||"",I=r.getShaderInfoLog(T)||"",B=D.trim(),X=V.trim(),G=I.trim(),te=!0,F=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,M,T);else{let C=E_(r,M,"vertex"),Y=E_(r,T,"fragment");tt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+B+`
`+C+`
`+Y)}else B!==""?et("WebGLProgram: Program Info Log:",B):(X===""||G==="")&&(F=!1);F&&(N.diagnostics={runnable:te,programLog:B,vertexShader:{log:X,prefix:p},fragmentShader:{log:G,prefix:m}})}r.deleteShader(M),r.deleteShader(T),v=new oa(r,_),w=IT(r,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(_,ST)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=MT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=T,this}var qT=0,Lp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Dp(e),t.set(e,n)),n}},Dp=class{constructor(e){this.id=qT++,this.code=e,this.usedTimes=0}};function ZT(i){return i===fs||i===Vl||i===Gl}function JT(i,e,t,n,r,s){let o=new sl,a=new Lp,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,w,R,N,D,V){let I=N.fog,B=D.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,te=e.get(v.envMap||X,G),F=te&&te.mapping===Ul?te.image.height:null,C=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&et("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let Y=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,de=Y!==void 0?Y.length:0,ae=0;B.morphAttributes.position!==void 0&&(ae=1),B.morphAttributes.normal!==void 0&&(ae=2),B.morphAttributes.color!==void 0&&(ae=3);let Pe,Ue,Te,$;if(C){let $e=cr[C];Pe=$e.vertexShader,Ue=$e.fragmentShader}else{Pe=v.vertexShader,Ue=v.fragmentShader;let $e=a.getVertexShaderStage(v),ue=a.getFragmentShaderStage(v);a.update(v,$e,ue),Te=$e.id,$=ue.id}let ne=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),Ce=D.isInstancedMesh===!0,me=D.isBatchedMesh===!0,Re=!!v.map,Ne=!!v.matcap,j=!!te,W=!!v.aoMap,Q=!!v.lightMap,L=!!v.bumpMap&&v.wireframe===!1,le=!!v.normalMap,Le=!!v.displacementMap,Fe=!!v.emissiveMap,Ee=!!v.metalnessMap,Oe=!!v.roughnessMap,U=v.anisotropy>0,nt=v.clearcoat>0,Ge=v.dispersion>0,P=v.retroreflectivity>0,S=v.iridescence>0,H=v.sheen>0,q=v.transmission>0,ee=U&&!!v.anisotropyMap,xe=nt&&!!v.clearcoatMap,fe=nt&&!!v.clearcoatNormalMap,ie=nt&&!!v.clearcoatRoughnessMap,se=S&&!!v.iridescenceMap,Se=S&&!!v.iridescenceThicknessMap,He=H&&!!v.sheenColorMap,Me=H&&!!v.sheenRoughnessMap,ye=!!v.specularMap,_e=!!v.specularColorMap,Ze=!!v.specularIntensityMap,Qe=q&&!!v.transmissionMap,z=q&&!!v.thicknessMap,ve=!!v.gradientMap,re=!!v.alphaMap,be=v.alphaTest>0,Ae=!!v.alphaHash,ce=!!v.extensions,pe=Hi;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(pe=i.toneMapping);let he={shaderID:C,shaderType:v.type,shaderName:v.name,vertexShader:Pe,fragmentShader:Ue,defines:v.defines,customVertexShaderID:Te,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:me,batchingColor:me&&D._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&D.instanceColor!==null,instancingMorph:Ce&&D.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Re,matcap:Ne,envMap:j,envMapMode:j&&te.mapping,envMapCubeUVHeight:F,aoMap:W,lightMap:Q,bumpMap:L,normalMap:le,displacementMap:Le,emissiveMap:Fe,normalMapObjectSpace:le&&v.normalMapType===Z0,normalMapTangentSpace:le&&v.normalMapType===Ru,packedNormalMap:le&&v.normalMapType===Ru&&ZT(v.normalMap.format),metalnessMap:Ee,roughnessMap:Oe,anisotropy:U,anisotropyMap:ee,clearcoat:nt,clearcoatMap:xe,clearcoatNormalMap:fe,clearcoatRoughnessMap:ie,dispersion:Ge,retroreflection:P,iridescence:S,iridescenceMap:se,iridescenceThicknessMap:Se,sheen:H,sheenColorMap:He,sheenRoughnessMap:Me,specularMap:ye,specularColorMap:_e,specularIntensityMap:Ze,transmission:q,transmissionMap:Qe,thicknessMap:z,gradientMap:ve,opaque:v.transparent===!1&&v.blending===ls&&v.alphaToCoverage===!1,alphaMap:re,alphaTest:be,alphaHash:Ae,combine:v.combine,mapUv:Re&&g(v.map.channel),aoMapUv:W&&g(v.aoMap.channel),lightMapUv:Q&&g(v.lightMap.channel),bumpMapUv:L&&g(v.bumpMap.channel),normalMapUv:le&&g(v.normalMap.channel),displacementMapUv:Le&&g(v.displacementMap.channel),emissiveMapUv:Fe&&g(v.emissiveMap.channel),metalnessMapUv:Ee&&g(v.metalnessMap.channel),roughnessMapUv:Oe&&g(v.roughnessMap.channel),anisotropyMapUv:ee&&g(v.anisotropyMap.channel),clearcoatMapUv:xe&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:He&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(v.sheenRoughnessMap.channel),specularMapUv:ye&&g(v.specularMap.channel),specularColorMapUv:_e&&g(v.specularColorMap.channel),specularIntensityMapUv:Ze&&g(v.specularIntensityMap.channel),transmissionMapUv:Qe&&g(v.transmissionMap.channel),thicknessMapUv:z&&g(v.thicknessMap.channel),alphaMapUv:re&&g(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(le||U),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(Re||re),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&le===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:oe,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ae,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:Re&&v.map.isVideoTexture===!0&&dt.getTransfer(v.map.colorSpace)===vt,decodeVideoTextureEmissive:Fe&&v.emissiveMap.isVideoTexture===!0&&dt.getTransfer(v.emissiveMap.colorSpace)===vt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===vi,flipSided:v.side===An,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ce&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&v.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return he.vertexUv1s=l.has(1),he.vertexUv2s=l.has(2),he.vertexUv3s=l.has(3),l.clear(),he}function p(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)w.push(R),w.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(m(w,v),y(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function m(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function b(v){let w=f[v.type],R;if(w){let N=cr[w];R=Ir.clone(N.uniforms)}else R=v.uniforms;return R}function x(v,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new YT(i,w,v,r),c.push(R),h.set(w,R)),R}function M(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:b,acquireProgram:x,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:A}}function $T(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function KT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function I_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function L_(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,_,p,m){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},i[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=g,y.materialVariant=o(u),y.groupOrder=_,y.renderOrder=u.renderOrder,y.z=p,y.group=m),e++,y}function l(u,f,g,_,p,m,y){y.reversedDepth===!0&&(p=-p);let b=a(u,f,g,_,p,m);g.transmission>0?n.push(b):g.transparent===!0?r.push(b):t.push(b)}function c(u,f,g,_,p,m){let y=a(u,f,g,_,p,m);g.transmission>0?n.unshift(y):g.transparent===!0?r.unshift(y):t.unshift(y)}function h(u,f){t.length>1&&t.sort(u||KT),n.length>1&&n.sort(f||I_),r.length>1&&r.sort(f||I_)}function d(){for(let u=e,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:h}}function QT(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new L_,i.set(n,[o])):r>=s.length?(o=new L_,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function jT(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new je};break;case"SpotLight":t={position:new O,direction:new O,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function ew(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var tw=0;function nw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function iw(i){let e=new jT,t=ew(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let r=new O,s=new Bt,o=new Bt;function a(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,y=0,b=0,x=0,M=0,T=0,A=0,v=0,w=0,R=0;c.sort(nw);for(let D=0,V=c.length;D<V;D++){let I=c[D],B=I.color,X=I.intensity,G=I.distance,te=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===fs?te=I.shadow.map.texture:te=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=B.r*X,d+=B.g*X,u+=B.b*X;else if(I.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(I.sh.coefficients[F],X);R++}else if(I.isSunLight){let F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let C=I.shadow,Y=t.get(I);Y.shadowIntensity=C.intensity,Y.shadowBias=C.bias,Y.shadowNormalBias=C.normalBias,Y.shadowRadius=C.radius,Y.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),n.sunShadow[g]=Y,n.sunShadowMap[g]=te;let de=C.getViewportCount();for(let ae=0;ae<de;ae++)n.sunShadowMatrix[_+ae]=C.getMatrix(ae),n.sunShadowCascade[_+ae]=C._cascadeData[ae];_+=de,g++}n.sun[f]=F,f++}else if(I.isDirectionalLight){let F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let C=I.shadow,Y=t.get(I);Y.shadowIntensity=C.intensity,Y.shadowBias=C.bias,Y.shadowNormalBias=C.normalBias,Y.shadowRadius=C.radius,Y.shadowMapSize=C.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=I.shadow.matrix,M++}n.directional[p]=F,p++}else if(I.isSpotLight){let F=e.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(B).multiplyScalar(X),F.distance=G,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,n.spot[y]=F;let C=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,C.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[y]=C.matrix,I.castShadow){let Y=t.get(I);Y.shadowIntensity=C.intensity,Y.shadowBias=C.bias,Y.shadowNormalBias=C.normalBias,Y.shadowRadius=C.radius,Y.shadowMapSize=C.mapSize,n.spotShadow[y]=Y,n.spotShadowMap[y]=te,A++}y++}else if(I.isRectAreaLight){let F=e.get(I);F.color.copy(B).multiplyScalar(X),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),n.rectArea[b]=F,b++}else if(I.isPointLight){let F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),F.distance=I.distance,F.decay=I.decay,I.castShadow){let C=I.shadow,Y=t.get(I);Y.shadowIntensity=C.intensity,Y.shadowBias=C.bias,Y.shadowNormalBias=C.normalBias,Y.shadowRadius=C.radius,Y.shadowMapSize=C.mapSize,Y.shadowCameraNear=C.camera.near,Y.shadowCameraFar=C.camera.far,n.pointShadow[m]=Y,n.pointShadowMap[m]=te,n.pointShadowMatrix[m]=I.shadow.matrix,T++}n.point[m]=F,m++}else if(I.isHemisphereLight){let F=e.get(I);F.skyColor.copy(I.color).multiplyScalar(X),F.groundColor.copy(I.groundColor).multiplyScalar(X),n.hemi[x]=F,x++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==y||N.rectAreaLength!==b||N.hemiLength!==x||N.numSunShadows!==g||N.numDirectionalShadows!==M||N.numPointShadows!==T||N.numSpotShadows!==A||N.numSpotMaps!==v||N.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=y,n.rectArea.length=b,n.point.length=m,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,N.sunLength=f,N.directionalLength=p,N.pointLength=m,N.spotLength=y,N.rectAreaLength=b,N.hemiLength=x,N.numSunShadows=g,N.numDirectionalShadows=M,N.numPointShadows=T,N.numSpotShadows=A,N.numSpotMaps=v,N.numLightProbes=R,n.version=tw++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0,p=0,m=h.matrixWorldInverse;for(let y=0,b=c.length;y<b;y++){let x=c[y];if(x.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),d++}else if(x.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),u++}else if(x.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),g++}else if(x.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){let M=n.hemi[p];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function D_(i){let e=new iw(i),t=[],n=[],r=[];function s(u){d.camera=u,t.length=0,n.length=0,r.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function rw(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new D_(i),e.set(r,[a])):s>=o.length?(a=new D_(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var sw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ow=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,aw=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],lw=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],N_=new Bt,Wl=new O,Ep=new O;function cw(i,e,t){let n=new qo,r=new ge,s=new ge,o=new zt,a=new Rh,l=new Ph,c={},h=t.maxTextureSize,d={[as]:An,[An]:as,[vi]:vi},u=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:sw,fragmentShader:ow}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new kn;g.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new st(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl;let m=this.type;this.render=function(T,A,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===w0&&(et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cl);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Di),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let V=m!==this.type;V&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=T.length;I<B;I++){let X=T[I],G=X.shadow;if(G===void 0){et("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let te=G.getFrameExtents();r.multiply(te),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/te.x),r.x=s.x*te.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/te.y),r.y=s.y*te.y,G.mapSize.y=s.y));let F=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=F,G.map===null||V===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ea){if(X.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Jt(r.x,r.y,{format:fs,type:un,minFilter:En,magFilter:En,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new ns(r.x,r.y,Xi),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=rr,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=yn,G.map.depthTexture.magFilter=yn}else X.isPointLight?(G.map=new Nu(r.x),G.map.depthTexture=new bh(r.x,Wi)):(G.map=new Jt(r.x,r.y),G.map.depthTexture=new ns(r.x,r.y,Wi)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=rr,this.type===Cl?(G.map.depthTexture.compareFunction=F?Iu:Pu,G.map.depthTexture.minFilter=En,G.map.depthTexture.magFilter=En):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=yn,G.map.depthTexture.magFilter=yn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==r.x||G.map.height!==r.y)&&G.map.setSize(r.x,r.y);let C=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();X.isPointLight!==!0&&G.updateMatrices(X,v);for(let Y=0;Y<C;Y++){let de=G.getCamera(Y);if(X.isPointLight){let ae=G.camera,Pe=G.matrix,Ue=X.distance||ae.far;Ue!==ae.far&&(ae.far=Ue,ae.updateProjectionMatrix()),Wl.setFromMatrixPosition(X.matrixWorld),ae.position.copy(Wl),Ep.copy(ae.position),Ep.add(aw[Y]),ae.up.copy(lw[Y]),ae.lookAt(Ep),ae.updateMatrixWorld(),Pe.makeTranslation(-Wl.x,-Wl.y,-Wl.z),N_.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),G._frustum.setFromProjectionMatrix(N_,ae.coordinateSystem,ae.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,Y),i.clear();else{Y===0&&(i.setRenderTarget(G.map),i.clear());let ae=G.getViewport(Y);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),D.viewport(o)}n=G.getFrustum(Y),x(A,v,de,X,this.type)}G.isPointLightShadow!==!0&&this.type===ea&&y(G,v),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(w,R,N)};function y(T,A){let v=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Jt(r.x,r.y,{format:fs,type:un}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,v,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,v,f,_,null)}function b(T,A,v,w){let R=null,N=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)R=N;else if(R=v.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let D=R.uuid,V=A.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let B=I[V];B===void 0&&(B=R.clone(),I[V]=B,A.addEventListener("dispose",M)),R=B}if(R.visible=A.visible,R.wireframe=A.wireframe,w===ea?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=i.properties.get(R);D.light=v}return R}function x(T,A,v,w,R){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===ea)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let V=e.update(T),I=T.material;if(Array.isArray(I)){let B=V.groups;for(let X=0,G=B.length;X<G;X++){let te=B[X],F=I[te.materialIndex];if(F&&F.visible){let C=b(T,F,w,R);T.onBeforeShadow(i,T,A,v,V,C,te),i.renderBufferDirect(v,null,V,C,T,te),T.onAfterShadow(i,T,A,v,V,C,te)}}}else if(I.visible){let B=b(T,I,w,R);T.onBeforeShadow(i,T,A,v,V,B,null),i.renderBufferDirect(v,null,V,B,T,null),T.onAfterShadow(i,T,A,v,V,B,null)}}let D=T.children;for(let V=0,I=D.length;V<I;V++)x(D[V],A,v,w,R)}function M(T){T.target.removeEventListener("dispose",M);for(let v in c){let w=c[v],R=T.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function hw(i,e){function t(){let z=!1,ve=new zt,re=null,be=new zt(0,0,0,0);return{setMask:function(Ae){re!==Ae&&!z&&(i.colorMask(Ae,Ae,Ae,Ae),re=Ae)},setLocked:function(Ae){z=Ae},setClear:function(Ae,ce,pe,he,$e){$e===!0&&(Ae*=he,ce*=he,pe*=he),ve.set(Ae,ce,pe,he),be.equals(ve)===!1&&(i.clearColor(Ae,ce,pe,he),be.copy(ve))},reset:function(){z=!1,re=null,be.set(-1,0,0,0)}}}function n(){let z=!1,ve=!1,re=null,be=null,Ae=null;return{setReversed:function(ce){if(ve!==ce){let pe=e.get("EXT_clip_control");ce?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),ve=ce;let he=Ae;Ae=null,this.setClear(he)}},getReversed:function(){return ve},setTest:function(ce){ce?ne(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(ce){re!==ce&&!z&&(i.depthMask(ce),re=ce)},setFunc:function(ce){if(ve&&(ce=o_[ce]),be!==ce){switch(ce){case lh:i.depthFunc(i.NEVER);break;case ch:i.depthFunc(i.ALWAYS);break;case hh:i.depthFunc(i.LESS);break;case Vo:i.depthFunc(i.LEQUAL);break;case uh:i.depthFunc(i.EQUAL);break;case fh:i.depthFunc(i.GEQUAL);break;case dh:i.depthFunc(i.GREATER);break;case ph:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=ce}},setLocked:function(ce){z=ce},setClear:function(ce){Ae!==ce&&(Ae=ce,ve&&(ce=1-ce),i.clearDepth(ce))},reset:function(){z=!1,re=null,be=null,Ae=null,ve=!1}}}function r(){let z=!1,ve=null,re=null,be=null,Ae=null,ce=null,pe=null,he=null,$e=null;return{setTest:function(ue){z||(ue?ne(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(ue){ve!==ue&&!z&&(i.stencilMask(ue),ve=ue)},setFunc:function(ue,Ke,We){(re!==ue||be!==Ke||Ae!==We)&&(i.stencilFunc(ue,Ke,We),re=ue,be=Ke,Ae=We)},setOp:function(ue,Ke,We){(ce!==ue||pe!==Ke||he!==We)&&(i.stencilOp(ue,Ke,We),ce=ue,pe=Ke,he=We)},setLocked:function(ue){z=ue},setClear:function(ue){$e!==ue&&(i.clearStencil(ue),$e=ue)},reset:function(){z=!1,ve=null,re=null,be=null,Ae=null,ce=null,pe=null,he=null,$e=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,y=null,b=null,x=null,M=null,T=null,A=null,v=new je(0,0,0),w=0,R=!1,N=null,D=null,V=null,I=null,B=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,te=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(F)[1]),G=te>=1):F.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),G=te>=2);let C=null,Y={},de=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),Pe=new zt().fromArray(de),Ue=new zt().fromArray(ae);function Te(z,ve,re,be){let Ae=new Uint8Array(4),ce=i.createTexture();i.bindTexture(z,ce),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pe=0;pe<re;pe++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(ve+pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return ce}let $={};$[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(i.DEPTH_TEST),o.setFunc(Vo),L(!1),le(Jd),ne(i.CULL_FACE),W(Di);function ne(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function oe(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Ce(z,ve){return u[z]!==ve?(i.bindFramebuffer(z,ve),u[z]=ve,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ve),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function me(z,ve){let re=g,be=!1;if(z){re=f.get(ve),re===void 0&&(re=[],f.set(ve,re));let Ae=z.textures;if(re.length!==Ae.length||re[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,pe=Ae.length;ce<pe;ce++)re[ce]=i.COLOR_ATTACHMENT0+ce;re.length=Ae.length,be=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,be=!0);be&&i.drawBuffers(re)}function Re(z){return _!==z?(i.useProgram(z),_=z,!0):!1}let Ne={[qs]:i.FUNC_ADD,[A0]:i.FUNC_SUBTRACT,[C0]:i.FUNC_REVERSE_SUBTRACT};Ne[R0]=i.MIN,Ne[P0]=i.MAX;let j={[I0]:i.ZERO,[L0]:i.ONE,[D0]:i.SRC_COLOR,[Qd]:i.SRC_ALPHA,[z0]:i.SRC_ALPHA_SATURATE,[F0]:i.DST_COLOR,[U0]:i.DST_ALPHA,[N0]:i.ONE_MINUS_SRC_COLOR,[jd]:i.ONE_MINUS_SRC_ALPHA,[B0]:i.ONE_MINUS_DST_COLOR,[O0]:i.ONE_MINUS_DST_ALPHA,[k0]:i.CONSTANT_COLOR,[V0]:i.ONE_MINUS_CONSTANT_COLOR,[G0]:i.CONSTANT_ALPHA,[H0]:i.ONE_MINUS_CONSTANT_ALPHA};function W(z,ve,re,be,Ae,ce,pe,he,$e,ue){if(z===Di){p===!0&&(oe(i.BLEND),p=!1);return}if(p===!1&&(ne(i.BLEND),p=!0),z!==E0){if(z!==m||ue!==R){if((y!==qs||M!==qs)&&(i.blendEquation(i.FUNC_ADD),y=qs,M=qs),ue)switch(z){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yi:i.blendFunc(i.ONE,i.ONE);break;case $d:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:tt("WebGLState: Invalid blending: ",z);break}else switch(z){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $d:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kd:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",z);break}b=null,x=null,T=null,A=null,v.set(0,0,0),w=0,m=z,R=ue}return}Ae=Ae||ve,ce=ce||re,pe=pe||be,(ve!==y||Ae!==M)&&(i.blendEquationSeparate(Ne[ve],Ne[Ae]),y=ve,M=Ae),(re!==b||be!==x||ce!==T||pe!==A)&&(i.blendFuncSeparate(j[re],j[be],j[ce],j[pe]),b=re,x=be,T=ce,A=pe),(he.equals(v)===!1||$e!==w)&&(i.blendColor(he.r,he.g,he.b,$e),v.copy(he),w=$e),m=z,R=!1}function Q(z,ve){z.side===vi?oe(i.CULL_FACE):ne(i.CULL_FACE);let re=z.side===An;ve&&(re=!re),L(re),z.blending===ls&&z.transparent===!1?W(Di):W(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);let be=z.stencilWrite;a.setTest(be),be&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Fe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function L(z){N!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),N=z)}function le(z){z!==b0?(ne(i.CULL_FACE),z!==D&&(z===Jd?i.cullFace(i.BACK):z===T0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),D=z}function Le(z){z!==V&&(G&&i.lineWidth(z),V=z)}function Fe(z,ve,re){z?(ne(i.POLYGON_OFFSET_FILL),(I!==ve||B!==re)&&(I=ve,B=re,o.getReversed()&&(ve=-ve),i.polygonOffset(ve,re))):oe(i.POLYGON_OFFSET_FILL)}function Ee(z){z?ne(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function Oe(z){z===void 0&&(z=i.TEXTURE0+X-1),C!==z&&(i.activeTexture(z),C=z)}function U(z,ve,re){re===void 0&&(C===null?re=i.TEXTURE0+X-1:re=C);let be=Y[re];be===void 0&&(be={type:void 0,texture:void 0},Y[re]=be),(be.type!==z||be.texture!==ve)&&(C!==re&&(i.activeTexture(re),C=re),i.bindTexture(z,ve||$[z]),be.type=z,be.texture=ve)}function nt(){let z=Y[C];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Ge(){try{i.compressedTexImage2D(...arguments)}catch(z){tt("WebGLState:",z)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(z){tt("WebGLState:",z)}}function S(){try{i.texSubImage2D(...arguments)}catch(z){tt("WebGLState:",z)}}function H(){try{i.texSubImage3D(...arguments)}catch(z){tt("WebGLState:",z)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(z){tt("WebGLState:",z)}}function ee(){try{i.compressedTexSubImage3D(...arguments)}catch(z){tt("WebGLState:",z)}}function xe(){try{i.texStorage2D(...arguments)}catch(z){tt("WebGLState:",z)}}function fe(){try{i.texStorage3D(...arguments)}catch(z){tt("WebGLState:",z)}}function ie(){try{i.texImage2D(...arguments)}catch(z){tt("WebGLState:",z)}}function se(){try{i.texImage3D(...arguments)}catch(z){tt("WebGLState:",z)}}function Se(z){return d[z]!==void 0?d[z]:i.getParameter(z)}function He(z,ve){d[z]!==ve&&(i.pixelStorei(z,ve),d[z]=ve)}function Me(z){Pe.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Pe.copy(z))}function ye(z){Ue.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Ue.copy(z))}function _e(z,ve){let re=c.get(ve);re===void 0&&(re=new WeakMap,c.set(ve,re));let be=re.get(z);be===void 0&&(be=i.getUniformBlockIndex(ve,z.name),re.set(z,be))}function Ze(z,ve){let be=c.get(ve).get(z);l.get(ve)!==be&&(i.uniformBlockBinding(ve,be,z.__bindingPointIndex),l.set(ve,be))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},C=null,Y={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,y=null,b=null,x=null,M=null,T=null,A=null,v=new je(0,0,0),w=0,R=!1,N=null,D=null,V=null,I=null,B=null,Pe.set(0,0,i.canvas.width,i.canvas.height),Ue.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:oe,bindFramebuffer:Ce,drawBuffers:me,useProgram:Re,setBlending:W,setMaterial:Q,setFlipSided:L,setCullFace:le,setLineWidth:Le,setPolygonOffset:Fe,setScissorTest:Ee,activeTexture:Oe,bindTexture:U,unbindTexture:nt,compressedTexImage2D:Ge,compressedTexImage3D:P,texImage2D:ie,texImage3D:se,pixelStorei:He,getParameter:Se,updateUBOMapping:_e,uniformBlockBinding:Ze,texStorage2D:xe,texStorage3D:fe,texSubImage2D:S,texSubImage3D:H,compressedTexSubImage2D:q,compressedTexSubImage3D:ee,scissor:Me,viewport:ye,reset:Qe}}function uw(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,S){return g?new OffscreenCanvas(P,S):nl("canvas")}function p(P,S,H){let q=1,ee=Ge(P);if((ee.width>H||ee.height>H)&&(q=H/Math.max(ee.width,ee.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let xe=Math.floor(q*ee.width),fe=Math.floor(q*ee.height);u===void 0&&(u=_(xe,fe));let ie=S?_(xe,fe):u;return ie.width=xe,ie.height=fe,ie.getContext("2d").drawImage(P,0,0,xe,fe),et("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+xe+"x"+fe+")."),ie}else return"data"in P&&et("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),P;return P}function m(P){return P.generateMipmaps}function y(P){i.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,S,H,q,ee,xe=!1){if(P!==null){if(i[P]!==void 0)return i[P];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe;q&&(fe=e.get("EXT_texture_norm16"),fe||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=S;if(S===i.RED&&(H===i.FLOAT&&(ie=i.R32F),H===i.HALF_FLOAT&&(ie=i.R16F),H===i.UNSIGNED_BYTE&&(ie=i.R8),H===i.UNSIGNED_SHORT&&fe&&(ie=fe.R16_EXT),H===i.SHORT&&fe&&(ie=fe.R16_SNORM_EXT)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ie=i.R8UI),H===i.UNSIGNED_SHORT&&(ie=i.R16UI),H===i.UNSIGNED_INT&&(ie=i.R32UI),H===i.BYTE&&(ie=i.R8I),H===i.SHORT&&(ie=i.R16I),H===i.INT&&(ie=i.R32I)),S===i.RG&&(H===i.FLOAT&&(ie=i.RG32F),H===i.HALF_FLOAT&&(ie=i.RG16F),H===i.UNSIGNED_BYTE&&(ie=i.RG8),H===i.UNSIGNED_SHORT&&fe&&(ie=fe.RG16_EXT),H===i.SHORT&&fe&&(ie=fe.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(ie=i.RG8UI),H===i.UNSIGNED_SHORT&&(ie=i.RG16UI),H===i.UNSIGNED_INT&&(ie=i.RG32UI),H===i.BYTE&&(ie=i.RG8I),H===i.SHORT&&(ie=i.RG16I),H===i.INT&&(ie=i.RG32I)),S===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),H===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),H===i.UNSIGNED_INT&&(ie=i.RGB32UI),H===i.BYTE&&(ie=i.RGB8I),H===i.SHORT&&(ie=i.RGB16I),H===i.INT&&(ie=i.RGB32I)),S===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),H===i.UNSIGNED_INT&&(ie=i.RGBA32UI),H===i.BYTE&&(ie=i.RGBA8I),H===i.SHORT&&(ie=i.RGBA16I),H===i.INT&&(ie=i.RGBA32I)),S===i.RGB&&(H===i.UNSIGNED_SHORT&&fe&&(ie=fe.RGB16_EXT),H===i.SHORT&&fe&&(ie=fe.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),S===i.RGBA){let se=xe?tl:dt.getTransfer(ee);H===i.FLOAT&&(ie=i.RGBA32F),H===i.HALF_FLOAT&&(ie=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ie=se===vt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&fe&&(ie=fe.RGBA16_EXT),H===i.SHORT&&fe&&(ie=fe.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function M(P,S){let H;return P?S===null||S===Wi||S===na?H=i.DEPTH24_STENCIL8:S===Xi?H=i.DEPTH32F_STENCIL8:S===ta&&(H=i.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Wi||S===na?H=i.DEPTH_COMPONENT24:S===Xi?H=i.DEPTH_COMPONENT32F:S===ta&&(H=i.DEPTH_COMPONENT16),H}function T(P,S){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==yn&&P.minFilter!==En?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function A(P){let S=P.target;S.removeEventListener("dispose",A),w(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&d.delete(S)}function v(P){let S=P.target;S.removeEventListener("dispose",v),N(S)}function w(P){let S=n.get(P);if(S.__webglInit===void 0)return;let H=P.source,q=f.get(H);if(q){let ee=q[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(P),Object.keys(q).length===0&&f.delete(H)}n.remove(P)}function R(P){let S=n.get(P);i.deleteTexture(S.__webglTexture);let H=P.source,q=f.get(H);delete q[S.__cacheKey],o.memory.textures--}function N(P){let S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let ee=0;ee<S.__webglFramebuffer[q].length;ee++)i.deleteFramebuffer(S.__webglFramebuffer[q][ee]);else i.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)i.deleteFramebuffer(S.__webglFramebuffer[q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let H=P.textures;for(let q=0,ee=H.length;q<ee;q++){let xe=n.get(H[q]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(H[q])}n.remove(P)}let D=0;function V(){D=0}function I(){return D}function B(P){D=P}function X(){let P=D;return P>=r.maxTextures&&et("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),D+=1,P}function G(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function te(P,S){let H=n.get(P);if(P.isVideoTexture&&U(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){let q=P.image;if(q===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(H,P,S);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function F(P,S){let H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){oe(H,P,S);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function C(P,S){let H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){oe(H,P,S);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function Y(P,S){let H=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&H.__version!==P.version){Ce(H,P,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}let de={[mh]:i.REPEAT,[nr]:i.CLAMP_TO_EDGE,[gh]:i.MIRRORED_REPEAT},ae={[yn]:i.NEAREST,[Y0]:i.NEAREST_MIPMAP_NEAREST,[Ol]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[Yh]:i.LINEAR_MIPMAP_NEAREST,[hs]:i.LINEAR_MIPMAP_LINEAR},Pe={[$0]:i.NEVER,[t_]:i.ALWAYS,[K0]:i.LESS,[Pu]:i.LEQUAL,[Q0]:i.EQUAL,[Iu]:i.GEQUAL,[j0]:i.GREATER,[e_]:i.NOTEQUAL};function Ue(P,S){if(S.type===Xi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===En||S.magFilter===Yh||S.magFilter===Ol||S.magFilter===hs||S.minFilter===En||S.minFilter===Yh||S.minFilter===Ol||S.minFilter===hs)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,de[S.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,de[S.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,de[S.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ae[S.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ae[S.minFilter]),S.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===yn||S.minFilter!==Ol&&S.minFilter!==hs||S.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Te(P,S){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",A));let q=S.source,ee=f.get(q);ee===void 0&&(ee={},f.set(q,ee));let xe=G(S);if(xe!==P.__cacheKey){ee[xe]===void 0&&(ee[xe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ee[xe].usedTimes++;let fe=ee[P.__cacheKey];fe!==void 0&&(ee[P.__cacheKey].usedTimes--,fe.usedTimes===0&&R(S)),P.__cacheKey=xe,P.__webglTexture=ee[xe].texture}return H}function $(P,S,H){return Math.floor(Math.floor(P/H)/S)}function ne(P,S,H,q){let xe=P.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,H,q,S.data);else{xe.sort((He,Me)=>He.start-Me.start);let fe=0;for(let He=1;He<xe.length;He++){let Me=xe[fe],ye=xe[He],_e=Me.start+Me.count,Ze=$(ye.start,S.width,4),Qe=$(Me.start,S.width,4);ye.start<=_e+1&&Ze===Qe&&$(ye.start+ye.count-1,S.width,4)===Ze?Me.count=Math.max(Me.count,ye.start+ye.count-Me.start):(++fe,xe[fe]=ye)}xe.length=fe+1;let ie=t.getParameter(i.UNPACK_ROW_LENGTH),se=t.getParameter(i.UNPACK_SKIP_PIXELS),Se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let He=0,Me=xe.length;He<Me;He++){let ye=xe[He],_e=Math.floor(ye.start/4),Ze=Math.ceil(ye.count/4),Qe=_e%S.width,z=Math.floor(_e/S.width),ve=Ze,re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,Qe,z,ve,re,H,q,S.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function oe(P,S,H){let q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=i.TEXTURE_3D);let ee=Te(P,S),xe=S.source;t.bindTexture(q,P.__webglTexture,i.TEXTURE0+H);let fe=n.get(xe);if(xe.version!==fe.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let re=dt.getPrimaries(dt.workingColorSpace),be=S.colorSpace===Pr?null:dt.getPrimaries(S.colorSpace),Ae=S.colorSpace===Pr||re===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let se=p(S.image,!1,r.maxTextureSize);se=nt(S,se);let Se=s.convert(S.format,S.colorSpace),He=s.convert(S.type),Me=x(S.internalFormat,Se,He,S.normalized,S.colorSpace,S.isVideoTexture);Ue(q,S);let ye,_e=S.mipmaps,Ze=S.isVideoTexture!==!0,Qe=fe.__version===void 0||ee===!0,z=xe.dataReady,ve=T(S,se);if(S.isDepthTexture)Me=M(S.format===us,S.type),Qe&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,Me,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Me,se.width,se.height,0,Se,He,null));else if(S.isDataTexture)if(_e.length>0){Ze&&Qe&&t.texStorage2D(i.TEXTURE_2D,ve,Me,_e[0].width,_e[0].height);for(let re=0,be=_e.length;re<be;re++)ye=_e[re],Ze?z&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ye.width,ye.height,Se,He,ye.data):t.texImage2D(i.TEXTURE_2D,re,Me,ye.width,ye.height,0,Se,He,ye.data);S.generateMipmaps=!1}else Ze?(Qe&&t.texStorage2D(i.TEXTURE_2D,ve,Me,se.width,se.height),z&&ne(S,se,Se,He)):t.texImage2D(i.TEXTURE_2D,0,Me,se.width,se.height,0,Se,He,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ze&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Me,_e[0].width,_e[0].height,se.depth);for(let re=0,be=_e.length;re<be;re++)if(ye=_e[re],S.format!==Ni)if(Se!==null)if(Ze){if(z)if(S.layerUpdates.size>0){let Ae=mp(ye.width,ye.height,S.format,S.type);for(let ce of S.layerUpdates){let pe=ye.data.subarray(ce*Ae/ye.data.BYTES_PER_ELEMENT,(ce+1)*Ae/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,ce,ye.width,ye.height,1,Se,pe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ye.width,ye.height,se.depth,Se,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Me,ye.width,ye.height,se.depth,0,ye.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ye.width,ye.height,se.depth,Se,He,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Me,ye.width,ye.height,se.depth,0,Se,He,ye.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Ze&&Qe&&t.texStorage2D(i.TEXTURE_2D,ve,Me,_e[0].width,_e[0].height);for(let re=0,be=_e.length;re<be;re++)ye=_e[re],S.format!==Ni?Se!==null?Ze?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,ye.width,ye.height,Se,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Me,ye.width,ye.height,0,ye.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?z&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ye.width,ye.height,Se,He,ye.data):t.texImage2D(i.TEXTURE_2D,re,Me,ye.width,ye.height,0,Se,He,ye.data)}else if(S.isDataArrayTexture)if(Ze){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Me,se.width,se.height,se.depth),z)if(S.layerUpdates.size>0){let re=mp(se.width,se.height,S.format,S.type);for(let be of S.layerUpdates){let Ae=se.data.subarray(be*re/se.data.BYTES_PER_ELEMENT,(be+1)*re/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,be,se.width,se.height,1,Se,He,Ae)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Se,He,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,se.width,se.height,se.depth,0,Se,He,se.data);else if(S.isData3DTexture)Ze?(Qe&&t.texStorage3D(i.TEXTURE_3D,ve,Me,se.width,se.height,se.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Se,He,se.data)):t.texImage3D(i.TEXTURE_3D,0,Me,se.width,se.height,se.depth,0,Se,He,se.data);else if(S.isFramebufferTexture){if(Qe)if(Ze)t.texStorage2D(i.TEXTURE_2D,ve,Me,se.width,se.height);else{let re=se.width,be=se.height;for(let Ae=0;Ae<ve;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Me,re,be,0,Se,He,null),re>>=1,be>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let re=i.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),se.parentNode!==re){re.appendChild(se),d.add(S),re.onpaint=be=>{let Ae=be.changedElements;for(let ce of d)Ae.includes(ce.image)&&(ce.needsUpdate=!0)},re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,se);else{let Ae=i.RGBA,ce=i.RGBA,pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ae,ce,pe,se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(_e.length>0){if(Ze&&Qe){let re=Ge(_e[0]);t.texStorage2D(i.TEXTURE_2D,ve,Me,re.width,re.height)}for(let re=0,be=_e.length;re<be;re++)ye=_e[re],Ze?z&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Se,He,ye):t.texImage2D(i.TEXTURE_2D,re,Me,Se,He,ye);S.generateMipmaps=!1}else if(Ze){if(Qe){let re=Ge(se);t.texStorage2D(i.TEXTURE_2D,ve,Me,re.width,re.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,He,se)}else t.texImage2D(i.TEXTURE_2D,0,Me,Se,He,se);m(S)&&y(q),fe.__version=xe.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Ce(P,S,H){if(S.image.length!==6)return;let q=Te(P,S),ee=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+H);let xe=n.get(ee);if(ee.version!==xe.__version||q===!0){t.activeTexture(i.TEXTURE0+H);let fe=dt.getPrimaries(dt.workingColorSpace),ie=S.colorSpace===Pr?null:dt.getPrimaries(S.colorSpace),se=S.colorSpace===Pr||fe===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Se=S.isCompressedTexture||S.image[0].isCompressedTexture,He=S.image[0]&&S.image[0].isDataTexture,Me=[];for(let ce=0;ce<6;ce++)!Se&&!He?Me[ce]=p(S.image[ce],!0,r.maxCubemapSize):Me[ce]=He?S.image[ce].image:S.image[ce],Me[ce]=nt(S,Me[ce]);let ye=Me[0],_e=s.convert(S.format,S.colorSpace),Ze=s.convert(S.type),Qe=x(S.internalFormat,_e,Ze,S.normalized,S.colorSpace),z=S.isVideoTexture!==!0,ve=xe.__version===void 0||q===!0,re=ee.dataReady,be=T(S,ye);Ue(i.TEXTURE_CUBE_MAP,S);let Ae;if(Se){z&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Qe,ye.width,ye.height);for(let ce=0;ce<6;ce++){Ae=Me[ce].mipmaps;for(let pe=0;pe<Ae.length;pe++){let he=Ae[pe];S.format!==Ni?_e!==null?z?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe,0,0,he.width,he.height,_e,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe,Qe,he.width,he.height,0,he.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe,0,0,he.width,he.height,_e,Ze,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe,Qe,he.width,he.height,0,_e,Ze,he.data)}}}else{if(Ae=S.mipmaps,z&&ve){Ae.length>0&&be++;let ce=Ge(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Qe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(He){z?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Me[ce].width,Me[ce].height,_e,Ze,Me[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Qe,Me[ce].width,Me[ce].height,0,_e,Ze,Me[ce].data);for(let pe=0;pe<Ae.length;pe++){let $e=Ae[pe].image[ce].image;z?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe+1,0,0,$e.width,$e.height,_e,Ze,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe+1,Qe,$e.width,$e.height,0,_e,Ze,$e.data)}}else{z?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,_e,Ze,Me[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Qe,_e,Ze,Me[ce]);for(let pe=0;pe<Ae.length;pe++){let he=Ae[pe];z?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe+1,0,0,_e,Ze,he.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe+1,Qe,_e,Ze,he.image[ce])}}}m(S)&&y(i.TEXTURE_CUBE_MAP),xe.__version=ee.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function me(P,S,H,q,ee,xe){let fe=s.convert(H.format,H.colorSpace),ie=s.convert(H.type),se=x(H.internalFormat,fe,ie,H.normalized,H.colorSpace),Se=n.get(S),He=n.get(H);if(He.__renderTarget=S,!Se.__hasExternalTextures){let Me=Math.max(1,S.width>>xe),ye=Math.max(1,S.height>>xe);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,xe,se,Me,ye,S.depth,0,fe,ie,null):t.texImage2D(ee,xe,se,Me,ye,0,fe,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Oe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,ee,He.__webglTexture,0,Ee(S)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,ee,He.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(P,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,P),S.depthBuffer){let q=S.depthTexture,ee=q&&q.isDepthTexture?q.type:null,xe=M(S.stencilBuffer,ee),fe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Oe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee(S),xe,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee(S),xe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,xe,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,P)}else{let q=S.textures;for(let ee=0;ee<q.length;ee++){let xe=q[ee],fe=s.convert(xe.format,xe.colorSpace),ie=s.convert(xe.type),se=x(xe.internalFormat,fe,ie,xe.normalized,xe.colorSpace);Oe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee(S),se,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee(S),se,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,se,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(P,S,H){let q=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(S.depthTexture);if(ee.__renderTarget=S,(!ee.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),ee.__webglTexture===void 0){ee.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,S.depthTexture);let Se=s.convert(S.depthTexture.format),He=s.convert(S.depthTexture.type),Me;S.depthTexture.format===rr?Me=i.DEPTH_COMPONENT24:S.depthTexture.format===us&&(Me=i.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Me,S.width,S.height,0,Se,He,null)}}else te(S.depthTexture,0);let xe=ee.__webglTexture,fe=Ee(S),ie=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,se=S.depthTexture.format===us?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===rr)Oe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ie,xe,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,se,ie,xe,0);else if(S.depthTexture.format===us)Oe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ie,xe,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,se,ie,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function j(P){let S=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let q=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){let ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",ee)};q.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=q}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let q=0;q<6;q++)Ne(S.__webglFramebuffer[q],P,q);else{let q=P.texture.mipmaps;q&&q.length>0?Ne(S.__webglFramebuffer[0],P,0):Ne(S.__webglFramebuffer,P,0)}else if(H){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=i.createRenderbuffer(),Re(S.__webglDepthbuffer[q],P,!1);else{let ee=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=S.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,xe)}}else{let q=P.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Re(S.__webglDepthbuffer,P,!1);else{let ee=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,xe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function W(P,S,H){let q=n.get(P);S!==void 0&&me(q.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&j(P)}function Q(P){let S=P.texture,H=n.get(P),q=n.get(S);P.addEventListener("dispose",v);let ee=P.textures,xe=P.isWebGLCubeRenderTarget===!0,fe=ee.length>1;if(fe||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=S.version,o.memory.textures++),xe){H.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[ie]=[];for(let se=0;se<S.mipmaps.length;se++)H.__webglFramebuffer[ie][se]=i.createFramebuffer()}else H.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let ie=0;ie<S.mipmaps.length;ie++)H.__webglFramebuffer[ie]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(fe)for(let ie=0,se=ee.length;ie<se;ie++){let Se=n.get(ee[ie]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Oe(P)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ie=0;ie<ee.length;ie++){let se=ee[ie];H.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ie]);let Se=s.convert(se.format,se.colorSpace),He=s.convert(se.type),Me=x(se.internalFormat,Se,He,se.normalized,se.colorSpace,P.isXRRenderTarget===!0),ye=Ee(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,Me,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,H.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,S);for(let ie=0;ie<6;ie++)if(S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)me(H.__webglFramebuffer[ie][se],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,se);else me(H.__webglFramebuffer[ie],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(S)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let ie=0,se=ee.length;ie<se;ie++){let Se=ee[ie],He=n.get(Se),Me=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Me=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,He.__webglTexture),Ue(Me,Se),me(H.__webglFramebuffer,P,Se,i.COLOR_ATTACHMENT0+ie,Me,0),m(Se)&&y(Me)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ie=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),Ue(ie,S),S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)me(H.__webglFramebuffer[se],P,S,i.COLOR_ATTACHMENT0,ie,se);else me(H.__webglFramebuffer,P,S,i.COLOR_ATTACHMENT0,ie,0);m(S)&&y(ie),t.unbindTexture()}P.depthBuffer&&j(P)}function L(P){let S=P.textures;for(let H=0,q=S.length;H<q;H++){let ee=S[H];if(m(ee)){let xe=b(P),fe=n.get(ee).__webglTexture;t.bindTexture(xe,fe),y(xe),t.unbindTexture()}}}let le=[],Le=[];function Fe(P){if(P.samples>0){if(Oe(P)===!1){let S=P.textures,H=P.width,q=P.height,ee=i.COLOR_BUFFER_BIT,xe=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(P),ie=S.length>1;if(ie)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let se=P.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[Se]);let He=n.get(S[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,H,q,0,0,H,q,ee,i.NEAREST),l===!0&&(le.length=0,Le.length=0,le.push(i.COLOR_ATTACHMENT0+Se),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(le.push(xe),Le.push(xe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,fe.__webglColorRenderbuffer[Se]);let He=n.get(S[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let S=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ee(P){return Math.min(r.maxSamples,P.samples)}function Oe(P){let S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function U(P){let S=o.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function nt(P,S){let H=P.colorSpace,q=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==el&&H!==Pr&&(dt.getTransfer(H)===vt?(q!==Ni||ee!==oi)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",H)),S}function Ge(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=V,this.getTextureUnits=I,this.setTextureUnits=B,this.setTexture2D=te,this.setTexture2DArray=F,this.setTexture3D=C,this.setTextureCube=Y,this.rebindTextures=W,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function fw(i,e){function t(n,r=Pr){let s,o=dt.getTransfer(r);if(n===oi)return i.UNSIGNED_BYTE;if(n===Zh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sp)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===np)return i.BYTE;if(n===ip)return i.SHORT;if(n===ta)return i.UNSIGNED_SHORT;if(n===qh)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===Xi)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===op)return i.ALPHA;if(n===ap)return i.RGB;if(n===Ni)return i.RGBA;if(n===rr)return i.DEPTH_COMPONENT;if(n===us)return i.DEPTH_STENCIL;if(n===lp)return i.RED;if(n===$h)return i.RED_INTEGER;if(n===fs)return i.RG;if(n===Kh)return i.RG_INTEGER;if(n===Qh)return i.RGBA_INTEGER;if(n===Fl||n===Bl||n===zl||n===kl)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Fl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Fl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jh||n===eu||n===tu||n===nu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===jh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===iu||n===ru||n===su||n===ou||n===au||n===Vl||n===lu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===iu||n===ru)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===su)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ou)return s.COMPRESSED_R11_EAC;if(n===au)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Vl)return s.COMPRESSED_RG11_EAC;if(n===lu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cu||n===hu||n===uu||n===fu||n===du||n===pu||n===mu||n===gu||n===_u||n===xu||n===vu||n===yu||n===Su||n===Mu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===cu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===du)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_u)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Su)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bu||n===Tu||n===wu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===bu)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eu||n===Au||n===Gl||n===Cu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Eu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Au)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===na?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var dw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Np=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new cl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Wt({vertexShader:dw,fragmentShader:pw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new Gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Up=class extends sr{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,_=typeof XRWebGLBinding<"u",p=new Np,m={},y=t.getContextAttributes(),b=null,x=null,M=[],T=[],A=new ge,v=null,w=null,R=new vn;R.viewport=new zt;let N=new vn;N.viewport=new zt;let D=[R,N],V=new Gh,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ne=M[$];return ne===void 0&&(ne=new Xo,M[$]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function($){let ne=M[$];return ne===void 0&&(ne=new Xo,M[$]=ne),ne.getGripSpace()},this.getHand=function($){let ne=M[$];return ne===void 0&&(ne=new Xo,M[$]=ne),ne.getHandSpace()};function X($){let ne=T.indexOf($.inputSource);if(ne===-1)return;let oe=M[ne];oe!==void 0&&(oe.update($.inputSource,$.frame,c||o),oe.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",te);for(let $=0;$<M.length;$++){let ne=T[$];ne!==null&&(T[$]=null,M[$].disconnect(ne))}I=null,B=null,p.reset();for(let $ in m)delete m[$];if(e.setRenderTarget(b),f=null,u=null,d=null,r=null,x=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),w!==null){let $=w.camera;$.fov=w.fov,$.zoom=w.zoom,$.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",G),r.addEventListener("inputsourceschange",te),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Ce=null,me=null;y.depth&&(me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=y.stencil?us:rr,Ce=y.stencil?na:Wi);let Re={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Re),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Jt(u.textureWidth,u.textureHeight,{format:Ni,type:oi,depthTexture:new ns(u.textureWidth,u.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let oe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Jt(f.framebufferWidth,f.framebufferHeight,{format:Ni,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Te.setContext(r),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te($){for(let ne=0;ne<$.removed.length;ne++){let oe=$.removed[ne],Ce=T.indexOf(oe);Ce>=0&&(T[Ce]=null,M[Ce].disconnect(oe))}for(let ne=0;ne<$.added.length;ne++){let oe=$.added[ne],Ce=T.indexOf(oe);if(Ce===-1){for(let Re=0;Re<M.length;Re++)if(Re>=T.length){T.push(oe),Ce=Re;break}else if(T[Re]===null){T[Re]=oe,Ce=Re;break}if(Ce===-1)break}let me=M[Ce];me&&me.connect(oe)}}let F=new O,C=new O;function Y($,ne,oe){F.setFromMatrixPosition(ne.matrixWorld),C.setFromMatrixPosition(oe.matrixWorld);let Ce=F.distanceTo(C),me=ne.projectionMatrix.elements,Re=oe.projectionMatrix.elements,Ne=me[14]/(me[10]-1),j=me[14]/(me[10]+1),W=(me[9]+1)/me[5],Q=(me[9]-1)/me[5],L=(me[8]-1)/me[0],le=(Re[8]+1)/Re[0],Le=Ne*L,Fe=Ne*le,Ee=Ce/(-L+le),Oe=Ee*-L;if(ne.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Oe),$.translateZ(Ee),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),me[10]===-1)$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let U=Ne+Ee,nt=j+Ee,Ge=Le-Oe,P=Fe+(Ce-Oe),S=W*j/nt*U,H=Q*j/nt*U;$.projectionMatrix.makePerspective(Ge,P,S,H,U,nt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function de($,ne){ne===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ne.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ne=$.near,oe=$.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(oe=p.depthFar)),V.near=N.near=R.near=ne,V.far=N.far=R.far=oe,(I!==V.near||B!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,B=V.far),V.layers.mask=$.layers.mask|6,R.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;let Ce=$.parent,me=V.cameras;de(V,Ce);for(let Re=0;Re<me.length;Re++)de(me[Re],Ce);me.length===2?Y(V,R,N):V.projectionMatrix.copy(R.projectionMatrix),w===null&&$.isPerspectiveCamera&&(w={camera:$,fov:$.fov,zoom:$.zoom}),ae($,V,Ce)};function ae($,ne,oe){oe===null?$.matrix.copy(ne.matrixWorld):($.matrix.copy(oe.matrixWorld),$.matrix.invert(),$.matrix.multiply(ne.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=il*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function($){return m[$]};let Pe=null;function Ue($,ne){if(h=ne.getViewerPose(c||o),g=ne,h!==null){let oe=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ce=!1;oe.length!==V.cameras.length&&(V.cameras.length=0,Ce=!0);for(let j=0;j<oe.length;j++){let W=oe[j],Q=null;if(f!==null)Q=f.getViewport(W);else{let le=d.getViewSubImage(u,W);Q=le.viewport,j===0&&(e.setRenderTargetTextures(x,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(x))}let L=D[j];L===void 0&&(L=new vn,L.layers.enable(j),L.viewport=new zt,D[j]=L),L.matrix.fromArray(W.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(W.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Q.x,Q.y,Q.width,Q.height),j===0&&(V.matrix.copy(L.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ce===!0&&V.cameras.push(L)}let me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let j=d.getDepthInformation(oe[0]);j&&j.isValid&&j.texture&&p.init(j,r.renderState)}if(me&&me.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let j=0;j<oe.length;j++){let W=oe[j].camera;if(W){let Q=m[W];Q||(Q=new cl,m[W]=Q);let L=d.getCameraImage(W);Q.sourceTexture=L}}}}for(let oe=0;oe<M.length;oe++){let Ce=T[oe],me=M[oe];Ce!==null&&me!==void 0&&me.update(Ce,ne,c||o)}Pe&&Pe($,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let Te=new U_;Te.setAnimationLoop(Ue),this.setAnimationLoop=function($){Pe=$},this.dispose=function(){}}},mw=new Bt,V_=new rt;V_.set(-1,0,0,0,1,0,0,0,1);function gw(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,fp(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,y,b,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,b):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===An&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===An&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=e.get(m),b=y.envMap,x=y.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(mw.makeRotationFromEuler(x)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(V_),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=b*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===An&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function _w(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let T=M.program;n.uniformBlockBinding(x,T)}function c(x,M){let T=r[x.id];T===void 0&&(p(x),T=h(x),r[x.id]=T,x.addEventListener("dispose",y));let A=M.program;n.updateUBOMapping(x,A);let v=e.render.frame;s[x.id]!==v&&(u(x),s[x.id]=v)}function h(x){let M=d();x.__bindingPointIndex=M;let T=i.createBuffer(),A=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let M=r[x.id],T=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,w=T.length;v<w;v++){let R=T[v];if(Array.isArray(R))for(let N=0,D=R.length;N<D;N++)f(R[N],v,N,A);else f(R,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,M,T,A){if(_(x,M,T,A)===!0){let v=x.__offset,w=x.value;if(Array.isArray(w)){let R=0;for(let N=0;N<w.length;N++){let D=w[N],V=m(D);g(D,x.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function g(x,M,T){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,T)}function _(x,M,T,A){let v=x.value,w=M+"_"+T;if(A[w]===void 0)return typeof v=="number"||typeof v=="boolean"?A[w]=v:ArrayBuffer.isView(v)?A[w]=v.slice():A[w]=v.clone(),!0;{let R=A[w];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return A[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function p(x){let M=x.uniforms,T=0,A=16;for(let w=0,R=M.length;w<R;w++){let N=Array.isArray(M[w])?M[w]:[M[w]];for(let D=0,V=N.length;D<V;D++){let I=N[D],B=Array.isArray(I.value)?I.value:[I.value];for(let X=0,G=B.length;X<G;X++){let te=B[X],F=m(te),C=T%A,Y=C%F.boundary,de=C+Y;T+=Y,de!==0&&A-de<F.storage&&(T+=A-de),I.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=F.storage}}}let v=T%A;return v>0&&(T+=A-v),x.__size=T,x.__cache={},this}function m(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):et("WebGLRenderer: Unsupported uniform value type.",x),M}function y(x){let M=x.target;M.removeEventListener("dispose",y);let T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function b(){for(let x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:b}}var xw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),lr=null;function vw(){return lr===null&&(lr=new Mh(xw,16,16,fs,un),lr.name="DFG_LUT",lr.minFilter=En,lr.magFilter=En,lr.wrapS=nr,lr.wrapT=nr,lr.generateMipmaps=!1,lr.needsUpdate=!0),lr}var Uu=class{constructor(e={}){let{canvas:t=i_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=oi}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=f,p=new Set([Qh,Kh,$h]),m=new Set([oi,Wi,ta,na,Zh,Jh]),y=new Uint32Array(4),b=new Int32Array(4),x=new O,M=null,T=null,A=[],v=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,D=null,V=null,I=null,B=null;this._outputColorSpace=on;let X=0,G=0,te=null,F=-1,C=null,Y=new zt,de=new zt,ae=null,Pe=new je(0),Ue=0,Te=t.width,$=t.height,ne=1,oe=null,Ce=null,me=new zt(0,0,Te,$),Re=new zt(0,0,Te,$),Ne=!1,j=new qo,W=!1,Q=!1,L=new Bt,le=new O,Le=new zt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ee=!1;function Oe(){return te===null?ne:1}let U=n;function nt(E,k){return t.getContext(E,k)}let Ge,P,S,H,q,ee,xe,fe,ie,se,Se,He,Me,ye,_e,Ze,Qe,z,ve,re,be,Ae,ce;try{let E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",$e,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",Ke,!1),U===null){let k="webgl2";if(U=nt(k,E),U===null)throw nt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pe()}catch(E){throw t.removeEventListener("webglcontextlost",$e,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),tt("WebGLRenderer: "+E.message),E}function pe(){Ge=new E1(U),Ge.init(),be=new fw(U,Ge),P=new g1(U,Ge,e,be),S=new hw(U,Ge),P.reversedDepthBuffer&&u&&S.buffers.depth.setReversed(!0),V=U.createFramebuffer(),I=U.createFramebuffer(),B=U.createFramebuffer(),H=new R1(U),q=new $T,ee=new uw(U,Ge,S,q,P,be,H),xe=new w1(R),fe=new IS(U),Ae=new p1(U,fe),ie=new A1(U,fe,H,Ae),se=new I1(U,ie,fe,Ae,H),z=new P1(U,P,ee),_e=new _1(q),Se=new JT(R,xe,Ge,P,Ae,_e),He=new gw(R,q),Me=new QT,ye=new rw(Ge),Qe=new d1(R,xe,S,se,g,l),Ze=new cw(R,se,P),ce=new _w(U,H,P,S),ve=new m1(U,Ge,H),re=new C1(U,Ge,H),H.programs=Se.programs,R.capabilities=P,R.extensions=Ge,R.properties=q,R.renderLists=Me,R.shadowMap=Ze,R.state=S,R.info=H}_!==oi&&(w=new D1(_,t.width,t.height,a,r,s));let he=new Up(R,U);this.xr=he,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=Ge.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ge.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(E){E!==void 0&&(ne=E,this.setSize(Te,$,!1))},this.getSize=function(E){return E.set(Te,$)},this.setSize=function(E,k,K=!0){if(he.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=E,$=k,t.width=Math.floor(E*ne),t.height=Math.floor(k*ne),K===!0&&(t.style.width=E+"px",t.style.height=k+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(Te*ne,$*ne).floor()},this.setDrawingBufferSize=function(E,k,K){Te=E,$=k,ne=K,t.width=Math.floor(E*K),t.height=Math.floor(k*K),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(_===oi){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Y)},this.getViewport=function(E){return E.copy(me)},this.setViewport=function(E,k,K,Z){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,k,K,Z),S.viewport(Y.copy(me).multiplyScalar(ne).round())},this.getScissor=function(E){return E.copy(Re)},this.setScissor=function(E,k,K,Z){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,k,K,Z),S.scissor(de.copy(Re).multiplyScalar(ne).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(E){S.setScissorTest(Ne=E)},this.setOpaqueSort=function(E){oe=E},this.setTransparentSort=function(E){Ce=E},this.getClearColor=function(E){return E.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,K=!0){let Z=0;if(E){let J=!1;if(te!==null){let we=te.texture.format;J=p.has(we)}if(J){let we=te.texture.type,ze=m.has(we),De=Qe.getClearColor(),Xe=Qe.getClearAlpha(),Je=De.r,ot=De.g,mt=De.b;ze?(y[0]=Je,y[1]=ot,y[2]=mt,y[3]=Xe,U.clearBufferuiv(U.COLOR,0,y)):(b[0]=Je,b[1]=ot,b[2]=mt,b[3]=Xe,U.clearBufferiv(U.COLOR,0,b))}else Z|=U.COLOR_BUFFER_BIT}k&&(Z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&U.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){t.removeEventListener("webglcontextlost",$e,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),Qe.dispose(),Me.dispose(),ye.dispose(),q.dispose(),xe.dispose(),se.dispose(),Ae.dispose(),ce.dispose(),Se.dispose(),he.dispose(),he.removeEventListener("sessionstart",Dt),he.removeEventListener("sessionend",wt),gt.stop()};function $e(E){E.preventDefault(),hp("WebGLRenderer: Context Lost."),N=!0}function ue(){hp("WebGLRenderer: Context Restored."),N=!1;let E=H.autoReset,k=Ze.enabled,K=Ze.autoUpdate,Z=Ze.needsUpdate,J=Ze.type;pe(),H.autoReset=E,Ze.enabled=k,Ze.autoUpdate=K,Ze.needsUpdate=Z,Ze.type=J}function Ke(E){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function We(E){let k=E.target;k.removeEventListener("dispose",We),it(k)}function it(E){jt(E),q.remove(E)}function jt(E){let k=q.get(E).programs;k!==void 0&&(k.forEach(function(K){Se.releaseProgram(K)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,K,Z,J,we){k===null&&(k=Fe);let ze=J.isMesh&&J.matrixWorld.determinantAffine()<0,De=mn(E,k,K,Z,J);S.setMaterial(Z,ze);let Xe=K.index,Je=1;if(Z.wireframe===!0){if(Xe=ie.getWireframeAttribute(K),Xe===void 0)return;Je=2}let ot=K.drawRange,mt=K.attributes.position,Ye=ot.start*Je,yt=(ot.start+ot.count)*Je;we!==null&&(Ye=Math.max(Ye,we.start*Je),yt=Math.min(yt,(we.start+we.count)*Je)),Xe!==null?(Ye=Math.max(Ye,0),yt=Math.min(yt,Xe.count)):mt!=null&&(Ye=Math.max(Ye,0),yt=Math.min(yt,mt.count));let tn=yt-Ye;if(tn<0||tn===1/0)return;Ae.setup(J,Z,De,K,Xe);let Nt,Et=ve;if(Xe!==null&&(Nt=fe.get(Xe),Et=re,Et.setIndex(Nt)),J.isMesh)Z.wireframe===!0?(S.setLineWidth(Z.wireframeLinewidth*Oe()),Et.setMode(U.LINES)):Et.setMode(U.TRIANGLES);else if(J.isLine){let Rn=Z.linewidth;Rn===void 0&&(Rn=1),S.setLineWidth(Rn*Oe()),J.isLineSegments?Et.setMode(U.LINES):J.isLineLoop?Et.setMode(U.LINE_LOOP):Et.setMode(U.LINE_STRIP)}else J.isPoints?Et.setMode(U.POINTS):J.isSprite&&Et.setMode(U.TRIANGLES);if(J.isBatchedMesh)if(Ge.get("WEBGL_multi_draw"))Et.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Rn=J._multiDrawStarts,Be=J._multiDrawCounts,Wn=J._multiDrawCount,xt=Xe?fe.get(Xe).bytesPerElement:1,bi=q.get(Z).currentProgram.getUniforms();for(let Zi=0;Zi<Wn;Zi++)bi.setValue(U,"_gl_DrawID",Zi),Et.render(Rn[Zi]/xt,Be[Zi])}else if(J.isInstancedMesh)Et.renderInstances(Ye,tn,J.count);else if(K.isInstancedBufferGeometry){let Rn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Be=Math.min(K.instanceCount,Rn);Et.renderInstances(Ye,tn,Be)}else Et.render(Ye,tn)};function ut(E,k,K,Z){D!==null&&E.isNodeMaterial&&D.setObject(Z,E),W===!0&&_e.setState(E,K,!1),E.transparent===!0&&E.side===vi&&E.forceSinglePass===!1?(E.side=An,E.needsUpdate=!0,Xt(E,k,Z),E.side=as,E.needsUpdate=!0,Xt(E,k,Z),E.side=vi):Xt(E,k,Z)}this.compile=function(E,k,K=null){K===null&&(K=E),D!==null&&D.renderStart(E,k,K),T=ye.get(K),T.init(k),v.push(T),K.traverseVisible(function(J){J.isLight&&J.layers.test(k.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),E!==K&&E.traverseVisible(function(J){J.isLight&&J.layers.test(k.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),T.setupLights(),D!==null&&D.updateLights(T.state.lightsArray),Q=this.localClippingEnabled,W=_e.init(this.clippingPlanes,Q),W===!0&&_e.setGlobalState(this.clippingPlanes,k),D!==null&&Ze.render(T.state.shadowsArray,K,k);let Z=new Set;return E.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let we=J.material;if(we)if(Array.isArray(we))for(let ze=0;ze<we.length;ze++){let De=we[ze];ut(De,K,k,J),Z.add(De)}else ut(we,K,k,J),Z.add(we)}),T=v.pop(),D!==null&&D.renderEnd(),Z},this.compileAsync=function(E,k,K=null){let Z=this.compile(E,k,K);return new Promise(J=>{function we(){if(Z.forEach(function(ze){let Xe=q.get(ze).currentProgram;(Xe===void 0||Xe.isReady())&&Z.delete(ze)}),Z.size===0){J(E);return}setTimeout(we,10)}Ge.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Lt=null;function pn(E){Lt&&Lt(E)}function Dt(){gt.stop()}function wt(){gt.start()}let gt=new U_;gt.setAnimationLoop(pn),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(E){Lt=E,he.setAnimationLoop(E),E===null?gt.stop():gt.start()},he.addEventListener("sessionstart",Dt),he.addEventListener("sessionend",wt),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(E,k);let K=he.enabled===!0&&he.isPresenting===!0,Z=w!==null&&(te===null||K)&&w.begin(R,te);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(k),k=he.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,k,te),T=ye.get(E,v.length),T.init(k),T.state.textureUnits=ee.getTextureUnits(),v.push(T),L.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),j.setFromProjectionMatrix(L,Vi,k.reversedDepth),Q=this.localClippingEnabled,W=_e.init(this.clippingPlanes,Q),M=Me.get(E,A.length),M.init(),A.push(M),he.enabled===!0&&he.isPresenting===!0){let ze=R.xr.getDepthSensingMesh();ze!==null&&Gn(ze,k,-1/0,R.sortObjects)}Gn(E,k,0,R.sortObjects),M.finish(),D!==null&&D.updateLights(T.state.lightsArray),R.sortObjects===!0&&M.sort(oe,Ce),Ee=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Ee&&Qe.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),W===!0&&_e.beginShadows();let J=T.state.shadowsArray;if(Ze.render(J,E,k),W===!0&&_e.endShadows(),(Z&&w.hasRenderPass())===!1){let ze=M.opaque,De=M.transmissive;if(T.setupLights(),k.isArrayCamera){let Xe=k.cameras;if(De.length>0)for(let Je=0,ot=Xe.length;Je<ot;Je++){let mt=Xe[Je];Cn(ze,De,E,mt)}Ee&&Qe.render(E);for(let Je=0,ot=Xe.length;Je<ot;Je++){let mt=Xe[Je];Rt(M,E,mt,mt.viewport)}}else De.length>0&&Cn(ze,De,E,k),Ee&&Qe.render(E),Rt(M,E,k)}te!==null&&G===0&&(ee.updateMultisampleRenderTarget(te),ee.updateRenderTargetMipmap(te)),Z&&w.end(R),E.isScene===!0&&E.onAfterRender(R,E,k),Ae.resetDefaultState(),F=-1,C=null,v.pop(),v.length>0?(T=v[v.length-1],ee.setTextureUnits(T.state.textureUnits),W===!0&&_e.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,D!==null&&D.renderEnd()};function Gn(E,k,K,Z){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(j)){Z&&Le.setFromMatrixPosition(E.matrixWorld).applyMatrix4(L);let ze=se.update(E),De=E.material;De.visible&&M.push(E,ze,De,K,Le.z,null,k)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(j))){let ze=se.update(E),De=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Le.copy(E.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Le.copy(ze.boundingSphere.center)),Le.applyMatrix4(E.matrixWorld).applyMatrix4(L)),Array.isArray(De)){let Xe=ze.groups;for(let Je=0,ot=Xe.length;Je<ot;Je++){let mt=Xe[Je],Ye=De[mt.materialIndex];Ye&&Ye.visible&&M.push(E,ze,Ye,K,Le.z,mt,k)}}else De.visible&&M.push(E,ze,De,K,Le.z,null,k)}}let we=E.children;for(let ze=0,De=we.length;ze<De;ze++)Gn(we[ze],k,K,Z)}function Rt(E,k,K,Z){let{opaque:J,transmissive:we,transparent:ze}=E;T.setupLightsView(K),W===!0&&_e.setGlobalState(R.clippingPlanes,K),Z&&S.viewport(Y.copy(Z)),J.length>0&&Hn(J,k,K),we.length>0&&Hn(we,k,K),ze.length>0&&Hn(ze,k,K),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Cn(E,k,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Z.id]===void 0){let Ye=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Z.id]=new Jt(1,1,{generateMipmaps:!0,type:Ye?un:oi,minFilter:hs,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let we=T.state.transmissionRenderTarget[Z.id],ze=Z.viewport||Y;we.setSize(ze.z*R.transmissionResolutionScale,ze.w*R.transmissionResolutionScale);let De=R.getRenderTarget(),Xe=R.getActiveCubeFace(),Je=R.getActiveMipmapLevel();R.setRenderTarget(we),R.getClearColor(Pe),Ue=R.getClearAlpha(),Ue<1&&R.setClearColor(16777215,.5),R.clear(),Ee&&Qe.render(K);let ot=R.toneMapping;R.toneMapping=Hi;let mt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),T.setupLightsView(Z),W===!0&&_e.setGlobalState(R.clippingPlanes,Z),Hn(E,K,Z),ee.updateMultisampleRenderTarget(we),ee.updateRenderTargetMipmap(we),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let yt=0,tn=k.length;yt<tn;yt++){let Nt=k[yt],{object:Et,geometry:Rn,material:Be,group:Wn}=Nt;if(Be.side===vi&&Et.layers.test(Z.layers)){let xt=Be.side;Be.side=An,Be.needsUpdate=!0,en(Et,K,Z,Rn,Be,Wn),Be.side=xt,Be.needsUpdate=!0,Ye=!0}}Ye===!0&&(ee.updateMultisampleRenderTarget(we),ee.updateRenderTargetMipmap(we))}R.setRenderTarget(De,Xe,Je),R.setClearColor(Pe,Ue),mt!==void 0&&(Z.viewport=mt),R.toneMapping=ot}function Hn(E,k,K){let Z=k.isScene===!0?k.overrideMaterial:null;for(let J=0,we=E.length;J<we;J++){let ze=E[J],{object:De,geometry:Xe,group:Je}=ze,ot=ze.material;ot.allowOverride===!0&&Z!==null&&(ot=Z),De.layers.test(K.layers)&&en(De,k,K,Xe,ot,Je)}}function en(E,k,K,Z,J,we){D!==null&&J.isNodeMaterial&&D.setObject(E,J),E.onBeforeRender(R,k,K,Z,J,we),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),J.onBeforeRender(R,k,K,Z,E,we),J.transparent===!0&&J.side===vi&&J.forceSinglePass===!1?(J.side=An,J.needsUpdate=!0,R.renderBufferDirect(K,k,Z,J,E,we),J.side=as,J.needsUpdate=!0,R.renderBufferDirect(K,k,Z,J,E,we),J.side=vi):R.renderBufferDirect(K,k,Z,J,E,we),E.onAfterRender(R,k,K,Z,J,we)}function Xt(E,k,K){k.isScene!==!0&&(k=Fe);let Z=q.get(E),J=T.state.lights,we=T.state.shadowsArray,ze=J.state.version,De=Se.getParameters(E,J.state,we,k,K,T.state.lightProbeGridArray),Xe=Se.getProgramCacheKey(De),Je=Z.programs;Z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,Z.fog=k.fog;let ot=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Z.envMap=xe.get(E.envMap||Z.environment,ot),Z.envMapRotation=Z.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Je===void 0&&(E.addEventListener("dispose",We),Je=new Map,Z.programs=Je);let mt=Je.get(Xe);if(mt!==void 0){if(Z.currentProgram===mt&&Z.lightsStateVersion===ze)return qi(E,De),mt}else De.uniforms=Se.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,K,De),E.onBeforeCompile(De,R),mt=Se.acquireProgram(De,Xe),Je.set(Xe,mt),Z.uniforms=De.uniforms;let Ye=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ye.clippingPlanes=_e.uniform),qi(E,De),Z.needsLights=Mi(E),Z.lightsStateVersion=ze,Z.needsLights&&(Ye.ambientLightColor.value=J.state.ambient,Ye.lightProbe.value=J.state.probe,Ye.sunLights.value=J.state.sun,Ye.sunLightShadows.value=J.state.sunShadow,Ye.directionalLights.value=J.state.directional,Ye.directionalLightShadows.value=J.state.directionalShadow,Ye.spotLights.value=J.state.spot,Ye.spotLightShadows.value=J.state.spotShadow,Ye.rectAreaLights.value=J.state.rectArea,Ye.ltc_1.value=J.state.rectAreaLTC1,Ye.ltc_2.value=J.state.rectAreaLTC2,Ye.pointLights.value=J.state.point,Ye.pointLightShadows.value=J.state.pointShadow,Ye.hemisphereLights.value=J.state.hemi,Ye.sunShadowMatrix.value=J.state.sunShadowMatrix,Ye.sunShadowCascade.value=J.state.sunShadowCascade,Ye.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ye.spotLightMatrix.value=J.state.spotLightMatrix,Ye.spotLightMap.value=J.state.spotLightMap,Ye.pointShadowMatrix.value=J.state.pointShadowMatrix),Z.lightProbeGrid=T.state.lightProbeGridArray.length>0,Z.currentProgram=mt,Z.uniformsList=null,mt}function an(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=oa.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function qi(E,k){let K=q.get(E);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function eo(E,k){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(k.matrixWorld);for(let K=0,Z=E.length;K<Z;K++){let J=E[K];if(J.texture!==null&&J.boundingBox.containsPoint(x))return J}return null}function mn(E,k,K,Z,J){k.isScene!==!0&&(k=Fe),ee.resetTextureUnits();let we=k.fog,ze=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?k.environment:null,De=te===null?R.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:dt.workingColorSpace,Xe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Je=xe.get(Z.envMap||ze,Xe),ot=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,mt=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ye=!!K.morphAttributes.position,yt=!!K.morphAttributes.normal,tn=!!K.morphAttributes.color,Nt=Hi;Z.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Nt=R.toneMapping);let Et=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Rn=Et!==void 0?Et.length:0,Be=q.get(Z),Wn=T.state.lights;if(W===!0&&(Q===!0||E!==C)){let Pt=E===C&&Z.id===F;_e.setState(Z,E,Pt)}let xt=!1;Z.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Wn.state.version||Be.outputColorSpace!==De||J.isBatchedMesh&&Be.batching===!1||!J.isBatchedMesh&&Be.batching===!0||J.isBatchedMesh&&Be.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Be.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Be.instancing===!1||!J.isInstancedMesh&&Be.instancing===!0||J.isSkinnedMesh&&Be.skinning===!1||!J.isSkinnedMesh&&Be.skinning===!0||J.isInstancedMesh&&Be.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Be.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Be.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Be.instancingMorph===!1&&J.morphTexture!==null||Be.envMap!==Je||Z.fog===!0&&Be.fog!==we||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==_e.numPlanes||Be.numIntersection!==_e.numIntersection)||Be.vertexAlphas!==ot||Be.vertexTangents!==mt||Be.morphTargets!==Ye||Be.morphNormals!==yt||Be.morphColors!==tn||Be.toneMapping!==Nt||Be.morphTargetsCount!==Rn||!!Be.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Be.__version=Z.version);let bi=Be.currentProgram;xt===!0&&(bi=Xt(Z,k,J),D&&Z.isNodeMaterial&&D.onUpdateProgram(Z,bi,Be));let Zi=!1,Lr=!1,no=!1,Tt=bi.getUniforms(),Kt=Be.uniforms;if(S.useProgram(bi.program)&&(Zi=!0,Lr=!0,no=!0),Z.id!==F&&(F=Z.id,Lr=!0),Be.needsLights){let Pt=eo(T.state.lightProbeGridArray,J);Be.lightProbeGrid!==Pt&&(Be.lightProbeGrid=Pt,Lr=!0)}if(Zi||C!==E){S.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Tt.setValue(U,"projectionMatrix",E.projectionMatrix),Tt.setValue(U,"viewMatrix",E.matrixWorldInverse);let Nr=Tt.map.cameraPosition;Nr!==void 0&&Nr.setValue(U,le.setFromMatrixPosition(E.matrixWorld)),P.logarithmicDepthBuffer&&Tt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Tt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),C!==E&&(C=E,Lr=!0,no=!0)}if(Be.needsLights&&(Wn.state.sunShadowMap.length>0&&Tt.setValue(U,"sunShadowMap",Wn.state.sunShadowMap,ee),Wn.state.directionalShadowMap.length>0&&Tt.setValue(U,"directionalShadowMap",Wn.state.directionalShadowMap,ee),Wn.state.spotShadowMap.length>0&&Tt.setValue(U,"spotShadowMap",Wn.state.spotShadowMap,ee),Wn.state.pointShadowMap.length>0&&Tt.setValue(U,"pointShadowMap",Wn.state.pointShadowMap,ee)),J.isSkinnedMesh){Tt.setOptional(U,J,"bindMatrix"),Tt.setOptional(U,J,"bindMatrixInverse");let Pt=J.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),Tt.setValue(U,"boneTexture",Pt.boneTexture,ee))}J.isBatchedMesh&&(Tt.setOptional(U,J,"batchingTexture"),Tt.setValue(U,"batchingTexture",J._matricesTexture,ee),Tt.setOptional(U,J,"batchingIdTexture"),Tt.setValue(U,"batchingIdTexture",J._indirectTexture,ee),Tt.setOptional(U,J,"batchingColorTexture"),J._colorsTexture!==null&&Tt.setValue(U,"batchingColorTexture",J._colorsTexture,ee));let Dr=K.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0)&&z.update(J,K,bi),(Lr||Be.receiveShadow!==J.receiveShadow)&&(Be.receiveShadow=J.receiveShadow,Tt.setValue(U,"receiveShadow",J.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&k.environment!==null&&(Kt.envMapIntensity.value=k.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=vw()),Lr){if(Tt.setValue(U,"toneMappingExposure",R.toneMappingExposure),Be.needsLights&&$t(Kt,no),we&&Z.fog===!0&&He.refreshFogUniforms(Kt,we),He.refreshMaterialUniforms(Kt,Z,ne,$,T.state.transmissionRenderTarget[E.id]),Be.needsLights&&Be.lightProbeGrid){let Pt=Be.lightProbeGrid;Kt.probesSH.value=Pt.texture,Kt.probesMin.value.copy(Pt.boundingBox.min),Kt.probesMax.value.copy(Pt.boundingBox.max),Kt.probesResolution.value.copy(Pt.resolution)}oa.upload(U,an(Be),Kt,ee)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(oa.upload(U,an(Be),Kt,ee),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Tt.setValue(U,"center",J.center),Tt.setValue(U,"modelViewMatrix",J.modelViewMatrix),Tt.setValue(U,"normalMatrix",J.normalMatrix),Tt.setValue(U,"modelMatrix",J.matrixWorld),Z.uniformsGroups!==void 0){let Pt=Z.uniformsGroups;for(let Nr=0,io=Pt.length;Nr<io;Nr++){let Hp=Pt[Nr];ce.update(Hp,bi),ce.bind(Hp,bi)}}return bi}function $t(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.sunLights.needsUpdate=k,E.sunLightShadows.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Mi(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(E,k,K){let Z=q.get(E);Z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),q.get(E.texture).__webglTexture=k,q.get(E.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:K,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){let K=q.get(E);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,K=0){te=E,X=k,G=K;let Z=null,J=!1,we=!1;if(E){let De=q.get(E);if(De.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(U.FRAMEBUFFER,De.__webglFramebuffer),Y.copy(E.viewport),de.copy(E.scissor),ae=E.scissorTest,S.viewport(Y),S.scissor(de),S.setScissorTest(ae),F=-1;return}else if(De.__webglFramebuffer===void 0)ee.setupRenderTarget(E);else if(De.__hasExternalTextures)ee.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ot=E.depthTexture;if(De.__boundDepthTexture!==ot){if(ot!==null&&q.has(ot)&&(E.width!==ot.image.width||E.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(E)}}let Xe=E.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(we=!0);let Je=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Je[k])?Z=Je[k][K]:Z=Je[k],J=!0):E.samples>0&&ee.useMultisampledRTT(E)===!1?Z=q.get(E).__webglMultisampledFramebuffer:Array.isArray(Je)?Z=Je[K]:Z=Je,Y.copy(E.viewport),de.copy(E.scissor),ae=E.scissorTest}else Y.copy(me).multiplyScalar(ne).floor(),de.copy(Re).multiplyScalar(ne).floor(),ae=Ne;if(K!==0&&(Z=V),S.bindFramebuffer(U.FRAMEBUFFER,Z)&&S.drawBuffers(E,Z),S.viewport(Y),S.scissor(de),S.setScissorTest(ae),J){let De=q.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,De.__webglTexture,K)}else if(we){let De=k;for(let Xe=0;Xe<E.textures.length;Xe++){let Je=q.get(E.textures[Xe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Xe,Je.__webglTexture,K,De)}}else if(E!==null&&K!==0){let De=q.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,De.__webglTexture,K)}F=-1};function to(E){let k=q.get(E);return(k.__readFormat!==E.format||k.__readType!==E.type)&&(k.__readFormat=E.format,k.__readType=E.type,k.__formatReadable=P.textureFormatReadable(E.format),k.__typeReadable=P.textureTypeReadable(E.type)),k}this.readRenderTargetPixels=function(E,k,K,Z,J,we,ze,De=0){if(!(E&&E.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ze!==void 0&&(Xe=Xe[ze]),Xe){S.bindFramebuffer(U.FRAMEBUFFER,Xe);try{let Je=E.textures[De],ot=Je.format,mt=Je.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+De);let Ye=to(Je);if(Ye.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-Z&&K>=0&&K<=E.height-J&&U.readPixels(k,K,Z,J,be.convert(ot),be.convert(mt),we)}finally{let Je=te!==null?q.get(te).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(E,k,K,Z,J,we,ze,De=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ze!==void 0&&(Xe=Xe[ze]),Xe)if(k>=0&&k<=E.width-Z&&K>=0&&K<=E.height-J){S.bindFramebuffer(U.FRAMEBUFFER,Xe);let Je=E.textures[De],ot=Je.format,mt=Je.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+De);let Ye=to(Je);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let yt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,yt),U.bufferData(U.PIXEL_PACK_BUFFER,we.byteLength,U.STREAM_READ),U.readPixels(k,K,Z,J,be.convert(ot),be.convert(mt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let tn=te!==null?q.get(te).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,tn);let Nt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await s_(U,Nt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,yt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,we),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(yt),U.deleteSync(Nt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,K=0){let Z=Math.pow(2,-K),J=Math.floor(E.image.width*Z),we=Math.floor(E.image.height*Z),ze=k!==null?k.x:0,De=k!==null?k.y:0;ee.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,ze,De,J,we),S.unbindTexture()},this.copyTextureToTexture=function(E,k,K=null,Z=null,J=0,we=0){let ze,De,Xe,Je,ot,mt,Ye,yt,tn,Nt=E.isCompressedTexture?E.mipmaps[we]:E.image;if(K!==null)ze=K.max.x-K.min.x,De=K.max.y-K.min.y,Xe=K.isBox3?K.max.z-K.min.z:1,Je=K.min.x,ot=K.min.y,mt=K.isBox3?K.min.z:0;else{let Kt=Math.pow(2,-J);ze=Math.floor(Nt.width*Kt),De=Math.floor(Nt.height*Kt),E.isDataArrayTexture?Xe=Nt.depth:E.isData3DTexture?Xe=Math.floor(Nt.depth*Kt):Xe=1,Je=0,ot=0,mt=0}Z!==null?(Ye=Z.x,yt=Z.y,tn=Z.z):(Ye=0,yt=0,tn=0);let Et=be.convert(k.format),Rn=be.convert(k.type),Be;k.isData3DTexture?(ee.setTexture3D(k,0),Be=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ee.setTexture2DArray(k,0),Be=U.TEXTURE_2D_ARRAY):(ee.setTexture2D(k,0),Be=U.TEXTURE_2D),S.activeTexture(U.TEXTURE0),S.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),S.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),S.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);let Wn=S.getParameter(U.UNPACK_ROW_LENGTH),xt=S.getParameter(U.UNPACK_IMAGE_HEIGHT),bi=S.getParameter(U.UNPACK_SKIP_PIXELS),Zi=S.getParameter(U.UNPACK_SKIP_ROWS),Lr=S.getParameter(U.UNPACK_SKIP_IMAGES);S.pixelStorei(U.UNPACK_ROW_LENGTH,Nt.width),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Nt.height),S.pixelStorei(U.UNPACK_SKIP_PIXELS,Je),S.pixelStorei(U.UNPACK_SKIP_ROWS,ot),S.pixelStorei(U.UNPACK_SKIP_IMAGES,mt);let no=E.isDataArrayTexture||E.isData3DTexture,Tt=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let Kt=q.get(E),Dr=q.get(k),Pt=q.get(Kt.__renderTarget),Nr=q.get(Dr.__renderTarget);S.bindFramebuffer(U.READ_FRAMEBUFFER,Pt.__webglFramebuffer),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,Nr.__webglFramebuffer);for(let io=0;io<Xe;io++)no&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(E).__webglTexture,J,mt+io),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(k).__webglTexture,we,tn+io)),U.blitFramebuffer(Je,ot,ze,De,Ye,yt,ze,De,U.DEPTH_BUFFER_BIT,U.NEAREST);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(J!==0||E.isRenderTargetTexture||q.has(E)){let Kt=q.get(E),Dr=q.get(k);S.bindFramebuffer(U.READ_FRAMEBUFFER,I),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let Pt=0;Pt<Xe;Pt++)no?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Kt.__webglTexture,J,mt+Pt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Kt.__webglTexture,J),Tt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dr.__webglTexture,we,tn+Pt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Dr.__webglTexture,we),J!==0?U.blitFramebuffer(Je,ot,ze,De,Ye,yt,ze,De,U.COLOR_BUFFER_BIT,U.NEAREST):Tt?U.copyTexSubImage3D(Be,we,Ye,yt,tn+Pt,Je,ot,ze,De):U.copyTexSubImage2D(Be,we,Ye,yt,Je,ot,ze,De);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Tt?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Be,we,Ye,yt,tn,ze,De,Xe,Et,Rn,Nt.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Be,we,Ye,yt,tn,ze,De,Xe,Et,Nt.data):U.texSubImage3D(Be,we,Ye,yt,tn,ze,De,Xe,Et,Rn,Nt):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,we,Ye,yt,ze,De,Et,Rn,Nt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,we,Ye,yt,Nt.width,Nt.height,Et,Nt.data):U.texSubImage2D(U.TEXTURE_2D,we,Ye,yt,ze,De,Et,Rn,Nt);S.pixelStorei(U.UNPACK_ROW_LENGTH,Wn),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt),S.pixelStorei(U.UNPACK_SKIP_PIXELS,bi),S.pixelStorei(U.UNPACK_SKIP_ROWS,Zi),S.pixelStorei(U.UNPACK_SKIP_IMAGES,Lr),we===0&&k.generateMipmaps&&U.generateMipmap(Be),S.unbindTexture()},this.initRenderTarget=function(E){q.get(E).__webglFramebuffer===void 0&&ee.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ee.setTextureCube(E,0):E.isData3DTexture?ee.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ee.setTexture2DArray(E,0):ee.setTexture2D(E,0),S.unbindTexture()},this.resetState=function(){X=0,G=0,te=null,S.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var yw='-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',Fp='ui-monospace, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',Ve={bg:"#0b0d12",panel:"#11141b",panel2:"#161a23",line:"rgba(255,255,255,0.07)",ink:"#e8eaef",muted:"#8a90a0",faint:"#5a6070",accent:"#3d9bff",green:"#3fcf8e",kw:"#cf8e6d",fn:"#56a8f5",str:"#6aab73",cm:"#7a7e85",prop:"#c77dbb",type:"#bcbec4"};function Ot(i,e,t,n,r,s){let o=Math.min(s,n/2,r/2);i.beginPath(),i.moveTo(e+o,t),i.arcTo(e+n,t,e+n,t+r,o),i.arcTo(e+n,t+r,e,t+r,o),i.arcTo(e,t+r,e,t,o),i.arcTo(e,t,e+n,t,o),i.closePath()}function Mt(i,e,t=400,n=yw){i.font=`${t} ${e}px ${n}`}function Bp(i,e,t,n,r){i.save(),i.strokeStyle=r,i.lineWidth=n*.16,i.lineCap="round",i.lineJoin="round",i.beginPath(),i.moveTo(e-n*.32,t),i.lineTo(e-n*.08,t+n*.24),i.lineTo(e+n*.34,t-n*.24),i.stroke(),i.restore()}function Sw(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function Bu(i,e,t){let n=Sw(i,e),r=n.getContext("2d"),s="";return{canvas:n,draw(o){let a=JSON.stringify(o);return a===s?!1:(s=a,r.save(),t(r,i,e,o),r.restore(),!0)}}}var H_=[[["package ","kw"],["org.sshorg.shared","type"]],[],[["interface ","kw"],["Product","type"],[" {","type"]],[["    val ","kw"],["platform","prop"],[": Platform","type"]],[["    fun ","kw"],["render","fn"],["(): Screen","type"]],[["}","type"]],[],[["fun ","kw"],["build","fn"],["() = ","type"],["product","fn"],[" {","type"]],[["    ","type"],["android","fn"],["()","type"]],[["    ","type"],["ios","fn"],["()","type"]],[["    ","type"],["desktop","fn"],["()","type"]],[["    ","type"],["web","fn"],["()","type"]],[["}","type"]],[],[["// one idea \xB7 many surfaces","cm"]],[["val ","kw"],["future","prop"],[" = ","type"],['"shared"',"str"]]],Mw=H_.reduce((i,e)=>i+e.reduce((t,[n])=>t+n.length,0)+1,0),bw=[[0,"sshorg","dir"],[1,"shared","dir"],[2,"commonMain","dir"],[3,"Product.kt","kt",!0],[3,"Platform.kt","kt"],[2,"androidMain","dir-closed"],[2,"iosMain","dir-closed"],[1,"androidApp","dir-closed"],[1,"iosApp","dir-closed"],[1,"desktopApp","dir-closed"],[1,"build.gradle.kts","gradle"]];function W_(){return Bu(1600,1032,(i,e,t,{typing:n,caret:r})=>{i.fillStyle=Ve.bg,i.fillRect(0,0,e,t),i.fillStyle="#12151c",i.fillRect(0,0,e,58),["#ff5f57","#febc2e","#28c840"].forEach((g,_)=>{i.fillStyle=g,i.beginPath(),i.arc(32+_*26,29,7.5,0,Math.PI*2),i.fill()}),Mt(i,19,500),i.fillStyle=Ve.muted,i.textAlign="center",i.fillText("sshorg \u2014 shared/src/commonMain/kotlin/Product.kt",e/2,36),i.textAlign="left",i.fillStyle=Ve.line,i.fillRect(0,58,e,1);let s=310;i.fillStyle="#0e1117",i.fillRect(0,59,s,t-59-38),Mt(i,14,700),i.fillStyle=Ve.faint,i.fillText("PROJECT",28,98),bw.forEach(([g,_,p,m],y)=>{let b=140+y*40;m&&(i.fillStyle="rgba(61,155,255,0.16)",Ot(i,12,b-26,s-24,36,8),i.fill());let x=28+g*22;i.fillStyle=p.startsWith("dir")?"#7f8aa3":p==="kt"?"#a97bff":"#5fb3a1",Ot(i,x,b-16,16,14,3),i.fill(),Mt(i,18,m?600:400),i.fillStyle=m?Ve.ink:"#aeb4c2",i.fillText(_,x+26,b-3)}),i.fillStyle=Ve.line,i.fillRect(s,59,1,t-59-38);let o=s+1,a=360,l=e-o-a;i.fillStyle="#0e1117",i.fillRect(o,59,l,50),i.fillStyle=Ve.bg,i.fillRect(o,59,200,50),i.fillStyle=Ve.accent,i.fillRect(o,59,200,3),Mt(i,18,500),i.fillStyle=Ve.ink,i.fillText("Product.kt",o+26,91),i.fillStyle=Ve.muted,i.fillText("Platform.kt",o+226,91),i.fillStyle=Ve.line,i.fillRect(o,109,l,1);let c=Math.floor(n*Mw),h=null,d=44;Mt(i,23,400,Fp);let u=i.measureText("M").width;H_.forEach((g,_)=>{let p=160+_*d;i.fillStyle=Ve.faint,i.textAlign="right",i.fillText(String(_+1),o+60,p),i.textAlign="left";let m=o+92;for(let[y,b]of g){if(c<=0)break;let x=y.slice(0,c);c-=x.length,i.fillStyle=Ve[b],i.fillText(x,m,p),m+=x.length*u}c>0?c-=1:h===null&&(h=[m,p])}),h&&r&&(i.fillStyle=Ve.accent,i.fillRect(h[0]+1,h[1]-22,3,28));let f=e-a;i.fillStyle="#0e1117",i.fillRect(f,59,a,t-59-38),i.fillStyle=Ve.line,i.fillRect(f,59,1,t-59-38),Mt(i,14,700),i.fillStyle=Ve.faint,i.fillText("TARGETS",f+28,98),["Android","iOS","Desktop","Web"].forEach((g,_)=>{let p=132+_*74,m=n>.55+_*.1;i.fillStyle=Ve.panel2,Ot(i,f+20,p,a-40,58,12),i.fill(),Mt(i,20,600),i.fillStyle=Ve.ink,i.fillText(g,f+44,p+37),m?(i.fillStyle="rgba(63,207,142,0.16)",i.beginPath(),i.arc(f+a-62,p+29,16,0,Math.PI*2),i.fill(),Bp(i,f+a-62,p+29,18,Ve.green)):(i.strokeStyle=Ve.faint,i.lineWidth=2,i.beginPath(),i.arc(f+a-62,p+29,10,0,Math.PI*2),i.stroke())}),Mt(i,14,700),i.fillStyle=Ve.faint,i.fillText("BUILD",f+28,460),i.fillStyle=Ve.panel2,Ot(i,f+28,478,a-56,10,5),i.fill(),i.fillStyle=n>=1?Ve.green:Ve.accent,Ot(i,f+28,478,Math.max(10,(a-56)*n),10,5),i.fill(),Mt(i,17,500),i.fillStyle=Ve.muted,i.fillText(n>=1?"All targets up to date":"Compiling shared module\u2026",f+28,520),i.fillStyle="#12151c",i.fillRect(0,t-38,e,38),Mt(i,16,500),i.fillStyle=Ve.muted,i.fillText("main",28,t-13),i.fillText("Kotlin Multiplatform",110,t-13),i.textAlign="right",i.fillText("UTF-8   LF   4 spaces",e-28,t-13),i.textAlign="left"})}function X_(){return Bu(700,1472,(i,e,t,{reveal:n=1})=>{let r=i.createLinearGradient(0,0,0,t);r.addColorStop(0,"#0d1018"),r.addColorStop(1,"#0a0c12"),i.fillStyle=r,i.fillRect(0,0,e,t),Mt(i,30,600),i.fillStyle=Ve.ink,i.fillText("9:41",64,72),[0,1,2,3].forEach(p=>{i.fillRect(e-170+p*12,70-(p+1)*6,8,(p+1)*6)}),Ot(i,e-104,50,50,24,7),i.lineWidth=2.5,i.strokeStyle=Ve.ink,i.stroke(),Ot(i,e-100,54,36,16,4),i.fill(),i.fillStyle="#000",Ot(i,e/2-96,30,192,56,28),i.fill(),Mt(i,26,500),i.fillStyle=Ve.muted,i.fillText("Good evening",52,176),Mt(i,58,700),i.fillStyle=Ve.ink,i.fillText("Your product",52,244),i.fillStyle="rgba(61,155,255,0.16)",Ot(i,e-164,146,112,42,21),i.fill(),Mt(i,20,700),i.fillStyle=Ve.accent,i.textAlign="center",i.fillText("DEMO",e-108,174),i.textAlign="left";let s=40,o=290,a=e-80,l=380,c=i.createLinearGradient(s,o,s+a,o+l);c.addColorStop(0,"#1c2c4d"),c.addColorStop(1,"#121a2c"),i.fillStyle=c,Ot(i,s,o,a,l,40),i.fill(),Mt(i,24,500),i.fillStyle="#a9b6d3",i.fillText("Weekly activity",s+36,o+62),Mt(i,64,700),i.fillStyle=Ve.ink,i.fillText("Growing",s+36,o+140);let h=[.62,.55,.6,.44,.48,.34,.38,.22,.26,.14],d=o+180,u=160,f=Math.min(1,n*1.25);i.save(),i.beginPath(),i.rect(s,o,36+(a-72)*f+6,l),i.clip(),i.beginPath(),h.forEach((p,m)=>{let y=s+36+m/(h.length-1)*(a-72),b=d+p*u;if(m===0)i.moveTo(y,b);else{let x=s+36+(m-1)/(h.length-1)*(a-72),M=d+h[m-1]*u;i.bezierCurveTo((x+y)/2,M,(x+y)/2,b,y,b)}}),i.strokeStyle="#6fb6ff",i.lineWidth=6,i.lineCap="round",i.stroke(),i.lineTo(s+a-36,d+u),i.lineTo(s+36,d+u),i.closePath();let g=i.createLinearGradient(0,d,0,d+u);g.addColorStop(0,"rgba(111,182,255,0.35)"),g.addColorStop(1,"rgba(111,182,255,0)"),i.fillStyle=g,i.fill(),i.restore(),[["Compose UI","Native feel on Android & iOS","#3d9bff"],["Shared domain","One Kotlin core","#a97bff"],["Realtime","Synced across devices","#3fcf8e"]].forEach(([p,m,y],b)=>{let x=Math.min(1,Math.max(0,(n*1.5-.3-b*.18)/.3));if(x<=0)return;i.save(),i.globalAlpha=x,i.translate(0,(1-x)*44);let M=712+b*162;i.fillStyle=Ve.panel2,Ot(i,40,M,e-80,140,32),i.fill(),i.fillStyle=y,i.globalAlpha=.18*x,i.beginPath(),i.arc(116,M+70,38,0,Math.PI*2),i.fill(),i.globalAlpha=x,i.beginPath(),i.arc(116,M+70,13,0,Math.PI*2),i.fill(),Mt(i,32,650),i.fillStyle=Ve.ink,i.fillText(p,180,M+62),Mt(i,24,400),i.fillStyle=Ve.muted,i.fillText(m,180,M+100),i.strokeStyle=Ve.faint,i.lineWidth=4,i.beginPath(),i.moveTo(e-92,M+56),i.lineTo(e-78,M+70),i.lineTo(e-92,M+84),i.stroke(),i.restore()}),i.fillStyle="#10131a",i.fillRect(0,t-170,e,170),i.fillStyle=Ve.line,i.fillRect(0,t-170,e,2),[0,1,2,3].forEach(p=>{let m=100+p*((e-200)/3);i.fillStyle=p===0?Ve.accent:"#4a5060",Ot(i,m-22,t-132,44,44,12),i.fill()}),i.fillStyle="#d7dae2",Ot(i,e/2-110,t-34,220,10,5),i.fill()})}var Op=[{id:"shared",label:"shared \xB7 KMP",x:.5,y:.54,main:!0},{id:"android",label:"Android",x:.2,y:.33,color:"#3fcf8e"},{id:"ios",label:"iOS",x:.8,y:.33,color:"#e8eaef"},{id:"desktop",label:"Desktop",x:.17,y:.8,color:"#a97bff"},{id:"web",label:"Web",x:.83,y:.8,color:"#f0b35a"},{id:"ai",label:"AI agents",x:.5,y:.2,color:"#ff7eb6"},{id:"ci",label:"CI/CD",x:.5,y:.9,color:"#3d9bff"}];function Y_(){return Bu(1480,1050,(i,e,t,{links:n})=>{i.fillStyle=Ve.bg,i.fillRect(0,0,e,t),i.fillStyle="rgba(255,255,255,0.05)";for(let a=30;a<e;a+=40)for(let l=120;l<t;l+=40)i.fillRect(a,l,2,2);Mt(i,26,650),i.fillStyle=Ve.ink,i.fillText("Architecture",48,70),Mt(i,20,400),i.fillStyle=Ve.muted,i.fillText("compose-graph \xB7 one shared core",230,70),i.fillStyle="rgba(63,207,142,0.14)",Ot(i,e-150,42,102,40,20),i.fill(),i.fillStyle=Ve.green,i.beginPath(),i.arc(e-124,62,6,0,Math.PI*2),i.fill(),Mt(i,18,700),i.fillText("LIVE",e-108,69);let r=Op[0],s=r.x*e,o=r.y*t;Op.slice(1).forEach((a,l)=>{let c=Math.min(1,Math.max(0,n*1.4-l*.08));if(c<=0)return;let h=a.x*e,d=a.y*t,u=i.createLinearGradient(s,o,h,d);u.addColorStop(0,"rgba(61,155,255,0.9)"),u.addColorStop(1,a.color),i.strokeStyle=u,i.lineWidth=4,i.beginPath(),i.moveTo(s,o),i.lineTo(s+(h-s)*c,o+(d-o)*c),i.stroke()}),Op.forEach((a,l)=>{let c=a.x*e,h=a.y*t,d=a.main||n*1.4-(l-1)*.08>=1;Mt(i,a.main?30:24,650);let u=i.measureText(a.label).width+(a.main?84:64),f=a.main?84:64;i.fillStyle=a.main?"#15233d":Ve.panel2,Ot(i,c-u/2,h-f/2,u,f,f/2),i.fill(),i.strokeStyle=a.main?Ve.accent:d?a.color:"rgba(255,255,255,0.12)",i.lineWidth=a.main?3:2,i.stroke(),i.fillStyle=Ve.ink,i.textAlign="center",i.fillText(a.label,c,h+(a.main?10:8)),i.textAlign="left"})})}var Yl=["Code","Test","Review","Deploy","Live"],Tw=["Unit tests","UI tests","Lint & detekt","AI code review"],G_=["$ ./gradlew check","> Task :shared:allTests","> Task :androidApp:lint","BUILD SUCCESSFUL","deploy \u2192 production","release is live \u2713"];function q_(){return Bu(1680,960,(i,e,t,{pipeline:n,pulse:r})=>{i.fillStyle=Ve.bg,i.fillRect(0,0,e,t),Mt(i,30,700),i.fillStyle=Ve.ink,i.fillText("release / production",56,82),i.fillStyle=Ve.panel2,Ot(i,380,52,110,42,21),i.fill(),Mt(i,20,600,Fp),i.fillStyle=Ve.muted,i.fillText("main",408,80);let s=n>=1;i.fillStyle=s?"rgba(63,207,142,0.14)":"rgba(61,155,255,0.14)",Ot(i,e-230,52,174,42,21),i.fill(),Mt(i,19,700),i.fillStyle=s?Ve.green:Ve.accent,i.textAlign="center",i.fillText(s?"PASSED":"RUNNING",e-143,80),i.textAlign="left";let o=230,a=140,l=e-140,c=(l-a)/(Yl.length-1);i.strokeStyle="rgba(255,255,255,0.1)",i.lineWidth=6,i.beginPath(),i.moveTo(a,o),i.lineTo(l,o),i.stroke();let h=Math.min(1,n*1.08);i.strokeStyle=Ve.green,i.beginPath(),i.moveTo(a,o),i.lineTo(a+(l-a)*h,o),i.stroke(),Yl.forEach((f,g)=>{let _=a+g*c,p=h>=g/(Yl.length-1)-1e-6&&(g<Yl.length-1||h>=1),m=!p&&h>=(g-1)/(Yl.length-1);i.fillStyle=p?Ve.green:m?Ve.accent:"#262b36",i.beginPath(),i.arc(_,o,30,0,Math.PI*2),i.fill(),m&&(i.strokeStyle="rgba(61,155,255,0.35)",i.lineWidth=5,i.beginPath(),i.arc(_,o,40+r*8,0,Math.PI*2),i.stroke()),p&&Bp(i,_,o,30,"#07140d"),Mt(i,24,600),i.fillStyle=p||m?Ve.ink:Ve.muted,i.textAlign="center",i.fillText(f,_,o+78),i.textAlign="left"});let d=390;i.fillStyle=Ve.panel,Ot(i,56,d,760,500,28),i.fill(),Mt(i,16,700),i.fillStyle=Ve.faint,i.fillText("CHECKS",92,d+56),Tw.forEach((f,g)=>{let _=d+118+g*90,p=n>.2+g*.12;Mt(i,26,550),i.fillStyle=Ve.ink,i.fillText(f,150,_+9),p?(i.fillStyle="rgba(63,207,142,0.16)",i.beginPath(),i.arc(108,_,20,0,Math.PI*2),i.fill(),Bp(i,108,_,22,Ve.green)):(i.strokeStyle=Ve.faint,i.lineWidth=3,i.beginPath(),i.arc(108,_,13,0,Math.PI*2),i.stroke())}),i.fillStyle="#07090d",Ot(i,856,d,e-912,500,28),i.fill(),Mt(i,16,700),i.fillStyle=Ve.faint,i.fillText("LOG",892,d+56),Mt(i,24,400,Fp);let u=Math.floor(n*G_.length+.001);G_.slice(0,u).forEach((f,g)=>{i.fillStyle=f.startsWith("$")?Ve.ink:f.includes("\u2713")||f.includes("SUCCESS")?Ve.green:Ve.muted,i.fillText(f,892,d+118+g*58)})})}function Z_(i,e,t){let n=-i/2,r=-e/2,s=Math.min(t,i/2,e/2),o=new Xs;return o.moveTo(n+s,r),o.lineTo(n+i-s,r),o.absarc(n+i-s,r+s,s,-Math.PI/2,0,!1),o.lineTo(n+i,r+e-s),o.absarc(n+i-s,r+e-s,s,0,Math.PI/2,!1),o.lineTo(n+s,r+e),o.absarc(n+s,r+e-s,s,Math.PI/2,Math.PI,!1),o.lineTo(n,r+s),o.absarc(n+s,r+s,s,Math.PI,Math.PI*1.5,!1),o}function Qs(i,e,t,n,r){let s=t-r*2,o=new vl(Z_(i-r*2,e-r*2,Math.max(.001,n-r)),{depth:s,bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelOffset:0,bevelSegments:6,curveSegments:18});return o.translate(0,0,-s/2),o}function Yi(i,e,t){let n=new yl(Z_(i,e,t),18),r=n.attributes.position,s=n.attributes.uv;for(let o=0;o<r.count;o+=1)s.setXY(o,r.getX(o)/i+.5,r.getY(o)/e+.5);return s.needsUpdate=!0,n}function ql(i,e){let t=new Cr(i);return t.colorSpace=on,t.anisotropy=e,t}var zp=[{h:.55,keys:[["esc",1.5],...Array.from({length:12},(i,e)=>[`F${e+1}`,1]),["",1,"touch"]]},{h:1,keys:[["`",1],..."1234567890-=".split("").map(i=>[i,1]),["delete",1.5,"mod-r"]]},{h:1,keys:[["tab",1.5,"mod"],..."QWERTYUIOP[]\\".split("").map(i=>[i,1])]},{h:1,keys:[["caps lock",1.8,"mod"],..."ASDFGHJKL;'".split("").map(i=>[i,1]),["return",1.7,"mod-r"]]},{h:1,keys:[["shift",2.3,"mod"],..."ZXCVBNM,./".split("").map(i=>[i,1]),["shift",2.2,"mod-r"]]},{h:1,keys:[["fn",1,"mod"],["control",1,"mod"],["option",1,"mod"],["command",1.25,"mod"],["",5],["command",1.25,"mod"],["option",1,"mod"],["\u25C0",1],["\u25B2\u25BC",1,"updown"],["\u25B6",1]]}];function ww(){let t=()=>{let p=document.createElement("canvas");return p.width=2048,p.height=1444,p},n=t(),r=t(),s=n.getContext("2d"),o=r.getContext("2d");o.fillStyle="#000",o.fillRect(0,0,2048,1444);let a={x:2048*.115,y:1444*.065,w:2048*.77,h:1444*.455};s.fillStyle="rgba(6,7,9,0.6)",Ot(s,a.x-14,a.y-14,a.w+28,a.h+28,22),s.fill();let l=11,c=zp.reduce((p,m)=>p+m.h,0),h=(a.h-l*(zp.length-1))/c,d=a.y,u=(p,m,y,b,x,M,T,A)=>{if(p.fillStyle=A,T==="touch"){p.strokeStyle=A,p.lineWidth=3,p.beginPath(),p.arc(y+x/2,b+M/2,M*.28,0,Math.PI*2),p.stroke();return}if(!m)return;if(T==="updown"){p.font=`600 ${Math.round(M*.22)}px -apple-system, "Segoe UI", Roboto, Arial, sans-serif`,p.textAlign="center",p.fillText("\u25B2",y+x/2,b+M*.36),p.fillText("\u25BC",y+x/2,b+M*.86);return}let v=T&&T.startsWith("mod");p.font=`${v?500:600} ${Math.round(M*(v?.2:m.length>1?.24:.34))}px -apple-system, "Segoe UI", Roboto, Arial, sans-serif`,v?(p.textAlign=T==="mod-r"?"right":"left",p.fillText(m,T==="mod-r"?y+x-14:y+14,b+M-14)):(p.textAlign="center",p.fillText(m,y+x/2,b+M*.62))};zp.forEach(p=>{let m=h*p.h,y=p.keys.reduce((M,[,T])=>M+T,0),b=(a.w-l*(p.keys.length-1))/y,x=a.x;p.keys.forEach(([M,T,A])=>{let v=b*T;A==="updown"?[0,1].forEach(w=>{s.fillStyle="#0e0f11",Ot(s,x,d+(m/2+2)*w,v,m/2-2,8),s.fill()}):(s.fillStyle="#0e0f11",Ot(s,x,d,v,m,10),s.fill(),s.fillStyle="rgba(255,255,255,0.05)",Ot(s,x+3,d+3,v-6,m*.42,8),s.fill()),u(s,M,x,d,v,m,A,"rgba(208,212,220,0.78)"),u(o,M,x,d,v,m,A,"#ffffff"),x+=v+l}),d+=m+l}),s.fillStyle="rgba(0,0,0,0.62)",[2048*.03,2048*.9].forEach(p=>{for(let m=a.y+8;m<a.y+a.h;m+=16)for(let y=p;y<p+2048*.07;y+=16)s.beginPath(),s.arc(y,m,4.6,0,Math.PI*2),s.fill()});let f=2048*.42,g=1444*.34;s.strokeStyle="rgba(0,0,0,0.22)",s.lineWidth=4,Ot(s,(2048-f)/2,1444*.575,f,g,30),s.stroke();let _=s.createRadialGradient(2048/2,1444,0,2048/2,1444,2048*.07);return _.addColorStop(0,"rgba(0,0,0,0.28)"),_.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=_,s.fillRect(2048/2-2048*.08,1444-1444*.05,2048*.16,1444*.05),{albedo:n,glow:r,trackpad:{w:f/2048,h:g/1444,y:.575+g/1444/2}}}function Ew(){let i=document.createElement("canvas");i.width=512,i.height=512;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,512,512);return t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.32,"rgba(255,255,255,0.25)"),t.addColorStop(.42,"rgba(255,255,255,0)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,512,512),i}function Aw(){let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d"),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);return n.addColorStop(0,"rgba(0,0,0,0.62)"),n.addColorStop(.45,"rgba(0,0,0,0.3)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,256,256),e}function Cw(i){return{trackpad:new Rr({color:13619928,metalness:.7,roughness:.2,clearcoat:.6,clearcoatRoughness:.15}),hinge:new Rr({color:1776671,metalness:.9,roughness:.35}),reflection:new Mn({map:i,transparent:!0,opacity:.07,blending:yi,depthWrite:!1,toneMapped:!1}),aluminium:new Rr({color:13619928,metalness:1,roughness:.3,clearcoat:.15,clearcoatRoughness:.4}),titanium:new Rr({color:9079696,metalness:1,roughness:.24,clearcoat:.4,clearcoatRoughness:.2}),glass:new Rr({color:263173,metalness:0,roughness:.06,clearcoat:1,clearcoatRoughness:.03})}}function zu(i,e,t,n,r){let s=ql(i.canvas,r),o=new Mn({map:s,toneMapped:!1,color:new je(0,0,0)});return{mesh:new st(Yi(e,t,n),o),setPower(l){o.color.setScalar(l)},update(l){let c=i.draw(l);return c&&(s.needsUpdate=!0),c}}}function ca(i,e,t,n){let r=new st(new Gi(e,t),new Mn({map:i,transparent:!0,depthWrite:!1,opacity:n,toneMapped:!1}));return r.rotation.x=-Math.PI/2,r.renderOrder=-1,r}function Rw(i,e,t){let l=new zn,c=new st(Qs(3.12,2.2,.085,.14,.028),i.aluminium);c.rotation.x=-Math.PI/2,c.position.y=.085/2,l.add(c);let h=new Qo({map:e.keyboard,emissiveMap:e.keyGlow,emissive:new je(10466520),emissiveIntensity:0,transparent:!0,roughness:.55,metalness:.1,depthWrite:!1}),d=new st(Yi(3.12-.04,2.2-.04,.13),h);d.rotation.x=-Math.PI/2,d.position.y=.085+.0012,l.add(d);let u=new st(Yi((3.12-.04)*e.trackpad.w,(2.2-.04)*e.trackpad.h,.06),i.trackpad);u.rotation.x=-Math.PI/2,u.position.set(0,.085+9e-4,-(2.2-.04)*(.5-e.trackpad.y)),l.add(u);let f=new zn;f.position.set(0,.085,-2.2/2+.02),l.add(f);let g=new st(new Zo(.032,.032,3.12-.62,24),i.hinge);g.rotation.z=Math.PI/2,g.position.set(0,.085-.012,-2.2/2+.035),l.add(g);let _=new st(Qs(3.12,2.16,.05,.14,.018),i.aluminium);_.position.set(0,2.16/2,-.05/2),f.add(_);let p=new st(Yi(3.12-.07,2.16-.07,.11),i.glass);p.position.set(0,2.16/2,.0015),f.add(p);let m=zu(W_(),2.88,1.858,.03,t);m.mesh.position.set(0,2.16/2+.035,.003),f.add(m.mesh);let y=new st(new Gi(.018,.018),new Mn({color:1776930}));y.position.set(0,2.16-.07,.0035),f.add(y);let b=new st(Yi(3.12-.07,2.16-.07,.11),i.reflection);b.position.set(0,2.16/2,.005),f.add(b),l.add(ca(e.shadow,3.12*1.25,2.2*1.3,.75));let x=ca(e.shadow,3.12*1.04,2.2*1.06,.55);return x.position.y=.001,l.add(x),{group:l,screens:[m],setLid(M){f.rotation.x=Math.PI/2-M*(Math.PI/2+.28)},setBacklight(M){h.emissiveIntensity=1.4*M},update({typing:M,caret:T}){return m.update({typing:Math.round(M*240)/240,caret:T})},boxes:{closed:new Sn(new O(-3.12/2,0,-2.2/2),new O(3.12/2,.9,2.2/2)),open:new Sn(new O(-3.12/2,0,-2.2/2-.55),new O(3.12/2,2.16,2.2/2))}}}function Pw(i,e,t){let o=new zn,a=new zn;o.add(a),a.add(new st(Qs(.72,1.47,.078,.118,.02),i.titanium));let l=new st(Yi(.72-.018,1.47-.018,.108),i.glass);l.position.z=.078/2+8e-4,a.add(l);let c=zu(X_(),.672,1.413,.094,t);c.mesh.position.z=.078/2+.0016,a.add(c.mesh);let h=new st(Yi(.72-.018,1.47-.018,.108),i.reflection);h.position.z=.078/2+.0026,a.add(h),[[-1,.33,.1],[-1,.16,.16],[-1,-.02,.16],[1,.22,.24]].forEach(([u,f,g])=>{let _=new st(new ar(.012,g,.03),i.titanium);_.position.set(u*(.72/2+.003),f,0),a.add(_)}),a.rotation.x=-.08;let d=ca(e.shadow,1.1,.7,.42);return d.position.y=-.97,o.add(d),{group:o,screens:[c],update({reveal:u}){return c.update({reveal:Math.round(u*60)/60})},boxes:{main:new Sn(new O(-.72/2,-1.47/2,-.1),new O(.72/2,1.47/2,.1))}}}function Iw(i,e,t){let o=new zn,a=new zn;o.add(a),a.add(new st(Qs(2.47,1.77,.058,.16,.016),i.aluminium));let l=new st(Yi(2.47-.02,1.77-.02,.15),i.glass);l.position.z=.058/2+8e-4,a.add(l);let c=zu(Y_(),2.33,1.653,.085,t);c.mesh.position.z=.058/2+.0016,a.add(c.mesh);let h=new st(Yi(2.47-.02,1.77-.02,.15),i.reflection);h.position.z=.058/2+.0026,a.add(h),a.rotation.x=-.1;let d=ca(e.shadow,3.2,1.2,.38);return d.position.y=-1.14,o.add(d),{group:o,screens:[c],update({links:u}){return c.update({links:Math.round(u*120)/120})},boxes:{main:new Sn(new O(-2.47/2,-1.77/2,-.12),new O(2.47/2,1.77/2,.12))}}}function Lw(i,e,t){let o=new zn,a=new zn;a.position.set(0,2.3,-.05),o.add(a),a.add(new st(Qs(4.1,2.42,.09,.06,.016),i.aluminium));let l=new st(Yi(4.1-.012,2.42-.012,.055),i.glass);l.position.z=.09/2+8e-4,a.add(l);let c=zu(q_(),3.94,2.251,.018,t);c.mesh.position.set(0,0,.09/2+.0016),a.add(c.mesh);let h=new st(Yi(4.1-.012,2.42-.012,.055),i.reflection);h.position.z=.09/2+.0026,a.add(h);let d=new st(Qs(.95,2.34,.045,.03,.01),i.aluminium);d.position.set(0,1.17,-.36),d.rotation.x=.21,o.add(d);let u=new st(Qs(.95,1.3,.03,.09,.01),i.aluminium);u.rotation.x=-Math.PI/2,u.position.set(0,.015,-.32),o.add(u);let f=ca(e.shadow,1.8,1.9,.7);f.position.z=-.32,o.add(f);let g=ca(e.shadow,4.8,1.6,.25);return g.position.z=-.1,o.add(g),{group:o,screens:[c],update({pipeline:_,pulse:p}){return c.update({pipeline:Math.round(_*60)/60,pulse:Math.round(p*8)/8})},boxes:{main:new Sn(new O(-4.1/2,0,-.95),new O(4.1/2,3.52,.1)),checks:new Sn(new O(-1.84,1.34,-.06),new O(-.06,2.51,.06)),stages:new Sn(new O(-1.74,2.65,-.06),new O(1.74,3.06,.06))}}}function J_(i){let e=ww(),t={keyboard:ql(e.albedo,i),keyGlow:ql(e.glow,i),trackpad:e.trackpad,shadow:ql(Aw(),1),sheen:ql(Ew(),1)},n=Cw(t.sheen);return{materials:n,textures:t,setFinish(r){let s=r!=="light";n.aluminium.color.set(s?9080211:13619928),n.trackpad.color.set(s?9409176:13883100),n.aluminium.roughness=s?.34:.3,n.titanium.color.set(s?7632508:9079696)},laptop:Rw(n,t,i),phone:Pw(n,t,i),tablet:Iw(n,t,i),monitor:Lw(n,t,i)}}var Dw={dark:{walls:1776672,floor:1447706,strip:6,back:4.4,key:6.2,rimL:9,rimR:6.5,fill:1.7,rimTint:13623551},light:{walls:14080221,floor:15330030,strip:2.3,back:2,key:2.4,rimL:2.4,rimR:2,fill:1.2,rimTint:15266047}};function js(i,e,t,n=16777215){return new st(new Gi(i,e),new Mn({color:new je(n).multiplyScalar(t),side:vi}))}function Zl(i,e,t,n,r,s){e.position.set(t,n,r),e.lookAt(s),i.add(e)}function Nw(i){let e=Dw[i],t=new Gs,n=new st(new ar(34,18,34),new Mn({color:e.walls,side:An}));n.position.y=7,t.add(n);let r=js(34,34,1,e.floor);r.rotation.x=-Math.PI/2,r.position.y=-1.5,t.add(r);let s=new O(0,1,0);return[-3.2,0,3.2].forEach(o=>{let a=js(.9,15,e.strip);a.position.set(o,13,0),a.rotation.x=Math.PI/2,t.add(a)}),Zl(t,js(15,5,e.back),0,8,-13,s),Zl(t,js(8,5,e.key),9,6,12,s),Zl(t,js(1.2,10,e.rimL,e.rimTint),-12,5,-4,s),Zl(t,js(1.2,10,e.rimR),12,5,-4,s),Zl(t,js(10,3,e.fill),-8,2,11,s),t}function Uw(){let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d"),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,"rgba(255,255,255,0.85)"),n.addColorStop(.35,"rgba(255,255,255,0.32)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,256,256);let r=new Cr(e);return r.colorSpace=on,r}function Ow(){return new Wt({uniforms:{uColor:{value:new je(15922687)},uIntensity:{value:0}},vertexShader:`
      varying vec3 vNormal;
      varying vec3 vView;
      varying float vHeight;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vNormal = normalize(normalMatrix * normal);
        vView = normalize(-mv.xyz);
        vHeight = uv.y;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uColor;
      uniform float uIntensity;
      varying vec3 vNormal;
      varying vec3 vView;
      varying float vHeight;
      void main() {
        float facing = pow(abs(dot(normalize(vNormal), normalize(vView))), 2.2);
        float fall = 0.12 + 0.88 * pow(vHeight, 1.6);
        gl_FragColor = vec4(uColor, facing * fall * uIntensity);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,transparent:!0,depthWrite:!1,blending:yi,side:vi})}function $_(i,e,t){let n=new aa(i),r={},s=y=>{if(!r[y]){let b=Nw(y);r[y]=n.fromScene(b,.025).texture,b.traverse(x=>{x.geometry?.dispose(),x.material?.dispose()})}return r[y]},o=new jo(16777215,1),a=new jo(13163775,1),l=new O(5,8,6),c=new O(-7,4,-6);e.add(o,a);let h=new El(15922687,0,0,.3,.8,2);h.position.set(t.x+.2,7.2,t.z+.4);let d=new hn;d.position.set(t.x,0,t.z),h.target=d,e.add(h,d);let u=7,f=new st(new hl(2.1,u,48,1,!0),Ow());f.position.set(h.position.x,u/2,h.position.z),f.renderOrder=2,e.add(f);let g=new st(new Gi(6,4.6),new Mn({map:Uw(),color:15922687,transparent:!0,opacity:0,depthWrite:!1,blending:yi}));g.rotation.x=-Math.PI/2,g.position.set(t.x,.004,t.z),g.renderOrder=1,e.add(g);let _="dark",p={reveal:1,spot:0,angle:0};function m(){let y=_!=="light",b=y?.3+.7*p.reveal:1,x=y?p.spot*(1-p.reveal):0;e.environmentIntensity=(y?.9:.85)*b,o.intensity=(y?1.3:1.5)*b,a.intensity=(y?1.4:.45)*b,h.intensity=95*x,f.visible=x>.002,f.material.uniforms.uIntensity.value=.12*x,g.visible=x>.002,g.material.opacity=.18*x,e.backgroundIntensity=y?.45+.55*b:1}return{setTheme(y){_=y==="light"?"light":"dark",e.environment=s(_),m()},setReveal(y,b){p.reveal=y,p.spot=b,m()},get state(){return{theme:_,reveal:p.reveal,spot:p.spot,angle:p.angle}},setRotation(y){if(y===p.angle)return;p.angle=y,e.environmentRotation.set(0,y,0);let b=Math.cos(y),x=Math.sin(y);o.position.set(l.x*b+l.z*x,l.y,-l.x*x+l.z*b),a.position.set(c.x*b+c.z*x,c.y,-c.x*x+c.z*b)},dispose(){Object.values(r).forEach(y=>y.dispose()),n.dispose(),g.material.map.dispose()}}}var ha={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Si=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Fw=new os(-1,1,1,-1,0,1),kp=class extends kn{constructor(){super(),this.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new It([0,2,0,0,2,0],2))}},Bw=new kp,ds=class{constructor(e){this._mesh=new st(Bw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Fw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ku=class extends Si{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ir.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ds(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Jl=class extends Si{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},Vu=class extends Si{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Gu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ge);this._width=n.width,this._height=n.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ku(ha),this.copyPass.material.blending=Di,this.timer=new Al}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Jl!==void 0&&(o instanceof Jl?n=!0:o instanceof Vu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var $l={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Hu=class extends Si{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ir.clone($l.uniforms),this.material=new Ko({name:$l.name,uniforms:this.uniforms,vertexShader:$l.vertexShader,fragmentShader:$l.fragmentShader}),this._fsQuad=new ds(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Rl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Pl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Il?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ll?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Nl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Zs?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Dl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Wu=class extends Si{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new je}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}};var K_={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new je(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ua=class i extends Si{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new ge(e.x,e.y):new ge(256,256),this.clearColor=new je(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Jt(s,o,{type:un,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Jt(s,o,{type:un,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Jt(s,o,{type:un,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),o=Math.round(o/2)}let a=K_;this.highPassUniforms=Ir.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ge(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ir.clone(ha.uniforms),this.blendMaterial=new Wt({uniforms:this.copyUniforms,vertexShader:ha.vertexShader,fragmentShader:ha.fragmentShader,premultipliedAlpha:!0,blending:yi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new je,this._oldClearAlpha=1,this._basic=new Mn,this._fsQuad=new ds(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ge(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let r=[],s=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;r.push((o*a+(o+1)*l)/c),s.push(c)}return new Wt({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new ge(.5,.5)},direction:{value:new ge(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ua.BlurDirectionX=new ge(1,0);ua.BlurDirectionY=new ge(0,1);function Vp(i,e,t){let n=new Jt(1,1,{type:un,samples:4}),r=new Gu(i,n);r.addPass(new Wu(e,t));let s=new ua(new ge(1,1),.32,.5,.9);return r.addPass(s),r.addPass(new Hu),{bloom:s,setSize(o,a,l){r.setPixelRatio(l),r.setSize(o,a)},setTheme(o){s.strength=o==="light"?.12:.32,s.threshold=o==="light"?.98:.9},render(){r.render()},dispose(){r.dispose(),n.dispose(),s.dispose()}}}var Kl=new O(0,1,0),Q_={laptop:{position:[-7,0,0],yaw:-.3},phone:{position:[-2.1,.98,.5],yaw:-.3},tablet:{position:[1.9,1.16,.2],yaw:-.3},monitor:{position:[8.8,0,-.9],yaw:-.3}},zw={intro:{device:"laptop",box:"closed",az:.05,el:.55,fill:.9,zone:"intro"},build:{device:"laptop",box:"open",az:-.2,el:.12,fill:.95,zone:"chapter"},ship:{device:"phone",box:"main",az:-.36,el:.04,fill:.86,zone:"chapter"},connect:{device:"tablet",box:"main",az:-.28,el:.07,fill:.93,zone:"chapter"},operate:{device:"monitor",box:"main",az:-.2,el:.05,fill:.95,zone:"chapter"},final:{device:null,az:-.82,el:.2,azTall:-.9,elTall:.26,fill:1,zone:"final"}};function kw(i){return i>=1?{intro:{cx:.42,cy:-.04,hw:.5,hh:.66},chapter:{cx:.4,cy:0,hw:.52,hh:.7},final:{cx:0,cy:-.24,hw:.86,hh:.56},overview:{cx:.3,cy:-.1,hw:.62,hh:.56}}:{intro:{cx:0,cy:.54,hw:.88,hh:.3},chapter:{cx:0,cy:.44,hw:.86,hh:.4},final:{cx:0,cy:-.1,hw:.9,hh:.5},overview:{cx:0,cy:.12,hw:.9,hh:.34}}}var j_={overview:{devices:"all",az:-.82,el:.2,azTall:-.9,elTall:.26,fill:.97,zone:"overview"},kmp:{device:"laptop",box:"open",az:-.3,el:.22,fill:.92,zone:"chapter"},product:{device:"phone",box:"main",az:-.14,el:.04,fill:.84,zone:"chapter"},graph:{device:"tablet",box:"main",az:-.1,el:.06,fill:.92,zone:"chapter"},ai:{device:"monitor",box:"checks",az:-.2,el:.02,fill:.9,zone:"chapter"},delivery:{device:"monitor",box:"stages",az:-.08,el:.05,fill:.96,zone:"chapter"}};function Xu(i,e){let{min:t,max:n}=i,r=[];for(let s of[t.x,n.x])for(let o of[t.y,n.y])for(let a of[t.z,n.z])r.push(new O(s,o,a).applyMatrix4(e));return r}function Vw(i,e,t,n,r,s,o){let a=Math.tan(r/2)*n.hh*o,l=Math.tan(r/2)*s*n.hw*o,c=t.clone().negate(),h=new O().crossVectors(c,Kl).normalize(),d=new O().crossVectors(h,c),u=0;for(let f of i){let g=f.clone().sub(e),_=g.dot(t);u=Math.max(u,_+Math.abs(g.dot(h))/l,_+Math.abs(g.dot(d))/a)}return u}function Gw(i,e,t,n,r,s,o){let a=n,l=null,c=()=>{o.position.copy(e).addScaledVector(t,a),o.lookAt(e),o.updateMatrixWorld();let h=1/0,d=-1/0,u=1/0,f=-1/0;for(let g of i){let _=g.clone().project(o);h=Math.min(h,_.x),d=Math.max(d,_.x),u=Math.min(u,_.y),f=Math.max(f,_.y)}return{cx:(h+d)/2,cy:(u+f)/2,hw:(d-h)/2,hh:(f-u)/2}};for(let h=0;h<6;h+=1){l=c();let d=Math.max(l.hw/(r.hw*s),l.hh/(r.hh*s));if(Math.abs(d-1)<.004)break;a*=d}return l=c(),{distance:a,cx:r.cx-l.cx,cy:r.cy-l.cy}}var Hw={dark:{stops:["#1c1d21","#0c0d0f","#040405"],glow:"rgba(255,255,255,0.045)"},light:{stops:["#ffffff","#f2f3f5","#e3e5e9"],glow:"rgba(0,0,0,0.05)"}};function ex(i,e,t,n,r,s,o,a){i.save(),i.translate(n*e,r*t),i.scale(s*e,o*t);let l=i.createRadialGradient(0,0,0,0,0,1);a.forEach(([c,h])=>l.addColorStop(c,h)),i.fillStyle=l,i.fillRect(-n/s,-r/o,1/s,1/o),i.restore()}function tx(i,e,t){let r=Math.max(256,Math.min(1024,Math.round(512/t)));i.width=512,i.height=r;let s=i.getContext("2d"),o=Hw[e];ex(s,512,r,.58,.26,1.2,.95,[[0,o.stops[0]],[.5,o.stops[1]],[1,o.stops[2]]]),ex(s,512,r,.58,.74,.6,.4,[[0,o.glow],[.7,"rgba(0,0,0,0)"]])}var Ww=(i,e)=>new O(Math.sin(i)*Math.cos(e),Math.sin(e),Math.cos(i)*Math.cos(e));function nx(i,{bloom:e=!1}={}){let t=new Uu({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"});t.outputColorSpace=on,t.toneMapping=Zs,t.setClearColor(0,0);let n=new Gs,r=document.createElement("canvas"),s=new Cr(r);s.colorSpace=on,n.background=s;let o=new vn(28,1,.1,200),a=J_(t.capabilities.getMaxAnisotropy()),l=["laptop","phone","tablet","monitor"];for(let F of l){let{position:C,yaw:Y}=Q_[F],de=a[F].group;de.position.set(...C),de.rotation.y=Y,n.add(de),de.updateMatrixWorld(!0)}let c=$_(t,n,a.laptop.group.position),h=e?Vp(t,n,o):null,d="dark",u=new Mn({color:4037631,transparent:!0,opacity:.9,toneMapped:!1,depthWrite:!1,blending:yi}),f=new O(0,0,.08).applyMatrix4(a.tablet.group.matrixWorld),g=[new O(0,1.2,-1.2).applyMatrix4(a.laptop.group.matrixWorld),new O(0,0,.05).applyMatrix4(a.phone.group.matrixWorld),new O(0,2.3,0).applyMatrix4(a.monitor.group.matrixWorld)].map(F=>{let C=f.clone().lerp(F,.5).add(new O(0,1.1+f.distanceTo(F)*.12,.4)),Y=new Sl(new Ws(f.clone(),C,F),120,.012,8,!1),de=new st(Y,u);return de.visible=!1,n.add(de),de}),_={positions:null,targets:null,zones:[]},p={},m={from:null,to:"overview",finish:null,last:null,fade:0,fadeFrom:0},y={width:1,height:1},b=0,x={position:new O,target:new O,zone:{cx:0,cy:0}};function M(){let F=y.width/y.height,C=F<1;o.fov=C?36:28,o.aspect=F;let Y=o.fov*Math.PI/180,de=kw(F),ae=new vn(o.fov,F,.1,400),Pe=[];for(let oe of l){let Ce=a[oe],me=Ce.boxes.main??Ce.boxes.open;Pe.push(...Xu(me,Ce.group.matrixWorld))}let Ue=oe=>{let Ce=de[oe.zone],me,Re;if(oe.device){let L=a[oe.device];me=Xu(L.boxes[oe.box],L.group.matrixWorld),Re=Q_[oe.device].yaw}else me=Pe,Re=0;let Ne=new Sn().setFromPoints(me).getCenter(new O),j=Ww(Re+(C&&oe.azTall!==void 0?oe.azTall:oe.az),C&&oe.elTall!==void 0?oe.elTall:oe.el),W=Vw(me,Ne,j,Ce,Y,F,oe.fill),Q=Gw(me,Ne,j,W,Ce,oe.fill,ae);return{position:Ne.clone().addScaledVector(j,Q.distance),target:Ne,cx:Q.cx,cy:Q.cy}},Te=[],$=[],ne=[];for(let oe of ld){let Ce=Ue(zw[oe]);Te.push(Ce.position),$.push(Ce.target),ne.push({cx:Ce.cx,cy:Ce.cy})}p=Object.fromEntries(Object.entries(j_).map(([oe,Ce])=>[oe,Ue(Ce)])),_={positions:new Hs(Te,!1,"centripetal"),targets:new Hs($,!1,"centripetal"),zones:ne}}let T=1;function A(F,C,Y){y={width:Math.max(1,F),height:Math.max(1,C)},T=Y,t.setPixelRatio(Y),t.setSize(y.width,y.height,!1),h?.setSize(y.width,y.height,Y),tx(r,d,y.width/y.height),s.needsUpdate=!0,M()}function v(F){m.from=m.last?{...m.last}:null,m.to=F&&p[F]?F:"overview",m.fadeFrom=m.fade}function w(F){m.finish=F,a.setFinish(F??d)}function R(){let F=j_[m.to];if(!F?.device)return null;let C=a[F.device];o.updateMatrixWorld();let Y=Xu(C.boxes[F.box],C.group.matrixWorld).map(Pe=>Pe.project(o)),de=Y.map(Pe=>(Pe.x+1)/2*y.width),ae=Y.map(Pe=>(1-Pe.y)/2*y.height);return{left:Math.min(...de),right:Math.max(...de),top:Math.min(...ae),bottom:Math.max(...ae)}}function N(F){F&&!h?(h=Vp(t,n,o),h.setTheme(d),h.setSize(y.width,y.height,T)):!F&&h&&(h.dispose(),h=null)}function D(F){d=F==="light"?"light":"dark";let C=d==="light";m.finish=null,a.setFinish(d),c.setTheme(d),h?.setTheme(d),tx(r,d,y.width/y.height),s.needsUpdate=!0,t.toneMappingExposure=C?1:1.05,u.color=new je(C?29155:4037631),u.blending=C?ls:yi,u.needsUpdate=!0}function V(F,{intro:C=1,time:Y=0,pointerX:de=0,pointerY:ae=0,exploreT:Pe=1,orbit:Ue=0}={}){let Te=qg(F),$=ud(F),ne=ld.length-1,oe=$/ne;_.positions.getPoint(oe,x.position),_.targets.getPoint(oe,x.target);let Ce=Math.min(ne-1,Math.floor($)),me=$-Ce,Re=_.zones[Ce],Ne=_.zones[Ce+1];x.zone.cx=Re.cx+(Ne.cx-Re.cx)*me,x.zone.cy=Re.cy+(Ne.cy-Re.cy)*me,x.position.lerp(x.target,.045*Zg(F));let j=Wa(F);if(j>0&&p.overview){let Oe=p[m.to]??p.overview,U=m.from??Oe,nt=Os(Pe),Ge={position:U.position.clone().lerp(Oe.position,nt),target:U.target.clone().lerp(Oe.target,nt),cx:U.cx+(Oe.cx-U.cx)*nt,cy:U.cy+(Oe.cy-U.cy)*nt};m.last=Ge;let P=m.to==="overview"?0:1;if(m.fade=m.fadeFrom+(P-m.fadeFrom)*nt,x.position.lerp(Ge.position,j),x.target.lerp(Ge.target,j),x.zone.cx+=(Ge.cx-x.zone.cx)*j,x.zone.cy+=(Ge.cy-x.zone.cy)*j,Ue){let S=x.position.clone().sub(x.target).applyAxisAngle(Kl,Ue*j);x.position.copy(x.target).add(S)}}else m.last=null,m.fade=0,m.fadeFrom=0;let W=1-m.fade*j;u.opacity=.9*W;let Q=x.position.clone().sub(x.target),L=Q.length(),le=1-C;x.position.addScaledVector(Q,.22*le).addScaledVector(Kl,L*.08*le);let Le=Q.clone().negate().normalize(),Fe=new O().crossVectors(Le,Kl).normalize();x.position.addScaledVector(Fe,de*L*.035).addScaledVector(Kl,-ae*L*.02),o.position.copy(x.position),o.lookAt(x.target),o.setViewOffset(y.width,y.height,-x.zone.cx*y.width/2,x.zone.cy*y.height/2,y.width,y.height),c.setReveal(yr(F/.1),C),c.setRotation(Math.round((F*.4+de*.3)*2e3)/2e3),a.laptop.setLid(Te.lid),b=Te.lid,a.laptop.screens[0].setPower(Te.power);let Ee=a.laptop.update({typing:Te.typing,caret:Te.typing>0&&Te.typing<1?Math.floor(Y*2.4)%2===0:!1});return[["phone",2],["tablet",3],["monitor",4]].forEach(([Oe,U])=>{a[Oe].screens[0].setPower(yr(($-(U-.85))/.55))}),a.laptop.setBacklight(d==="light"?0:Te.power),Ee=a.phone.update({reveal:yr(($-1.55)/.45)})||Ee,Ee=a.tablet.update({links:Te.links})||Ee,Ee=a.monitor.update({pipeline:Te.pipeline,pulse:Te.pipeline>0&&Te.pipeline<1?Y*1.4%1:0})||Ee,g.forEach((Oe,U)=>{let nt=Math.min(1,Math.max(0,Te.trails*1.3-U*.15)),Ge=Oe.geometry.parameters.tubularSegments,P=Oe.geometry.parameters.radialSegments;Oe.visible=nt>0&&W>.01,Oe.geometry.setDrawRange(0,Math.floor(nt*Ge)*P*6)}),{rail:$,cue:Te.cue,screensChanged:Ee}}let I=()=>!!h&&d!=="light";function B(){I()?h.render():t.render(n,o)}function X(){o.updateMatrixWorld();let F={};for(let C of l){let Y=a[C],de=C==="laptop"?b>.5?Y.boxes.open:Y.boxes.closed:Y.boxes.main,ae=Xu(de,Y.group.matrixWorld).map(Te=>Te.project(o));if(ae.some(Te=>Te.z>1||Te.z<-1))continue;let Pe=ae.map(Te=>(Te.x+1)/2*y.width),Ue=ae.map(Te=>(1-Te.y)/2*y.height);F[C]={left:Math.min(...Pe),right:Math.max(...Pe),top:Math.min(...Ue),bottom:Math.max(...Ue)}}return F}function G(){let F=n.background;n.background=null,t.render(n,o),n.background=F;let C=t.getContext(),Y=C.drawingBufferWidth,de=C.drawingBufferHeight,ae=new Uint8Array(Y*4),Pe=0;for(let Ue of[.3,.5,.7]){C.readPixels(0,Math.floor(de*Ue),Y,1,C.RGBA,C.UNSIGNED_BYTE,ae);for(let Te=3;Te<ae.length;Te+=4)ae[Te]>8&&(Pe+=1)}return Pe/(Y*3)}function te(){c.dispose(),h?.dispose(),s.dispose(),t.dispose(),n.traverse(F=>{F.geometry?.dispose(),(Array.isArray(F.material)?F.material:F.material?[F.material]:[]).forEach(Y=>{Y.map?.dispose(),Y.dispose()})})}return{renderer:t,camera:o,resize:A,setTheme:D,setBloom:N,selectFeature:v,setFinish:w,featureRect:R,get bloom(){return I()},get light(){return c.state},update:V,render:B,deviceRects:X,coverage:G,dispose:te}}Ai.registerPlugin(ht);var ix=document.querySelector("[data-story]");ix&&Yw(ix);function Xw(){try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}}function rx(){let i=document.documentElement.dataset.theme;return i||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}function Gp(i,e){i.dataset.storyMode=e,e==="static"&&(window.__story={mode:"static"}),i.classList.toggle("story-live",e==="live"),i.classList.toggle("story-static",e==="static"),e!=="live"&&i.classList.remove("story-ready")}function Yw(i){let e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=new URLSearchParams(window.location.search).get("story")==="static",n=null,r=()=>{n?.destroy(),n=null,Gp(i,"static")},s=()=>{if(!n){if(t||e.matches||!Xw()){Gp(i,"static");return}try{n=qw(i,r)}catch(o){console.warn("[story] falling back to static scene",o),r()}}};e.addEventListener("change",()=>e.matches?r():s()),s()}function qw(i,e){let t=i.querySelector(".story-stage"),n=i.querySelector(".story-canvas"),r=Array.from(i.querySelectorAll("[data-story-copy]")),s=Array.from(i.querySelectorAll(".story-rail i")),o=i.querySelector(".story-cue"),a=window.matchMedia("(pointer: coarse)").matches,l=window.matchMedia("(pointer: fine)").matches;Gp(i,"live");let c=nx(n,{bloom:l&&!a}),h=c.bloom;c.setTheme(rx());let u=Math.min(window.devicePixelRatio||1,a?1.5:2),f=!0,g=()=>{let W=t.getBoundingClientRect();c.resize(W.width,W.height,u),f=!0};g();let _=new Wg({lerp:.085,smoothWheel:!0,anchors:!0,autoRaf:!1});_.on("scroll",ht.update);let p=W=>_.raf(W*1e3);Ai.ticker.add(p),Ai.ticker.lagSmoothing(0);let m={p:0,intro:0},y=Ai.to(m,{p:1,ease:"none",scrollTrigger:{trigger:i,start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}}),b=Ai.to(m,{intro:1,duration:2.4,ease:"expo.out",delay:.15}),x=r[0]?Ai.from(r[0].children,{y:26,autoAlpha:0,duration:1.1,ease:"expo.out",stagger:.07,delay:.1,clearProps:"transform,opacity,visibility"}):null,M={x:0,y:0,tx:0,ty:0},T=W=>{W.pointerType==="mouse"&&(M.tx=W.clientX/window.innerWidth*2-1,M.ty=W.clientY/window.innerHeight*2-1)};window.addEventListener("pointermove",T,{passive:!0});let A=!0,v=new IntersectionObserver(W=>{A=W.some(Q=>Q.isIntersecting),f=!0});v.observe(i);let w=new ResizeObserver(g);w.observe(t);let R=()=>{c.setTheme(rx()),f=!0},N=new MutationObserver(R);N.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});let D=window.matchMedia("(prefers-color-scheme: dark)");D.addEventListener("change",R);let V=W=>{W.preventDefault(),e()};n.addEventListener("webglcontextlost",V);let I={p:-1,intro:-1,px:0,py:0,copies:cd.map(()=>-1),tick:-1},B=[],X=0,G=!1;function te(W){r.forEach((L,le)=>{let Le=Math.round(Yg(W,le)*1e3)/1e3;Le!==I.copies[le]&&(I.copies[le]=Le,L.style.opacity=String(Le),L.style.transform=`translate3d(0, ${((1-Le)*18).toFixed(2)}px, 0)`,le===0&&(L.style.visibility=Le<.01?"hidden":"visible"))});let Q=Jg(W);Q!==I.tick&&(I.tick=Q,s.forEach((L,le)=>L.classList.toggle("is-active",le===Q-1)),i.dataset.storyShot=String(Q))}function F(W){if(B.push(W),B.length<45)return;let Q=B.reduce((L,le)=>L+le,0)/B.length;B.length=0,Q>24&&u>1?(u=Math.max(1,Math.round((u-.25)*100)/100),g()):Q>24&&c.bloom&&(c.setBloom(!1),f=!0)}let C=i.querySelector("[data-story-explore]"),Y=Array.from(i.querySelectorAll(".story-feature")),de=Array.from(i.querySelectorAll(".story-swatch")),ae={active:null,t:1,orbit:0,orbitTarget:0,on:!1,shown:-1},Pe=null;function Ue(W){let Q=W&&W!==ae.active?W:null;ae.active=Q,c.selectFeature(Q==="finish"?null:Q),Pe?.kill(),ae.t=0,ae.orbitTarget=0,Pe=Ai.to(ae,{t:1,duration:1.25,ease:"none"}),Y.forEach(L=>{let le=L.dataset.feature===Q;L.classList.toggle("is-open",le),L.querySelector(".story-pill")?.setAttribute("aria-expanded",String(le));let Le=L.querySelector(".story-feature-body");Le&&(Le.hidden=!le)}),i.toggleAttribute("data-feature-open",!!(Q&&Q!=="finish")),f=!0}let Te=W=>{let Q=W.currentTarget.closest(".story-feature");Q&&Ue(Q.dataset.feature)};Y.forEach(W=>W.querySelector(".story-pill")?.addEventListener("click",Te));let $=W=>{let Q=W.currentTarget.dataset.finish;c.setFinish(Q),de.forEach(L=>L.setAttribute("aria-pressed",String(L.dataset.finish===Q))),f=!0};de.forEach(W=>W.addEventListener("click",$));let ne=W=>{W.key==="Escape"&&ae.active&&Ue(null)};document.addEventListener("keydown",ne);let oe={id:null,x:0,start:0},Ce=W=>{!ae.on||W.button>0||(oe.id=W.pointerId,oe.x=W.clientX,oe.start=ae.orbitTarget,n.setPointerCapture?.(W.pointerId))},me=W=>{W.pointerId===oe.id&&(ae.orbitTarget=Math.max(-.7,Math.min(.7,oe.start+(W.clientX-oe.x)*.006)))},Re=W=>{W.pointerId===oe.id&&(oe.id=null)};n.addEventListener("pointerdown",Ce),n.addEventListener("pointermove",me),n.addEventListener("pointerup",Re),n.addEventListener("pointercancel",Re);function Ne(W){let Q=Math.round(Wa(W)*1e3)/1e3;Q!==ae.shown&&(ae.shown=Q,C.style.opacity=String(Q),C.style.visibility=Q<.01?"hidden":"visible",ae.on=Q>.6,i.dataset.explore=ae.on?"on":"off",Q<.5&&ae.active&&Ue(null),Q<.5&&(ae.orbitTarget=0))}let j=(W,Q)=>{if(!A||document.hidden){B.length=0;return}let L=1-Math.exp(-Q/220);M.x+=(M.tx-M.x)*L,M.y+=(M.ty-M.y)*L;let le=Math.abs(M.x-I.px)>1e-4||Math.abs(M.y-I.py)>1e-4;ae.orbit+=(ae.orbitTarget-ae.orbit)*(1-Math.exp(-Q/160)),Math.abs(ae.orbitTarget-ae.orbit)<1e-4&&(ae.orbit=ae.orbitTarget);let Le=ae.t!==I.t||ae.orbit!==I.orbit,Fe=f||m.p!==I.p||m.intro!==I.intro||le||Le;C&&Ne(m.p);let{screensChanged:Ee,cue:Oe}=c.update(m.p,{intro:m.intro,time:W,pointerX:M.x,pointerY:M.y,exploreT:ae.t,orbit:ae.orbit});if(!Fe&&!Ee){B.length=0;return}te(m.p),o&&(o.style.opacity=String(Oe)),c.render(),X+=1,!f&&I.p!==-1&&F(Q),I.p=m.p,I.intro=m.intro,I.px=M.x,I.py=M.y,I.t=ae.t,I.orbit=ae.orbit,f=!1,G||(G=!0,requestAnimationFrame(()=>i.classList.add("story-ready")))};return Ai.ticker.add(j),window.__story={mode:"live",get progress(){return m.p},get dpr(){return u},storyEnd:Eo,get explore(){return Wa(m.p)},get feature(){return ae.active},get flight(){return ae.t},featureRect:()=>{let W=c.featureRect();if(!W)return null;let Q=n.getBoundingClientRect();return{left:W.left+Q.left,right:W.right+Q.left,top:W.top+Q.top,bottom:W.bottom+Q.top}},get bloom(){return c.bloom},bloomAtStart:h,get light(){return c.light},get frames(){return X},rects:()=>c.deviceRects(),coverage:()=>c.coverage()},{destroy(){Ai.ticker.remove(j),Ai.ticker.remove(p),y.scrollTrigger?.kill(),y.kill(),b.kill(),x?.revert(),_.destroy(),v.disconnect(),w.disconnect(),N.disconnect(),D.removeEventListener("change",R),window.removeEventListener("pointermove",T),Pe?.kill(),document.removeEventListener("keydown",ne),Y.forEach(W=>W.querySelector(".story-pill")?.removeEventListener("click",Te)),de.forEach(W=>W.removeEventListener("click",$)),n.removeEventListener("pointerdown",Ce),n.removeEventListener("pointermove",me),n.removeEventListener("pointerup",Re),n.removeEventListener("pointercancel",Re),C&&(C.style.opacity="",C.style.visibility=""),i.removeAttribute("data-feature-open"),delete i.dataset.explore,n.removeEventListener("webglcontextlost",V),r.forEach(W=>{W.style.opacity="",W.style.transform="",W.style.visibility=""}),c.dispose(),window.__story={mode:"static"}}}}
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
