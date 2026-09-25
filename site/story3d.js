var K_=Object.defineProperty;var Q_=(i,e,t)=>e in i?K_(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Xe=(i,e,t)=>Q_(i,typeof e!="symbol"?e+"":e,t);function hr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function qp(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}var ii={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fa={duration:.5,overwrite:!1,delay:0},sf,Mn,Ot,wi=1e8,Ct=1/wi,Zu=Math.PI*2,j_=Zu/4,ex=0,Zp=Math.sqrt,tx=Math.cos,nx=Math.sin,ln=function(e){return typeof e=="string"},Yt=function(e){return typeof e=="function"},fr=function(e){return typeof e=="number"},jl=function(e){return typeof e>"u"},$i=function(e){return typeof e=="object"},ni=function(e){return e!==!1},of=function(){return typeof window<"u"},Wl=function(e){return Yt(e)||ln(e)},Jp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pn=Array.isArray,ix=/random\([^)]+\)/g,rx=/,\s*/g,zp=/(?:-?\.?\d|\.)+/gi,af=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ps=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Vu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,lf=/[+-]=-?[.\d]+/,sx=/[^,'"\[\]\s]+/gi,ox=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,Zi,Ju,cf,li={},Zl={},$p,Kp=function(e){return(Zl=to(e,li))&&In},ec=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},da=function(e,t){return!t&&console.warn(e)},Qp=function(e,t){return e&&(li[e]=t)&&Zl&&(Zl[e]=t)||li},pa=function(){return 0},ax={suppressEvents:!0,isStart:!0,kill:!1},Xl={suppressEvents:!0,kill:!1},lx={suppressEvents:!0},hf={},Nr=[],$u={},jp,ei={},Gu={},kp=30,Yl=[],uf="",ff=function(e){var t=e[0],n,r;if($i(t)||Yt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Yl.length;r--&&!Yl[r].targetTest(t););n=Yl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new gf(e[r],n)))||e.splice(r,1);return e},Ur=function(e){return e._gsap||ff(Ei(e))[0]._gsap},df=function(e,t,n){return(n=e[t])&&Yt(n)?e[t]():jl(n)&&e.getAttribute&&e.getAttribute(t)||n},Xn=function(e,t){return(e=e.split(",")).forEach(t)||e},qt=function(e){return Math.round(e*1e5)/1e5||0},kt=function(e){return Math.round(e*1e7)/1e7||0},ms=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},cx=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Jl=function(){var e=Nr.length,t=Nr.slice(0),n,r;for($u={},Nr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},pf=function(e){return!!(e._initted||e._startAt||e.add)},em=function(e,t,n,r){Nr.length&&!Mn&&Jl(),e.render(t,n,r||!!(Mn&&t<0&&pf(e))),Nr.length&&!Mn&&Jl()},tm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(sx).length<2?t:ln(e)?e.trim():e},nm=function(e){return e},ci=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},hx=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},to=function(e,t){for(var n in t)e[n]=t[n];return e},Vp=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=$i(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},$l=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},ca=function(e){var t=e.parent||Vt,n=e.keyframes?hx(Pn(e.keyframes)):ci;if(ni(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ux=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},im=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},tc=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Or=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},us=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},fx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ku=function(e,t,n,r){return e._startAt&&(Mn?e._startAt.revert(Xl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},dx=function i(e){return!e||e._ts&&i(e.parent)},Gp=function(e){return e._repeat?no(e._tTime,e=e.duration()+e._rDelay)*e:0},no=function(e,t){var n=Math.floor(e=kt(e/t));return e&&n===e?n-1:n},Kl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},nc=function(e){return e._end=kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ct)||0))},ic=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=kt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),nc(e),n._dirty||us(n,e)),e},rm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Kl(e.rawTime(),t),(!t._dur||_a(0,t.totalDuration(),n)-t._tTime>Ct)&&t.render(n,!0)),us(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ct}},Ji=function(e,t,n,r){return t.parent&&Or(t),t._start=kt((fr(n)?n:n||e!==Vt?Ti(e,n,t):e._time)+t._delay),t._end=kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),im(e,t,"_first","_last",e._sort?"_start":0),Qu(t)||(e._recent=t),r||rm(e,t),e._ts<0&&ic(e,e._tTime),e},sm=function(e,t){return(li.ScrollTrigger||ec("scrollTrigger",t))&&li.ScrollTrigger.create(t,e)},om=function(e,t,n,r,s){if(vf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&jp!==ti.frame)return Nr.push(e),e._lazy=[s,r],1},px=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Qu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},mx=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&px(e)&&!(!e._initted&&Qu(e))||(e._ts<0||e._dp._ts<0)&&!Qu(e))?0:1,a=e._rDelay,l=0,c,h,d;if(a&&e._repeat&&(l=_a(0,e._tDur,t),h=no(l,a),e._yoyo&&h&1&&(o=1-o),h!==no(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Mn||r||e._zTime===Ct||!t&&e._zTime){if(!e._initted&&om(e,t,r,n,l))return;for(d=e._zTime,e._zTime=t||(n?Ct:0),n||(n=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Ku(e,t,n,!0),e._onUpdate&&!n&&ai(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ai(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Or(e,1),!n&&!Mn&&(ai(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},gx=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},io=function(e,t,n,r){var s=e._repeat,o=kt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:kt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&ic(e,e._tTime=e._tDur*a),e.parent&&nc(e),n||us(e.parent,e),e},Hp=function(e){return e instanceof Rn?us(e):io(e,e._dur)},_x={_start:0,endTime:pa,totalDuration:pa},Ti=function i(e,t,n){var r=e.labels,s=e._recent||_x,o=e.duration()>=wi?s.endTime(!1):e._dur,a,l,c;return ln(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Pn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ha=function(e,t,n){var r=fr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ni(l.vars.inherit)&&l.parent;o.immediateRender=ni(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Qt(t[0],o,t[s+1])},Fr=function(e,t){return e||e===0?t(e):t},_a=function(e,t,n){return n<e?e:n>t?t:n},bn=function(e,t){return!ln(e)||!(t=ox.exec(e))?"":t[1]},xx=function(e,t,n){return Fr(n,function(r){return _a(e,t,r)})},ju=[].slice,am=function(e,t){return e&&$i(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&$i(e[0]))&&!e.nodeType&&e!==Zi},vx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return ln(r)&&!t||am(r,1)?(s=n).push.apply(s,Ei(r)):n.push(r)})||n},Ei=function(e,t,n){return Ot&&!t&&Ot.selector?Ot.selector(e):ln(e)&&!n&&(Ju||!ro())?ju.call((t||cf).querySelectorAll(e),0):Pn(e)?vx(e,n):am(e)?ju.call(e,0):e?[e]:[]},ef=function(e){return e=Ei(e)[0]||da("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ei(t,n.querySelectorAll?n:n===e?da("Invalid scope")||cf.createElement("div"):e)}},lm=function(e){return e.sort(function(){return .5-Math.random()})},cm=function(e){if(Yt(e))return e;var t=$i(e)?e:{each:e},n=fs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,h=r,d=r;return ln(r)?h=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(h=r[0],d=r[1]),function(u,f,m){var _=(m||t).length,p=o[_],g,S,b,x,M,T,A,v,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,wi])[1],!w){for(A=-wi;A<(A=m[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(p=o[_]=[],g=l?Math.min(w,_)*h-.5:r%w,S=w===wi?0:l?_*d/w-.5:r/w|0,A=0,v=wi,T=0;T<_;T++)b=T%w-g,x=S-(T/w|0),p[T]=M=c?Math.abs(c==="y"?x:b):Zp(b*b+x*x),M>A&&(A=M),M<v&&(v=M);r==="random"&&lm(p),p.max=A-v,p.min=v,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(w>_?_-1:c?c==="y"?_/w:w:Math.max(w,_/w))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=bn(t.amount||t.each)||0,n=n&&_<0?Lx(n):n}return _=(p[u]-p.min)/p.max||0,kt(p.b+(n?n(_):_)*p.v)+p.u}},tf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=kt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(fr(n)?0:bn(n))}},hm=function(e,t){var n=Pn(e),r,s;return!n&&$i(e)&&(r=n=e.radius||wi,e.values?(e=Ei(e.values),(s=!fr(e[0]))&&(r*=r)):e=tf(e.increment)),Fr(t,n?Yt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=wi,h=0,d=e.length,u,f;d--;)s?(u=e[d].x-a,f=e[d].y-l,u=u*u+f*f):u=Math.abs(e[d]-a),u<c&&(c=u,h=d);return h=!r||c<=r?e[h]:o,s||h===o||fr(o)?h:h+bn(o)}:tf(e))},um=function(e,t,n,r){return Fr(Pn(e)?!t:n===!0?!!(n=0):!r,function(){return Pn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},yx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Sx=function(e,t){return function(n){return e(parseFloat(n))+(t||bn(n))}},Mx=function(e,t,n){return dm(e,t,0,1,n)},fm=function(e,t,n){return Fr(n,function(r){return e[~~t(r)]})},bx=function i(e,t,n){var r=t-e;return Pn(e)?fm(e,i(0,e.length),t):Fr(n,function(s){return(r+(s-e)%r)%r+e})},Tx=function i(e,t,n){var r=t-e,s=r*2;return Pn(e)?fm(e,i(0,e.length-1),t):Fr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},so=function(e){return e.replace(ix,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(rx);return um(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},dm=function(e,t,n,r,s){var o=t-e,a=r-n;return Fr(s,function(l){return n+((l-e)/o*a||0)})},wx=function i(e,t,n,r){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=ln(e),a={},l,c,h,d,u;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(Pn(e)&&!Pn(t)){for(h=[],d=e.length,u=d-2,c=1;c<d;c++)h.push(i(e[c-1],e[c]));d--,s=function(m){m*=d;var _=Math.min(u,~~m);return h[_](m-_)},n=t}else r||(e=to(Pn(e)?[]:{},e));if(!h){for(l in t)_f.call(a,e,l,"get",t[l]);s=function(m){return Mf(m,a)||(o?e.p:e)}}}return Fr(n,s)},Wp=function(e,t,n){var r=e.labels,s=wi,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ai=function(e,t,n){var r=e.vars,s=r[t],o=Ot,a=e._ctx,l,c,h;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Nr.length&&Jl(),a&&(Ot=a),h=l?s.apply(c,l):s.call(c),Ot=o,h},aa=function(e){return Or(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Mn),e.progress()<1&&ai(e,"onInterrupt"),e},eo,pm=[],mm=function(e){if(e)if(e=!e.name&&e.default||e,of()||e.headless){var t=e.name,n=Yt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:pa,render:Mf,add:_f,kill:Gx,modifier:Vx,rawVars:0},o={targetTest:0,get:0,getSetter:rc,aliases:{},register:0};if(ro(),e!==r){if(ei[t])return;ci(r,ci($l(e,s),o)),to(r.prototype,to(s,$l(e,o))),ei[r.prop=t]=r,e.targetTest&&(Yl.push(r),hf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Qp(t,r),e.register&&e.register(In,r,Yn)}else pm.push(e)},At=255,la={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},Hu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*At+.5|0},gm=function(e,t,n){var r=e?fr(e)?[e>>16,e>>8&At,e&At]:0:la.black,s,o,a,l,c,h,d,u,f,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),la[e])r=la[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&At,r&At,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&At,e&At]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(zp),!t)l=+r[0]%360/360,c=+r[1]/100,h=+r[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,r.length>3&&(r[3]*=1),r[0]=Hu(l+1/3,s,o),r[1]=Hu(l,s,o),r[2]=Hu(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(af),n&&r.length<4&&(r[3]=1),r}else r=e.match(zp)||la.transparent;r=r.map(Number)}return t&&!m&&(s=r[0]/At,o=r[1]/At,a=r[2]/At,d=Math.max(s,o,a),u=Math.min(s,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(h*100+.5)),n&&r.length<4&&(r[3]=1),r},_m=function(e){var t=[],n=[],r=-1;return e.split(ur).forEach(function(s){var o=s.match(ps)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},Xp=function(e,t,n){var r="",s=(e+r).match(ur),o=t?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return e;if(s=s.map(function(u){return(u=gm(u,t,1))&&o+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=_m(e),l=n.c,l.join(r)!==h.c.join(r)))for(c=e.replace(ur,"1").split(ps),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(ur),d=c.length-1;a<d;a++)r+=c[a]+s[a];return r+c[d]},ur=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in la)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),Ex=/hsl[a]?\(/,mf=function(e){var t=e.join(" "),n;if(ur.lastIndex=0,ur.test(t))return n=Ex.test(t),e[1]=Xp(e[1],n),e[0]=Xp(e[0],n,_m(e[1])),!0},ma,ti=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,h,d,u,f,m=function _(p){var g=i()-r,S=p===!0,b,x,M,T;if((g>e||g<0)&&(n+=g-t),r+=g,M=r-n,b=M-o,(b>0||S)&&(T=++d.frame,u=M-d.time*1e3,d.time=M=M/1e3,o+=b+(b>=s?4:s-b),x=1),S||(l=c(_)),x)for(f=0;f<a.length;f++)a[f](M,u,T,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){$p&&(!Ju&&of()&&(Zi=Ju=window,cf=Zi.document||{},li.gsap=In,(Zi.gsapVersions||(Zi.gsapVersions=[])).push(In.version),Kp(Zl||Zi.GreenSockGlobals||!Zi.gsap&&Zi||{}),pm.forEach(mm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,o-d.time*1e3+1|0)},ma=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ma=0,c=pa},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),o=d.time*1e3+s},add:function(p,g,S){var b=g?function(x,M,T,A){p(x,M,T,A),d.remove(b)}:p;return d.remove(p),a[S?"unshift":"push"](b),ro(),b},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d})(),ro=function(){return!ma&&ti.wake()},_t={},Ax=/^[\d.\-M][\d.\-,\s]/,Cx=/["']/g,Rx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(Cx,"").trim():+c,r=l.substr(a+1).trim();return t},Px=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Ix=function(e){var t=(e+"").split("("),n=_t[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Rx(t[1])]:Px(e).split(",").map(tm)):_t._CE&&Ax.test(e)?_t._CE("",e):n},Lx=function(e){return function(t){return 1-e(1-t)}},fs=function(e,t){return e&&(Yt(e)?e:_t[e]||Ix(e))||t},gs=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return Xn(e,function(a){_t[a]=li[a]=s,_t[o=a.toLowerCase()]=n;for(var l in s)_t[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_t[a+"."+l]=s[l]}),s},xm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Wu=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Zu*(Math.asin(1/r)||0),a=function(h){return h===1?1:r*Math.pow(2,-10*h)*nx((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:xm(a);return s=Zu/s,l.config=function(c,h){return i(e,c,h)},l},Xu=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:xm(n);return r.config=function(s){return i(e,s)},r};Xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;gs(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;gs("Elastic",Wu("in"),Wu("out"),Wu());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};gs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);gs("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});gs("Circ",function(i){return-(Zp(1-i*i)-1)});gs("Sine",function(i){return i===1?1:-tx(i*j_)+1});gs("Back",Xu("in"),Xu("out"),Xu());_t.SteppedEase=_t.steps=li.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-Ct;return function(a){return((r*_a(0,o,a)|0)+s)*n}}};fa.ease=_t["quad.out"];Xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return uf+=i+","+i+"Params,"});var gf=function(e,t){this.id=ex++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:df,this.set=t?t.getSetter:rc},ga=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,io(this,+t.duration,1,1),this.data=t.data,Ot&&(this._ctx=Ot,Ot.data.push(this)),ma||ti.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,io(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(ro(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ic(this,n),!s._dp||s.parent||rm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ji(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ct||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),em(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Gp(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Gp(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?no(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Ct?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Kl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ct?0:this._rts,this.totalTime(_a(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),nc(this),fx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ro(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ct&&(this._tTime-=Ct)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=kt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ji(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ni(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Kl(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=lx);var r=Mn;return Mn=n,pf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Mn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Hp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Hp(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Ti(this,n),ni(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,ni(r)),this._dur||(this._zTime=-Ct),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ct,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Ct)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=Yt(n)?n:nm,l=function(){var h=r.then;r.then=null,s&&s(),Yt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=h),o(a),r.then=h};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){aa(this)},i})();ci(ga.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ct,_prom:0,_ps:!1,_rts:1});var Rn=(function(i){qp(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ni(n.sortChildren),Vt&&Ji(n.parent||Vt,hr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&sm(hr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return ha(0,arguments,this),this},t.from=function(r,s,o){return ha(1,arguments,this),this},t.fromTo=function(r,s,o,a){return ha(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,ca(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Qt(r,s,Ti(this,o),1),this},t.call=function(r,s,o){return Ji(this,Qt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Qt(r,o,Ti(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,h){return o.runBackwards=1,ca(o).immediateRender=ni(o.immediateRender),this.staggerTo(r,s,o,a,l,c,h)},t.staggerFromTo=function(r,s,o,a,l,c,h,d){return a.startAt=o,ca(a).immediateRender=ni(a.immediateRender),this.staggerTo(r,s,a,l,c,h,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=r<=0?0:kt(r),d=this._zTime<0!=r<0&&(this._initted||!c),u,f,m,_,p,g,S,b,x,M,T,A;if(this!==Vt&&h>l&&r>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,r+=this._time-a),u=h,x=this._start,b=this._ts,g=!b,d&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(u=kt(h%p),h===l?(_=this._repeat,u=c):(M=kt(h/p),_=~~M,_&&_===M&&(u=c,_--),u>c&&(u=c)),M=no(this._tTime,p),!a&&this._tTime&&M!==_&&this._tTime-M*p-this._dur<=0&&(M=_),T&&_&1&&(u=c-u,A=1),_!==M&&!this._lock){var v=T&&M&1,w=v===(T&&_&1);if(_<M&&(v=!v),a=v?0:h%c?c:h,this._lock=1,this.render(a||(A?0:kt(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ai(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,M=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=gx(this,kt(a),kt(u)),S&&(h-=u-(u=S._start))),this._tTime=h,this._time=u,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&c&&!s&&!M&&(ai(this,"onStart"),this._tTime!==h))return this;if(u>=a&&r>=0)for(f=this._first;f;){if(m=f._next,(f._act||u>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(r,s,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,o),u!==this._time||!this._ts&&!g){S=0,m&&(h+=this._zTime=-Ct);break}}f=m}else{f=this._last;for(var C=r<0?r:u;f;){if(m=f._prev,(f._act||C<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(r,s,o);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,s,o||Mn&&pf(f)),u!==this._time||!this._ts&&!g){S=0,m&&(h+=this._zTime=C?-Ct:Ct);break}}f=m}}if(S&&!s&&(this.pause(),S.render(u>=a?0:-Ct)._zTime=u>=a?1:-1,this._ts))return this._start=x,nc(this),this.render(r,s,o);this._onUpdate&&!s&&ai(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Or(this,1),!s&&!(r<0&&!a)&&(h||a||!l)&&(ai(this,h===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(fr(s)||(s=Ti(this,s,r)),!(r instanceof ga)){if(Pn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(ln(r))return this.addLabel(r,s);if(Yt(r))r=Qt.delayedCall(0,r);else return this}return this!==r?Ji(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-wi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Qt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return ln(r)?this.removeLabel(r):Yt(r)?this.killTweensOf(r):(r.parent===this&&tc(this,r),r===this._recent&&(this._recent=this._last),us(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=kt(ti.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ti(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Qt.delayedCall(0,s||pa,o);return a.data="isPause",this._hasPause=1,Ji(this,a,Ti(this,r))},t.removePause=function(r){var s=this._first;for(r=Ti(this,r);s;)s._start===r&&s.data==="isPause"&&Or(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Dr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Ei(r),l=this._first,c=fr(s),h;l;)l instanceof Qt?cx(l._targets,a)&&(c?(!Dr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ti(o,r),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,m=Qt.to(o,ci({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ct,onStart:function(){if(o.pause(),!f){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&io(m,p,0,1).render(m._time,!0,!0),f=1}h&&h.apply(m,d||[])}},s));return u?m.render(0):m},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,ci({startAt:{time:Ti(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Wp(this,Ti(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Wp(this,Ti(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ct)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=kt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return us(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),us(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=wi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ji(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=kt(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;io(o,o===Vt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Vt._ts&&(em(Vt,Kl(r,Vt)),jp=ti.frame),ti.frame>=kp){kp+=ii.autoSleep||120;var s=Vt._first;if((!s||!s._ts)&&ii.autoSleep&&ti._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ti.sleep()}}},e})(ga);ci(Rn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Dx=function(e,t,n,r,s,o,a){var l=new Yn(this._pt,e,t,0,1,Sf,null,s),c=0,h=0,d,u,f,m,_,p,g,S;for(l.b=n,l.e=r,n+="",r+="",(g=~r.indexOf("random("))&&(r=so(r)),o&&(S=[n,r],o(S,e,t),n=S[0],r=S[1]),u=n.match(Vu)||[];d=Vu.exec(r);)m=d[0],_=r.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?ms(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},c=Vu.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(lf.test(r)||g)&&(l.e=0),this._pt=l,l},_f=function(e,t,n,r,s,o,a,l,c,h){Yt(r)&&(r=r(s||0,e,o));var d=e[t],u=n!=="get"?n:Yt(d)?c?e[t.indexOf("set")||!Yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Yt(d)?c?Bx:Sm:yf,m;if(ln(r)&&(~r.indexOf("random(")&&(r=so(r)),r.charAt(1)==="="&&(m=ms(u,r)+(bn(u)||0),(m||m===0)&&(r=m))),!h||u!==r||nf)return!isNaN(u*r)&&r!==""?(m=new Yn(this._pt,e,t,+u||0,r-(u||0),typeof d=="boolean"?kx:Mm,0,f),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!d&&!(t in e)&&ec(t,r),Dx.call(this,e,t,u,r,f,l||ii.stringFilter,c))},Nx=function(e,t,n,r,s){if(Yt(e)&&(e=ua(e,s,t,n,r)),!$i(e)||e.style&&e.nodeType||Pn(e)||Jp(e))return ln(e)?ua(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=ua(e[a],s,t,n,r);return o},xf=function(e,t,n,r,s,o){var a,l,c,h;if(ei[e]&&(a=new ei[e]).init(s,a.rawVars?t[e]:Nx(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Yn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==eo))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Dr,nf,vf=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,h=r.runBackwards,d=r.yoyoEase,u=r.keyframes,f=r.autoRevert,m=e._dur,_=e._startAt,p=e._targets,g=e.parent,S=g&&g.data==="nested"?g.vars.targets:p,b=e._overwrite==="auto"&&!sf,x=e.timeline,M=r.easeReverse||d,T,A,v,w,C,D,L,G,P,N,V,B,K;if(x&&(!u||!s)&&(s="none"),e._ease=fs(s,fa.ease),e._rEase=M&&(fs(M)||e._ease),e._from=!x&&!!r.runBackwards,e._from&&(e.ratio=1),!x||u&&!r.stagger){if(G=p[0]?Ur(p[0]).harness:0,B=G&&r[G.prop],T=$l(r,hf),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&m?Xl:ax),_._lazy=0),o){if(Or(e._startAt=Qt.set(p,ci({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&ni(l),startAt:null,delay:0,onUpdate:c&&function(){return ai(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn||!a&&!f)&&e._startAt.revert(Xl),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!_){if(t&&(a=!1),v=ci({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ni(l),immediateRender:a,stagger:0,parent:g},T),B&&(v[G.prop]=B),Or(e._startAt=Qt.set(p,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn?e._startAt.revert(Xl):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Ct,Ct);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&ni(l)||l&&!m,A=0;A<p.length;A++){if(C=p[A],L=C._gsap||ff(p)[A]._gsap,e._ptLookup[A]=N={},$u[L.id]&&Nr.length&&Jl(),V=S===p?A:S.indexOf(C),G&&(P=new G).init(C,B||T,e,V,S)!==!1&&(e._pt=w=new Yn(e._pt,C,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(W){N[W]=w}),P.priority&&(D=1)),!G||B)for(v in T)ei[v]&&(P=xf(v,T,e,V,C,S))?P.priority&&(D=1):N[v]=w=_f.call(e,C,v,"get",T[v],V,S,0,r.stringFilter);e._op&&e._op[A]&&e.kill(C,e._op[A]),b&&e._pt&&(Dr=e,Vt.killTweensOf(C,N,e.globalTime(t)),K=!e.parent,Dr=0),e._pt&&l&&($u[L.id]=1)}D&&bf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,u&&t<=0&&x.render(wi,!0,!0)},Ux=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,u,f;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(h=u[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return nf=1,e.vars[t]="+=0",vf(e,a),nf=0,l?da(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(r||r===0)&&!s?r:h.s+(r||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=qt(n)+bn(d.e)),d.b&&(d.b=h.s+bn(d.b))},Ox=function(e,t){var n=e[0]?Ur(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=to({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Fx=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(Pn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ua=function(e,t,n,r,s){return Yt(e)?e.call(t,n,r,s):ln(e)&&~e.indexOf("random(")?so(e):e},vm=uf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ym={};Xn(vm+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return ym[i]=1});var Qt=(function(i){qp(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:ca(r))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=r.parent||Vt,S=(Pn(n)||Jp(n)?fr(n[0]):"length"in r)?[n]:Ei(n),b,x,M,T,A,v,w,C;if(a._targets=S.length?ff(S):da("GSAP target "+n+" not found. https://gsap.com",!ii.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||u||Wl(c)||Wl(h)){r=a.vars;var D=r.easeReverse||r.yoyoEase;if(b=a.timeline=new Rn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:S}),b.kill(),b.parent=b._dp=hr(a),b._start=0,u||Wl(c)||Wl(h)){if(T=S.length,w=u&&cm(u),$i(u))for(A in u)~vm.indexOf(A)&&(C||(C={}),C[A]=u[A]);for(x=0;x<T;x++)M=$l(r,ym),M.stagger=0,D&&(M.easeReverse=D),C&&to(M,C),v=S[x],M.duration=+ua(c,hr(a),x,v,S),M.delay=(+ua(h,hr(a),x,v,S)||0)-a._delay,!u&&T===1&&M.delay&&(a._delay=h=M.delay,a._start+=h,M.delay=0),b.to(v,M,w?w(x,v,S):0),b._ease=_t.none;b.duration()?c=h=0:a.timeline=0}else if(m){ca(ci(b.vars.defaults,{ease:"none"})),b._ease=fs(m.ease||r.ease||"none");var L=0,G,P,N;if(Pn(m))m.forEach(function(V){return b.to(S,V,">")}),b.duration();else{M={};for(A in m)A==="ease"||A==="easeEach"||Fx(A,m[A],M,m.easeEach);for(A in M)for(G=M[A].sort(function(V,B){return V.t-B.t}),L=0,x=0;x<G.length;x++)P=G[x],N={ease:P.e,duration:(P.t-(x?G[x-1].t:0))/100*c},N[A]=P.v,b.to(S,N,L),L+=N.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return f===!0&&!sf&&(Dr=hr(a),Vt.killTweensOf(S),Dr=0),Ji(g,hr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!m&&a._start===kt(g._time)&&ni(d)&&dx(hr(a))&&g.data!=="nested")&&(a._tTime=-Ct,a.render(Math.max(0,-h)||0)),p&&sm(hr(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,h=r<0,d=r>l-Ct&&!h?l:r<Ct?0:r,u,f,m,_,p,g,S,b;if(!c)mx(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+r,s,o);if(u=kt(d%_),d===l?(m=this._repeat,u=c):(p=kt(d/_),m=~~p,m&&m===p?(u=c,m--):u>c&&(u=c)),g=this._yoyo&&m&1,g&&(u=c-u),p=no(this._tTime,_),u===a&&!o&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(kt(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(om(this,h?r:u,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var x=u<a;if(x!==this._inv){var M=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=M?(x?-1:1)/M:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(u/c);if(this._from&&(this.ratio=S=1-S),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!p&&(ai(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;b&&b.render(r<0?r:b._dur*b._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&Ku(this,r,s,o),ai(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&ai(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Ku(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Or(this,1),!s&&!(h&&!a)&&(d||a||g)&&(ai(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){ma||ti.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||vf(this,c),h=this._ease(c/this._dur),Ux(this,r,s,o,a,h,c,l)?this.resetTo(r,s,o,a,1):(ic(this,0),this.parent||im(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?aa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Dr&&Dr.vars.overwrite!==!0)._first||aa(this),this.parent&&o!==this.timeline.totalDuration()&&io(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Ei(r):a,c=this._ptLookup,h=this._pt,d,u,f,m,_,p,g;if((!s||s==="all")&&ux(a,l))return s==="all"&&(this._pt=0),aa(this);for(d=this._op=this._op||[],s!=="all"&&(ln(s)&&(_={},Xn(s,function(S){return _[S]=1}),s=_),s=Ox(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],s==="all"?(d[g]=s,m=u,f={}):(f=d[g]=d[g]||{},m=s);for(_ in m)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&tc(this,p,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&aa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ha(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return ha(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Vt.killTweensOf(r,s,o)},e})(ga);ci(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xn("staggerTo,staggerFrom,staggerFromTo",function(i){Qt[i]=function(){var e=new Rn,t=ju.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var yf=function(e,t,n){return e[t]=n},Sm=function(e,t,n){return e[t](n)},Bx=function(e,t,n,r){return e[t](r.fp,n)},zx=function(e,t,n){return e.setAttribute(t,n)},rc=function(e,t){return Yt(e[t])?Sm:jl(e[t])&&e.setAttribute?zx:yf},Mm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},kx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Sf=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Mf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Vx=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},Gx=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?tc(this,t,"_pt"):t.dep||(n=1),t=r;return!n},Hx=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},bf=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},Yn=(function(){function i(t,n,r,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Mm,this.d=l||this,this.set=c||yf,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Hx,this.m=n,this.mt=s,this.tween=r},i})();Xn(uf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return hf[i]=1});li.TweenMax=li.TweenLite=Qt;li.TimelineLite=li.TimelineMax=Rn;Vt=new Rn({sortChildren:!1,defaults:fa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ii.stringFilter=mf;var ds=[],ql={},Wx=[],Yp=0,Xx=0,Yu=function(e){return(ql[e]||Wx).map(function(t){return t()})},rf=function(){var e=Date.now(),t=[];e-Yp>2&&(Yu("matchMediaInit"),ds.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Zi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Yu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Yp=e,Yu("matchMedia"))},bm=(function(){function i(t,n){this.selector=n&&ef(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Xx++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Yt(n)&&(s=r,r=n,n=Yt);var o=this,a=function(){var c=Ot,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=ef(s)),Ot=o,d=r.apply(o,arguments),Yt(d)&&o._r.push(d),Ot=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Yt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=Ot;Ot=null,n(this),Ot=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Qt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Rn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=ds.length;o--;)ds[o].id===this.id&&ds.splice(o,1)},e.revert=function(n){this.kill(n||{})},i})(),Yx=(function(){function i(t){this.contexts=[],this.scope=t,Ot&&Ot.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){$i(n)||(n={matches:n});var o=new bm(0,s||this.scope),a=o.conditions={},l,c,h;Ot&&!o.selector&&(o.selector=Ot.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?h=1:(l=Zi.matchMedia(n[c]),l&&(ds.indexOf(o)<0&&ds.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(rf):l.addEventListener("change",rf)));return h&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Ql={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return mm(r)})},timeline:function(e){return new Rn(e)},getTweensOf:function(e,t){return Vt.getTweensOf(e,t)},getProperty:function(e,t,n,r){ln(e)&&(e=Ei(e)[0]);var s=Ur(e||{}).get,o=n?nm:tm;return n==="native"&&(n=""),e&&(t?o((ei[t]&&ei[t].get||s)(e,t,n,r)):function(a,l,c){return o((ei[a]&&ei[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Ei(e),e.length>1){var r=e.map(function(h){return In.quickSetter(h,t,n)}),s=r.length;return function(h){for(var d=s;d--;)r[d](h)}}e=e[0]||{};var o=ei[t],a=Ur(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var d=new o;eo._pt=0,d.init(e,n?h+n:h,eo,0,[e]),d.render(1,d),eo._pt&&Mf(1,eo)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var r,s=In.to(e,ci((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return Vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=fs(e.ease,fa.ease)),Vp(fa,e||{})},config:function(e){return Vp(ii,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ei[a]&&!li[a]&&da(t+" effect requires "+a+" plugin.")}),Gu[t]=function(a,l,c){return n(Ei(a),ci(l||{},s),c)},o&&(Rn.prototype[t]=function(a,l,c){return this.add(Gu[t](a,$i(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){_t[e]=fs(t)},parseEase:function(e,t){return arguments.length?fs(e,t):_t},getById:function(e){return Vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Rn(e),r,s;for(n.smoothChildTiming=ni(e.smoothChildTiming),Vt.remove(n),n._dp=0,n._time=n._tTime=Vt._time,r=Vt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Qt&&r.vars.onComplete===r._targets[0]))&&Ji(n,r,r._start-r._delay),r=s;return Ji(Vt,n,0),n},context:function(e,t){return e?new bm(e,t):Ot},matchMedia:function(e){return new Yx(e)},matchMediaRefresh:function(){return ds.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||rf()},addEventListener:function(e,t){var n=ql[e]||(ql[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ql[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:bx,wrapYoyo:Tx,distribute:cm,random:um,snap:hm,normalize:Mx,getUnit:bn,clamp:xx,splitColor:gm,toArray:Ei,selector:ef,mapRange:dm,pipe:yx,unitize:Sx,interpolate:wx,shuffle:lm},install:Kp,effects:Gu,ticker:ti,updateRoot:Rn.updateRoot,plugins:ei,globalTimeline:Vt,core:{PropTween:Yn,globals:Qp,Tween:Qt,Timeline:Rn,Animation:ga,getCache:Ur,_removeLinkedListItem:tc,reverting:function(){return Mn},context:function(e){return e&&Ot&&(Ot.data.push(e),e._ctx=Ot),Ot},suppressOverwrites:function(e){return sf=e}}};Xn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Ql[i]=Qt[i]});ti.add(Rn.updateRoot);eo=Ql.to({},{duration:0});var qx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Zx=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=qx(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},qu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(ln(s)&&(l={},Xn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Zx(a,s)}}}},In=Ql.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Mn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},qu("roundProps",tf),qu("modifiers"),qu("snap",hm))||Ql;Qt.version=Rn.version=In.version="3.15.0";$p=1;of()&&ro();var Jx=_t.Power0,$x=_t.Power1,Kx=_t.Power2,Qx=_t.Power3,jx=_t.Power4,ev=_t.Linear,tv=_t.Quad,nv=_t.Cubic,iv=_t.Quart,rv=_t.Quint,sv=_t.Strong,ov=_t.Elastic,av=_t.Back,lv=_t.SteppedEase,cv=_t.Bounce,hv=_t.Sine,uv=_t.Expo,fv=_t.Circ;var Tm,Br,ao,Rf,ys,dv,wm,Pf,pv=function(){return typeof window<"u"},pr={},vs=180/Math.PI,lo=Math.PI/180,oo=Math.atan2,Em=1e8,If=/([A-Z])/g,mv=/(left|right|width|margin|padding|x)/i,gv=/[\s,\(]\S/,Ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_v=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},xv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},vv=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},yv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Nm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Um=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Sv=function(e,t,n){return e.style[t]=n},Mv=function(e,t,n){return e.style.setProperty(t,n)},bv=function(e,t,n){return e._gsap[t]=n},Tv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},wv=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Ev=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Gt="transform",ri=Gt+"Origin",Av=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in pr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ki[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=dr(r,a)}):this.tfm[e]=o.x?o[e]:dr(r,e),e===ri&&(this.tfm.zOrigin=o.zOrigin);else return Ki.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Gt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ri,t,"")),e=Gt}(s||t)&&this.props.push(e,t,s[e])},Om=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Cv=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(If,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Pf(),(!s||!s.isStart)&&!n[Gt]&&(Om(n),r.zOrigin&&n[ri]&&(n[ri]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Fm=function(e,t){var n={target:e,props:[],revert:Cv,save:Av};return e._gsap||In.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Bm,Ef=function(e,t){var n=Br.createElementNS?Br.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Br.createElement(e);return n&&n.style?n:Br.createElement(e)},hi=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(If,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,co(t)||t,1)||""},Am="O,Moz,ms,Ms,Webkit".split(","),co=function(e,t,n){var r=t||ys,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Am[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Am[o]:"")+e},Af=function(){pv()&&window.document&&(Tm=window,Br=Tm.document,ao=Br.documentElement,ys=Ef("div")||{style:{}},dv=Ef("div"),Gt=co(Gt),ri=Gt+"Origin",ys.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Bm=!!co("perspective"),Pf=In.core.reverting,Rf=1)},Cm=function(e){var t=e.ownerSVGElement,n=Ef("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),ao.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),ao.removeChild(n),s},Rm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},zm=function(e){var t,n;try{t=e.getBBox()}catch{t=Cm(e),n=1}return t&&(t.width||t.height)||n||(t=Cm(e)),t&&!t.width&&!t.x&&!t.y?{x:+Rm(e,["x","cx","x1"])||0,y:+Rm(e,["y","cy","y1"])||0,width:0,height:0}:t},km=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&zm(e))},kr=function(e,t){if(t){var n=e.style,r;t in pr&&t!==ri&&(t=Gt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(If,"-$1").toLowerCase())):n.removeAttribute(t)}},zr=function(e,t,n,r,s,o){var a=new Yn(e._pt,t,n,0,1,o?Um:Nm);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Pm={deg:1,rad:1,turn:1},Rv={grid:1,flex:1},Vr=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ys.style,l=mv.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=r==="px",f=r==="%",m,_,p,g;if(r===o||!s||Pm[r]||Pm[o])return s;if(o!=="px"&&!u&&(s=i(e,t,n,"px")),g=e.getCTM&&km(e),(f||o==="%")&&(pr[t]||~t.indexOf("adius")))return m=g?e.getBBox()[l?"width":"height"]:e[h],qt(f?s/m*d:s/100*m);if(a[l?"width":"height"]=d+(u?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Br||!_.appendChild)&&(_=Br.body),p=_._gsap,p&&f&&p.width&&l&&p.time===ti.time&&!p.uncache)return qt(s/p.width*d);if(f&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=d+r,m=e[h],S?e.style[t]=S:kr(e,t)}else(f||o==="%")&&!Rv[hi(_,"display")]&&(a.position=hi(e,"position")),_===e&&(a.position="static"),_.appendChild(ys),m=ys[h],_.removeChild(ys),a.position="absolute";return l&&f&&(p=Ur(_),p.time=ti.time,p.width=_[h]),qt(u?m*s/d:m&&s?d/m*s:0)},dr=function(e,t,n,r){var s;return Rf||Af(),t in Ki&&t!=="transform"&&(t=Ki[t],~t.indexOf(",")&&(t=t.split(",")[0])),pr[t]&&t!=="transform"?(s=ya(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:oc(hi(e,ri))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=sc[t]&&sc[t](e,t,n)||hi(e,t)||df(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Vr(e,t,s,n)+n:s},Pv=function(e,t,n,r){if(!n||n==="none"){var s=co(t,e,1),o=s&&hi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=hi(e,"borderTopColor"))}var a=new Yn(this._pt,e.style,t,0,1,Sf),l=0,c=0,h,d,u,f,m,_,p,g,S,b,x,M;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=hi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=hi(e,t)||r,_?e.style[t]=_:kr(e,t)),h=[n,r],mf(h),n=h[0],r=h[1],u=n.match(ps)||[],M=r.match(ps)||[],M.length){for(;d=ps.exec(r);)p=d[0],S=r.substring(l,d.index),m?m=(m+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(m=1),p!==(_=u[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),p.charAt(1)==="="&&(p=ms(f,p)+x),g=parseFloat(p),b=p.substr((g+"").length),l=ps.lastIndex-b.length,b||(b=b||ii.units[t]||x,l===r.length&&(r+=b,a.e+=b)),x!==b&&(f=Vr(e,t,_,b)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:f,c:g-f,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Um:Nm;return lf.test(r)&&(a.e=0),this._pt=a,a},Im={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Iv=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Im[n]||n,t[1]=Im[r]||r,t.join(" ")},Lv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],pr[a]&&(l=1,a=a==="transformOrigin"?ri:Gt),kr(n,a);l&&(kr(n,Gt),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ya(n,1),o.uncache=1,Om(r)))}},sc={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Yn(e._pt,t,n,0,0,Lv);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},va=[1,0,0,1,0,0],Vm={},Gm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Lm=function(e){var t=hi(e,Gt);return Gm(t)?va:t.substr(7).match(af).map(qt)},Lf=function(e,t){var n=e._gsap||Ur(e),r=e.style,s=Lm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?va:s):(s===va&&!e.offsetParent&&e!==ao&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ao.appendChild(e)),s=Lm(e),l?r.display=l:kr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ao.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Cf=function(e,t,n,r,s,o){var a=e._gsap,l=s||Lf(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],m=l[1],_=l[2],p=l[3],g=l[4],S=l[5],b=t.split(" "),x=parseFloat(b[0])||0,M=parseFloat(b[1])||0,T,A,v,w;n?l!==va&&(A=f*p-m*_)&&(v=x*(p/A)+M*(-_/A)+(_*S-p*g)/A,w=x*(-m/A)+M*(f/A)-(f*S-m*g)/A,x=v,M=w):(T=zm(e),x=T.x+(~b[0].indexOf("%")?x/100*T.width:x),M=T.y+(~(b[1]||b[0]).indexOf("%")?M/100*T.height:M)),r||r!==!1&&a.smooth?(g=x-c,S=M-h,a.xOffset=d+(g*f+S*_)-g,a.yOffset=u+(g*m+S*p)-S):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=M,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[ri]="0px 0px",o&&(zr(o,a,"xOrigin",c,x),zr(o,a,"yOrigin",h,M),zr(o,a,"xOffset",d,a.xOffset),zr(o,a,"yOffset",u,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+M)},ya=function(e,t){var n=e._gsap||new gf(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=hi(e,ri)||"0",h,d,u,f,m,_,p,g,S,b,x,M,T,A,v,w,C,D,L,G,P,N,V,B,K,W,R,X,ge,de,ye,Pe;return h=d=u=_=p=g=S=b=x=0,f=m=1,n.svg=!!(e.getCTM&&km(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Gt]!=="none"?l[Gt]:"")),r.scale=r.rotate=r.translate="none"),A=Lf(e,n.svg),n.svg&&(n.uncache?(K=e.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),Cf(e,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,T=n.yOrigin||0,A!==va&&(D=A[0],L=A[1],G=A[2],P=A[3],h=N=A[4],d=V=A[5],A.length===6?(f=Math.sqrt(D*D+L*L),m=Math.sqrt(P*P+G*G),_=D||L?oo(L,D)*vs:0,S=G||P?oo(G,P)*vs+_:0,S&&(m*=Math.abs(Math.cos(S*lo))),n.svg&&(h-=M-(M*D+T*G),d-=T-(M*L+T*P))):(Pe=A[6],de=A[7],R=A[8],X=A[9],ge=A[10],ye=A[11],h=A[12],d=A[13],u=A[14],v=oo(Pe,ge),p=v*vs,v&&(w=Math.cos(-v),C=Math.sin(-v),B=N*w+R*C,K=V*w+X*C,W=Pe*w+ge*C,R=N*-C+R*w,X=V*-C+X*w,ge=Pe*-C+ge*w,ye=de*-C+ye*w,N=B,V=K,Pe=W),v=oo(-G,ge),g=v*vs,v&&(w=Math.cos(-v),C=Math.sin(-v),B=D*w-R*C,K=L*w-X*C,W=G*w-ge*C,ye=P*C+ye*w,D=B,L=K,G=W),v=oo(L,D),_=v*vs,v&&(w=Math.cos(v),C=Math.sin(v),B=D*w+L*C,K=N*w+V*C,L=L*w-D*C,V=V*w-N*C,D=B,N=K),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),f=qt(Math.sqrt(D*D+L*L+G*G)),m=qt(Math.sqrt(V*V+Pe*Pe)),v=oo(N,V),S=Math.abs(v)>2e-4?v*vs:0,x=ye?1/(ye<0?-ye:ye):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Gm(hi(e,Gt)),B&&e.setAttribute("transform",B))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(f*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=qt(f),n.scaleY=qt(m),n.rotation=qt(_)+a,n.rotationX=qt(p)+a,n.rotationY=qt(g)+a,n.skewX=S+a,n.skewY=b+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[ri]=oc(c)),n.xOffset=n.yOffset=0,n.force3D=ii.force3D,n.renderTransform=n.svg?Nv:Bm?Hm:Dv,n.uncache=0,n},oc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Tf=function(e,t,n){var r=bn(t);return qt(parseFloat(t)+parseFloat(Vr(e,"x",n+"px",r)))+r},Dv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Hm(e,t)},_s="0deg",xa="0px",xs=") ",Hm=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,S=n.target,b=n.zOrigin,x="",M=g==="auto"&&e&&e!==1||g===!0;if(b&&(d!==_s||h!==_s)){var T=parseFloat(h)*lo,A=Math.sin(T),v=Math.cos(T),w;T=parseFloat(d)*lo,w=Math.cos(T),o=Tf(S,o,A*w*-b),a=Tf(S,a,-Math.sin(T)*-b),l=Tf(S,l,v*w*-b+b)}p!==xa&&(x+="perspective("+p+xs),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(M||o!==xa||a!==xa||l!==xa)&&(x+=l!==xa||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+xs),c!==_s&&(x+="rotate("+c+xs),h!==_s&&(x+="rotateY("+h+xs),d!==_s&&(x+="rotateX("+d+xs),(u!==_s||f!==_s)&&(x+="skew("+u+", "+f+xs),(m!==1||_!==1)&&(x+="scale("+m+", "+_+xs),S.style[Gt]=x||"translate(0, 0)"},Nv=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,S=n.forceCSS,b=parseFloat(o),x=parseFloat(a),M,T,A,v,w;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=lo,c*=lo,M=Math.cos(l)*d,T=Math.sin(l)*d,A=Math.sin(l-c)*-u,v=Math.cos(l-c)*u,c&&(h*=lo,w=Math.tan(c-h),w=Math.sqrt(1+w*w),A*=w,v*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),M*=w,T*=w)),M=qt(M),T=qt(T),A=qt(A),v=qt(v)):(M=d,v=u,T=A=0),(b&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(b=Vr(f,"x",o,"px"),x=Vr(f,"y",a,"px")),(m||_||p||g)&&(b=qt(b+m-(m*M+_*A)+p),x=qt(x+_-(m*T+_*v)+g)),(r||s)&&(w=f.getBBox(),b=qt(b+r/100*w.width),x=qt(x+s/100*w.height)),w="matrix("+M+","+T+","+A+","+v+","+b+","+x+")",f.setAttribute("transform",w),S&&(f.style[Gt]=w)},Uv=function(e,t,n,r,s){var o=360,a=ln(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?vs:1),c=l-r,h=r+c+"deg",d,u;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Em)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Em)%o-~~(c/o)*o)),e._pt=u=new Yn(e._pt,t,n,r,c,_v),u.e=h,u.u="deg",e._props.push(n),u},Dm=function(e,t){for(var n in t)e[n]=t[n];return e},Ov=function(e,t,n){var r=Dm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,m;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Gt]=t,a=ya(n,1),kr(n,Gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Gt],o[Gt]=t,a=ya(n,1),o[Gt]=c);for(l in pr)c=r[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=bn(c),m=bn(h),d=f!==m?Vr(n,l,c,m):parseFloat(c),u=parseFloat(h),e._pt=new Yn(e._pt,a,l,d,u-d,wf),e._pt.u=m||0,e._props.push(l));Dm(a,r)};Xn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});sc[e>1?"border"+i:i]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(m){return dr(a,m,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(m,_){return f[m]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var Df={name:"css",register:Af,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,d,u,f,m,_,p,g,S,b,x,M,T,A,v,w;Rf||Af(),this.styles=this.styles||Fm(e),v=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(ei[_]&&xf(_,t,n,r,e,s)))){if(f=typeof h,m=sc[_],f==="function"&&(h=h.call(n,r,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=so(h)),m)m(this,e,_,h,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",ur.lastIndex=0,ur.test(c)||(p=bn(c),g=bn(h),g?p!==g&&(c=Vr(e,_,c,g)+g):p&&(h+=p)),this.add(a,"setProperty",c,h,r,s,0,0,_),o.push(_),v.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],ln(c)&&~c.indexOf("random(")&&(c=so(c)),bn(c+"")||c==="auto"||(c+=ii.units[_]||bn(dr(e,_))||""),(c+"").charAt(1)==="="&&(c=dr(e,_))):c=dr(e,_),u=parseFloat(c),S=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),d=parseFloat(h),_ in Ki&&(_==="autoAlpha"&&(u===1&&dr(e,"visibility")==="hidden"&&d&&(u=0),v.push("visibility",0,a.visibility),zr(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Ki[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in pr,b){if(this.styles.save(_),w=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=hi(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=h,h=hi(e,"perspective"),C?e.style.perspective=C:kr(e,"perspective")}d=parseFloat(h)}if(x||(M=e._gsap,M.renderTransform&&!t.parseTransform||ya(e,t.parseTransform),T=t.smoothOrigin!==!1&&M.smooth,x=this._pt=new Yn(this._pt,a,Gt,0,1,M.renderTransform,M,0,-1),x.dep=1),_==="scale")this._pt=new Yn(this._pt,M,"scaleY",M.scaleY,(S?ms(M.scaleY,S+d):d)-M.scaleY||0,wf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(ri,0,a[ri]),h=Iv(h),M.svg?Cf(e,h,0,T,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==M.zOrigin&&zr(this,M,"zOrigin",M.zOrigin,g),zr(this,a,_,oc(c),oc(h)));continue}else if(_==="svgOrigin"){Cf(e,h,1,T,0,this);continue}else if(_ in Vm){Uv(this,M,_,u,S?ms(u,S+h):h);continue}else if(_==="smoothOrigin"){zr(this,M,"smooth",M.smooth,h);continue}else if(_==="force3D"){M[_]=h;continue}else if(_==="transform"){Ov(this,h,e);continue}}else _ in a||(_=co(_)||_);if(b||(d||d===0)&&(u||u===0)&&!gv.test(h)&&_ in a)p=(c+"").substr((u+"").length),d||(d=0),g=bn(h)||(_ in ii.units?ii.units[_]:p),p!==g&&(u=Vr(e,_,c,g)),this._pt=new Yn(this._pt,b?M:a,_,u,(S?ms(u,S+d):d)-u,!b&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?yv:wf),this._pt.u=g||0,b&&w!==h?(this._pt.b=c,this._pt.e=w,this._pt.r=vv):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=xv);else if(_ in a)Pv.call(this,e,_,c,S?S+h:h);else if(_ in e)this.add(e,_,c||e[_],S?S+h:h,r,s);else if(_!=="parseTransform"){ec(_,h);continue}b||(_ in a?v.push(_,0,a[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,c||e[_])),o.push(_)}}A&&bf(this)},render:function(e,t){if(t.tween._time||!Pf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:dr,aliases:Ki,getSetter:function(e,t,n){var r=Ki[t];return r&&r.indexOf(",")<0&&(t=r),t in pr&&t!==ri&&(e._gsap.x||dr(e,"x"))?n&&wm===n?t==="scale"?Tv:bv:(wm=n||{})&&(t==="scale"?wv:Ev):e.style&&!jl(e.style[t])?Sv:~t.indexOf("-")?Mv:rc(e,t)},core:{_removeProperty:kr,_getMatrix:Lf}};In.utils.checkPrefix=co;In.core.getStyleSaver=Fm;(function(i,e,t,n){var r=Xn(i+","+e+","+t,function(s){pr[s]=1});Xn(e,function(s){ii.units[s]="deg",Vm[s]=1}),Ki[r[13]]=i+","+e,Xn(n,function(s){var o=s.split(":");Ki[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){ii.units[i]="px"});In.registerPlugin(Df);var Ni=In.registerPlugin(Df)||In,Yw=Ni.core.Tween;function Wm(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function Fv(i,e,t){return e&&Wm(i.prototype,e),t&&Wm(i,t),i}var Tn,cc,Bv,ui,Gr,Hr,uo,Ym,Ss,fo,qm,mr,Ui,Zm,Jm=function(){return Tn||typeof window<"u"&&(Tn=window.gsap)&&Tn.registerPlugin&&Tn},$m=1,ho=[],at=[],Oi=[],Ma=Date.now,Nf=function(e,t){return t},zv=function(){var e=fo.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,at),r.push.apply(r,Oi),at=n,Oi=r,Nf=function(o,a){return t[o](a)}},_r=function(e,t){return~Oi.indexOf(e)&&Oi[Oi.indexOf(e)+1][t]},ba=function(e){return!!~qm.indexOf(e)},Zn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},qn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},ac="scrollLeft",lc="scrollTop",Uf=function(){return mr&&mr.isPressed||at.cache++},hc=function(e,t){var n=function r(s){if(s||s===0){$m&&(ui.history.scrollRestoration="manual");var o=mr&&mr.isPressed;s=r.v=Math.round(s)||(mr&&mr.iOS?1:0),e(s),r.cacheID=at.cache,o&&Nf("ss",s)}else(t||at.cache!==r.cacheID||Nf("ref"))&&(r.cacheID=at.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Ln={s:ac,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:hc(function(i){return arguments.length?ui.scrollTo(i,nn.sc()):ui.pageXOffset||Gr[ac]||Hr[ac]||uo[ac]||0})},nn={s:lc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ln,sc:hc(function(i){return arguments.length?ui.scrollTo(Ln.sc(),i):ui.pageYOffset||Gr[lc]||Hr[lc]||uo[lc]||0})},Jn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Tn.utils.toArray)(e)[0]||(typeof e=="string"&&Tn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},kv=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},gr=function(e,t){var n=t.s,r=t.sc;ba(e)&&(e=Gr.scrollingElement||Hr);var s=at.indexOf(e),o=r===nn.sc?1:2;!~s&&(s=at.push(e)-1),at[s+o]||Zn(e,"scroll",Uf);var a=at[s+o],l=a||(at[s+o]=hc(_r(e,n),!0)||(ba(e)?r:hc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Tn.getProperty(e,"scrollBehavior")==="smooth"),l},uc=function(e,t,n){var r=e,s=e,o=Ma(),a=o,l=t||50,c=Math.max(500,l*3),h=function(m,_){var p=Ma();_||p-o>l?(s=r,r=m,a=o,o=p):n?r+=m:r=s+(m-s)/(p-a)*(o-a)},d=function(){s=r=n?0:r,a=o=0},u=function(m){var _=a,p=s,g=Ma();return(m||m===0)&&m!==r&&h(m),o===a||g-a>c?0:(r+(n?p:-p))/((n?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},Sa=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Xm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Km=function(){fo=Tn.core.globals().ScrollTrigger,fo&&fo.core&&zv()},Qm=function(e){return Tn=e||Jm(),!cc&&Tn&&typeof document<"u"&&document.body&&(ui=window,Gr=document,Hr=Gr.documentElement,uo=Gr.body,qm=[ui,Gr,Hr,uo],Bv=Tn.utils.clamp,Zm=Tn.core.context||function(){},Ss="onpointerenter"in uo?"pointer":"mouse",Ym=Zt.isTouch=ui.matchMedia&&ui.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ui||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ui=Zt.eventTypes=("ontouchstart"in Hr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Hr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return $m=0},500),cc=1),fo||Km(),cc};Ln.op=nn;at.cache=0;var Zt=(function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){cc||Qm(Tn)||console.warn("Please gsap.registerPlugin(Observer)"),fo||Km();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,S=n.onDrag,b=n.onPress,x=n.onRelease,M=n.onRight,T=n.onLeft,A=n.onUp,v=n.onDown,w=n.onChangeX,C=n.onChangeY,D=n.onChange,L=n.onToggleX,G=n.onToggleY,P=n.onHover,N=n.onHoverEnd,V=n.onMove,B=n.ignoreCheck,K=n.isNormalizer,W=n.onGestureStart,R=n.onGestureEnd,X=n.onWheel,ge=n.onEnable,de=n.onDisable,ye=n.onClick,Pe=n.scrollSpeed,He=n.capture,J=n.allowClicks,ee=n.lockAxis,ue=n.onLockAxis;this.target=a=Jn(a)||Hr,this.vars=n,f&&(f=Tn.utils.toArray(f)),r=r||1e-9,s=s||0,m=m||1,Pe=Pe||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ui.getComputedStyle(uo).lineHeight)||22);var ke,xe,Ae,Le,j,re,ae,U=this,me=0,We=0,Be=n.passive||!h&&n.passive!==!1,Ie=gr(a,Ln),Ke=gr(a,nn),F=Ie(),ht=Ke(),Je=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ui[0]==="pointerdown",I=ba(a),y=a.ownerDocument||Gr,H=[0,0,0],Y=[0,0,0],Q=0,_e=function(){return Q=Ma()},ce=function(oe,Ze){return(U.event=oe)&&f&&kv(oe.target,f)||Ze&&Je&&oe.pointerType!=="touch"||B&&B(oe,Ze)},te=function(){U._vx.reset(),U._vy.reset(),xe.pause(),d&&d(U)},ie=function(){var oe=U.deltaX=Xm(H),Ze=U.deltaY=Xm(Y),le=Math.abs(oe)>=r,$e=Math.abs(Ze)>=r;D&&(le||$e)&&D(U,oe,Ze,H,Y),le&&(M&&U.deltaX>0&&M(U),T&&U.deltaX<0&&T(U),w&&w(U),L&&U.deltaX<0!=me<0&&L(U),me=U.deltaX,H[0]=H[1]=H[2]=0),$e&&(v&&U.deltaY>0&&v(U),A&&U.deltaY<0&&A(U),C&&C(U),G&&U.deltaY<0!=We<0&&G(U),We=U.deltaY,Y[0]=Y[1]=Y[2]=0),(Le||Ae)&&(V&&V(U),Ae&&(p&&Ae===1&&p(U),S&&S(U),Ae=0),Le=!1),re&&!(re=!1)&&ue&&ue(U),j&&(X(U),j=!1),ke=0},Me=function(oe,Ze,le){H[le]+=oe,Y[le]+=Ze,U._vx.update(oe),U._vy.update(Ze),c?ke||(ke=requestAnimationFrame(ie)):ie()},Fe=function(oe,Ze){ee&&!ae&&(U.axis=ae=Math.abs(oe)>Math.abs(Ze)?"x":"y",re=!0),ae!=="y"&&(H[2]+=oe,U._vx.update(oe,!0)),ae!=="x"&&(Y[2]+=Ze,U._vy.update(Ze,!0)),c?ke||(ke=requestAnimationFrame(ie)):ie()},be=function(oe){if(!ce(oe,1)){oe=Sa(oe,h);var Ze=oe.clientX,le=oe.clientY,$e=Ze-U.x,ze=le-U.y,nt=U.isDragging;U.x=Ze,U.y=le,(nt||($e||ze)&&(Math.abs(U.startX-Ze)>=s||Math.abs(U.startY-le)>=s))&&(Ae||(Ae=nt?2:1),nt||(U.isDragging=!0),Fe($e,ze))}},Se=U.onPress=function(he){ce(he,1)||he&&he.button||(U.axis=ae=null,xe.pause(),U.isPressed=!0,he=Sa(he),me=We=0,U.startX=U.x=he.clientX,U.startY=U.y=he.clientY,U._vx.reset(),U._vy.reset(),Zn(K?a:y,Ui[1],be,Be,!0),U.deltaX=U.deltaY=0,b&&b(U))},pe=U.onRelease=function(he){if(!ce(he,1)){qn(K?a:y,Ui[1],be,!0);var oe=!isNaN(U.y-U.startY),Ze=U.isDragging,le=Ze&&(Math.abs(U.x-U.startX)>3||Math.abs(U.y-U.startY)>3),$e=Sa(he);!le&&oe&&(U._vx.reset(),U._vy.reset(),h&&J&&Tn.delayedCall(.08,function(){if(Ma()-Q>300&&!he.defaultPrevented){if(he.target.click)he.target.click();else if(y.createEvent){var ze=y.createEvent("MouseEvents");ze.initMouseEvent("click",!0,!0,ui,1,$e.screenX,$e.screenY,$e.clientX,$e.clientY,!1,!1,!1,!1,0,null),he.target.dispatchEvent(ze)}}})),U.isDragging=U.isGesturing=U.isPressed=!1,d&&Ze&&!K&&xe.restart(!0),Ae&&ie(),g&&Ze&&g(U),x&&x(U,le)}},Ye=function(oe){return oe.touches&&oe.touches.length>1&&(U.isGesturing=!0)&&W(oe,U.isDragging)},Qe=function(){return(U.isGesturing=!1)||R(U)},z=function(oe){if(!ce(oe)){var Ze=Ie(),le=Ke();Me((Ze-F)*Pe,(le-ht)*Pe,1),F=Ze,ht=le,d&&xe.restart(!0)}},ve=function(oe){if(!ce(oe)){oe=Sa(oe,h),X&&(j=!0);var Ze=(oe.deltaMode===1?l:oe.deltaMode===2?ui.innerHeight:1)*m;Me(oe.deltaX*Ze,oe.deltaY*Ze,0),d&&!K&&xe.restart(!0)}},ne=function(oe){if(!ce(oe)){var Ze=oe.clientX,le=oe.clientY,$e=Ze-U.x,ze=le-U.y;U.x=Ze,U.y=le,Le=!0,d&&xe.restart(!0),($e||ze)&&Fe($e,ze)}},Te=function(oe){U.event=oe,P(U)},Ee=function(oe){U.event=oe,N(U)},se=function(oe){return ce(oe)||Sa(oe,h)&&ye(U)};xe=U._dc=Tn.delayedCall(u||.25,te).pause(),U.deltaX=U.deltaY=0,U._vx=uc(0,50,!0),U._vy=uc(0,50,!0),U.scrollX=Ie,U.scrollY=Ke,U.isDragging=U.isGesturing=U.isPressed=!1,Zm(this),U.enable=function(he){return U.isEnabled||(Zn(I?y:a,"scroll",Uf),o.indexOf("scroll")>=0&&Zn(I?y:a,"scroll",z,Be,He),o.indexOf("wheel")>=0&&Zn(a,"wheel",ve,Be,He),(o.indexOf("touch")>=0&&Ym||o.indexOf("pointer")>=0)&&(Zn(a,Ui[0],Se,Be,He),Zn(y,Ui[2],pe),Zn(y,Ui[3],pe),J&&Zn(a,"click",_e,!0,!0),ye&&Zn(a,"click",se),W&&Zn(y,"gesturestart",Ye),R&&Zn(y,"gestureend",Qe),P&&Zn(a,Ss+"enter",Te),N&&Zn(a,Ss+"leave",Ee),V&&Zn(a,Ss+"move",ne)),U.isEnabled=!0,U.isDragging=U.isGesturing=U.isPressed=Le=Ae=!1,U._vx.reset(),U._vy.reset(),F=Ie(),ht=Ke(),he&&he.type&&Se(he),ge&&ge(U)),U},U.disable=function(){U.isEnabled&&(ho.filter(function(he){return he!==U&&ba(he.target)}).length||qn(I?y:a,"scroll",Uf),U.isPressed&&(U._vx.reset(),U._vy.reset(),qn(K?a:y,Ui[1],be,!0)),qn(I?y:a,"scroll",z,He),qn(a,"wheel",ve,He),qn(a,Ui[0],Se,He),qn(y,Ui[2],pe),qn(y,Ui[3],pe),qn(a,"click",_e,!0),qn(a,"click",se),qn(y,"gesturestart",Ye),qn(y,"gestureend",Qe),qn(a,Ss+"enter",Te),qn(a,Ss+"leave",Ee),qn(a,Ss+"move",ne),U.isEnabled=U.isPressed=U.isDragging=!1,de&&de(U))},U.kill=U.revert=function(){U.disable();var he=ho.indexOf(U);he>=0&&ho.splice(he,1),mr===U&&(mr=0)},ho.push(U),K&&ba(a)&&(mr=U),U.enable(_)},Fv(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();Zt.version="3.15.0";Zt.create=function(i){return new Zt(i)};Zt.register=Qm;Zt.getAll=function(){return ho.slice()};Zt.getById=function(i){return ho.filter(function(e){return e.vars.id===i})[0]};Jm()&&Tn.registerPlugin(Zt);var Ue,_o,ft,bt,pi,St,Jf,Ac,Fa,Pa,wa,fc,Dn,Pc,Gf,Kn,jm,eg,xo,gg,Of,_g,$n,Hf,xg,vg,Wr,Wf,$f,vo,Kf,Ia,Xf,Ff,dc=1,Nn=Date.now,Bf=Nn(),Ri=0,Ea=0,tg=function(e,t,n){var r=di(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},ng=function(e,t){return t&&(!di(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Vv=function i(){return Ea&&requestAnimationFrame(i)},ig=function(){return Pc=1},rg=function(){return Pc=0},Qi=function(e){return e},Aa=function(e){return Math.round(e*1e5)/1e5||0},yg=function(){return typeof window<"u"},Sg=function(){return Ue||yg()&&(Ue=window.gsap)&&Ue.registerPlugin&&Ue},As=function(e){return!!~Jf.indexOf(e)},Mg=function(e){return(e==="Height"?Kf:ft["inner"+e])||pi["client"+e]||St["client"+e]},bg=function(e){return _r(e,"getBoundingClientRect")||(As(e)?function(){return Ec.width=ft.innerWidth,Ec.height=Kf,Ec}:function(){return xr(e)})},Gv=function(e,t,n){var r=n.d,s=n.d2,o=n.a;return(o=_r(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?Mg(s):e["client"+s])||0}},Hv=function(e,t){return!t||~Oi.indexOf(e)?bg(e):function(){return Ec}},ji=function(e,t){var n=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+r)&&(o=_r(e,n))?o()-bg(e)()[s]:As(e)?(pi[n]||St[n])-Mg(r):e[n]-e["offset"+r])},pc=function(e,t){for(var n=0;n<xo.length;n+=3)(!t||~t.indexOf(xo[n+1]))&&e(xo[n],xo[n+1],xo[n+2])},di=function(e){return typeof e=="string"},Un=function(e){return typeof e=="function"},Ca=function(e){return typeof e=="number"},Ms=function(e){return typeof e=="object"},Ta=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},po=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},mo=Math.abs,Tg="left",wg="top",Qf="right",jf="bottom",Ts="width",ws="height",La="Right",Da="Left",Na="Top",Ua="Bottom",rn="padding",Ai="margin",So="Width",ed="Height",cn="px",Ci=function(e){return ft.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Wv=function(e){var t=Ci(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},sg=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},xr=function(e,t){var n=t&&Ci(e)[Gf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ue.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},Cc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Eg=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},Xv=function(e){return function(t){return Ue.utils.snap(Eg(e),t)}},td=function(e){var t=Ue.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},Yv=function(e){return function(t,n){return td(Eg(e))(t,n.direction)}},mc=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},_n=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},gn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},gc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},og={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},_c={toggleActions:"play",anticipatePin:0},Rc={top:0,left:0,center:.5,bottom:1,right:1},Mc=function(e,t){if(di(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Rc?Rc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},xc=function(e,t,n,r,s,o,a,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,m=bt.createElement("div"),_=As(n)||_r(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,g=_?St:n.tagName==="IFRAME"?n.contentDocument.body:n,S=e.indexOf("start")!==-1,b=S?c:h,x="border-color:"+b+";font-size:"+d+";color:"+b+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(x+=(r===nn?Qf:jf)+":"+(o+parseFloat(u))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=S,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=x,m.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+r.op.d2],bc(m,0,r,S),m},bc=function(e,t,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+So]=1,s["border"+a+So]=0,s[n.p]=t+"px",Ue.set(e,s)},lt=[],Yf={},Ba,ag=function(){return Nn()-Ri>34&&(Ba||(Ba=requestAnimationFrame(vr)))},go=function(){(!$n||!$n.isPressed||$n.startX>St.clientWidth)&&(at.cache++,$n?Ba||(Ba=requestAnimationFrame(vr)):vr(),Ri||Rs("scrollStart"),Ri=Nn())},zf=function(){vg=ft.innerWidth,xg=ft.innerHeight},Ra=function(e){at.cache++,(e===!0||!Dn&&!_g&&!bt.fullscreenElement&&!bt.webkitFullscreenElement&&(!Hf||vg!==ft.innerWidth||Math.abs(ft.innerHeight-xg)>ft.innerHeight*.25))&&Ac.restart(!0)},Cs={},qv=[],Ag=function i(){return gn(ct,"scrollEnd",i)||bs(!0)},Rs=function(e){return Cs[e]&&Cs[e].map(function(t){return t()})||qv},fi=[],Cg=function(e){for(var t=0;t<fi.length;t+=5)(!e||fi[t+4]&&fi[t+4].query===e)&&(fi[t].style.cssText=fi[t+1],fi[t].getBBox&&fi[t].setAttribute("transform",fi[t+2]||""),fi[t+3].uncache=1)},Rg=function(){return at.forEach(function(e){return Un(e)&&++e.cacheID&&(e.rec=e())})},nd=function(e,t){var n;for(Kn=0;Kn<lt.length;Kn++)n=lt[Kn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ia=!0,t&&Cg(t),t||Rs("revert")},Pg=function(e,t){at.cache++,(t||!Qn)&&at.forEach(function(n){return Un(n)&&n.cacheID++&&(n.rec=0)}),di(e)&&(ft.history.scrollRestoration=$f=e)},Qn,Es=0,lg,Zv=function(){if(lg!==Es){var e=lg=Es;requestAnimationFrame(function(){return e===Es&&bs(!0)})}},Ig=function(){St.appendChild(vo),Kf=!$n&&vo.offsetHeight||ft.innerHeight,St.removeChild(vo)},cg=function(e){return Fa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},bs=function(e,t){if(pi=bt.documentElement,St=bt.body,Jf=[ft,bt,pi,St],Ri&&!e&&!Ia){_n(ct,"scrollEnd",Ag);return}Ig(),Qn=ct.isRefreshing=!0,Ia||Rg();var n=Rs("refreshInit");gg&&ct.sort(),t||nd(),at.forEach(function(r){Un(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),lt.slice(0).forEach(function(r){return r.refresh()}),Ia=!1,lt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Xf=1,cg(!0),lt.forEach(function(r){var s=ji(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),cg(!1),Xf=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),at.forEach(function(r){Un(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Pg($f,1),Ac.pause(),Es++,Qn=2,vr(2),lt.forEach(function(r){return Un(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Qn=ct.isRefreshing=!1,Rs("refresh")},qf=0,Tc=1,Oa,vr=function(e){if(e===2||!Qn&&!Ia){ct.isUpdating=!0,Oa&&Oa.update(0);var t=lt.length,n=Nn(),r=n-Bf>=50,s=t&&lt[0].scroll();if(Tc=qf>s?-1:1,Qn||(qf=s),r&&(Ri&&!Pc&&n-Ri>200&&(Ri=0,Rs("scrollEnd")),wa=Bf,Bf=n),Tc<0){for(Kn=t;Kn-- >0;)lt[Kn]&&lt[Kn].update(0,r);Tc=1}else for(Kn=0;Kn<t;Kn++)lt[Kn]&&lt[Kn].update(0,r);ct.isUpdating=!1}Ba=0},Zf=[Tg,wg,jf,Qf,Ai+Ua,Ai+La,Ai+Na,Ai+Da,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],wc=Zf.concat([Ts,ws,"boxSizing","max"+So,"max"+ed,"position",Ai,rn,rn+Na,rn+La,rn+Ua,rn+Da]),Jv=function(e,t,n){yo(n);var r=e._gsap;if(r.spacerIsNative)yo(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},kf=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=Zf.length,o=t.style,a=e.style,l;s--;)l=Zf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[jf]=a[Qf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ts]=Cc(e,Ln)+cn,o[ws]=Cc(e,nn)+cn,o[rn]=a[Ai]=a[wg]=a[Tg]="0",yo(r),a[Ts]=a["max"+So]=n[Ts],a[ws]=a["max"+ed]=n[ws],a[rn]=n[rn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},$v=/([A-Z])/g,yo=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,o;for((e.t._gsap||Ue.core.getCache(e.t)).uncache=1;r<n;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace($v,"-$1").toLowerCase())}},vc=function(e){for(var t=wc.length,n=e.style,r=[],s=0;s<t;s++)r.push(wc[s],n[wc[s]]);return r.t=e,r},Kv=function(e,t,n){for(var r=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Ec={left:0,top:0},hg=function(e,t,n,r,s,o,a,l,c,h,d,u,f,m){Un(e)&&(e=e(l)),di(e)&&e.substr(0,3)==="max"&&(e=u+(e.charAt(4)==="="?Mc("0"+e.substr(3),n):0));var _=f?f.time():0,p,g,S;if(f&&f.seek(0),isNaN(e)||(e=+e),Ca(e))f&&(e=Ue.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,e)),a&&bc(a,n,r,!0);else{Un(t)&&(t=t(l));var b=(e||"0").split(" "),x,M,T,A;S=Jn(t,l)||St,x=xr(S)||{},(!x||!x.left&&!x.top)&&Ci(S).display==="none"&&(A=S.style.display,S.style.display="block",x=xr(S),A?S.style.display=A:S.style.removeProperty("display")),M=Mc(b[0],x[r.d]),T=Mc(b[1]||"0",n),e=x[r.p]-c[r.p]-h+M+s-T,a&&bc(a,T,r,n-T<20||a._isStart&&T>20),n-=n-T}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var v=e+n,w=o._isStart;p="scroll"+r.d2,bc(o,v,r,w&&v>20||!w&&(d?Math.max(St[p],pi[p]):o.parentNode[p])<=v+1),d&&(c=xr(a),d&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+cn))}return f&&S&&(p=xr(S),f.seek(u),g=xr(S),f._caScrollDist=p[r.p]-g[r.p],e=e/f._caScrollDist*u),f&&f.seek(_),f?e:Math.round(e)},Qv=/(webkit|moz|length|cssText|inset)/i,ug=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===St){e._stOrig=s.cssText,a=Ci(e);for(o in a)!+o&&!Qv.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=e._stOrig;Ue.core.getCache(e).uncache=1,t.appendChild(e)}},Lg=function(e,t,n){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=Math.round(o),r}},yc=function(e,t,n){var r={};r[t.p]="+="+n,Ue.set(e,r)},fg=function(e,t){var n=gr(e,t),r="_scroll"+t.p2,s=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,m={};c=c||n();var _=Lg(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[r]=a,l.inherit=!1,l.modifiers=m,m[r]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){at.cache++,o.tween&&vr()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Ue.to(e,l),u};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},_n(e,"wheel",n.wheelHandler),ct.isTouch&&_n(e,"touchmove",n.wheelHandler),s},ct=(function(){function i(t,n){_o||i.register(Ue)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Wf(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ea){this.update=this.refresh=this.kill=Qi;return}n=sg(di(n)||Ca(n)||n.nodeType?{trigger:n}:n,_c);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,S=s.onSnapComplete,b=s.once,x=s.snap,M=s.pinReparent,T=s.pinSpacer,A=s.containerAnimation,v=s.fastScrollEnd,w=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Ln:nn,D=!d&&d!==0,L=Jn(n.scroller||ft),G=Ue.core.getCache(L),P=As(L),N=("pinType"in n?n.pinType:_r(L,"pinType")||P&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=D&&n.toggleActions.split(" "),K="markers"in n?n.markers:_c.markers,W=P?0:parseFloat(Ci(L)["border"+C.p2+So])||0,R=this,X=n.onRefreshInit&&function(){return n.onRefreshInit(R)},ge=Gv(L,P,C),de=Hv(L,P),ye=0,Pe=0,He=0,J=gr(L,C),ee,ue,ke,xe,Ae,Le,j,re,ae,U,me,We,Be,Ie,Ke,F,ht,Je,I,y,H,Y,Q,_e,ce,te,ie,Me,Fe,be,Se,pe,Ye,Qe,z,ve,ne,Te,Ee;if(R._startClamp=R._endClamp=!1,R._dir=C,p*=45,R.scroller=L,R.scroll=A?A.time.bind(A):J,xe=J(),R.vars=n,r=r||n.animation,"refreshPriority"in n&&(gg=1,n.refreshPriority===-9999&&(Oa=R)),G.tweenScroll=G.tweenScroll||{top:fg(L,nn),left:fg(L,Ln)},R.tweenTo=ee=G.tweenScroll[C.p],R.scrubDuration=function(le){Ye=Ca(le)&&le,Ye?pe?pe.duration(le):pe=Ue.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ye,paused:!0,onComplete:function(){return g&&g(R)}}):(pe&&pe.progress(1).kill(),pe=0)},r&&(r.vars.lazy=!1,r._initted&&!R.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),R.animation=r.pause(),r.scrollTrigger=R,R.scrubDuration(d),be=0,l||(l=r.vars.id)),x&&((!Ms(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in St.style&&Ue.set(P?[St,pi]:L,{scrollBehavior:"auto"}),at.forEach(function(le){return Un(le)&&le.target===(P?bt.scrollingElement||pi:L)&&(le.smooth=!1)}),ke=Un(x.snapTo)?x.snapTo:x.snapTo==="labels"?Xv(r):x.snapTo==="labelsDirectional"?Yv(r):x.directional!==!1?function(le,$e){return td(x.snapTo)(le,Nn()-Pe<500?0:$e.direction)}:Ue.utils.snap(x.snapTo),Qe=x.duration||{min:.1,max:2},Qe=Ms(Qe)?Pa(Qe.min,Qe.max):Pa(Qe,Qe),z=Ue.delayedCall(x.delay||Ye/2||.1,function(){var le=J(),$e=Nn()-Pe<500,ze=ee.tween;if(($e||Math.abs(R.getVelocity())<10)&&!ze&&!Pc&&ye!==le){var nt=(le-Le)/Ie,jt=r&&!D?r.totalProgress():nt,ut=$e?0:(jt-Se)/(Nn()-wa)*1e3||0,Lt=Ue.utils.clamp(-nt,1-nt,mo(ut/2)*ut/.185),pn=nt+(x.inertia===!1?0:Lt),Dt,wt,gt=x,Gn=gt.onStart,Rt=gt.onInterrupt,An=gt.onComplete;if(Dt=ke(pn,R),Ca(Dt)||(Dt=pn),wt=Math.max(0,Math.round(Le+Dt*Ie)),le<=j&&le>=Le&&wt!==le){if(ze&&!ze._initted&&ze.data<=mo(wt-le))return;x.inertia===!1&&(Lt=Dt-nt),ee(wt,{duration:Qe(mo(Math.max(mo(pn-jt),mo(Dt-jt))*.185/ut/.05||0)),ease:x.ease||"power3",data:mo(wt-le),onInterrupt:function(){return z.restart(!0)&&Rt&&po(R,Rt)},onComplete:function(){R.update(),ye=J(),r&&!D&&(pe?pe.resetTo("totalProgress",Dt,r._tTime/r._tDur):r.progress(Dt)),be=Se=r&&!D?r.totalProgress():R.progress,S&&S(R),An&&po(R,An)}},le,Lt*Ie,wt-le-Lt*Ie),Gn&&po(R,Gn,ee.tween)}}else R.isActive&&ye!==le&&z.restart(!0)}).pause()),l&&(Yf[l]=R),u=R.trigger=Jn(u||f!==!0&&f),Ee=u&&u._gsap&&u._gsap.stRevert,Ee&&(Ee=Ee(R)),f=f===!0?u:Jn(f),di(a)&&(a={targets:u,className:a}),f&&(m===!1||m===Ai||(m=!m&&f.parentNode&&f.parentNode.style&&Ci(f.parentNode).display==="flex"?!1:rn),R.pin=f,ue=Ue.core.getCache(f),ue.spacer?Ke=ue.pinState:(T&&(T=Jn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),ue.spacerIsNative=!!T,T&&(ue.spacerState=vc(T))),ue.spacer=Je=T||bt.createElement("div"),Je.classList.add("pin-spacer"),l&&Je.classList.add("pin-spacer-"+l),ue.pinState=Ke=vc(f)),n.force3D!==!1&&Ue.set(f,{force3D:!0}),R.spacer=Je=ue.spacer,Fe=Ci(f),_e=Fe[m+C.os2],y=Ue.getProperty(f),H=Ue.quickSetter(f,C.a,cn),kf(f,Je,Fe),ht=vc(f)),K){We=Ms(K)?sg(K,og):og,U=xc("scroller-start",l,L,C,We,0),me=xc("scroller-end",l,L,C,We,0,U),I=U["offset"+C.op.d2];var se=Jn(_r(L,"content")||L);re=this.markerStart=xc("start",l,se,C,We,I,0,A),ae=this.markerEnd=xc("end",l,se,C,We,I,0,A),A&&(Te=Ue.quickSetter([re,ae],C.a,cn)),!N&&!(Oi.length&&_r(L,"fixedMarkers")===!0)&&(Wv(P?St:L),Ue.set([U,me],{force3D:!0}),te=Ue.quickSetter(U,C.a,cn),Me=Ue.quickSetter(me,C.a,cn))}if(A){var he=A.vars.onUpdate,oe=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){R.update(0,0,1),he&&he.apply(A,oe||[])})}if(R.previous=function(){return lt[lt.indexOf(R)-1]},R.next=function(){return lt[lt.indexOf(R)+1]},R.revert=function(le,$e){if(!$e)return R.kill(!0);var ze=le!==!1||!R.enabled,nt=Dn;ze!==R.isReverted&&(ze&&(ve=Math.max(J(),R.scroll.rec||0),He=R.progress,ne=r&&r.progress()),re&&[re,ae,U,me].forEach(function(jt){return jt.style.display=ze?"none":"block"}),ze&&(Dn=R,R.update(ze)),f&&(!M||!R.isActive)&&(ze?Jv(f,Je,Ke):kf(f,Je,Ci(f),ce)),ze||R.update(ze),Dn=nt,R.isReverted=ze)},R.refresh=function(le,$e,ze,nt){if(!((Dn||!R.enabled)&&!$e)){if(f&&le&&Ri){_n(i,"scrollEnd",Ag);return}!Qn&&X&&X(R),Dn=R,ee.tween&&!ze&&(ee.tween.kill(),ee.tween=0),pe&&pe.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(we){return we.vars.immediateRender&&we.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var jt=ge(),ut=de(),Lt=A?A.duration():ji(L,C),pn=Ie<=.01||!Ie,Dt=0,wt=nt||0,gt=Ms(ze)?ze.end:n.end,Gn=n.endTrigger||u,Rt=Ms(ze)?ze.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),An=R.pinnedContainer=n.pinnedContainer&&Jn(n.pinnedContainer,R),Hn=u&&Math.max(0,lt.indexOf(R))||0,en=Hn,Xt,an,Yi,$s,mn,$t,Mi,Ks,E,k,$,q,Z;for(K&&Ms(ze)&&(q=Ue.getProperty(U,C.p),Z=Ue.getProperty(me,C.p));en-- >0;)$t=lt[en],$t.end||$t.refresh(0,1)||(Dn=R),Mi=$t.pin,Mi&&(Mi===u||Mi===f||Mi===An)&&!$t.isReverted&&(k||(k=[]),k.unshift($t),$t.revert(!0,!0)),$t!==lt[en]&&(Hn--,en--);for(Un(Rt)&&(Rt=Rt(R)),Rt=tg(Rt,"start",R),Le=hg(Rt,u,jt,C,J(),re,U,R,ut,W,N,Lt,A,R._startClamp&&"_startClamp")||(f?-.001:0),Un(gt)&&(gt=gt(R)),di(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(di(Rt)?Rt.split(" ")[0]:"")+gt:(Dt=Mc(gt.substr(2),jt),gt=di(Rt)?Rt:(A?Ue.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,Le):Le)+Dt,Gn=u)),gt=tg(gt,"end",R),j=Math.max(Le,hg(gt||(Gn?"100% 0":Lt),Gn,jt,C,J()+Dt,ae,me,R,ut,W,N,Lt,A,R._endClamp&&"_endClamp"))||-.001,Dt=0,en=Hn;en--;)$t=lt[en]||{},Mi=$t.pin,Mi&&$t.start-$t._pinPush<=Le&&!A&&$t.end>0&&(Xt=$t.end-(R._startClamp?Math.max(0,$t.start):$t.start),(Mi===u&&$t.start-$t._pinPush<Le||Mi===An)&&isNaN(Rt)&&(Dt+=Xt*(1-$t.progress)),Mi===f&&(wt+=Xt));if(Le+=Dt,j+=Dt,R._startClamp&&(R._startClamp+=Dt),R._endClamp&&!Qn&&(R._endClamp=j||-.001,j=Math.min(j,ji(L,C))),Ie=j-Le||(Le-=.01)&&.001,pn&&(He=Ue.utils.clamp(0,1,Ue.utils.normalize(Le,j,ve))),R._pinPush=wt,re&&Dt&&(Xt={},Xt[C.a]="+="+Dt,An&&(Xt[C.p]="-="+J()),Ue.set([re,ae],Xt)),f&&!(Xf&&R.end>=ji(L,C)))Xt=Ci(f),$s=C===nn,Yi=J(),Y=parseFloat(y(C.a))+wt,!Lt&&j>1&&($=(P?bt.scrollingElement||pi:L).style,$={style:$,value:$["overflow"+C.a.toUpperCase()]},P&&Ci(St)["overflow"+C.a.toUpperCase()]!=="scroll"&&($.style["overflow"+C.a.toUpperCase()]="scroll")),kf(f,Je,Xt),ht=vc(f),an=xr(f,!0),Ks=N&&gr(L,$s?Ln:nn)(),m?(ce=[m+C.os2,Ie+wt+cn],ce.t=Je,en=m===rn?Cc(f,C)+Ie+wt:0,en&&(ce.push(C.d,en+cn),Je.style.flexBasis!=="auto"&&(Je.style.flexBasis=en+cn)),yo(ce),An&&lt.forEach(function(we){we.pin===An&&we.vars.pinSpacing!==!1&&(we._subPinOffset=!0)}),N&&J(ve)):(en=Cc(f,C),en&&Je.style.flexBasis!=="auto"&&(Je.style.flexBasis=en+cn)),N&&(mn={top:an.top+($s?Yi-Le:Ks)+cn,left:an.left+($s?Ks:Yi-Le)+cn,boxSizing:"border-box",position:"fixed"},mn[Ts]=mn["max"+So]=Math.ceil(an.width)+cn,mn[ws]=mn["max"+ed]=Math.ceil(an.height)+cn,mn[Ai]=mn[Ai+Na]=mn[Ai+La]=mn[Ai+Ua]=mn[Ai+Da]="0",mn[rn]=Xt[rn],mn[rn+Na]=Xt[rn+Na],mn[rn+La]=Xt[rn+La],mn[rn+Ua]=Xt[rn+Ua],mn[rn+Da]=Xt[rn+Da],F=Kv(Ke,mn,M),Qn&&J(0)),r?(E=r._initted,Of(1),r.render(r.duration(),!0,!0),Q=y(C.a)-Y+Ie+wt,ie=Math.abs(Ie-Q)>1,N&&ie&&F.splice(F.length-2,2),r.render(0,!0,!0),E||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Of(0)):Q=Ie,$&&($.value?$.style["overflow"+C.a.toUpperCase()]=$.value:$.style.removeProperty("overflow-"+C.a));else if(u&&J()&&!A)for(an=u.parentNode;an&&an!==St;)an._pinOffset&&(Le-=an._pinOffset,j-=an._pinOffset),an=an.parentNode;k&&k.forEach(function(we){return we.revert(!1,!0)}),R.start=Le,R.end=j,xe=Ae=Qn?ve:J(),!A&&!Qn&&(xe<ve&&J(ve),R.scroll.rec=0),R.revert(!1,!0),Pe=Nn(),z&&(ye=-1,z.restart(!0)),Dn=0,r&&D&&(r._initted||ne)&&r.progress()!==ne&&r.progress(ne||0,!0).render(r.time(),!0,!0),(pn||He!==R.progress||A||_||r&&!r._initted)&&(r&&!D&&(r._initted||He||r.vars.immediateRender!==!1)&&r.totalProgress(A&&Le<-.001&&!He?Ue.utils.normalize(Le,j,0):He,!0),R.progress=pn||(xe-Le)/Ie===He?0:He),f&&m&&(Je._pinOffset=Math.round(R.progress*Q)),pe&&pe.invalidate(),isNaN(q)||(q-=Ue.getProperty(U,C.p),Z-=Ue.getProperty(me,C.p),yc(U,C,q),yc(re,C,q-(nt||0)),yc(me,C,Z),yc(ae,C,Z-(nt||0))),pn&&!Qn&&R.update(),h&&!Qn&&!Be&&(Be=!0,h(R),Be=!1)}},R.getVelocity=function(){return(J()-Ae)/(Nn()-wa)*1e3||0},R.endAnimation=function(){Ta(R.callbackAnimation),r&&(pe?pe.progress(1):r.paused()?D||Ta(r,R.direction<0,1):Ta(r,r.reversed()))},R.labelToScroll=function(le){return r&&r.labels&&(Le||R.refresh()||Le)+r.labels[le]/r.duration()*Ie||0},R.getTrailing=function(le){var $e=lt.indexOf(R),ze=R.direction>0?lt.slice(0,$e).reverse():lt.slice($e+1);return(di(le)?ze.filter(function(nt){return nt.vars.preventOverlaps===le}):ze).filter(function(nt){return R.direction>0?nt.end<=Le:nt.start>=j})},R.update=function(le,$e,ze){if(!(A&&!ze&&!le)){var nt=Qn===!0?ve:R.scroll(),jt=le?0:(nt-Le)/Ie,ut=jt<0?0:jt>1?1:jt||0,Lt=R.progress,pn,Dt,wt,gt,Gn,Rt,An,Hn;if($e&&(Ae=xe,xe=A?J():nt,x&&(Se=be,be=r&&!D?r.totalProgress():ut)),p&&f&&!Dn&&!dc&&Ri&&(!ut&&Le<nt+(nt-Ae)/(Nn()-wa)*p?ut=1e-4:ut===1&&j>nt+(nt-Ae)/(Nn()-wa)*p&&(ut=.9999)),ut!==Lt&&R.enabled){if(pn=R.isActive=!!ut&&ut<1,Dt=!!Lt&&Lt<1,Rt=pn!==Dt,Gn=Rt||!!ut!=!!Lt,R.direction=ut>Lt?1:-1,R.progress=ut,Gn&&!Dn&&(wt=ut&&!Lt?0:ut===1?1:Lt===1?2:3,D&&(gt=!Rt&&B[wt+1]!=="none"&&B[wt+1]||B[wt],Hn=r&&(gt==="complete"||gt==="reset"||gt in r))),w&&(Rt||Hn)&&(Hn||d||!r)&&(Un(w)?w(R):R.getTrailing(w).forEach(function(Yi){return Yi.endAnimation()})),D||(pe&&!Dn&&!dc?(pe._dp._time-pe._start!==pe._time&&pe.render(pe._dp._time-pe._start),pe.resetTo?pe.resetTo("totalProgress",ut,r._tTime/r._tDur):(pe.vars.totalProgress=ut,pe.invalidate().restart())):r&&r.totalProgress(ut,!!(Dn&&(Pe||le)))),f){if(le&&m&&(Je.style[m+C.os2]=_e),!N)H(Aa(Y+Q*ut));else if(Gn){if(An=!le&&ut>Lt&&j+1>nt&&nt+1>=ji(L,C),M)if(!le&&(pn||An)){var en=xr(f,!0),Xt=nt-Le;ug(f,St,en.top+(C===nn?Xt:0)+cn,en.left+(C===nn?0:Xt)+cn)}else ug(f,Je);yo(pn||An?F:ht),ie&&ut<1&&pn||H(Y+(ut===1&&!An?Q:0))}}x&&!ee.tween&&!Dn&&!dc&&z.restart(!0),a&&(Rt||b&&ut&&(ut<1||!Ff))&&Fa(a.targets).forEach(function(Yi){return Yi.classList[pn||b?"add":"remove"](a.className)}),o&&!D&&!le&&o(R),Gn&&!Dn?(D&&(Hn&&(gt==="complete"?r.pause().totalProgress(1):gt==="reset"?r.restart(!0).pause():gt==="restart"?r.restart(!0):r[gt]()),o&&o(R)),(Rt||!Ff)&&(c&&Rt&&po(R,c),V[wt]&&po(R,V[wt]),b&&(ut===1?R.kill(!1,1):V[wt]=0),Rt||(wt=ut===1?1:3,V[wt]&&po(R,V[wt]))),v&&!pn&&Math.abs(R.getVelocity())>(Ca(v)?v:2500)&&(Ta(R.callbackAnimation),pe?pe.progress(1):Ta(r,gt==="reverse"?1:!ut,1))):D&&o&&!Dn&&o(R)}if(Me){var an=A?nt/A.duration()*(A._caScrollDist||0):nt;te(an+(U._isFlipped?1:0)),Me(an)}Te&&Te(-nt/A.duration()*(A._caScrollDist||0))}},R.enable=function(le,$e){R.enabled||(R.enabled=!0,_n(L,"resize",Ra),P||_n(L,"scroll",go),X&&_n(i,"refreshInit",X),le!==!1&&(R.progress=He=0,xe=Ae=ye=J()),$e!==!1&&R.refresh())},R.getTween=function(le){return le&&ee?ee.tween:pe},R.setPositions=function(le,$e,ze,nt){if(A){var jt=A.scrollTrigger,ut=A.duration(),Lt=jt.end-jt.start;le=jt.start+Lt*le/ut,$e=jt.start+Lt*$e/ut}R.refresh(!1,!1,{start:ng(le,ze&&!!R._startClamp),end:ng($e,ze&&!!R._endClamp)},nt),R.update()},R.adjustPinSpacing=function(le){if(ce&&le){var $e=ce.indexOf(C.d)+1;ce[$e]=parseFloat(ce[$e])+le+cn,ce[1]=parseFloat(ce[1])+le+cn,yo(ce)}},R.disable=function(le,$e){if(le!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,$e||pe&&pe.pause(),ve=0,ue&&(ue.uncache=1),X&&gn(i,"refreshInit",X),z&&(z.pause(),ee.tween&&ee.tween.kill()&&(ee.tween=0)),!P)){for(var ze=lt.length;ze--;)if(lt[ze].scroller===L&&lt[ze]!==R)return;gn(L,"resize",Ra),P||gn(L,"scroll",go)}},R.kill=function(le,$e){R.disable(le,$e),pe&&!$e&&pe.kill(),l&&delete Yf[l];var ze=lt.indexOf(R);ze>=0&&lt.splice(ze,1),ze===Kn&&Tc>0&&Kn--,ze=0,lt.forEach(function(nt){return nt.scroller===R.scroller&&(ze=1)}),ze||Qn||(R.scroll.rec=0),r&&(r.scrollTrigger=null,le&&r.revert({kill:!1}),$e||r.kill()),re&&[re,ae,U,me].forEach(function(nt){return nt.parentNode&&nt.parentNode.removeChild(nt)}),Oa===R&&(Oa=0),f&&(ue&&(ue.uncache=1),ze=0,lt.forEach(function(nt){return nt.pin===f&&ze++}),ze||(ue.spacer=0)),n.onKill&&n.onKill(R)},lt.push(R),R.enable(!1,!1),Ee&&Ee(R),r&&r.add&&!Ie){var Ze=R.update;R.update=function(){R.update=Ze,at.cache++,Le||j||R.refresh()},Ue.delayedCall(.01,R.update),Ie=.01,Le=j=0}else R.refresh();f&&Zv()},i.register=function(n){return _o||(Ue=n||Sg(),yg()&&window.document&&i.enable(),_o=Ea),_o},i.defaults=function(n){if(n)for(var r in n)_c[r]=n[r];return _c},i.disable=function(n,r){Ea=0,lt.forEach(function(o){return o[r?"kill":"disable"](n)}),gn(ft,"wheel",go),gn(bt,"scroll",go),clearInterval(fc),gn(bt,"touchcancel",Qi),gn(St,"touchstart",Qi),mc(gn,bt,"pointerdown,touchstart,mousedown",ig),mc(gn,bt,"pointerup,touchend,mouseup",rg),Ac.kill(),pc(gn);for(var s=0;s<at.length;s+=3)gc(gn,at[s],at[s+1]),gc(gn,at[s],at[s+2])},i.enable=function(){if(ft=window,bt=document,pi=bt.documentElement,St=bt.body,Ue){if(Fa=Ue.utils.toArray,Pa=Ue.utils.clamp,Wf=Ue.core.context||Qi,Of=Ue.core.suppressOverwrites||Qi,$f=ft.history.scrollRestoration||"auto",qf=ft.pageYOffset||0,Ue.core.globals("ScrollTrigger",i),St){Ea=1,vo=document.createElement("div"),vo.style.height="100vh",vo.style.position="absolute",Ig(),Vv(),Zt.register(Ue),i.isTouch=Zt.isTouch,Wr=Zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Hf=Zt.isTouch===1,_n(ft,"wheel",go),Jf=[ft,bt,pi,St],Ue.matchMedia?(i.matchMedia=function(h){var d=Ue.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Ue.addEventListener("matchMediaInit",function(){Rg(),nd()}),Ue.addEventListener("matchMediaRevert",function(){return Cg()}),Ue.addEventListener("matchMedia",function(){bs(0,1),Rs("matchMedia")}),Ue.matchMedia().add("(orientation: portrait)",function(){return zf(),zf})):console.warn("Requires GSAP 3.11.0 or later"),zf(),_n(bt,"scroll",go);var n=St.hasAttribute("style"),r=St.style,s=r.borderTopStyle,o=Ue.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=xr(St),nn.m=Math.round(a.top+nn.sc())||0,Ln.m=Math.round(a.left+Ln.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(St.setAttribute("style",""),St.removeAttribute("style")),fc=setInterval(ag,250),Ue.delayedCall(.5,function(){return dc=0}),_n(bt,"touchcancel",Qi),_n(St,"touchstart",Qi),mc(_n,bt,"pointerdown,touchstart,mousedown",ig),mc(_n,bt,"pointerup,touchend,mouseup",rg),Gf=Ue.utils.checkPrefix("transform"),wc.push(Gf),_o=Nn(),Ac=Ue.delayedCall(.2,bs).pause(),xo=[bt,"visibilitychange",function(){var h=ft.innerWidth,d=ft.innerHeight;bt.hidden?(jm=h,eg=d):(jm!==h||eg!==d)&&Ra()},bt,"DOMContentLoaded",bs,ft,"load",bs,ft,"resize",Ra],pc(_n),lt.forEach(function(h){return h.enable(0,1)}),l=0;l<at.length;l+=3)gc(gn,at[l],at[l+1]),gc(gn,at[l],at[l+2])}else if(bt){var c=function h(){i.enable(),bt.removeEventListener("DOMContentLoaded",h)};bt.addEventListener("DOMContentLoaded",c)}}},i.config=function(n){"limitCallbacks"in n&&(Ff=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(fc)||(fc=r)&&setInterval(ag,r),"ignoreMobileResize"in n&&(Hf=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(pc(gn)||pc(_n,n.autoRefreshEvents||"none"),_g=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Jn(n),o=at.indexOf(s),a=As(s);~o&&at.splice(o,a?6:2),r&&(a?Oi.unshift(ft,r,St,r,pi,r):Oi.unshift(s,r))},i.clearMatchMedia=function(n){lt.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(di(n)?Jn(n):n).getBoundingClientRect(),a=o[s?Ts:ws]*r||0;return s?o.right-a>0&&o.left+a<ft.innerWidth:o.bottom-a>0&&o.top+a<ft.innerHeight},i.positionInViewport=function(n,r,s){di(n)&&(n=Jn(n));var o=n.getBoundingClientRect(),a=o[s?Ts:ws],l=r==null?a/2:r in Rc?Rc[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ft.innerWidth:(o.top+l)/ft.innerHeight},i.killAll=function(n){if(lt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Cs.killAll||[];Cs={},r.forEach(function(s){return s()})}},i})();ct.version="3.15.0";ct.saveStyles=function(i){return i?Fa(i).forEach(function(e){if(e&&e.style){var t=fi.indexOf(e);t>=0&&fi.splice(t,5),fi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ue.core.getCache(e),Wf())}}):fi};ct.revert=function(i,e){return nd(!i,e)};ct.create=function(i,e){return new ct(i,e)};ct.refresh=function(i){return i?Ra(!0):(_o||ct.register())&&bs(!0)};ct.update=function(i){return++at.cache&&vr(i===!0?2:0)};ct.clearScrollMemory=Pg;ct.maxScroll=function(i,e){return ji(i,e?Ln:nn)};ct.getScrollFunc=function(i,e){return gr(Jn(i),e?Ln:nn)};ct.getById=function(i){return Yf[i]};ct.getAll=function(){return lt.filter(function(i){return i.vars.id!=="ScrollSmoother"})};ct.isScrolling=function(){return!!Ri};ct.snapDirectional=td;ct.addEventListener=function(i,e){var t=Cs[i]||(Cs[i]=[]);~t.indexOf(e)||t.push(e)};ct.removeEventListener=function(i,e){var t=Cs[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ct.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Ue.delayedCall(r,function(){h(d,u),d=[],u=[]}).pause();return function(m){d.length||f.restart(!0),d.push(m.trigger),u.push(m),s<=d.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Un(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Un(s)&&(s=s(),_n(ct,"refresh",function(){return s=e.batchMax()})),Fa(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ct.create(c))}),t};var dg=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Vf=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Zt.isTouch?" pinch-zoom":""):"none",e===pi&&i(St,t)},Sc={auto:1,scroll:1},jv=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ue.core.getCache(s),a=Nn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==St&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Sc[(l=Ci(s)).overflowY]||Sc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!As(s)&&(Sc[(l=Ci(s)).overflowY]||Sc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Dg=function(e,t,n,r){return Zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&jv,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&_n(bt,Zt.eventTypes[0],mg,!1,!0)},onDisable:function(){return gn(bt,Zt.eventTypes[0],mg,!0)}})},ey=/(input|label|select|textarea)/i,pg,mg=function(e){var t=ey.test(e.target.tagName);(t||pg)&&(e._gsapAllow=!0,pg=t)},ty=function(e){Ms(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Jn(e.target)||pi,h=Ue.core.globals().ScrollSmoother,d=h&&h.get(),u=Wr&&(e.content&&Jn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=gr(c,nn),m=gr(c,Ln),_=1,p=(Zt.isTouch&&ft.visualViewport?ft.visualViewport.scale*ft.visualViewport.width:ft.outerWidth)/ft.innerWidth,g=0,S=Un(r)?function(){return r(a)}:function(){return r||2.8},b,x,M=Dg(c,e.type,!0,s),T=function(){return x=!1},A=Qi,v=Qi,w=function(){l=ji(c,nn),v=Pa(Wr?1:0,l),n&&(A=Pa(0,ji(c,Ln))),b=Es},C=function(){u._gsap.y=Aa(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(x){requestAnimationFrame(T);var K=Aa(a.deltaY/2),W=v(f.v-K);if(u&&W!==f.v+f.offset){f.offset=W-f.v;var R=Aa((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",f.cacheID=at.cache,vr()}return!0}f.offset&&C(),x=!0},L,G,P,N,V=function(){w(),L.isActive()&&L.vars.scrollY>l&&(f()>l?L.progress(1)&&f(l):L.resetTo("scrollY",l))};return u&&Ue.set(u,{y:"+=0"}),e.ignoreCheck=function(B){return Wr&&B.type==="touchmove"&&D(B)||_>1.05&&B.type!=="touchstart"||a.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){x=!1;var B=_;_=Aa((ft.visualViewport&&ft.visualViewport.scale||1)/p),L.pause(),B!==_&&Vf(c,_>1.01?!0:n?!1:"x"),G=m(),P=f(),w(),b=Es},e.onRelease=e.onGestureStart=function(B,K){if(f.offset&&C(),!K)N.restart(!0);else{at.cache++;var W=S(),R,X;n&&(R=m(),X=R+W*.05*-B.velocityX/.227,W*=dg(m,R,X,ji(c,Ln)),L.vars.scrollX=A(X)),R=f(),X=R+W*.05*-B.velocityY/.227,W*=dg(f,R,X,ji(c,nn)),L.vars.scrollY=v(X),L.invalidate().duration(W).play(.01),(Wr&&L.vars.scrollY>=l||R>=l-1)&&Ue.to({},{onUpdate:V,duration:W})}o&&o(B)},e.onWheel=function(){L._ts&&L.pause(),Nn()-g>1e3&&(b=0,g=Nn())},e.onChange=function(B,K,W,R,X){if(Es!==b&&w(),K&&n&&m(A(R[2]===K?G+(B.startX-B.x):m()+K-R[1])),W){f.offset&&C();var ge=X[2]===W,de=ge?P+B.startY-B.y:f()+W-X[1],ye=v(de);ge&&de!==ye&&(P+=ye-de),f(ye)}(W||K)&&vr()},e.onEnable=function(){Vf(c,n?!1:"x"),ct.addEventListener("refresh",V),_n(ft,"resize",V),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),M.enable()},e.onDisable=function(){Vf(c,!0),gn(ft,"resize",V),ct.removeEventListener("refresh",V),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new Zt(e),a.iOS=Wr,Wr&&!f()&&f(1),Wr&&Ue.ticker.add(Qi),N=a._dc,L=Ue.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Lg(f,f(),function(){return L.pause()})},onUpdate:vr,onComplete:N.vars.onComplete}),a};ct.sort=function(i){if(Un(i))return lt.sort(i);var e=ft.pageYOffset||0;return ct.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ft.innerHeight}),lt.sort(i||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ct.observe=function(i){return new Zt(i)};ct.normalizeScroll=function(i){if(typeof i>"u")return $n;if(i===!0&&$n)return $n.enable();if(i===!1){$n&&$n.kill(),$n=i;return}var e=i instanceof Zt?i:ty(i);return $n&&$n.target===e.target&&$n.kill(),As(e.target)&&($n=e),e};ct.core={_getVelocityProp:uc,_inputObserver:Dg,_scrollers:at,_proxies:Oi,bridge:{ss:function(){Ri||Rs("scrollStart"),Ri=Nn()},ref:function(){return Dn}}};Sg()&&Ue.registerPlugin(ct);var Ng="1.3.26";function Fg(i,e,t){return Math.max(i,Math.min(e,t))}function ny(i,e,t){return(1-t)*i+t*e}function iy(i,e,t,n){return ny(i,e,1-Math.exp(-t*n))}function ry(i,e){return(i%e+e)%e}var sy=class{constructor(){Xe(this,"isRunning",!1);Xe(this,"value",0);Xe(this,"from",0);Xe(this,"to",0);Xe(this,"currentTime",0);Xe(this,"lerp");Xe(this,"duration");Xe(this,"easing");Xe(this,"onUpdate")}advance(i){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;let t=Fg(0,this.currentTime/this.duration,1);e=t>=1;let n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=iy(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:r,onStart:s,onUpdate:o}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function oy(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}var ay=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){Xe(this,"width",0);Xe(this,"height",0);Xe(this,"scrollHeight",0);Xe(this,"scrollWidth",0);Xe(this,"debouncedResize");Xe(this,"wrapperResizeObserver");Xe(this,"contentResizeObserver");Xe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Xe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Xe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=e,t&&(this.debouncedResize=oy(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Bg=class{constructor(){Xe(this,"events",{})}emit(i,...e){let t=this.events[i]||[];for(let n=0,r=t.length;n<r;n++)t[n]?.(...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{this.events[i]=this.events[i]?.filter(t=>e!==t)}}off(i,e){this.events[i]=this.events[i]?.filter(t=>e!==t)}destroy(){this.events={}}},ly=100/6,Xr={passive:!1};function Ug(i,e){return i===1?ly:i===2?e:1}var cy=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){Xe(this,"touchStart",{x:0,y:0});Xe(this,"lastDelta",{x:0,y:0});Xe(this,"window",{width:0,height:0});Xe(this,"emitter",new Bg);Xe(this,"onTouchStart",i=>{let{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Xe(this,"onTouchMove",i=>{let{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});Xe(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Xe(this,"onWheel",i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i,r=Ug(n,this.window.width),s=Ug(n,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})});Xe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Xr),this.element.addEventListener("touchstart",this.onTouchStart,Xr),this.element.addEventListener("touchmove",this.onTouchMove,Xr),this.element.addEventListener("touchend",this.onTouchEnd,Xr)}on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Xr),this.element.removeEventListener("touchstart",this.onTouchStart,Xr),this.element.removeEventListener("touchmove",this.onTouchMove,Xr),this.element.removeEventListener("touchend",this.onTouchEnd,Xr)}},Og=i=>Math.min(1,1.001-2**(-10*i)),zg=class{constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:p,virtualScroll:g,overscroll:S=!0,autoRaf:b=!1,anchors:x=!1,autoToggle:M=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:v=A,stopInertiaOnNavigate:w=!1,respectReducedMotion:C=!0}={}){Xe(this,"_isScrolling",!1);Xe(this,"_isStopped",!1);Xe(this,"_isLocked",!1);Xe(this,"_preventNextNativeScrollEvent",!1);Xe(this,"_resetVelocityTimeout",null);Xe(this,"_rafId",null);Xe(this,"_isDraggingSelection",!1);Xe(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Xe(this,"isTouching");Xe(this,"isIos");Xe(this,"time",0);Xe(this,"userData",{});Xe(this,"lastVelocity",0);Xe(this,"velocity",0);Xe(this,"direction",0);Xe(this,"options");Xe(this,"targetScroll");Xe(this,"animatedScroll");Xe(this,"animate",new sy);Xe(this,"emitter",new Bg);Xe(this,"dimensions");Xe(this,"virtualScroll");Xe(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});Xe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Xe(this,"onTransitionEnd",i=>{i.propertyName?.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});Xe(this,"onClick",i=>{let e=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){let n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){let r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Xe(this,"onPointerDown",i=>{i.button===1&&this.reset()});Xe(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;let{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let r=n.type.includes("touch"),s=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(m=>m instanceof HTMLElement&&(typeof c=="function"&&c?.(m)||m.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&m.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&m.hasAttribute?.("data-lenis-prevent-horizontal")||r&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=r&&this.options.syncTouch,f=r&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Xe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Xe(this,"raf",i=>{let e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Ng,window.lenis||(window.lenis={}),window.lenis.version=Ng,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=Og:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:m,autoResize:_,prevent:p,virtualScroll:g,overscroll:S,autoRaf:b,anchors:x,autoToggle:M,allowNestedScroll:T,naiveDimensions:v,stopInertiaOnNavigate:w,respectReducedMotion:C},this.dimensions=new ay(i,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new cy(t,{touchMultiplier:f,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}get overflow(){let i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){let e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;let t=i.targetTouches[0]??i.changedTouches[0];if(!t)return!1;let n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;let r=n[0],s=n[n.length-1],o=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(r?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=i,f=e;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let m=null;if(typeof u=="string"?(m=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),m||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&u?.nodeType&&(m=u),m){if(this.options.wrapper!==window){let x=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?x.left:x.top}let _=m.getBoundingClientRect(),p=getComputedStyle(m),g=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),S=getComputedStyle(this.rootElement),b=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(b)?0:b)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;let m=u-this.animatedScroll;m>this.limit/2?u-=this.limit:m<-this.limit/2&&(u+=this.limit)}}else u=Fg(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=Og:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),r&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){let n=Date.now();i._lenis||(i._lenis={});let r=i._lenis,s,o,a,l,c,h,d,u,f,m;if(n-(r.time??0)>2e3){r.time=Date.now();let T=window.getComputedStyle(i);if(r.computedStyle=T,s=["auto","overlay","scroll"].includes(T.overflowX),o=["auto","overlay","scroll"].includes(T.overflowY),c=["auto"].includes(T.overscrollBehaviorX),h=["auto"].includes(T.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,m=i.clientHeight,a=d>f,l=u>m,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=u,r.clientWidth=f,r.clientHeight=m,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=h}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,d=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,m=r.clientHeight,c=r.hasOverscrollBehaviorX,h=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical",p,g,S,b,x,M;if(_==="horizontal")p=Math.round(i.scrollLeft),g=d-f,S=e,b=s,x=a,M=c;else if(_==="vertical")p=Math.round(i.scrollTop),g=u-m,S=t,b=o,x=l,M=h;else return!1;return!M&&(p>=g||p<=0)?!0:(S>0?p<g:p>0)&&b&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?ry(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(let i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};var id=["intro","build","ship","connect","operate","final"],hy=[{to:1,start:.05,end:.17},{to:2,start:.29,end:.39},{to:3,start:.5,end:.6},{to:4,start:.71,end:.8},{to:5,start:.895,end:.965}],rd=[[0,0,.03,.06],[.17,.2,.27,.3],[.38,.41,.48,.51],[.59,.62,.69,.72],[.79,.82,.875,.9],[.955,.985,1,1]],Ps={lid:[.07,.185],power:[.14,.19],typing:[.18,.3],links:[.57,.7],trails:[.9,.99],pipeline:[.78,.9],cue:[0,.025]},sd=i=>Math.min(1,Math.max(0,i)),Mo=i=>{let e=sd(i);return e*e*(3-2*e)},Ic=i=>{let e=sd(i);return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2},Is=(i,[e,t])=>t<=e?i>=t?1:0:sd((i-e)/(t-e));function od(i){let e=0;for(let t of hy)if(i>=t.end)e=t.to;else{if(i>t.start)return t.to-1+Ic((i-t.start)/(t.end-t.start));break}return e}function kg(i,e){let[t,n,r,s]=rd[e],o=n<=t?i>=t?1:0:Mo((i-t)/(n-t)),a=s<=r?i>=s&&s<1?0:1:1-Mo((i-r)/(s-r));return Math.min(o,a)}function Vg(i){return{lid:Ic(Is(i,Ps.lid)),power:Mo(Is(i,Ps.power)),typing:Is(i,Ps.typing),links:Ic(Is(i,Ps.links)),trails:Ic(Is(i,Ps.trails)),pipeline:Is(i,Ps.pipeline),cue:1-Is(i,Ps.cue)}}var Gg=i=>Math.round(od(i));var g0=0,Wd=1,_0=2;var Ml=1,x0=2,Jo=3,rs=0,En=1,vi=2,Li=0,ss=1,yi=2,Xd=3,Yd=4,v0=5;var Hs=100,y0=101,S0=102,M0=103,b0=104,T0=200,w0=201,E0=202,A0=203,qd=204,Zd=205,C0=206,R0=207,P0=208,I0=209,L0=210,D0=211,N0=212,U0=213,O0=214,th=0,nh=1,ih=2,Fo=3,rh=4,sh=5,oh=6,ah=7,Jd=0,F0=1,B0=2,Hi=0,bl=1,Tl=2,wl=3,El=4,Al=5,Cl=6,Ws=7;var $d=300,os=301,Xs=302,Bh=303,zh=304,Rl=306,lh=1e3,tr=1001,ch=1002,yn=1003,z0=1004;var Pl=1005;var wn=1006,kh=1007;var as=1008;var oi=1009,Kd=1010,Qd=1011,$o=1012,Vh=1013,Wi=1014,Xi=1015,un=1016,Gh=1017,Hh=1018,Ko=1020,jd=35902,ep=35899,tp=1021,np=1022,Di=1023,ir=1026,ls=1027,ip=1028,Wh=1029,cs=1030,Xh=1031;var Yh=1033,Il=33776,Ll=33777,Dl=33778,Nl=33779,qh=35840,Zh=35841,Jh=35842,$h=35843,Kh=36196,Qh=37492,jh=37496,eu=37488,tu=37489,Ul=37490,nu=37491,iu=37808,ru=37809,su=37810,ou=37811,au=37812,lu=37813,cu=37814,hu=37815,uu=37816,fu=37817,du=37818,pu=37819,mu=37820,gu=37821,_u=36492,xu=36494,vu=36495,yu=36283,Su=36284,Ol=36285,Mu=36286;var qa=2300,hh=2301,jc=2302,Dd=2303,Nd=2400,Ud=2401,Od=2402;var k0=3200;var bu=0,V0=1,Cr="",on="srgb",Za="srgb-linear",Ja="linear",vt="srgb";var eh=7680;var G0=519,H0=512,W0=513,X0=514,Tu=515,Y0=516,q0=517,wu=518,Z0=519,J0=35044;var rp="300 es",Vi=2e3,Bo=2001;function uy(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function $a(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $0(){let i=$a("canvas");return i.style.display="block",i}var Hg={},zo=null;function sp(...i){let e="THREE."+i.shift();zo?zo("log",e,...i):console.log(e,...i)}function K0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function et(...i){i=K0(i);let e="THREE."+i.shift();if(zo)zo("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function tt(...i){i=K0(i);let e="THREE."+i.shift();if(zo)zo("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Os(...i){let e=i.join(" ");e in Hg||(Hg[e]=!0,et(...i))}function Q0(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var j0={[th]:nh,[ih]:oh,[rh]:ah,[Fo]:sh,[nh]:th,[oh]:ih,[ah]:rh,[sh]:Fo},rr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ad=Math.PI/180,Ka=180/Math.PI;function Qo(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(On[i&255]+On[i>>8&255]+On[i>>16&255]+On[i>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[t&63|128]+On[t>>8&255]+"-"+On[t>>16&255]+On[t>>24&255]+On[n&255]+On[n>>8&255]+On[n>>16&255]+On[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function dy(i,e){return(i%e+e)%e}function ld(i,e,t){return(1-t)*i+t*e}function za(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var up=class up{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};up.prototype.isVector2=!0;var fe=up,sr=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3],u=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(d!==_||l!==u||c!==f||h!==m){let p=l*u+c*f+h*m+d*_;p<0&&(u=-u,f=-f,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let S=Math.acos(p),b=Math.sin(S);g=Math.sin(g*S)/b,a=Math.sin(a*S)/b,l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+_*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+_*a;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[o],u=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+h*d+l*f-c*u,e[t+1]=l*m+h*u+c*d-a*f,e[t+2]=c*m+h*f+a*u-l*d,e[t+3]=h*m-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),d=a(s/2),u=l(n/2),f=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},fp=class fp{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cd.copy(this).projectOnVector(e),this.sub(cd)}reflect(e){return this.sub(cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fp.prototype.isVector3=!0;var O=fp,cd=new O,Wg=new sr,dp=class dp{constructor(e,t,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=r[0],p=r[3],g=r[6],S=r[1],b=r[4],x=r[7],M=r[2],T=r[5],A=r[8];return s[0]=o*_+a*S+l*M,s[3]=o*p+a*b+l*T,s[6]=o*g+a*x+l*A,s[1]=c*_+h*S+d*M,s[4]=c*p+h*b+d*T,s[7]=c*g+h*x+d*A,s[2]=u*_+f*S+m*M,s[5]=u*p+f*b+m*T,s[8]=u*g+f*x+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,m=t*d+n*u+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=d*_,e[1]=(r*c-h*n)*_,e[2]=(a*n-r*o)*_,e[3]=u*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hd.makeScale(e,t)),this}rotate(e){return Os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hd.makeRotation(-e)),this}translate(e,t){return Os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dp.prototype.isMatrix3=!0;var it=dp,hd=new it,Xg=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yg=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function py(){let i={enabled:!0,workingColorSpace:Za,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===vt&&(r.r=wr(r.r),r.g=wr(r.g),r.b=wr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(r.r=Oo(r.r),r.g=Oo(r.g),r.b=Oo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Cr?Ja:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Za]:{primaries:e,whitePoint:n,transfer:Ja,toXYZ:Xg,fromXYZ:Yg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:Xg,fromXYZ:Yg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}var dt=py();function wr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var bo,uh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bo===void 0&&(bo=$a("canvas")),bo.width=e.width,bo.height=e.height;let r=bo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=bo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$a("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=wr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wr(t[n]/255)*255):t[n]=wr(t[n]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},my=0,ko=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Qo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ud(r[o].image)):s.push(ud(r[o]))}else s=ud(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function ud(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}var gy=0,fd=new O,jn=class i extends rr{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=tr,r=tr,s=wn,o=as,a=Di,l=oi,c=i.DEFAULT_ANISOTROPY,h=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=Qo(),this.name="",this.source=new ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fd).x}get height(){return this.source.getSize(fd).y}get depth(){return this.source.getSize(fd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lh:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lh:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=$d;jn.DEFAULT_ANISOTROPY=1;var pp=class pp{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,x=(f+1)/2,M=(g+1)/2,T=(h+u)/4,A=(d+_)/4,v=(m+p)/4;return b>x&&b>M?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=T/n,s=A/n):x>M?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=T/r,s=v/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=A/s,r=v/s),this.set(n,r,s,t),this}let S=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-m)/S,this.y=(d-_)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pp.prototype.isVector4=!0;var Bt=pp,fh=class extends rr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new jn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ko(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends fh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Qa=class extends jn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var dh=class extends jn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Fh=class Fh{constructor(e,t,n,r,s,o,a,l,c,h,d,u,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,d,u,f,m,_,p)}set(e,t,n,r,s,o,a,l,c,h,d,u,f,m,_,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fh().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/To.setFromMatrixColumn(e,0).length(),s=1/To.setFromMatrixColumn(e,1).length(),o=1/To.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=o*h,f=o*d,m=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,m=c*h,_=c*d;t[0]=u+_*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,m=c*h,_=c*d;t[0]=u-_*a,t[4]=-o*d,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,m=a*h,_=a*d;t[0]=l*h,t[4]=m*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=_-u*d,t[8]=m*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+m,t[10]=u-_*d}else if(e.order==="XZY"){let u=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=o*h,t[9]=f*d-m,t[2]=m*d-f,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_y,e,xy)}lookAt(e,t,n){let r=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Yr.crossVectors(n,mi),Yr.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Yr.crossVectors(n,mi)),Yr.normalize(),Lc.crossVectors(mi,Yr),r[0]=Yr.x,r[4]=Lc.x,r[8]=mi.x,r[1]=Yr.y,r[5]=Lc.y,r[9]=mi.y,r[2]=Yr.z,r[6]=Lc.z,r[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],S=n[3],b=n[7],x=n[11],M=n[15],T=r[0],A=r[4],v=r[8],w=r[12],C=r[1],D=r[5],L=r[9],G=r[13],P=r[2],N=r[6],V=r[10],B=r[14],K=r[3],W=r[7],R=r[11],X=r[15];return s[0]=o*T+a*C+l*P+c*K,s[4]=o*A+a*D+l*N+c*W,s[8]=o*v+a*L+l*V+c*R,s[12]=o*w+a*G+l*B+c*X,s[1]=h*T+d*C+u*P+f*K,s[5]=h*A+d*D+u*N+f*W,s[9]=h*v+d*L+u*V+f*R,s[13]=h*w+d*G+u*B+f*X,s[2]=m*T+_*C+p*P+g*K,s[6]=m*A+_*D+p*N+g*W,s[10]=m*v+_*L+p*V+g*R,s[14]=m*w+_*G+p*B+g*X,s[3]=S*T+b*C+x*P+M*K,s[7]=S*A+b*D+x*N+M*W,s[11]=S*v+b*L+x*V+M*R,s[15]=S*w+b*G+x*B+M*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],_=e[7],p=e[11],g=e[15],S=l*f-c*u,b=a*f-c*d,x=a*u-l*d,M=o*f-c*h,T=o*u-l*h,A=o*d-a*h;return t*(_*S-p*b+g*x)-n*(m*S-p*M+g*T)+r*(m*b-_*M+g*A)-s*(m*x-_*T+p*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(s*h-a*l)+r*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],_=e[13],p=e[14],g=e[15],S=t*a-n*o,b=t*l-r*o,x=t*c-s*o,M=n*l-r*a,T=n*c-s*a,A=r*c-s*l,v=h*_-d*m,w=h*p-u*m,C=h*g-f*m,D=d*p-u*_,L=d*g-f*_,G=u*g-f*p,P=S*G-b*L+x*D+M*C-T*w+A*v;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/P;return e[0]=(a*G-l*L+c*D)*N,e[1]=(r*L-n*G-s*D)*N,e[2]=(_*A-p*T+g*M)*N,e[3]=(u*T-d*A-f*M)*N,e[4]=(l*C-o*G-c*w)*N,e[5]=(t*G-r*C+s*w)*N,e[6]=(p*x-m*A-g*b)*N,e[7]=(h*A-u*x+f*b)*N,e[8]=(o*L-a*C+c*v)*N,e[9]=(n*C-t*L-s*v)*N,e[10]=(m*T-_*x+g*S)*N,e[11]=(d*x-h*T-f*S)*N,e[12]=(a*w-o*D-l*v)*N,e[13]=(t*D-n*w+r*v)*N,e[14]=(_*b-m*M-p*S)*N,e[15]=(h*M-d*b+u*S)*N,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,m=s*d,_=o*h,p=o*d,g=a*d,S=l*c,b=l*h,x=l*d,M=n.x,T=n.y,A=n.z;return r[0]=(1-(_+g))*M,r[1]=(f+x)*M,r[2]=(m-b)*M,r[3]=0,r[4]=(f-x)*T,r[5]=(1-(u+g))*T,r[6]=(p+S)*T,r[7]=0,r[8]=(m+b)*A,r[9]=(p-S)*A,r[10]=(1-(u+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=To.set(r[0],r[1],r[2]).length(),a=To.set(r[4],r[5],r[6]).length(),l=To.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Fi.copy(this);let c=1/o,h=1/a,d=1/l;return Fi.elements[0]*=c,Fi.elements[1]*=c,Fi.elements[2]*=c,Fi.elements[4]*=h,Fi.elements[5]*=h,Fi.elements[6]*=h,Fi.elements[8]*=d,Fi.elements[9]*=d,Fi.elements[10]*=d,t.setFromRotationMatrix(Fi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=Vi,l=!1){let c=this.elements,h=2*s/(t-e),d=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),m,_;if(l)m=s/(o-s),_=o*s/(o-s);else if(a===Vi)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Bo)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Vi,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-r),u=-(t+e)/(t-e),f=-(n+r)/(n-r),m,_;if(l)m=1/(o-s),_=o/(o-s);else if(a===Vi)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===Bo)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Fh.prototype.isMatrix4=!0;var Ft=Fh,To=new O,Fi=new Ft,_y=new O(0,0,0),xy=new O(1,1,1),Yr=new O,Lc=new O,mi=new O,qg=new Ft,Zg=new sr,Er=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zg.setFromEuler(this),this.setFromQuaternion(Zg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Er.DEFAULT_ORDER="XYZ";var ja=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vy=0,Jg=new O,wo=new sr,yr=new Ft,Dc=new O,ka=new O,yy=new O,Sy=new sr,$g=new O(1,0,0),Kg=new O(0,1,0),Qg=new O(0,0,1),jg={type:"added"},My={type:"removed"},Eo={type:"childadded",child:null},dd={type:"childremoved",child:null},hn=class i extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new Er,n=new sr,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new it}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.multiply(wo),this}rotateOnWorldAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.premultiply(wo),this}rotateX(e){return this.rotateOnAxis($g,e)}rotateY(e){return this.rotateOnAxis(Kg,e)}rotateZ(e){return this.rotateOnAxis(Qg,e)}translateOnAxis(e,t){return Jg.copy(e).applyQuaternion(this.quaternion),this.position.add(Jg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($g,e)}translateY(e){return this.translateOnAxis(Kg,e)}translateZ(e){return this.translateOnAxis(Qg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dc.copy(e):Dc.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yr.lookAt(ka,Dc,this.up):yr.lookAt(Dc,ka,this.up),this.quaternion.setFromRotationMatrix(yr),r&&(yr.extractRotation(r.matrixWorld),wo.setFromRotationMatrix(yr),this.quaternion.premultiply(wo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jg),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(My),dd.child=e,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yr.multiply(e.parent.matrixWorld)),e.applyMatrix4(yr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jg),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,yy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,Sy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};hn.DEFAULT_UP=new O(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bn=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},by={type:"move"},Vo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(by)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},e_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qr={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function pd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=dt.workingColorSpace){if(e=dy(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=pd(o,s,e+1/3),this.g=pd(o,s,e),this.b=pd(o,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=on){function n(s){s!==void 0&&parseFloat(s)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){let n=e_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=Oo(e.r),this.g=Oo(e.g),this.b=Oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return dt.workingToColorSpace(Fn.copy(this),e),Math.round(pt(Fn.r*255,0,255))*65536+Math.round(pt(Fn.g*255,0,255))*256+Math.round(pt(Fn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Fn.copy(this),t);let n=Fn.r,r=Fn.g,s=Fn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=on){dt.workingToColorSpace(Fn.copy(this),e);let t=Fn.r,n=Fn.g,r=Fn.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(qr),this.setHSL(qr.h+e,qr.s+t,qr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qr),e.getHSL(Nc);let n=ld(qr.h,Nc.h,t),r=ld(qr.s,Nc.s,t),s=ld(qr.l,Nc.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new je;je.NAMES=e_;var Fs=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Er,this.environmentIntensity=1,this.environmentRotation=new Er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bi=new O,Sr=new O,md=new O,Mr=new O,Ao=new O,Co=new O,e0=new O,gd=new O,_d=new O,xd=new O,vd=new Bt,yd=new Bt,Sd=new Bt,Kr=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bi.subVectors(e,t),r.cross(Bi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Bi.subVectors(r,t),Sr.subVectors(n,t),md.subVectors(e,t);let o=Bi.dot(Bi),a=Bi.dot(Sr),l=Bi.dot(md),c=Sr.dot(Sr),h=Sr.dot(md),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Mr)===null?!1:Mr.x>=0&&Mr.y>=0&&Mr.x+Mr.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Mr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mr.x),l.addScaledVector(o,Mr.y),l.addScaledVector(a,Mr.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return vd.setScalar(0),yd.setScalar(0),Sd.setScalar(0),vd.fromBufferAttribute(e,t),yd.fromBufferAttribute(e,n),Sd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(vd,s.x),o.addScaledVector(yd,s.y),o.addScaledVector(Sd,s.z),o}static isFrontFacing(e,t,n,r){return Bi.subVectors(n,t),Sr.subVectors(e,t),Bi.cross(Sr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),Sr.subVectors(this.a,this.b),Bi.cross(Sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Ao.subVectors(r,n),Co.subVectors(s,n),gd.subVectors(e,n);let l=Ao.dot(gd),c=Co.dot(gd);if(l<=0&&c<=0)return t.copy(n);_d.subVectors(e,r);let h=Ao.dot(_d),d=Co.dot(_d);if(h>=0&&d<=h)return t.copy(r);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ao,o);xd.subVectors(e,s);let f=Ao.dot(xd),m=Co.dot(xd);if(m>=0&&f<=m)return t.copy(s);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Co,a);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return e0.subVectors(s,r),a=(d-h)/(d-h+(f-m)),t.copy(r).addScaledVector(e0,a);let g=1/(p+_+u);return o=_*g,a=u*g,t.copy(n).addScaledVector(Ao,o).addScaledVector(Co,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zi):zi.fromBufferAttribute(s,o),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Uc.copy(n.boundingBox)),Uc.applyMatrix4(e.matrixWorld),this.union(Uc)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Va),Oc.subVectors(this.max,Va),Ro.subVectors(e.a,Va),Po.subVectors(e.b,Va),Io.subVectors(e.c,Va),Zr.subVectors(Po,Ro),Jr.subVectors(Io,Po),Ls.subVectors(Ro,Io);let t=[0,-Zr.z,Zr.y,0,-Jr.z,Jr.y,0,-Ls.z,Ls.y,Zr.z,0,-Zr.x,Jr.z,0,-Jr.x,Ls.z,0,-Ls.x,-Zr.y,Zr.x,0,-Jr.y,Jr.x,0,-Ls.y,Ls.x,0];return!Md(t,Ro,Po,Io,Oc)||(t=[1,0,0,0,1,0,0,0,1],!Md(t,Ro,Po,Io,Oc))?!1:(Fc.crossVectors(Zr,Jr),t=[Fc.x,Fc.y,Fc.z],Md(t,Ro,Po,Io,Oc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},br=[new O,new O,new O,new O,new O,new O,new O,new O],zi=new O,Uc=new zn,Ro=new O,Po=new O,Io=new O,Zr=new O,Jr=new O,Ls=new O,Va=new O,Oc=new O,Fc=new O,Ds=new O;function Md(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ds.fromArray(i,s);let a=r.x*Math.abs(Ds.x)+r.y*Math.abs(Ds.y)+r.z*Math.abs(Ds.z),l=e.dot(Ds),c=t.dot(Ds),h=n.dot(Ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var sn=new O,Bc=new fe,Ty=0,Ii=class extends rr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ty++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=J0,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bc.fromBufferAttribute(this,t),Bc.applyMatrix3(e),this.setXY(t,Bc.x,Bc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=za(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=si(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=za(t,this.array)),t}setX(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=za(t,this.array)),t}setY(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=za(t,this.array)),t}setZ(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=za(t,this.array)),t}setW(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),n=si(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),n=si(n,this.array),r=si(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),n=si(n,this.array),r=si(r,this.array),s=si(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var el=class extends Ii{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var tl=class extends Ii{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var It=class extends Ii{constructor(e,t,n){super(new Float32Array(e),t,n)}},wy=new zn,Ga=new O,bd=new O,Go=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wy.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ga.subVectors(e,this.center);let t=Ga.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ga,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ga.copy(e.center).add(bd)),this.expandByPoint(Ga.copy(e.center).sub(bd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ey=0,Pi=new Ft,Td=new hn,Lo=new O,gi=new zn,Ha=new zn,xn=new O,kn=class i extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uy(e)?tl:el)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new it().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,t,n){return Pi.makeTranslation(e,t,n),this.applyMatrix4(Pi),this}scale(e,t,n){return Pi.makeScale(e,t,n),this.applyMatrix4(Pi),this}lookAt(e){return Td.lookAt(e),Td.updateMatrix(),this.applyMatrix4(Td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lo).negate(),this.translate(Lo.x,Lo.y,Lo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new It(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];gi.setFromBufferAttribute(s),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Go);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ha.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(gi.min,Ha.min),gi.expandByPoint(xn),xn.addVectors(gi.max,Ha.max),gi.expandByPoint(xn)):(gi.expandByPoint(Ha.min),gi.expandByPoint(Ha.max))}gi.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)xn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(xn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xn.fromBufferAttribute(a,c),l&&(Lo.fromBufferAttribute(e,c),xn.add(Lo)),r=Math.max(r,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ii(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new O,l[v]=new O;let c=new O,h=new O,d=new O,u=new fe,f=new fe,m=new fe,_=new O,p=new O;function g(v,w,C){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,C),u.fromBufferAttribute(s,v),f.fromBufferAttribute(s,w),m.fromBufferAttribute(s,C),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(D),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(D),a[v].add(_),a[w].add(_),a[C].add(_),l[v].add(p),l[w].add(p),l[C].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,w=S.length;v<w;++v){let C=S[v],D=C.start,L=C.count;for(let G=D,P=D+L;G<P;G+=3)g(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let b=new O,x=new O,M=new O,T=new O;function A(v){M.fromBufferAttribute(r,v),T.copy(M);let w=a[v];b.copy(w),b.sub(M.multiplyScalar(M.dot(w))).normalize(),x.crossVectors(T,w);let D=x.dot(l[v])<0?-1:1;o.setXYZW(v,b.x,b.y,b.z,D)}for(let v=0,w=S.length;v<w;++v){let C=S[v],D=C.start,L=C.count;for(let G=D,P=D+L;G<P;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ii(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,h=new O,d=new O;if(e)for(let u=0,f=e.count;u<f;u+=3){let m=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new Ii(u,h,d)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var wd=new O,Ay=new O,Cy=new it,ki=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=wd.subVectors(n,t).cross(Ay.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(wd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Cy.getNormalMatrix(e),r=this.coplanarPoint(wd).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ry=0,Qr=class extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=ss,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qd,this.blendDst=Zd,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=G0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eh,this.stencilZFail=eh,this.stencilZPass=eh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ki().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Tr=new O,Ed=new O,zc=new O,kc=new O,ph=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tr.copy(this.origin).addScaledVector(this.direction,t),Tr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ed.copy(e).add(t).multiplyScalar(.5),zc.copy(t).sub(e).normalize(),kc.copy(this.origin).sub(Ed);let s=e.distanceTo(t)*.5,o=-this.direction.dot(zc),a=kc.dot(this.direction),l=-kc.dot(zc),c=kc.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=s*h,d>=0)if(u>=-m)if(u<=m){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ed).addScaledVector(zc,u),f}intersectSphere(e,t){if(e.radius<0)return null;Tr.subVectors(e.center,this.origin);let n=Tr.dot(this.direction),r=Tr.dot(Tr)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Tr)!==null}intersectTriangle(e,t,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,m=t.x-o.x,_=t.y-o.y,p=t.z-o.z,g=n.x-o.x,S=n.y-o.y,b=n.z-o.z,x=Math.abs(l),M=Math.abs(c),T=Math.abs(h),A,v,w,C,D,L,G,P,N,V,B,K;if(x>=M&&x>=T?(w=l,L=d,N=m,K=g,l>=0?(A=c,v=h,C=u,D=f,G=_,P=p,V=S,B=b):(A=h,v=c,C=f,D=u,G=p,P=_,V=b,B=S)):M>=T?(w=c,L=u,N=_,K=S,c>=0?(A=h,v=l,C=f,D=d,G=p,P=m,V=b,B=g):(A=l,v=h,C=d,D=f,G=m,P=p,V=g,B=b)):(w=h,L=f,N=p,K=b,h>=0?(A=l,v=c,C=d,D=u,G=m,P=_,V=g,B=S):(A=c,v=l,C=u,D=d,G=_,P=m,V=S,B=g)),w===0)return null;let W=A/w,R=v/w,X=1/w,ge=C-W*L,de=D-R*L,ye=G-W*N,Pe=P-R*N,He=V-W*K,J=B-R*K,ee=He*Pe-J*ye,ue=ge*J-de*He,ke=ye*de-Pe*ge;if(r){if(ee<0||ue<0||ke<0)return null}else if((ee<0||ue<0||ke<0)&&(ee>0||ue>0||ke>0))return null;let xe=ee+ue+ke;if(xe===0)return null;let Ae=X*(ee*L+ue*N+ke*K);return(xe>0?Ae<0:Ae>0)?null:this.at(Ae/xe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Sn=class extends Qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.combine=Jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},t0=new Ft,Ns=new ph,Vc=new Go,n0=new O,Gc=new O,Hc=new O,Wc=new O,Ad=new O,Xc=new O,i0=new O,Yc=new O,rt=class extends hn{constructor(e=new kn,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Xc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(Ad.fromBufferAttribute(d,e),o?Xc.addScaledVector(Ad,h):Xc.addScaledVector(Ad.sub(t),h))}t.add(Xc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vc.copy(n.boundingSphere),Vc.applyMatrix4(s),Ns.copy(e.ray).recast(e.near),!(Vc.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(Vc,n0)===null||Ns.origin.distanceToSquared(n0)>(e.far-e.near)**2))&&(t0.copy(s).invert(),Ns.copy(e.ray).applyMatrix4(t0),!(n.boundingBox!==null&&Ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],S=Math.max(p.start,f.start),b=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let x=S,M=b;x<M;x+=3){let T=a.getX(x),A=a.getX(x+1),v=a.getX(x+2);r=qc(this,g,e,n,c,h,d,T,A,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let S=a.getX(p),b=a.getX(p+1),x=a.getX(p+2);r=qc(this,o,e,n,c,h,d,S,b,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],S=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=S,M=b;x<M;x+=3){let T=x,A=x+1,v=x+2;r=qc(this,g,e,n,c,h,d,T,A,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let S=p,b=p+1,x=p+2;r=qc(this,o,e,n,c,h,d,S,b,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function Py(i,e,t,n,r,s,o,a){let l;if(e.side===En?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===rs,a),l===null)return null;Yc.copy(a),Yc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Yc);return c<t.near||c>t.far?null:{distance:c,point:Yc.clone(),object:i}}function qc(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Gc),i.getVertexPosition(l,Hc),i.getVertexPosition(c,Wc);let h=Py(i,e,t,n,Gc,Hc,Wc,i0);if(h){let d=new O;Kr.getBarycoord(i0,Gc,Hc,Wc,d),r&&(h.uv=Kr.getInterpolatedAttribute(r,a,l,c,d,new fe)),s&&(h.uv1=Kr.getInterpolatedAttribute(s,a,l,c,d,new fe)),o&&(h.normal=Kr.getInterpolatedAttribute(o,a,l,c,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new O,materialIndex:0};Kr.getNormal(Gc,Hc,Wc,u.normal),h.face=u,h.barycoord=d}return h}var mh=class extends jn{constructor(e=null,t=1,n=1,r,s,o,a,l,c=yn,h=yn,d,u){super(null,o,a,l,c,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Us=new Go,Iy=new fe(.5,.5),Zc=new O,Ho=class{constructor(e=new ki,t=new ki,n=new ki,r=new ki,s=new ki,o=new ki){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vi,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],m=s[8],_=s[9],p=s[10],g=s[11],S=s[12],b=s[13],x=s[14],M=s[15];if(r[0].setComponents(c-o,f-h,g-m,M-S).normalize(),r[1].setComponents(c+o,f+h,g+m,M+S).normalize(),r[2].setComponents(c+a,f+d,g+_,M+b).normalize(),r[3].setComponents(c-a,f-d,g-_,M-b).normalize(),n)r[4].setComponents(l,u,p,x).normalize(),r[5].setComponents(c-l,f-u,g-p,M-x).normalize();else if(r[4].setComponents(c-l,f-u,g-p,M-x).normalize(),t===Vi)r[5].setComponents(c+l,f+u,g+p,M+x).normalize();else if(t===Bo)r[5].setComponents(l,u,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){Us.center.set(0,0,0);let t=Iy.distanceTo(e.center);return Us.radius=.7071067811865476+t,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Zc.x=r.normal.x>0?e.max.x:e.min.x,Zc.y=r.normal.y>0?e.max.y:e.min.y,Zc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var nl=class extends jn{constructor(e=[],t=os,n,r,s,o,a,l,c,h){super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ar=class extends jn{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var jr=class extends jn{constructor(e,t,n=Wi,r,s,o,a=yn,l=yn,c,h=ir,d=1){if(h!==ir&&h!==ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ko(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},gh=class extends jr{constructor(e,t=Wi,n=os,r,s,o=yn,a=yn,l,c=ir){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},il=class extends jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},or=class i extends kn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(d,2));function m(_,p,g,S,b,x,M,T,A,v,w){let C=x/A,D=M/v,L=x/2,G=M/2,P=T/2,N=A+1,V=v+1,B=0,K=0,W=new O;for(let R=0;R<V;R++){let X=R*D-G;for(let ge=0;ge<N;ge++){let de=ge*C-L;W[_]=de*S,W[p]=X*b,W[g]=P,c.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[g]=T>0?1:-1,h.push(W.x,W.y,W.z),d.push(ge/A),d.push(1-R/v),B+=1}}for(let R=0;R<v;R++)for(let X=0;X<A;X++){let ge=u+X+N*R,de=u+X+N*(R+1),ye=u+(X+1)+N*(R+1),Pe=u+(X+1)+N*R;l.push(ge,de,Pe),l.push(de,ye,Pe),K+=6}a.addGroup(f,K,w),f+=K,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var _h=class i extends kn{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],d=[],u=[],f=[],m=0,_=[],p=n/2,g=0;S(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new It(d,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(f,2));function S(){let x=new O,M=new O,T=0,A=(t-e)/n;for(let v=0;v<=s;v++){let w=[],C=v/s,D=C*(t-e)+e;for(let L=0;L<=r;L++){let G=L/r,P=G*l+a,N=Math.sin(P),V=Math.cos(P);M.x=D*N,M.y=-C*n+p,M.z=D*V,d.push(M.x,M.y,M.z),x.set(N,A,V).normalize(),u.push(x.x,x.y,x.z),f.push(G,1-C),w.push(m++)}_.push(w)}for(let v=0;v<r;v++)for(let w=0;w<s;w++){let C=_[w][v],D=_[w+1][v],L=_[w+1][v+1],G=_[w][v+1];(e>0||w!==0)&&(h.push(C,D,G),T+=3),(t>0||w!==s-1)&&(h.push(D,L,G),T+=3)}c.addGroup(g,T,0),g+=T}function b(x){let M=m,T=new fe,A=new O,v=0,w=x===!0?e:t,C=x===!0?1:-1;for(let L=1;L<=r;L++)d.push(0,p*C,0),u.push(0,C,0),f.push(.5,.5),m++;let D=m;for(let L=0;L<=r;L++){let P=L/r*l+a,N=Math.cos(P),V=Math.sin(P);A.x=w*V,A.y=p*C,A.z=w*N,d.push(A.x,A.y,A.z),u.push(0,C,0),T.x=N*.5+.5,T.y=V*.5*C+.5,f.push(T.x,T.y),m++}for(let L=0;L<r;L++){let G=M+L,P=D+L;x===!0?h.push(P,P+1,G):h.push(P+1,P,G),v+=3}c.addGroup(g,v,x===!0?1:2),g+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},rl=class i extends _h{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var _i=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){et("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let h=n[r],u=n[r+1]-h,f=(o-h)/u;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new fe:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new O,r=[],s=[],o=[],a=new O,l=new Ft;for(let f=0;f<=e;f++){let m=f/e;r[f]=this.getTangentAt(m,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(pt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(pt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],f*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Wo=class extends _i{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new fe){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xh=class extends Wo{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function op(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,r(o,a,u,f)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var r0=new O,s0=new O,Cd=new op,Rd=new op,Pd=new op,Bs=class extends _i{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new O){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(s0.subVectors(r[0],r[1]).add(r[0]),c=s0);let d=r[a%s],u=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(r0.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=r0),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),Cd.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,_,p),Rd.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,_,p),Pd.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(Cd.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Rd.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Pd.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Cd.calc(l),Rd.calc(l),Pd.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function o0(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function Ly(i,e){let t=1-i;return t*t*e}function Dy(i,e){return 2*(1-i)*i*e}function Ny(i,e){return i*i*e}function Xa(i,e,t,n){return Ly(i,e)+Dy(i,t)+Ny(i,n)}function Uy(i,e){let t=1-i;return t*t*t*e}function Oy(i,e){let t=1-i;return 3*t*t*i*e}function Fy(i,e){return 3*(1-i)*i*i*e}function By(i,e){return i*i*i*e}function Ya(i,e,t,n,r){return Uy(i,e)+Oy(i,t)+Fy(i,n)+By(i,r)}var sl=class extends _i{constructor(e=new fe,t=new fe,n=new fe,r=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new fe){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ya(e,r.x,s.x,o.x,a.x),Ya(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vh=class extends _i{constructor(e=new O,t=new O,n=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new O){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ya(e,r.x,s.x,o.x,a.x),Ya(e,r.y,s.y,o.y,a.y),Ya(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ol=class extends _i{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yh=class extends _i{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},al=class extends _i{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Xa(e,r.x,s.x,o.x),Xa(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zs=class extends _i{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Xa(e,r.x,s.x,o.x),Xa(e,r.y,s.y,o.y),Xa(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ll=class extends _i{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(o0(a,l.x,c.x,h.x,d.x),o0(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new fe().fromArray(r))}return this}},Sh=Object.freeze({__proto__:null,ArcCurve:xh,CatmullRomCurve3:Bs,CubicBezierCurve:sl,CubicBezierCurve3:vh,EllipseCurve:Wo,LineCurve:ol,LineCurve3:yh,QuadraticBezierCurve:al,QuadraticBezierCurve3:zs,SplineCurve:ll}),Mh=class extends _i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Sh[r.type]().fromJSON(r))}return this}},cl=class extends Mh{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ol(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new al(this.currentPoint.clone(),new fe(e,t),new fe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new sl(this.currentPoint.clone(),new fe(e,t),new fe(n,r),new fe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ll(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new Wo(e,t,n,r,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ks=class extends cl{constructor(e){super(e),this.uuid=Qo(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new cl().fromJSON(r))}return this}};function zy(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=t_(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Wy(i,e,s,t)),i.length>80*t){a=i[0],l=i[1];let h=a,d=l;for(let u=t;u<r;u+=t){let f=i[u],m=i[u+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return hl(s,o,t,a,l,c,0),o}function t_(i,e,t,n,r){let s;if(r===tS(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=a0(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=a0(o/n|0,i[o],i[o+1],s);return s&&Xo(s,s.next)&&(fl(s),s=s.next),s}function Vs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Xo(t,t.next)||Ht(t.prev,t,t.next)===0)){if(fl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function hl(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Jy(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?Vy(i,n,r,s):ky(i)){e.push(l.i,i.i,c.i),fl(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Gy(Vs(i),e),hl(i,e,t,n,r,s,2)):o===2&&Hy(i,e,t,n,r,s):hl(Vs(i),e,t,n,r,s,1);break}}}function ky(i){let e=i.prev,t=i,n=i.next;if(Ht(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(r,s,o),d=Math.min(a,l,c),u=Math.max(r,s,o),f=Math.max(a,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&Wa(r,a,s,l,o,c,m.x,m.y)&&Ht(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Vy(i,e,t,n){let r=i.prev,s=i,o=i.next;if(Ht(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,d=s.y,u=o.y,f=Math.min(a,l,c),m=Math.min(h,d,u),_=Math.max(a,l,c),p=Math.max(h,d,u),g=Fd(f,m,e,t,n),S=Fd(_,p,e,t,n),b=i.prevZ,x=i.nextZ;for(;b&&b.z>=g&&x&&x.z<=S;){if(b.x>=f&&b.x<=_&&b.y>=m&&b.y<=p&&b!==r&&b!==o&&Wa(a,h,l,d,c,u,b.x,b.y)&&Ht(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=f&&x.x<=_&&x.y>=m&&x.y<=p&&x!==r&&x!==o&&Wa(a,h,l,d,c,u,x.x,x.y)&&Ht(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=g;){if(b.x>=f&&b.x<=_&&b.y>=m&&b.y<=p&&b!==r&&b!==o&&Wa(a,h,l,d,c,u,b.x,b.y)&&Ht(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=p&&x!==r&&x!==o&&Wa(a,h,l,d,c,u,x.x,x.y)&&Ht(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Gy(i,e){let t=i;do{let n=t.prev,r=t.next.next;!Xo(n,r)&&i_(n,t,t.next,r)&&ul(n,r)&&ul(r,n)&&(e.push(n.i,t.i,r.i),fl(t),fl(t.next),t=i=r),t=t.next}while(t!==i);return Vs(t)}function Hy(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Qy(o,a)){let l=r_(o,a);o=Vs(o,o.next),l=Vs(l,l.next),hl(o,e,t,n,r,s,0),hl(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Wy(i,e,t,n){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=t_(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Ky(c))}r.sort(Xy);for(let s=0;s<r.length;s++)t=Yy(r[s],t);return t}function Xy(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Yy(i,e){let t=qy(i,e);if(!t)return e;let n=r_(t,i);return Vs(n,n.next),Vs(t,t.next)}function qy(i,e){let t=e,n=i.x,r=i.y,s=-1/0,o;if(Xo(i,t))return t;do{if(Xo(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&n_(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){let d=Math.abs(r-t.y)/(n-t.x);ul(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&Zy(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function Zy(i,e){return Ht(i.prev,i,e.prev)<0&&Ht(e.next,i,i.next)<0}function Jy(i,e,t,n){let r=i;do r.z===0&&(r.z=Fd(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,$y(r)}function $y(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function Fd(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ky(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function n_(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Wa(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&n_(i,e,t,n,r,s,o,a)}function Qy(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!jy(i,e)&&(ul(i,e)&&ul(e,i)&&eS(i,e)&&(Ht(i.prev,i,e.prev)||Ht(i,e.prev,e))||Xo(i,e)&&Ht(i.prev,i,i.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Xo(i,e){return i.x===e.x&&i.y===e.y}function i_(i,e,t,n){let r=$c(Ht(i,e,t)),s=$c(Ht(i,e,n)),o=$c(Ht(t,n,i)),a=$c(Ht(t,n,e));return!!(r!==s&&o!==a||r===0&&Jc(i,t,e)||s===0&&Jc(i,n,e)||o===0&&Jc(t,i,n)||a===0&&Jc(t,e,n))}function Jc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function $c(i){return i>0?1:i<0?-1:0}function jy(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&i_(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ul(i,e){return Ht(i.prev,i,i.next)<0?Ht(i,e,i.next)>=0&&Ht(i,i.prev,e)>=0:Ht(i,e,i.prev)<0||Ht(i,i.next,e)<0}function eS(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function r_(i,e){let t=Bd(i.i,i.x,i.y),n=Bd(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function a0(i,e,t,n){let r=Bd(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function fl(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Bd(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function tS(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var zd=class{static triangulate(e,t,n=2){return zy(e,t,n)}},nr=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];l0(e),c0(n,e);let o=e.length;t.forEach(l0);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,c0(n,t[l]);let a=zd.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function l0(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function c0(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var dl=class i extends kn{constructor(e=new ks([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new It(r,3)),this.setAttribute("uv",new It(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:nS,b,x=!1,M,T,A,v;if(g){b=g.getSpacedPoints(h),x=!0,u=!1;let j=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(h,j),T=new O,A=new O,v=new O}u||(p=0,f=0,m=0,_=0);let w=a.extractPoints(c),C=w.shape,D=w.holes;if(!nr.isClockWise(C)){C=C.reverse();for(let j=0,re=D.length;j<re;j++){let ae=D[j];nr.isClockWise(ae)&&(D[j]=ae.reverse())}}function G(j){let ae=10000000000000001e-36,U=j[0];for(let me=1;me<=j.length;me++){let We=me%j.length,Be=j[We],Ie=Be.x-U.x,Ke=Be.y-U.y,F=Ie*Ie+Ke*Ke,ht=Math.max(Math.abs(Be.x),Math.abs(Be.y),Math.abs(U.x),Math.abs(U.y)),Je=ae*ht*ht;if(F<=Je){j.splice(We,1),me--;continue}U=Be}}G(C),D.forEach(G);let P=D.length,N=C;for(let j=0;j<P;j++){let re=D[j];C=C.concat(re)}function V(j,re,ae){return re||tt("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(re,ae)}let B=C.length;function K(j,re,ae){let U,me,We,Be=j.x-re.x,Ie=j.y-re.y,Ke=ae.x-j.x,F=ae.y-j.y,ht=Be*Be+Ie*Ie,Je=Be*F-Ie*Ke;if(Math.abs(Je)>Number.EPSILON){let I=Math.sqrt(ht),y=Math.sqrt(Ke*Ke+F*F),H=re.x-Ie/I,Y=re.y+Be/I,Q=ae.x-F/y,_e=ae.y+Ke/y,ce=((Q-H)*F-(_e-Y)*Ke)/(Be*F-Ie*Ke);U=H+Be*ce-j.x,me=Y+Ie*ce-j.y;let te=U*U+me*me;if(te<=2)return new fe(U,me);We=Math.sqrt(te/2)}else{let I=!1;Be>Number.EPSILON?Ke>Number.EPSILON&&(I=!0):Be<-Number.EPSILON?Ke<-Number.EPSILON&&(I=!0):Math.sign(Ie)===Math.sign(F)&&(I=!0),I?(U=-Ie,me=Be,We=Math.sqrt(ht)):(U=Be,me=Ie,We=Math.sqrt(ht/2))}return new fe(U/We,me/We)}let W=[];for(let j=0,re=N.length,ae=re-1,U=j+1;j<re;j++,ae++,U++)ae===re&&(ae=0),U===re&&(U=0),W[j]=K(N[j],N[ae],N[U]);let R=[],X,ge=W.concat();for(let j=0,re=P;j<re;j++){let ae=D[j];X=[];for(let U=0,me=ae.length,We=me-1,Be=U+1;U<me;U++,We++,Be++)We===me&&(We=0),Be===me&&(Be=0),X[U]=K(ae[U],ae[We],ae[Be]);R.push(X),ge=ge.concat(X)}let de;if(p===0)de=nr.triangulateShape(N,D);else{let j=[],re=[];for(let ae=0;ae<p;ae++){let U=ae/p,me=f*Math.cos(U*Math.PI/2),We=m*Math.sin(U*Math.PI/2)+_;for(let Be=0,Ie=N.length;Be<Ie;Be++){let Ke=V(N[Be],W[Be],We);ue(Ke.x,Ke.y,-me),U===0&&j.push(Ke)}for(let Be=0,Ie=P;Be<Ie;Be++){let Ke=D[Be];X=R[Be];let F=[];for(let ht=0,Je=Ke.length;ht<Je;ht++){let I=V(Ke[ht],X[ht],We);ue(I.x,I.y,-me),U===0&&F.push(I)}U===0&&re.push(F)}}de=nr.triangulateShape(j,re)}let ye=de.length,Pe=m+_;for(let j=0;j<B;j++){let re=u?V(C[j],ge[j],Pe):C[j];x?(A.copy(M.normals[0]).multiplyScalar(re.x),T.copy(M.binormals[0]).multiplyScalar(re.y),v.copy(b[0]).add(A).add(T),ue(v.x,v.y,v.z)):ue(re.x,re.y,0)}for(let j=1;j<=h;j++)for(let re=0;re<B;re++){let ae=u?V(C[re],ge[re],Pe):C[re];x?(A.copy(M.normals[j]).multiplyScalar(ae.x),T.copy(M.binormals[j]).multiplyScalar(ae.y),v.copy(b[j]).add(A).add(T),ue(v.x,v.y,v.z)):ue(ae.x,ae.y,d/h*j)}for(let j=p-1;j>=0;j--){let re=j/p,ae=f*Math.cos(re*Math.PI/2),U=m*Math.sin(re*Math.PI/2)+_;for(let me=0,We=N.length;me<We;me++){let Be=V(N[me],W[me],U);ue(Be.x,Be.y,d+ae)}for(let me=0,We=D.length;me<We;me++){let Be=D[me];X=R[me];for(let Ie=0,Ke=Be.length;Ie<Ke;Ie++){let F=V(Be[Ie],X[Ie],U);x?ue(F.x,F.y+b[h-1].y,b[h-1].x+ae):ue(F.x,F.y,d+ae)}}}He(),J();function He(){let j=r.length/3;if(u){let re=0,ae=B*re;for(let U=0;U<ye;U++){let me=de[U];ke(me[2]+ae,me[1]+ae,me[0]+ae)}re=h+p*2,ae=B*re;for(let U=0;U<ye;U++){let me=de[U];ke(me[0]+ae,me[1]+ae,me[2]+ae)}}else{for(let re=0;re<ye;re++){let ae=de[re];ke(ae[2],ae[1],ae[0])}for(let re=0;re<ye;re++){let ae=de[re];ke(ae[0]+B*h,ae[1]+B*h,ae[2]+B*h)}}n.addGroup(j,r.length/3-j,0)}function J(){let j=r.length/3,re=0;ee(N,re),re+=N.length;for(let ae=0,U=D.length;ae<U;ae++){let me=D[ae];ee(me,re),re+=me.length}n.addGroup(j,r.length/3-j,1)}function ee(j,re){let ae=j.length;for(;--ae>=0;){let U=ae,me=ae-1;me<0&&(me=j.length-1);for(let We=0,Be=h+p*2;We<Be;We++){let Ie=B*We,Ke=B*(We+1),F=re+U+Ie,ht=re+me+Ie,Je=re+me+Ke,I=re+U+Ke;xe(F,ht,Je,I)}}}function ue(j,re,ae){l.push(j),l.push(re),l.push(ae)}function ke(j,re,ae){Ae(j),Ae(re),Ae(ae);let U=r.length/3,me=S.generateTopUV(n,r,U-3,U-2,U-1);Le(me[0]),Le(me[1]),Le(me[2])}function xe(j,re,ae,U){Ae(j),Ae(re),Ae(U),Ae(re),Ae(ae),Ae(U);let me=r.length/3,We=S.generateSideWallUV(n,r,me-6,me-3,me-2,me-1);Le(We[0]),Le(We[1]),Le(We[3]),Le(We[1]),Le(We[2]),Le(We[3])}function Ae(j){r.push(l[j*3+0]),r.push(l[j*3+1]),r.push(l[j*3+2])}function Le(j){s.push(j.x),s.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return iS(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Sh[r.type]().fromJSON(r)),new i(n,e.options)}},nS={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],h=e[r*3+1];return[new fe(s,o),new fe(a,l),new fe(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[r*3],f=e[r*3+1],m=e[r*3+2],_=e[s*3],p=e[s*3+1],g=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new fe(o,1-l),new fe(c,1-d),new fe(u,1-m),new fe(_,1-g)]:[new fe(a,1-l),new fe(h,1-d),new fe(f,1-m),new fe(p,1-g)]}};function iS(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Gi=class i extends kn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,d=e/a,u=t/l,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let S=g*u-o;for(let b=0;b<c;b++){let x=b*d-s;m.push(x,-S,0),_.push(0,0,1),p.push(b/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<a;S++){let b=S+c*g,x=S+c*(g+1),M=S+1+c*(g+1),T=S+1+c*g;f.push(b,x,T),f.push(x,M,T)}this.setIndex(f),this.setAttribute("position",new It(m,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var pl=class i extends kn{constructor(e=new ks([new fe(0,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new It(r,3)),this.setAttribute("normal",new It(s,3)),this.setAttribute("uv",new It(o,2));function c(h){let d=r.length/3,u=h.extractPoints(t),f=u.shape,m=u.holes;nr.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,g=m.length;p<g;p++){let S=m[p];nr.isClockWise(S)===!0&&(m[p]=S.reverse())}let _=nr.triangulateShape(f,m);for(let p=0,g=m.length;p<g;p++){let S=m[p];f=f.concat(S)}for(let p=0,g=f.length;p<g;p++){let S=f[p];r.push(S.x,S.y,0),s.push(0,0,1),o.push(S.x,S.y)}for(let p=0,g=_.length;p<g;p++){let S=_[p],b=S[0]+d,x=S[1]+d,M=S[2]+d;n.push(b,x,M),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return rS(t,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];n.push(o)}return new i(n,e.curveSegments)}};function rS(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}var ml=class i extends kn{constructor(e=new zs(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new O,l=new O,c=new fe,h=new O,d=[],u=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new It(d,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(f,2));function _(){for(let b=0;b<t;b++)p(b);p(s===!1?t:0),S(),g()}function p(b){h=e.getPointAt(b/t,h);let x=o.normals[b],M=o.binormals[b];for(let T=0;T<=r;T++){let A=T/r*Math.PI*2,v=Math.sin(A),w=-Math.cos(A);l.x=w*x.x+v*M.x,l.y=w*x.y+v*M.y,l.z=w*x.z+v*M.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let b=1;b<=t;b++)for(let x=1;x<=r;x++){let M=(r+1)*(b-1)+(x-1),T=(r+1)*b+(x-1),A=(r+1)*b+x,v=(r+1)*(b-1)+x;m.push(M,T,v),m.push(T,A,v)}}function S(){for(let b=0;b<=t;b++)for(let x=0;x<=r;x++)c.x=b/t,c.y=x/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Sh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ys(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(h0(r))r.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(h0(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Vn(i){let e={};for(let t=0;t<i.length;t++){let n=Ys(i[t]);for(let r in n)e[r]=n[r]}return e}function h0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function sS(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ap(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var Rr={clone:Ys,merge:Vn},oS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wt=class extends Qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oS,this.fragmentShader=aS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=sS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new je().setHex(r.value);break;case"v2":this.uniforms[n].value=new fe().fromArray(r.value);break;case"v3":this.uniforms[n].value=new O().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Bt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new it().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ft().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Yo=class extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qo=class extends Qr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bu,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gs=class extends qo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var bh=class extends Qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Th=class extends Qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Do(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Id(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var es=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wh=class extends es{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nd,endingEnd:Nd}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ud:s=e,a=2*t-n;break;case Od:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ud:o=e,l=2*n-t;break;case Od:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-t)/(r-t),_=m*m,p=_*m,g=-u*p+2*u*_-u*m,S=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*m+1,b=(-1-f)*p+(1.5+f)*_+.5*m,x=f*p-f*_;for(let M=0;M!==a;++M)s[M]=g*o[h+M]+S*o[c+M]+b*o[l+M]+x*o[d+M];return s}},Eh=class extends es{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(r-t),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},Ah=class extends es{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ch=class extends es{interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-t)/(r-t),_=1-m;for(let p=0;p!==a;++p)s[p]=o[c+p]*_+o[l+p]*m;return s}let u=a*2,f=e-1;for(let m=0;m!==a;++m){let _=o[c+m],p=o[l+m],g=f*u+m*2,S=d[g],b=d[g+1],x=e*u+m*2,M=h[x],T=h[x+1],A=cS(n,t,S,M,r);s[m]=s_(A,_,b,T,p)}return s}};function s_(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function lS(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function cS(i,e,t,n,r){let s=(i-e)/(r-e);for(let o=0;o<8;o++){let a=s_(s,e,t,n,r)-i;if(Math.abs(a)<1e-10)break;let l=lS(s,e,t,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var xi=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Do(t,this.TimeBufferType),this.values=Do(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Do(e.times,Array),values:Do(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Id(e.settings)&&(n.settings={inTangents:Do(e.settings.inTangents,Array),outTangents:Do(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Eh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ch(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qa:t=this.InterpolantFactoryMethodDiscrete;break;case hh:t=this.InterpolantFactoryMethodLinear;break;case jc:t=this.InterpolantFactoryMethodSmooth;break;case Dd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return et("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qa;case this.InterpolantFactoryMethodLinear:return hh;case this.InterpolantFactoryMethodSmooth:return jc;case this.InterpolantFactoryMethodBezier:return Dd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Id(this.settings)&&(u0(this.settings.inTangents,e),u0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(tt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){tt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){tt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&fy(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){tt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===jc,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let _=t[d+m];if(_!==t[u+m]||_!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Id(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function u0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}xi.prototype.ValueTypeName="";xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=hh;var ts=class extends xi{constructor(e,t,n){super(e,t,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=qa;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Rh=class extends xi{constructor(e,t,n,r){super(e,t,n,r)}};Rh.prototype.ValueTypeName="color";var Ph=class extends xi{constructor(e,t,n,r){super(e,t,n,r)}};Ph.prototype.ValueTypeName="number";var Ih=class extends es{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let h=c+a;c!==h;c+=4)sr.slerpFlat(s,0,o,c-a,o,c,l);return s}},gl=class extends xi{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ih(this.times,this.values,this.getValueSize(),e)}};gl.prototype.ValueTypeName="quaternion";gl.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends xi{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=qa;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Lh=class extends xi{constructor(e,t,n,r){super(e,t,n,r)}};Lh.prototype.ValueTypeName="vector";var Dh=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},o_=new Dh,Nh=class{constructor(e){this.manager=e!==void 0?e:o_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Nh.DEFAULT_MATERIAL_NAME="__DEFAULT";var _l=class extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Ld=new Ft,f0=new O,d0=new O,xl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ho,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;f0.setFromMatrixPosition(e.matrixWorld),t.position.copy(f0),d0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(d0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Ld.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ld,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Bo||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Ld)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Kc=new O,Qc=new sr,er=new O,vl=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Kc,Qc,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kc,Qc,er.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Kc,Qc,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kc,Qc,er.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$r=new O,p0=new fe,m0=new fe,vn=class extends vl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ka*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ad*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ka*2*Math.atan(Math.tan(ad*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($r.x,$r.y).multiplyScalar(-e/$r.z),$r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($r.x,$r.y).multiplyScalar(-e/$r.z)}getViewSize(e,t){return this.getViewBounds(e,p0,m0),t.subVectors(m0,p0)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ad*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},kd=class extends xl{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ka*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},yl=class extends _l{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new kd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var is=class extends vl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vd=class extends xl{constructor(){super(new is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zo=class extends _l{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new Vd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var No=-90,Uo=1,Uh=class extends hn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new vn(No,Uo,e,t);r.layers=this.layers,this.add(r);let s=new vn(No,Uo,e,t);s.layers=this.layers,this.add(s);let o=new vn(No,Uo,e,t);o.layers=this.layers,this.add(o);let a=new vn(No,Uo,e,t);a.layers=this.layers,this.add(a);let l=new vn(No,Uo,e,t);l.layers=this.layers,this.add(l);let c=new vn(No,Uo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Oh=class extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Sl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=hS.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function hS(){this._document.hidden===!1&&this.reset()}var lp="\\[\\]\\.:\\/",uS=new RegExp("["+lp+"]","g"),cp="[^"+lp+"]",fS="[^"+lp.replace("\\.","")+"]",dS=/((?:WC+[\/:])*)/.source.replace("WC",cp),pS=/(WCOD+)?/.source.replace("WCOD",fS),mS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cp),gS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cp),_S=new RegExp("^"+dS+pS+mS+gS+"$"),xS=["material","materials","bones","map"],Gd=class{constructor(e,t,n){let r=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(uS,"")}static parseTrackName(e){let t=_S.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);xS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){et("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;tt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=Gd;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sE=new Float32Array(1);var mp=class mp{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};mp.prototype.isMatrix2=!0;var Hd=mp;function hp(i,e,t,n){let r=vS(n);switch(t){case tp:return i*e;case ip:return i*e/r.components*r.byteLength;case Wh:return i*e/r.components*r.byteLength;case cs:return i*e*2/r.components*r.byteLength;case Xh:return i*e*2/r.components*r.byteLength;case np:return i*e*3/r.components*r.byteLength;case Di:return i*e*4/r.components*r.byteLength;case Yh:return i*e*4/r.components*r.byteLength;case Il:case Ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Dl:case Nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zh:case $h:return Math.max(i,16)*Math.max(e,8)/4;case qh:case Jh:return Math.max(i,8)*Math.max(e,8)/2;case Kh:case Qh:case eu:case tu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jh:case Ul:case nu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case iu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ru:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case su:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ou:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case au:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case lu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case cu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case hu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case uu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case fu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case du:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case pu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case mu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case gu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _u:case xu:case vu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case yu:case Su:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ol:case Mu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vS(i){switch(i){case oi:case Kd:return{byteLength:1,components:1};case $o:case Qd:case un:return{byteLength:2,components:1};case Gh:case Hh:return{byteLength:2,components:4};case Wi:case Vh:case Xi:return{byteLength:4,components:1};case jd:case ep:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function C_(){let i=null,e=!1,t=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function SS(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let _=d[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var MS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bS=`#ifdef USE_ALPHAHASH
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
#endif`,TS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ES=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CS=`#ifdef USE_AOMAP
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
#endif`,RS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PS=`#ifdef USE_BATCHING
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
#endif`,IS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,US=`#ifdef USE_IRIDESCENCE
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
#endif`,OS=`#ifdef USE_BUMPMAP
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
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,GS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,HS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,WS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,XS=`#define PI 3.141592653589793
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
} // validated`,YS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qS=`vec3 transformedNormal = objectNormal;
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
#endif`,ZS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$S=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QS="gl_FragColor = linearToOutputTexel( gl_FragColor );",jS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eM=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rM=`#ifdef USE_ENVMAP
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
#endif`,sM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cM=`#ifdef USE_GRADIENTMAP
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
}`,hM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,pM=`#ifdef USE_ENVMAP
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
#endif`,mM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vM=`PhysicalMaterial material;
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
#endif`,yM=`uniform sampler2D dfgLUT;
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
}`,SM=`
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
#endif`,MM=`#if defined( RE_IndirectDiffuse )
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
#endif`,bM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,wM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LM=`#if defined( USE_POINTS_UV )
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
#endif`,DM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BM=`#ifdef USE_MORPHTARGETS
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
#endif`,zM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,VM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,XM=`#ifdef USE_NORMALMAP
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
#endif`,YM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$M=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,QM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ib=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ab=`float getShadowMask() {
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
}`,lb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cb=`#ifdef USE_SKINNING
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
#endif`,hb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ub=`#ifdef USE_SKINNING
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
#endif`,fb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,db=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gb=`#ifdef USE_TRANSMISSION
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
#endif`,_b=`#ifdef USE_TRANSMISSION
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
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bb=`uniform sampler2D t2D;
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
}`,Tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ab=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`#include <common>
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
}`,Rb=`#if DEPTH_PACKING == 3200
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
}`,Pb=`#define DISTANCE
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
}`,Ib=`#define DISTANCE
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
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Db=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`uniform float scale;
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
}`,Ub=`uniform vec3 diffuse;
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
}`,Ob=`#include <common>
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Bb=`#define LAMBERT
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
}`,zb=`#define LAMBERT
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
}`,kb=`#define MATCAP
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
}`,Vb=`#define MATCAP
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
}`,Gb=`#define NORMAL
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
}`,Hb=`#define NORMAL
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
}`,Wb=`#define PHONG
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
}`,Xb=`#define PHONG
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
}`,Yb=`#define STANDARD
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
}`,qb=`#define STANDARD
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
}`,Zb=`#define TOON
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
}`,Jb=`#define TOON
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
}`,$b=`uniform float size;
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
}`,Kb=`uniform vec3 diffuse;
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
}`,Qb=`#include <common>
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
}`,jb=`uniform vec3 color;
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
}`,e1=`uniform float rotation;
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
}`,t1=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:MS,alphahash_pars_fragment:bS,alphamap_fragment:TS,alphamap_pars_fragment:wS,alphatest_fragment:ES,alphatest_pars_fragment:AS,aomap_fragment:CS,aomap_pars_fragment:RS,batching_pars_vertex:PS,batching_vertex:IS,begin_vertex:LS,beginnormal_vertex:DS,bsdfs:NS,iridescence_fragment:US,bumpmap_pars_fragment:OS,clipping_planes_fragment:FS,clipping_planes_pars_fragment:BS,clipping_planes_pars_vertex:zS,clipping_planes_vertex:kS,color_fragment:VS,color_pars_fragment:GS,color_pars_vertex:HS,color_vertex:WS,common:XS,cube_uv_reflection_fragment:YS,defaultnormal_vertex:qS,displacementmap_pars_vertex:ZS,displacementmap_vertex:JS,emissivemap_fragment:$S,emissivemap_pars_fragment:KS,colorspace_fragment:QS,colorspace_pars_fragment:jS,envmap_fragment:eM,envmap_common_pars_fragment:tM,envmap_pars_fragment:nM,envmap_pars_vertex:iM,envmap_physical_pars_fragment:pM,envmap_vertex:rM,fog_vertex:sM,fog_pars_vertex:oM,fog_fragment:aM,fog_pars_fragment:lM,gradientmap_pars_fragment:cM,lightmap_pars_fragment:hM,lights_lambert_fragment:uM,lights_lambert_pars_fragment:fM,lights_pars_begin:dM,lights_toon_fragment:mM,lights_toon_pars_fragment:gM,lights_phong_fragment:_M,lights_phong_pars_fragment:xM,lights_physical_fragment:vM,lights_physical_pars_fragment:yM,lights_fragment_begin:SM,lights_fragment_maps:MM,lights_fragment_end:bM,lightprobes_pars_fragment:TM,logdepthbuf_fragment:wM,logdepthbuf_pars_fragment:EM,logdepthbuf_pars_vertex:AM,logdepthbuf_vertex:CM,map_fragment:RM,map_pars_fragment:PM,map_particle_fragment:IM,map_particle_pars_fragment:LM,metalnessmap_fragment:DM,metalnessmap_pars_fragment:NM,morphinstance_vertex:UM,morphcolor_vertex:OM,morphnormal_vertex:FM,morphtarget_pars_vertex:BM,morphtarget_vertex:zM,normal_fragment_begin:kM,normal_fragment_maps:VM,normal_pars_fragment:GM,normal_pars_vertex:HM,normal_vertex:WM,normalmap_pars_fragment:XM,clearcoat_normal_fragment_begin:YM,clearcoat_normal_fragment_maps:qM,clearcoat_pars_fragment:ZM,iridescence_pars_fragment:JM,opaque_fragment:$M,packing:KM,premultiplied_alpha_fragment:QM,project_vertex:jM,dithering_fragment:eb,dithering_pars_fragment:tb,roughnessmap_fragment:nb,roughnessmap_pars_fragment:ib,shadowmap_pars_fragment:rb,shadowmap_pars_vertex:sb,shadowmap_vertex:ob,shadowmask_pars_fragment:ab,skinbase_vertex:lb,skinning_pars_vertex:cb,skinning_vertex:hb,skinnormal_vertex:ub,specularmap_fragment:fb,specularmap_pars_fragment:db,tonemapping_fragment:pb,tonemapping_pars_fragment:mb,transmission_fragment:gb,transmission_pars_fragment:_b,uv_pars_fragment:xb,uv_pars_vertex:vb,uv_vertex:yb,worldpos_vertex:Sb,background_vert:Mb,background_frag:bb,backgroundCube_vert:Tb,backgroundCube_frag:wb,cube_vert:Eb,cube_frag:Ab,depth_vert:Cb,depth_frag:Rb,distance_vert:Pb,distance_frag:Ib,equirect_vert:Lb,equirect_frag:Db,linedashed_vert:Nb,linedashed_frag:Ub,meshbasic_vert:Ob,meshbasic_frag:Fb,meshlambert_vert:Bb,meshlambert_frag:zb,meshmatcap_vert:kb,meshmatcap_frag:Vb,meshnormal_vert:Gb,meshnormal_frag:Hb,meshphong_vert:Wb,meshphong_frag:Xb,meshphysical_vert:Yb,meshphysical_frag:qb,meshtoon_vert:Zb,meshtoon_frag:Jb,points_vert:$b,points_frag:Kb,shadow_vert:Qb,shadow_frag:jb,sprite_vert:e1,sprite_frag:t1},Ce={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},lr={basic:{uniforms:Vn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Vn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Vn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Vn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Vn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new je(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Vn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Vn([Ce.points,Ce.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Vn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Vn([Ce.common,Ce.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Vn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Vn([Ce.sprite,Ce.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:Vn([Ce.common,Ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:Vn([Ce.lights,Ce.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};lr.physical={uniforms:Vn([lr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var Eu={r:0,b:0,g:0},n1=new Ft,R_=new it;R_.set(-1,0,0,0,1,0,0,0,1);function i1(i,e,t,n,r,s){let o=new je(0),a=r===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let b=S.isScene===!0?S.background:null;if(b&&b.isTexture){let x=S.backgroundBlurriness>0;b=e.get(b,x)}return b}function m(S){let b=!1,x=f(S);x===null?p(o,a):x&&x.isColor&&(p(x,1),b=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,b){let x=f(b);x&&(x.isCubeTexture||x.mapping===Rl)?(c===void 0&&(c=new rt(new or(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:Ys(lr.backgroundCube.uniforms),vertexShader:lr.backgroundCube.vertexShader,fragmentShader:lr.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(n1.makeRotationFromEuler(b.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(R_),c.material.toneMapped=dt.getTransfer(x.colorSpace)!==vt,(h!==x||d!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new rt(new Gi(2,2),new Wt({name:"BackgroundMaterial",uniforms:Ys(lr.background.uniforms),vertexShader:lr.background.vertexShader,fragmentShader:lr.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=dt.getTransfer(x.colorSpace)!==vt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,b){S.getRGB(Eu,ap(i)),t.buffers.color.setClear(Eu.r,Eu.g,Eu.b,b,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,b=1){o.set(S),a=b,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,p(o,a)},render:m,addToRenderList:_,dispose:g}}function r1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null),s=r,o=!1;function a(D,L,G,P,N){let V=!1,B=d(D,P,G,L);s!==B&&(s=B,c(s.object)),V=f(D,P,G,N),V&&m(D,P,G,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,x(D,L,G,P),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,L,G,P){let N=P.wireframe===!0,V=n[L.id];V===void 0&&(V={},n[L.id]=V);let B=D.isInstancedMesh===!0?D.id:0,K=V[B];K===void 0&&(K={},V[B]=K);let W=K[G.id];W===void 0&&(W={},K[G.id]=W);let R=W[N];return R===void 0&&(R=u(l()),W[N]=R),R}function u(D){let L=[],G=[],P=[];for(let N=0;N<t;N++)L[N]=0,G[N]=0,P[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:P,object:D,attributes:{},index:null}}function f(D,L,G,P){let N=s.attributes,V=L.attributes,B=0,K=G.getAttributes();for(let W in K)if(K[W].location>=0){let X=N[W],ge=V[W];if(ge===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(ge=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(ge=D.instanceColor)),X===void 0||X.attribute!==ge||ge&&X.data!==ge.data)return!0;B++}return s.attributesNum!==B||s.index!==P}function m(D,L,G,P){let N={},V=L.attributes,B=0,K=G.getAttributes();for(let W in K)if(K[W].location>=0){let X=V[W];X===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(X=D.instanceColor));let ge={};ge.attribute=X,X&&X.data&&(ge.data=X.data),N[W]=ge,B++}s.attributes=N,s.attributesNum=B,s.index=P}function _(){let D=s.newAttributes;for(let L=0,G=D.length;L<G;L++)D[L]=0}function p(D){g(D,0)}function g(D,L){let G=s.newAttributes,P=s.enabledAttributes,N=s.attributeDivisors;G[D]=1,P[D]===0&&(i.enableVertexAttribArray(D),P[D]=1),N[D]!==L&&(i.vertexAttribDivisor(D,L),N[D]=L)}function S(){let D=s.newAttributes,L=s.enabledAttributes;for(let G=0,P=L.length;G<P;G++)L[G]!==D[G]&&(i.disableVertexAttribArray(G),L[G]=0)}function b(D,L,G,P,N,V,B){B===!0?i.vertexAttribIPointer(D,L,G,N,V):i.vertexAttribPointer(D,L,G,P,N,V)}function x(D,L,G,P){_();let N=P.attributes,V=G.getAttributes(),B=L.defaultAttributeValues;for(let K in V){let W=V[K];if(W.location>=0){let R=N[K];if(R===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(R=D.instanceColor)),R!==void 0){let X=R.normalized,ge=R.itemSize,de=e.get(R);if(de===void 0)continue;let ye=de.buffer,Pe=de.type,He=de.bytesPerElement,J=Pe===i.INT||Pe===i.UNSIGNED_INT||R.gpuType===Vh;if(R.isInterleavedBufferAttribute){let ee=R.data,ue=ee.stride,ke=R.offset;if(ee.isInstancedInterleavedBuffer){for(let xe=0;xe<W.locationSize;xe++)g(W.location+xe,ee.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let xe=0;xe<W.locationSize;xe++)p(W.location+xe);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let xe=0;xe<W.locationSize;xe++)b(W.location+xe,ge/W.locationSize,Pe,X,ue*He,(ke+ge/W.locationSize*xe)*He,J)}else{if(R.isInstancedBufferAttribute){for(let ee=0;ee<W.locationSize;ee++)g(W.location+ee,R.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let ee=0;ee<W.locationSize;ee++)p(W.location+ee);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let ee=0;ee<W.locationSize;ee++)b(W.location+ee,ge/W.locationSize,Pe,X,ge*He,ge/W.locationSize*ee*He,J)}}else if(B!==void 0){let X=B[K];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(W.location,X);break;case 3:i.vertexAttrib3fv(W.location,X);break;case 4:i.vertexAttrib4fv(W.location,X);break;default:i.vertexAttrib1fv(W.location,X)}}}}S()}function M(){w();for(let D in n){let L=n[D];for(let G in L){let P=L[G];for(let N in P){let V=P[N];for(let B in V)h(V[B].object),delete V[B];delete P[N]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let L=n[D.id];for(let G in L){let P=L[G];for(let N in P){let V=P[N];for(let B in V)h(V[B].object),delete V[B];delete P[N]}}delete n[D.id]}function A(D){for(let L in n){let G=n[L];for(let P in G){let N=G[P];if(N[D.id]===void 0)continue;let V=N[D.id];for(let B in V)h(V[B].object),delete V[B];delete N[D.id]}}}function v(D){for(let L in n){let G=n[L],P=D.isInstancedMesh===!0?D.id:0,N=G[P];if(N!==void 0){for(let V in N){let B=N[V];for(let K in B)h(B[K].object),delete B[K];delete N[V]}delete G[P],Object.keys(G).length===0&&delete n[L]}}}function w(){C(),o=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function s1(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function o1(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Di&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let v=A===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==oi&&A!==Xi&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(et("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:x,maxSamples:M,samples:T}}function a1(i){let e=this,t=null,n=0,r=!1,s=!1,o=new ki,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||r;return r=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=i.get(d);if(!r||m===null||m.length===0||s&&!p)s?h(null):c();else{let S=s?0:n,b=S*4,x=g.clippingState||null;l.value=x,x=h(m,u,b,f);for(let M=0;M!==b;++M)x[M]=t[M];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=f+_*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<g)&&(p=new Float32Array(g));for(let b=0,x=f;b!==_;++b,x+=4)o.copy(d[b]).applyMatrix4(S,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var ea=4,l1=6,c1=20,h1=256,Fl=new is,a_=new je,gp=null,_p=0,xp=0,vp=!1,u1=new O,qs=new O,na=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=u1}=s;gp=this._renderer.getRenderTarget(),_p=this._renderer.getActiveCubeFace(),xp=this._renderer.getActiveMipmapLevel(),vp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=h_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gp,_p,xp),this._renderer.xr.enabled=vp,e.scissorTest=!1,jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gp=this._renderer.getRenderTarget(),_p=this._renderer.getActiveCubeFace(),xp=this._renderer.getActiveMipmapLevel(),vp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:un,format:Di,colorSpace:Za,depthBuffer:!1},r=l_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=l_(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=f1(s)),this._blurMaterial=p1(s,e,t),this._ggxMaterial=d1(s,e,t)}return r}_compileMaterial(e){let t=new rt(new kn,e);this._renderer.compile(t,Fl)}_sceneToCubeUV(e,t,n,r,s){let l=new vn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(a_),d.toneMapping=Hi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rt(new or,new Sn({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,g=!1,S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,g=!0):(p.color.copy(a_),g=!0);for(let b=0;b<6;b++){let x=b%3;x===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[b],s.y,s.z)):x===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[b]));let M=this._cubeSize;jo(r,x*M,b>2?M:0,M,M),d.setRenderTarget(r),g&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===os||e.mapping===Xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=h_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=c_());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;jo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Fl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-ea?n-m+ea:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,jo(s,p,g,3*_,2*_),r.setRenderTarget(s),r.render(a,Fl),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,jo(e,p,g,3*_,2*_),r.setRenderTarget(e),r.render(a,Fl)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,o),this._blurPass(s,e,n,n,o)}_blurPass(e,t,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],d=3*h*(r>this._lodMax-ea?r-this._lodMax+ea:0),u=4*(this._cubeSize-h);jo(t,d,u,3*h,2*h),o.setRenderTarget(t),o.render(l,Fl)}};function f1(i){let e=[],t=[],n=i,r=i-ea+1+l1;for(let s=0;s<r;s++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let g=0;g<d;g++){let S=g%3*2/3-1,b=g>2?0:-1,x=[S,b,0,S+2/3,b,0,S+2/3,b+1,0,S,b,0,S+2/3,b+1,0,S,b+1,0];m.set(x,f*u*g);for(let M=0;M<u;M++){let T=h[M*2]*2-1,A=h[M*2+1]*2-1;g===0?qs.set(1,A,T):g===1?qs.set(-T,1,-A):g===2?qs.set(-T,A,1):g===3?qs.set(-1,A,-T):g===4?qs.set(-T,-1,A):qs.set(T,A,-1),qs.toArray(_,(g*u+M)*f)}}let p=new kn;p.setAttribute("position",new Ii(m,f)),p.setAttribute("outputDirection",new Ii(_,f)),t.push(new rt(p,null)),n>ea&&n--}return{lodMeshes:t,sizeLods:e}}function l_(i,e,t){let n=new Jt(i,e,t);return n.texture.mapping=Rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function d1(i,e,t){return new Wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:h1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function p1(i,e,t){return new Wt({name:"SphericalGaussianBlur",defines:{SAMPLES:c1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function c_(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function h_(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Pu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Cu=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new nl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new or(5,5,5),s=new Wt({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:Li});s.uniforms.tEquirect.value=t;let o=new rt(r,s),a=t.minFilter;return t.minFilter===as&&(t.minFilter=wn),new Uh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};function m1(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===Bh||f===zh)if(e.has(u)){let m=e.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let _=new Cu(m.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,m=f===Bh||f===zh,_=f===os||f===Xs;if(m||_){let p=t.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new na(i)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let S=u.image;return m&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new na(i)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===Bh?u.mapping=os:f===zh&&(u.mapping=Xs),u}function l(u){let f=0,m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function g1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Os("WebGLRenderer: "+n+" extension not supported."),r}}}function _1(i,e,t,n){let r={},s=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete r[u.id];let f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,_=0;if(m===void 0)return;if(f!==null){let S=f.array;_=f.version;for(let b=0,x=S.length;b<x;b+=3){let M=S[b+0],T=S[b+1],A=S[b+2];u.push(M,T,T,A,A,M)}}else{let S=m.array;_=m.version;for(let b=0,x=S.length/3-1;b<x;b+=3){let M=b+0,T=b+1,A=b+2;u.push(M,T,T,A,A,M)}}let p=new(m.count>=65535?tl:el)(u,1);p.version=_;let g=s.get(d);g&&e.remove(g),s.set(d,p)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function x1(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,s,d*o),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,s,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];t.update(_,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function v1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:tt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function y1(i,e,t){let n=new WeakMap,r=new Bt;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],b=0;f===!0&&(b=1),m===!0&&(b=2),_===!0&&(b=3);let x=a.attributes.position.count*b,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*M*4*d),A=new Qa(T,x,M,d);A.type=Xi,A.needsUpdate=!0;let v=b*4;for(let C=0;C<d;C++){let D=p[C],L=g[C],G=S[C],P=x*M*4*C;for(let N=0;N<D.count;N++){let V=N*v;f===!0&&(r.fromBufferAttribute(D,N),T[P+V+0]=r.x,T[P+V+1]=r.y,T[P+V+2]=r.z,T[P+V+3]=0),m===!0&&(r.fromBufferAttribute(L,N),T[P+V+4]=r.x,T[P+V+5]=r.y,T[P+V+6]=r.z,T[P+V+7]=0),_===!0&&(r.fromBufferAttribute(G,N),T[P+V+8]=r.x,T[P+V+9]=r.y,T[P+V+10]=r.z,T[P+V+11]=G.itemSize===4?r.w:1)}}u={count:d,texture:A,size:new fe(x,M)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function S1(i,e,t,n,r){let s=new WeakMap;function o(c){let h=r.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var M1={[bl]:"LINEAR_TONE_MAPPING",[Tl]:"REINHARD_TONE_MAPPING",[wl]:"CINEON_TONE_MAPPING",[El]:"ACES_FILMIC_TONE_MAPPING",[Cl]:"AGX_TONE_MAPPING",[Ws]:"NEUTRAL_TONE_MAPPING",[Al]:"CUSTOM_TONE_MAPPING"};function b1(i,e,t,n,r,s){let o=new Jt(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new kn;c.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new It([0,2,0,0,2,0],2));let h=new Yo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new rt(c,h),u=new is(-1,1,1,-1,0,1),f=null,m=null,_=!1,p,g=null,S=[],b=!1;this.setSize=function(x,M){o.setSize(x,M),a!==null&&a.setSize(x,M),l!==null&&l.setSize(x,M);for(let T=0;T<S.length;T++){let A=S[T];A.setSize&&A.setSize(x,M)}},this.setEffects=function(x){S=x,b=S.length>0&&S[0].isRenderPass===!0;let M=o.width,T=o.height;S.length>0&&a===null&&(a=new Jt(M,T,{type:un,depthBuffer:!1,stencilBuffer:!1}),l=new Jt(M,T,{type:un,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<S.length;A++){let v=S[A];v.setSize&&v.setSize(M,T)}},this.begin=function(x,M){if(_||x.toneMapping===Hi&&S.length===0)return!1;if(g=M,M!==null){let T=M.width,A=M.height;(o.width!==T||o.height!==A)&&this.setSize(T,A)}return b===!1&&x.setRenderTarget(o),p=x.toneMapping,x.toneMapping=Hi,!0},this.hasRenderPass=function(){return b},this.end=function(x,M){x.toneMapping=p,_=!0;let T=o,A=a;for(let v=0;v<S.length;v++){let w=S[v];w.enabled!==!1&&(w.render(x,A,T,M),w.needsSwap!==!1&&(T=A,A=A===a?l:a))}if(f!==x.outputColorSpace||m!==x.toneMapping){f=x.outputColorSpace,m=x.toneMapping,h.defines={},dt.getTransfer(f)===vt&&(h.defines.SRGB_TRANSFER="");let v=M1[m];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(g),x.render(d,u),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var P_=new jn,Mp=new jr(1,1),I_=new Qa,L_=new dh,D_=new nl,u_=[],f_=[],d_=new Float32Array(16),p_=new Float32Array(9),m_=new Float32Array(4);function ia(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=u_[r];if(s===void 0&&(s=new Float32Array(r),u_[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function fn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Iu(i,e){let t=f_[e];t===void 0&&(t=new Int32Array(e),f_[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function T1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function w1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2fv(this.addr,e),dn(t,e)}}function E1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;i.uniform3fv(this.addr,e),dn(t,e)}}function A1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4fv(this.addr,e),dn(t,e)}}function C1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;m_.set(n),i.uniformMatrix2fv(this.addr,!1,m_),dn(t,n)}}function R1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;p_.set(n),i.uniformMatrix3fv(this.addr,!1,p_),dn(t,n)}}function P1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;d_.set(n),i.uniformMatrix4fv(this.addr,!1,d_),dn(t,n)}}function I1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function L1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2iv(this.addr,e),dn(t,e)}}function D1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3iv(this.addr,e),dn(t,e)}}function N1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4iv(this.addr,e),dn(t,e)}}function U1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function O1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2uiv(this.addr,e),dn(t,e)}}function F1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3uiv(this.addr,e),dn(t,e)}}function B1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4uiv(this.addr,e),dn(t,e)}}function z1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Mp.compareFunction=t.isReversedDepthBuffer()?wu:Tu,s=Mp):s=P_,t.setTexture2D(e||s,r)}function k1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||L_,r)}function V1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||D_,r)}function G1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||I_,r)}function H1(i){switch(i){case 5126:return T1;case 35664:return w1;case 35665:return E1;case 35666:return A1;case 35674:return C1;case 35675:return R1;case 35676:return P1;case 5124:case 35670:return I1;case 35667:case 35671:return L1;case 35668:case 35672:return D1;case 35669:case 35673:return N1;case 5125:return U1;case 36294:return O1;case 36295:return F1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return k1;case 35680:case 36300:case 36308:case 36293:return V1;case 36289:case 36303:case 36311:case 36292:return G1}}function W1(i,e){i.uniform1fv(this.addr,e)}function X1(i,e){let t=ia(e,this.size,2);i.uniform2fv(this.addr,t)}function Y1(i,e){let t=ia(e,this.size,3);i.uniform3fv(this.addr,t)}function q1(i,e){let t=ia(e,this.size,4);i.uniform4fv(this.addr,t)}function Z1(i,e){let t=ia(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function J1(i,e){let t=ia(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $1(i,e){let t=ia(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function K1(i,e){i.uniform1iv(this.addr,e)}function Q1(i,e){i.uniform2iv(this.addr,e)}function j1(i,e){i.uniform3iv(this.addr,e)}function eT(i,e){i.uniform4iv(this.addr,e)}function tT(i,e){i.uniform1uiv(this.addr,e)}function nT(i,e){i.uniform2uiv(this.addr,e)}function iT(i,e){i.uniform3uiv(this.addr,e)}function rT(i,e){i.uniform4uiv(this.addr,e)}function sT(i,e,t){let n=this.cache,r=e.length,s=Iu(t,r);fn(n,s)||(i.uniform1iv(this.addr,s),dn(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Mp:o=P_;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function oT(i,e,t){let n=this.cache,r=e.length,s=Iu(t,r);fn(n,s)||(i.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||L_,s[o])}function aT(i,e,t){let n=this.cache,r=e.length,s=Iu(t,r);fn(n,s)||(i.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||D_,s[o])}function lT(i,e,t){let n=this.cache,r=e.length,s=Iu(t,r);fn(n,s)||(i.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||I_,s[o])}function cT(i){switch(i){case 5126:return W1;case 35664:return X1;case 35665:return Y1;case 35666:return q1;case 35674:return Z1;case 35675:return J1;case 35676:return $1;case 5124:case 35670:return K1;case 35667:case 35671:return Q1;case 35668:case 35672:return j1;case 35669:case 35673:return eT;case 5125:return tT;case 36294:return nT;case 36295:return iT;case 36296:return rT;case 35678:case 36198:case 36298:case 36306:case 35682:return sT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return aT;case 36289:case 36303:case 36311:case 36292:return lT}}var bp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=H1(t.type)}},Tp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cT(t.type)}},wp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},yp=/(\w+)(\])?(\[|\.)?/g;function g_(i,e){i.seq.push(e),i.map[e.id]=e}function hT(i,e,t){let n=i.name,r=n.length;for(yp.lastIndex=0;;){let s=yp.exec(n),o=yp.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){g_(t,c===void 0?new bp(a,i,e):new Tp(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new wp(a),g_(t,d)),t=d}}}var ta=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);hT(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function __(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var uT=37297,fT=0;function dT(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var x_=new it;function pT(i){dt._getMatrix(x_,dt.workingColorSpace,i);let e=`mat3( ${x_.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case Ja:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function v_(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+dT(i.getShaderSource(e),a)}else return s}function mT(i,e){let t=pT(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var gT={[bl]:"Linear",[Tl]:"Reinhard",[wl]:"Cineon",[El]:"ACESFilmic",[Cl]:"AgX",[Ws]:"Neutral",[Al]:"Custom"};function _T(i,e){let t=gT[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Au=new O;function xT(){dt.getLuminanceCoefficients(Au);let i=Au.x.toFixed(4),e=Au.y.toFixed(4),t=Au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vT(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zl).join(`
`)}function yT(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ST(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function zl(i){return i!==""}function y_(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function S_(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var MT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ep(i){return i.replace(MT,TT)}var bT=new Map;function TT(i,e){let t=ot[e];if(t===void 0){let n=bT.get(e);if(n!==void 0)t=ot[n],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ep(t)}var wT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function M_(i){return i.replace(wT,ET)}function ET(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function b_(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var AT={[Ml]:"SHADOWMAP_TYPE_PCF",[Jo]:"SHADOWMAP_TYPE_VSM"};function CT(i){return AT[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var RT={[os]:"ENVMAP_TYPE_CUBE",[Xs]:"ENVMAP_TYPE_CUBE",[Rl]:"ENVMAP_TYPE_CUBE_UV"};function PT(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":RT[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var IT={[Xs]:"ENVMAP_MODE_REFRACTION"};function LT(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":IT[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var DT={[Jd]:"ENVMAP_BLENDING_MULTIPLY",[F0]:"ENVMAP_BLENDING_MIX",[B0]:"ENVMAP_BLENDING_ADD"};function NT(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":DT[i.combine]||"ENVMAP_BLENDING_NONE"}function UT(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function OT(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=CT(t),c=PT(t),h=LT(t),d=NT(t),u=UT(t),f=vT(t),m=yT(s),_=r.createProgram(),p,g,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(zl).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(zl).join(`
`),g.length>0&&(g+=`
`)):(p=[b_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zl).join(`
`),g=[b_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?ot.tonemapping_pars_fragment:"",t.toneMapping!==Hi?_T("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,mT("linearToOutputTexel",t.outputColorSpace),xT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zl).join(`
`)),o=Ep(o),o=y_(o,t),o=S_(o,t),a=Ep(a),a=y_(a,t),a=S_(a,t),o=M_(o),a=M_(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=S+p+o,x=S+g+a,M=__(r,r.VERTEX_SHADER,b),T=__(r,r.FRAGMENT_SHADER,x);r.attachShader(_,M),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(D){if(i.debug.checkShaderErrors){let L=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(M)||"",P=r.getShaderInfoLog(T)||"",N=L.trim(),V=G.trim(),B=P.trim(),K=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,M,T);else{let R=v_(r,M,"vertex"),X=v_(r,T,"fragment");tt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+R+`
`+X)}else N!==""?et("WebGLProgram: Program Info Log:",N):(V===""||B==="")&&(W=!1);W&&(D.diagnostics={runnable:K,programLog:N,vertexShader:{log:V,prefix:p},fragmentShader:{log:B,prefix:g}})}r.deleteShader(M),r.deleteShader(T),v=new ta(r,_),w=ST(r,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(_,uT)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=T,this}var FT=0,Ap=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cp(e),t.set(e,n)),n}},Cp=class{constructor(e){this.id=FT++,this.code=e,this.usedTimes=0}};function BT(i){return i===cs||i===Ul||i===Ol}function zT(i,e,t,n,r,s){let o=new ja,a=new Ap,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,w,C,D,L,G){let P=D.fog,N=L.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,K=e.get(v.envMap||V,B),W=K&&K.mapping===Rl?K.image.height:null,R=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&et("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let X=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ge=X!==void 0?X.length:0,de=0;N.morphAttributes.position!==void 0&&(de=1),N.morphAttributes.normal!==void 0&&(de=2),N.morphAttributes.color!==void 0&&(de=3);let ye,Pe,He,J;if(R){let Ze=lr[R];ye=Ze.vertexShader,Pe=Ze.fragmentShader}else{ye=v.vertexShader,Pe=v.fragmentShader;let Ze=a.getVertexShaderStage(v),le=a.getFragmentShaderStage(v);a.update(v,Ze,le),He=Ze.id,J=le.id}let ee=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),ke=L.isInstancedMesh===!0,xe=L.isBatchedMesh===!0,Ae=!!v.map,Le=!!v.matcap,j=!!K,re=!!v.aoMap,ae=!!v.lightMap,U=!!v.bumpMap&&v.wireframe===!1,me=!!v.normalMap,We=!!v.displacementMap,Be=!!v.emissiveMap,Ie=!!v.metalnessMap,Ke=!!v.roughnessMap,F=v.anisotropy>0,ht=v.clearcoat>0,Je=v.dispersion>0,I=v.retroreflectivity>0,y=v.iridescence>0,H=v.sheen>0,Y=v.transmission>0,Q=F&&!!v.anisotropyMap,_e=ht&&!!v.clearcoatMap,ce=ht&&!!v.clearcoatNormalMap,te=ht&&!!v.clearcoatRoughnessMap,ie=y&&!!v.iridescenceMap,Me=y&&!!v.iridescenceThicknessMap,Fe=H&&!!v.sheenColorMap,be=H&&!!v.sheenRoughnessMap,Se=!!v.specularMap,pe=!!v.specularColorMap,Ye=!!v.specularIntensityMap,Qe=Y&&!!v.transmissionMap,z=Y&&!!v.thicknessMap,ve=!!v.gradientMap,ne=!!v.alphaMap,Te=v.alphaTest>0,Ee=!!v.alphaHash,se=!!v.extensions,he=Hi;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(he=i.toneMapping);let oe={shaderID:R,shaderType:v.type,shaderName:v.name,vertexShader:ye,fragmentShader:Pe,defines:v.defines,customVertexShaderID:He,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:xe,batchingColor:xe&&L._colorsTexture!==null,instancing:ke,instancingColor:ke&&L.instanceColor!==null,instancingMorph:ke&&L.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ae,matcap:Le,envMap:j,envMapMode:j&&K.mapping,envMapCubeUVHeight:W,aoMap:re,lightMap:ae,bumpMap:U,normalMap:me,displacementMap:We,emissiveMap:Be,normalMapObjectSpace:me&&v.normalMapType===V0,normalMapTangentSpace:me&&v.normalMapType===bu,packedNormalMap:me&&v.normalMapType===bu&&BT(v.normalMap.format),metalnessMap:Ie,roughnessMap:Ke,anisotropy:F,anisotropyMap:Q,clearcoat:ht,clearcoatMap:_e,clearcoatNormalMap:ce,clearcoatRoughnessMap:te,dispersion:Je,retroreflection:I,iridescence:y,iridescenceMap:ie,iridescenceThicknessMap:Me,sheen:H,sheenColorMap:Fe,sheenRoughnessMap:be,specularMap:Se,specularColorMap:pe,specularIntensityMap:Ye,transmission:Y,transmissionMap:Qe,thicknessMap:z,gradientMap:ve,opaque:v.transparent===!1&&v.blending===ss&&v.alphaToCoverage===!1,alphaMap:ne,alphaTest:Te,alphaHash:Ee,combine:v.combine,mapUv:Ae&&m(v.map.channel),aoMapUv:re&&m(v.aoMap.channel),lightMapUv:ae&&m(v.lightMap.channel),bumpMapUv:U&&m(v.bumpMap.channel),normalMapUv:me&&m(v.normalMap.channel),displacementMapUv:We&&m(v.displacementMap.channel),emissiveMapUv:Be&&m(v.emissiveMap.channel),metalnessMapUv:Ie&&m(v.metalnessMap.channel),roughnessMapUv:Ke&&m(v.roughnessMap.channel),anisotropyMapUv:Q&&m(v.anisotropyMap.channel),clearcoatMapUv:_e&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ce&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(v.sheenRoughnessMap.channel),specularMapUv:Se&&m(v.specularMap.channel),specularColorMapUv:pe&&m(v.specularColorMap.channel),specularIntensityMapUv:Ye&&m(v.specularIntensityMap.channel),transmissionMapUv:Qe&&m(v.transmissionMap.channel),thicknessMapUv:z&&m(v.thicknessMap.channel),alphaMapUv:ne&&m(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(me||F),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Ae||ne),fog:!!P,useFog:v.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&me===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ue,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:de,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:Ae&&v.map.isVideoTexture===!0&&dt.getTransfer(v.map.colorSpace)===vt,decodeVideoTextureEmissive:Be&&v.emissiveMap.isVideoTexture===!0&&dt.getTransfer(v.emissiveMap.colorSpace)===vt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===vi,flipSided:v.side===En,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:se&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&v.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return oe.vertexUv1s=l.has(1),oe.vertexUv2s=l.has(2),oe.vertexUv3s=l.has(3),l.clear(),oe}function p(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)w.push(C),w.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(g(w,v),S(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function g(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function b(v){let w=f[v.type],C;if(w){let D=lr[w];C=Rr.clone(D.uniforms)}else C=v.uniforms;return C}function x(v,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new OT(i,w,v,r),c.push(C),h.set(w,C)),C}function M(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:b,acquireProgram:x,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:A}}function kT(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function VT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function T_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function w_(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,_,p,g){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:g},i[e]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=m,S.materialVariant=o(u),S.groupOrder=_,S.renderOrder=u.renderOrder,S.z=p,S.group=g),e++,S}function l(u,f,m,_,p,g,S){S.reversedDepth===!0&&(p=-p);let b=a(u,f,m,_,p,g);m.transmission>0?n.push(b):m.transparent===!0?r.push(b):t.push(b)}function c(u,f,m,_,p,g){let S=a(u,f,m,_,p,g);m.transmission>0?n.unshift(S):m.transparent===!0?r.unshift(S):t.unshift(S)}function h(u,f){t.length>1&&t.sort(u||VT),n.length>1&&n.sort(f||T_),r.length>1&&r.sort(f||T_)}function d(){for(let u=e,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:h}}function GT(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new w_,i.set(n,[o])):r>=s.length?(o=new w_,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function HT(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new je};break;case"SpotLight":t={position:new O,direction:new O,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function WT(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var XT=0;function YT(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qT(i){let e=new HT,t=WT(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let r=new O,s=new Ft,o=new Ft;function a(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,S=0,b=0,x=0,M=0,T=0,A=0,v=0,w=0,C=0;c.sort(YT);for(let L=0,G=c.length;L<G;L++){let P=c[L],N=P.color,V=P.intensity,B=P.distance,K=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===cs?K=P.shadow.map.texture:K=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=N.r*V,d+=N.g*V,u+=N.b*V;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],V);C++}else if(P.isSunLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let R=P.shadow,X=t.get(P);X.shadowIntensity=R.intensity,X.shadowBias=R.bias,X.shadowNormalBias=R.normalBias,X.shadowRadius=R.radius,X.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[m]=X,n.sunShadowMap[m]=K;let ge=R.getViewportCount();for(let de=0;de<ge;de++)n.sunShadowMatrix[_+de]=R.getMatrix(de),n.sunShadowCascade[_+de]=R._cascadeData[de];_+=ge,m++}n.sun[f]=W,f++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let R=P.shadow,X=t.get(P);X.shadowIntensity=R.intensity,X.shadowBias=R.bias,X.shadowNormalBias=R.normalBias,X.shadowRadius=R.radius,X.shadowMapSize=R.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=P.shadow.matrix,M++}n.directional[p]=W,p++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(N).multiplyScalar(V),W.distance=B,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[S]=W;let R=P.shadow;if(P.map&&(n.spotLightMap[v]=P.map,v++,R.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[S]=R.matrix,P.castShadow){let X=t.get(P);X.shadowIntensity=R.intensity,X.shadowBias=R.bias,X.shadowNormalBias=R.normalBias,X.shadowRadius=R.radius,X.shadowMapSize=R.mapSize,n.spotShadow[S]=X,n.spotShadowMap[S]=K,A++}S++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(N).multiplyScalar(V),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[b]=W,b++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let R=P.shadow,X=t.get(P);X.shadowIntensity=R.intensity,X.shadowBias=R.bias,X.shadowNormalBias=R.normalBias,X.shadowRadius=R.radius,X.shadowMapSize=R.mapSize,X.shadowCameraNear=R.camera.near,X.shadowCameraFar=R.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=P.shadow.matrix,T++}n.point[g]=W,g++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(V),W.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[x]=W,x++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==g||D.spotLength!==S||D.rectAreaLength!==b||D.hemiLength!==x||D.numSunShadows!==m||D.numDirectionalShadows!==M||D.numPointShadows!==T||D.numSpotShadows!==A||D.numSpotMaps!==v||D.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=S,n.rectArea.length=b,n.point.length=g,n.hemi.length=x,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,D.sunLength=f,D.directionalLength=p,D.pointLength=g,D.spotLength=S,D.rectAreaLength=b,D.hemiLength=x,D.numSunShadows=m,D.numDirectionalShadows=M,D.numPointShadows=T,D.numSpotShadows=A,D.numSpotMaps=v,D.numLightProbes=C,n.version=XT++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let S=0,b=c.length;S<b;S++){let x=c[S];if(x.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),d++}else if(x.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),u++}else if(x.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),m++}else if(x.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){let M=n.hemi[p];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function E_(i){let e=new qT(i),t=[],n=[],r=[];function s(u){d.camera=u,t.length=0,n.length=0,r.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function ZT(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new E_(i),e.set(r,[a])):s>=o.length?(a=new E_(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var JT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$T=`uniform sampler2D shadow_pass;
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
}`,KT=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],QT=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],A_=new Ft,Bl=new O,Sp=new O;function jT(i,e,t){let n=new Ho,r=new fe,s=new fe,o=new Bt,a=new bh,l=new Th,c={},h=t.maxTextureSize,d={[rs]:En,[En]:rs,[vi]:vi},u=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:JT,fragmentShader:$T}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new kn;m.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new rt(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ml;let g=this.type;this.render=function(T,A,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===x0&&(et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ml);let w=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Li),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let G=g!==this.type;G&&A.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(N=>N.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,N=T.length;P<N;P++){let V=T[P],B=V.shadow;if(B===void 0){et("WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);let K=B.getFrameExtents();r.multiply(K),s.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/K.x),r.x=s.x*K.x,B.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/K.y),r.y=s.y*K.y,B.mapSize.y=s.y));let W=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=W,B.map===null||G===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Jo){if(V.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Jt(r.x,r.y,{format:cs,type:un,minFilter:wn,magFilter:wn,generateMipmaps:!1}),B.map.texture.name=V.name+".shadowMap",B.map.depthTexture=new jr(r.x,r.y,Xi),B.map.depthTexture.name=V.name+".shadowMapDepth",B.map.depthTexture.format=ir,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=yn,B.map.depthTexture.magFilter=yn}else V.isPointLight?(B.map=new Cu(r.x),B.map.depthTexture=new gh(r.x,Wi)):(B.map=new Jt(r.x,r.y),B.map.depthTexture=new jr(r.x,r.y,Wi)),B.map.depthTexture.name=V.name+".shadowMap",B.map.depthTexture.format=ir,this.type===Ml?(B.map.depthTexture.compareFunction=W?wu:Tu,B.map.depthTexture.minFilter=wn,B.map.depthTexture.magFilter=wn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=yn,B.map.depthTexture.magFilter=yn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==r.x||B.map.height!==r.y)&&B.map.setSize(r.x,r.y);let R=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();V.isPointLight!==!0&&B.updateMatrices(V,v);for(let X=0;X<R;X++){let ge=B.getCamera(X);if(V.isPointLight){let de=B.camera,ye=B.matrix,Pe=V.distance||de.far;Pe!==de.far&&(de.far=Pe,de.updateProjectionMatrix()),Bl.setFromMatrixPosition(V.matrixWorld),de.position.copy(Bl),Sp.copy(de.position),Sp.add(KT[X]),de.up.copy(QT[X]),de.lookAt(Sp),de.updateMatrixWorld(),ye.makeTranslation(-Bl.x,-Bl.y,-Bl.z),A_.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),B._frustum.setFromProjectionMatrix(A_,de.coordinateSystem,de.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,X),i.clear();else{X===0&&(i.setRenderTarget(B.map),i.clear());let de=B.getViewport(X);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),L.viewport(o)}n=B.getFrustum(X),x(A,v,ge,V,this.type)}B.isPointLightShadow!==!0&&this.type===Jo&&S(B,v),B.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(w,C,D)};function S(T,A){let v=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Jt(r.x,r.y,{format:cs,type:un}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,v,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,v,f,_,null)}function b(T,A,v,w){let C=null,D=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)C=D;else if(C=v.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=C.uuid,G=A.uuid,P=c[L];P===void 0&&(P={},c[L]=P);let N=P[G];N===void 0&&(N=C.clone(),P[G]=N,A.addEventListener("dispose",M)),C=N}if(C.visible=A.visible,C.wireframe=A.wireframe,w===Jo?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=i.properties.get(C);L.light=v}return C}function x(T,A,v,w,C){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Jo)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let G=e.update(T),P=T.material;if(Array.isArray(P)){let N=G.groups;for(let V=0,B=N.length;V<B;V++){let K=N[V],W=P[K.materialIndex];if(W&&W.visible){let R=b(T,W,w,C);T.onBeforeShadow(i,T,A,v,G,R,K),i.renderBufferDirect(v,null,G,R,T,K),T.onAfterShadow(i,T,A,v,G,R,K)}}}else if(P.visible){let N=b(T,P,w,C);T.onBeforeShadow(i,T,A,v,G,N,null),i.renderBufferDirect(v,null,G,N,T,null),T.onAfterShadow(i,T,A,v,G,N,null)}}let L=T.children;for(let G=0,P=L.length;G<P;G++)x(L[G],A,v,w,C)}function M(T){T.target.removeEventListener("dispose",M);for(let v in c){let w=c[v],C=T.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function ew(i,e){function t(){let z=!1,ve=new Bt,ne=null,Te=new Bt(0,0,0,0);return{setMask:function(Ee){ne!==Ee&&!z&&(i.colorMask(Ee,Ee,Ee,Ee),ne=Ee)},setLocked:function(Ee){z=Ee},setClear:function(Ee,se,he,oe,Ze){Ze===!0&&(Ee*=oe,se*=oe,he*=oe),ve.set(Ee,se,he,oe),Te.equals(ve)===!1&&(i.clearColor(Ee,se,he,oe),Te.copy(ve))},reset:function(){z=!1,ne=null,Te.set(-1,0,0,0)}}}function n(){let z=!1,ve=!1,ne=null,Te=null,Ee=null;return{setReversed:function(se){if(ve!==se){let he=e.get("EXT_clip_control");se?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),ve=se;let oe=Ee;Ee=null,this.setClear(oe)}},getReversed:function(){return ve},setTest:function(se){se?ee(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(se){ne!==se&&!z&&(i.depthMask(se),ne=se)},setFunc:function(se){if(ve&&(se=j0[se]),Te!==se){switch(se){case th:i.depthFunc(i.NEVER);break;case nh:i.depthFunc(i.ALWAYS);break;case ih:i.depthFunc(i.LESS);break;case Fo:i.depthFunc(i.LEQUAL);break;case rh:i.depthFunc(i.EQUAL);break;case sh:i.depthFunc(i.GEQUAL);break;case oh:i.depthFunc(i.GREATER);break;case ah:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=se}},setLocked:function(se){z=se},setClear:function(se){Ee!==se&&(Ee=se,ve&&(se=1-se),i.clearDepth(se))},reset:function(){z=!1,ne=null,Te=null,Ee=null,ve=!1}}}function r(){let z=!1,ve=null,ne=null,Te=null,Ee=null,se=null,he=null,oe=null,Ze=null;return{setTest:function(le){z||(le?ee(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(le){ve!==le&&!z&&(i.stencilMask(le),ve=le)},setFunc:function(le,$e,ze){(ne!==le||Te!==$e||Ee!==ze)&&(i.stencilFunc(le,$e,ze),ne=le,Te=$e,Ee=ze)},setOp:function(le,$e,ze){(se!==le||he!==$e||oe!==ze)&&(i.stencilOp(le,$e,ze),se=le,he=$e,oe=ze)},setLocked:function(le){z=le},setClear:function(le){Ze!==le&&(i.clearStencil(le),Ze=le)},reset:function(){z=!1,ve=null,ne=null,Te=null,Ee=null,se=null,he=null,oe=null,Ze=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],_=null,p=!1,g=null,S=null,b=null,x=null,M=null,T=null,A=null,v=new je(0,0,0),w=0,C=!1,D=null,L=null,G=null,P=null,N=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,K=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=K>=2);let R=null,X={},ge=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),ye=new Bt().fromArray(ge),Pe=new Bt().fromArray(de);function He(z,ve,ne,Te){let Ee=new Uint8Array(4),se=i.createTexture();i.bindTexture(z,se),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<ne;he++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(ve+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return se}let J={};J[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(i.DEPTH_TEST),o.setFunc(Fo),U(!1),me(Wd),ee(i.CULL_FACE),re(Li);function ee(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function ue(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function ke(z,ve){return u[z]!==ve?(i.bindFramebuffer(z,ve),u[z]=ve,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ve),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function xe(z,ve){let ne=m,Te=!1;if(z){ne=f.get(ve),ne===void 0&&(ne=[],f.set(ve,ne));let Ee=z.textures;if(ne.length!==Ee.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let se=0,he=Ee.length;se<he;se++)ne[se]=i.COLOR_ATTACHMENT0+se;ne.length=Ee.length,Te=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,Te=!0);Te&&i.drawBuffers(ne)}function Ae(z){return _!==z?(i.useProgram(z),_=z,!0):!1}let Le={[Hs]:i.FUNC_ADD,[y0]:i.FUNC_SUBTRACT,[S0]:i.FUNC_REVERSE_SUBTRACT};Le[M0]=i.MIN,Le[b0]=i.MAX;let j={[T0]:i.ZERO,[w0]:i.ONE,[E0]:i.SRC_COLOR,[qd]:i.SRC_ALPHA,[L0]:i.SRC_ALPHA_SATURATE,[P0]:i.DST_COLOR,[C0]:i.DST_ALPHA,[A0]:i.ONE_MINUS_SRC_COLOR,[Zd]:i.ONE_MINUS_SRC_ALPHA,[I0]:i.ONE_MINUS_DST_COLOR,[R0]:i.ONE_MINUS_DST_ALPHA,[D0]:i.CONSTANT_COLOR,[N0]:i.ONE_MINUS_CONSTANT_COLOR,[U0]:i.CONSTANT_ALPHA,[O0]:i.ONE_MINUS_CONSTANT_ALPHA};function re(z,ve,ne,Te,Ee,se,he,oe,Ze,le){if(z===Li){p===!0&&(ue(i.BLEND),p=!1);return}if(p===!1&&(ee(i.BLEND),p=!0),z!==v0){if(z!==g||le!==C){if((S!==Hs||M!==Hs)&&(i.blendEquation(i.FUNC_ADD),S=Hs,M=Hs),le)switch(z){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yi:i.blendFunc(i.ONE,i.ONE);break;case Xd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:tt("WebGLState: Invalid blending: ",z);break}else switch(z){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xd:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yd:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",z);break}b=null,x=null,T=null,A=null,v.set(0,0,0),w=0,g=z,C=le}return}Ee=Ee||ve,se=se||ne,he=he||Te,(ve!==S||Ee!==M)&&(i.blendEquationSeparate(Le[ve],Le[Ee]),S=ve,M=Ee),(ne!==b||Te!==x||se!==T||he!==A)&&(i.blendFuncSeparate(j[ne],j[Te],j[se],j[he]),b=ne,x=Te,T=se,A=he),(oe.equals(v)===!1||Ze!==w)&&(i.blendColor(oe.r,oe.g,oe.b,Ze),v.copy(oe),w=Ze),g=z,C=!1}function ae(z,ve){z.side===vi?ue(i.CULL_FACE):ee(i.CULL_FACE);let ne=z.side===En;ve&&(ne=!ne),U(ne),z.blending===ss&&z.transparent===!1?re(Li):re(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);let Te=z.stencilWrite;a.setTest(Te),Te&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Be(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function U(z){D!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),D=z)}function me(z){z!==g0?(ee(i.CULL_FACE),z!==L&&(z===Wd?i.cullFace(i.BACK):z===_0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),L=z}function We(z){z!==G&&(B&&i.lineWidth(z),G=z)}function Be(z,ve,ne){z?(ee(i.POLYGON_OFFSET_FILL),(P!==ve||N!==ne)&&(P=ve,N=ne,o.getReversed()&&(ve=-ve),i.polygonOffset(ve,ne))):ue(i.POLYGON_OFFSET_FILL)}function Ie(z){z?ee(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function Ke(z){z===void 0&&(z=i.TEXTURE0+V-1),R!==z&&(i.activeTexture(z),R=z)}function F(z,ve,ne){ne===void 0&&(R===null?ne=i.TEXTURE0+V-1:ne=R);let Te=X[ne];Te===void 0&&(Te={type:void 0,texture:void 0},X[ne]=Te),(Te.type!==z||Te.texture!==ve)&&(R!==ne&&(i.activeTexture(ne),R=ne),i.bindTexture(z,ve||J[z]),Te.type=z,Te.texture=ve)}function ht(){let z=X[R];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Je(){try{i.compressedTexImage2D(...arguments)}catch(z){tt("WebGLState:",z)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(z){tt("WebGLState:",z)}}function y(){try{i.texSubImage2D(...arguments)}catch(z){tt("WebGLState:",z)}}function H(){try{i.texSubImage3D(...arguments)}catch(z){tt("WebGLState:",z)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(z){tt("WebGLState:",z)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(z){tt("WebGLState:",z)}}function _e(){try{i.texStorage2D(...arguments)}catch(z){tt("WebGLState:",z)}}function ce(){try{i.texStorage3D(...arguments)}catch(z){tt("WebGLState:",z)}}function te(){try{i.texImage2D(...arguments)}catch(z){tt("WebGLState:",z)}}function ie(){try{i.texImage3D(...arguments)}catch(z){tt("WebGLState:",z)}}function Me(z){return d[z]!==void 0?d[z]:i.getParameter(z)}function Fe(z,ve){d[z]!==ve&&(i.pixelStorei(z,ve),d[z]=ve)}function be(z){ye.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ye.copy(z))}function Se(z){Pe.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Pe.copy(z))}function pe(z,ve){let ne=c.get(ve);ne===void 0&&(ne=new WeakMap,c.set(ve,ne));let Te=ne.get(z);Te===void 0&&(Te=i.getUniformBlockIndex(ve,z.name),ne.set(z,Te))}function Ye(z,ve){let Te=c.get(ve).get(z);l.get(ve)!==Te&&(i.uniformBlockBinding(ve,Te,z.__bindingPointIndex),l.set(ve,Te))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,X={},u={},f=new WeakMap,m=[],_=null,p=!1,g=null,S=null,b=null,x=null,M=null,T=null,A=null,v=new je(0,0,0),w=0,C=!1,D=null,L=null,G=null,P=null,N=null,ye.set(0,0,i.canvas.width,i.canvas.height),Pe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:ue,bindFramebuffer:ke,drawBuffers:xe,useProgram:Ae,setBlending:re,setMaterial:ae,setFlipSided:U,setCullFace:me,setLineWidth:We,setPolygonOffset:Be,setScissorTest:Ie,activeTexture:Ke,bindTexture:F,unbindTexture:ht,compressedTexImage2D:Je,compressedTexImage3D:I,texImage2D:te,texImage3D:ie,pixelStorei:Fe,getParameter:Me,updateUBOMapping:pe,uniformBlockBinding:Ye,texStorage2D:_e,texStorage3D:ce,texSubImage2D:y,texSubImage3D:H,compressedTexSubImage2D:Y,compressedTexSubImage3D:Q,scissor:be,viewport:Se,reset:Qe}}function tw(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,y){return m?new OffscreenCanvas(I,y):$a("canvas")}function p(I,y,H){let Y=1,Q=Je(I);if((Q.width>H||Q.height>H)&&(Y=H/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let _e=Math.floor(Y*Q.width),ce=Math.floor(Y*Q.height);u===void 0&&(u=_(_e,ce));let te=y?_(_e,ce):u;return te.width=_e,te.height=ce,te.getContext("2d").drawImage(I,0,0,_e,ce),et("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+_e+"x"+ce+")."),te}else return"data"in I&&et("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),I;return I}function g(I){return I.generateMipmaps}function S(I){i.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(I,y,H,Y,Q,_e=!1){if(I!==null){if(i[I]!==void 0)return i[I];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ce;Y&&(ce=e.get("EXT_texture_norm16"),ce||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=y;if(y===i.RED&&(H===i.FLOAT&&(te=i.R32F),H===i.HALF_FLOAT&&(te=i.R16F),H===i.UNSIGNED_BYTE&&(te=i.R8),H===i.UNSIGNED_SHORT&&ce&&(te=ce.R16_EXT),H===i.SHORT&&ce&&(te=ce.R16_SNORM_EXT)),y===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.R8UI),H===i.UNSIGNED_SHORT&&(te=i.R16UI),H===i.UNSIGNED_INT&&(te=i.R32UI),H===i.BYTE&&(te=i.R8I),H===i.SHORT&&(te=i.R16I),H===i.INT&&(te=i.R32I)),y===i.RG&&(H===i.FLOAT&&(te=i.RG32F),H===i.HALF_FLOAT&&(te=i.RG16F),H===i.UNSIGNED_BYTE&&(te=i.RG8),H===i.UNSIGNED_SHORT&&ce&&(te=ce.RG16_EXT),H===i.SHORT&&ce&&(te=ce.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.RG8UI),H===i.UNSIGNED_SHORT&&(te=i.RG16UI),H===i.UNSIGNED_INT&&(te=i.RG32UI),H===i.BYTE&&(te=i.RG8I),H===i.SHORT&&(te=i.RG16I),H===i.INT&&(te=i.RG32I)),y===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.RGB8UI),H===i.UNSIGNED_SHORT&&(te=i.RGB16UI),H===i.UNSIGNED_INT&&(te=i.RGB32UI),H===i.BYTE&&(te=i.RGB8I),H===i.SHORT&&(te=i.RGB16I),H===i.INT&&(te=i.RGB32I)),y===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),H===i.UNSIGNED_INT&&(te=i.RGBA32UI),H===i.BYTE&&(te=i.RGBA8I),H===i.SHORT&&(te=i.RGBA16I),H===i.INT&&(te=i.RGBA32I)),y===i.RGB&&(H===i.UNSIGNED_SHORT&&ce&&(te=ce.RGB16_EXT),H===i.SHORT&&ce&&(te=ce.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),y===i.RGBA){let ie=_e?Ja:dt.getTransfer(Q);H===i.FLOAT&&(te=i.RGBA32F),H===i.HALF_FLOAT&&(te=i.RGBA16F),H===i.UNSIGNED_BYTE&&(te=ie===vt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&ce&&(te=ce.RGBA16_EXT),H===i.SHORT&&ce&&(te=ce.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function M(I,y){let H;return I?y===null||y===Wi||y===Ko?H=i.DEPTH24_STENCIL8:y===Xi?H=i.DEPTH32F_STENCIL8:y===$o&&(H=i.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Wi||y===Ko?H=i.DEPTH_COMPONENT24:y===Xi?H=i.DEPTH_COMPONENT32F:y===$o&&(H=i.DEPTH_COMPONENT16),H}function T(I,y){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==yn&&I.minFilter!==wn?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function A(I){let y=I.target;y.removeEventListener("dispose",A),w(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function v(I){let y=I.target;y.removeEventListener("dispose",v),D(y)}function w(I){let y=n.get(I);if(y.__webglInit===void 0)return;let H=I.source,Y=f.get(H);if(Y){let Q=Y[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(I),Object.keys(Y).length===0&&f.delete(H)}n.remove(I)}function C(I){let y=n.get(I);i.deleteTexture(y.__webglTexture);let H=I.source,Y=f.get(H);delete Y[y.__cacheKey],o.memory.textures--}function D(I){let y=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let Q=0;Q<y.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)i.deleteFramebuffer(y.__webglFramebuffer[Y]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let H=I.textures;for(let Y=0,Q=H.length;Y<Q;Y++){let _e=n.get(H[Y]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(H[Y])}n.remove(I)}let L=0;function G(){L=0}function P(){return L}function N(I){L=I}function V(){let I=L;return I>=r.maxTextures&&et("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+r.maxTextures),L+=1,I}function B(I){let y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function K(I,y){let H=n.get(I);if(I.isVideoTexture&&F(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){let Y=I.image;if(Y===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(H,I,y);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+y)}function W(I,y){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){ue(H,I,y);return}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+y)}function R(I,y){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){ue(H,I,y);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+y)}function X(I,y){let H=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&H.__version!==I.version){ke(H,I,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+y)}let ge={[lh]:i.REPEAT,[tr]:i.CLAMP_TO_EDGE,[ch]:i.MIRRORED_REPEAT},de={[yn]:i.NEAREST,[z0]:i.NEAREST_MIPMAP_NEAREST,[Pl]:i.NEAREST_MIPMAP_LINEAR,[wn]:i.LINEAR,[kh]:i.LINEAR_MIPMAP_NEAREST,[as]:i.LINEAR_MIPMAP_LINEAR},ye={[H0]:i.NEVER,[Z0]:i.ALWAYS,[W0]:i.LESS,[Tu]:i.LEQUAL,[X0]:i.EQUAL,[wu]:i.GEQUAL,[Y0]:i.GREATER,[q0]:i.NOTEQUAL};function Pe(I,y){if(y.type===Xi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===wn||y.magFilter===kh||y.magFilter===Pl||y.magFilter===as||y.minFilter===wn||y.minFilter===kh||y.minFilter===Pl||y.minFilter===as)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ge[y.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ge[y.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ge[y.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,de[y.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,de[y.minFilter]),y.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ye[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===yn||y.minFilter!==Pl&&y.minFilter!==as||y.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function He(I,y){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",A));let Y=y.source,Q=f.get(Y);Q===void 0&&(Q={},f.set(Y,Q));let _e=B(y);if(_e!==I.__cacheKey){Q[_e]===void 0&&(Q[_e]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Q[_e].usedTimes++;let ce=Q[I.__cacheKey];ce!==void 0&&(Q[I.__cacheKey].usedTimes--,ce.usedTimes===0&&C(y)),I.__cacheKey=_e,I.__webglTexture=Q[_e].texture}return H}function J(I,y,H){return Math.floor(Math.floor(I/H)/y)}function ee(I,y,H,Y){let _e=I.updateRanges;if(_e.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,H,Y,y.data);else{_e.sort((Fe,be)=>Fe.start-be.start);let ce=0;for(let Fe=1;Fe<_e.length;Fe++){let be=_e[ce],Se=_e[Fe],pe=be.start+be.count,Ye=J(Se.start,y.width,4),Qe=J(be.start,y.width,4);Se.start<=pe+1&&Ye===Qe&&J(Se.start+Se.count-1,y.width,4)===Ye?be.count=Math.max(be.count,Se.start+Se.count-be.start):(++ce,_e[ce]=Se)}_e.length=ce+1;let te=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),Me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Fe=0,be=_e.length;Fe<be;Fe++){let Se=_e[Fe],pe=Math.floor(Se.start/4),Ye=Math.ceil(Se.count/4),Qe=pe%y.width,z=Math.floor(pe/y.width),ve=Ye,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,Qe,z,ve,ne,H,Y,y.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,te),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,Me)}}function ue(I,y,H){let Y=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=i.TEXTURE_3D);let Q=He(I,y),_e=y.source;t.bindTexture(Y,I.__webglTexture,i.TEXTURE0+H);let ce=n.get(_e);if(_e.version!==ce.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ne=dt.getPrimaries(dt.workingColorSpace),Te=y.colorSpace===Cr?null:dt.getPrimaries(y.colorSpace),Ee=y.colorSpace===Cr||ne===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let ie=p(y.image,!1,r.maxTextureSize);ie=ht(y,ie);let Me=s.convert(y.format,y.colorSpace),Fe=s.convert(y.type),be=x(y.internalFormat,Me,Fe,y.normalized,y.colorSpace,y.isVideoTexture);Pe(Y,y);let Se,pe=y.mipmaps,Ye=y.isVideoTexture!==!0,Qe=ce.__version===void 0||Q===!0,z=_e.dataReady,ve=T(y,ie);if(y.isDepthTexture)be=M(y.format===ls,y.type),Qe&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,be,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,be,ie.width,ie.height,0,Me,Fe,null));else if(y.isDataTexture)if(pe.length>0){Ye&&Qe&&t.texStorage2D(i.TEXTURE_2D,ve,be,pe[0].width,pe[0].height);for(let ne=0,Te=pe.length;ne<Te;ne++)Se=pe[ne],Ye?z&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Se.width,Se.height,Me,Fe,Se.data):t.texImage2D(i.TEXTURE_2D,ne,be,Se.width,Se.height,0,Me,Fe,Se.data);y.generateMipmaps=!1}else Ye?(Qe&&t.texStorage2D(i.TEXTURE_2D,ve,be,ie.width,ie.height),z&&ee(y,ie,Me,Fe)):t.texImage2D(i.TEXTURE_2D,0,be,ie.width,ie.height,0,Me,Fe,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ye&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,be,pe[0].width,pe[0].height,ie.depth);for(let ne=0,Te=pe.length;ne<Te;ne++)if(Se=pe[ne],y.format!==Di)if(Me!==null)if(Ye){if(z)if(y.layerUpdates.size>0){let Ee=hp(Se.width,Se.height,y.format,y.type);for(let se of y.layerUpdates){let he=Se.data.subarray(se*Ee/Se.data.BYTES_PER_ELEMENT,(se+1)*Ee/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,se,Se.width,Se.height,1,Me,he)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Se.width,Se.height,ie.depth,Me,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,be,Se.width,Se.height,ie.depth,0,Se.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Se.width,Se.height,ie.depth,Me,Fe,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,be,Se.width,Se.height,ie.depth,0,Me,Fe,Se.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ye&&Qe&&t.texStorage2D(i.TEXTURE_2D,ve,be,pe[0].width,pe[0].height);for(let ne=0,Te=pe.length;ne<Te;ne++)Se=pe[ne],y.format!==Di?Me!==null?Ye?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,be,Se.width,Se.height,0,Se.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?z&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Se.width,Se.height,Me,Fe,Se.data):t.texImage2D(i.TEXTURE_2D,ne,be,Se.width,Se.height,0,Me,Fe,Se.data)}else if(y.isDataArrayTexture)if(Ye){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,be,ie.width,ie.height,ie.depth),z)if(y.layerUpdates.size>0){let ne=hp(ie.width,ie.height,y.format,y.type);for(let Te of y.layerUpdates){let Ee=ie.data.subarray(Te*ne/ie.data.BYTES_PER_ELEMENT,(Te+1)*ne/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Te,ie.width,ie.height,1,Me,Fe,Ee)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Me,Fe,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,ie.width,ie.height,ie.depth,0,Me,Fe,ie.data);else if(y.isData3DTexture)Ye?(Qe&&t.texStorage3D(i.TEXTURE_3D,ve,be,ie.width,ie.height,ie.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Me,Fe,ie.data)):t.texImage3D(i.TEXTURE_3D,0,be,ie.width,ie.height,ie.depth,0,Me,Fe,ie.data);else if(y.isFramebufferTexture){if(Qe)if(Ye)t.texStorage2D(i.TEXTURE_2D,ve,be,ie.width,ie.height);else{let ne=ie.width,Te=ie.height;for(let Ee=0;Ee<ve;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,be,ne,Te,0,Me,Fe,null),ne>>=1,Te>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),d.add(y),ne.onpaint=Te=>{let Ee=Te.changedElements;for(let se of d)Ee.includes(se.image)&&(se.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let Ee=i.RGBA,se=i.RGBA,he=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ee,se,he,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(pe.length>0){if(Ye&&Qe){let ne=Je(pe[0]);t.texStorage2D(i.TEXTURE_2D,ve,be,ne.width,ne.height)}for(let ne=0,Te=pe.length;ne<Te;ne++)Se=pe[ne],Ye?z&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Me,Fe,Se):t.texImage2D(i.TEXTURE_2D,ne,be,Me,Fe,Se);y.generateMipmaps=!1}else if(Ye){if(Qe){let ne=Je(ie);t.texStorage2D(i.TEXTURE_2D,ve,be,ne.width,ne.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Fe,ie)}else t.texImage2D(i.TEXTURE_2D,0,be,Me,Fe,ie);g(y)&&S(Y),ce.__version=_e.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function ke(I,y,H){if(y.image.length!==6)return;let Y=He(I,y),Q=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+H);let _e=n.get(Q);if(Q.version!==_e.__version||Y===!0){t.activeTexture(i.TEXTURE0+H);let ce=dt.getPrimaries(dt.workingColorSpace),te=y.colorSpace===Cr?null:dt.getPrimaries(y.colorSpace),ie=y.colorSpace===Cr||ce===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Me=y.isCompressedTexture||y.image[0].isCompressedTexture,Fe=y.image[0]&&y.image[0].isDataTexture,be=[];for(let se=0;se<6;se++)!Me&&!Fe?be[se]=p(y.image[se],!0,r.maxCubemapSize):be[se]=Fe?y.image[se].image:y.image[se],be[se]=ht(y,be[se]);let Se=be[0],pe=s.convert(y.format,y.colorSpace),Ye=s.convert(y.type),Qe=x(y.internalFormat,pe,Ye,y.normalized,y.colorSpace),z=y.isVideoTexture!==!0,ve=_e.__version===void 0||Y===!0,ne=Q.dataReady,Te=T(y,Se);Pe(i.TEXTURE_CUBE_MAP,y);let Ee;if(Me){z&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Qe,Se.width,Se.height);for(let se=0;se<6;se++){Ee=be[se].mipmaps;for(let he=0;he<Ee.length;he++){let oe=Ee[he];y.format!==Di?pe!==null?z?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,he,0,0,oe.width,oe.height,pe,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,he,Qe,oe.width,oe.height,0,oe.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,he,0,0,oe.width,oe.height,pe,Ye,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,he,Qe,oe.width,oe.height,0,pe,Ye,oe.data)}}}else{if(Ee=y.mipmaps,z&&ve){Ee.length>0&&Te++;let se=Je(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,Qe,se.width,se.height)}for(let se=0;se<6;se++)if(Fe){z?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,be[se].width,be[se].height,pe,Ye,be[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Qe,be[se].width,be[se].height,0,pe,Ye,be[se].data);for(let he=0;he<Ee.length;he++){let Ze=Ee[he].image[se].image;z?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,he+1,0,0,Ze.width,Ze.height,pe,Ye,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,he+1,Qe,Ze.width,Ze.height,0,pe,Ye,Ze.data)}}else{z?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,pe,Ye,be[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Qe,pe,Ye,be[se]);for(let he=0;he<Ee.length;he++){let oe=Ee[he];z?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,he+1,0,0,pe,Ye,oe.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,he+1,Qe,pe,Ye,oe.image[se])}}}g(y)&&S(i.TEXTURE_CUBE_MAP),_e.__version=Q.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function xe(I,y,H,Y,Q,_e){let ce=s.convert(H.format,H.colorSpace),te=s.convert(H.type),ie=x(H.internalFormat,ce,te,H.normalized,H.colorSpace),Me=n.get(y),Fe=n.get(H);if(Fe.__renderTarget=y,!Me.__hasExternalTextures){let be=Math.max(1,y.width>>_e),Se=Math.max(1,y.height>>_e);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,_e,ie,be,Se,y.depth,0,ce,te,null):t.texImage2D(Q,_e,ie,be,Se,0,ce,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Ke(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,Fe.__webglTexture,0,Ie(y)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,Fe.__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(I,y,H){if(i.bindRenderbuffer(i.RENDERBUFFER,I),y.depthBuffer){let Y=y.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,_e=M(y.stencilBuffer,Q),ce=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ke(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie(y),_e,y.width,y.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie(y),_e,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,_e,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,I)}else{let Y=y.textures;for(let Q=0;Q<Y.length;Q++){let _e=Y[Q],ce=s.convert(_e.format,_e.colorSpace),te=s.convert(_e.type),ie=x(_e.internalFormat,ce,te,_e.normalized,_e.colorSpace);Ke(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie(y),ie,y.width,y.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie(y),ie,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ie,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(I,y,H){let Y=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(y.depthTexture);if(Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,y.depthTexture);let Me=s.convert(y.depthTexture.format),Fe=s.convert(y.depthTexture.type),be;y.depthTexture.format===ir?be=i.DEPTH_COMPONENT24:y.depthTexture.format===ls&&(be=i.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,be,y.width,y.height,0,Me,Fe,null)}}else K(y.depthTexture,0);let _e=Q.__webglTexture,ce=Ie(y),te=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ie=y.depthTexture.format===ls?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===ir)Ke(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,te,_e,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,ie,te,_e,0);else if(y.depthTexture.format===ls)Ke(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,te,_e,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,ie,te,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function j(I){let y=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){let Y=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=Y}if(I.depthTexture&&!y.__autoAllocateDepthBuffer)if(H)for(let Y=0;Y<6;Y++)Le(y.__webglFramebuffer[Y],I,Y);else{let Y=I.texture.mipmaps;Y&&Y.length>0?Le(y.__webglFramebuffer[0],I,0):Le(y.__webglFramebuffer,I,0)}else if(H){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=i.createRenderbuffer(),Ae(y.__webglDepthbuffer[Y],I,!1);else{let Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=y.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,_e)}}else{let Y=I.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ae(y.__webglDepthbuffer,I,!1);else{let Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,_e)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(I,y,H){let Y=n.get(I);y!==void 0&&xe(Y.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&j(I)}function ae(I){let y=I.texture,H=n.get(I),Y=n.get(y);I.addEventListener("dispose",v);let Q=I.textures,_e=I.isWebGLCubeRenderTarget===!0,ce=Q.length>1;if(ce||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=y.version,o.memory.textures++),_e){H.__webglFramebuffer=[];for(let te=0;te<6;te++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[te]=[];for(let ie=0;ie<y.mipmaps.length;ie++)H.__webglFramebuffer[te][ie]=i.createFramebuffer()}else H.__webglFramebuffer[te]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let te=0;te<y.mipmaps.length;te++)H.__webglFramebuffer[te]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ce)for(let te=0,ie=Q.length;te<ie;te++){let Me=n.get(Q[te]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Ke(I)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let te=0;te<Q.length;te++){let ie=Q[te];H.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[te]);let Me=s.convert(ie.format,ie.colorSpace),Fe=s.convert(ie.type),be=x(ie.internalFormat,Me,Fe,ie.normalized,ie.colorSpace,I.isXRRenderTarget===!0),Se=Ie(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,be,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,H.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(H.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,y);for(let te=0;te<6;te++)if(y.mipmaps&&y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)xe(H.__webglFramebuffer[te][ie],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie);else xe(H.__webglFramebuffer[te],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);g(y)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let te=0,ie=Q.length;te<ie;te++){let Me=Q[te],Fe=n.get(Me),be=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(be=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,Fe.__webglTexture),Pe(be,Me),xe(H.__webglFramebuffer,I,Me,i.COLOR_ATTACHMENT0+te,be,0),g(Me)&&S(be)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(te=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,Y.__webglTexture),Pe(te,y),y.mipmaps&&y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)xe(H.__webglFramebuffer[ie],I,y,i.COLOR_ATTACHMENT0,te,ie);else xe(H.__webglFramebuffer,I,y,i.COLOR_ATTACHMENT0,te,0);g(y)&&S(te),t.unbindTexture()}I.depthBuffer&&j(I)}function U(I){let y=I.textures;for(let H=0,Y=y.length;H<Y;H++){let Q=y[H];if(g(Q)){let _e=b(I),ce=n.get(Q).__webglTexture;t.bindTexture(_e,ce),S(_e),t.unbindTexture()}}}let me=[],We=[];function Be(I){if(I.samples>0){if(Ke(I)===!1){let y=I.textures,H=I.width,Y=I.height,Q=i.COLOR_BUFFER_BIT,_e=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(I),te=y.length>1;if(te)for(let Me=0;Me<y.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let ie=I.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Me=0;Me<y.length;Me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[Me]);let Fe=n.get(y[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Fe,0)}i.blitFramebuffer(0,0,H,Y,0,0,H,Y,Q,i.NEAREST),l===!0&&(me.length=0,We.length=0,me.push(i.COLOR_ATTACHMENT0+Me),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(me.push(_e),We.push(_e),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,We)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let Me=0;Me<y.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,ce.__webglColorRenderbuffer[Me]);let Fe=n.get(y[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let y=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ie(I){return Math.min(r.maxSamples,I.samples)}function Ke(I){let y=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function F(I){let y=o.render.frame;h.get(I)!==y&&(h.set(I,y),I.update())}function ht(I,y){let H=I.colorSpace,Y=I.format,Q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==Za&&H!==Cr&&(dt.getTransfer(H)===vt?(Y!==Di||Q!==oi)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",H)),y}function Je(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=G,this.getTextureUnits=P,this.setTextureUnits=N,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=R,this.setTextureCube=X,this.rebindTextures=re,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function nw(i,e){function t(n,r=Cr){let s,o=dt.getTransfer(r);if(n===oi)return i.UNSIGNED_BYTE;if(n===Gh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ep)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kd)return i.BYTE;if(n===Qd)return i.SHORT;if(n===$o)return i.UNSIGNED_SHORT;if(n===Vh)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===Xi)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===tp)return i.ALPHA;if(n===np)return i.RGB;if(n===Di)return i.RGBA;if(n===ir)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===ip)return i.RED;if(n===Wh)return i.RED_INTEGER;if(n===cs)return i.RG;if(n===Xh)return i.RG_INTEGER;if(n===Yh)return i.RGBA_INTEGER;if(n===Il||n===Ll||n===Dl||n===Nl)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Il)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Il)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ll)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qh||n===Zh||n===Jh||n===$h)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===qh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$h)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kh||n===Qh||n===jh||n===eu||n===tu||n===Ul||n===nu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Kh||n===Qh)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===jh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===eu)return s.COMPRESSED_R11_EAC;if(n===tu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ul)return s.COMPRESSED_RG11_EAC;if(n===nu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===iu||n===ru||n===su||n===ou||n===au||n===lu||n===cu||n===hu||n===uu||n===fu||n===du||n===pu||n===mu||n===gu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===iu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ru)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===su)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ou)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===au)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===du)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_u||n===xu||n===vu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===_u)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yu||n===Su||n===Ol||n===Mu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===yu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Su)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ko?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var iw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rw=`
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

}`,Rp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new il(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Wt({vertexShader:iw,fragmentShader:rw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new Gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pp=class extends rr{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,_=typeof XRWebGLBinding<"u",p=new Rp,g={},S=t.getContextAttributes(),b=null,x=null,M=[],T=[],A=new fe,v=null,w=null,C=new vn;C.viewport=new Bt;let D=new vn;D.viewport=new Bt;let L=[C,D],G=new Oh,P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ee=M[J];return ee===void 0&&(ee=new Vo,M[J]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(J){let ee=M[J];return ee===void 0&&(ee=new Vo,M[J]=ee),ee.getGripSpace()},this.getHand=function(J){let ee=M[J];return ee===void 0&&(ee=new Vo,M[J]=ee),ee.getHandSpace()};function V(J){let ee=T.indexOf(J.inputSource);if(ee===-1)return;let ue=M[ee];ue!==void 0&&(ue.update(J.inputSource,J.frame,c||o),ue.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",K);for(let J=0;J<M.length;J++){let ee=T[J];ee!==null&&(T[J]=null,M[J].disconnect(ee))}P=null,N=null,p.reset();for(let J in g)delete g[J];if(e.setRenderTarget(b),f=null,u=null,d=null,r=null,x=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),w!==null){let J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",B),r.addEventListener("inputsourceschange",K),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,ke=null,xe=null;S.depth&&(xe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=S.stencil?ls:ir,ke=S.stencil?Ko:Wi);let Ae={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Ae),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Jt(u.textureWidth,u.textureHeight,{format:Di,type:oi,depthTexture:new jr(u.textureWidth,u.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ue={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Jt(f.framebufferWidth,f.framebufferHeight,{format:Di,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(J){for(let ee=0;ee<J.removed.length;ee++){let ue=J.removed[ee],ke=T.indexOf(ue);ke>=0&&(T[ke]=null,M[ke].disconnect(ue))}for(let ee=0;ee<J.added.length;ee++){let ue=J.added[ee],ke=T.indexOf(ue);if(ke===-1){for(let Ae=0;Ae<M.length;Ae++)if(Ae>=T.length){T.push(ue),ke=Ae;break}else if(T[Ae]===null){T[Ae]=ue,ke=Ae;break}if(ke===-1)break}let xe=M[ke];xe&&xe.connect(ue)}}let W=new O,R=new O;function X(J,ee,ue){W.setFromMatrixPosition(ee.matrixWorld),R.setFromMatrixPosition(ue.matrixWorld);let ke=W.distanceTo(R),xe=ee.projectionMatrix.elements,Ae=ue.projectionMatrix.elements,Le=xe[14]/(xe[10]-1),j=xe[14]/(xe[10]+1),re=(xe[9]+1)/xe[5],ae=(xe[9]-1)/xe[5],U=(xe[8]-1)/xe[0],me=(Ae[8]+1)/Ae[0],We=Le*U,Be=Le*me,Ie=ke/(-U+me),Ke=Ie*-U;if(ee.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ke),J.translateZ(Ie),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),xe[10]===-1)J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let F=Le+Ie,ht=j+Ie,Je=We-Ke,I=Be+(ke-Ke),y=re*j/ht*F,H=ae*j/ht*F;J.projectionMatrix.makePerspective(Je,I,y,H,F,ht),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ge(J,ee){ee===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ee.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ee=J.near,ue=J.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(ue=p.depthFar)),G.near=D.near=C.near=ee,G.far=D.far=C.far=ue,(P!==G.near||N!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),P=G.near,N=G.far),G.layers.mask=J.layers.mask|6,C.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;let ke=J.parent,xe=G.cameras;ge(G,ke);for(let Ae=0;Ae<xe.length;Ae++)ge(xe[Ae],ke);xe.length===2?X(G,C,D):G.projectionMatrix.copy(C.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),de(J,G,ke)};function de(J,ee,ue){ue===null?J.matrix.copy(ee.matrixWorld):(J.matrix.copy(ue.matrixWorld),J.matrix.invert(),J.matrix.multiply(ee.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ka*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(J){return g[J]};let ye=null;function Pe(J,ee){if(h=ee.getViewerPose(c||o),m=ee,h!==null){let ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ke=!1;ue.length!==G.cameras.length&&(G.cameras.length=0,ke=!0);for(let j=0;j<ue.length;j++){let re=ue[j],ae=null;if(f!==null)ae=f.getViewport(re);else{let me=d.getViewSubImage(u,re);ae=me.viewport,j===0&&(e.setRenderTargetTextures(x,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(x))}let U=L[j];U===void 0&&(U=new vn,U.layers.enable(j),U.viewport=new Bt,L[j]=U),U.matrix.fromArray(re.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(re.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(ae.x,ae.y,ae.width,ae.height),j===0&&(G.matrix.copy(U.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),ke===!0&&G.cameras.push(U)}let xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let j=d.getDepthInformation(ue[0]);j&&j.isValid&&j.texture&&p.init(j,r.renderState)}if(xe&&xe.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let j=0;j<ue.length;j++){let re=ue[j].camera;if(re){let ae=g[re];ae||(ae=new il,g[re]=ae);let U=d.getCameraImage(re);ae.sourceTexture=U}}}}for(let ue=0;ue<M.length;ue++){let ke=T[ue],xe=M[ue];ke!==null&&xe!==void 0&&xe.update(ke,ee,c||o)}ye&&ye(J,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),m=null}let He=new C_;He.setAnimationLoop(Pe),this.setAnimationLoop=function(J){ye=J},this.dispose=function(){}}},sw=new Ft,N_=new it;N_.set(-1,0,0,0,1,0,0,0,1);function ow(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,ap(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function r(p,g,S,b,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,x)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,S,b):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===En&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===En&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let S=e.get(g),b=S.envMap,x=S.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(sw.makeRotationFromEuler(x)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(N_),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,S,b){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*S,p.scale.value=b*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,S){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===En&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let S=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function aw(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let T=M.program;n.uniformBlockBinding(x,T)}function c(x,M){let T=r[x.id];T===void 0&&(p(x),T=h(x),r[x.id]=T,x.addEventListener("dispose",S));let A=M.program;n.updateUBOMapping(x,A);let v=e.render.frame;s[x.id]!==v&&(u(x),s[x.id]=v)}function h(x){let M=d();x.__bindingPointIndex=M;let T=i.createBuffer(),A=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let M=r[x.id],T=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,w=T.length;v<w;v++){let C=T[v];if(Array.isArray(C))for(let D=0,L=C.length;D<L;D++)f(C[D],v,D,A);else f(C,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,M,T,A){if(_(x,M,T,A)===!0){let v=x.__offset,w=x.value;if(Array.isArray(w)){let C=0;for(let D=0;D<w.length;D++){let L=w[D],G=g(L);m(L,x.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function m(x,M,T){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,T)}function _(x,M,T,A){let v=x.value,w=M+"_"+T;if(A[w]===void 0)return typeof v=="number"||typeof v=="boolean"?A[w]=v:ArrayBuffer.isView(v)?A[w]=v.slice():A[w]=v.clone(),!0;{let C=A[w];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return A[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function p(x){let M=x.uniforms,T=0,A=16;for(let w=0,C=M.length;w<C;w++){let D=Array.isArray(M[w])?M[w]:[M[w]];for(let L=0,G=D.length;L<G;L++){let P=D[L],N=Array.isArray(P.value)?P.value:[P.value];for(let V=0,B=N.length;V<B;V++){let K=N[V],W=g(K),R=T%A,X=R%W.boundary,ge=R+X;T+=X,ge!==0&&A-ge<W.storage&&(T+=A-ge),P.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=T,T+=W.storage}}}let v=T%A;return v>0&&(T+=A-v),x.__size=T,x.__cache={},this}function g(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):et("WebGLRenderer: Unsupported uniform value type.",x),M}function S(x){let M=x.target;M.removeEventListener("dispose",S);let T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function b(){for(let x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:b}}var lw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ar=null;function cw(){return ar===null&&(ar=new mh(lw,16,16,cs,un),ar.name="DFG_LUT",ar.minFilter=wn,ar.magFilter=wn,ar.wrapS=tr,ar.wrapT=tr,ar.generateMipmaps=!1,ar.needsUpdate=!0),ar}var Ru=class{constructor(e={}){let{canvas:t=$0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=oi}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=f,p=new Set([Yh,Xh,Wh]),g=new Set([oi,Wi,$o,Ko,Gh,Hh]),S=new Uint32Array(4),b=new Int32Array(4),x=new O,M=null,T=null,A=[],v=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,L=null,G=null,P=null,N=null;this._outputColorSpace=on;let V=0,B=0,K=null,W=-1,R=null,X=new Bt,ge=new Bt,de=null,ye=new je(0),Pe=0,He=t.width,J=t.height,ee=1,ue=null,ke=null,xe=new Bt(0,0,He,J),Ae=new Bt(0,0,He,J),Le=!1,j=new Ho,re=!1,ae=!1,U=new Ft,me=new O,We=new Bt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ie=!1;function Ke(){return K===null?ee:1}let F=n;function ht(E,k){return t.getContext(E,k)}let Je,I,y,H,Y,Q,_e,ce,te,ie,Me,Fe,be,Se,pe,Ye,Qe,z,ve,ne,Te,Ee,se;try{let E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",$e,!1),F===null){let k="webgl2";if(F=ht(k,E),F===null)throw ht(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}he()}catch(E){throw t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",$e,!1),tt("WebGLRenderer: "+E.message),E}function he(){Je=new g1(F),Je.init(),Te=new nw(F,Je),I=new o1(F,Je,e,Te),y=new ew(F,Je),I.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),G=F.createFramebuffer(),P=F.createFramebuffer(),N=F.createFramebuffer(),H=new v1(F),Y=new kT,Q=new tw(F,Je,y,Y,I,Te,H),_e=new m1(C),ce=new SS(F),Ee=new r1(F,ce),te=new _1(F,ce,H,Ee),ie=new S1(F,te,ce,Ee,H),z=new y1(F,I,Q),pe=new a1(Y),Me=new zT(C,_e,Je,I,Ee,pe),Fe=new ow(C,Y),be=new GT,Se=new ZT(Je),Qe=new i1(C,_e,y,ie,m,l),Ye=new jT(C,ie,I),se=new aw(F,H,I,y),ve=new s1(F,Je,H),ne=new x1(F,Je,H),H.programs=Me.programs,C.capabilities=I,C.extensions=Je,C.properties=Y,C.renderLists=be,C.shadowMap=Ye,C.state=y,C.info=H}_!==oi&&(w=new b1(_,t.width,t.height,a,r,s));let oe=new Pp(C,F);this.xr=oe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=Je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(E){E!==void 0&&(ee=E,this.setSize(He,J,!1))},this.getSize=function(E){return E.set(He,J)},this.setSize=function(E,k,$=!0){if(oe.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}He=E,J=k,t.width=Math.floor(E*ee),t.height=Math.floor(k*ee),$===!0&&(t.style.width=E+"px",t.style.height=k+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(He*ee,J*ee).floor()},this.setDrawingBufferSize=function(E,k,$){He=E,J=k,ee=$,t.width=Math.floor(E*$),t.height=Math.floor(k*$),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(_===oi){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(X)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,k,$,q){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,k,$,q),y.viewport(X.copy(xe).multiplyScalar(ee).round())},this.getScissor=function(E){return E.copy(Ae)},this.setScissor=function(E,k,$,q){E.isVector4?Ae.set(E.x,E.y,E.z,E.w):Ae.set(E,k,$,q),y.scissor(ge.copy(Ae).multiplyScalar(ee).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(E){y.setScissorTest(Le=E)},this.setOpaqueSort=function(E){ue=E},this.setTransparentSort=function(E){ke=E},this.getClearColor=function(E){return E.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,$=!0){let q=0;if(E){let Z=!1;if(K!==null){let we=K.texture.format;Z=p.has(we)}if(Z){let we=K.texture.type,Ne=g.has(we),Re=Qe.getClearColor(),Ve=Qe.getClearAlpha(),qe=Re.r,st=Re.g,mt=Re.b;Ne?(S[0]=qe,S[1]=st,S[2]=mt,S[3]=Ve,F.clearBufferuiv(F.COLOR,0,S)):(b[0]=qe,b[1]=st,b[2]=mt,b[3]=Ve,F.clearBufferiv(F.COLOR,0,b))}else q|=F.COLOR_BUFFER_BIT}k&&(q|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",$e,!1),Qe.dispose(),be.dispose(),Se.dispose(),Y.dispose(),_e.dispose(),ie.dispose(),Ee.dispose(),se.dispose(),Me.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Dt),oe.removeEventListener("sessionend",wt),gt.stop()};function Ze(E){E.preventDefault(),sp("WebGLRenderer: Context Lost."),D=!0}function le(){sp("WebGLRenderer: Context Restored."),D=!1;let E=H.autoReset,k=Ye.enabled,$=Ye.autoUpdate,q=Ye.needsUpdate,Z=Ye.type;he(),H.autoReset=E,Ye.enabled=k,Ye.autoUpdate=$,Ye.needsUpdate=q,Ye.type=Z}function $e(E){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ze(E){let k=E.target;k.removeEventListener("dispose",ze),nt(k)}function nt(E){jt(E),Y.remove(E)}function jt(E){let k=Y.get(E).programs;k!==void 0&&(k.forEach(function($){Me.releaseProgram($)}),E.isShaderMaterial&&Me.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,$,q,Z,we){k===null&&(k=Be);let Ne=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Re=mn(E,k,$,q,Z);y.setMaterial(q,Ne);let Ve=$.index,qe=1;if(q.wireframe===!0){if(Ve=te.getWireframeAttribute($),Ve===void 0)return;qe=2}let st=$.drawRange,mt=$.attributes.position,Ge=st.start*qe,yt=(st.start+st.count)*qe;we!==null&&(Ge=Math.max(Ge,we.start*qe),yt=Math.min(yt,(we.start+we.count)*qe)),Ve!==null?(Ge=Math.max(Ge,0),yt=Math.min(yt,Ve.count)):mt!=null&&(Ge=Math.max(Ge,0),yt=Math.min(yt,mt.count));let tn=yt-Ge;if(tn<0||tn===1/0)return;Ee.setup(Z,q,Re,$,Ve);let Nt,Et=ve;if(Ve!==null&&(Nt=ce.get(Ve),Et=ne,Et.setIndex(Nt)),Z.isMesh)q.wireframe===!0?(y.setLineWidth(q.wireframeLinewidth*Ke()),Et.setMode(F.LINES)):Et.setMode(F.TRIANGLES);else if(Z.isLine){let Cn=q.linewidth;Cn===void 0&&(Cn=1),y.setLineWidth(Cn*Ke()),Z.isLineSegments?Et.setMode(F.LINES):Z.isLineLoop?Et.setMode(F.LINE_LOOP):Et.setMode(F.LINE_STRIP)}else Z.isPoints?Et.setMode(F.POINTS):Z.isSprite&&Et.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))Et.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Cn=Z._multiDrawStarts,De=Z._multiDrawCounts,Wn=Z._multiDrawCount,xt=Ve?ce.get(Ve).bytesPerElement:1,bi=Y.get(q).currentProgram.getUniforms();for(let qi=0;qi<Wn;qi++)bi.setValue(F,"_gl_DrawID",qi),Et.render(Cn[qi]/xt,De[qi])}else if(Z.isInstancedMesh)Et.renderInstances(Ge,tn,Z.count);else if($.isInstancedBufferGeometry){let Cn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,De=Math.min($.instanceCount,Cn);Et.renderInstances(Ge,tn,De)}else Et.render(Ge,tn)};function ut(E,k,$,q){L!==null&&E.isNodeMaterial&&L.setObject(q,E),re===!0&&pe.setState(E,$,!1),E.transparent===!0&&E.side===vi&&E.forceSinglePass===!1?(E.side=En,E.needsUpdate=!0,Xt(E,k,q),E.side=rs,E.needsUpdate=!0,Xt(E,k,q),E.side=vi):Xt(E,k,q)}this.compile=function(E,k,$=null){$===null&&($=E),L!==null&&L.renderStart(E,k,$),T=Se.get($),T.init(k),v.push(T),$.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),E!==$&&E.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),ae=this.localClippingEnabled,re=pe.init(this.clippingPlanes,ae),re===!0&&pe.setGlobalState(this.clippingPlanes,k),L!==null&&Ye.render(T.state.shadowsArray,$,k);let q=new Set;return E.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let we=Z.material;if(we)if(Array.isArray(we))for(let Ne=0;Ne<we.length;Ne++){let Re=we[Ne];ut(Re,$,k,Z),q.add(Re)}else ut(we,$,k,Z),q.add(we)}),T=v.pop(),L!==null&&L.renderEnd(),q},this.compileAsync=function(E,k,$=null){let q=this.compile(E,k,$);return new Promise(Z=>{function we(){if(q.forEach(function(Ne){let Ve=Y.get(Ne).currentProgram;(Ve===void 0||Ve.isReady())&&q.delete(Ne)}),q.size===0){Z(E);return}setTimeout(we,10)}Je.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Lt=null;function pn(E){Lt&&Lt(E)}function Dt(){gt.stop()}function wt(){gt.start()}let gt=new C_;gt.setAnimationLoop(pn),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(E){Lt=E,oe.setAnimationLoop(E),E===null?gt.stop():gt.start()},oe.addEventListener("sessionstart",Dt),oe.addEventListener("sessionend",wt),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(E,k);let $=oe.enabled===!0&&oe.isPresenting===!0,q=w!==null&&(K===null||$)&&w.begin(C,K);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(k),k=oe.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,k,K),T=Se.get(E,v.length),T.init(k),T.state.textureUnits=Q.getTextureUnits(),v.push(T),U.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),j.setFromProjectionMatrix(U,Vi,k.reversedDepth),ae=this.localClippingEnabled,re=pe.init(this.clippingPlanes,ae),M=be.get(E,A.length),M.init(),A.push(M),oe.enabled===!0&&oe.isPresenting===!0){let Ne=C.xr.getDepthSensingMesh();Ne!==null&&Gn(Ne,k,-1/0,C.sortObjects)}Gn(E,k,0,C.sortObjects),M.finish(),L!==null&&L.updateLights(T.state.lightsArray),C.sortObjects===!0&&M.sort(ue,ke),Ie=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Ie&&Qe.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&pe.beginShadows();let Z=T.state.shadowsArray;if(Ye.render(Z,E,k),re===!0&&pe.endShadows(),(q&&w.hasRenderPass())===!1){let Ne=M.opaque,Re=M.transmissive;if(T.setupLights(),k.isArrayCamera){let Ve=k.cameras;if(Re.length>0)for(let qe=0,st=Ve.length;qe<st;qe++){let mt=Ve[qe];An(Ne,Re,E,mt)}Ie&&Qe.render(E);for(let qe=0,st=Ve.length;qe<st;qe++){let mt=Ve[qe];Rt(M,E,mt,mt.viewport)}}else Re.length>0&&An(Ne,Re,E,k),Ie&&Qe.render(E),Rt(M,E,k)}K!==null&&B===0&&(Q.updateMultisampleRenderTarget(K),Q.updateRenderTargetMipmap(K)),q&&w.end(C),E.isScene===!0&&E.onAfterRender(C,E,k),Ee.resetDefaultState(),W=-1,R=null,v.pop(),v.length>0?(T=v[v.length-1],Q.setTextureUnits(T.state.textureUnits),re===!0&&pe.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,L!==null&&L.renderEnd()};function Gn(E,k,$,q){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(j)){q&&We.setFromMatrixPosition(E.matrixWorld).applyMatrix4(U);let Ne=ie.update(E),Re=E.material;Re.visible&&M.push(E,Ne,Re,$,We.z,null,k)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(j))){let Ne=ie.update(E),Re=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),We.copy(E.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),We.copy(Ne.boundingSphere.center)),We.applyMatrix4(E.matrixWorld).applyMatrix4(U)),Array.isArray(Re)){let Ve=Ne.groups;for(let qe=0,st=Ve.length;qe<st;qe++){let mt=Ve[qe],Ge=Re[mt.materialIndex];Ge&&Ge.visible&&M.push(E,Ne,Ge,$,We.z,mt,k)}}else Re.visible&&M.push(E,Ne,Re,$,We.z,null,k)}}let we=E.children;for(let Ne=0,Re=we.length;Ne<Re;Ne++)Gn(we[Ne],k,$,q)}function Rt(E,k,$,q){let{opaque:Z,transmissive:we,transparent:Ne}=E;T.setupLightsView($),re===!0&&pe.setGlobalState(C.clippingPlanes,$),q&&y.viewport(X.copy(q)),Z.length>0&&Hn(Z,k,$),we.length>0&&Hn(we,k,$),Ne.length>0&&Hn(Ne,k,$),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function An(E,k,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[q.id]===void 0){let Ge=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[q.id]=new Jt(1,1,{generateMipmaps:!0,type:Ge?un:oi,minFilter:as,samples:Math.max(4,I.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let we=T.state.transmissionRenderTarget[q.id],Ne=q.viewport||X;we.setSize(Ne.z*C.transmissionResolutionScale,Ne.w*C.transmissionResolutionScale);let Re=C.getRenderTarget(),Ve=C.getActiveCubeFace(),qe=C.getActiveMipmapLevel();C.setRenderTarget(we),C.getClearColor(ye),Pe=C.getClearAlpha(),Pe<1&&C.setClearColor(16777215,.5),C.clear(),Ie&&Qe.render($);let st=C.toneMapping;C.toneMapping=Hi;let mt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),T.setupLightsView(q),re===!0&&pe.setGlobalState(C.clippingPlanes,q),Hn(E,$,q),Q.updateMultisampleRenderTarget(we),Q.updateRenderTargetMipmap(we),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let yt=0,tn=k.length;yt<tn;yt++){let Nt=k[yt],{object:Et,geometry:Cn,material:De,group:Wn}=Nt;if(De.side===vi&&Et.layers.test(q.layers)){let xt=De.side;De.side=En,De.needsUpdate=!0,en(Et,$,q,Cn,De,Wn),De.side=xt,De.needsUpdate=!0,Ge=!0}}Ge===!0&&(Q.updateMultisampleRenderTarget(we),Q.updateRenderTargetMipmap(we))}C.setRenderTarget(Re,Ve,qe),C.setClearColor(ye,Pe),mt!==void 0&&(q.viewport=mt),C.toneMapping=st}function Hn(E,k,$){let q=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,we=E.length;Z<we;Z++){let Ne=E[Z],{object:Re,geometry:Ve,group:qe}=Ne,st=Ne.material;st.allowOverride===!0&&q!==null&&(st=q),Re.layers.test($.layers)&&en(Re,k,$,Ve,st,qe)}}function en(E,k,$,q,Z,we){L!==null&&Z.isNodeMaterial&&L.setObject(E,Z),E.onBeforeRender(C,k,$,q,Z,we),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Z.onBeforeRender(C,k,$,q,E,we),Z.transparent===!0&&Z.side===vi&&Z.forceSinglePass===!1?(Z.side=En,Z.needsUpdate=!0,C.renderBufferDirect($,k,q,Z,E,we),Z.side=rs,Z.needsUpdate=!0,C.renderBufferDirect($,k,q,Z,E,we),Z.side=vi):C.renderBufferDirect($,k,q,Z,E,we),E.onAfterRender(C,k,$,q,Z,we)}function Xt(E,k,$){k.isScene!==!0&&(k=Be);let q=Y.get(E),Z=T.state.lights,we=T.state.shadowsArray,Ne=Z.state.version,Re=Me.getParameters(E,Z.state,we,k,$,T.state.lightProbeGridArray),Ve=Me.getProgramCacheKey(Re),qe=q.programs;q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,q.fog=k.fog;let st=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;q.envMap=_e.get(E.envMap||q.environment,st),q.envMapRotation=q.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,qe===void 0&&(E.addEventListener("dispose",ze),qe=new Map,q.programs=qe);let mt=qe.get(Ve);if(mt!==void 0){if(q.currentProgram===mt&&q.lightsStateVersion===Ne)return Yi(E,Re),mt}else Re.uniforms=Me.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,$,Re),E.onBeforeCompile(Re,C),mt=Me.acquireProgram(Re,Ve),qe.set(Ve,mt),q.uniforms=Re.uniforms;let Ge=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ge.clippingPlanes=pe.uniform),Yi(E,Re),q.needsLights=Mi(E),q.lightsStateVersion=Ne,q.needsLights&&(Ge.ambientLightColor.value=Z.state.ambient,Ge.lightProbe.value=Z.state.probe,Ge.sunLights.value=Z.state.sun,Ge.sunLightShadows.value=Z.state.sunShadow,Ge.directionalLights.value=Z.state.directional,Ge.directionalLightShadows.value=Z.state.directionalShadow,Ge.spotLights.value=Z.state.spot,Ge.spotLightShadows.value=Z.state.spotShadow,Ge.rectAreaLights.value=Z.state.rectArea,Ge.ltc_1.value=Z.state.rectAreaLTC1,Ge.ltc_2.value=Z.state.rectAreaLTC2,Ge.pointLights.value=Z.state.point,Ge.pointLightShadows.value=Z.state.pointShadow,Ge.hemisphereLights.value=Z.state.hemi,Ge.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ge.sunShadowCascade.value=Z.state.sunShadowCascade,Ge.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ge.spotLightMatrix.value=Z.state.spotLightMatrix,Ge.spotLightMap.value=Z.state.spotLightMap,Ge.pointShadowMatrix.value=Z.state.pointShadowMatrix),q.lightProbeGrid=T.state.lightProbeGridArray.length>0,q.currentProgram=mt,q.uniformsList=null,mt}function an(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=ta.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Yi(E,k){let $=Y.get(E);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function $s(E,k){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(k.matrixWorld);for(let $=0,q=E.length;$<q;$++){let Z=E[$];if(Z.texture!==null&&Z.boundingBox.containsPoint(x))return Z}return null}function mn(E,k,$,q,Z){k.isScene!==!0&&(k=Be),Q.resetTextureUnits();let we=k.fog,Ne=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?k.environment:null,Re=K===null?C.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:dt.workingColorSpace,Ve=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,qe=_e.get(q.envMap||Ne,Ve),st=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,mt=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ge=!!$.morphAttributes.position,yt=!!$.morphAttributes.normal,tn=!!$.morphAttributes.color,Nt=Hi;q.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Nt=C.toneMapping);let Et=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Cn=Et!==void 0?Et.length:0,De=Y.get(q),Wn=T.state.lights;if(re===!0&&(ae===!0||E!==R)){let Pt=E===R&&q.id===W;pe.setState(q,E,Pt)}let xt=!1;q.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Wn.state.version||De.outputColorSpace!==Re||Z.isBatchedMesh&&De.batching===!1||!Z.isBatchedMesh&&De.batching===!0||Z.isBatchedMesh&&De.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&De.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&De.instancing===!1||!Z.isInstancedMesh&&De.instancing===!0||Z.isSkinnedMesh&&De.skinning===!1||!Z.isSkinnedMesh&&De.skinning===!0||Z.isInstancedMesh&&De.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&De.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&De.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&De.instancingMorph===!1&&Z.morphTexture!==null||De.envMap!==qe||q.fog===!0&&De.fog!==we||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==pe.numPlanes||De.numIntersection!==pe.numIntersection)||De.vertexAlphas!==st||De.vertexTangents!==mt||De.morphTargets!==Ge||De.morphNormals!==yt||De.morphColors!==tn||De.toneMapping!==Nt||De.morphTargetsCount!==Cn||!!De.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,De.__version=q.version);let bi=De.currentProgram;xt===!0&&(bi=Xt(q,k,Z),L&&q.isNodeMaterial&&L.onUpdateProgram(q,bi,De));let qi=!1,Pr=!1,Qs=!1,Tt=bi.getUniforms(),Kt=De.uniforms;if(y.useProgram(bi.program)&&(qi=!0,Pr=!0,Qs=!0),q.id!==W&&(W=q.id,Pr=!0),De.needsLights){let Pt=$s(T.state.lightProbeGridArray,Z);De.lightProbeGrid!==Pt&&(De.lightProbeGrid=Pt,Pr=!0)}if(qi||R!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Tt.setValue(F,"projectionMatrix",E.projectionMatrix),Tt.setValue(F,"viewMatrix",E.matrixWorldInverse);let Lr=Tt.map.cameraPosition;Lr!==void 0&&Lr.setValue(F,me.setFromMatrixPosition(E.matrixWorld)),I.logarithmicDepthBuffer&&Tt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Tt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),R!==E&&(R=E,Pr=!0,Qs=!0)}if(De.needsLights&&(Wn.state.sunShadowMap.length>0&&Tt.setValue(F,"sunShadowMap",Wn.state.sunShadowMap,Q),Wn.state.directionalShadowMap.length>0&&Tt.setValue(F,"directionalShadowMap",Wn.state.directionalShadowMap,Q),Wn.state.spotShadowMap.length>0&&Tt.setValue(F,"spotShadowMap",Wn.state.spotShadowMap,Q),Wn.state.pointShadowMap.length>0&&Tt.setValue(F,"pointShadowMap",Wn.state.pointShadowMap,Q)),Z.isSkinnedMesh){Tt.setOptional(F,Z,"bindMatrix"),Tt.setOptional(F,Z,"bindMatrixInverse");let Pt=Z.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),Tt.setValue(F,"boneTexture",Pt.boneTexture,Q))}Z.isBatchedMesh&&(Tt.setOptional(F,Z,"batchingTexture"),Tt.setValue(F,"batchingTexture",Z._matricesTexture,Q),Tt.setOptional(F,Z,"batchingIdTexture"),Tt.setValue(F,"batchingIdTexture",Z._indirectTexture,Q),Tt.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Tt.setValue(F,"batchingColorTexture",Z._colorsTexture,Q));let Ir=$.morphAttributes;if((Ir.position!==void 0||Ir.normal!==void 0||Ir.color!==void 0)&&z.update(Z,$,bi),(Pr||De.receiveShadow!==Z.receiveShadow)&&(De.receiveShadow=Z.receiveShadow,Tt.setValue(F,"receiveShadow",Z.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&k.environment!==null&&(Kt.envMapIntensity.value=k.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=cw()),Pr){if(Tt.setValue(F,"toneMappingExposure",C.toneMappingExposure),De.needsLights&&$t(Kt,Qs),we&&q.fog===!0&&Fe.refreshFogUniforms(Kt,we),Fe.refreshMaterialUniforms(Kt,q,ee,J,T.state.transmissionRenderTarget[E.id]),De.needsLights&&De.lightProbeGrid){let Pt=De.lightProbeGrid;Kt.probesSH.value=Pt.texture,Kt.probesMin.value.copy(Pt.boundingBox.min),Kt.probesMax.value.copy(Pt.boundingBox.max),Kt.probesResolution.value.copy(Pt.resolution)}ta.upload(F,an(De),Kt,Q)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ta.upload(F,an(De),Kt,Q),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Tt.setValue(F,"center",Z.center),Tt.setValue(F,"modelViewMatrix",Z.modelViewMatrix),Tt.setValue(F,"normalMatrix",Z.normalMatrix),Tt.setValue(F,"modelMatrix",Z.matrixWorld),q.uniformsGroups!==void 0){let Pt=q.uniformsGroups;for(let Lr=0,js=Pt.length;Lr<js;Lr++){let Bp=Pt[Lr];se.update(Bp,bi),se.bind(Bp,bi)}}return bi}function $t(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.sunLights.needsUpdate=k,E.sunLightShadows.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Mi(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(E,k,$){let q=Y.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Y.get(E.texture).__webglTexture=k,Y.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){let $=Y.get(E);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,$=0){K=E,V=k,B=$;let q=null,Z=!1,we=!1;if(E){let Re=Y.get(E);if(Re.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(F.FRAMEBUFFER,Re.__webglFramebuffer),X.copy(E.viewport),ge.copy(E.scissor),de=E.scissorTest,y.viewport(X),y.scissor(ge),y.setScissorTest(de),W=-1;return}else if(Re.__webglFramebuffer===void 0)Q.setupRenderTarget(E);else if(Re.__hasExternalTextures)Q.rebindTextures(E,Y.get(E.texture).__webglTexture,Y.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let st=E.depthTexture;if(Re.__boundDepthTexture!==st){if(st!==null&&Y.has(st)&&(E.width!==st.image.width||E.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(E)}}let Ve=E.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(we=!0);let qe=Y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qe[k])?q=qe[k][$]:q=qe[k],Z=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?q=Y.get(E).__webglMultisampledFramebuffer:Array.isArray(qe)?q=qe[$]:q=qe,X.copy(E.viewport),ge.copy(E.scissor),de=E.scissorTest}else X.copy(xe).multiplyScalar(ee).floor(),ge.copy(Ae).multiplyScalar(ee).floor(),de=Le;if($!==0&&(q=G),y.bindFramebuffer(F.FRAMEBUFFER,q)&&y.drawBuffers(E,q),y.viewport(X),y.scissor(ge),y.setScissorTest(de),Z){let Re=Y.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Re.__webglTexture,$)}else if(we){let Re=k;for(let Ve=0;Ve<E.textures.length;Ve++){let qe=Y.get(E.textures[Ve]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ve,qe.__webglTexture,$,Re)}}else if(E!==null&&$!==0){let Re=Y.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Re.__webglTexture,$)}W=-1};function Ks(E){let k=Y.get(E);return(k.__readFormat!==E.format||k.__readType!==E.type)&&(k.__readFormat=E.format,k.__readType=E.type,k.__formatReadable=I.textureFormatReadable(E.format),k.__typeReadable=I.textureTypeReadable(E.type)),k}this.readRenderTargetPixels=function(E,k,$,q,Z,we,Ne,Re=0){if(!(E&&E.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ve=Ve[Ne]),Ve){y.bindFramebuffer(F.FRAMEBUFFER,Ve);try{let qe=E.textures[Re],st=qe.format,mt=qe.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Re);let Ge=Ks(qe);if(Ge.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-q&&$>=0&&$<=E.height-Z&&F.readPixels(k,$,q,Z,Te.convert(st),Te.convert(mt),we)}finally{let qe=K!==null?Y.get(K).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(E,k,$,q,Z,we,Ne,Re=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ve=Ve[Ne]),Ve)if(k>=0&&k<=E.width-q&&$>=0&&$<=E.height-Z){y.bindFramebuffer(F.FRAMEBUFFER,Ve);let qe=E.textures[Re],st=qe.format,mt=qe.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Re);let Ge=Ks(qe);if(Ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let yt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,yt),F.bufferData(F.PIXEL_PACK_BUFFER,we.byteLength,F.STREAM_READ),F.readPixels(k,$,q,Z,Te.convert(st),Te.convert(mt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let tn=K!==null?Y.get(K).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,tn);let Nt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Q0(F,Nt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,yt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,we),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(yt),F.deleteSync(Nt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,$=0){let q=Math.pow(2,-$),Z=Math.floor(E.image.width*q),we=Math.floor(E.image.height*q),Ne=k!==null?k.x:0,Re=k!==null?k.y:0;Q.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Ne,Re,Z,we),y.unbindTexture()},this.copyTextureToTexture=function(E,k,$=null,q=null,Z=0,we=0){let Ne,Re,Ve,qe,st,mt,Ge,yt,tn,Nt=E.isCompressedTexture?E.mipmaps[we]:E.image;if($!==null)Ne=$.max.x-$.min.x,Re=$.max.y-$.min.y,Ve=$.isBox3?$.max.z-$.min.z:1,qe=$.min.x,st=$.min.y,mt=$.isBox3?$.min.z:0;else{let Kt=Math.pow(2,-Z);Ne=Math.floor(Nt.width*Kt),Re=Math.floor(Nt.height*Kt),E.isDataArrayTexture?Ve=Nt.depth:E.isData3DTexture?Ve=Math.floor(Nt.depth*Kt):Ve=1,qe=0,st=0,mt=0}q!==null?(Ge=q.x,yt=q.y,tn=q.z):(Ge=0,yt=0,tn=0);let Et=Te.convert(k.format),Cn=Te.convert(k.type),De;k.isData3DTexture?(Q.setTexture3D(k,0),De=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Q.setTexture2DArray(k,0),De=F.TEXTURE_2D_ARRAY):(Q.setTexture2D(k,0),De=F.TEXTURE_2D),y.activeTexture(F.TEXTURE0),y.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),y.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),y.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);let Wn=y.getParameter(F.UNPACK_ROW_LENGTH),xt=y.getParameter(F.UNPACK_IMAGE_HEIGHT),bi=y.getParameter(F.UNPACK_SKIP_PIXELS),qi=y.getParameter(F.UNPACK_SKIP_ROWS),Pr=y.getParameter(F.UNPACK_SKIP_IMAGES);y.pixelStorei(F.UNPACK_ROW_LENGTH,Nt.width),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Nt.height),y.pixelStorei(F.UNPACK_SKIP_PIXELS,qe),y.pixelStorei(F.UNPACK_SKIP_ROWS,st),y.pixelStorei(F.UNPACK_SKIP_IMAGES,mt);let Qs=E.isDataArrayTexture||E.isData3DTexture,Tt=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let Kt=Y.get(E),Ir=Y.get(k),Pt=Y.get(Kt.__renderTarget),Lr=Y.get(Ir.__renderTarget);y.bindFramebuffer(F.READ_FRAMEBUFFER,Pt.__webglFramebuffer),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,Lr.__webglFramebuffer);for(let js=0;js<Ve;js++)Qs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(E).__webglTexture,Z,mt+js),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(k).__webglTexture,we,tn+js)),F.blitFramebuffer(qe,st,Ne,Re,Ge,yt,Ne,Re,F.DEPTH_BUFFER_BIT,F.NEAREST);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||E.isRenderTargetTexture||Y.has(E)){let Kt=Y.get(E),Ir=Y.get(k);y.bindFramebuffer(F.READ_FRAMEBUFFER,P),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,N);for(let Pt=0;Pt<Ve;Pt++)Qs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Kt.__webglTexture,Z,mt+Pt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Kt.__webglTexture,Z),Tt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ir.__webglTexture,we,tn+Pt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ir.__webglTexture,we),Z!==0?F.blitFramebuffer(qe,st,Ne,Re,Ge,yt,Ne,Re,F.COLOR_BUFFER_BIT,F.NEAREST):Tt?F.copyTexSubImage3D(De,we,Ge,yt,tn+Pt,qe,st,Ne,Re):F.copyTexSubImage2D(De,we,Ge,yt,qe,st,Ne,Re);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Tt?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(De,we,Ge,yt,tn,Ne,Re,Ve,Et,Cn,Nt.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(De,we,Ge,yt,tn,Ne,Re,Ve,Et,Nt.data):F.texSubImage3D(De,we,Ge,yt,tn,Ne,Re,Ve,Et,Cn,Nt):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,we,Ge,yt,Ne,Re,Et,Cn,Nt.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,we,Ge,yt,Nt.width,Nt.height,Et,Nt.data):F.texSubImage2D(F.TEXTURE_2D,we,Ge,yt,Ne,Re,Et,Cn,Nt);y.pixelStorei(F.UNPACK_ROW_LENGTH,Wn),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt),y.pixelStorei(F.UNPACK_SKIP_PIXELS,bi),y.pixelStorei(F.UNPACK_SKIP_ROWS,qi),y.pixelStorei(F.UNPACK_SKIP_IMAGES,Pr),we===0&&k.generateMipmaps&&F.generateMipmap(De),y.unbindTexture()},this.initRenderTarget=function(E){Y.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){V=0,B=0,K=null,y.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var hw='-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',Lp='ui-monospace, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',Oe={bg:"#0b0d12",panel:"#11141b",panel2:"#161a23",line:"rgba(255,255,255,0.07)",ink:"#e8eaef",muted:"#8a90a0",faint:"#5a6070",accent:"#3d9bff",green:"#3fcf8e",kw:"#cf8e6d",fn:"#56a8f5",str:"#6aab73",cm:"#7a7e85",prop:"#c77dbb",type:"#bcbec4"};function zt(i,e,t,n,r,s){let o=Math.min(s,n/2,r/2);i.beginPath(),i.moveTo(e+o,t),i.arcTo(e+n,t,e+n,t+r,o),i.arcTo(e+n,t+r,e,t+r,o),i.arcTo(e,t+r,e,t,o),i.arcTo(e,t,e+n,t,o),i.closePath()}function Mt(i,e,t=400,n=hw){i.font=`${t} ${e}px ${n}`}function Dp(i,e,t,n,r){i.save(),i.strokeStyle=r,i.lineWidth=n*.16,i.lineCap="round",i.lineJoin="round",i.beginPath(),i.moveTo(e-n*.32,t),i.lineTo(e-n*.08,t+n*.24),i.lineTo(e+n*.34,t-n*.24),i.stroke(),i.restore()}function uw(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function Lu(i,e,t){let n=uw(i,e),r=n.getContext("2d"),s="";return{canvas:n,draw(o){let a=JSON.stringify(o);return a===s?!1:(s=a,r.save(),t(r,i,e,o),r.restore(),!0)}}}var O_=[[["package ","kw"],["org.sshorg.shared","type"]],[],[["interface ","kw"],["Product","type"],[" {","type"]],[["    val ","kw"],["platform","prop"],[": Platform","type"]],[["    fun ","kw"],["render","fn"],["(): Screen","type"]],[["}","type"]],[],[["fun ","kw"],["build","fn"],["() = ","type"],["product","fn"],[" {","type"]],[["    ","type"],["android","fn"],["()","type"]],[["    ","type"],["ios","fn"],["()","type"]],[["    ","type"],["desktop","fn"],["()","type"]],[["    ","type"],["web","fn"],["()","type"]],[["}","type"]],[],[["// one idea \xB7 many surfaces","cm"]],[["val ","kw"],["future","prop"],[" = ","type"],['"shared"',"str"]]],fw=O_.reduce((i,e)=>i+e.reduce((t,[n])=>t+n.length,0)+1,0),dw=[[0,"sshorg","dir"],[1,"shared","dir"],[2,"commonMain","dir"],[3,"Product.kt","kt",!0],[3,"Platform.kt","kt"],[2,"androidMain","dir-closed"],[2,"iosMain","dir-closed"],[1,"androidApp","dir-closed"],[1,"iosApp","dir-closed"],[1,"desktopApp","dir-closed"],[1,"build.gradle.kts","gradle"]];function F_(){return Lu(1600,1032,(i,e,t,{typing:n,caret:r})=>{i.fillStyle=Oe.bg,i.fillRect(0,0,e,t),i.fillStyle="#12151c",i.fillRect(0,0,e,58),["#ff5f57","#febc2e","#28c840"].forEach((m,_)=>{i.fillStyle=m,i.beginPath(),i.arc(32+_*26,29,7.5,0,Math.PI*2),i.fill()}),Mt(i,19,500),i.fillStyle=Oe.muted,i.textAlign="center",i.fillText("sshorg \u2014 shared/src/commonMain/kotlin/Product.kt",e/2,36),i.textAlign="left",i.fillStyle=Oe.line,i.fillRect(0,58,e,1);let s=310;i.fillStyle="#0e1117",i.fillRect(0,59,s,t-59-38),Mt(i,14,700),i.fillStyle=Oe.faint,i.fillText("PROJECT",28,98),dw.forEach(([m,_,p,g],S)=>{let b=140+S*40;g&&(i.fillStyle="rgba(61,155,255,0.16)",zt(i,12,b-26,s-24,36,8),i.fill());let x=28+m*22;i.fillStyle=p.startsWith("dir")?"#7f8aa3":p==="kt"?"#a97bff":"#5fb3a1",zt(i,x,b-16,16,14,3),i.fill(),Mt(i,18,g?600:400),i.fillStyle=g?Oe.ink:"#aeb4c2",i.fillText(_,x+26,b-3)}),i.fillStyle=Oe.line,i.fillRect(s,59,1,t-59-38);let o=s+1,a=360,l=e-o-a;i.fillStyle="#0e1117",i.fillRect(o,59,l,50),i.fillStyle=Oe.bg,i.fillRect(o,59,200,50),i.fillStyle=Oe.accent,i.fillRect(o,59,200,3),Mt(i,18,500),i.fillStyle=Oe.ink,i.fillText("Product.kt",o+26,91),i.fillStyle=Oe.muted,i.fillText("Platform.kt",o+226,91),i.fillStyle=Oe.line,i.fillRect(o,109,l,1);let c=Math.floor(n*fw),h=null,d=44;Mt(i,23,400,Lp);let u=i.measureText("M").width;O_.forEach((m,_)=>{let p=160+_*d;i.fillStyle=Oe.faint,i.textAlign="right",i.fillText(String(_+1),o+60,p),i.textAlign="left";let g=o+92;for(let[S,b]of m){if(c<=0)break;let x=S.slice(0,c);c-=x.length,i.fillStyle=Oe[b],i.fillText(x,g,p),g+=x.length*u}c>0?c-=1:h===null&&(h=[g,p])}),h&&r&&(i.fillStyle=Oe.accent,i.fillRect(h[0]+1,h[1]-22,3,28));let f=e-a;i.fillStyle="#0e1117",i.fillRect(f,59,a,t-59-38),i.fillStyle=Oe.line,i.fillRect(f,59,1,t-59-38),Mt(i,14,700),i.fillStyle=Oe.faint,i.fillText("TARGETS",f+28,98),["Android","iOS","Desktop","Web"].forEach((m,_)=>{let p=132+_*74,g=n>.55+_*.1;i.fillStyle=Oe.panel2,zt(i,f+20,p,a-40,58,12),i.fill(),Mt(i,20,600),i.fillStyle=Oe.ink,i.fillText(m,f+44,p+37),g?(i.fillStyle="rgba(63,207,142,0.16)",i.beginPath(),i.arc(f+a-62,p+29,16,0,Math.PI*2),i.fill(),Dp(i,f+a-62,p+29,18,Oe.green)):(i.strokeStyle=Oe.faint,i.lineWidth=2,i.beginPath(),i.arc(f+a-62,p+29,10,0,Math.PI*2),i.stroke())}),Mt(i,14,700),i.fillStyle=Oe.faint,i.fillText("BUILD",f+28,460),i.fillStyle=Oe.panel2,zt(i,f+28,478,a-56,10,5),i.fill(),i.fillStyle=n>=1?Oe.green:Oe.accent,zt(i,f+28,478,Math.max(10,(a-56)*n),10,5),i.fill(),Mt(i,17,500),i.fillStyle=Oe.muted,i.fillText(n>=1?"All targets up to date":"Compiling shared module\u2026",f+28,520),i.fillStyle="#12151c",i.fillRect(0,t-38,e,38),Mt(i,16,500),i.fillStyle=Oe.muted,i.fillText("main",28,t-13),i.fillText("Kotlin Multiplatform",110,t-13),i.textAlign="right",i.fillText("UTF-8   LF   4 spaces",e-28,t-13),i.textAlign="left"})}function B_(){return Lu(700,1472,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#0d1018"),n.addColorStop(1,"#0a0c12"),i.fillStyle=n,i.fillRect(0,0,e,t),Mt(i,30,600),i.fillStyle=Oe.ink,i.fillText("9:41",64,72),[0,1,2,3].forEach(m=>{i.fillRect(e-170+m*12,70-(m+1)*6,8,(m+1)*6)}),zt(i,e-104,50,50,24,7),i.lineWidth=2.5,i.strokeStyle=Oe.ink,i.stroke(),zt(i,e-100,54,36,16,4),i.fill(),i.fillStyle="#000",zt(i,e/2-96,30,192,56,28),i.fill(),Mt(i,26,500),i.fillStyle=Oe.muted,i.fillText("Good evening",52,176),Mt(i,58,700),i.fillStyle=Oe.ink,i.fillText("Your product",52,244),i.fillStyle="rgba(61,155,255,0.16)",zt(i,e-164,146,112,42,21),i.fill(),Mt(i,20,700),i.fillStyle=Oe.accent,i.textAlign="center",i.fillText("DEMO",e-108,174),i.textAlign="left";let r=40,s=290,o=e-80,a=380,l=i.createLinearGradient(r,s,r+o,s+a);l.addColorStop(0,"#1c2c4d"),l.addColorStop(1,"#121a2c"),i.fillStyle=l,zt(i,r,s,o,a,40),i.fill(),Mt(i,24,500),i.fillStyle="#a9b6d3",i.fillText("Weekly activity",r+36,s+62),Mt(i,64,700),i.fillStyle=Oe.ink,i.fillText("Growing",r+36,s+140);let c=[.62,.55,.6,.44,.48,.34,.38,.22,.26,.14],h=s+180,d=160;i.beginPath(),c.forEach((m,_)=>{let p=r+36+_/(c.length-1)*(o-72),g=h+m*d;if(_===0)i.moveTo(p,g);else{let S=r+36+(_-1)/(c.length-1)*(o-72),b=h+c[_-1]*d;i.bezierCurveTo((S+p)/2,b,(S+p)/2,g,p,g)}}),i.strokeStyle="#6fb6ff",i.lineWidth=6,i.lineCap="round",i.stroke(),i.lineTo(r+o-36,h+d),i.lineTo(r+36,h+d),i.closePath();let u=i.createLinearGradient(0,h,0,h+d);u.addColorStop(0,"rgba(111,182,255,0.35)"),u.addColorStop(1,"rgba(111,182,255,0)"),i.fillStyle=u,i.fill(),[["Compose UI","Native feel on Android & iOS","#3d9bff"],["Shared domain","One Kotlin core","#a97bff"],["Realtime","Synced across devices","#3fcf8e"]].forEach(([m,_,p],g)=>{let S=712+g*162;i.fillStyle=Oe.panel2,zt(i,40,S,e-80,140,32),i.fill(),i.fillStyle=p,i.globalAlpha=.18,i.beginPath(),i.arc(116,S+70,38,0,Math.PI*2),i.fill(),i.globalAlpha=1,i.beginPath(),i.arc(116,S+70,13,0,Math.PI*2),i.fill(),Mt(i,32,650),i.fillStyle=Oe.ink,i.fillText(m,180,S+62),Mt(i,24,400),i.fillStyle=Oe.muted,i.fillText(_,180,S+100),i.strokeStyle=Oe.faint,i.lineWidth=4,i.beginPath(),i.moveTo(e-92,S+56),i.lineTo(e-78,S+70),i.lineTo(e-92,S+84),i.stroke()}),i.fillStyle="#10131a",i.fillRect(0,t-170,e,170),i.fillStyle=Oe.line,i.fillRect(0,t-170,e,2),[0,1,2,3].forEach(m=>{let _=100+m*((e-200)/3);i.fillStyle=m===0?Oe.accent:"#4a5060",zt(i,_-22,t-132,44,44,12),i.fill()}),i.fillStyle="#d7dae2",zt(i,e/2-110,t-34,220,10,5),i.fill()})}var Ip=[{id:"shared",label:"shared \xB7 KMP",x:.5,y:.54,main:!0},{id:"android",label:"Android",x:.2,y:.33,color:"#3fcf8e"},{id:"ios",label:"iOS",x:.8,y:.33,color:"#e8eaef"},{id:"desktop",label:"Desktop",x:.17,y:.8,color:"#a97bff"},{id:"web",label:"Web",x:.83,y:.8,color:"#f0b35a"},{id:"ai",label:"AI agents",x:.5,y:.2,color:"#ff7eb6"},{id:"ci",label:"CI/CD",x:.5,y:.9,color:"#3d9bff"}];function z_(){return Lu(1480,1050,(i,e,t,{links:n})=>{i.fillStyle=Oe.bg,i.fillRect(0,0,e,t),i.fillStyle="rgba(255,255,255,0.05)";for(let a=30;a<e;a+=40)for(let l=120;l<t;l+=40)i.fillRect(a,l,2,2);Mt(i,26,650),i.fillStyle=Oe.ink,i.fillText("Architecture",48,70),Mt(i,20,400),i.fillStyle=Oe.muted,i.fillText("compose-graph \xB7 one shared core",230,70),i.fillStyle="rgba(63,207,142,0.14)",zt(i,e-150,42,102,40,20),i.fill(),i.fillStyle=Oe.green,i.beginPath(),i.arc(e-124,62,6,0,Math.PI*2),i.fill(),Mt(i,18,700),i.fillText("LIVE",e-108,69);let r=Ip[0],s=r.x*e,o=r.y*t;Ip.slice(1).forEach((a,l)=>{let c=Math.min(1,Math.max(0,n*1.4-l*.08));if(c<=0)return;let h=a.x*e,d=a.y*t,u=i.createLinearGradient(s,o,h,d);u.addColorStop(0,"rgba(61,155,255,0.9)"),u.addColorStop(1,a.color),i.strokeStyle=u,i.lineWidth=4,i.beginPath(),i.moveTo(s,o),i.lineTo(s+(h-s)*c,o+(d-o)*c),i.stroke()}),Ip.forEach((a,l)=>{let c=a.x*e,h=a.y*t,d=a.main||n*1.4-(l-1)*.08>=1;Mt(i,a.main?30:24,650);let u=i.measureText(a.label).width+(a.main?84:64),f=a.main?84:64;i.fillStyle=a.main?"#15233d":Oe.panel2,zt(i,c-u/2,h-f/2,u,f,f/2),i.fill(),i.strokeStyle=a.main?Oe.accent:d?a.color:"rgba(255,255,255,0.12)",i.lineWidth=a.main?3:2,i.stroke(),i.fillStyle=Oe.ink,i.textAlign="center",i.fillText(a.label,c,h+(a.main?10:8)),i.textAlign="left"})})}var kl=["Code","Test","Review","Deploy","Live"],pw=["Unit tests","UI tests","Lint & detekt","AI code review"],U_=["$ ./gradlew check","> Task :shared:allTests","> Task :androidApp:lint","BUILD SUCCESSFUL","deploy \u2192 production","release is live \u2713"];function k_(){return Lu(1680,960,(i,e,t,{pipeline:n,pulse:r})=>{i.fillStyle=Oe.bg,i.fillRect(0,0,e,t),Mt(i,30,700),i.fillStyle=Oe.ink,i.fillText("release / production",56,82),i.fillStyle=Oe.panel2,zt(i,380,52,110,42,21),i.fill(),Mt(i,20,600,Lp),i.fillStyle=Oe.muted,i.fillText("main",408,80);let s=n>=1;i.fillStyle=s?"rgba(63,207,142,0.14)":"rgba(61,155,255,0.14)",zt(i,e-230,52,174,42,21),i.fill(),Mt(i,19,700),i.fillStyle=s?Oe.green:Oe.accent,i.textAlign="center",i.fillText(s?"PASSED":"RUNNING",e-143,80),i.textAlign="left";let o=230,a=140,l=e-140,c=(l-a)/(kl.length-1);i.strokeStyle="rgba(255,255,255,0.1)",i.lineWidth=6,i.beginPath(),i.moveTo(a,o),i.lineTo(l,o),i.stroke();let h=Math.min(1,n*1.08);i.strokeStyle=Oe.green,i.beginPath(),i.moveTo(a,o),i.lineTo(a+(l-a)*h,o),i.stroke(),kl.forEach((f,m)=>{let _=a+m*c,p=h>=m/(kl.length-1)-1e-6&&(m<kl.length-1||h>=1),g=!p&&h>=(m-1)/(kl.length-1);i.fillStyle=p?Oe.green:g?Oe.accent:"#262b36",i.beginPath(),i.arc(_,o,30,0,Math.PI*2),i.fill(),g&&(i.strokeStyle="rgba(61,155,255,0.35)",i.lineWidth=5,i.beginPath(),i.arc(_,o,40+r*8,0,Math.PI*2),i.stroke()),p&&Dp(i,_,o,30,"#07140d"),Mt(i,24,600),i.fillStyle=p||g?Oe.ink:Oe.muted,i.textAlign="center",i.fillText(f,_,o+78),i.textAlign="left"});let d=390;i.fillStyle=Oe.panel,zt(i,56,d,760,500,28),i.fill(),Mt(i,16,700),i.fillStyle=Oe.faint,i.fillText("CHECKS",92,d+56),pw.forEach((f,m)=>{let _=d+118+m*90,p=n>.2+m*.12;Mt(i,26,550),i.fillStyle=Oe.ink,i.fillText(f,150,_+9),p?(i.fillStyle="rgba(63,207,142,0.16)",i.beginPath(),i.arc(108,_,20,0,Math.PI*2),i.fill(),Dp(i,108,_,22,Oe.green)):(i.strokeStyle=Oe.faint,i.lineWidth=3,i.beginPath(),i.arc(108,_,13,0,Math.PI*2),i.stroke())}),i.fillStyle="#07090d",zt(i,856,d,e-912,500,28),i.fill(),Mt(i,16,700),i.fillStyle=Oe.faint,i.fillText("LOG",892,d+56),Mt(i,24,400,Lp);let u=Math.floor(n*U_.length+.001);U_.slice(0,u).forEach((f,m)=>{i.fillStyle=f.startsWith("$")?Oe.ink:f.includes("\u2713")||f.includes("SUCCESS")?Oe.green:Oe.muted,i.fillText(f,892,d+118+m*58)})})}function V_(i,e,t){let n=-i/2,r=-e/2,s=Math.min(t,i/2,e/2),o=new ks;return o.moveTo(n+s,r),o.lineTo(n+i-s,r),o.absarc(n+i-s,r+s,s,-Math.PI/2,0,!1),o.lineTo(n+i,r+e-s),o.absarc(n+i-s,r+e-s,s,0,Math.PI/2,!1),o.lineTo(n+s,r+e),o.absarc(n+s,r+e-s,s,Math.PI/2,Math.PI,!1),o.lineTo(n,r+s),o.absarc(n+s,r+s,s,Math.PI,Math.PI*1.5,!1),o}function Zs(i,e,t,n,r){let s=t-r*2,o=new dl(V_(i-r*2,e-r*2,Math.max(.001,n-r)),{depth:s,bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelOffset:0,bevelSegments:6,curveSegments:18});return o.translate(0,0,-s/2),o}function cr(i,e,t){let n=new pl(V_(i,e,t),18),r=n.attributes.position,s=n.attributes.uv;for(let o=0;o<r.count;o+=1)s.setXY(o,r.getX(o)/i+.5,r.getY(o)/e+.5);return s.needsUpdate=!0,n}function Du(i,e){let t=new Ar(i);return t.colorSpace=on,t.anisotropy=e,t}function mw(){let t=document.createElement("canvas");t.width=2048,t.height=1444;let n=t.getContext("2d"),r={x:2048*.085,y:1444*.07,w:2048*.83,h:1444*.44};n.fillStyle="rgba(8,9,11,0.55)",zt(n,r.x-14,r.y-14,r.w+28,r.h+28,26),n.fill();let s=[{n:14,h:.6},{n:14,h:1},{n:14,h:1},{n:13,h:1},{n:12,h:1},{n:0,h:1}],o=12,a=(r.h-o*5)/5.6,l=r.y;s.forEach((d,u)=>{let f=a*d.h,m=u===5?[1,1,1,1.3,5.2,1.3,1,1,1]:Array.from({length:d.n},(S,b)=>d.n===13&&(b===0||b===12)?1.55:d.n===12&&(b===0||b===11)?2.1:1),_=m.reduce((S,b)=>S+b,0),p=(r.w-o*(m.length-1))/_,g=r.x;m.forEach(S=>{let b=p*S;n.fillStyle="#111215",zt(n,g,l,b,f,10),n.fill(),n.fillStyle="rgba(255,255,255,0.045)",zt(n,g+3,l+3,b-6,f*.45,8),n.fill(),g+=b+o}),l+=f+o});let c=2048*.4,h=1444*.33;return n.strokeStyle="rgba(0,0,0,0.16)",n.lineWidth=5,n.fillStyle="rgba(0,0,0,0.035)",zt(n,(2048-c)/2,1444*.6,c,h,34),n.fill(),n.stroke(),t}function gw(){let i=document.createElement("canvas");i.width=512,i.height=512;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,512,512);return t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.32,"rgba(255,255,255,0.25)"),t.addColorStop(.42,"rgba(255,255,255,0)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,512,512),i}function _w(){let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d"),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);return n.addColorStop(0,"rgba(0,0,0,0.62)"),n.addColorStop(.45,"rgba(0,0,0,0.3)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,256,256),e}function xw(i){return{reflection:new Sn({map:i,transparent:!0,opacity:.07,blending:yi,depthWrite:!1,toneMapped:!1}),aluminium:new Gs({color:13619928,metalness:1,roughness:.3,clearcoat:.15,clearcoatRoughness:.4}),titanium:new Gs({color:9079696,metalness:1,roughness:.24,clearcoat:.4,clearcoatRoughness:.2}),glass:new Gs({color:263173,metalness:0,roughness:.06,clearcoat:1,clearcoatRoughness:.03})}}function Nu(i,e,t,n,r){let s=Du(i.canvas,r),o=new Sn({map:s,toneMapped:!1,color:new je(0,0,0)});return{mesh:new rt(cr(e,t,n),o),setPower(l){o.color.setScalar(l)},update(l){let c=i.draw(l);return c&&(s.needsUpdate=!0),c}}}function ra(i,e,t,n){let r=new rt(new Gi(e,t),new Sn({map:i,transparent:!0,depthWrite:!1,opacity:n,toneMapped:!1}));return r.rotation.x=-Math.PI/2,r.renderOrder=-1,r}function vw(i,e,t){let l=new Bn,c=new rt(Zs(3.12,2.2,.085,.14,.028),i.aluminium);c.rotation.x=-Math.PI/2,c.position.y=.085/2,l.add(c);let h=new rt(cr(3.12-.04,2.2-.04,.13),new qo({map:e.keyboard,transparent:!0,roughness:.55,metalness:.1,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=.085+.0012,l.add(h);let d=new Bn;d.position.set(0,.085,-2.2/2+.02),l.add(d);let u=new rt(Zs(3.12,2.16,.05,.14,.018),i.aluminium);u.position.set(0,2.16/2,-.05/2),d.add(u);let f=new rt(cr(3.12-.07,2.16-.07,.11),i.glass);f.position.set(0,2.16/2,.0015),d.add(f);let m=Nu(F_(),2.88,1.858,.03,t);m.mesh.position.set(0,2.16/2+.035,.003),d.add(m.mesh);let _=new rt(new Gi(.018,.018),new Sn({color:1776930}));_.position.set(0,2.16-.07,.0035),d.add(_);let p=new rt(cr(3.12-.07,2.16-.07,.11),i.reflection);p.position.set(0,2.16/2,.005),d.add(p),l.add(ra(e.shadow,3.12*1.25,2.2*1.3,.75));let g=ra(e.shadow,3.12*1.04,2.2*1.06,.55);return g.position.y=.001,l.add(g),{group:l,screens:[m],setLid(S){d.rotation.x=Math.PI/2-S*(Math.PI/2+.28)},update({typing:S,caret:b}){return m.update({typing:Math.round(S*240)/240,caret:b})},boxes:{closed:new zn(new O(-3.12/2,0,-2.2/2),new O(3.12/2,.9,2.2/2)),open:new zn(new O(-3.12/2,0,-2.2/2-.55),new O(3.12/2,2.16,2.2/2))}}}function yw(i,e,t){let o=new Bn,a=new Bn;o.add(a),a.add(new rt(Zs(.72,1.47,.078,.118,.02),i.titanium));let l=new rt(cr(.72-.018,1.47-.018,.108),i.glass);l.position.z=.078/2+8e-4,a.add(l);let c=Nu(B_(),.672,1.413,.094,t);c.mesh.position.z=.078/2+.0016,a.add(c.mesh);let h=new rt(cr(.72-.018,1.47-.018,.108),i.reflection);h.position.z=.078/2+.0026,a.add(h),[[-1,.33,.1],[-1,.16,.16],[-1,-.02,.16],[1,.22,.24]].forEach(([u,f,m])=>{let _=new rt(new or(.012,m,.03),i.titanium);_.position.set(u*(.72/2+.003),f,0),a.add(_)}),a.rotation.x=-.08;let d=ra(e.shadow,1.1,.7,.42);return d.position.y=-.97,o.add(d),{group:o,screens:[c],update(){return c.update({})},boxes:{main:new zn(new O(-.72/2,-1.47/2,-.1),new O(.72/2,1.47/2,.1))}}}function Sw(i,e,t){let o=new Bn,a=new Bn;o.add(a),a.add(new rt(Zs(2.47,1.77,.058,.16,.016),i.aluminium));let l=new rt(cr(2.47-.02,1.77-.02,.15),i.glass);l.position.z=.058/2+8e-4,a.add(l);let c=Nu(z_(),2.33,1.653,.085,t);c.mesh.position.z=.058/2+.0016,a.add(c.mesh);let h=new rt(cr(2.47-.02,1.77-.02,.15),i.reflection);h.position.z=.058/2+.0026,a.add(h),a.rotation.x=-.1;let d=ra(e.shadow,3.2,1.2,.38);return d.position.y=-1.14,o.add(d),{group:o,screens:[c],update({links:u}){return c.update({links:Math.round(u*120)/120})},boxes:{main:new zn(new O(-2.47/2,-1.77/2,-.12),new O(2.47/2,1.77/2,.12))}}}function Mw(i,e,t){let o=new Bn,a=new Bn;a.position.set(0,2.3,-.05),o.add(a),a.add(new rt(Zs(4.1,2.42,.09,.06,.016),i.aluminium));let l=new rt(cr(4.1-.012,2.42-.012,.055),i.glass);l.position.z=.09/2+8e-4,a.add(l);let c=Nu(k_(),3.94,2.251,.018,t);c.mesh.position.set(0,0,.09/2+.0016),a.add(c.mesh);let h=new rt(cr(4.1-.012,2.42-.012,.055),i.reflection);h.position.z=.09/2+.0026,a.add(h);let d=new rt(Zs(.95,2.34,.045,.03,.01),i.aluminium);d.position.set(0,1.17,-.36),d.rotation.x=.21,o.add(d);let u=new rt(Zs(.95,1.3,.03,.09,.01),i.aluminium);u.rotation.x=-Math.PI/2,u.position.set(0,.015,-.32),o.add(u);let f=ra(e.shadow,1.8,1.9,.7);f.position.z=-.32,o.add(f);let m=ra(e.shadow,4.8,1.6,.25);return m.position.z=-.1,o.add(m),{group:o,screens:[c],update({pipeline:_,pulse:p}){return c.update({pipeline:Math.round(_*60)/60,pulse:Math.round(p*8)/8})},boxes:{main:new zn(new O(-4.1/2,0,-.95),new O(4.1/2,3.52,.1))}}}function G_(i){let e={keyboard:Du(mw(),i),shadow:Du(_w(),1),sheen:Du(gw(),1)},t=xw(e.sheen);return{materials:t,textures:e,setFinish(n){let r=n!=="light";t.aluminium.color.set(r?9080211:13619928),t.aluminium.roughness=r?.34:.3,t.titanium.color.set(r?7632508:9079696)},laptop:vw(t,e,i),phone:yw(t,e,i),tablet:Sw(t,e,i),monitor:Mw(t,e,i)}}var bw={dark:{walls:1776672,floor:1447706,strip:6,back:4.4,key:6.2,rimL:9,rimR:6.5,fill:1.7,rimTint:13623551},light:{walls:14080221,floor:15330030,strip:2.3,back:2,key:2.4,rimL:2.4,rimR:2,fill:1.2,rimTint:15266047}};function Js(i,e,t,n=16777215){return new rt(new Gi(i,e),new Sn({color:new je(n).multiplyScalar(t),side:vi}))}function Vl(i,e,t,n,r,s){e.position.set(t,n,r),e.lookAt(s),i.add(e)}function Tw(i){let e=bw[i],t=new Fs,n=new rt(new or(34,18,34),new Sn({color:e.walls,side:En}));n.position.y=7,t.add(n);let r=Js(34,34,1,e.floor);r.rotation.x=-Math.PI/2,r.position.y=-1.5,t.add(r);let s=new O(0,1,0);return[-3.2,0,3.2].forEach(o=>{let a=Js(.9,15,e.strip);a.position.set(o,13,0),a.rotation.x=Math.PI/2,t.add(a)}),Vl(t,Js(15,5,e.back),0,8,-13,s),Vl(t,Js(8,5,e.key),9,6,12,s),Vl(t,Js(1.2,10,e.rimL,e.rimTint),-12,5,-4,s),Vl(t,Js(1.2,10,e.rimR),12,5,-4,s),Vl(t,Js(10,3,e.fill),-8,2,11,s),t}function ww(){let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d"),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,"rgba(255,255,255,0.85)"),n.addColorStop(.35,"rgba(255,255,255,0.32)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,256,256);let r=new Ar(e);return r.colorSpace=on,r}function Ew(){return new Wt({uniforms:{uColor:{value:new je(15922687)},uIntensity:{value:0}},vertexShader:`
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
      }`,transparent:!0,depthWrite:!1,blending:yi,side:vi})}function H_(i,e,t){let n=new na(i),r={},s=S=>{if(!r[S]){let b=Tw(S);r[S]=n.fromScene(b,.025).texture,b.traverse(x=>{x.geometry?.dispose(),x.material?.dispose()})}return r[S]},o=new Zo(16777215,1),a=new Zo(13163775,1),l=new O(5,8,6),c=new O(-7,4,-6);e.add(o,a);let h=new yl(15922687,0,0,.3,.8,2);h.position.set(t.x+.2,7.2,t.z+.4);let d=new hn;d.position.set(t.x,0,t.z),h.target=d,e.add(h,d);let u=7,f=new rt(new rl(2.1,u,48,1,!0),Ew());f.position.set(h.position.x,u/2,h.position.z),f.renderOrder=2,e.add(f);let m=new rt(new Gi(6,4.6),new Sn({map:ww(),color:15922687,transparent:!0,opacity:0,depthWrite:!1,blending:yi}));m.rotation.x=-Math.PI/2,m.position.set(t.x,.004,t.z),m.renderOrder=1,e.add(m);let _="dark",p={reveal:1,spot:0,angle:0};function g(){let S=_!=="light",b=S?.3+.7*p.reveal:1,x=S?p.spot*(1-p.reveal):0;e.environmentIntensity=(S?.9:.85)*b,o.intensity=(S?1.3:1.5)*b,a.intensity=(S?1.4:.45)*b,h.intensity=95*x,f.visible=x>.002,f.material.uniforms.uIntensity.value=.12*x,m.visible=x>.002,m.material.opacity=.18*x,e.backgroundIntensity=S?.45+.55*b:1}return{setTheme(S){_=S==="light"?"light":"dark",e.environment=s(_),g()},setReveal(S,b){p.reveal=S,p.spot=b,g()},get state(){return{theme:_,reveal:p.reveal,spot:p.spot,angle:p.angle}},setRotation(S){if(S===p.angle)return;p.angle=S,e.environmentRotation.set(0,S,0);let b=Math.cos(S),x=Math.sin(S);o.position.set(l.x*b+l.z*x,l.y,-l.x*x+l.z*b),a.position.set(c.x*b+c.z*x,c.y,-c.x*x+c.z*b)},dispose(){Object.values(r).forEach(S=>S.dispose()),n.dispose(),m.material.map.dispose()}}}var sa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Si=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Aw=new is(-1,1,1,-1,0,1),Np=class extends kn{constructor(){super(),this.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new It([0,2,0,0,2,0],2))}},Cw=new Np,hs=class{constructor(e){this._mesh=new rt(Cw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Aw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Uu=class extends Si{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Rr.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new hs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Gl=class extends Si{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},Ou=class extends Si{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Fu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new fe);this._width=n.width,this._height=n.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Uu(sa),this.copyPass.material.blending=Li,this.timer=new Sl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Gl!==void 0&&(o instanceof Gl?n=!0:o instanceof Ou&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Hl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Bu=class extends Si{constructor(){super(),this.isOutputPass=!0,this.uniforms=Rr.clone(Hl.uniforms),this.material=new Yo({name:Hl.name,uniforms:this.uniforms,vertexShader:Hl.vertexShader,fragmentShader:Hl.fragmentShader}),this._fsQuad=new hs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Tl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===El?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Cl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ws?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Al&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var zu=class extends Si{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new je}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}};var W_={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new je(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var oa=class i extends Si{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new je(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Jt(s,o,{type:un,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Jt(s,o,{type:un,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Jt(s,o,{type:un,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),o=Math.round(o/2)}let a=W_;this.highPassUniforms=Rr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new fe(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Rr.clone(sa.uniforms),this.blendMaterial=new Wt({uniforms:this.copyUniforms,vertexShader:sa.vertexShader,fragmentShader:sa.fragmentShader,premultipliedAlpha:!0,blending:yi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new je,this._oldClearAlpha=1,this._basic=new Sn,this._fsQuad=new hs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new fe(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let r=[],s=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;r.push((o*a+(o+1)*l)/c),s.push(c)}return new Wt({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}};oa.BlurDirectionX=new fe(1,0);oa.BlurDirectionY=new fe(0,1);function Up(i,e,t){let n=new Jt(1,1,{type:un,samples:4}),r=new Fu(i,n);r.addPass(new zu(e,t));let s=new oa(new fe(1,1),.32,.5,.9);return r.addPass(s),r.addPass(new Bu),{bloom:s,setSize(o,a,l){r.setPixelRatio(l),r.setSize(o,a)},setTheme(o){s.strength=o==="light"?.12:.32,s.threshold=o==="light"?.98:.9},render(){r.render()},dispose(){r.dispose(),n.dispose(),s.dispose()}}}var ku=new O(0,1,0),X_={laptop:{position:[-7,0,0],yaw:-.3},phone:{position:[-2.1,.98,.5],yaw:-.3},tablet:{position:[1.9,1.16,.2],yaw:-.3},monitor:{position:[8.8,0,-.9],yaw:-.3}},Rw={intro:{device:"laptop",box:"closed",az:.05,el:.55,fill:.9,zone:"intro"},build:{device:"laptop",box:"open",az:-.2,el:.12,fill:.95,zone:"chapter"},ship:{device:"phone",box:"main",az:-.36,el:.04,fill:.86,zone:"chapter"},connect:{device:"tablet",box:"main",az:-.28,el:.07,fill:.93,zone:"chapter"},operate:{device:"monitor",box:"main",az:-.2,el:.05,fill:.95,zone:"chapter"},final:{device:null,az:-.82,el:.2,azTall:-.9,elTall:.26,fill:1,zone:"final"}};function Pw(i){return i>=1?{intro:{cx:.42,cy:-.04,hw:.5,hh:.66},chapter:{cx:.4,cy:0,hw:.52,hh:.7},final:{cx:0,cy:-.24,hw:.86,hh:.56}}:{intro:{cx:0,cy:.54,hw:.88,hh:.3},chapter:{cx:0,cy:.44,hw:.86,hh:.4},final:{cx:0,cy:-.1,hw:.9,hh:.5}}}function Op(i,e){let{min:t,max:n}=i,r=[];for(let s of[t.x,n.x])for(let o of[t.y,n.y])for(let a of[t.z,n.z])r.push(new O(s,o,a).applyMatrix4(e));return r}function Iw(i,e,t,n,r,s,o){let a=Math.tan(r/2)*n.hh*o,l=Math.tan(r/2)*s*n.hw*o,c=t.clone().negate(),h=new O().crossVectors(c,ku).normalize(),d=new O().crossVectors(h,c),u=0;for(let f of i){let m=f.clone().sub(e),_=m.dot(t);u=Math.max(u,_+Math.abs(m.dot(h))/l,_+Math.abs(m.dot(d))/a)}return u}function Lw(i,e,t,n,r,s,o){let a=n,l=null,c=()=>{o.position.copy(e).addScaledVector(t,a),o.lookAt(e),o.updateMatrixWorld();let h=1/0,d=-1/0,u=1/0,f=-1/0;for(let m of i){let _=m.clone().project(o);h=Math.min(h,_.x),d=Math.max(d,_.x),u=Math.min(u,_.y),f=Math.max(f,_.y)}return{cx:(h+d)/2,cy:(u+f)/2,hw:(d-h)/2,hh:(f-u)/2}};for(let h=0;h<6;h+=1){l=c();let d=Math.max(l.hw/(r.hw*s),l.hh/(r.hh*s));if(Math.abs(d-1)<.004)break;a*=d}return l=c(),{distance:a,cx:r.cx-l.cx,cy:r.cy-l.cy}}var Dw={dark:{stops:["#1c1d21","#0c0d0f","#040405"],glow:"rgba(255,255,255,0.045)"},light:{stops:["#ffffff","#f2f3f5","#e3e5e9"],glow:"rgba(0,0,0,0.05)"}};function Y_(i,e,t,n,r,s,o,a){i.save(),i.translate(n*e,r*t),i.scale(s*e,o*t);let l=i.createRadialGradient(0,0,0,0,0,1);a.forEach(([c,h])=>l.addColorStop(c,h)),i.fillStyle=l,i.fillRect(-n/s,-r/o,1/s,1/o),i.restore()}function q_(i,e,t){let r=Math.max(256,Math.min(1024,Math.round(512/t)));i.width=512,i.height=r;let s=i.getContext("2d"),o=Dw[e];Y_(s,512,r,.58,.26,1.2,.95,[[0,o.stops[0]],[.5,o.stops[1]],[1,o.stops[2]]]),Y_(s,512,r,.58,.74,.6,.4,[[0,o.glow],[.7,"rgba(0,0,0,0)"]])}var Nw=(i,e)=>new O(Math.sin(i)*Math.cos(e),Math.sin(e),Math.cos(i)*Math.cos(e));function Z_(i,{bloom:e=!1}={}){let t=new Ru({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"});t.outputColorSpace=on,t.toneMapping=Ws,t.setClearColor(0,0);let n=new Fs,r=document.createElement("canvas"),s=new Ar(r);s.colorSpace=on,n.background=s;let o=new vn(28,1,.1,200),a=G_(t.capabilities.getMaxAnisotropy()),l=["laptop","phone","tablet","monitor"];for(let P of l){let{position:N,yaw:V}=X_[P],B=a[P].group;B.position.set(...N),B.rotation.y=V,n.add(B),B.updateMatrixWorld(!0)}let c=H_(t,n,a.laptop.group.position),h=e?Up(t,n,o):null,d="dark",u=new Sn({color:4037631,transparent:!0,opacity:.9,toneMapped:!1,depthWrite:!1,blending:yi}),f=new O(0,0,.08).applyMatrix4(a.tablet.group.matrixWorld),m=[new O(0,1.2,-1.2).applyMatrix4(a.laptop.group.matrixWorld),new O(0,0,.05).applyMatrix4(a.phone.group.matrixWorld),new O(0,2.3,0).applyMatrix4(a.monitor.group.matrixWorld)].map(P=>{let N=f.clone().lerp(P,.5).add(new O(0,1.1+f.distanceTo(P)*.12,.4)),V=new ml(new zs(f.clone(),N,P),120,.012,8,!1),B=new rt(V,u);return B.visible=!1,n.add(B),B}),_={positions:null,targets:null,zones:[]},p={width:1,height:1},g=0,S={position:new O,target:new O,zone:{cx:0,cy:0}};function b(){let P=p.width/p.height,N=P<1;o.fov=N?36:28,o.aspect=P;let V=o.fov*Math.PI/180,B=Pw(P),K=new vn(o.fov,P,.1,400),W=[];for(let de of l){let ye=a[de],Pe=ye.boxes.main??ye.boxes.open;W.push(...Op(Pe,ye.group.matrixWorld))}let R=[],X=[],ge=[];for(let de of id){let ye=Rw[de],Pe=B[ye.zone],He,J;if(ye.device){let Ae=a[ye.device];He=Op(Ae.boxes[ye.box],Ae.group.matrixWorld),J=X_[ye.device].yaw}else He=W,J=0;let ee=new zn().setFromPoints(He).getCenter(new O),ue=Nw(J+(N&&ye.azTall!==void 0?ye.azTall:ye.az),N&&ye.elTall!==void 0?ye.elTall:ye.el),ke=Iw(He,ee,ue,Pe,V,P,ye.fill),xe=Lw(He,ee,ue,ke,Pe,ye.fill,K);R.push(ee.clone().addScaledVector(ue,xe.distance)),X.push(ee),ge.push({cx:xe.cx,cy:xe.cy})}_={positions:new Bs(R,!1,"centripetal"),targets:new Bs(X,!1,"centripetal"),zones:ge}}let x=1;function M(P,N,V){p={width:Math.max(1,P),height:Math.max(1,N)},x=V,t.setPixelRatio(V),t.setSize(p.width,p.height,!1),h?.setSize(p.width,p.height,V),q_(r,d,p.width/p.height),s.needsUpdate=!0,b()}function T(P){P&&!h?(h=Up(t,n,o),h.setTheme(d),h.setSize(p.width,p.height,x)):!P&&h&&(h.dispose(),h=null)}function A(P){d=P==="light"?"light":"dark";let N=d==="light";a.setFinish(d),c.setTheme(d),h?.setTheme(d),q_(r,d,p.width/p.height),s.needsUpdate=!0,t.toneMappingExposure=N?1:1.05,u.color=new je(N?29155:4037631),u.blending=N?ss:yi,u.needsUpdate=!0}function v(P,{intro:N=1,time:V=0,pointerX:B=0,pointerY:K=0}={}){let W=Vg(P),R=od(P),X=id.length-1,ge=R/X;_.positions.getPoint(ge,S.position),_.targets.getPoint(ge,S.target);let de=Math.min(X-1,Math.floor(R)),ye=R-de,Pe=_.zones[de],He=_.zones[de+1];S.zone.cx=Pe.cx+(He.cx-Pe.cx)*ye,S.zone.cy=Pe.cy+(He.cy-Pe.cy)*ye;let J=S.position.clone().sub(S.target),ee=J.length(),ue=1-N;S.position.addScaledVector(J,.22*ue).addScaledVector(ku,ee*.08*ue);let ke=J.clone().negate().normalize(),xe=new O().crossVectors(ke,ku).normalize();S.position.addScaledVector(xe,B*ee*.035).addScaledVector(ku,-K*ee*.02),o.position.copy(S.position),o.lookAt(S.target),o.setViewOffset(p.width,p.height,-S.zone.cx*p.width/2,S.zone.cy*p.height/2,p.width,p.height),c.setReveal(Mo(P/.1),N),c.setRotation(Math.round((P*.4+B*.3)*2e3)/2e3),a.laptop.setLid(W.lid),g=W.lid,a.laptop.screens[0].setPower(W.power);let Ae=a.laptop.update({typing:W.typing,caret:W.typing>0&&W.typing<1?Math.floor(V*2.4)%2===0:!1});return[["phone",2],["tablet",3],["monitor",4]].forEach(([Le,j])=>{a[Le].screens[0].setPower(Mo((R-(j-.85))/.55))}),Ae=a.phone.update()||Ae,Ae=a.tablet.update({links:W.links})||Ae,Ae=a.monitor.update({pipeline:W.pipeline,pulse:W.pipeline>0&&W.pipeline<1?V*1.4%1:0})||Ae,m.forEach((Le,j)=>{let re=Math.min(1,Math.max(0,W.trails*1.3-j*.15)),ae=Le.geometry.parameters.tubularSegments,U=Le.geometry.parameters.radialSegments;Le.visible=re>0,Le.geometry.setDrawRange(0,Math.floor(re*ae)*U*6)}),{rail:R,cue:W.cue,screensChanged:Ae}}let w=()=>!!h&&d!=="light";function C(){w()?h.render():t.render(n,o)}function D(){o.updateMatrixWorld();let P={};for(let N of l){let V=a[N],B=N==="laptop"?g>.5?V.boxes.open:V.boxes.closed:V.boxes.main,K=Op(B,V.group.matrixWorld).map(X=>X.project(o));if(K.some(X=>X.z>1||X.z<-1))continue;let W=K.map(X=>(X.x+1)/2*p.width),R=K.map(X=>(1-X.y)/2*p.height);P[N]={left:Math.min(...W),right:Math.max(...W),top:Math.min(...R),bottom:Math.max(...R)}}return P}function L(){let P=n.background;n.background=null,t.render(n,o),n.background=P;let N=t.getContext(),V=N.drawingBufferWidth,B=N.drawingBufferHeight,K=new Uint8Array(V*4),W=0;for(let R of[.3,.5,.7]){N.readPixels(0,Math.floor(B*R),V,1,N.RGBA,N.UNSIGNED_BYTE,K);for(let X=3;X<K.length;X+=4)K[X]>8&&(W+=1)}return W/(V*3)}function G(){c.dispose(),h?.dispose(),s.dispose(),t.dispose(),n.traverse(P=>{P.geometry?.dispose(),(Array.isArray(P.material)?P.material:P.material?[P.material]:[]).forEach(V=>{V.map?.dispose(),V.dispose()})})}return{renderer:t,camera:o,resize:M,setTheme:A,setBloom:T,get bloom(){return w()},get light(){return c.state},update:v,render:C,deviceRects:D,coverage:L,dispose:G}}Ni.registerPlugin(ct);var J_=document.querySelector("[data-story]");J_&&Ow(J_);function Uw(){try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}}function $_(){let i=document.documentElement.dataset.theme;return i||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}function Fp(i,e){i.dataset.storyMode=e,e==="static"&&(window.__story={mode:"static"}),i.classList.toggle("story-live",e==="live"),i.classList.toggle("story-static",e==="static"),e!=="live"&&i.classList.remove("story-ready")}function Ow(i){let e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=new URLSearchParams(window.location.search).get("story")==="static",n=null,r=()=>{n?.destroy(),n=null,Fp(i,"static")},s=()=>{if(!n){if(t||e.matches||!Uw()){Fp(i,"static");return}try{n=Fw(i,r)}catch(o){console.warn("[story] falling back to static scene",o),r()}}};e.addEventListener("change",()=>e.matches?r():s()),s()}function Fw(i,e){let t=i.querySelector(".story-stage"),n=i.querySelector(".story-canvas"),r=Array.from(i.querySelectorAll("[data-story-copy]")),s=Array.from(i.querySelectorAll(".story-rail i")),o=i.querySelector(".story-cue"),a=window.matchMedia("(pointer: coarse)").matches,l=window.matchMedia("(pointer: fine)").matches;Fp(i,"live");let c=Z_(n,{bloom:l&&!a}),h=c.bloom;c.setTheme($_());let u=Math.min(window.devicePixelRatio||1,a?1.5:2),f=!0,m=()=>{let X=t.getBoundingClientRect();c.resize(X.width,X.height,u),f=!0};m();let _=new zg({lerp:.085,smoothWheel:!0,anchors:!0,autoRaf:!1});_.on("scroll",ct.update);let p=X=>_.raf(X*1e3);Ni.ticker.add(p),Ni.ticker.lagSmoothing(0);let g={p:0,intro:0},S=Ni.to(g,{p:1,ease:"none",scrollTrigger:{trigger:i,start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}}),b=Ni.to(g,{intro:1,duration:2.4,ease:"expo.out",delay:.15}),x=r[0]?Ni.from(r[0].children,{y:26,autoAlpha:0,duration:1.1,ease:"expo.out",stagger:.07,delay:.1,clearProps:"transform,opacity,visibility"}):null,M={x:0,y:0,tx:0,ty:0},T=X=>{X.pointerType==="mouse"&&(M.tx=X.clientX/window.innerWidth*2-1,M.ty=X.clientY/window.innerHeight*2-1)};window.addEventListener("pointermove",T,{passive:!0});let A=!0,v=new IntersectionObserver(X=>{A=X.some(ge=>ge.isIntersecting),f=!0});v.observe(i);let w=new ResizeObserver(m);w.observe(t);let C=()=>{c.setTheme($_()),f=!0},D=new MutationObserver(C);D.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});let L=window.matchMedia("(prefers-color-scheme: dark)");L.addEventListener("change",C);let G=X=>{X.preventDefault(),e()};n.addEventListener("webglcontextlost",G);let P={p:-1,intro:-1,px:0,py:0,copies:rd.map(()=>-1),tick:-1},N=[],V=0,B=!1;function K(X){r.forEach((de,ye)=>{let Pe=Math.round(kg(X,ye)*1e3)/1e3;Pe!==P.copies[ye]&&(P.copies[ye]=Pe,de.style.opacity=String(Pe),de.style.transform=`translate3d(0, ${((1-Pe)*18).toFixed(2)}px, 0)`,ye===0&&(de.style.visibility=Pe<.01?"hidden":"visible"))});let ge=Gg(X);ge!==P.tick&&(P.tick=ge,s.forEach((de,ye)=>de.classList.toggle("is-active",ye===ge-1)),i.dataset.storyShot=String(ge))}function W(X){if(N.push(X),N.length<45)return;let ge=N.reduce((de,ye)=>de+ye,0)/N.length;N.length=0,ge>24&&u>1?(u=Math.max(1,Math.round((u-.25)*100)/100),m()):ge>24&&c.bloom&&(c.setBloom(!1),f=!0)}let R=(X,ge)=>{if(!A||document.hidden){N.length=0;return}let de=1-Math.exp(-ge/220);M.x+=(M.tx-M.x)*de,M.y+=(M.ty-M.y)*de;let ye=Math.abs(M.x-P.px)>1e-4||Math.abs(M.y-P.py)>1e-4,Pe=f||g.p!==P.p||g.intro!==P.intro||ye,{screensChanged:He,cue:J}=c.update(g.p,{intro:g.intro,time:X,pointerX:M.x,pointerY:M.y});if(!Pe&&!He){N.length=0;return}K(g.p),o&&(o.style.opacity=String(J)),c.render(),V+=1,!f&&P.p!==-1&&W(ge),P.p=g.p,P.intro=g.intro,P.px=M.x,P.py=M.y,f=!1,B||(B=!0,requestAnimationFrame(()=>i.classList.add("story-ready")))};return Ni.ticker.add(R),window.__story={mode:"live",get progress(){return g.p},get dpr(){return u},get bloom(){return c.bloom},bloomAtStart:h,get light(){return c.light},get frames(){return V},rects:()=>c.deviceRects(),coverage:()=>c.coverage()},{destroy(){Ni.ticker.remove(R),Ni.ticker.remove(p),S.scrollTrigger?.kill(),S.kill(),b.kill(),x?.revert(),_.destroy(),v.disconnect(),w.disconnect(),D.disconnect(),L.removeEventListener("change",C),window.removeEventListener("pointermove",T),n.removeEventListener("webglcontextlost",G),r.forEach(X=>{X.style.opacity="",X.style.transform="",X.style.visibility=""}),c.dispose(),window.__story={mode:"static"}}}}
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
