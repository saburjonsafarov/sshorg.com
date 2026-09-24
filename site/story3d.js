var k_=Object.defineProperty;var V_=(i,t,e)=>t in i?k_(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Ht=(i,t,e)=>V_(i,typeof t!="symbol"?t+"":t,e);function lr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Fp(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}var Qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ra={duration:.5,overwrite:!1,delay:0},Yu,gn,Oe,Si=1e8,Ce=1/Si,Ou=Math.PI*2,G_=Ou/4,H_=0,Bp=Math.sqrt,W_=Math.cos,X_=Math.sin,sn=function(t){return typeof t=="string"},We=function(t){return typeof t=="function"},hr=function(t){return typeof t=="number"},Hl=function(t){return typeof t>"u"},Xi=function(t){return typeof t=="object"},Kn=function(t){return t!==!1},qu=function(){return typeof window<"u"},Nl=function(t){return We(t)||sn(t)},zp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},An=Array.isArray,Y_=/random\([^)]+\)/g,q_=/,\s*/g,Rp=/(?:-?\.?\d|\.)+/gi,Zu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,us=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ru=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ju=/[+-]=-?[.\d]+/,Z_=/[^,'"\[\]\s]+/gi,J_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ke,Hi,Fu,$u,ri={},Bl={},kp,Vp=function(t){return(Bl=$s(t,ri))&&Cn},Wl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},sa=function(t,e){return!e&&console.warn(t)},Gp=function(t,e){return t&&(ri[t]=e)&&Bl&&(Bl[t]=e)||ri},oa=function(){return 0},$_={suppressEvents:!0,isStart:!0,kill:!1},Ul={suppressEvents:!0,kill:!1},K_={suppressEvents:!0},Ku={},Ir=[],Bu={},Hp,Jn={},Pu={},Pp=30,Ol=[],Qu="",ju=function(t){var e=t[0],n,r;if(Xi(e)||We(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=Ol.length;r--&&!Ol[r].targetTest(e););n=Ol[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new rf(t[r],n)))||t.splice(r,1);return t},Lr=function(t){return t._gsap||ju(Mi(t))[0]._gsap},tf=function(t,e,n){return(n=t[e])&&We(n)?t[e]():Hl(n)&&t.getAttribute&&t.getAttribute(e)||n},kn=function(t,e){return(t=t.split(",")).forEach(e)||t},Xe=function(t){return Math.round(t*1e5)/1e5||0},ze=function(t){return Math.round(t*1e7)/1e7||0},fs=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},Q_=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},zl=function(){var t=Ir.length,e=Ir.slice(0),n,r;for(Bu={},Ir.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},ef=function(t){return!!(t._initted||t._startAt||t.add)},Wp=function(t,e,n,r){Ir.length&&!gn&&zl(),t.render(e,n,r||!!(gn&&e<0&&ef(t))),Ir.length&&!gn&&zl()},Xp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Z_).length<2?e:sn(t)?t.trim():t},Yp=function(t){return t},si=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},j_=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},$s=function(t,e){for(var n in e)t[n]=e[n];return t},Ip=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Xi(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},kl=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},ea=function(t){var e=t.parent||ke,n=t.keyframes?j_(An(t.keyframes)):si;if(Kn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},tx=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},qp=function(t,e,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},Xl=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},Dr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ls=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},ex=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},zu=function(t,e,n,r){return t._startAt&&(gn?t._startAt.revert(Ul):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},nx=function i(t){return!t||t._ts&&i(t.parent)},Lp=function(t){return t._repeat?Ks(t._tTime,t=t.duration()+t._rDelay)*t:0},Ks=function(t,e){var n=Math.floor(t=ze(t/e));return t&&n===t?n-1:n},Vl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Yl=function(t){return t._end=ze(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ce)||0))},ql=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ze(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Yl(t),n._dirty||ls(n,t)),t},Zp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Vl(t.rawTime(),e),(!e._dur||ca(0,e.totalDuration(),n)-e._tTime>Ce)&&e.render(n,!0)),ls(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ce}},Wi=function(t,e,n,r){return e.parent&&Dr(e),e._start=ze((hr(n)?n:n||t!==ke?yi(t,n,e):t._time)+e._delay),e._end=ze(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),qp(t,e,"_first","_last",t._sort?"_start":0),ku(e)||(t._recent=e),r||Zp(t,e),t._ts<0&&ql(t,t._tTime),t},Jp=function(t,e){return(ri.ScrollTrigger||Wl("scrollTrigger",e))&&ri.ScrollTrigger.create(e,t)},$p=function(t,e,n,r,s){if(af(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!gn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Hp!==$n.frame)return Ir.push(t),t._lazy=[s,r],1},ix=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},ku=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},rx=function(t,e,n,r){var s=t.ratio,o=e<0||!e&&(!t._start&&ix(t)&&!(!t._initted&&ku(t))||(t._ts<0||t._dp._ts<0)&&!ku(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=ca(0,t._tDur,e),h=Ks(l,a),t._yoyo&&h&1&&(o=1-o),h!==Ks(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||gn||r||t._zTime===Ce||!e&&t._zTime){if(!t._initted&&$p(t,e,r,n,l))return;for(d=t._zTime,t._zTime=e||(n?Ce:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&zu(t,e,n,!0),t._onUpdate&&!n&&ii(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ii(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Dr(t,1),!n&&!gn&&(ii(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},sx=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Qs=function(t,e,n,r){var s=t._repeat,o=ze(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:ze(o*(s+1)+t._rDelay*s):o,a>0&&!r&&ql(t,t._tTime=t._tDur*a),t.parent&&Yl(t),n||ls(t.parent,t),t},Dp=function(t){return t instanceof En?ls(t):Qs(t,t._dur)},ox={_start:0,endTime:oa,totalDuration:oa},yi=function i(t,e,n){var r=t.labels,s=t._recent||ox,o=t.duration()>=Si?s.endTime(!1):t._dur,a,l,c;return sn(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(An(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},na=function(t,e,n){var r=hr(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Kn(l.vars.inherit)&&l.parent;o.immediateRender=Kn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Je(e[0],o,e[s+1])},Nr=function(t,e){return t||t===0?e(t):e},ca=function(t,e,n){return n<t?t:n>e?e:n},_n=function(t,e){return!sn(t)||!(e=J_.exec(t))?"":e[1]},ax=function(t,e,n){return Nr(n,function(r){return ca(t,e,r)})},Vu=[].slice,Kp=function(t,e){return t&&Xi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Xi(t[0]))&&!t.nodeType&&t!==Hi},lx=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return sn(r)&&!e||Kp(r,1)?(s=n).push.apply(s,Mi(r)):n.push(r)})||n},Mi=function(t,e,n){return Oe&&!e&&Oe.selector?Oe.selector(t):sn(t)&&!n&&(Fu||!js())?Vu.call((e||$u).querySelectorAll(t),0):An(t)?lx(t,n):Kp(t)?Vu.call(t,0):t?[t]:[]},Gu=function(t){return t=Mi(t)[0]||sa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Mi(e,n.querySelectorAll?n:n===t?sa("Invalid scope")||$u.createElement("div"):t)}},Qp=function(t){return t.sort(function(){return .5-Math.random()})},jp=function(t){if(We(t))return t;var e=Xi(t)?t:{each:t},n=cs(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,h=r,d=r;return sn(r)?h=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(h=r[0],d=r[1]),function(u,f,p){var _=(p||e).length,m=o[_],g,S,M,v,b,A,w,x,T;if(!m){if(T=e.grid==="auto"?0:(e.grid||[1,Si])[1],!T){for(w=-Si;w<(w=p[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(m=o[_]=[],g=l?Math.min(T,_)*h-.5:r%T,S=T===Si?0:l?_*d/T-.5:r/T|0,w=0,x=Si,A=0;A<_;A++)M=A%T-g,v=S-(A/T|0),m[A]=b=c?Math.abs(c==="y"?v:M):Bp(M*M+v*v),b>w&&(w=b),b<x&&(x=b);r==="random"&&Qp(m),m.max=w-x,m.min=x,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=_n(e.amount||e.each)||0,n=n&&_<0?Sx(n):n}return _=(m[u]-m.min)/m.max||0,ze(m.b+(n?n(_):_)*m.v)+m.u}},Hu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=ze(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(hr(n)?0:_n(n))}},tm=function(t,e){var n=An(t),r,s;return!n&&Xi(t)&&(r=n=t.radius||Si,t.values?(t=Mi(t.values),(s=!hr(t[0]))&&(r*=r)):t=Hu(t.increment)),Nr(e,n?We(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Si,h=0,d=t.length,u,f;d--;)s?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!r||c<=r?t[h]:o,s||h===o||hr(o)?h:h+_n(o)}:Hu(t))},em=function(t,e,n,r){return Nr(An(t)?!e:n===!0?!!(n=0):!r,function(){return An(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},cx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,o){return o(s)},r)}},hx=function(t,e){return function(n){return t(parseFloat(n))+(e||_n(n))}},ux=function(t,e,n){return im(t,e,0,1,n)},nm=function(t,e,n){return Nr(n,function(r){return t[~~e(r)]})},fx=function i(t,e,n){var r=e-t;return An(t)?nm(t,i(0,t.length),e):Nr(n,function(s){return(r+(s-t)%r)%r+t})},dx=function i(t,e,n){var r=e-t,s=r*2;return An(t)?nm(t,i(0,t.length-1),e):Nr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},to=function(t){return t.replace(Y_,function(e){var n=e.indexOf("[")+1,r=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(q_);return em(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},im=function(t,e,n,r,s){var o=e-t,a=r-n;return Nr(s,function(l){return n+((l-t)/o*a||0)})},px=function i(t,e,n,r){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=sn(t),a={},l,c,h,d,u;if(n===!0&&(r=1)&&(n=null),o)t={p:t},e={p:e};else if(An(t)&&!An(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(i(t[c-1],t[c]));d--,s=function(p){p*=d;var _=Math.min(u,~~p);return h[_](p-_)},n=e}else r||(t=$s(An(t)?[]:{},t));if(!h){for(l in e)sf.call(a,t,l,"get",e[l]);s=function(p){return hf(p,a)||(o?t.p:t)}}}return Nr(n,s)},Np=function(t,e,n){var r=t.labels,s=Si,o,a,l;for(o in r)a=r[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ii=function(t,e,n){var r=t.vars,s=r[e],o=Oe,a=t._ctx,l,c,h;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&Ir.length&&zl(),a&&(Oe=a),h=l?s.apply(c,l):s.call(c),Oe=o,h},jo=function(t){return Dr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!gn),t.progress()<1&&ii(t,"onInterrupt"),t},Js,rm=[],sm=function(t){if(t)if(t=!t.name&&t.default||t,qu()||t.headless){var e=t.name,n=We(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:oa,render:hf,add:sf,kill:Ix,modifier:Px,rawVars:0},o={targetTest:0,get:0,getSetter:Zl,aliases:{},register:0};if(js(),t!==r){if(Jn[e])return;si(r,si(kl(t,s),o)),$s(r.prototype,$s(s,kl(t,o))),Jn[r.prop=e]=r,t.targetTest&&(Ol.push(r),Ku[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Gp(e,r),t.register&&t.register(Cn,r,Vn)}else rm.push(t)},Ae=255,ta={aqua:[0,Ae,Ae],lime:[0,Ae,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ae],navy:[0,0,128],white:[Ae,Ae,Ae],olive:[128,128,0],yellow:[Ae,Ae,0],orange:[Ae,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ae,0,0],pink:[Ae,192,203],cyan:[0,Ae,Ae],transparent:[Ae,Ae,Ae,0]},Iu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ae+.5|0},om=function(t,e,n){var r=t?hr(t)?[t>>16,t>>8&Ae,t&Ae]:0:ta.black,s,o,a,l,c,h,d,u,f,p;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ta[t])r=ta[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&Ae,r&Ae,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&Ae,t&Ae]}else if(t.substr(0,3)==="hsl"){if(r=p=t.match(Rp),!e)l=+r[0]%360/360,c=+r[1]/100,h=+r[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,r.length>3&&(r[3]*=1),r[0]=Iu(l+1/3,s,o),r[1]=Iu(l,s,o),r[2]=Iu(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(Zu),n&&r.length<4&&(r[3]=1),r}else r=t.match(Rp)||ta.transparent;r=r.map(Number)}return e&&!p&&(s=r[0]/Ae,o=r[1]/Ae,a=r[2]/Ae,d=Math.max(s,o,a),u=Math.min(s,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(h*100+.5)),n&&r.length<4&&(r[3]=1),r},am=function(t){var e=[],n=[],r=-1;return t.split(cr).forEach(function(s){var o=s.match(us)||[];e.push.apply(e,o),n.push(r+=o.length+1)}),e.c=n,e},Up=function(t,e,n){var r="",s=(t+r).match(cr),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return t;if(s=s.map(function(u){return(u=om(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=am(t),l=n.c,l.join(r)!==h.c.join(r)))for(c=t.replace(cr,"1").split(us),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(cr),d=c.length-1;a<d;a++)r+=c[a]+s[a];return r+c[d]},cr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ta)i+="|"+t+"\\b";return new RegExp(i+")","gi")})(),mx=/hsl[a]?\(/,nf=function(t){var e=t.join(" "),n;if(cr.lastIndex=0,cr.test(e))return n=mx.test(e),t[1]=Up(t[1],n),t[0]=Up(t[0],n,am(t[1])),!0},aa,$n=(function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,h,d,u,f,p=function _(m){var g=i()-r,S=m===!0,M,v,b,A;if((g>t||g<0)&&(n+=g-e),r+=g,b=r-n,M=b-o,(M>0||S)&&(A=++d.frame,u=b-d.time*1e3,d.time=b=b/1e3,o+=M+(M>=s?4:s-M),v=1),S||(l=c(_)),v)for(f=0;f<a.length;f++)a[f](b,u,A,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){kp&&(!Fu&&qu()&&(Hi=Fu=window,$u=Hi.document||{},ri.gsap=Cn,(Hi.gsapVersions||(Hi.gsapVersions=[])).push(Cn.version),Vp(Bl||Hi.GreenSockGlobals||!Hi.gsap&&Hi||{}),rm.forEach(sm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},aa=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),aa=0,c=oa},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,g,S){var M=g?function(v,b,A,w){m(v,b,A,w),d.remove(M)}:m;return d.remove(m),a[S?"unshift":"push"](M),js(),M},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d})(),js=function(){return!aa&&$n.wake()},_e={},gx=/^[\d.\-M][\d.\-,\s]/,_x=/["']/g,xx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(_x,"").trim():+c,r=l.substr(a+1).trim();return e},vx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},yx=function(t){var e=(t+"").split("("),n=_e[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[xx(e[1])]:vx(t).split(",").map(Xp)):_e._CE&&gx.test(t)?_e._CE("",t):n},Sx=function(t){return function(e){return 1-t(1-e)}},cs=function(t,e){return t&&(We(t)?t:_e[t]||yx(t))||e},ds=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},o;return kn(t,function(a){_e[a]=ri[a]=s,_e[o=a.toLowerCase()]=n;for(var l in s)_e[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_e[a+"."+l]=s[l]}),s},lm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Lu=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Ou*(Math.asin(1/r)||0),a=function(h){return h===1?1:r*Math.pow(2,-10*h)*X_((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:lm(a);return s=Ou/s,l.config=function(c,h){return i(t,c,h)},l},Du=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:lm(n);return r.config=function(s){return i(t,s)},r};kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;ds(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});_e.Linear.easeNone=_e.none=_e.Linear.easeIn;ds("Elastic",Lu("in"),Lu("out"),Lu());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<r?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};ds("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ds("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});ds("Circ",function(i){return-(Bp(1-i*i)-1)});ds("Sine",function(i){return i===1?1:-W_(i*G_)+1});ds("Back",Du("in"),Du("out"),Du());_e.SteppedEase=_e.steps=ri.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,o=1-Ce;return function(a){return((r*ca(0,o,a)|0)+s)*n}}};ra.ease=_e["quad.out"];kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Qu+=i+","+i+"Params,"});var rf=function(t,e){this.id=H_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:tf,this.set=e?e.getSetter:Zl},la=(function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Qs(this,+e.duration,1,1),this.data=e.data,Oe&&(this._ctx=Oe,Oe.data.push(this)),aa||$n.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(js(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ql(this,n),!s._dp||s.parent||Zp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Wi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ce||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Wp(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Lp(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Lp(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Ks(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-Ce?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Vl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ce?0:this._rts,this.totalTime(ca(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Yl(this),ex(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(js(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ce&&(this._tTime-=Ce)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ze(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Wi(r,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Vl(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=K_);var r=gn;return gn=n,ef(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),gn=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Dp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Dp(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(yi(this,n),Kn(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Kn(r)),this._dur||(this._zTime=-Ce),this},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ce:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ce,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Ce)},t.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},t.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=We(n)?n:Yp,l=function(){var h=r.then;r.then=null,s&&s(),We(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=h),o(a),r.then=h};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){jo(this)},i})();si(la.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ce,_prom:0,_ps:!1,_rts:1});var En=(function(i){Fp(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Kn(n.sortChildren),ke&&Wi(n.parent||ke,lr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Jp(lr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return na(0,arguments,this),this},e.from=function(r,s,o){return na(1,arguments,this),this},e.fromTo=function(r,s,o,a){return na(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,ea(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Je(r,s,yi(this,o),1),this},e.call=function(r,s,o){return Wi(this,Je.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Je(r,o,yi(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,h){return o.runBackwards=1,ea(o).immediateRender=Kn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,h)},e.staggerFromTo=function(r,s,o,a,l,c,h,d){return a.startAt=o,ea(a).immediateRender=Kn(a.immediateRender),this.staggerTo(r,s,a,l,c,h,d)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=r<=0?0:ze(r),d=this._zTime<0!=r<0&&(this._initted||!c),u,f,p,_,m,g,S,M,v,b,A,w;if(this!==ke&&h>l&&r>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,r+=this._time-a),u=h,v=this._start,M=this._ts,g=!M,d&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(u=ze(h%m),h===l?(_=this._repeat,u=c):(b=ze(h/m),_=~~b,_&&_===b&&(u=c,_--),u>c&&(u=c)),b=Ks(this._tTime,m),!a&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),A&&_&1&&(u=c-u,w=1),_!==b&&!this._lock){var x=A&&b&1,T=x===(A&&_&1);if(_<b&&(x=!x),a=x?0:h%c?c:h,this._lock=1,this.render(a||(w?0:ze(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ii(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,b=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=sx(this,ze(a),ze(u)),S&&(h-=u-(u=S._start))),this._tTime=h,this._time=u,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&c&&!s&&!b&&(ii(this,"onStart"),this._tTime!==h))return this;if(u>=a&&r>=0)for(f=this._first;f;){if(p=f._next,(f._act||u>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(r,s,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,o),u!==this._time||!this._ts&&!g){S=0,p&&(h+=this._zTime=-Ce);break}}f=p}else{f=this._last;for(var C=r<0?r:u;f;){if(p=f._prev,(f._act||C<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(r,s,o);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,s,o||gn&&ef(f)),u!==this._time||!this._ts&&!g){S=0,p&&(h+=this._zTime=C?-Ce:Ce);break}}f=p}}if(S&&!s&&(this.pause(),S.render(u>=a?0:-Ce)._zTime=u>=a?1:-1,this._ts))return this._start=v,Yl(this),this.render(r,s,o);this._onUpdate&&!s&&ii(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Dr(this,1),!s&&!(r<0&&!a)&&(h||a||!l)&&(ii(this,h===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(hr(s)||(s=yi(this,s,r)),!(r instanceof la)){if(An(r))return r.forEach(function(a){return o.add(a,s)}),this;if(sn(r))return this.addLabel(r,s);if(We(r))r=Je.delayedCall(0,r);else return this}return this!==r?Wi(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Si);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Je?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return sn(r)?this.removeLabel(r):We(r)?this.killTweensOf(r):(r.parent===this&&Xl(this,r),r===this._recent&&(this._recent=this._last),ls(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ze($n.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=yi(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=Je.delayedCall(0,s||oa,o);return a.data="isPause",this._hasPause=1,Wi(this,a,yi(this,r))},e.removePause=function(r){var s=this._first;for(r=yi(this,r);s;)s._start===r&&s.data==="isPause"&&Dr(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Pr!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=Mi(r),l=this._first,c=hr(s),h;l;)l instanceof Je?Q_(l._targets,a)&&(c?(!Pr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=yi(o,r),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,p=Je.to(o,si({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ce,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&Qs(p,m,0,1).render(p._time,!0,!0),f=1}h&&h.apply(p,d||[])}},s));return u?p.render(0):p},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,si({startAt:{time:yi(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Np(this,yi(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Np(this,yi(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ce)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=ze(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return ls(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ls(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=Si,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Wi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=ze(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Qs(o,o===ke&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(ke._ts&&(Wp(ke,Vl(r,ke)),Hp=$n.frame),$n.frame>=Pp){Pp+=Qn.autoSleep||120;var s=ke._first;if((!s||!s._ts)&&Qn.autoSleep&&$n._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||$n.sleep()}}},t})(la);si(En.prototype,{_lock:0,_hasPause:0,_forcing:0});var Mx=function(t,e,n,r,s,o,a){var l=new Vn(this._pt,t,e,0,1,cf,null,s),c=0,h=0,d,u,f,p,_,m,g,S;for(l.b=n,l.e=r,n+="",r+="",(g=~r.indexOf("random("))&&(r=to(r)),o&&(S=[n,r],o(S,t,e),n=S[0],r=S[1]),u=n.match(Ru)||[];d=Ru.exec(r);)p=d[0],_=r.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),p!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:p.charAt(1)==="="?fs(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=Ru.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Ju.test(r)||g)&&(l.e=0),this._pt=l,l},sf=function(t,e,n,r,s,o,a,l,c,h){We(r)&&(r=r(s||0,t,o));var d=t[e],u=n!=="get"?n:We(d)?c?t[e.indexOf("set")||!We(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=We(d)?c?Ax:um:lf,p;if(sn(r)&&(~r.indexOf("random(")&&(r=to(r)),r.charAt(1)==="="&&(p=fs(u,r)+(_n(u)||0),(p||p===0)&&(r=p))),!h||u!==r||Wu)return!isNaN(u*r)&&r!==""?(p=new Vn(this._pt,t,e,+u||0,r-(u||0),typeof d=="boolean"?Rx:fm,0,f),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!d&&!(e in t)&&Wl(e,r),Mx.call(this,t,e,u,r,f,l||Qn.stringFilter,c))},bx=function(t,e,n,r,s){if(We(t)&&(t=ia(t,s,e,n,r)),!Xi(t)||t.style&&t.nodeType||An(t)||zp(t))return sn(t)?ia(t,s,e,n,r):t;var o={},a;for(a in t)o[a]=ia(t[a],s,e,n,r);return o},of=function(t,e,n,r,s,o){var a,l,c,h;if(Jn[t]&&(a=new Jn[t]).init(s,a.rawVars?e[t]:bx(e[t],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Vn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Js))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Pr,Wu,af=function i(t,e,n){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,h=r.runBackwards,d=r.yoyoEase,u=r.keyframes,f=r.autoRevert,p=t._dur,_=t._startAt,m=t._targets,g=t.parent,S=g&&g.data==="nested"?g.vars.targets:m,M=t._overwrite==="auto"&&!Yu,v=t.timeline,b=r.easeReverse||d,A,w,x,T,C,D,I,k,L,z,H,V,K;if(v&&(!u||!s)&&(s="none"),t._ease=cs(s,ra.ease),t._rEase=b&&(cs(b)||t._ease),t._from=!v&&!!r.runBackwards,t._from&&(t.ratio=1),!v||u&&!r.stagger){if(k=m[0]?Lr(m[0]).harness:0,V=k&&r[k.prop],A=kl(r,Ku),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&p?Ul:$_),_._lazy=0),o){if(Dr(t._startAt=Je.set(m,si({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Kn(l),startAt:null,delay:0,onUpdate:c&&function(){return ii(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(gn||!a&&!f)&&t._startAt.revert(Ul),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!_){if(e&&(a=!1),x=si({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Kn(l),immediateRender:a,stagger:0,parent:g},A),V&&(x[k.prop]=V),Dr(t._startAt=Je.set(m,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(gn?t._startAt.revert(Ul):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,Ce,Ce);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Kn(l)||l&&!p,w=0;w<m.length;w++){if(C=m[w],I=C._gsap||ju(m)[w]._gsap,t._ptLookup[w]=z={},Bu[I.id]&&Ir.length&&zl(),H=S===m?w:S.indexOf(C),k&&(L=new k).init(C,V||A,t,H,S)!==!1&&(t._pt=T=new Vn(t._pt,C,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(G){z[G]=T}),L.priority&&(D=1)),!k||V)for(x in A)Jn[x]&&(L=of(x,A,t,H,C,S))?L.priority&&(D=1):z[x]=T=sf.call(t,C,x,"get",A[x],H,S,0,r.stringFilter);t._op&&t._op[w]&&t.kill(C,t._op[w]),M&&t._pt&&(Pr=t,ke.killTweensOf(C,z,t.globalTime(e)),K=!t.parent,Pr=0),t._pt&&l&&(Bu[I.id]=1)}D&&uf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!K,u&&e<=0&&v.render(Si,!0,!0)},wx=function(t,e,n,r,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Wu=1,t.vars[e]="+=0",af(t,a),Wu=0,l?sa(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(r||r===0)&&!s?r:h.s+(r||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Xe(n)+_n(d.e)),d.b&&(d.b=h.s+_n(d.b))},Tx=function(t,e){var n=t[0]?Lr(t[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return e;s=$s({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Ex=function(t,e,n,r){var s=e.ease||r||"power1.inOut",o,a;if(An(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},ia=function(t,e,n,r,s){return We(t)?t.call(e,n,r,s):sn(t)&&~t.indexOf("random(")?to(t):t},cm=Qu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",hm={};kn(cm+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return hm[i]=1});var Je=(function(i){Fp(t,i);function t(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:ea(r))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=r.parent||ke,S=(An(n)||zp(n)?hr(n[0]):"length"in r)?[n]:Mi(n),M,v,b,A,w,x,T,C;if(a._targets=S.length?ju(S):sa("GSAP target "+n+" not found. https://gsap.com",!Qn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||u||Nl(c)||Nl(h)){r=a.vars;var D=r.easeReverse||r.yoyoEase;if(M=a.timeline=new En({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:S}),M.kill(),M.parent=M._dp=lr(a),M._start=0,u||Nl(c)||Nl(h)){if(A=S.length,T=u&&jp(u),Xi(u))for(w in u)~cm.indexOf(w)&&(C||(C={}),C[w]=u[w]);for(v=0;v<A;v++)b=kl(r,hm),b.stagger=0,D&&(b.easeReverse=D),C&&$s(b,C),x=S[v],b.duration=+ia(c,lr(a),v,x,S),b.delay=(+ia(h,lr(a),v,x,S)||0)-a._delay,!u&&A===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),M.to(x,b,T?T(v,x,S):0),M._ease=_e.none;M.duration()?c=h=0:a.timeline=0}else if(p){ea(si(M.vars.defaults,{ease:"none"})),M._ease=cs(p.ease||r.ease||"none");var I=0,k,L,z;if(An(p))p.forEach(function(H){return M.to(S,H,">")}),M.duration();else{b={};for(w in p)w==="ease"||w==="easeEach"||Ex(w,p[w],b,p.easeEach);for(w in b)for(k=b[w].sort(function(H,V){return H.t-V.t}),I=0,v=0;v<k.length;v++)L=k[v],z={ease:L.e,duration:(L.t-(v?k[v-1].t:0))/100*c},z[w]=L.v,M.to(S,z,I),I+=z.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return f===!0&&!Yu&&(Pr=lr(a),ke.killTweensOf(S),Pr=0),Wi(g,lr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!p&&a._start===ze(g._time)&&Kn(d)&&nx(lr(a))&&g.data!=="nested")&&(a._tTime=-Ce,a.render(Math.max(0,-h)||0)),m&&Jp(lr(a),m),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,h=r<0,d=r>l-Ce&&!h?l:r<Ce?0:r,u,f,p,_,m,g,S,M;if(!c)rx(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+r,s,o);if(u=ze(d%_),d===l?(p=this._repeat,u=c):(m=ze(d/_),p=~~m,p&&p===m?(u=c,p--):u>c&&(u=c)),g=this._yoyo&&p&1,g&&(u=c-u),m=Ks(this._tTime,_),u===a&&!o&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(ze(_*p),!0).invalidate()._lock=0)}if(!this._initted){if($p(this,h?r:u,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var v=u<a;if(v!==this._inv){var b=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(v?-1:1)/b:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(u/c);if(this._from&&(this.ratio=S=1-S),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(ii(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;M&&M.render(r<0?r:M._dur*M._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&zu(this,r,s,o),ii(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&ii(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&zu(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Dr(this,1),!s&&!(h&&!a)&&(d||a||g)&&(ii(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){aa||$n.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||af(this,c),h=this._ease(c/this._dur),wx(this,r,s,o,a,h,c,l)?this.resetTo(r,s,o,a,1):(ql(this,0),this.parent||qp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?jo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Pr&&Pr.vars.overwrite!==!0)._first||jo(this),this.parent&&o!==this.timeline.totalDuration()&&Qs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Mi(r):a,c=this._ptLookup,h=this._pt,d,u,f,p,_,m,g;if((!s||s==="all")&&tx(a,l))return s==="all"&&(this._pt=0),jo(this);for(d=this._op=this._op||[],s!=="all"&&(sn(s)&&(_={},kn(s,function(S){return _[S]=1}),s=_),s=Tx(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],s==="all"?(d[g]=s,p=u,f={}):(f=d[g]=d[g]||{},p=s);for(_ in p)m=u&&u[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Xl(this,m,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&jo(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return na(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return na(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return ke.killTweensOf(r,s,o)},t})(la);si(Je.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});kn("staggerTo,staggerFrom,staggerFromTo",function(i){Je[i]=function(){var t=new En,e=Vu.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var lf=function(t,e,n){return t[e]=n},um=function(t,e,n){return t[e](n)},Ax=function(t,e,n,r){return t[e](r.fp,n)},Cx=function(t,e,n){return t.setAttribute(e,n)},Zl=function(t,e){return We(t[e])?um:Hl(t[e])&&t.setAttribute?Cx:lf},fm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Rx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},cf=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},hf=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Px=function(t,e,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,n),s=o},Ix=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?Xl(this,e,"_pt"):e.dep||(n=1),e=r;return!n},Lx=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},uf=function(t){for(var e=t._pt,n,r,s,o;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=n}t._pt=s},Vn=(function(){function i(e,n,r,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||fm,this.d=l||this,this.set=c||lf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Lx,this.m=n,this.mt=s,this.tween=r},i})();kn(Qu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return Ku[i]=1});ri.TweenMax=ri.TweenLite=Je;ri.TimelineLite=ri.TimelineMax=En;ke=new En({sortChildren:!1,defaults:ra,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qn.stringFilter=nf;var hs=[],Fl={},Dx=[],Op=0,Nx=0,Nu=function(t){return(Fl[t]||Dx).map(function(e){return e()})},Xu=function(){var t=Date.now(),e=[];t-Op>2&&(Nu("matchMediaInit"),hs.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Hi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Nu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Op=t,Nu("matchMedia"))},dm=(function(){function i(e,n){this.selector=n&&Gu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Nx++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){We(n)&&(s=r,r=n,n=We);var o=this,a=function(){var c=Oe,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=Gu(s)),Oe=o,d=r.apply(o,arguments),We(d)&&o._r.push(d),Oe=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===We?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var r=Oe;Oe=null,n(this),Oe=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Je&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof En?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Je)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=hs.length;o--;)hs[o].id===this.id&&hs.splice(o,1)},t.revert=function(n){this.kill(n||{})},i})(),Ux=(function(){function i(e){this.contexts=[],this.scope=e,Oe&&Oe.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){Xi(n)||(n={matches:n});var o=new dm(0,s||this.scope),a=o.conditions={},l,c,h;Oe&&!o.selector&&(o.selector=Oe.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?h=1:(l=Hi.matchMedia(n[c]),l&&(hs.indexOf(o)<0&&hs.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Xu):l.addEventListener("change",Xu)));return h&&r(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Gl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return sm(r)})},timeline:function(t){return new En(t)},getTweensOf:function(t,e){return ke.getTweensOf(t,e)},getProperty:function(t,e,n,r){sn(t)&&(t=Mi(t)[0]);var s=Lr(t||{}).get,o=n?Yp:Xp;return n==="native"&&(n=""),t&&(e?o((Jn[e]&&Jn[e].get||s)(t,e,n,r)):function(a,l,c){return o((Jn[a]&&Jn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Mi(t),t.length>1){var r=t.map(function(h){return Cn.quickSetter(h,e,n)}),s=r.length;return function(h){for(var d=s;d--;)r[d](h)}}t=t[0]||{};var o=Jn[e],a=Lr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Js._pt=0,d.init(t,n?h+n:h,Js,0,[t]),d.render(1,d),Js._pt&&hf(1,Js)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var r,s=Cn.to(t,si((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return ke.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=cs(t.ease,ra.ease)),Ip(ra,t||{})},config:function(t){return Ip(Qn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Jn[a]&&!ri[a]&&sa(e+" effect requires "+a+" plugin.")}),Pu[e]=function(a,l,c){return n(Mi(a),si(l||{},s),c)},o&&(En.prototype[e]=function(a,l,c){return this.add(Pu[e](a,Xi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){_e[t]=cs(e)},parseEase:function(t,e){return arguments.length?cs(t,e):_e},getById:function(t){return ke.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new En(t),r,s;for(n.smoothChildTiming=Kn(t.smoothChildTiming),ke.remove(n),n._dp=0,n._time=n._tTime=ke._time,r=ke._first;r;)s=r._next,(e||!(!r._dur&&r instanceof Je&&r.vars.onComplete===r._targets[0]))&&Wi(n,r,r._start-r._delay),r=s;return Wi(ke,n,0),n},context:function(t,e){return t?new dm(t,e):Oe},matchMedia:function(t){return new Ux(t)},matchMediaRefresh:function(){return hs.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||Xu()},addEventListener:function(t,e){var n=Fl[t]||(Fl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Fl[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:fx,wrapYoyo:dx,distribute:jp,random:em,snap:tm,normalize:ux,getUnit:_n,clamp:ax,splitColor:om,toArray:Mi,selector:Gu,mapRange:im,pipe:cx,unitize:hx,interpolate:px,shuffle:Qp},install:Vp,effects:Pu,ticker:$n,updateRoot:En.updateRoot,plugins:Jn,globalTimeline:ke,core:{PropTween:Vn,globals:Gp,Tween:Je,Timeline:En,Animation:la,getCache:Lr,_removeLinkedListItem:Xl,reverting:function(){return gn},context:function(t){return t&&Oe&&(Oe.data.push(t),t._ctx=Oe),Oe},suppressOverwrites:function(t){return Yu=t}}};kn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Gl[i]=Je[i]});$n.add(En.updateRoot);Js=Gl.to({},{duration:0});var Ox=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Fx=function(t,e){var n=t._targets,r,s,o;for(r in e)for(s=n.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Ox(o,r)),o&&o.modifier&&o.modifier(e[r],t,n[s],r))},Uu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(sn(s)&&(l={},kn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Fx(a,s)}}}},Cn=Gl.registerPlugin({name:"attr",init:function(t,e,n,r,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)gn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Uu("roundProps",Hu),Uu("modifiers"),Uu("snap",tm))||Gl;Je.version=En.version=Cn.version="3.15.0";kp=1;qu()&&js();var Bx=_e.Power0,zx=_e.Power1,kx=_e.Power2,Vx=_e.Power3,Gx=_e.Power4,Hx=_e.Linear,Wx=_e.Quad,Xx=_e.Cubic,Yx=_e.Quart,qx=_e.Quint,Zx=_e.Strong,Jx=_e.Elastic,$x=_e.Back,Kx=_e.SteppedEase,Qx=_e.Bounce,jx=_e.Sine,tv=_e.Expo,ev=_e.Circ;var pm,Ur,no,_f,_s,nv,mm,xf,iv=function(){return typeof window<"u"},fr={},gs=180/Math.PI,io=Math.PI/180,eo=Math.atan2,gm=1e8,vf=/([A-Z])/g,rv=/(left|right|width|margin|padding|x)/i,sv=/[\s,\(]\S/,Yi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},df=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ov=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},av=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},lv=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},cv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},wm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Tm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},hv=function(t,e,n){return t.style[e]=n},uv=function(t,e,n){return t.style.setProperty(e,n)},fv=function(t,e,n){return t._gsap[e]=n},dv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},pv=function(t,e,n,r,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},mv=function(t,e,n,r,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ve="transform",jn=Ve+"Origin",gv=function i(t,e){var n=this,r=this.target,s=r.style,o=r._gsap;if(t in fr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Yi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=ur(r,a)}):this.tfm[t]=o.x?o[t]:ur(r,t),t===jn&&(this.tfm.zOrigin=o.zOrigin);else return Yi.transform.split(",").forEach(function(a){return i.call(n,a,e)});if(this.props.indexOf(Ve)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(jn,e,"")),t=Ve}(s||e)&&this.props.push(t,e,s[t])},Em=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},_v=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(vf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=xf(),(!s||!s.isStart)&&!n[Ve]&&(Em(n),r.zOrigin&&n[jn]&&(n[jn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Am=function(t,e){var n={target:t,props:[],revert:_v,save:gv};return t._gsap||Cn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return n.save(r)}),n},Cm,pf=function(t,e){var n=Ur.createElementNS?Ur.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ur.createElement(t);return n&&n.style?n:Ur.createElement(t)},oi=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(vf,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,ro(e)||e,1)||""},_m="O,Moz,ms,Ms,Webkit".split(","),ro=function(t,e,n){var r=e||_s,s=r.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(_m[o]+t in s););return o<0?null:(o===3?"ms":o>=0?_m[o]:"")+t},mf=function(){iv()&&window.document&&(pm=window,Ur=pm.document,no=Ur.documentElement,_s=pf("div")||{style:{}},nv=pf("div"),Ve=ro(Ve),jn=Ve+"Origin",_s.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Cm=!!ro("perspective"),xf=Cn.core.reverting,_f=1)},xm=function(t){var e=t.ownerSVGElement,n=pf("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",n.appendChild(r),no.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),no.removeChild(n),s},vm=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Rm=function(t){var e,n;try{e=t.getBBox()}catch{e=xm(t),n=1}return e&&(e.width||e.height)||n||(e=xm(t)),e&&!e.width&&!e.x&&!e.y?{x:+vm(t,["x","cx","x1"])||0,y:+vm(t,["y","cy","y1"])||0,width:0,height:0}:e},Pm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Rm(t))},Fr=function(t,e){if(e){var n=t.style,r;e in fr&&e!==jn&&(e=Ve),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(vf,"-$1").toLowerCase())):n.removeAttribute(e)}},Or=function(t,e,n,r,s,o){var a=new Vn(t._pt,e,n,0,1,o?Tm:wm);return t._pt=a,a.b=r,a.e=s,t._props.push(n),a},ym={deg:1,rad:1,turn:1},xv={grid:1,flex:1},Br=function i(t,e,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=_s.style,l=rv.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=r==="px",f=r==="%",p,_,m,g;if(r===o||!s||ym[r]||ym[o])return s;if(o!=="px"&&!u&&(s=i(t,e,n,"px")),g=t.getCTM&&Pm(t),(f||o==="%")&&(fr[e]||~e.indexOf("adius")))return p=g?t.getBBox()[l?"width":"height"]:t[h],Xe(f?s/p*d:s/100*p);if(a[l?"width":"height"]=d+(u?o:r),_=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Ur||!_.appendChild)&&(_=Ur.body),m=_._gsap,m&&f&&m.width&&l&&m.time===$n.time&&!m.uncache)return Xe(s/m.width*d);if(f&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=d+r,p=t[h],S?t.style[e]=S:Fr(t,e)}else(f||o==="%")&&!xv[oi(_,"display")]&&(a.position=oi(t,"position")),_===t&&(a.position="static"),_.appendChild(_s),p=_s[h],_.removeChild(_s),a.position="absolute";return l&&f&&(m=Lr(_),m.time=$n.time,m.width=_[h]),Xe(u?p*s/d:p&&s?d/p*s:0)},ur=function(t,e,n,r){var s;return _f||mf(),e in Yi&&e!=="transform"&&(e=Yi[e],~e.indexOf(",")&&(e=e.split(",")[0])),fr[e]&&e!=="transform"?(s=fa(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:$l(oi(t,jn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Jl[e]&&Jl[e](t,e,n)||oi(t,e)||tf(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Br(t,e,s,n)+n:s},vv=function(t,e,n,r){if(!n||n==="none"){var s=ro(e,t,1),o=s&&oi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=oi(t,"borderTopColor"))}var a=new Vn(this._pt,t.style,e,0,1,cf),l=0,c=0,h,d,u,f,p,_,m,g,S,M,v,b;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=oi(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=t.style[e],t.style[e]=r,r=oi(t,e)||r,_?t.style[e]=_:Fr(t,e)),h=[n,r],nf(h),n=h[0],r=h[1],u=n.match(us)||[],b=r.match(us)||[],b.length){for(;d=us.exec(r);)m=d[0],S=r.substring(l,d.index),p?p=(p+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(p=1),m!==(_=u[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),m.charAt(1)==="="&&(m=fs(f,m)+v),g=parseFloat(m),M=m.substr((g+"").length),l=us.lastIndex-M.length,M||(M=M||Qn.units[e]||v,l===r.length&&(r+=M,a.e+=M)),v!==M&&(f=Br(t,e,_,M)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:f,c:g-f,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?Tm:wm;return Ju.test(r)&&(a.e=0),this._pt=a,a},Sm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},yv=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=Sm[n]||n,e[1]=Sm[r]||r,e.join(" ")},Sv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],fr[a]&&(l=1,a=a==="transformOrigin"?jn:Ve),Fr(n,a);l&&(Fr(n,Ve),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",fa(n,1),o.uncache=1,Em(r)))}},Jl={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var o=t._pt=new Vn(t._pt,e,n,0,0,Sv);return o.u=r,o.pr=-10,o.tween=s,t._props.push(n),1}}},ua=[1,0,0,1,0,0],Im={},Lm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Mm=function(t){var e=oi(t,Ve);return Lm(e)?ua:e.substr(7).match(Zu).map(Xe)},yf=function(t,e){var n=t._gsap||Lr(t),r=t.style,s=Mm(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ua:s):(s===ua&&!t.offsetParent&&t!==no&&!n.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,no.appendChild(t)),s=Mm(t),l?r.display=l:Fr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):no.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},gf=function(t,e,n,r,s,o){var a=t._gsap,l=s||yf(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],p=l[1],_=l[2],m=l[3],g=l[4],S=l[5],M=e.split(" "),v=parseFloat(M[0])||0,b=parseFloat(M[1])||0,A,w,x,T;n?l!==ua&&(w=f*m-p*_)&&(x=v*(m/w)+b*(-_/w)+(_*S-m*g)/w,T=v*(-p/w)+b*(f/w)-(f*S-p*g)/w,v=x,b=T):(A=Rm(t),v=A.x+(~M[0].indexOf("%")?v/100*A.width:v),b=A.y+(~(M[1]||M[0]).indexOf("%")?b/100*A.height:b)),r||r!==!1&&a.smooth?(g=v-c,S=b-h,a.xOffset=d+(g*f+S*_)-g,a.yOffset=u+(g*p+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=b,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!n,t.style[jn]="0px 0px",o&&(Or(o,a,"xOrigin",c,v),Or(o,a,"yOrigin",h,b),Or(o,a,"xOffset",d,a.xOffset),Or(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+b)},fa=function(t,e){var n=t._gsap||new rf(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=oi(t,jn)||"0",h,d,u,f,p,_,m,g,S,M,v,b,A,w,x,T,C,D,I,k,L,z,H,V,K,G,R,Z,mt,gt,Yt,It;return h=d=u=_=m=g=S=M=v=0,f=p=1,n.svg=!!(t.getCTM&&Pm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ve]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ve]!=="none"?l[Ve]:"")),r.scale=r.rotate=r.translate="none"),w=yf(t,n.svg),n.svg&&(n.uncache?(K=t.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",V=""):V=!e&&t.getAttribute("data-svg-origin"),gf(t,V||c,!!V||n.originIsAbsolute,n.smooth!==!1,w)),b=n.xOrigin||0,A=n.yOrigin||0,w!==ua&&(D=w[0],I=w[1],k=w[2],L=w[3],h=z=w[4],d=H=w[5],w.length===6?(f=Math.sqrt(D*D+I*I),p=Math.sqrt(L*L+k*k),_=D||I?eo(I,D)*gs:0,S=k||L?eo(k,L)*gs+_:0,S&&(p*=Math.abs(Math.cos(S*io))),n.svg&&(h-=b-(b*D+A*k),d-=A-(b*I+A*L))):(It=w[6],gt=w[7],R=w[8],Z=w[9],mt=w[10],Yt=w[11],h=w[12],d=w[13],u=w[14],x=eo(It,mt),m=x*gs,x&&(T=Math.cos(-x),C=Math.sin(-x),V=z*T+R*C,K=H*T+Z*C,G=It*T+mt*C,R=z*-C+R*T,Z=H*-C+Z*T,mt=It*-C+mt*T,Yt=gt*-C+Yt*T,z=V,H=K,It=G),x=eo(-k,mt),g=x*gs,x&&(T=Math.cos(-x),C=Math.sin(-x),V=D*T-R*C,K=I*T-Z*C,G=k*T-mt*C,Yt=L*C+Yt*T,D=V,I=K,k=G),x=eo(I,D),_=x*gs,x&&(T=Math.cos(x),C=Math.sin(x),V=D*T+I*C,K=z*T+H*C,I=I*T-D*C,H=H*T-z*C,D=V,z=K),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),f=Xe(Math.sqrt(D*D+I*I+k*k)),p=Xe(Math.sqrt(H*H+It*It)),x=eo(z,H),S=Math.abs(x)>2e-4?x*gs:0,v=Yt?1/(Yt<0?-Yt:Yt):0),n.svg&&(V=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Lm(oi(t,Ve)),V&&t.setAttribute("transform",V))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(f*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Xe(f),n.scaleY=Xe(p),n.rotation=Xe(_)+a,n.rotationX=Xe(m)+a,n.rotationY=Xe(g)+a,n.skewX=S+a,n.skewY=M+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(r[jn]=$l(c)),n.xOffset=n.yOffset=0,n.force3D=Qn.force3D,n.renderTransform=n.svg?bv:Cm?Dm:Mv,n.uncache=0,n},$l=function(t){return(t=t.split(" "))[0]+" "+t[1]},ff=function(t,e,n){var r=_n(e);return Xe(parseFloat(e)+parseFloat(Br(t,"x",n+"px",r)))+r},Mv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Dm(t,e)},ps="0deg",ha="0px",ms=") ",Dm=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,S=n.target,M=n.zOrigin,v="",b=g==="auto"&&t&&t!==1||g===!0;if(M&&(d!==ps||h!==ps)){var A=parseFloat(h)*io,w=Math.sin(A),x=Math.cos(A),T;A=parseFloat(d)*io,T=Math.cos(A),o=ff(S,o,w*T*-M),a=ff(S,a,-Math.sin(A)*-M),l=ff(S,l,x*T*-M+M)}m!==ha&&(v+="perspective("+m+ms),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(b||o!==ha||a!==ha||l!==ha)&&(v+=l!==ha||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ms),c!==ps&&(v+="rotate("+c+ms),h!==ps&&(v+="rotateY("+h+ms),d!==ps&&(v+="rotateX("+d+ms),(u!==ps||f!==ps)&&(v+="skew("+u+", "+f+ms),(p!==1||_!==1)&&(v+="scale("+p+", "+_+ms),S.style[Ve]=v||"translate(0, 0)"},bv=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,S=n.forceCSS,M=parseFloat(o),v=parseFloat(a),b,A,w,x,T;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=io,c*=io,b=Math.cos(l)*d,A=Math.sin(l)*d,w=Math.sin(l-c)*-u,x=Math.cos(l-c)*u,c&&(h*=io,T=Math.tan(c-h),T=Math.sqrt(1+T*T),w*=T,x*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),b*=T,A*=T)),b=Xe(b),A=Xe(A),w=Xe(w),x=Xe(x)):(b=d,x=u,A=w=0),(M&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(M=Br(f,"x",o,"px"),v=Br(f,"y",a,"px")),(p||_||m||g)&&(M=Xe(M+p-(p*b+_*w)+m),v=Xe(v+_-(p*A+_*x)+g)),(r||s)&&(T=f.getBBox(),M=Xe(M+r/100*T.width),v=Xe(v+s/100*T.height)),T="matrix("+b+","+A+","+w+","+x+","+M+","+v+")",f.setAttribute("transform",T),S&&(f.style[Ve]=T)},wv=function(t,e,n,r,s){var o=360,a=sn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?gs:1),c=l-r,h=r+c+"deg",d,u;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*gm)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*gm)%o-~~(c/o)*o)),t._pt=u=new Vn(t._pt,e,n,r,c,ov),u.e=h,u.u="deg",t._props.push(n),u},bm=function(t,e){for(var n in e)t[n]=e[n];return t},Tv=function(t,e,n){var r=bm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,p;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ve]=e,a=fa(n,1),Fr(n,Ve),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ve],o[Ve]=e,a=fa(n,1),o[Ve]=c);for(l in fr)c=r[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=_n(c),p=_n(h),d=f!==p?Br(n,l,c,p):parseFloat(c),u=parseFloat(h),t._pt=new Vn(t._pt,a,l,d,u-d,df),t._pt.u=p||0,t._props.push(l));bm(a,r)};kn("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",o=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(a){return t<2?i+a:"border"+a+i});Jl[t>1?"border"+i:i]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(p){return ur(a,p,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(p,_){return f[p]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var Sf={name:"css",register:mf,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,p,_,m,g,S,M,v,b,A,w,x,T;_f||mf(),this.styles=this.styles||Am(t),x=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Jn[_]&&of(_,e,n,r,t,s)))){if(f=typeof h,p=Jl[_],f==="function"&&(h=h.call(n,r,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=to(h)),p)p(this,t,_,h,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",cr.lastIndex=0,cr.test(c)||(m=_n(c),g=_n(h),g?m!==g&&(c=Br(t,_,c,g)+g):m&&(h+=m)),this.add(a,"setProperty",c,h,r,s,0,0,_),o.push(_),x.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,t,s):l[_],sn(c)&&~c.indexOf("random(")&&(c=to(c)),_n(c+"")||c==="auto"||(c+=Qn.units[_]||_n(ur(t,_))||""),(c+"").charAt(1)==="="&&(c=ur(t,_))):c=ur(t,_),u=parseFloat(c),S=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),d=parseFloat(h),_ in Yi&&(_==="autoAlpha"&&(u===1&&ur(t,"visibility")==="hidden"&&d&&(u=0),x.push("visibility",0,a.visibility),Or(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Yi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in fr,M){if(this.styles.save(_),T=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=oi(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=oi(t,"perspective"),C?t.style.perspective=C:Fr(t,"perspective")}d=parseFloat(h)}if(v||(b=t._gsap,b.renderTransform&&!e.parseTransform||fa(t,e.parseTransform),A=e.smoothOrigin!==!1&&b.smooth,v=this._pt=new Vn(this._pt,a,Ve,0,1,b.renderTransform,b,0,-1),v.dep=1),_==="scale")this._pt=new Vn(this._pt,b,"scaleY",b.scaleY,(S?fs(b.scaleY,S+d):d)-b.scaleY||0,df),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(jn,0,a[jn]),h=yv(h),b.svg?gf(t,h,0,A,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==b.zOrigin&&Or(this,b,"zOrigin",b.zOrigin,g),Or(this,a,_,$l(c),$l(h)));continue}else if(_==="svgOrigin"){gf(t,h,1,A,0,this);continue}else if(_ in Im){wv(this,b,_,u,S?fs(u,S+h):h);continue}else if(_==="smoothOrigin"){Or(this,b,"smooth",b.smooth,h);continue}else if(_==="force3D"){b[_]=h;continue}else if(_==="transform"){Tv(this,h,t);continue}}else _ in a||(_=ro(_)||_);if(M||(d||d===0)&&(u||u===0)&&!sv.test(h)&&_ in a)m=(c+"").substr((u+"").length),d||(d=0),g=_n(h)||(_ in Qn.units?Qn.units[_]:m),m!==g&&(u=Br(t,_,c,g)),this._pt=new Vn(this._pt,M?b:a,_,u,(S?fs(u,S+d):d)-u,!M&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?cv:df),this._pt.u=g||0,M&&T!==h?(this._pt.b=c,this._pt.e=T,this._pt.r=lv):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=av);else if(_ in a)vv.call(this,t,_,c,S?S+h:h);else if(_ in t)this.add(t,_,c||t[_],S?S+h:h,r,s);else if(_!=="parseTransform"){Wl(_,h);continue}M||(_ in a?x.push(_,0,a[_]):typeof t[_]=="function"?x.push(_,2,t[_]()):x.push(_,1,c||t[_])),o.push(_)}}w&&uf(this)},render:function(t,e){if(e.tween._time||!xf())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ur,aliases:Yi,getSetter:function(t,e,n){var r=Yi[e];return r&&r.indexOf(",")<0&&(e=r),e in fr&&e!==jn&&(t._gsap.x||ur(t,"x"))?n&&mm===n?e==="scale"?dv:fv:(mm=n||{})&&(e==="scale"?pv:mv):t.style&&!Hl(t.style[e])?hv:~e.indexOf("-")?uv:Zl(t,e)},core:{_removeProperty:Fr,_getMatrix:yf}};Cn.utils.checkPrefix=ro;Cn.core.getStyleSaver=Am;(function(i,t,e,n){var r=kn(i+","+t+","+e,function(s){fr[s]=1});kn(t,function(s){Qn.units[s]="deg",Im[s]=1}),Yi[r[13]]=i+","+t,kn(n,function(s){var o=s.split(":");Yi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Qn.units[i]="px"});Cn.registerPlugin(Sf);var Pi=Cn.registerPlugin(Sf)||Cn,AT=Pi.core.Tween;function Nm(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function Ev(i,t,e){return t&&Nm(i.prototype,t),e&&Nm(i,e),i}var xn,jl,Av,ai,zr,kr,oo,Om,xs,ao,Fm,dr,Ii,Bm,zm=function(){return xn||typeof window<"u"&&(xn=window.gsap)&&xn.registerPlugin&&xn},km=1,so=[],ae=[],Li=[],pa=Date.now,Mf=function(t,e){return e},Cv=function(){var t=ao.core,e=t.bridge||{},n=t._scrollers,r=t._proxies;n.push.apply(n,ae),r.push.apply(r,Li),ae=n,Li=r,Mf=function(o,a){return e[o](a)}},mr=function(t,e){return~Li.indexOf(t)&&Li[Li.indexOf(t)+1][e]},ma=function(t){return!!~Fm.indexOf(t)},Hn=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:r!==!1,capture:!!s})},Gn=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},Kl="scrollLeft",Ql="scrollTop",bf=function(){return dr&&dr.isPressed||ae.cache++},tc=function(t,e){var n=function r(s){if(s||s===0){km&&(ai.history.scrollRestoration="manual");var o=dr&&dr.isPressed;s=r.v=Math.round(s)||(dr&&dr.iOS?1:0),t(s),r.cacheID=ae.cache,o&&Mf("ss",s)}else(e||ae.cache!==r.cacheID||Mf("ref"))&&(r.cacheID=ae.cache,r.v=t());return r.v+r.offset};return n.offset=0,t&&n},Rn={s:Kl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:tc(function(i){return arguments.length?ai.scrollTo(i,je.sc()):ai.pageXOffset||zr[Kl]||kr[Kl]||oo[Kl]||0})},je={s:Ql,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Rn,sc:tc(function(i){return arguments.length?ai.scrollTo(Rn.sc(),i):ai.pageYOffset||zr[Ql]||kr[Ql]||oo[Ql]||0})},Wn=function(t,e){return(e&&e._ctx&&e._ctx.selector||xn.utils.toArray)(t)[0]||(typeof t=="string"&&xn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Rv=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},pr=function(t,e){var n=e.s,r=e.sc;ma(t)&&(t=zr.scrollingElement||kr);var s=ae.indexOf(t),o=r===je.sc?1:2;!~s&&(s=ae.push(t)-1),ae[s+o]||Hn(t,"scroll",bf);var a=ae[s+o],l=a||(ae[s+o]=tc(mr(t,n),!0)||(ma(t)?r:tc(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=xn.getProperty(t,"scrollBehavior")==="smooth"),l},ec=function(t,e,n){var r=t,s=t,o=pa(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,_){var m=pa();_||m-o>l?(s=r,r=p,a=o,o=m):n?r+=p:r=s+(p-s)/(m-a)*(o-a)},d=function(){s=r=n?0:r,a=o=0},u=function(p){var _=a,m=s,g=pa();return(p||p===0)&&p!==r&&h(p),o===a||g-a>c?0:(r+(n?m:-m))/((n?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},da=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Um=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Vm=function(){ao=xn.core.globals().ScrollTrigger,ao&&ao.core&&Cv()},Gm=function(t){return xn=t||zm(),!jl&&xn&&typeof document<"u"&&document.body&&(ai=window,zr=document,kr=zr.documentElement,oo=zr.body,Fm=[ai,zr,kr,oo],Av=xn.utils.clamp,Bm=xn.core.context||function(){},xs="onpointerenter"in oo?"pointer":"mouse",Om=Ye.isTouch=ai.matchMedia&&ai.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ai||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ii=Ye.eventTypes=("ontouchstart"in kr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in kr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return km=0},500),jl=1),ao||Vm(),jl};Rn.op=je;ae.cache=0;var Ye=(function(){function i(e){this.init(e)}var t=i.prototype;return t.init=function(n){jl||Gm(xn)||console.warn("Please gsap.registerPlugin(Observer)"),ao||Vm();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,S=n.onDrag,M=n.onPress,v=n.onRelease,b=n.onRight,A=n.onLeft,w=n.onUp,x=n.onDown,T=n.onChangeX,C=n.onChangeY,D=n.onChange,I=n.onToggleX,k=n.onToggleY,L=n.onHover,z=n.onHoverEnd,H=n.onMove,V=n.ignoreCheck,K=n.isNormalizer,G=n.onGestureStart,R=n.onGestureEnd,Z=n.onWheel,mt=n.onEnable,gt=n.onDisable,Yt=n.onClick,It=n.scrollSpeed,Zt=n.capture,$=n.allowClicks,et=n.lockAxis,dt=n.onLockAxis;this.target=a=Wn(a)||kr,this.vars=n,f&&(f=xn.utils.toArray(f)),r=r||1e-9,s=s||0,p=p||1,It=It||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ai.getComputedStyle(oo).lineHeight)||22);var Gt,vt,Nt,Ot,j,rt,at,N=this,ft=0,Vt=0,Ft=n.passive||!h&&n.passive!==!1,Ct=pr(a,Rn),Kt=pr(a,je),U=Ct(),he=Kt(),Jt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ii[0]==="pointerdown",P=ma(a),y=a.ownerDocument||zr,W=[0,0,0],X=[0,0,0],Q=0,pt=function(){return Q=pa()},ct=function(ot,qt){return(N.event=ot)&&f&&Rv(ot.target,f)||qt&&Jt&&ot.pointerType!=="touch"||V&&V(ot,qt)},tt=function(){N._vx.reset(),N._vy.reset(),vt.pause(),d&&d(N)},it=function(){var ot=N.deltaX=Um(W),qt=N.deltaY=Um(X),lt=Math.abs(ot)>=r,$t=Math.abs(qt)>=r;D&&(lt||$t)&&D(N,ot,qt,W,X),lt&&(b&&N.deltaX>0&&b(N),A&&N.deltaX<0&&A(N),T&&T(N),I&&N.deltaX<0!=ft<0&&I(N),ft=N.deltaX,W[0]=W[1]=W[2]=0),$t&&(x&&N.deltaY>0&&x(N),w&&N.deltaY<0&&w(N),C&&C(N),k&&N.deltaY<0!=Vt<0&&k(N),Vt=N.deltaY,X[0]=X[1]=X[2]=0),(Ot||Nt)&&(H&&H(N),Nt&&(m&&Nt===1&&m(N),S&&S(N),Nt=0),Ot=!1),rt&&!(rt=!1)&&dt&&dt(N),j&&(Z(N),j=!1),Gt=0},yt=function(ot,qt,lt){W[lt]+=ot,X[lt]+=qt,N._vx.update(ot),N._vy.update(qt),c?Gt||(Gt=requestAnimationFrame(it)):it()},Ut=function(ot,qt){et&&!at&&(N.axis=at=Math.abs(ot)>Math.abs(qt)?"x":"y",rt=!0),at!=="y"&&(W[2]+=ot,N._vx.update(ot,!0)),at!=="x"&&(X[2]+=qt,N._vy.update(qt,!0)),c?Gt||(Gt=requestAnimationFrame(it)):it()},St=function(ot){if(!ct(ot,1)){ot=da(ot,h);var qt=ot.clientX,lt=ot.clientY,$t=qt-N.x,Bt=lt-N.y,ee=N.isDragging;N.x=qt,N.y=lt,(ee||($t||Bt)&&(Math.abs(N.startX-qt)>=s||Math.abs(N.startY-lt)>=s))&&(Nt||(Nt=ee?2:1),ee||(N.isDragging=!0),Ut($t,Bt))}},xt=N.onPress=function(ht){ct(ht,1)||ht&&ht.button||(N.axis=at=null,vt.pause(),N.isPressed=!0,ht=da(ht),ft=Vt=0,N.startX=N.x=ht.clientX,N.startY=N.y=ht.clientY,N._vx.reset(),N._vy.reset(),Hn(K?a:y,Ii[1],St,Ft,!0),N.deltaX=N.deltaY=0,M&&M(N))},ut=N.onRelease=function(ht){if(!ct(ht,1)){Gn(K?a:y,Ii[1],St,!0);var ot=!isNaN(N.y-N.startY),qt=N.isDragging,lt=qt&&(Math.abs(N.x-N.startX)>3||Math.abs(N.y-N.startY)>3),$t=da(ht);!lt&&ot&&(N._vx.reset(),N._vy.reset(),h&&$&&xn.delayedCall(.08,function(){if(pa()-Q>300&&!ht.defaultPrevented){if(ht.target.click)ht.target.click();else if(y.createEvent){var Bt=y.createEvent("MouseEvents");Bt.initMouseEvent("click",!0,!0,ai,1,$t.screenX,$t.screenY,$t.clientX,$t.clientY,!1,!1,!1,!1,0,null),ht.target.dispatchEvent(Bt)}}})),N.isDragging=N.isGesturing=N.isPressed=!1,d&&qt&&!K&&vt.restart(!0),Nt&&it(),g&&qt&&g(N),v&&v(N,lt)}},Wt=function(ot){return ot.touches&&ot.touches.length>1&&(N.isGesturing=!0)&&G(ot,N.isDragging)},Qt=function(){return(N.isGesturing=!1)||R(N)},F=function(ot){if(!ct(ot)){var qt=Ct(),lt=Kt();yt((qt-U)*It,(lt-he)*It,1),U=qt,he=lt,d&&vt.restart(!0)}},_t=function(ot){if(!ct(ot)){ot=da(ot,h),Z&&(j=!0);var qt=(ot.deltaMode===1?l:ot.deltaMode===2?ai.innerHeight:1)*p;yt(ot.deltaX*qt,ot.deltaY*qt,0),d&&!K&&vt.restart(!0)}},nt=function(ot){if(!ct(ot)){var qt=ot.clientX,lt=ot.clientY,$t=qt-N.x,Bt=lt-N.y;N.x=qt,N.y=lt,Ot=!0,d&&vt.restart(!0),($t||Bt)&&Ut($t,Bt)}},Mt=function(ot){N.event=ot,L(N)},Tt=function(ot){N.event=ot,z(N)},st=function(ot){return ct(ot)||da(ot,h)&&Yt(N)};vt=N._dc=xn.delayedCall(u||.25,tt).pause(),N.deltaX=N.deltaY=0,N._vx=ec(0,50,!0),N._vy=ec(0,50,!0),N.scrollX=Ct,N.scrollY=Kt,N.isDragging=N.isGesturing=N.isPressed=!1,Bm(this),N.enable=function(ht){return N.isEnabled||(Hn(P?y:a,"scroll",bf),o.indexOf("scroll")>=0&&Hn(P?y:a,"scroll",F,Ft,Zt),o.indexOf("wheel")>=0&&Hn(a,"wheel",_t,Ft,Zt),(o.indexOf("touch")>=0&&Om||o.indexOf("pointer")>=0)&&(Hn(a,Ii[0],xt,Ft,Zt),Hn(y,Ii[2],ut),Hn(y,Ii[3],ut),$&&Hn(a,"click",pt,!0,!0),Yt&&Hn(a,"click",st),G&&Hn(y,"gesturestart",Wt),R&&Hn(y,"gestureend",Qt),L&&Hn(a,xs+"enter",Mt),z&&Hn(a,xs+"leave",Tt),H&&Hn(a,xs+"move",nt)),N.isEnabled=!0,N.isDragging=N.isGesturing=N.isPressed=Ot=Nt=!1,N._vx.reset(),N._vy.reset(),U=Ct(),he=Kt(),ht&&ht.type&&xt(ht),mt&&mt(N)),N},N.disable=function(){N.isEnabled&&(so.filter(function(ht){return ht!==N&&ma(ht.target)}).length||Gn(P?y:a,"scroll",bf),N.isPressed&&(N._vx.reset(),N._vy.reset(),Gn(K?a:y,Ii[1],St,!0)),Gn(P?y:a,"scroll",F,Zt),Gn(a,"wheel",_t,Zt),Gn(a,Ii[0],xt,Zt),Gn(y,Ii[2],ut),Gn(y,Ii[3],ut),Gn(a,"click",pt,!0),Gn(a,"click",st),Gn(y,"gesturestart",Wt),Gn(y,"gestureend",Qt),Gn(a,xs+"enter",Mt),Gn(a,xs+"leave",Tt),Gn(a,xs+"move",nt),N.isEnabled=N.isPressed=N.isDragging=!1,gt&&gt(N))},N.kill=N.revert=function(){N.disable();var ht=so.indexOf(N);ht>=0&&so.splice(ht,1),dr===N&&(dr=0)},so.push(N),K&&ma(a)&&(dr=N),N.enable(_)},Ev(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();Ye.version="3.15.0";Ye.create=function(i){return new Ye(i)};Ye.register=Gm;Ye.getAll=function(){return so.slice()};Ye.getById=function(i){return so.filter(function(t){return t.vars.id===i})[0]};zm()&&xn.registerPlugin(Ye);var Lt,uo,fe,be,hi,ye,Ff,_c,Ra,Ma,_a,nc,Pn,yc,Pf,Yn,Hm,Wm,fo,og,wf,ag,Xn,If,lg,cg,Vr,Lf,Bf,po,zf,ba,Df,Tf,ic=1,In=Date.now,Ef=In(),Ti=0,xa=0,Xm=function(t,e,n){var r=ci(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=r,r?t.substr(6,t.length-7):t},Ym=function(t,e){return e&&(!ci(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Pv=function i(){return xa&&requestAnimationFrame(i)},qm=function(){return yc=1},Zm=function(){return yc=0},qi=function(t){return t},va=function(t){return Math.round(t*1e5)/1e5||0},hg=function(){return typeof window<"u"},ug=function(){return Lt||hg()&&(Lt=window.gsap)&&Lt.registerPlugin&&Lt},ws=function(t){return!!~Ff.indexOf(t)},fg=function(t){return(t==="Height"?zf:fe["inner"+t])||hi["client"+t]||ye["client"+t]},dg=function(t){return mr(t,"getBoundingClientRect")||(ws(t)?function(){return gc.width=fe.innerWidth,gc.height=zf,gc}:function(){return gr(t)})},Iv=function(t,e,n){var r=n.d,s=n.d2,o=n.a;return(o=mr(t,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(e?fg(s):t["client"+s])||0}},Lv=function(t,e){return!e||~Li.indexOf(t)?dg(t):function(){return gc}},Zi=function(t,e){var n=e.s,r=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+r)&&(o=mr(t,n))?o()-dg(t)()[s]:ws(t)?(hi[n]||ye[n])-fg(r):t[n]-t["offset"+r])},rc=function(t,e){for(var n=0;n<fo.length;n+=3)(!e||~e.indexOf(fo[n+1]))&&t(fo[n],fo[n+1],fo[n+2])},ci=function(t){return typeof t=="string"},Ln=function(t){return typeof t=="function"},ya=function(t){return typeof t=="number"},vs=function(t){return typeof t=="object"},ga=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},lo=function(t,e,n){if(t.enabled){var r=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);r&&r.totalTime&&(t.callbackAnimation=r)}},co=Math.abs,pg="left",mg="top",kf="right",Vf="bottom",Ss="width",Ms="height",wa="Right",Ta="Left",Ea="Top",Aa="Bottom",tn="padding",bi="margin",go="Width",Gf="Height",on="px",wi=function(t){return fe.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Dv=function(t){var e=wi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Jm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},gr=function(t,e){var n=e&&wi(t)[Pf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Lt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},xc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},gg=function(t){var e=[],n=t.labels,r=t.duration(),s;for(s in n)e.push(n[s]/r);return e},Nv=function(t){return function(e){return Lt.utils.snap(gg(t),e)}},Hf=function(t){var e=Lt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return e(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=e(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:e(s<0?r-t:r+t)}},Uv=function(t){return function(e,n){return Hf(gg(t))(e,n.direction)}},sc=function(t,e,n,r){return n.split(",").forEach(function(s){return t(e,s,r)})},fn=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:!r,capture:!!s})},un=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},oc=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},$m={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ac={toggleActions:"play",anticipatePin:0},vc={top:0,left:0,center:.5,bottom:1,right:1},fc=function(t,e){if(ci(t)){var n=t.indexOf("="),r=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(r*=e/100),t=t.substr(0,n-1)),t=r+(t in vc?vc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},lc=function(t,e,n,r,s,o,a,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,p=be.createElement("div"),_=ws(n)||mr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,g=_?ye:n.tagName==="IFRAME"?n.contentDocument.body:n,S=t.indexOf("start")!==-1,M=S?c:h,v="border-color:"+M+";font-size:"+d+";color:"+M+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(r===je?kf:Vf)+":"+(o+parseFloat(u))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=S,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=v,p.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+r.op.d2],dc(p,0,r,S),p},dc=function(t,e,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];t._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+go]=1,s["border"+a+go]=0,s[n.p]=e+"px",Lt.set(t,s)},le=[],Nf={},Pa,Km=function(){return In()-Ti>34&&(Pa||(Pa=requestAnimationFrame(_r)))},ho=function(){(!Xn||!Xn.isPressed||Xn.startX>ye.clientWidth)&&(ae.cache++,Xn?Pa||(Pa=requestAnimationFrame(_r)):_r(),Ti||Es("scrollStart"),Ti=In())},Af=function(){cg=fe.innerWidth,lg=fe.innerHeight},Sa=function(t){ae.cache++,(t===!0||!Pn&&!ag&&!be.fullscreenElement&&!be.webkitFullscreenElement&&(!If||cg!==fe.innerWidth||Math.abs(fe.innerHeight-lg)>fe.innerHeight*.25))&&_c.restart(!0)},Ts={},Ov=[],_g=function i(){return un(ce,"scrollEnd",i)||ys(!0)},Es=function(t){return Ts[t]&&Ts[t].map(function(e){return e()})||Ov},li=[],xg=function(t){for(var e=0;e<li.length;e+=5)(!t||li[e+4]&&li[e+4].query===t)&&(li[e].style.cssText=li[e+1],li[e].getBBox&&li[e].setAttribute("transform",li[e+2]||""),li[e+3].uncache=1)},vg=function(){return ae.forEach(function(t){return Ln(t)&&++t.cacheID&&(t.rec=t())})},Wf=function(t,e){var n;for(Yn=0;Yn<le.length;Yn++)n=le[Yn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));ba=!0,e&&xg(e),e||Es("revert")},yg=function(t,e){ae.cache++,(e||!qn)&&ae.forEach(function(n){return Ln(n)&&n.cacheID++&&(n.rec=0)}),ci(t)&&(fe.history.scrollRestoration=Bf=t)},qn,bs=0,Qm,Fv=function(){if(Qm!==bs){var t=Qm=bs;requestAnimationFrame(function(){return t===bs&&ys(!0)})}},Sg=function(){ye.appendChild(po),zf=!Xn&&po.offsetHeight||fe.innerHeight,ye.removeChild(po)},jm=function(t){return Ra(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},ys=function(t,e){if(hi=be.documentElement,ye=be.body,Ff=[fe,be,hi,ye],Ti&&!t&&!ba){fn(ce,"scrollEnd",_g);return}Sg(),qn=ce.isRefreshing=!0,ba||vg();var n=Es("refreshInit");og&&ce.sort(),e||Wf(),ae.forEach(function(r){Ln(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),le.slice(0).forEach(function(r){return r.refresh()}),ba=!1,le.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Df=1,jm(!0),le.forEach(function(r){var s=Zi(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),jm(!1),Df=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),ae.forEach(function(r){Ln(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),yg(Bf,1),_c.pause(),bs++,qn=2,_r(2),le.forEach(function(r){return Ln(r.vars.onRefresh)&&r.vars.onRefresh(r)}),qn=ce.isRefreshing=!1,Es("refresh")},Uf=0,pc=1,Ca,_r=function(t){if(t===2||!qn&&!ba){ce.isUpdating=!0,Ca&&Ca.update(0);var e=le.length,n=In(),r=n-Ef>=50,s=e&&le[0].scroll();if(pc=Uf>s?-1:1,qn||(Uf=s),r&&(Ti&&!yc&&n-Ti>200&&(Ti=0,Es("scrollEnd")),_a=Ef,Ef=n),pc<0){for(Yn=e;Yn-- >0;)le[Yn]&&le[Yn].update(0,r);pc=1}else for(Yn=0;Yn<e;Yn++)le[Yn]&&le[Yn].update(0,r);ce.isUpdating=!1}Pa=0},Of=[pg,mg,Vf,kf,bi+Aa,bi+wa,bi+Ea,bi+Ta,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],mc=Of.concat([Ss,Ms,"boxSizing","max"+go,"max"+Gf,"position",bi,tn,tn+Ea,tn+wa,tn+Aa,tn+Ta]),Bv=function(t,e,n){mo(n);var r=t._gsap;if(r.spacerIsNative)mo(r.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Cf=function(t,e,n,r){if(!t._gsap.swappedIn){for(var s=Of.length,o=e.style,a=t.style,l;s--;)l=Of[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Vf]=a[kf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ss]=xc(t,Rn)+on,o[Ms]=xc(t,je)+on,o[tn]=a[bi]=a[mg]=a[pg]="0",mo(r),a[Ss]=a["max"+go]=n[Ss],a[Ms]=a["max"+Gf]=n[Ms],a[tn]=n[tn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},zv=/([A-Z])/g,mo=function(t){if(t){var e=t.t.style,n=t.length,r=0,s,o;for((t.t._gsap||Lt.core.getCache(t.t)).uncache=1;r<n;r+=2)o=t[r+1],s=t[r],o?e[s]=o:e[s]&&e.removeProperty(s.replace(zv,"-$1").toLowerCase())}},cc=function(t){for(var e=mc.length,n=t.style,r=[],s=0;s<e;s++)r.push(mc[s],n[mc[s]]);return r.t=t,r},kv=function(t,e,n){for(var r=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],r.push(a,a in e?e[a]:t[o+1]);return r.t=t.t,r},gc={left:0,top:0},tg=function(t,e,n,r,s,o,a,l,c,h,d,u,f,p){Ln(t)&&(t=t(l)),ci(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?fc("0"+t.substr(3),n):0));var _=f?f.time():0,m,g,S;if(f&&f.seek(0),isNaN(t)||(t=+t),ya(t))f&&(t=Lt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&dc(a,n,r,!0);else{Ln(e)&&(e=e(l));var M=(t||"0").split(" "),v,b,A,w;S=Wn(e,l)||ye,v=gr(S)||{},(!v||!v.left&&!v.top)&&wi(S).display==="none"&&(w=S.style.display,S.style.display="block",v=gr(S),w?S.style.display=w:S.style.removeProperty("display")),b=fc(M[0],v[r.d]),A=fc(M[1]||"0",n),t=v[r.p]-c[r.p]-h+b+s-A,a&&dc(a,A,r,n-A<20||a._isStart&&A>20),n-=n-A}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var x=t+n,T=o._isStart;m="scroll"+r.d2,dc(o,x,r,T&&x>20||!T&&(d?Math.max(ye[m],hi[m]):o.parentNode[m])<=x+1),d&&(c=gr(a),d&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+on))}return f&&S&&(m=gr(S),f.seek(u),g=gr(S),f._caScrollDist=m[r.p]-g[r.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},Vv=/(webkit|moz|length|cssText|inset)/i,eg=function(t,e,n,r){if(t.parentNode!==e){var s=t.style,o,a;if(e===ye){t._stOrig=s.cssText,a=wi(t);for(o in a)!+o&&!Vv.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=t._stOrig;Lt.core.getCache(t).uncache=1,e.appendChild(t)}},Mg=function(t,e,n){var r=e,s=r;return function(o){var a=Math.round(t());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=Math.round(o),r}},hc=function(t,e,n){var r={};r[e.p]="+="+n,Lt.set(t,r)},ng=function(t,e){var n=pr(t,e),r="_scroll"+e.p2,s=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,p={};c=c||n();var _=Mg(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[r]=a,l.inherit=!1,l.modifiers=p,p[r]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){ae.cache++,o.tween&&_r()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Lt.to(t,l),u};return t[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},fn(t,"wheel",n.wheelHandler),ce.isTouch&&fn(t,"touchmove",n.wheelHandler),s},ce=(function(){function i(e,n){uo||i.register(Lt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Lf(this),this.init(e,n)}var t=i.prototype;return t.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!xa){this.update=this.refresh=this.kill=qi;return}n=Jm(ci(n)||ya(n)||n.nodeType?{trigger:n}:n,ac);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,S=s.onSnapComplete,M=s.once,v=s.snap,b=s.pinReparent,A=s.pinSpacer,w=s.containerAnimation,x=s.fastScrollEnd,T=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Rn:je,D=!d&&d!==0,I=Wn(n.scroller||fe),k=Lt.core.getCache(I),L=ws(I),z=("pinType"in n?n.pinType:mr(I,"pinType")||L&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],V=D&&n.toggleActions.split(" "),K="markers"in n?n.markers:ac.markers,G=L?0:parseFloat(wi(I)["border"+C.p2+go])||0,R=this,Z=n.onRefreshInit&&function(){return n.onRefreshInit(R)},mt=Iv(I,L,C),gt=Lv(I,L),Yt=0,It=0,Zt=0,$=pr(I,C),et,dt,Gt,vt,Nt,Ot,j,rt,at,N,ft,Vt,Ft,Ct,Kt,U,he,Jt,P,y,W,X,Q,pt,ct,tt,it,yt,Ut,St,xt,ut,Wt,Qt,F,_t,nt,Mt,Tt;if(R._startClamp=R._endClamp=!1,R._dir=C,m*=45,R.scroller=I,R.scroll=w?w.time.bind(w):$,vt=$(),R.vars=n,r=r||n.animation,"refreshPriority"in n&&(og=1,n.refreshPriority===-9999&&(Ca=R)),k.tweenScroll=k.tweenScroll||{top:ng(I,je),left:ng(I,Rn)},R.tweenTo=et=k.tweenScroll[C.p],R.scrubDuration=function(lt){Wt=ya(lt)&&lt,Wt?ut?ut.duration(lt):ut=Lt.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Wt,paused:!0,onComplete:function(){return g&&g(R)}}):(ut&&ut.progress(1).kill(),ut=0)},r&&(r.vars.lazy=!1,r._initted&&!R.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),R.animation=r.pause(),r.scrollTrigger=R,R.scrubDuration(d),St=0,l||(l=r.vars.id)),v&&((!vs(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in ye.style&&Lt.set(L?[ye,hi]:I,{scrollBehavior:"auto"}),ae.forEach(function(lt){return Ln(lt)&&lt.target===(L?be.scrollingElement||hi:I)&&(lt.smooth=!1)}),Gt=Ln(v.snapTo)?v.snapTo:v.snapTo==="labels"?Nv(r):v.snapTo==="labelsDirectional"?Uv(r):v.directional!==!1?function(lt,$t){return Hf(v.snapTo)(lt,In()-It<500?0:$t.direction)}:Lt.utils.snap(v.snapTo),Qt=v.duration||{min:.1,max:2},Qt=vs(Qt)?Ma(Qt.min,Qt.max):Ma(Qt,Qt),F=Lt.delayedCall(v.delay||Wt/2||.1,function(){var lt=$(),$t=In()-It<500,Bt=et.tween;if(($t||Math.abs(R.getVelocity())<10)&&!Bt&&!yc&&Yt!==lt){var ee=(lt-Ot)/Ct,$e=r&&!D?r.totalProgress():ee,ue=$t?0:($e-xt)/(In()-_a)*1e3||0,Le=Lt.utils.clamp(-ee,1-ee,co(ue/2)*ue/.185),cn=ee+(v.inertia===!1?0:Le),De,Te,ge=v,Fn=ge.onStart,Pe=ge.onInterrupt,wn=ge.onComplete;if(De=Gt(cn,R),ya(De)||(De=cn),Te=Math.max(0,Math.round(Ot+De*Ct)),lt<=j&&lt>=Ot&&Te!==lt){if(Bt&&!Bt._initted&&Bt.data<=co(Te-lt))return;v.inertia===!1&&(Le=De-ee),et(Te,{duration:Qt(co(Math.max(co(cn-$e),co(De-$e))*.185/ue/.05||0)),ease:v.ease||"power3",data:co(Te-lt),onInterrupt:function(){return F.restart(!0)&&Pe&&lo(R,Pe)},onComplete:function(){R.update(),Yt=$(),r&&!D&&(ut?ut.resetTo("totalProgress",De,r._tTime/r._tDur):r.progress(De)),St=xt=r&&!D?r.totalProgress():R.progress,S&&S(R),wn&&lo(R,wn)}},lt,Le*Ct,Te-lt-Le*Ct),Fn&&lo(R,Fn,et.tween)}}else R.isActive&&Yt!==lt&&F.restart(!0)}).pause()),l&&(Nf[l]=R),u=R.trigger=Wn(u||f!==!0&&f),Tt=u&&u._gsap&&u._gsap.stRevert,Tt&&(Tt=Tt(R)),f=f===!0?u:Wn(f),ci(a)&&(a={targets:u,className:a}),f&&(p===!1||p===bi||(p=!p&&f.parentNode&&f.parentNode.style&&wi(f.parentNode).display==="flex"?!1:tn),R.pin=f,dt=Lt.core.getCache(f),dt.spacer?Kt=dt.pinState:(A&&(A=Wn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),dt.spacerIsNative=!!A,A&&(dt.spacerState=cc(A))),dt.spacer=Jt=A||be.createElement("div"),Jt.classList.add("pin-spacer"),l&&Jt.classList.add("pin-spacer-"+l),dt.pinState=Kt=cc(f)),n.force3D!==!1&&Lt.set(f,{force3D:!0}),R.spacer=Jt=dt.spacer,Ut=wi(f),pt=Ut[p+C.os2],y=Lt.getProperty(f),W=Lt.quickSetter(f,C.a,on),Cf(f,Jt,Ut),he=cc(f)),K){Vt=vs(K)?Jm(K,$m):$m,N=lc("scroller-start",l,I,C,Vt,0),ft=lc("scroller-end",l,I,C,Vt,0,N),P=N["offset"+C.op.d2];var st=Wn(mr(I,"content")||I);rt=this.markerStart=lc("start",l,st,C,Vt,P,0,w),at=this.markerEnd=lc("end",l,st,C,Vt,P,0,w),w&&(Mt=Lt.quickSetter([rt,at],C.a,on)),!z&&!(Li.length&&mr(I,"fixedMarkers")===!0)&&(Dv(L?ye:I),Lt.set([N,ft],{force3D:!0}),tt=Lt.quickSetter(N,C.a,on),yt=Lt.quickSetter(ft,C.a,on))}if(w){var ht=w.vars.onUpdate,ot=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){R.update(0,0,1),ht&&ht.apply(w,ot||[])})}if(R.previous=function(){return le[le.indexOf(R)-1]},R.next=function(){return le[le.indexOf(R)+1]},R.revert=function(lt,$t){if(!$t)return R.kill(!0);var Bt=lt!==!1||!R.enabled,ee=Pn;Bt!==R.isReverted&&(Bt&&(_t=Math.max($(),R.scroll.rec||0),Zt=R.progress,nt=r&&r.progress()),rt&&[rt,at,N,ft].forEach(function($e){return $e.style.display=Bt?"none":"block"}),Bt&&(Pn=R,R.update(Bt)),f&&(!b||!R.isActive)&&(Bt?Bv(f,Jt,Kt):Cf(f,Jt,wi(f),ct)),Bt||R.update(Bt),Pn=ee,R.isReverted=Bt)},R.refresh=function(lt,$t,Bt,ee){if(!((Pn||!R.enabled)&&!$t)){if(f&&lt&&Ti){fn(i,"scrollEnd",_g);return}!qn&&Z&&Z(R),Pn=R,et.tween&&!Bt&&(et.tween.kill(),et.tween=0),ut&&ut.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(bt){return bt.vars.immediateRender&&bt.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var $e=mt(),ue=gt(),Le=w?w.duration():Zi(I,C),cn=Ct<=.01||!Ct,De=0,Te=ee||0,ge=vs(Bt)?Bt.end:n.end,Fn=n.endTrigger||u,Pe=vs(Bt)?Bt.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),wn=R.pinnedContainer=n.pinnedContainer&&Wn(n.pinnedContainer,R),Bn=u&&Math.max(0,le.indexOf(R))||0,Ke=Bn,He,rn,Vi,Xs,hn,qe,xi,Ys,E,B,J,Y,q;for(K&&vs(Bt)&&(Y=Lt.getProperty(N,C.p),q=Lt.getProperty(ft,C.p));Ke-- >0;)qe=le[Ke],qe.end||qe.refresh(0,1)||(Pn=R),xi=qe.pin,xi&&(xi===u||xi===f||xi===wn)&&!qe.isReverted&&(B||(B=[]),B.unshift(qe),qe.revert(!0,!0)),qe!==le[Ke]&&(Bn--,Ke--);for(Ln(Pe)&&(Pe=Pe(R)),Pe=Xm(Pe,"start",R),Ot=tg(Pe,u,$e,C,$(),rt,N,R,ue,G,z,Le,w,R._startClamp&&"_startClamp")||(f?-.001:0),Ln(ge)&&(ge=ge(R)),ci(ge)&&!ge.indexOf("+=")&&(~ge.indexOf(" ")?ge=(ci(Pe)?Pe.split(" ")[0]:"")+ge:(De=fc(ge.substr(2),$e),ge=ci(Pe)?Pe:(w?Lt.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Ot):Ot)+De,Fn=u)),ge=Xm(ge,"end",R),j=Math.max(Ot,tg(ge||(Fn?"100% 0":Le),Fn,$e,C,$()+De,at,ft,R,ue,G,z,Le,w,R._endClamp&&"_endClamp"))||-.001,De=0,Ke=Bn;Ke--;)qe=le[Ke]||{},xi=qe.pin,xi&&qe.start-qe._pinPush<=Ot&&!w&&qe.end>0&&(He=qe.end-(R._startClamp?Math.max(0,qe.start):qe.start),(xi===u&&qe.start-qe._pinPush<Ot||xi===wn)&&isNaN(Pe)&&(De+=He*(1-qe.progress)),xi===f&&(Te+=He));if(Ot+=De,j+=De,R._startClamp&&(R._startClamp+=De),R._endClamp&&!qn&&(R._endClamp=j||-.001,j=Math.min(j,Zi(I,C))),Ct=j-Ot||(Ot-=.01)&&.001,cn&&(Zt=Lt.utils.clamp(0,1,Lt.utils.normalize(Ot,j,_t))),R._pinPush=Te,rt&&De&&(He={},He[C.a]="+="+De,wn&&(He[C.p]="-="+$()),Lt.set([rt,at],He)),f&&!(Df&&R.end>=Zi(I,C)))He=wi(f),Xs=C===je,Vi=$(),X=parseFloat(y(C.a))+Te,!Le&&j>1&&(J=(L?be.scrollingElement||hi:I).style,J={style:J,value:J["overflow"+C.a.toUpperCase()]},L&&wi(ye)["overflow"+C.a.toUpperCase()]!=="scroll"&&(J.style["overflow"+C.a.toUpperCase()]="scroll")),Cf(f,Jt,He),he=cc(f),rn=gr(f,!0),Ys=z&&pr(I,Xs?Rn:je)(),p?(ct=[p+C.os2,Ct+Te+on],ct.t=Jt,Ke=p===tn?xc(f,C)+Ct+Te:0,Ke&&(ct.push(C.d,Ke+on),Jt.style.flexBasis!=="auto"&&(Jt.style.flexBasis=Ke+on)),mo(ct),wn&&le.forEach(function(bt){bt.pin===wn&&bt.vars.pinSpacing!==!1&&(bt._subPinOffset=!0)}),z&&$(_t)):(Ke=xc(f,C),Ke&&Jt.style.flexBasis!=="auto"&&(Jt.style.flexBasis=Ke+on)),z&&(hn={top:rn.top+(Xs?Vi-Ot:Ys)+on,left:rn.left+(Xs?Ys:Vi-Ot)+on,boxSizing:"border-box",position:"fixed"},hn[Ss]=hn["max"+go]=Math.ceil(rn.width)+on,hn[Ms]=hn["max"+Gf]=Math.ceil(rn.height)+on,hn[bi]=hn[bi+Ea]=hn[bi+wa]=hn[bi+Aa]=hn[bi+Ta]="0",hn[tn]=He[tn],hn[tn+Ea]=He[tn+Ea],hn[tn+wa]=He[tn+wa],hn[tn+Aa]=He[tn+Aa],hn[tn+Ta]=He[tn+Ta],U=kv(Kt,hn,b),qn&&$(0)),r?(E=r._initted,wf(1),r.render(r.duration(),!0,!0),Q=y(C.a)-X+Ct+Te,it=Math.abs(Ct-Q)>1,z&&it&&U.splice(U.length-2,2),r.render(0,!0,!0),E||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),wf(0)):Q=Ct,J&&(J.value?J.style["overflow"+C.a.toUpperCase()]=J.value:J.style.removeProperty("overflow-"+C.a));else if(u&&$()&&!w)for(rn=u.parentNode;rn&&rn!==ye;)rn._pinOffset&&(Ot-=rn._pinOffset,j-=rn._pinOffset),rn=rn.parentNode;B&&B.forEach(function(bt){return bt.revert(!1,!0)}),R.start=Ot,R.end=j,vt=Nt=qn?_t:$(),!w&&!qn&&(vt<_t&&$(_t),R.scroll.rec=0),R.revert(!1,!0),It=In(),F&&(Yt=-1,F.restart(!0)),Pn=0,r&&D&&(r._initted||nt)&&r.progress()!==nt&&r.progress(nt||0,!0).render(r.time(),!0,!0),(cn||Zt!==R.progress||w||_||r&&!r._initted)&&(r&&!D&&(r._initted||Zt||r.vars.immediateRender!==!1)&&r.totalProgress(w&&Ot<-.001&&!Zt?Lt.utils.normalize(Ot,j,0):Zt,!0),R.progress=cn||(vt-Ot)/Ct===Zt?0:Zt),f&&p&&(Jt._pinOffset=Math.round(R.progress*Q)),ut&&ut.invalidate(),isNaN(Y)||(Y-=Lt.getProperty(N,C.p),q-=Lt.getProperty(ft,C.p),hc(N,C,Y),hc(rt,C,Y-(ee||0)),hc(ft,C,q),hc(at,C,q-(ee||0))),cn&&!qn&&R.update(),h&&!qn&&!Ft&&(Ft=!0,h(R),Ft=!1)}},R.getVelocity=function(){return($()-Nt)/(In()-_a)*1e3||0},R.endAnimation=function(){ga(R.callbackAnimation),r&&(ut?ut.progress(1):r.paused()?D||ga(r,R.direction<0,1):ga(r,r.reversed()))},R.labelToScroll=function(lt){return r&&r.labels&&(Ot||R.refresh()||Ot)+r.labels[lt]/r.duration()*Ct||0},R.getTrailing=function(lt){var $t=le.indexOf(R),Bt=R.direction>0?le.slice(0,$t).reverse():le.slice($t+1);return(ci(lt)?Bt.filter(function(ee){return ee.vars.preventOverlaps===lt}):Bt).filter(function(ee){return R.direction>0?ee.end<=Ot:ee.start>=j})},R.update=function(lt,$t,Bt){if(!(w&&!Bt&&!lt)){var ee=qn===!0?_t:R.scroll(),$e=lt?0:(ee-Ot)/Ct,ue=$e<0?0:$e>1?1:$e||0,Le=R.progress,cn,De,Te,ge,Fn,Pe,wn,Bn;if($t&&(Nt=vt,vt=w?$():ee,v&&(xt=St,St=r&&!D?r.totalProgress():ue)),m&&f&&!Pn&&!ic&&Ti&&(!ue&&Ot<ee+(ee-Nt)/(In()-_a)*m?ue=1e-4:ue===1&&j>ee+(ee-Nt)/(In()-_a)*m&&(ue=.9999)),ue!==Le&&R.enabled){if(cn=R.isActive=!!ue&&ue<1,De=!!Le&&Le<1,Pe=cn!==De,Fn=Pe||!!ue!=!!Le,R.direction=ue>Le?1:-1,R.progress=ue,Fn&&!Pn&&(Te=ue&&!Le?0:ue===1?1:Le===1?2:3,D&&(ge=!Pe&&V[Te+1]!=="none"&&V[Te+1]||V[Te],Bn=r&&(ge==="complete"||ge==="reset"||ge in r))),T&&(Pe||Bn)&&(Bn||d||!r)&&(Ln(T)?T(R):R.getTrailing(T).forEach(function(Vi){return Vi.endAnimation()})),D||(ut&&!Pn&&!ic?(ut._dp._time-ut._start!==ut._time&&ut.render(ut._dp._time-ut._start),ut.resetTo?ut.resetTo("totalProgress",ue,r._tTime/r._tDur):(ut.vars.totalProgress=ue,ut.invalidate().restart())):r&&r.totalProgress(ue,!!(Pn&&(It||lt)))),f){if(lt&&p&&(Jt.style[p+C.os2]=pt),!z)W(va(X+Q*ue));else if(Fn){if(wn=!lt&&ue>Le&&j+1>ee&&ee+1>=Zi(I,C),b)if(!lt&&(cn||wn)){var Ke=gr(f,!0),He=ee-Ot;eg(f,ye,Ke.top+(C===je?He:0)+on,Ke.left+(C===je?0:He)+on)}else eg(f,Jt);mo(cn||wn?U:he),it&&ue<1&&cn||W(X+(ue===1&&!wn?Q:0))}}v&&!et.tween&&!Pn&&!ic&&F.restart(!0),a&&(Pe||M&&ue&&(ue<1||!Tf))&&Ra(a.targets).forEach(function(Vi){return Vi.classList[cn||M?"add":"remove"](a.className)}),o&&!D&&!lt&&o(R),Fn&&!Pn?(D&&(Bn&&(ge==="complete"?r.pause().totalProgress(1):ge==="reset"?r.restart(!0).pause():ge==="restart"?r.restart(!0):r[ge]()),o&&o(R)),(Pe||!Tf)&&(c&&Pe&&lo(R,c),H[Te]&&lo(R,H[Te]),M&&(ue===1?R.kill(!1,1):H[Te]=0),Pe||(Te=ue===1?1:3,H[Te]&&lo(R,H[Te]))),x&&!cn&&Math.abs(R.getVelocity())>(ya(x)?x:2500)&&(ga(R.callbackAnimation),ut?ut.progress(1):ga(r,ge==="reverse"?1:!ue,1))):D&&o&&!Pn&&o(R)}if(yt){var rn=w?ee/w.duration()*(w._caScrollDist||0):ee;tt(rn+(N._isFlipped?1:0)),yt(rn)}Mt&&Mt(-ee/w.duration()*(w._caScrollDist||0))}},R.enable=function(lt,$t){R.enabled||(R.enabled=!0,fn(I,"resize",Sa),L||fn(I,"scroll",ho),Z&&fn(i,"refreshInit",Z),lt!==!1&&(R.progress=Zt=0,vt=Nt=Yt=$()),$t!==!1&&R.refresh())},R.getTween=function(lt){return lt&&et?et.tween:ut},R.setPositions=function(lt,$t,Bt,ee){if(w){var $e=w.scrollTrigger,ue=w.duration(),Le=$e.end-$e.start;lt=$e.start+Le*lt/ue,$t=$e.start+Le*$t/ue}R.refresh(!1,!1,{start:Ym(lt,Bt&&!!R._startClamp),end:Ym($t,Bt&&!!R._endClamp)},ee),R.update()},R.adjustPinSpacing=function(lt){if(ct&&lt){var $t=ct.indexOf(C.d)+1;ct[$t]=parseFloat(ct[$t])+lt+on,ct[1]=parseFloat(ct[1])+lt+on,mo(ct)}},R.disable=function(lt,$t){if(lt!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,$t||ut&&ut.pause(),_t=0,dt&&(dt.uncache=1),Z&&un(i,"refreshInit",Z),F&&(F.pause(),et.tween&&et.tween.kill()&&(et.tween=0)),!L)){for(var Bt=le.length;Bt--;)if(le[Bt].scroller===I&&le[Bt]!==R)return;un(I,"resize",Sa),L||un(I,"scroll",ho)}},R.kill=function(lt,$t){R.disable(lt,$t),ut&&!$t&&ut.kill(),l&&delete Nf[l];var Bt=le.indexOf(R);Bt>=0&&le.splice(Bt,1),Bt===Yn&&pc>0&&Yn--,Bt=0,le.forEach(function(ee){return ee.scroller===R.scroller&&(Bt=1)}),Bt||qn||(R.scroll.rec=0),r&&(r.scrollTrigger=null,lt&&r.revert({kill:!1}),$t||r.kill()),rt&&[rt,at,N,ft].forEach(function(ee){return ee.parentNode&&ee.parentNode.removeChild(ee)}),Ca===R&&(Ca=0),f&&(dt&&(dt.uncache=1),Bt=0,le.forEach(function(ee){return ee.pin===f&&Bt++}),Bt||(dt.spacer=0)),n.onKill&&n.onKill(R)},le.push(R),R.enable(!1,!1),Tt&&Tt(R),r&&r.add&&!Ct){var qt=R.update;R.update=function(){R.update=qt,ae.cache++,Ot||j||R.refresh()},Lt.delayedCall(.01,R.update),Ct=.01,Ot=j=0}else R.refresh();f&&Fv()},i.register=function(n){return uo||(Lt=n||ug(),hg()&&window.document&&i.enable(),uo=xa),uo},i.defaults=function(n){if(n)for(var r in n)ac[r]=n[r];return ac},i.disable=function(n,r){xa=0,le.forEach(function(o){return o[r?"kill":"disable"](n)}),un(fe,"wheel",ho),un(be,"scroll",ho),clearInterval(nc),un(be,"touchcancel",qi),un(ye,"touchstart",qi),sc(un,be,"pointerdown,touchstart,mousedown",qm),sc(un,be,"pointerup,touchend,mouseup",Zm),_c.kill(),rc(un);for(var s=0;s<ae.length;s+=3)oc(un,ae[s],ae[s+1]),oc(un,ae[s],ae[s+2])},i.enable=function(){if(fe=window,be=document,hi=be.documentElement,ye=be.body,Lt){if(Ra=Lt.utils.toArray,Ma=Lt.utils.clamp,Lf=Lt.core.context||qi,wf=Lt.core.suppressOverwrites||qi,Bf=fe.history.scrollRestoration||"auto",Uf=fe.pageYOffset||0,Lt.core.globals("ScrollTrigger",i),ye){xa=1,po=document.createElement("div"),po.style.height="100vh",po.style.position="absolute",Sg(),Pv(),Ye.register(Lt),i.isTouch=Ye.isTouch,Vr=Ye.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),If=Ye.isTouch===1,fn(fe,"wheel",ho),Ff=[fe,be,hi,ye],Lt.matchMedia?(i.matchMedia=function(h){var d=Lt.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Lt.addEventListener("matchMediaInit",function(){vg(),Wf()}),Lt.addEventListener("matchMediaRevert",function(){return xg()}),Lt.addEventListener("matchMedia",function(){ys(0,1),Es("matchMedia")}),Lt.matchMedia().add("(orientation: portrait)",function(){return Af(),Af})):console.warn("Requires GSAP 3.11.0 or later"),Af(),fn(be,"scroll",ho);var n=ye.hasAttribute("style"),r=ye.style,s=r.borderTopStyle,o=Lt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=gr(ye),je.m=Math.round(a.top+je.sc())||0,Rn.m=Math.round(a.left+Rn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(ye.setAttribute("style",""),ye.removeAttribute("style")),nc=setInterval(Km,250),Lt.delayedCall(.5,function(){return ic=0}),fn(be,"touchcancel",qi),fn(ye,"touchstart",qi),sc(fn,be,"pointerdown,touchstart,mousedown",qm),sc(fn,be,"pointerup,touchend,mouseup",Zm),Pf=Lt.utils.checkPrefix("transform"),mc.push(Pf),uo=In(),_c=Lt.delayedCall(.2,ys).pause(),fo=[be,"visibilitychange",function(){var h=fe.innerWidth,d=fe.innerHeight;be.hidden?(Hm=h,Wm=d):(Hm!==h||Wm!==d)&&Sa()},be,"DOMContentLoaded",ys,fe,"load",ys,fe,"resize",Sa],rc(fn),le.forEach(function(h){return h.enable(0,1)}),l=0;l<ae.length;l+=3)oc(un,ae[l],ae[l+1]),oc(un,ae[l],ae[l+2])}else if(be){var c=function h(){i.enable(),be.removeEventListener("DOMContentLoaded",h)};be.addEventListener("DOMContentLoaded",c)}}},i.config=function(n){"limitCallbacks"in n&&(Tf=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(nc)||(nc=r)&&setInterval(Km,r),"ignoreMobileResize"in n&&(If=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(rc(un)||rc(fn,n.autoRefreshEvents||"none"),ag=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Wn(n),o=ae.indexOf(s),a=ws(s);~o&&ae.splice(o,a?6:2),r&&(a?Li.unshift(fe,r,ye,r,hi,r):Li.unshift(s,r))},i.clearMatchMedia=function(n){le.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(ci(n)?Wn(n):n).getBoundingClientRect(),a=o[s?Ss:Ms]*r||0;return s?o.right-a>0&&o.left+a<fe.innerWidth:o.bottom-a>0&&o.top+a<fe.innerHeight},i.positionInViewport=function(n,r,s){ci(n)&&(n=Wn(n));var o=n.getBoundingClientRect(),a=o[s?Ss:Ms],l=r==null?a/2:r in vc?vc[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/fe.innerWidth:(o.top+l)/fe.innerHeight},i.killAll=function(n){if(le.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Ts.killAll||[];Ts={},r.forEach(function(s){return s()})}},i})();ce.version="3.15.0";ce.saveStyles=function(i){return i?Ra(i).forEach(function(t){if(t&&t.style){var e=li.indexOf(t);e>=0&&li.splice(e,5),li.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Lt.core.getCache(t),Lf())}}):li};ce.revert=function(i,t){return Wf(!i,t)};ce.create=function(i,t){return new ce(i,t)};ce.refresh=function(i){return i?Sa(!0):(uo||ce.register())&&ys(!0)};ce.update=function(i){return++ae.cache&&_r(i===!0?2:0)};ce.clearScrollMemory=yg;ce.maxScroll=function(i,t){return Zi(i,t?Rn:je)};ce.getScrollFunc=function(i,t){return pr(Wn(i),t?Rn:je)};ce.getById=function(i){return Nf[i]};ce.getAll=function(){return le.filter(function(i){return i.vars.id!=="ScrollSmoother"})};ce.isScrolling=function(){return!!Ti};ce.snapDirectional=Hf;ce.addEventListener=function(i,t){var e=Ts[i]||(Ts[i]=[]);~e.indexOf(t)||e.push(t)};ce.removeEventListener=function(i,t){var e=Ts[i],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ce.batch=function(i,t){var e=[],n={},r=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Lt.delayedCall(r,function(){h(d,u),d=[],u=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),u.push(p),s<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Ln(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Ln(s)&&(s=s(),fn(ce,"refresh",function(){return s=t.batchMax()})),Ra(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(ce.create(c))}),e};var ig=function(t,e,n,r){return e>r?t(r):e<0&&t(0),n>r?(r-e)/(n-e):n<0?e/(e-n):1},Rf=function i(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ye.isTouch?" pinch-zoom":""):"none",t===hi&&i(ye,e)},uc={auto:1,scroll:1},Gv=function(t){var e=t.event,n=t.target,r=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Lt.core.getCache(s),a=In(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ye&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(uc[(l=wi(s)).overflowY]||uc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ws(s)&&(uc[(l=wi(s)).overflowY]||uc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},bg=function(t,e,n,r){return Ye.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:r=r&&Gv,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&fn(be,Ye.eventTypes[0],sg,!1,!0)},onDisable:function(){return un(be,Ye.eventTypes[0],sg,!0)}})},Hv=/(input|label|select|textarea)/i,rg,sg=function(t){var e=Hv.test(t.target.tagName);(e||rg)&&(t._gsapAllow=!0,rg=e)},Wv=function(t){vs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,r=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Wn(t.target)||hi,h=Lt.core.globals().ScrollSmoother,d=h&&h.get(),u=Vr&&(t.content&&Wn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=pr(c,je),p=pr(c,Rn),_=1,m=(Ye.isTouch&&fe.visualViewport?fe.visualViewport.scale*fe.visualViewport.width:fe.outerWidth)/fe.innerWidth,g=0,S=Ln(r)?function(){return r(a)}:function(){return r||2.8},M,v,b=bg(c,t.type,!0,s),A=function(){return v=!1},w=qi,x=qi,T=function(){l=Zi(c,je),x=Ma(Vr?1:0,l),n&&(w=Ma(0,Zi(c,Rn))),M=bs},C=function(){u._gsap.y=va(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(v){requestAnimationFrame(A);var K=va(a.deltaY/2),G=x(f.v-K);if(u&&G!==f.v+f.offset){f.offset=G-f.v;var R=va((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",f.cacheID=ae.cache,_r()}return!0}f.offset&&C(),v=!0},I,k,L,z,H=function(){T(),I.isActive()&&I.vars.scrollY>l&&(f()>l?I.progress(1)&&f(l):I.resetTo("scrollY",l))};return u&&Lt.set(u,{y:"+=0"}),t.ignoreCheck=function(V){return Vr&&V.type==="touchmove"&&D(V)||_>1.05&&V.type!=="touchstart"||a.isGesturing||V.touches&&V.touches.length>1},t.onPress=function(){v=!1;var V=_;_=va((fe.visualViewport&&fe.visualViewport.scale||1)/m),I.pause(),V!==_&&Rf(c,_>1.01?!0:n?!1:"x"),k=p(),L=f(),T(),M=bs},t.onRelease=t.onGestureStart=function(V,K){if(f.offset&&C(),!K)z.restart(!0);else{ae.cache++;var G=S(),R,Z;n&&(R=p(),Z=R+G*.05*-V.velocityX/.227,G*=ig(p,R,Z,Zi(c,Rn)),I.vars.scrollX=w(Z)),R=f(),Z=R+G*.05*-V.velocityY/.227,G*=ig(f,R,Z,Zi(c,je)),I.vars.scrollY=x(Z),I.invalidate().duration(G).play(.01),(Vr&&I.vars.scrollY>=l||R>=l-1)&&Lt.to({},{onUpdate:H,duration:G})}o&&o(V)},t.onWheel=function(){I._ts&&I.pause(),In()-g>1e3&&(M=0,g=In())},t.onChange=function(V,K,G,R,Z){if(bs!==M&&T(),K&&n&&p(w(R[2]===K?k+(V.startX-V.x):p()+K-R[1])),G){f.offset&&C();var mt=Z[2]===G,gt=mt?L+V.startY-V.y:f()+G-Z[1],Yt=x(gt);mt&&gt!==Yt&&(L+=Yt-gt),f(Yt)}(G||K)&&_r()},t.onEnable=function(){Rf(c,n?!1:"x"),ce.addEventListener("refresh",H),fn(fe,"resize",H),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),b.enable()},t.onDisable=function(){Rf(c,!0),un(fe,"resize",H),ce.removeEventListener("refresh",H),b.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ye(t),a.iOS=Vr,Vr&&!f()&&f(1),Vr&&Lt.ticker.add(qi),z=a._dc,I=Lt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Mg(f,f(),function(){return I.pause()})},onUpdate:_r,onComplete:z.vars.onComplete}),a};ce.sort=function(i){if(Ln(i))return le.sort(i);var t=fe.pageYOffset||0;return ce.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+fe.innerHeight}),le.sort(i||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ce.observe=function(i){return new Ye(i)};ce.normalizeScroll=function(i){if(typeof i>"u")return Xn;if(i===!0&&Xn)return Xn.enable();if(i===!1){Xn&&Xn.kill(),Xn=i;return}var t=i instanceof Ye?i:Wv(i);return Xn&&Xn.target===t.target&&Xn.kill(),ws(t.target)&&(Xn=t),t};ce.core={_getVelocityProp:ec,_inputObserver:bg,_scrollers:ae,_proxies:Li,bridge:{ss:function(){Ti||Es("scrollStart"),Ti=In()},ref:function(){return Pn}}};ug()&&Lt.registerPlugin(ce);var wg="1.3.26";function Ag(i,t,e){return Math.max(i,Math.min(t,e))}function Xv(i,t,e){return(1-e)*i+e*t}function Yv(i,t,e,n){return Xv(i,t,1-Math.exp(-e*n))}function qv(i,t){return(i%t+t)%t}var Zv=class{constructor(){Ht(this,"isRunning",!1);Ht(this,"value",0);Ht(this,"from",0);Ht(this,"to",0);Ht(this,"currentTime",0);Ht(this,"lerp");Ht(this,"duration");Ht(this,"easing");Ht(this,"onUpdate")}advance(i){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=i;let e=Ag(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Yv(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(i,t,{lerp:e,duration:n,easing:r,onStart:s,onUpdate:o}){this.from=this.value=i,this.to=t,this.lerp=e,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function Jv(i,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,i.apply(this,n)},t)}}var $v=class{constructor(i,t,{autoResize:e=!0,debounce:n=250}={}){Ht(this,"width",0);Ht(this,"height",0);Ht(this,"scrollHeight",0);Ht(this,"scrollWidth",0);Ht(this,"debouncedResize");Ht(this,"wrapperResizeObserver");Ht(this,"contentResizeObserver");Ht(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ht(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ht(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=t,e&&(this.debouncedResize=Jv(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Cg=class{constructor(){Ht(this,"events",{})}emit(i,...t){let e=this.events[i]||[];for(let n=0,r=e.length;n<r;n++)e[n]?.(...t)}on(i,t){return this.events[i]?this.events[i].push(t):this.events[i]=[t],()=>{this.events[i]=this.events[i]?.filter(e=>t!==e)}}off(i,t){this.events[i]=this.events[i]?.filter(e=>t!==e)}destroy(){this.events={}}},Kv=100/6,Gr={passive:!1};function Tg(i,t){return i===1?Kv:i===2?t:1}var Qv=class{constructor(i,t={wheelMultiplier:1,touchMultiplier:1}){Ht(this,"touchStart",{x:0,y:0});Ht(this,"lastDelta",{x:0,y:0});Ht(this,"window",{width:0,height:0});Ht(this,"emitter",new Cg);Ht(this,"onTouchStart",i=>{let{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Ht(this,"onTouchMove",i=>{let{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i,n=-(t-this.touchStart.x)*this.options.touchMultiplier,r=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});Ht(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Ht(this,"onWheel",i=>{let{deltaX:t,deltaY:e,deltaMode:n}=i,r=Tg(n,this.window.width),s=Tg(n,this.window.height);t*=r,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:i})});Ht(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Gr),this.element.addEventListener("touchstart",this.onTouchStart,Gr),this.element.addEventListener("touchmove",this.onTouchMove,Gr),this.element.addEventListener("touchend",this.onTouchEnd,Gr)}on(i,t){return this.emitter.on(i,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Gr),this.element.removeEventListener("touchstart",this.onTouchStart,Gr),this.element.removeEventListener("touchmove",this.onTouchMove,Gr),this.element.removeEventListener("touchend",this.onTouchEnd,Gr)}},Eg=i=>Math.min(1,1.001-2**(-10*i)),Rg=class{constructor({wrapper:i=window,content:t=document.documentElement,eventsTarget:e=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:m,virtualScroll:g,overscroll:S=!0,autoRaf:M=!1,anchors:v=!1,autoToggle:b=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:x=w,stopInertiaOnNavigate:T=!1,respectReducedMotion:C=!0}={}){Ht(this,"_isScrolling",!1);Ht(this,"_isStopped",!1);Ht(this,"_isLocked",!1);Ht(this,"_preventNextNativeScrollEvent",!1);Ht(this,"_resetVelocityTimeout",null);Ht(this,"_rafId",null);Ht(this,"_isDraggingSelection",!1);Ht(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ht(this,"isTouching");Ht(this,"isIos");Ht(this,"time",0);Ht(this,"userData",{});Ht(this,"lastVelocity",0);Ht(this,"velocity",0);Ht(this,"direction",0);Ht(this,"options");Ht(this,"targetScroll");Ht(this,"animatedScroll");Ht(this,"animate",new Zv);Ht(this,"emitter",new Cg);Ht(this,"dimensions");Ht(this,"virtualScroll");Ht(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});Ht(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ht(this,"onTransitionEnd",i=>{i.propertyName?.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});Ht(this,"onClick",i=>{let t=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(r=>e.host===r.host&&e.pathname===r.pathname&&r.hash);if(n){let r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Ht(this,"onPointerDown",i=>{i.button===1&&this.reset()});Ht(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;let{deltaX:t,deltaY:e,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let r=n.type.includes("touch"),s=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||r&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=r&&this.options.syncTouch,f=r&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ht(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ht(this,"raf",i=>{let t=i-(this.time||i);this.time=i,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=wg,window.lenis||(window.lenis={}),window.lenis.version=wg,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=Eg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:t,eventsTarget:e,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:p,autoResize:_,prevent:m,virtualScroll:g,overscroll:S,autoRaf:M,anchors:v,autoToggle:b,allowNestedScroll:A,naiveDimensions:x,stopInertiaOnNavigate:T,respectReducedMotion:C},this.dimensions=new $v(i,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Qv(e,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,t){return this.emitter.on(i,t)}off(i,t){return this.emitter.off(i,t)}get overflow(){let i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=i.targetTouches[0]??i.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let r=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-r.left,e.clientY-r.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(r?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=i,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let p=null;if(typeof u=="string"?(p=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),p||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&u?.nodeType&&(p=u),p){if(this.options.wrapper!==window){let v=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?v.left:v.top}let _=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),S=getComputedStyle(this.rootElement),M=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(M)?0:M)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;let p=u-this.animatedScroll;p>this.limit/2?u-=this.limit:p<-this.limit/2&&(u+=this.limit)}}else u=Ag(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=Eg:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),r&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:t,deltaY:e}){let n=Date.now();i._lenis||(i._lenis={});let r=i._lenis,s,o,a,l,c,h,d,u,f,p;if(n-(r.time??0)>2e3){r.time=Date.now();let A=window.getComputedStyle(i);if(r.computedStyle=A,s=["auto","overlay","scroll"].includes(A.overflowX),o=["auto","overlay","scroll"].includes(A.overflowY),c=["auto"].includes(A.overscrollBehaviorX),h=["auto"].includes(A.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,p=i.clientHeight,a=d>f,l=u>p,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=u,r.clientWidth=f,r.clientHeight=p,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=h}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,d=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,p=r.clientHeight,c=r.hasOverscrollBehaviorX,h=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,g,S,M,v,b;if(_==="horizontal")m=Math.round(i.scrollLeft),g=d-f,S=t,M=s,v=a,b=c;else if(_==="vertical")m=Math.round(i.scrollTop),g=u-p,S=e,M=o,v=l,b=h;else return!1;return!b&&(m>=g||m<=0)?!0:(S>0?m<g:m>0)&&M&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?qv(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(let i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};var Xf=["intro","build","ship","connect","operate","final"],jv=[{to:1,start:.05,end:.17},{to:2,start:.29,end:.39},{to:3,start:.5,end:.6},{to:4,start:.71,end:.8},{to:5,start:.895,end:.965}],Yf=[[0,0,.03,.06],[.17,.2,.27,.3],[.38,.41,.48,.51],[.59,.62,.69,.72],[.79,.82,.875,.9],[.955,.985,1,1]],As={lid:[.07,.2],power:[.15,.22],typing:[.18,.3],links:[.57,.7],trails:[.9,.99],pipeline:[.78,.9],cue:[0,.025]},qf=i=>Math.min(1,Math.max(0,i)),Ia=i=>{let t=qf(i);return t*t*(3-2*t)},Sc=i=>{let t=qf(i);return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2},Cs=(i,[t,e])=>e<=t?i>=e?1:0:qf((i-t)/(e-t));function Zf(i){let t=0;for(let e of jv)if(i>=e.end)t=e.to;else{if(i>e.start)return e.to-1+Sc((i-e.start)/(e.end-e.start));break}return t}function Pg(i,t){let[e,n,r,s]=Yf[t],o=n<=e?i>=e?1:0:Ia((i-e)/(n-e)),a=s<=r?i>=s&&s<1?0:1:1-Ia((i-r)/(s-r));return Math.min(o,a)}function Ig(i){return{lid:Sc(Cs(i,As.lid)),power:Ia(Cs(i,As.power)),typing:Cs(i,As.typing),links:Sc(Cs(i,As.links)),trails:Sc(Cs(i,As.trails)),pipeline:Cs(i,As.pipeline),cue:1-Cs(i,As.cue)}}var Lg=i=>Math.round(Zf(i));var l0=0,Ld=1,c0=2;var vl=1,h0=2,Go=3,es=0,bn=1,ir=2,rr=0,ns=1,is=2,Dd=3,Nd=4,u0=5;var ks=100,f0=101,d0=102,p0=103,m0=104,g0=200,_0=201,x0=202,v0=203,Ud=204,Od=205,y0=206,S0=207,M0=208,b0=209,w0=210,T0=211,E0=212,A0=213,C0=214,Yc=0,qc=1,Zc=2,Lo=3,Jc=4,$c=5,Kc=6,Qc=7,Rh=0,R0=1,P0=2,Bi=0,Fd=1,Bd=2,zd=3,yl=4,kd=5,Vd=6,Gd=7;var Hd=300,rs=301,Vs=302,Ph=303,Ih=304,Sl=306,jc=1e3,$i=1001,th=1002,pn=1003,I0=1004;var Ml=1005;var Sn=1006,Lh=1007;var ss=1008;var ni=1009,Wd=1010,Xd=1011,Ho=1012,Dh=1013,zi=1014,Ci=1015,ki=1016,Nh=1017,Uh=1018,Wo=1020,Yd=35902,qd=35899,Zd=1021,Jd=1022,Ri=1023,Qi=1026,os=1027,Oh=1028,Fh=1029,as=1030,Bh=1031;var zh=1033,bl=33776,wl=33777,Tl=33778,El=33779,kh=35840,Vh=35841,Gh=35842,Hh=35843,Wh=36196,Xh=37492,Yh=37496,qh=37488,Zh=37489,Al=37490,Jh=37491,$h=37808,Kh=37809,Qh=37810,jh=37811,tu=37812,eu=37813,nu=37814,iu=37815,ru=37816,su=37817,ou=37818,au=37819,lu=37820,cu=37821,hu=36492,uu=36494,fu=36495,du=36283,pu=36284,Cl=36285,mu=36286;var Ga=2300,eh=2301,Wc=2302,Sd=2303,Md=2400,bd=2401,wd=2402;var L0=3200;var Rl=0,D0=1,Er="",vn="srgb",Ha="srgb-linear",Wa="linear",Se="srgb";var Xc=7680;var N0=519,U0=512,O0=513,F0=514,gu=515,B0=516,z0=517,_u=518,k0=519,V0=35044;var $d="300 es",Fi=2e3,Do=2001;function ty(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ey(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function G0(){let i=Xa("canvas");return i.style.display="block",i}var Dg={},No=null;function Kd(...i){let t="THREE."+i.shift();No?No("log",t,...i):console.log(t,...i)}function H0(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=H0(i);let t="THREE."+i.shift();if(No)No("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function te(...i){i=H0(i);let t="THREE."+i.shift();if(No)No("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ds(...i){let t=i.join(" ");t in Dg||(Dg[t]=!0,jt(...i))}function W0(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var X0={[Yc]:qc,[Zc]:Kc,[Jc]:Qc,[Lo]:$c,[qc]:Yc,[Kc]:Zc,[Qc]:Jc,[$c]:Lo},ji=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Jf=Math.PI/180,nh=180/Math.PI;function Xo(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[e&63|128]+Dn[e>>8&255]+"-"+Dn[e>>16&255]+Dn[e>>24&255]+Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function ny(i,t){return(i%t+t)%t}function $f(i,t,e){return(1-e)*i+e*t}function La(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ti(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ip=class ip{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ip.prototype.isVector2=!0;var wt=ip,tr=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3],u=s[o+0],f=s[o+1],p=s[o+2],_=s[o+3];if(d!==_||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*_;m<0&&(u=-u,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let S=Math.acos(m),M=Math.sin(S);g=Math.sin(g*S)/M,a=Math.sin(a*S)/M,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+_*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+_*a;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[o],u=s[o+1],f=s[o+2],p=s[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),d=a(s/2),u=l(n/2),f=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},rp=class rp{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ng.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ng.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Kf.copy(this).projectOnVector(t),this.sub(Kf)}reflect(t){return this.sub(Kf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rp.prototype.isVector3=!0;var O=rp,Kf=new O,Ng=new tr,sp=class sp{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],_=r[0],m=r[3],g=r[6],S=r[1],M=r[4],v=r[7],b=r[2],A=r[5],w=r[8];return s[0]=o*_+a*S+l*b,s[3]=o*m+a*M+l*A,s[6]=o*g+a*v+l*w,s[1]=c*_+h*S+d*b,s[4]=c*m+h*M+d*A,s[7]=c*g+h*v+d*w,s[2]=u*_+f*S+p*b,s[5]=u*m+f*M+p*A,s[8]=u*g+f*v+p*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,p=e*d+n*u+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=d*_,t[1]=(r*c-h*n)*_,t[2]=(a*n-r*o)*_,t[3]=u*_,t[4]=(h*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qf.makeScale(t,e)),this}rotate(t){return Ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qf.makeRotation(-t)),this}translate(t,e){return Ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};sp.prototype.isMatrix3=!0;var ie=sp,Qf=new ie,Ug=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Og=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iy(){let i={enabled:!0,workingColorSpace:Ha,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Se&&(r.r=br(r.r),r.g=br(r.g),r.b=br(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(r.r=Io(r.r),r.g=Io(r.g),r.b=Io(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Er?Wa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ha]:{primaries:t,whitePoint:n,transfer:Wa,toXYZ:Ug,fromXYZ:Og,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:Ug,fromXYZ:Og,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),i}var me=iy();function br(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Io(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _o,ih=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{_o===void 0&&(_o=Xa("canvas")),_o.width=t.width,_o.height=t.height;let r=_o.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=_o}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Xa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=br(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(br(e[n]/255)*255):e[n]=br(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ry=0,Uo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Xo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(jf(r[o].image)):s.push(jf(r[o]))}else s=jf(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function jf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ih.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var sy=0,td=new O,Zn=class i extends ji{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$i,r=$i,s=Sn,o=ss,a=Ri,l=ni,c=i.DEFAULT_ANISOTROPY,h=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Xo(),this.name="",this.source=new Uo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(td).x}get height(){return this.source.getSize(td).y}get depth(){return this.source.getSize(td).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jc:t.x=t.x-Math.floor(t.x);break;case $i:t.x=t.x<0?0:1;break;case th:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jc:t.y=t.y-Math.floor(t.y);break;case $i:t.y=t.y<0?0:1;break;case th:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Hd;Zn.DEFAULT_ANISOTROPY=1;var op=class op{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(f+1)/2,b=(g+1)/2,A=(h+u)/4,w=(d+_)/4,x=(p+m)/4;return M>v&&M>b?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=A/n,s=w/n):v>b?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=A/r,s=x/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=w/s,r=x/s),this.set(n,r,s,e),this}let S=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-p)/S,this.y=(d-_)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};op.prototype.isVector4=!0;var Fe=op,rh=class extends ji{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new Zn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Uo(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends rh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ya=class extends Zn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var sh=class extends Zn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ch=class Ch{constructor(t,e,n,r,s,o,a,l,c,h,d,u,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,d,u,f,p,_,m)}set(t,e,n,r,s,o,a,l,c,h,d,u,f,p,_,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ch().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/xo.setFromMatrixColumn(t,0).length(),s=1/xo.setFromMatrixColumn(t,1).length(),o=1/xo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(oy,t,ay)}lookAt(t,e,n){let r=this.elements;return ui.subVectors(t,e),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),Hr.crossVectors(n,ui),Hr.lengthSq()===0&&(Math.abs(n.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),Hr.crossVectors(n,ui)),Hr.normalize(),Mc.crossVectors(ui,Hr),r[0]=Hr.x,r[4]=Mc.x,r[8]=ui.x,r[1]=Hr.y,r[5]=Mc.y,r[9]=ui.y,r[2]=Hr.z,r[6]=Mc.z,r[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],S=n[3],M=n[7],v=n[11],b=n[15],A=r[0],w=r[4],x=r[8],T=r[12],C=r[1],D=r[5],I=r[9],k=r[13],L=r[2],z=r[6],H=r[10],V=r[14],K=r[3],G=r[7],R=r[11],Z=r[15];return s[0]=o*A+a*C+l*L+c*K,s[4]=o*w+a*D+l*z+c*G,s[8]=o*x+a*I+l*H+c*R,s[12]=o*T+a*k+l*V+c*Z,s[1]=h*A+d*C+u*L+f*K,s[5]=h*w+d*D+u*z+f*G,s[9]=h*x+d*I+u*H+f*R,s[13]=h*T+d*k+u*V+f*Z,s[2]=p*A+_*C+m*L+g*K,s[6]=p*w+_*D+m*z+g*G,s[10]=p*x+_*I+m*H+g*R,s[14]=p*T+_*k+m*V+g*Z,s[3]=S*A+M*C+v*L+b*K,s[7]=S*w+M*D+v*z+b*G,s[11]=S*x+M*I+v*H+b*R,s[15]=S*T+M*k+v*V+b*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],_=t[7],m=t[11],g=t[15],S=l*f-c*u,M=a*f-c*d,v=a*u-l*d,b=o*f-c*h,A=o*u-l*h,w=o*d-a*h;return e*(_*S-m*M+g*v)-n*(p*S-m*b+g*A)+r*(p*M-_*b+g*w)-s*(p*v-_*A+m*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],_=t[13],m=t[14],g=t[15],S=e*a-n*o,M=e*l-r*o,v=e*c-s*o,b=n*l-r*a,A=n*c-s*a,w=r*c-s*l,x=h*_-d*p,T=h*m-u*p,C=h*g-f*p,D=d*m-u*_,I=d*g-f*_,k=u*g-f*m,L=S*k-M*I+v*D+b*C-A*T+w*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/L;return t[0]=(a*k-l*I+c*D)*z,t[1]=(r*I-n*k-s*D)*z,t[2]=(_*w-m*A+g*b)*z,t[3]=(u*A-d*w-f*b)*z,t[4]=(l*C-o*k-c*T)*z,t[5]=(e*k-r*C+s*T)*z,t[6]=(m*v-p*w-g*M)*z,t[7]=(h*w-u*v+f*M)*z,t[8]=(o*I-a*C+c*x)*z,t[9]=(n*C-e*I-s*x)*z,t[10]=(p*A-_*v+g*S)*z,t[11]=(d*v-h*A-f*S)*z,t[12]=(a*T-o*D-l*x)*z,t[13]=(e*D-n*T+r*x)*z,t[14]=(_*M-p*b-m*S)*z,t[15]=(h*b-d*M+u*S)*z,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,p=s*d,_=o*h,m=o*d,g=a*d,S=l*c,M=l*h,v=l*d,b=n.x,A=n.y,w=n.z;return r[0]=(1-(_+g))*b,r[1]=(f+v)*b,r[2]=(p-M)*b,r[3]=0,r[4]=(f-v)*A,r[5]=(1-(u+g))*A,r[6]=(m+S)*A,r[7]=0,r[8]=(p+M)*w,r[9]=(m-S)*w,r[10]=(1-(u+_))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=xo.set(r[0],r[1],r[2]).length(),a=xo.set(r[4],r[5],r[6]).length(),l=xo.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Di.copy(this);let c=1/o,h=1/a,d=1/l;return Di.elements[0]*=c,Di.elements[1]*=c,Di.elements[2]*=c,Di.elements[4]*=h,Di.elements[5]*=h,Di.elements[6]*=h,Di.elements[8]*=d,Di.elements[9]*=d,Di.elements[10]*=d,e.setFromRotationMatrix(Di),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=Fi,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(n-r),u=(e+t)/(e-t),f=(n+r)/(n-r),p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===Fi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Do)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Fi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-r),u=-(e+t)/(e-t),f=-(n+r)/(n-r),p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===Fi)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===Do)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ch.prototype.isMatrix4=!0;var Re=Ch,xo=new O,Di=new Re,oy=new O(0,0,0),ay=new O(1,1,1),Hr=new O,Mc=new O,ui=new O,Fg=new Re,Bg=new tr,er=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-de(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bg.setFromEuler(this),this.setFromQuaternion(Bg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};er.DEFAULT_ORDER="XYZ";var qa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ly=0,zg=new O,vo=new tr,xr=new Re,bc=new O,Da=new O,cy=new O,hy=new tr,kg=new O(1,0,0),Vg=new O(0,1,0),Gg=new O(0,0,1),Hg={type:"added"},uy={type:"removed"},yo={type:"childadded",child:null},ed={type:"childremoved",child:null},Mn=class i extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new er,n=new tr,r=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Re},normalMatrix:{value:new ie}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vo.setFromAxisAngle(t,e),this.quaternion.multiply(vo),this}rotateOnWorldAxis(t,e){return vo.setFromAxisAngle(t,e),this.quaternion.premultiply(vo),this}rotateX(t){return this.rotateOnAxis(kg,t)}rotateY(t){return this.rotateOnAxis(Vg,t)}rotateZ(t){return this.rotateOnAxis(Gg,t)}translateOnAxis(t,e){return zg.copy(t).applyQuaternion(this.quaternion),this.position.add(zg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kg,t)}translateY(t){return this.translateOnAxis(Vg,t)}translateZ(t){return this.translateOnAxis(Gg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bc.copy(t):bc.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xr.lookAt(Da,bc,this.up):xr.lookAt(bc,Da,this.up),this.quaternion.setFromRotationMatrix(xr),r&&(xr.extractRotation(r.matrixWorld),vo.setFromRotationMatrix(xr),this.quaternion.premultiply(vo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hg),yo.child=t,this.dispatchEvent(yo),yo.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uy),ed.child=t,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xr.multiply(t.parent.matrixWorld)),t.applyMatrix4(xr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hg),yo.child=t,this.dispatchEvent(yo),yo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,t,cy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,hy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mn.DEFAULT_UP=new O(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Un=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},fy={type:"move"},Oo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fy)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Un;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},wc={h:0,s:0,l:0};function nd(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ne=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=me.workingColorSpace){if(t=ny(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=nd(o,s,t+1/3),this.g=nd(o,s,t),this.b=nd(o,s,t-1/3)}return me.colorSpaceToWorking(this,r),this}setStyle(t,e=vn){function n(s){s!==void 0&&parseFloat(s)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vn){let n=Y0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}copyLinearToSRGB(t){return this.r=Io(t.r),this.g=Io(t.g),this.b=Io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vn){return me.workingToColorSpace(Nn.copy(this),t),Math.round(de(Nn.r*255,0,255))*65536+Math.round(de(Nn.g*255,0,255))*256+Math.round(de(Nn.b*255,0,255))}getHexString(t=vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(Nn.copy(this),e);let n=Nn.r,r=Nn.g,s=Nn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(Nn.copy(this),e),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=vn){me.workingToColorSpace(Nn.copy(this),t);let e=Nn.r,n=Nn.g,r=Nn.b;return t!==vn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Wr),this.setHSL(Wr.h+t,Wr.s+e,Wr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wr),t.getHSL(wc);let n=$f(Wr.h,wc.h,e),r=$f(Wr.s,wc.s,e),s=$f(Wr.l,wc.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nn=new ne;ne.NAMES=Y0;var Ns=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new er,this.environmentIntensity=1,this.environmentRotation=new er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ni=new O,vr=new O,id=new O,yr=new O,So=new O,Mo=new O,Wg=new O,rd=new O,sd=new O,od=new O,ad=new Fe,ld=new Fe,cd=new Fe,Zr=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ni.subVectors(t,e),r.cross(Ni);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ni.subVectors(r,e),vr.subVectors(n,e),id.subVectors(t,e);let o=Ni.dot(Ni),a=Ni.dot(vr),l=Ni.dot(id),c=vr.dot(vr),h=vr.dot(id),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return s.set(1-f-p,p,f)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,yr)===null?!1:yr.x>=0&&yr.y>=0&&yr.x+yr.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,yr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yr.x),l.addScaledVector(o,yr.y),l.addScaledVector(a,yr.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return ad.setScalar(0),ld.setScalar(0),cd.setScalar(0),ad.fromBufferAttribute(t,e),ld.fromBufferAttribute(t,n),cd.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ad,s.x),o.addScaledVector(ld,s.y),o.addScaledVector(cd,s.z),o}static isFrontFacing(t,e,n,r){return Ni.subVectors(n,e),vr.subVectors(t,e),Ni.cross(vr).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),Ni.cross(vr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;So.subVectors(r,n),Mo.subVectors(s,n),rd.subVectors(t,n);let l=So.dot(rd),c=Mo.dot(rd);if(l<=0&&c<=0)return e.copy(n);sd.subVectors(t,r);let h=So.dot(sd),d=Mo.dot(sd);if(h>=0&&d<=h)return e.copy(r);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(So,o);od.subVectors(t,s);let f=So.dot(od),p=Mo.dot(od);if(p>=0&&f<=p)return e.copy(s);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Mo,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Wg.subVectors(s,r),a=(d-h)/(d-h+(f-p)),e.copy(r).addScaledVector(Wg,a);let g=1/(m+_+u);return o=_*g,a=u*g,e.copy(n).addScaledVector(So,o).addScaledVector(Mo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},mn=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ui):Ui.fromBufferAttribute(s,o),Ui.applyMatrix4(t.matrixWorld),this.expandByPoint(Ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tc.copy(n.boundingBox)),Tc.applyMatrix4(t.matrixWorld),this.union(Tc)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ui),Ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Na),Ec.subVectors(this.max,Na),bo.subVectors(t.a,Na),wo.subVectors(t.b,Na),To.subVectors(t.c,Na),Xr.subVectors(wo,bo),Yr.subVectors(To,wo),Rs.subVectors(bo,To);let e=[0,-Xr.z,Xr.y,0,-Yr.z,Yr.y,0,-Rs.z,Rs.y,Xr.z,0,-Xr.x,Yr.z,0,-Yr.x,Rs.z,0,-Rs.x,-Xr.y,Xr.x,0,-Yr.y,Yr.x,0,-Rs.y,Rs.x,0];return!hd(e,bo,wo,To,Ec)||(e=[1,0,0,0,1,0,0,0,1],!hd(e,bo,wo,To,Ec))?!1:(Ac.crossVectors(Xr,Yr),e=[Ac.x,Ac.y,Ac.z],hd(e,bo,wo,To,Ec))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Sr=[new O,new O,new O,new O,new O,new O,new O,new O],Ui=new O,Tc=new mn,bo=new O,wo=new O,To=new O,Xr=new O,Yr=new O,Rs=new O,Na=new O,Ec=new O,Ac=new O,Ps=new O;function hd(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ps.fromArray(i,s);let a=r.x*Math.abs(Ps.x)+r.y*Math.abs(Ps.y)+r.z*Math.abs(Ps.z),l=t.dot(Ps),c=e.dot(Ps),h=n.dot(Ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var en=new O,Cc=new wt,dy=0,di=class extends ji{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=V0,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Cc.fromBufferAttribute(this,e),Cc.applyMatrix3(t),this.setXY(e,Cc.x,Cc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=La(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=La(e,this.array)),e}setX(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=La(e,this.array)),e}setY(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=La(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=La(e,this.array)),e}setW(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ti(e,this.array),n=ti(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=ti(e,this.array),n=ti(n,this.array),r=ti(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=ti(e,this.array),n=ti(n,this.array),r=ti(r,this.array),s=ti(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Za=class extends di{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ja=class extends di{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var nn=class extends di{constructor(t,e,n){super(new Float32Array(t),e,n)}},py=new mn,Ua=new O,ud=new O,Jr=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):py.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ua.subVectors(t,this.center);let e=Ua.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ua,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ud.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ua.copy(t.center).add(ud)),this.expandByPoint(Ua.copy(t.center).sub(ud))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},my=0,Ei=new Re,fd=new Mn,Eo=new O,fi=new mn,Oa=new mn,dn=new O,pi=class i extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ty(t)?Ja:Za)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ie().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,e,n){return Ei.makeTranslation(t,e,n),this.applyMatrix4(Ei),this}scale(t,e,n){return Ei.makeScale(t,e,n),this.applyMatrix4(Ei),this}lookAt(t){return fd.lookAt(t),fd.updateMatrix(),this.applyMatrix4(fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nn(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];fi.setFromBufferAttribute(s),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(fi.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Oa.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(fi.min,Oa.min),fi.expandByPoint(dn),dn.addVectors(fi.max,Oa.max),fi.expandByPoint(dn)):(fi.expandByPoint(Oa.min),fi.expandByPoint(Oa.max))}fi.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)dn.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(dn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)dn.fromBufferAttribute(a,c),l&&(Eo.fromBufferAttribute(t,c),dn.add(Eo)),r=Math.max(r,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new di(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new O,l[x]=new O;let c=new O,h=new O,d=new O,u=new wt,f=new wt,p=new wt,_=new O,m=new O;function g(x,T,C){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,C),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,T),p.fromBufferAttribute(s,C),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(D),a[x].add(_),a[T].add(_),a[C].add(_),l[x].add(m),l[T].add(m),l[C].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let x=0,T=S.length;x<T;++x){let C=S[x],D=C.start,I=C.count;for(let k=D,L=D+I;k<L;k+=3)g(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let M=new O,v=new O,b=new O,A=new O;function w(x){b.fromBufferAttribute(r,x),A.copy(b);let T=a[x];M.copy(T),M.sub(b.multiplyScalar(b.dot(T))).normalize(),v.crossVectors(A,T);let D=v.dot(l[x])<0?-1:1;o.setXYZW(x,M.x,M.y,M.z,D)}for(let x=0,T=S.length;x<T;++x){let C=S[x],D=C.start,I=C.count;for(let k=D,L=D+I;k<L;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new di(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)dn.fromBufferAttribute(t,e),dn.normalize(),t.setXYZ(e,dn.x,dn.y,dn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new di(u,h,d)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var dd=new O,gy=new O,_y=new ie,Oi=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=dd.subVectors(n,e).cross(gy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(dd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||_y.getNormalMatrix(t),r=this.coplanarPoint(dd).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},xy=0,wr=class extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=ns,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ud,this.blendDst=Od,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xc,this.stencilZFail=Xc,this.stencilZPass=Xc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ne().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Oi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new wt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Mr=new O,pd=new O,Rc=new O,Pc=new O,oh=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mr.copy(this.origin).addScaledVector(this.direction,e),Mr.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){pd.copy(t).add(e).multiplyScalar(.5),Rc.copy(e).sub(t).normalize(),Pc.copy(this.origin).sub(pd);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Rc),a=Pc.dot(this.direction),l=-Pc.dot(Rc),c=Pc.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=s*h,d>=0)if(u>=-p)if(u<=p){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(pd).addScaledVector(Rc,u),f}intersectSphere(t,e){if(t.radius<0)return null;Mr.subVectors(t.center,this.origin);let n=Mr.dot(this.direction),r=Mr.dot(Mr)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,r=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,r=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Mr)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,_=e.y-o.y,m=e.z-o.z,g=n.x-o.x,S=n.y-o.y,M=n.z-o.z,v=Math.abs(l),b=Math.abs(c),A=Math.abs(h),w,x,T,C,D,I,k,L,z,H,V,K;if(v>=b&&v>=A?(T=l,I=d,z=p,K=g,l>=0?(w=c,x=h,C=u,D=f,k=_,L=m,H=S,V=M):(w=h,x=c,C=f,D=u,k=m,L=_,H=M,V=S)):b>=A?(T=c,I=u,z=_,K=S,c>=0?(w=h,x=l,C=f,D=d,k=m,L=p,H=M,V=g):(w=l,x=h,C=d,D=f,k=p,L=m,H=g,V=M)):(T=h,I=f,z=m,K=M,h>=0?(w=l,x=c,C=d,D=u,k=p,L=_,H=g,V=S):(w=c,x=l,C=u,D=d,k=_,L=p,H=S,V=g)),T===0)return null;let G=w/T,R=x/T,Z=1/T,mt=C-G*I,gt=D-R*I,Yt=k-G*z,It=L-R*z,Zt=H-G*K,$=V-R*K,et=Zt*It-$*Yt,dt=mt*$-gt*Zt,Gt=Yt*gt-It*mt;if(r){if(et<0||dt<0||Gt<0)return null}else if((et<0||dt<0||Gt<0)&&(et>0||dt>0||Gt>0))return null;let vt=et+dt+Gt;if(vt===0)return null;let Nt=Z*(et*I+dt*z+Gt*K);return(vt>0?Nt<0:Nt>0)?null:this.at(Nt/vt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ai=class extends wr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Xg=new Re,Is=new oh,Ic=new Jr,Yg=new O,Lc=new O,Dc=new O,Nc=new O,md=new O,Uc=new O,qg=new O,Oc=new O,re=class extends Mn{constructor(t=new pi,e=new Ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Uc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(md.fromBufferAttribute(d,t),o?Uc.addScaledVector(md,h):Uc.addScaledVector(md.sub(e),h))}e.add(Uc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ic.copy(n.boundingSphere),Ic.applyMatrix4(s),Is.copy(t.ray).recast(t.near),!(Ic.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Ic,Yg)===null||Is.origin.distanceToSquared(Yg)>(t.far-t.near)**2))&&(Xg.copy(s).invert(),Is.copy(t.ray).applyMatrix4(Xg),!(n.boundingBox!==null&&Is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Is)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=o[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,b=M;v<b;v+=3){let A=a.getX(v),w=a.getX(v+1),x=a.getX(v+2);r=Fc(this,g,t,n,c,h,d,A,w,x),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let S=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);r=Fc(this,o,t,n,c,h,d,S,M,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=o[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,b=M;v<b;v+=3){let A=v,w=v+1,x=v+2;r=Fc(this,g,t,n,c,h,d,A,w,x),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let S=m,M=m+1,v=m+2;r=Fc(this,o,t,n,c,h,d,S,M,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function vy(i,t,e,n,r,s,o,a){let l;if(t.side===bn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===es,a),l===null)return null;Oc.copy(a),Oc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Oc);return c<e.near||c>e.far?null:{distance:c,point:Oc.clone(),object:i}}function Fc(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Lc),i.getVertexPosition(l,Dc),i.getVertexPosition(c,Nc);let h=vy(i,t,e,n,Lc,Dc,Nc,qg);if(h){let d=new O;Zr.getBarycoord(qg,Lc,Dc,Nc,d),r&&(h.uv=Zr.getInterpolatedAttribute(r,a,l,c,d,new wt)),s&&(h.uv1=Zr.getInterpolatedAttribute(s,a,l,c,d,new wt)),o&&(h.normal=Zr.getInterpolatedAttribute(o,a,l,c,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new O,materialIndex:0};Zr.getNormal(Lc,Dc,Nc,u.normal),h.face=u,h.barycoord=d}return h}var $a=class extends Zn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=pn,h=pn,d,u){super(null,o,a,l,c,h,r,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ka=class extends di{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ao=new Re,Zg=new Re,Bc=[],Jg=new mn,yy=new Re,Fa=new re,Ba=new Jr,Qa=class extends re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ka(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,yy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ao),Jg.copy(t.boundingBox).applyMatrix4(Ao),this.boundingBox.union(Jg)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ao),Ba.copy(t.boundingSphere).applyMatrix4(Ao),this.boundingSphere.union(Ba)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){let n=this.matrixWorld,r=this.count;if(Fa.geometry=this.geometry,Fa.material=this.material,Fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ba.copy(this.boundingSphere),Ba.applyMatrix4(n),t.ray.intersectsSphere(Ba)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ao),Zg.multiplyMatrices(n,Ao),Fa.matrixWorld=Zg,Fa.raycast(t,Bc);for(let o=0,a=Bc.length;o<a;o++){let l=Bc[o];l.instanceId=s,l.object=this,e.push(l)}Bc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ka(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new $a(new Float32Array(r*this.count),r,this.count,Oh,Ci));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*t;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ls=new Jr,Sy=new wt(.5,.5),zc=new O,Fo=class{constructor(t=new Oi,e=new Oi,n=new Oi,r=new Oi,s=new Oi,o=new Oi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fi,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],p=s[8],_=s[9],m=s[10],g=s[11],S=s[12],M=s[13],v=s[14],b=s[15];if(r[0].setComponents(c-o,f-h,g-p,b-S).normalize(),r[1].setComponents(c+o,f+h,g+p,b+S).normalize(),r[2].setComponents(c+a,f+d,g+_,b+M).normalize(),r[3].setComponents(c-a,f-d,g-_,b-M).normalize(),n)r[4].setComponents(l,u,m,v).normalize(),r[5].setComponents(c-l,f-u,g-m,b-v).normalize();else if(r[4].setComponents(c-l,f-u,g-m,b-v).normalize(),e===Fi)r[5].setComponents(c+l,f+u,g+m,b+v).normalize();else if(e===Do)r[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(t){Ls.center.set(0,0,0);let e=Sy.distanceTo(t.center);return Ls.radius=.7071067811865476+e,Ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(zc.x=r.normal.x>0?t.max.x:t.min.x,zc.y=r.normal.y>0?t.max.y:t.min.y,zc.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(zc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ja=class extends Zn{constructor(t=[],e=rs,n,r,s,o,a,l,c,h){super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},tl=class extends Zn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $r=class extends Zn{constructor(t,e,n=zi,r,s,o,a=pn,l=pn,c,h=Qi,d=1){if(h!==Qi&&h!==os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Uo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ah=class extends $r{constructor(t,e=zi,n=rs,r,s,o=pn,a=pn,l,c=Qi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},el=class extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},nr=class i extends pi{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,r,o,2),p("x","z","y",1,-1,t,n,-e,r,o,3),p("x","y","z",1,-1,t,e,n,r,s,4),p("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(d,2));function p(_,m,g,S,M,v,b,A,w,x,T){let C=v/w,D=b/x,I=v/2,k=b/2,L=A/2,z=w+1,H=x+1,V=0,K=0,G=new O;for(let R=0;R<H;R++){let Z=R*D-k;for(let mt=0;mt<z;mt++){let gt=mt*C-I;G[_]=gt*S,G[m]=Z*M,G[g]=L,c.push(G.x,G.y,G.z),G[_]=0,G[m]=0,G[g]=A>0?1:-1,h.push(G.x,G.y,G.z),d.push(mt/w),d.push(1-R/x),V+=1}}for(let R=0;R<x;R++)for(let Z=0;Z<w;Z++){let mt=u+Z+z*R,gt=u+Z+z*(R+1),Yt=u+(Z+1)+z*(R+1),It=u+(Z+1)+z*R;l.push(mt,gt,It),l.push(gt,Yt,It),K+=6}a.addGroup(f,K,T),f+=K,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let h=n[r],u=n[r+1]-h,f=(o-h)/u;return(r+f)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new wt:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new O,r=[],s=[],o=[],a=new O,l=new Re;for(let f=0;f<=t;f++){let p=f/t;r[f]=this.getTangentAt(p,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(de(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(r[f],s[f])}if(e===!0){let f=Math.acos(de(s[0].dot(s[t]),-1,1));f/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],f*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Bo=class extends mi{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new wt){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},lh=class extends Bo{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Qd(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,r(o,a,u,f)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var $g=new O,Kg=new O,gd=new Qd,_d=new Qd,xd=new Qd,Us=class extends mi{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new O){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(Kg.subVectors(r[0],r[1]).add(r[0]),c=Kg);let d=r[a%s],u=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:($g.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=$g),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),gd.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,_,m),_d.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,_,m),xd.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(gd.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),_d.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),xd.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(gd.calc(l),_d.calc(l),xd.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new O().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Qg(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function My(i,t){let e=1-i;return e*e*t}function by(i,t){return 2*(1-i)*i*t}function wy(i,t){return i*i*t}function ka(i,t,e,n){return My(i,t)+by(i,e)+wy(i,n)}function Ty(i,t){let e=1-i;return e*e*e*t}function Ey(i,t){let e=1-i;return 3*e*e*i*t}function Ay(i,t){return 3*(1-i)*i*i*t}function Cy(i,t){return i*i*i*t}function Va(i,t,e,n,r){return Ty(i,t)+Ey(i,e)+Ay(i,n)+Cy(i,r)}var nl=class extends mi{constructor(t=new wt,e=new wt,n=new wt,r=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new wt){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Va(t,r.x,s.x,o.x,a.x),Va(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ch=class extends mi{constructor(t=new O,e=new O,n=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new O){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Va(t,r.x,s.x,o.x,a.x),Va(t,r.y,s.y,o.y,a.y),Va(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},il=class extends mi{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hh=class extends mi{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rl=class extends mi{constructor(t=new wt,e=new wt,n=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new wt){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(ka(t,r.x,s.x,o.x),ka(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Os=class extends mi{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(ka(t,r.x,s.x,o.x),ka(t,r.y,s.y,o.y),ka(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sl=class extends mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(Qg(a,l.x,c.x,h.x,d.x),Qg(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new wt().fromArray(r))}return this}},uh=Object.freeze({__proto__:null,ArcCurve:lh,CatmullRomCurve3:Us,CubicBezierCurve:nl,CubicBezierCurve3:ch,EllipseCurve:Bo,LineCurve:il,LineCurve3:hh,QuadraticBezierCurve:rl,QuadraticBezierCurve3:Os,SplineCurve:sl}),fh=class extends mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new uh[r.type]().fromJSON(r))}return this}},ol=class extends fh{constructor(t){super(),this.type="Path",this.currentPoint=new wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new il(this.currentPoint.clone(),new wt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new rl(this.currentPoint.clone(),new wt(t,e),new wt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new nl(this.currentPoint.clone(),new wt(t,e),new wt(n,r),new wt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new sl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){let c=new Bo(t,e,n,r,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Fs=class extends ol{constructor(t){super(t),this.uuid=Xo(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new ol().fromJSON(r))}return this}};function Ry(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=q0(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Ny(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let u=e;u<r;u+=e){let f=i[u],p=i[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return al(s,o,e,a,l,c,0),o}function q0(i,t,e,n,r){let s;if(r===Xy(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=jg(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=jg(o/n|0,i[o],i[o+1],s);return s&&zo(s,s.next)&&(cl(s),s=s.next),s}function Bs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(zo(e,e.next)||Ge(e.prev,e,e.next)===0)){if(cl(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function al(i,t,e,n,r,s,o){if(!i)return;!o&&s&&zy(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?Iy(i,n,r,s):Py(i)){t.push(l.i,i.i,c.i),cl(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Ly(Bs(i),t),al(i,t,e,n,r,s,2)):o===2&&Dy(i,t,e,n,r,s):al(Bs(i),t,e,n,r,s,1);break}}}function Py(i){let t=i.prev,e=i,n=i.next;if(Ge(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,s,o),d=Math.min(a,l,c),u=Math.max(r,s,o),f=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&za(r,a,s,l,o,c,p.x,p.y)&&Ge(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Iy(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Ge(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,d=s.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),_=Math.max(a,l,c),m=Math.max(h,d,u),g=Td(f,p,t,e,n),S=Td(_,m,t,e,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=g&&v&&v.z<=S;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=m&&M!==r&&M!==o&&za(a,h,l,d,c,u,M.x,M.y)&&Ge(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==r&&v!==o&&za(a,h,l,d,c,u,v.x,v.y)&&Ge(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=m&&M!==r&&M!==o&&za(a,h,l,d,c,u,M.x,M.y)&&Ge(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==r&&v!==o&&za(a,h,l,d,c,u,v.x,v.y)&&Ge(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ly(i,t){let e=i;do{let n=e.prev,r=e.next.next;!zo(n,r)&&J0(n,e,e.next,r)&&ll(n,r)&&ll(r,n)&&(t.push(n.i,e.i,r.i),cl(e),cl(e.next),e=i=r),e=e.next}while(e!==i);return Bs(e)}function Dy(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Gy(o,a)){let l=$0(o,a);o=Bs(o,o.next),l=Bs(l,l.next),al(o,t,e,n,r,s,0),al(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Ny(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=q0(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Vy(c))}r.sort(Uy);for(let s=0;s<r.length;s++)e=Oy(r[s],e);return e}function Uy(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Oy(i,t){let e=Fy(i,t);if(!e)return t;let n=$0(e,i);return Bs(n,n.next),Bs(e,e.next)}function Fy(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(zo(i,e))return e;do{if(zo(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>s&&(s=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Z0(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let d=Math.abs(r-e.y)/(n-e.x);ll(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&By(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function By(i,t){return Ge(i.prev,i,t.prev)<0&&Ge(t.next,i,i.next)<0}function zy(i,t,e,n){let r=i;do r.z===0&&(r.z=Td(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,ky(r)}function ky(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function Td(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Vy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Z0(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function za(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Z0(i,t,e,n,r,s,o,a)}function Gy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Hy(i,t)&&(ll(i,t)&&ll(t,i)&&Wy(i,t)&&(Ge(i.prev,i,t.prev)||Ge(i,t.prev,t))||zo(i,t)&&Ge(i.prev,i,i.next)>0&&Ge(t.prev,t,t.next)>0)}function Ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function zo(i,t){return i.x===t.x&&i.y===t.y}function J0(i,t,e,n){let r=Vc(Ge(i,t,e)),s=Vc(Ge(i,t,n)),o=Vc(Ge(e,n,i)),a=Vc(Ge(e,n,t));return!!(r!==s&&o!==a||r===0&&kc(i,e,t)||s===0&&kc(i,n,t)||o===0&&kc(e,i,n)||a===0&&kc(e,t,n))}function kc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Vc(i){return i>0?1:i<0?-1:0}function Hy(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&J0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ll(i,t){return Ge(i.prev,i,i.next)<0?Ge(i,t,i.next)>=0&&Ge(i,i.prev,t)>=0:Ge(i,t,i.prev)<0||Ge(i,i.next,t)<0}function Wy(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function $0(i,t){let e=Ed(i.i,i.x,i.y),n=Ed(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function jg(i,t,e,n){let r=Ed(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function cl(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ed(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xy(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Ad=class{static triangulate(t,e,n=2){return Ry(t,e,n)}},Ki=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];t0(t),e0(n,t);let o=t.length;e.forEach(t0);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,e0(n,e[l]);let a=Ad.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function t0(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function e0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var hl=class i extends pi{constructor(t=new Fs([new wt(.5,.5),new wt(-.5,.5),new wt(-.5,-.5),new wt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new nn(r,3)),this.setAttribute("uv",new nn(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Yy,M,v=!1,b,A,w,x;if(g){M=g.getSpacedPoints(h),v=!0,u=!1;let j=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,j),A=new O,w=new O,x=new O}u||(m=0,f=0,p=0,_=0);let T=a.extractPoints(c),C=T.shape,D=T.holes;if(!Ki.isClockWise(C)){C=C.reverse();for(let j=0,rt=D.length;j<rt;j++){let at=D[j];Ki.isClockWise(at)&&(D[j]=at.reverse())}}function k(j){let at=10000000000000001e-36,N=j[0];for(let ft=1;ft<=j.length;ft++){let Vt=ft%j.length,Ft=j[Vt],Ct=Ft.x-N.x,Kt=Ft.y-N.y,U=Ct*Ct+Kt*Kt,he=Math.max(Math.abs(Ft.x),Math.abs(Ft.y),Math.abs(N.x),Math.abs(N.y)),Jt=at*he*he;if(U<=Jt){j.splice(Vt,1),ft--;continue}N=Ft}}k(C),D.forEach(k);let L=D.length,z=C;for(let j=0;j<L;j++){let rt=D[j];C=C.concat(rt)}function H(j,rt,at){return rt||te("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(rt,at)}let V=C.length;function K(j,rt,at){let N,ft,Vt,Ft=j.x-rt.x,Ct=j.y-rt.y,Kt=at.x-j.x,U=at.y-j.y,he=Ft*Ft+Ct*Ct,Jt=Ft*U-Ct*Kt;if(Math.abs(Jt)>Number.EPSILON){let P=Math.sqrt(he),y=Math.sqrt(Kt*Kt+U*U),W=rt.x-Ct/P,X=rt.y+Ft/P,Q=at.x-U/y,pt=at.y+Kt/y,ct=((Q-W)*U-(pt-X)*Kt)/(Ft*U-Ct*Kt);N=W+Ft*ct-j.x,ft=X+Ct*ct-j.y;let tt=N*N+ft*ft;if(tt<=2)return new wt(N,ft);Vt=Math.sqrt(tt/2)}else{let P=!1;Ft>Number.EPSILON?Kt>Number.EPSILON&&(P=!0):Ft<-Number.EPSILON?Kt<-Number.EPSILON&&(P=!0):Math.sign(Ct)===Math.sign(U)&&(P=!0),P?(N=-Ct,ft=Ft,Vt=Math.sqrt(he)):(N=Ft,ft=Ct,Vt=Math.sqrt(he/2))}return new wt(N/Vt,ft/Vt)}let G=[];for(let j=0,rt=z.length,at=rt-1,N=j+1;j<rt;j++,at++,N++)at===rt&&(at=0),N===rt&&(N=0),G[j]=K(z[j],z[at],z[N]);let R=[],Z,mt=G.concat();for(let j=0,rt=L;j<rt;j++){let at=D[j];Z=[];for(let N=0,ft=at.length,Vt=ft-1,Ft=N+1;N<ft;N++,Vt++,Ft++)Vt===ft&&(Vt=0),Ft===ft&&(Ft=0),Z[N]=K(at[N],at[Vt],at[Ft]);R.push(Z),mt=mt.concat(Z)}let gt;if(m===0)gt=Ki.triangulateShape(z,D);else{let j=[],rt=[];for(let at=0;at<m;at++){let N=at/m,ft=f*Math.cos(N*Math.PI/2),Vt=p*Math.sin(N*Math.PI/2)+_;for(let Ft=0,Ct=z.length;Ft<Ct;Ft++){let Kt=H(z[Ft],G[Ft],Vt);dt(Kt.x,Kt.y,-ft),N===0&&j.push(Kt)}for(let Ft=0,Ct=L;Ft<Ct;Ft++){let Kt=D[Ft];Z=R[Ft];let U=[];for(let he=0,Jt=Kt.length;he<Jt;he++){let P=H(Kt[he],Z[he],Vt);dt(P.x,P.y,-ft),N===0&&U.push(P)}N===0&&rt.push(U)}}gt=Ki.triangulateShape(j,rt)}let Yt=gt.length,It=p+_;for(let j=0;j<V;j++){let rt=u?H(C[j],mt[j],It):C[j];v?(w.copy(b.normals[0]).multiplyScalar(rt.x),A.copy(b.binormals[0]).multiplyScalar(rt.y),x.copy(M[0]).add(w).add(A),dt(x.x,x.y,x.z)):dt(rt.x,rt.y,0)}for(let j=1;j<=h;j++)for(let rt=0;rt<V;rt++){let at=u?H(C[rt],mt[rt],It):C[rt];v?(w.copy(b.normals[j]).multiplyScalar(at.x),A.copy(b.binormals[j]).multiplyScalar(at.y),x.copy(M[j]).add(w).add(A),dt(x.x,x.y,x.z)):dt(at.x,at.y,d/h*j)}for(let j=m-1;j>=0;j--){let rt=j/m,at=f*Math.cos(rt*Math.PI/2),N=p*Math.sin(rt*Math.PI/2)+_;for(let ft=0,Vt=z.length;ft<Vt;ft++){let Ft=H(z[ft],G[ft],N);dt(Ft.x,Ft.y,d+at)}for(let ft=0,Vt=D.length;ft<Vt;ft++){let Ft=D[ft];Z=R[ft];for(let Ct=0,Kt=Ft.length;Ct<Kt;Ct++){let U=H(Ft[Ct],Z[Ct],N);v?dt(U.x,U.y+M[h-1].y,M[h-1].x+at):dt(U.x,U.y,d+at)}}}Zt(),$();function Zt(){let j=r.length/3;if(u){let rt=0,at=V*rt;for(let N=0;N<Yt;N++){let ft=gt[N];Gt(ft[2]+at,ft[1]+at,ft[0]+at)}rt=h+m*2,at=V*rt;for(let N=0;N<Yt;N++){let ft=gt[N];Gt(ft[0]+at,ft[1]+at,ft[2]+at)}}else{for(let rt=0;rt<Yt;rt++){let at=gt[rt];Gt(at[2],at[1],at[0])}for(let rt=0;rt<Yt;rt++){let at=gt[rt];Gt(at[0]+V*h,at[1]+V*h,at[2]+V*h)}}n.addGroup(j,r.length/3-j,0)}function $(){let j=r.length/3,rt=0;et(z,rt),rt+=z.length;for(let at=0,N=D.length;at<N;at++){let ft=D[at];et(ft,rt),rt+=ft.length}n.addGroup(j,r.length/3-j,1)}function et(j,rt){let at=j.length;for(;--at>=0;){let N=at,ft=at-1;ft<0&&(ft=j.length-1);for(let Vt=0,Ft=h+m*2;Vt<Ft;Vt++){let Ct=V*Vt,Kt=V*(Vt+1),U=rt+N+Ct,he=rt+ft+Ct,Jt=rt+ft+Kt,P=rt+N+Kt;vt(U,he,Jt,P)}}}function dt(j,rt,at){l.push(j),l.push(rt),l.push(at)}function Gt(j,rt,at){Nt(j),Nt(rt),Nt(at);let N=r.length/3,ft=S.generateTopUV(n,r,N-3,N-2,N-1);Ot(ft[0]),Ot(ft[1]),Ot(ft[2])}function vt(j,rt,at,N){Nt(j),Nt(rt),Nt(N),Nt(rt),Nt(at),Nt(N);let ft=r.length/3,Vt=S.generateSideWallUV(n,r,ft-6,ft-3,ft-2,ft-1);Ot(Vt[0]),Ot(Vt[1]),Ot(Vt[3]),Ot(Vt[1]),Ot(Vt[2]),Ot(Vt[3])}function Nt(j){r.push(l[j*3+0]),r.push(l[j*3+1]),r.push(l[j*3+2])}function Ot(j){s.push(j.x),s.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return qy(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new uh[r.type]().fromJSON(r)),new i(n,t.options)}},Yy={generateTopUV:function(i,t,e,n,r){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new wt(s,o),new wt(a,l),new wt(c,h)]},generateSideWallUV:function(i,t,e,n,r,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[r*3],f=t[r*3+1],p=t[r*3+2],_=t[s*3],m=t[s*3+1],g=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new wt(o,1-l),new wt(c,1-d),new wt(u,1-p),new wt(_,1-g)]:[new wt(a,1-l),new wt(h,1-d),new wt(f,1-p),new wt(m,1-g)]}};function qy(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Kr=class i extends pi{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let S=g*u-o;for(let M=0;M<c;M++){let v=M*d-s;p.push(v,-S,0),_.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<a;S++){let M=S+c*g,v=S+c*(g+1),b=S+1+c*(g+1),A=S+1+c*g;f.push(M,v,A),f.push(v,b,A)}this.setIndex(f),this.setAttribute("position",new nn(p,3)),this.setAttribute("normal",new nn(_,3)),this.setAttribute("uv",new nn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ul=class i extends pi{constructor(t=new Fs([new wt(0,.5),new wt(-.5,-.5),new wt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new nn(r,3)),this.setAttribute("normal",new nn(s,3)),this.setAttribute("uv",new nn(o,2));function c(h){let d=r.length/3,u=h.extractPoints(e),f=u.shape,p=u.holes;Ki.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let S=p[m];Ki.isClockWise(S)===!0&&(p[m]=S.reverse())}let _=Ki.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let S=p[m];f=f.concat(S)}for(let m=0,g=f.length;m<g;m++){let S=f[m];r.push(S.x,S.y,0),s.push(0,0,1),o.push(S.x,S.y)}for(let m=0,g=_.length;m<g;m++){let S=_[m],M=S[0]+d,v=S[1]+d,b=S[2]+d;n.push(M,v,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Zy(e,t)}static fromJSON(t,e){let n=[];for(let r=0,s=t.shapes.length;r<s;r++){let o=e[t.shapes[r]];n.push(o)}return new i(n,t.curveSegments)}};function Zy(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}var fl=class i extends pi{constructor(t=new Os(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new O,l=new O,c=new wt,h=new O,d=[],u=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new nn(d,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(f,2));function _(){for(let M=0;M<e;M++)m(M);m(s===!1?e:0),S(),g()}function m(M){h=t.getPointAt(M/e,h);let v=o.normals[M],b=o.binormals[M];for(let A=0;A<=r;A++){let w=A/r*Math.PI*2,x=Math.sin(w),T=-Math.cos(w);l.x=T*v.x+x*b.x,l.y=T*v.y+x*b.y,l.z=T*v.z+x*b.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let M=1;M<=e;M++)for(let v=1;v<=r;v++){let b=(r+1)*(M-1)+(v-1),A=(r+1)*M+(v-1),w=(r+1)*M+v,x=(r+1)*(M-1)+v;p.push(b,A,x),p.push(A,w,x)}}function S(){for(let M=0;M<=e;M++)for(let v=0;v<=r;v++)c.x=M/e,c.y=v/r,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new uh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Gs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(n0(r))r.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(n0(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function On(i){let t={};for(let e=0;e<i.length;e++){let n=Gs(i[e]);for(let r in n)t[r]=n[r]}return t}function n0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Jy(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function jd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var K0={clone:Gs,merge:On},$y=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ky=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gi=class extends wr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$y,this.fragmentShader=Ky,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=Jy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new ne().setHex(r.value);break;case"v2":this.uniforms[n].value=new wt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new O().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Fe().fromArray(r.value);break;case"m3":this.uniforms[n].value=new ie().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Re().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},dh=class extends gi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Tr=class extends wr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},zs=class extends Tr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return de(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var dl=class extends wr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=Rh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ph=class extends wr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=L0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},mh=class extends wr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Co(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function vd(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Qr=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},gh=class extends Qr{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Md,endingEnd:Md}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case bd:s=t,a=2*e-n;break;case wd:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bd:o=t,l=2*n-e;break;case wd:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(r-e),_=p*p,m=_*p,g=-u*m+2*u*_-u*p,S=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*p+1,M=(-1-f)*m+(1.5+f)*_+.5*p,v=f*m-f*_;for(let b=0;b!==a;++b)s[b]=g*o[h+b]+S*o[c+b]+M*o[l+b]+v*o[d+b];return s}},_h=class extends Qr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(r-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},xh=class extends Qr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},vh=class extends Qr{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(r-e),_=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*_+o[l+m]*p;return s}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=f*u+p*2,S=d[g],M=d[g+1],v=t*u+p*2,b=h[v],A=h[v+1],w=jy(n,e,S,b,r);s[p]=Q0(w,_,M,A,m)}return s}};function Q0(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function Qy(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function jy(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=Q0(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=Qy(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var _i=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Co(e,this.TimeBufferType),this.values=Co(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Co(t.times,Array),values:Co(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),vd(t.settings)&&(n.settings={inTangents:Co(t.settings.inTangents,Array),outTangents:Co(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new xh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _h(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new gh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new vh(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ga:e=this.InterpolantFactoryMethodDiscrete;break;case eh:e=this.InterpolantFactoryMethodLinear;break;case Wc:e=this.InterpolantFactoryMethodSmooth;break;case Sd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ga;case this.InterpolantFactoryMethodLinear:return eh;case this.InterpolantFactoryMethodSmooth:return Wc;case this.InterpolantFactoryMethodBezier:return Sd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;vd(this.settings)&&(i0(this.settings.inTangents,t),i0(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(te("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(te("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){te("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){te("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&ey(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){te("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Wc,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let _=e[d+p];if(_!==e[u+p]||_!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,vd(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function i0(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}_i.prototype.ValueTypeName="";_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=eh;var jr=class extends _i{constructor(t,e,n){super(t,e,n)}};jr.prototype.ValueTypeName="bool";jr.prototype.ValueBufferType=Array;jr.prototype.DefaultInterpolation=Ga;jr.prototype.InterpolantFactoryMethodLinear=void 0;jr.prototype.InterpolantFactoryMethodSmooth=void 0;var yh=class extends _i{constructor(t,e,n,r){super(t,e,n,r)}};yh.prototype.ValueTypeName="color";var Sh=class extends _i{constructor(t,e,n,r){super(t,e,n,r)}};Sh.prototype.ValueTypeName="number";var Mh=class extends Qr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)tr.slerpFlat(s,0,o,c-a,o,c,l);return s}},pl=class extends _i{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Mh(this.times,this.values,this.getValueSize(),t)}};pl.prototype.ValueTypeName="quaternion";pl.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends _i{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Ga;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var bh=class extends _i{constructor(t,e,n,r){super(t,e,n,r)}};bh.prototype.ValueTypeName="vector";var wh=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},j0=new wh,Th=class{constructor(t){this.manager=t!==void 0?t:j0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Th.DEFAULT_MATERIAL_NAME="__DEFAULT";var ml=class extends Mn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var yd=new Re,r0=new O,s0=new O,gl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fo,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;r0.setFromMatrixPosition(t.matrixWorld),e.position.copy(r0),s0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(s0),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,r){yd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(yd,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;t.coordinateSystem===Do||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(yd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Gc=new O,Hc=new tr,Ji=new O,_l=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Gc,Hc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Hc,Ji.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Gc,Hc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Hc,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qr=new O,o0=new wt,a0=new wt,yn=class extends _l{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=nh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Jf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nh*2*Math.atan(Math.tan(Jf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qr.x,qr.y).multiplyScalar(-t/qr.z),qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qr.x,qr.y).multiplyScalar(-t/qr.z)}getViewSize(t,e){return this.getViewBounds(t,o0,a0),e.subVectors(a0,o0)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Jf*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Cd=class extends gl{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0}},xl=class extends ml{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Cd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ko=class extends _l{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rd=class extends gl{constructor(){super(new ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vo=class extends ml{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new Rd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ro=-90,Po=1,Eh=class extends Mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new yn(Ro,Po,t,e);r.layers=this.layers,this.add(r);let s=new yn(Ro,Po,t,e);s.layers=this.layers,this.add(s);let o=new yn(Ro,Po,t,e);o.layers=this.layers,this.add(o);let a=new yn(Ro,Po,t,e);a.layers=this.layers,this.add(a);let l=new yn(Ro,Po,t,e);l.layers=this.layers,this.add(l);let c=new yn(Ro,Po,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Do)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ah=class extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var tp="\\[\\]\\.:\\/",tS=new RegExp("["+tp+"]","g"),ep="[^"+tp+"]",eS="[^"+tp.replace("\\.","")+"]",nS=/((?:WC+[\/:])*)/.source.replace("WC",ep),iS=/(WCOD+)?/.source.replace("WCOD",eS),rS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ep),sS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ep),oS=new RegExp("^"+nS+iS+rS+sS+"$"),aS=["material","materials","bones","map"],Pd=class{constructor(t,e,n){let r=n||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(tS,"")}static parseTrackName(t){let e=oS.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);aS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){te("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){te("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){te("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){te("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){te("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;te("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=Pd;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kT=new Float32Array(1);var ap=class ap{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};ap.prototype.isMatrix2=!0;var Id=ap;function np(i,t,e,n){let r=lS(n);switch(e){case Zd:return i*t;case Oh:return i*t/r.components*r.byteLength;case Fh:return i*t/r.components*r.byteLength;case as:return i*t*2/r.components*r.byteLength;case Bh:return i*t*2/r.components*r.byteLength;case Jd:return i*t*3/r.components*r.byteLength;case Ri:return i*t*4/r.components*r.byteLength;case zh:return i*t*4/r.components*r.byteLength;case bl:case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tl:case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vh:case Hh:return Math.max(i,16)*Math.max(t,8)/4;case kh:case Gh:return Math.max(i,8)*Math.max(t,8)/2;case Wh:case Xh:case qh:case Zh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yh:case Al:case Jh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $h:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case jh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case tu:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case eu:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case nu:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case iu:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ru:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case su:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ou:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case au:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case lu:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case cu:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case hu:case uu:case fu:return Math.ceil(i/4)*Math.ceil(t/4)*16;case du:case pu:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Cl:case mu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lS(i){switch(i){case ni:case Wd:return{byteLength:1,components:1};case Ho:case Xd:case ki:return{byteLength:2,components:1};case Nh:case Uh:return{byteLength:2,components:4};case zi:case Dh:case Ci:return{byteLength:4,components:1};case Yd:case qd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function S_(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function hS(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var uS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fS=`#ifdef USE_ALPHAHASH
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
#endif`,dS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_S=`#ifdef USE_AOMAP
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
#endif`,xS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vS=`#ifdef USE_BATCHING
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
#endif`,yS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wS=`#ifdef USE_IRIDESCENCE
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
#endif`,TS=`#ifdef USE_BUMPMAP
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
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,IS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,LS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,DS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,NS=`#define PI 3.141592653589793
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
} // validated`,US=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,OS=`vec3 transformedNormal = objectNormal;
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
#endif`,FS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VS="gl_FragColor = linearToOutputTexel( gl_FragColor );",GS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HS=`#ifdef USE_ENVMAP
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
#endif`,WS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,XS=`#ifdef USE_ENVMAP
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
#endif`,YS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qS=`#ifdef USE_ENVMAP
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
#endif`,ZS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$S=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QS=`#ifdef USE_GRADIENTMAP
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
}`,jS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,iM=`#ifdef USE_ENVMAP
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
#endif`,rM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lM=`PhysicalMaterial material;
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
#endif`,cM=`uniform sampler2D dfgLUT;
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
}`,hM=`
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
#endif`,uM=`#if defined( RE_IndirectDiffuse )
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
#endif`,fM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,pM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,SM=`#if defined( USE_POINTS_UV )
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
#endif`,MM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AM=`#ifdef USE_MORPHTARGETS
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
#endif`,CM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,PM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,IM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,NM=`#ifdef USE_NORMALMAP
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
#endif`,UM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$M=`float getShadowMask() {
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
}`,KM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QM=`#ifdef USE_SKINNING
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
#endif`,jM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tb=`#ifdef USE_SKINNING
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
#endif`,eb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ib=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sb=`#ifdef USE_TRANSMISSION
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
#endif`,ob=`#ifdef USE_TRANSMISSION
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
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ub=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fb=`uniform sampler2D t2D;
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
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`#include <common>
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
}`,xb=`#if DEPTH_PACKING == 3200
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
}`,vb=`#define DISTANCE
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
}`,yb=`#define DISTANCE
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
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`uniform float scale;
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
}`,wb=`uniform vec3 diffuse;
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
}`,Tb=`#include <common>
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
}`,Eb=`uniform vec3 diffuse;
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
}`,Ab=`#define LAMBERT
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
}`,Cb=`#define LAMBERT
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
}`,Rb=`#define MATCAP
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
}`,Pb=`#define MATCAP
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
}`,Ib=`#define NORMAL
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
}`,Lb=`#define NORMAL
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
}`,Db=`#define PHONG
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
}`,Nb=`#define PHONG
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
}`,Ub=`#define STANDARD
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
}`,Ob=`#define STANDARD
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
}`,Fb=`#define TOON
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
}`,Bb=`#define TOON
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
}`,zb=`uniform float size;
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
}`,kb=`uniform vec3 diffuse;
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
}`,Vb=`#include <common>
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
}`,Gb=`uniform vec3 color;
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
}`,Hb=`uniform float rotation;
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
}`,Wb=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:uS,alphahash_pars_fragment:fS,alphamap_fragment:dS,alphamap_pars_fragment:pS,alphatest_fragment:mS,alphatest_pars_fragment:gS,aomap_fragment:_S,aomap_pars_fragment:xS,batching_pars_vertex:vS,batching_vertex:yS,begin_vertex:SS,beginnormal_vertex:MS,bsdfs:bS,iridescence_fragment:wS,bumpmap_pars_fragment:TS,clipping_planes_fragment:ES,clipping_planes_pars_fragment:AS,clipping_planes_pars_vertex:CS,clipping_planes_vertex:RS,color_fragment:PS,color_pars_fragment:IS,color_pars_vertex:LS,color_vertex:DS,common:NS,cube_uv_reflection_fragment:US,defaultnormal_vertex:OS,displacementmap_pars_vertex:FS,displacementmap_vertex:BS,emissivemap_fragment:zS,emissivemap_pars_fragment:kS,colorspace_fragment:VS,colorspace_pars_fragment:GS,envmap_fragment:HS,envmap_common_pars_fragment:WS,envmap_pars_fragment:XS,envmap_pars_vertex:YS,envmap_physical_pars_fragment:iM,envmap_vertex:qS,fog_vertex:ZS,fog_pars_vertex:JS,fog_fragment:$S,fog_pars_fragment:KS,gradientmap_pars_fragment:QS,lightmap_pars_fragment:jS,lights_lambert_fragment:tM,lights_lambert_pars_fragment:eM,lights_pars_begin:nM,lights_toon_fragment:rM,lights_toon_pars_fragment:sM,lights_phong_fragment:oM,lights_phong_pars_fragment:aM,lights_physical_fragment:lM,lights_physical_pars_fragment:cM,lights_fragment_begin:hM,lights_fragment_maps:uM,lights_fragment_end:fM,lightprobes_pars_fragment:dM,logdepthbuf_fragment:pM,logdepthbuf_pars_fragment:mM,logdepthbuf_pars_vertex:gM,logdepthbuf_vertex:_M,map_fragment:xM,map_pars_fragment:vM,map_particle_fragment:yM,map_particle_pars_fragment:SM,metalnessmap_fragment:MM,metalnessmap_pars_fragment:bM,morphinstance_vertex:wM,morphcolor_vertex:TM,morphnormal_vertex:EM,morphtarget_pars_vertex:AM,morphtarget_vertex:CM,normal_fragment_begin:RM,normal_fragment_maps:PM,normal_pars_fragment:IM,normal_pars_vertex:LM,normal_vertex:DM,normalmap_pars_fragment:NM,clearcoat_normal_fragment_begin:UM,clearcoat_normal_fragment_maps:OM,clearcoat_pars_fragment:FM,iridescence_pars_fragment:BM,opaque_fragment:zM,packing:kM,premultiplied_alpha_fragment:VM,project_vertex:GM,dithering_fragment:HM,dithering_pars_fragment:WM,roughnessmap_fragment:XM,roughnessmap_pars_fragment:YM,shadowmap_pars_fragment:qM,shadowmap_pars_vertex:ZM,shadowmap_vertex:JM,shadowmask_pars_fragment:$M,skinbase_vertex:KM,skinning_pars_vertex:QM,skinning_vertex:jM,skinnormal_vertex:tb,specularmap_fragment:eb,specularmap_pars_fragment:nb,tonemapping_fragment:ib,tonemapping_pars_fragment:rb,transmission_fragment:sb,transmission_pars_fragment:ob,uv_pars_fragment:ab,uv_pars_vertex:lb,uv_vertex:cb,worldpos_vertex:hb,background_vert:ub,background_frag:fb,backgroundCube_vert:db,backgroundCube_frag:pb,cube_vert:mb,cube_frag:gb,depth_vert:_b,depth_frag:xb,distance_vert:vb,distance_frag:yb,equirect_vert:Sb,equirect_frag:Mb,linedashed_vert:bb,linedashed_frag:wb,meshbasic_vert:Tb,meshbasic_frag:Eb,meshlambert_vert:Ab,meshlambert_frag:Cb,meshmatcap_vert:Rb,meshmatcap_frag:Pb,meshnormal_vert:Ib,meshnormal_frag:Lb,meshphong_vert:Db,meshphong_frag:Nb,meshphysical_vert:Ub,meshphysical_frag:Ob,meshtoon_vert:Fb,meshtoon_frag:Bb,points_vert:zb,points_frag:kb,shadow_vert:Vb,shadow_frag:Gb,sprite_vert:Hb,sprite_frag:Wb},Et={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},or={basic:{uniforms:On([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:On([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ne(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:On([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:On([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:On([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new ne(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:On([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:On([Et.points,Et.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:On([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:On([Et.common,Et.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:On([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:On([Et.sprite,Et.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:On([Et.common,Et.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:On([Et.lights,Et.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};or.physical={uniforms:On([or.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var xu={r:0,b:0,g:0},Xb=new Re,M_=new ie;M_.set(-1,0,0,0,1,0,0,0,1);function Yb(i,t,e,n,r,s){let o=new ne(0),a=r===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let M=S.isScene===!0?S.background:null;if(M&&M.isTexture){let v=S.backgroundBlurriness>0;M=t.get(M,v)}return M}function p(S){let M=!1,v=f(S);v===null?m(o,a):v&&v.isColor&&(m(v,1),M=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,M){let v=f(M);v&&(v.isCubeTexture||v.mapping===Sl)?(c===void 0&&(c=new re(new nr(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Gs(or.backgroundCube.uniforms),vertexShader:or.backgroundCube.vertexShader,fragmentShader:or.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xb.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(M_),c.material.toneMapped=me.getTransfer(v.colorSpace)!==Se,(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new re(new Kr(2,2),new gi({name:"BackgroundMaterial",uniforms:Gs(or.background.uniforms),vertexShader:or.background.vertexShader,fragmentShader:or.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=me.getTransfer(v.colorSpace)!==Se,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,M){S.getRGB(xu,jd(i)),e.buffers.color.setClear(xu.r,xu.g,xu.b,M,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:p,addToRenderList:_,dispose:g}}function qb(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null),s=r,o=!1;function a(D,I,k,L,z){let H=!1,V=d(D,L,k,I);s!==V&&(s=V,c(s.object)),H=f(D,L,k,z),H&&p(D,L,k,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,v(D,I,k,L),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,I,k,L){let z=L.wireframe===!0,H=n[I.id];H===void 0&&(H={},n[I.id]=H);let V=D.isInstancedMesh===!0?D.id:0,K=H[V];K===void 0&&(K={},H[V]=K);let G=K[k.id];G===void 0&&(G={},K[k.id]=G);let R=G[z];return R===void 0&&(R=u(l()),G[z]=R),R}function u(D){let I=[],k=[],L=[];for(let z=0;z<e;z++)I[z]=0,k[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,I,k,L){let z=s.attributes,H=I.attributes,V=0,K=k.getAttributes();for(let G in K)if(K[G].location>=0){let Z=z[G],mt=H[G];if(mt===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(mt=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(mt=D.instanceColor)),Z===void 0||Z.attribute!==mt||mt&&Z.data!==mt.data)return!0;V++}return s.attributesNum!==V||s.index!==L}function p(D,I,k,L){let z={},H=I.attributes,V=0,K=k.getAttributes();for(let G in K)if(K[G].location>=0){let Z=H[G];Z===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));let mt={};mt.attribute=Z,Z&&Z.data&&(mt.data=Z.data),z[G]=mt,V++}s.attributes=z,s.attributesNum=V,s.index=L}function _(){let D=s.newAttributes;for(let I=0,k=D.length;I<k;I++)D[I]=0}function m(D){g(D,0)}function g(D,I){let k=s.newAttributes,L=s.enabledAttributes,z=s.attributeDivisors;k[D]=1,L[D]===0&&(i.enableVertexAttribArray(D),L[D]=1),z[D]!==I&&(i.vertexAttribDivisor(D,I),z[D]=I)}function S(){let D=s.newAttributes,I=s.enabledAttributes;for(let k=0,L=I.length;k<L;k++)I[k]!==D[k]&&(i.disableVertexAttribArray(k),I[k]=0)}function M(D,I,k,L,z,H,V){V===!0?i.vertexAttribIPointer(D,I,k,z,H):i.vertexAttribPointer(D,I,k,L,z,H)}function v(D,I,k,L){_();let z=L.attributes,H=k.getAttributes(),V=I.defaultAttributeValues;for(let K in H){let G=H[K];if(G.location>=0){let R=z[K];if(R===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(R=D.instanceColor)),R!==void 0){let Z=R.normalized,mt=R.itemSize,gt=t.get(R);if(gt===void 0)continue;let Yt=gt.buffer,It=gt.type,Zt=gt.bytesPerElement,$=It===i.INT||It===i.UNSIGNED_INT||R.gpuType===Dh;if(R.isInterleavedBufferAttribute){let et=R.data,dt=et.stride,Gt=R.offset;if(et.isInstancedInterleavedBuffer){for(let vt=0;vt<G.locationSize;vt++)g(G.location+vt,et.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let vt=0;vt<G.locationSize;vt++)m(G.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let vt=0;vt<G.locationSize;vt++)M(G.location+vt,mt/G.locationSize,It,Z,dt*Zt,(Gt+mt/G.locationSize*vt)*Zt,$)}else{if(R.isInstancedBufferAttribute){for(let et=0;et<G.locationSize;et++)g(G.location+et,R.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let et=0;et<G.locationSize;et++)m(G.location+et);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let et=0;et<G.locationSize;et++)M(G.location+et,mt/G.locationSize,It,Z,mt*Zt,mt/G.locationSize*et*Zt,$)}}else if(V!==void 0){let Z=V[K];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(G.location,Z);break;case 3:i.vertexAttrib3fv(G.location,Z);break;case 4:i.vertexAttrib4fv(G.location,Z);break;default:i.vertexAttrib1fv(G.location,Z)}}}}S()}function b(){T();for(let D in n){let I=n[D];for(let k in I){let L=I[k];for(let z in L){let H=L[z];for(let V in H)h(H[V].object),delete H[V];delete L[z]}}delete n[D]}}function A(D){if(n[D.id]===void 0)return;let I=n[D.id];for(let k in I){let L=I[k];for(let z in L){let H=L[z];for(let V in H)h(H[V].object),delete H[V];delete L[z]}}delete n[D.id]}function w(D){for(let I in n){let k=n[I];for(let L in k){let z=k[L];if(z[D.id]===void 0)continue;let H=z[D.id];for(let V in H)h(H[V].object),delete H[V];delete z[D.id]}}}function x(D){for(let I in n){let k=n[I],L=D.isInstancedMesh===!0?D.id:0,z=k[L];if(z!==void 0){for(let H in z){let V=z[H];for(let K in V)h(V[K].object),delete V[K];delete z[H]}delete k[L],Object.keys(k).length===0&&delete n[I]}}}function T(){C(),o=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Zb(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Jb(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Ri&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let x=w===ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ni&&w!==Ci&&!x&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,maxSamples:b,samples:A}}function $b(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Oi,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||r;return r=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!r||p===null||p.length===0||s&&!m)s?h(null):c();else{let S=s?0:n,M=S*4,v=g.clippingState||null;l.value=v,v=h(p,u,M,f);for(let b=0;b!==M;++b)v[b]=e[b];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=f+_*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,v=f;M!==_;++M,v+=4)o.copy(d[M]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var qo=4,Kb=6,Qb=20,jb=256,Pl=new ko,t_=new ne,lp=null,cp=0,hp=0,up=!1,t1=new O,Hs=new O,Jo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=t1}=s;lp=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),hp=this._renderer.getActiveMipmapLevel(),up=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(lp,cp,hp),this._renderer.xr.enabled=up,t.scissorTest=!1,Yo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===Vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lp=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),hp=this._renderer.getActiveMipmapLevel(),up=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:ki,format:Ri,colorSpace:Ha,depthBuffer:!1},r=e_(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e_(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=e1(s)),this._blurMaterial=i1(s,t,e),this._ggxMaterial=n1(s,t,e)}return r}_compileMaterial(t){let e=new re(new pi,t);this._renderer.compile(e,Pl)}_sceneToCubeUV(t,e,n,r,s){let l=new yn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(t_),d.toneMapping=Bi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new re(new nr,new Ai({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,g=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,g=!0):(m.color.copy(t_),g=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));let b=this._cubeSize;Yo(r,v*b,M>2?b:0,b,b),d.setRenderTarget(r),g&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===rs||t.mapping===Vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=i_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n_());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Yo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Pl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-qo?n-p+qo:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Yo(s,m,g,3*_,2*_),r.setRenderTarget(s),r.render(a,Pl),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,Yo(t,m,g,3*_,2*_),r.setRenderTarget(t),r.render(a,Pl)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],d=3*h*(r>this._lodMax-qo?r-this._lodMax+qo:0),u=4*(this._cubeSize-h);Yo(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Pl)}};function e1(i){let t=[],e=[],n=i,r=i-qo+1+Kb;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let g=0;g<d;g++){let S=g%3*2/3-1,M=g>2?0:-1,v=[S,M,0,S+2/3,M,0,S+2/3,M+1,0,S,M,0,S+2/3,M+1,0,S,M+1,0];p.set(v,f*u*g);for(let b=0;b<u;b++){let A=h[b*2]*2-1,w=h[b*2+1]*2-1;g===0?Hs.set(1,w,A):g===1?Hs.set(-A,1,-w):g===2?Hs.set(-A,w,1):g===3?Hs.set(-1,w,-A):g===4?Hs.set(-A,-1,w):Hs.set(A,w,-1),Hs.toArray(_,(g*u+b)*f)}}let m=new pi;m.setAttribute("position",new di(p,f)),m.setAttribute("outputDirection",new di(_,f)),e.push(new re(m,null)),n>qo&&n--}return{lodMeshes:e,sizeLods:t}}function e_(i,t,e){let n=new ei(i,t,e);return n.texture.mapping=Sl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yo(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function n1(i,t,e){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function i1(i,t,e){return new gi({name:"SphericalGaussianBlur",defines:{SAMPLES:Qb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function n_(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function i_(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Mu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var yu=class extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ja(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new nr(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:rr});s.uniforms.tEquirect.value=e;let o=new re(r,s),a=e.minFilter;return e.minFilter===ss&&(e.minFilter=Sn),new Eh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function r1(i){let t=new WeakMap,e=new WeakMap,n=null;function r(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ph||f===Ih)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new yu(p.height);return _.fromEquirectangularTexture(i,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,p=f===Ph||f===Ih,_=f===rs||f===Vs;if(p||_){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Jo(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return p&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new Jo(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Ph?u.mapping=rs:f===Ih&&(u.mapping=Vs),u}function l(u){let f=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function s1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Ds("WebGLRenderer: "+n+" extension not supported."),r}}}function o1(i,t,e,n){let r={},s=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete r[u.id];let f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,_=0;if(p===void 0)return;if(f!==null){let S=f.array;_=f.version;for(let M=0,v=S.length;M<v;M+=3){let b=S[M+0],A=S[M+1],w=S[M+2];u.push(b,A,A,w,w,b)}}else{let S=p.array;_=p.version;for(let M=0,v=S.length/3-1;M<v;M+=3){let b=M+0,A=M+1,w=M+2;u.push(b,A,A,w,w,b)}}let m=new(p.count>=65535?Ja:Za)(u,1);m.version=_;let g=s.get(d);g&&t.remove(g),s.set(d,m)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function a1(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,s,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,s,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];e.update(_,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function l1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:te("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function c1(i,t,e){let n=new WeakMap,r=new Fe;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let T=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),_===!0&&(M=3);let v=a.attributes.position.count*M,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*b*4*d),w=new Ya(A,v,b,d);w.type=Ci,w.needsUpdate=!0;let x=M*4;for(let C=0;C<d;C++){let D=m[C],I=g[C],k=S[C],L=v*b*4*C;for(let z=0;z<D.count;z++){let H=z*x;f===!0&&(r.fromBufferAttribute(D,z),A[L+H+0]=r.x,A[L+H+1]=r.y,A[L+H+2]=r.z,A[L+H+3]=0),p===!0&&(r.fromBufferAttribute(I,z),A[L+H+4]=r.x,A[L+H+5]=r.y,A[L+H+6]=r.z,A[L+H+7]=0),_===!0&&(r.fromBufferAttribute(k,z),A[L+H+8]=r.x,A[L+H+9]=r.y,A[L+H+10]=r.z,A[L+H+11]=k.itemSize===4?r.w:1)}}u={count:d,texture:w,size:new wt(v,b)},n.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function h1(i,t,e,n,r){let s=new WeakMap;function o(c){let h=r.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var u1={[Fd]:"LINEAR_TONE_MAPPING",[Bd]:"REINHARD_TONE_MAPPING",[zd]:"CINEON_TONE_MAPPING",[yl]:"ACES_FILMIC_TONE_MAPPING",[Vd]:"AGX_TONE_MAPPING",[Gd]:"NEUTRAL_TONE_MAPPING",[kd]:"CUSTOM_TONE_MAPPING"};function f1(i,t,e,n,r,s){let o=new ei(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new pi;c.setAttribute("position",new nn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new nn([0,2,0,0,2,0],2));let h=new dh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new re(c,h),u=new ko(-1,1,1,-1,0,1),f=null,p=null,_=!1,m,g=null,S=[],M=!1;this.setSize=function(v,b){o.setSize(v,b),a!==null&&a.setSize(v,b),l!==null&&l.setSize(v,b);for(let A=0;A<S.length;A++){let w=S[A];w.setSize&&w.setSize(v,b)}},this.setEffects=function(v){S=v,M=S.length>0&&S[0].isRenderPass===!0;let b=o.width,A=o.height;S.length>0&&a===null&&(a=new ei(b,A,{type:ki,depthBuffer:!1,stencilBuffer:!1}),l=new ei(b,A,{type:ki,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<S.length;w++){let x=S[w];x.setSize&&x.setSize(b,A)}},this.begin=function(v,b){if(_||v.toneMapping===Bi&&S.length===0)return!1;if(g=b,b!==null){let A=b.width,w=b.height;(o.width!==A||o.height!==w)&&this.setSize(A,w)}return M===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=Bi,!0},this.hasRenderPass=function(){return M},this.end=function(v,b){v.toneMapping=m,_=!0;let A=o,w=a;for(let x=0;x<S.length;x++){let T=S[x];T.enabled!==!1&&(T.render(v,w,A,b),T.needsSwap!==!1&&(A=w,w=w===a?l:a))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,h.defines={},me.getTransfer(f)===Se&&(h.defines.SRGB_TRANSFER="");let x=u1[p];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,v.setRenderTarget(g),v.render(d,u),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var b_=new Zn,pp=new $r(1,1),w_=new Ya,T_=new sh,E_=new ja,r_=[],s_=[],o_=new Float32Array(16),a_=new Float32Array(9),l_=new Float32Array(4);function $o(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=r_[r];if(s===void 0&&(s=new Float32Array(r),r_[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function an(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function bu(i,t){let e=s_[t];e===void 0&&(e=new Int32Array(t),s_[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function d1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function p1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2fv(this.addr,t),ln(e,t)}}function m1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;i.uniform3fv(this.addr,t),ln(e,t)}}function g1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4fv(this.addr,t),ln(e,t)}}function _1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;l_.set(n),i.uniformMatrix2fv(this.addr,!1,l_),ln(e,n)}}function x1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;a_.set(n),i.uniformMatrix3fv(this.addr,!1,a_),ln(e,n)}}function v1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;o_.set(n),i.uniformMatrix4fv(this.addr,!1,o_),ln(e,n)}}function y1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function S1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2iv(this.addr,t),ln(e,t)}}function M1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;i.uniform3iv(this.addr,t),ln(e,t)}}function b1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4iv(this.addr,t),ln(e,t)}}function w1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function T1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2uiv(this.addr,t),ln(e,t)}}function E1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;i.uniform3uiv(this.addr,t),ln(e,t)}}function A1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4uiv(this.addr,t),ln(e,t)}}function C1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(pp.compareFunction=e.isReversedDepthBuffer()?_u:gu,s=pp):s=b_,e.setTexture2D(t||s,r)}function R1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||T_,r)}function P1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||E_,r)}function I1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||w_,r)}function L1(i){switch(i){case 5126:return d1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return _1;case 35675:return x1;case 35676:return v1;case 5124:case 35670:return y1;case 35667:case 35671:return S1;case 35668:case 35672:return M1;case 35669:case 35673:return b1;case 5125:return w1;case 36294:return T1;case 36295:return E1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return I1}}function D1(i,t){i.uniform1fv(this.addr,t)}function N1(i,t){let e=$o(t,this.size,2);i.uniform2fv(this.addr,e)}function U1(i,t){let e=$o(t,this.size,3);i.uniform3fv(this.addr,e)}function O1(i,t){let e=$o(t,this.size,4);i.uniform4fv(this.addr,e)}function F1(i,t){let e=$o(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function B1(i,t){let e=$o(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function z1(i,t){let e=$o(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function k1(i,t){i.uniform1iv(this.addr,t)}function V1(i,t){i.uniform2iv(this.addr,t)}function G1(i,t){i.uniform3iv(this.addr,t)}function H1(i,t){i.uniform4iv(this.addr,t)}function W1(i,t){i.uniform1uiv(this.addr,t)}function X1(i,t){i.uniform2uiv(this.addr,t)}function Y1(i,t){i.uniform3uiv(this.addr,t)}function q1(i,t){i.uniform4uiv(this.addr,t)}function Z1(i,t,e){let n=this.cache,r=t.length,s=bu(e,r);an(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=pp:o=b_;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function J1(i,t,e){let n=this.cache,r=t.length,s=bu(e,r);an(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||T_,s[o])}function $1(i,t,e){let n=this.cache,r=t.length,s=bu(e,r);an(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||E_,s[o])}function K1(i,t,e){let n=this.cache,r=t.length,s=bu(e,r);an(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||w_,s[o])}function Q1(i){switch(i){case 5126:return D1;case 35664:return N1;case 35665:return U1;case 35666:return O1;case 35674:return F1;case 35675:return B1;case 35676:return z1;case 5124:case 35670:return k1;case 35667:case 35671:return V1;case 35668:case 35672:return G1;case 35669:case 35673:return H1;case 5125:return W1;case 36294:return X1;case 36295:return Y1;case 36296:return q1;case 35678:case 36198:case 36298:case 36306:case 35682:return Z1;case 35679:case 36299:case 36307:return J1;case 35680:case 36300:case 36308:case 36293:return $1;case 36289:case 36303:case 36311:case 36292:return K1}}var mp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=L1(e.type)}},gp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Q1(e.type)}},_p=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},fp=/(\w+)(\])?(\[|\.)?/g;function c_(i,t){i.seq.push(t),i.map[t.id]=t}function j1(i,t,e){let n=i.name,r=n.length;for(fp.lastIndex=0;;){let s=fp.exec(n),o=fp.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){c_(e,c===void 0?new mp(a,i,t):new gp(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new _p(a),c_(e,d)),e=d}}}var Zo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);j1(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function h_(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var tw=37297,ew=0;function nw(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var u_=new ie;function iw(i){me._getMatrix(u_,me.workingColorSpace,i);let t=`mat3( ${u_.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case Wa:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function f_(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+nw(i.getShaderSource(t),a)}else return s}function rw(i,t){let e=iw(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var sw={[Fd]:"Linear",[Bd]:"Reinhard",[zd]:"Cineon",[yl]:"ACESFilmic",[Vd]:"AgX",[Gd]:"Neutral",[kd]:"Custom"};function ow(i,t){let e=sw[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var vu=new O;function aw(){me.getLuminanceCoefficients(vu);let i=vu.x.toFixed(4),t=vu.y.toFixed(4),e=vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ll).join(`
`)}function cw(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hw(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ll(i){return i!==""}function d_(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function p_(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var uw=/^[ \t]*#include +<([\w\d./]+)>/gm;function xp(i){return i.replace(uw,dw)}var fw=new Map;function dw(i,t){let e=oe[t];if(e===void 0){let n=fw.get(t);if(n!==void 0)e=oe[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return xp(e)}var pw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m_(i){return i.replace(pw,mw)}function mw(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function g_(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var gw={[vl]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function _w(i){return gw[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xw={[rs]:"ENVMAP_TYPE_CUBE",[Vs]:"ENVMAP_TYPE_CUBE",[Sl]:"ENVMAP_TYPE_CUBE_UV"};function vw(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":xw[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var yw={[Vs]:"ENVMAP_MODE_REFRACTION"};function Sw(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":yw[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Mw={[Rh]:"ENVMAP_BLENDING_MULTIPLY",[R0]:"ENVMAP_BLENDING_MIX",[P0]:"ENVMAP_BLENDING_ADD"};function bw(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Mw[i.combine]||"ENVMAP_BLENDING_NONE"}function ww(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Tw(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=_w(e),c=vw(e),h=Sw(e),d=bw(e),u=ww(e),f=lw(e),p=cw(s),_=r.createProgram(),m,g,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ll).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ll).join(`
`),g.length>0&&(g+=`
`)):(m=[g_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ll).join(`
`),g=[g_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?oe.tonemapping_pars_fragment:"",e.toneMapping!==Bi?ow("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,rw("linearToOutputTexel",e.outputColorSpace),aw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ll).join(`
`)),o=xp(o),o=d_(o,e),o=p_(o,e),a=xp(a),a=d_(a,e),a=p_(a,e),o=m_(o),a=m_(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===$d?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=S+m+o,v=S+g+a,b=h_(r,r.VERTEX_SHADER,M),A=h_(r,r.FRAGMENT_SHADER,v);r.attachShader(_,b),r.attachShader(_,A),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(D){if(i.debug.checkShaderErrors){let I=r.getProgramInfoLog(_)||"",k=r.getShaderInfoLog(b)||"",L=r.getShaderInfoLog(A)||"",z=I.trim(),H=k.trim(),V=L.trim(),K=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,b,A);else{let R=f_(r,b,"vertex"),Z=f_(r,A,"fragment");te("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+R+`
`+Z)}else z!==""?jt("WebGLProgram: Program Info Log:",z):(H===""||V==="")&&(G=!1);G&&(D.diagnostics={runnable:K,programLog:z,vertexShader:{log:H,prefix:m},fragmentShader:{log:V,prefix:g}})}r.deleteShader(b),r.deleteShader(A),x=new Zo(r,_),T=hw(r,_)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(_,tw)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ew++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=A,this}var Ew=0,vp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yp(t),e.set(t,n)),n}},yp=class{constructor(t){this.id=Ew++,this.code=t,this.usedTimes=0}};function Aw(i){return i===as||i===Al||i===Cl}function Cw(i,t,e,n,r,s){let o=new qa,a=new vp,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,T,C,D,I,k){let L=D.fog,z=I.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=t.get(x.envMap||H,V),G=K&&K.mapping===Sl?K.image.height:null,R=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&jt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let Z=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,mt=Z!==void 0?Z.length:0,gt=0;z.morphAttributes.position!==void 0&&(gt=1),z.morphAttributes.normal!==void 0&&(gt=2),z.morphAttributes.color!==void 0&&(gt=3);let Yt,It,Zt,$;if(R){let qt=or[R];Yt=qt.vertexShader,It=qt.fragmentShader}else{Yt=x.vertexShader,It=x.fragmentShader;let qt=a.getVertexShaderStage(x),lt=a.getFragmentShaderStage(x);a.update(x,qt,lt),Zt=qt.id,$=lt.id}let et=i.getRenderTarget(),dt=i.state.buffers.depth.getReversed(),Gt=I.isInstancedMesh===!0,vt=I.isBatchedMesh===!0,Nt=!!x.map,Ot=!!x.matcap,j=!!K,rt=!!x.aoMap,at=!!x.lightMap,N=!!x.bumpMap&&x.wireframe===!1,ft=!!x.normalMap,Vt=!!x.displacementMap,Ft=!!x.emissiveMap,Ct=!!x.metalnessMap,Kt=!!x.roughnessMap,U=x.anisotropy>0,he=x.clearcoat>0,Jt=x.dispersion>0,P=x.retroreflectivity>0,y=x.iridescence>0,W=x.sheen>0,X=x.transmission>0,Q=U&&!!x.anisotropyMap,pt=he&&!!x.clearcoatMap,ct=he&&!!x.clearcoatNormalMap,tt=he&&!!x.clearcoatRoughnessMap,it=y&&!!x.iridescenceMap,yt=y&&!!x.iridescenceThicknessMap,Ut=W&&!!x.sheenColorMap,St=W&&!!x.sheenRoughnessMap,xt=!!x.specularMap,ut=!!x.specularColorMap,Wt=!!x.specularIntensityMap,Qt=X&&!!x.transmissionMap,F=X&&!!x.thicknessMap,_t=!!x.gradientMap,nt=!!x.alphaMap,Mt=x.alphaTest>0,Tt=!!x.alphaHash,st=!!x.extensions,ht=Bi;x.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ht=i.toneMapping);let ot={shaderID:R,shaderType:x.type,shaderName:x.name,vertexShader:Yt,fragmentShader:It,defines:x.defines,customVertexShaderID:Zt,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:vt,batchingColor:vt&&I._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&I.instanceColor!==null,instancingMorph:Gt&&I.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Nt,matcap:Ot,envMap:j,envMapMode:j&&K.mapping,envMapCubeUVHeight:G,aoMap:rt,lightMap:at,bumpMap:N,normalMap:ft,displacementMap:Vt,emissiveMap:Ft,normalMapObjectSpace:ft&&x.normalMapType===D0,normalMapTangentSpace:ft&&x.normalMapType===Rl,packedNormalMap:ft&&x.normalMapType===Rl&&Aw(x.normalMap.format),metalnessMap:Ct,roughnessMap:Kt,anisotropy:U,anisotropyMap:Q,clearcoat:he,clearcoatMap:pt,clearcoatNormalMap:ct,clearcoatRoughnessMap:tt,dispersion:Jt,retroreflection:P,iridescence:y,iridescenceMap:it,iridescenceThicknessMap:yt,sheen:W,sheenColorMap:Ut,sheenRoughnessMap:St,specularMap:xt,specularColorMap:ut,specularIntensityMap:Wt,transmission:X,transmissionMap:Qt,thicknessMap:F,gradientMap:_t,opaque:x.transparent===!1&&x.blending===ns&&x.alphaToCoverage===!1,alphaMap:nt,alphaTest:Mt,alphaHash:Tt,combine:x.combine,mapUv:Nt&&p(x.map.channel),aoMapUv:rt&&p(x.aoMap.channel),lightMapUv:at&&p(x.lightMap.channel),bumpMapUv:N&&p(x.bumpMap.channel),normalMapUv:ft&&p(x.normalMap.channel),displacementMapUv:Vt&&p(x.displacementMap.channel),emissiveMapUv:Ft&&p(x.emissiveMap.channel),metalnessMapUv:Ct&&p(x.metalnessMap.channel),roughnessMapUv:Kt&&p(x.roughnessMap.channel),anisotropyMapUv:Q&&p(x.anisotropyMap.channel),clearcoatMapUv:pt&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ct&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:St&&p(x.sheenRoughnessMap.channel),specularMapUv:xt&&p(x.specularMap.channel),specularColorMapUv:ut&&p(x.specularColorMap.channel),specularIntensityMapUv:Wt&&p(x.specularIntensityMap.channel),transmissionMapUv:Qt&&p(x.transmissionMap.channel),thicknessMapUv:F&&p(x.thicknessMap.channel),alphaMapUv:nt&&p(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ft||U),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(Nt||nt),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&ft===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:dt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:gt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ht,decodeVideoTexture:Nt&&x.map.isVideoTexture===!0&&me.getTransfer(x.map.colorSpace)===Se,decodeVideoTextureEmissive:Ft&&x.emissiveMap.isVideoTexture===!0&&me.getTransfer(x.emissiveMap.colorSpace)===Se,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ir,flipSided:x.side===bn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(g(T,x),S(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function g(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function S(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){let T=f[x.type],C;if(T){let D=or[T];C=K0.clone(D.uniforms)}else C=x.uniforms;return C}function v(x,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new Tw(i,T,x,r),c.push(C),h.set(T,C)),C}function b(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:v,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:w}}function Rw(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Pw(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function __(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function x_(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,_,m,g){let S=i[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:g},i[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=p,S.materialVariant=o(u),S.groupOrder=_,S.renderOrder=u.renderOrder,S.z=m,S.group=g),t++,S}function l(u,f,p,_,m,g,S){S.reversedDepth===!0&&(m=-m);let M=a(u,f,p,_,m,g);p.transmission>0?n.push(M):p.transparent===!0?r.push(M):e.push(M)}function c(u,f,p,_,m,g){let S=a(u,f,p,_,m,g);p.transmission>0?n.unshift(S):p.transparent===!0?r.unshift(S):e.unshift(S)}function h(u,f){e.length>1&&e.sort(u||Pw),n.length>1&&n.sort(f||__),r.length>1&&r.sort(f||__)}function d(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:h}}function Iw(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new x_,i.set(n,[o])):r>=s.length?(o=new x_,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Lw(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new ne};break;case"SpotLight":e={position:new O,direction:new O,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function Dw(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Nw=0;function Uw(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ow(i){let t=new Lw,e=Dw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let r=new O,s=new Re,o=new Re;function a(c){let h=0,d=0,u=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,S=0,M=0,v=0,b=0,A=0,w=0,x=0,T=0,C=0;c.sort(Uw);for(let I=0,k=c.length;I<k;I++){let L=c[I],z=L.color,H=L.intensity,V=L.distance,K=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===as?K=L.shadow.map.texture:K=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=z.r*H,d+=z.g*H,u+=z.b*H;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],H);C++}else if(L.isSunLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let R=L.shadow,Z=e.get(L);Z.shadowIntensity=R.intensity,Z.shadowBias=R.bias,Z.shadowNormalBias=R.normalBias,Z.shadowRadius=R.radius,Z.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[p]=Z,n.sunShadowMap[p]=K;let mt=R.getViewportCount();for(let gt=0;gt<mt;gt++)n.sunShadowMatrix[_+gt]=R.getMatrix(gt),n.sunShadowCascade[_+gt]=R._cascadeData[gt];_+=mt,p++}n.sun[f]=G,f++}else if(L.isDirectionalLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let R=L.shadow,Z=e.get(L);Z.shadowIntensity=R.intensity,Z.shadowBias=R.bias,Z.shadowNormalBias=R.normalBias,Z.shadowRadius=R.radius,Z.shadowMapSize=R.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=L.shadow.matrix,b++}n.directional[m]=G,m++}else if(L.isSpotLight){let G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(z).multiplyScalar(H),G.distance=V,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[S]=G;let R=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,R.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[S]=R.matrix,L.castShadow){let Z=e.get(L);Z.shadowIntensity=R.intensity,Z.shadowBias=R.bias,Z.shadowNormalBias=R.normalBias,Z.shadowRadius=R.radius,Z.shadowMapSize=R.mapSize,n.spotShadow[S]=Z,n.spotShadowMap[S]=K,w++}S++}else if(L.isRectAreaLight){let G=t.get(L);G.color.copy(z).multiplyScalar(H),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[M]=G,M++}else if(L.isPointLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){let R=L.shadow,Z=e.get(L);Z.shadowIntensity=R.intensity,Z.shadowBias=R.bias,Z.shadowNormalBias=R.normalBias,Z.shadowRadius=R.radius,Z.shadowMapSize=R.mapSize,Z.shadowCameraNear=R.camera.near,Z.shadowCameraFar=R.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=L.shadow.matrix,A++}n.point[g]=G,g++}else if(L.isHemisphereLight){let G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(H),G.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[v]=G,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==S||D.rectAreaLength!==M||D.hemiLength!==v||D.numSunShadows!==p||D.numDirectionalShadows!==b||D.numPointShadows!==A||D.numSpotShadows!==w||D.numSpotMaps!==x||D.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=M,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,D.sunLength=f,D.directionalLength=m,D.pointLength=g,D.spotLength=S,D.rectAreaLength=M,D.hemiLength=v,D.numSunShadows=p,D.numDirectionalShadows=b,D.numPointShadows=A,D.numSpotShadows=w,D.numSpotMaps=x,D.numLightProbes=C,n.version=Nw++)}function l(c,h){let d=0,u=0,f=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let S=0,M=c.length;S<M;S++){let v=c[S];if(v.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),u++}else if(v.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function v_(i){let t=new Ow(i),e=[],n=[],r=[];function s(u){d.camera=u,e.length=0,n.length=0,r.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){r.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Fw(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new v_(i),t.set(r,[a])):s>=o.length?(a=new v_(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Bw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zw=`uniform sampler2D shadow_pass;
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
}`,kw=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Vw=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],y_=new Re,Il=new O,dp=new O;function Gw(i,t,e){let n=new Fo,r=new wt,s=new wt,o=new Fe,a=new ph,l=new mh,c={},h=e.maxTextureSize,d={[es]:bn,[bn]:es,[ir]:ir},u=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:Bw,fragmentShader:zw}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new pi;p.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new re(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vl;let g=this.type;this.render=function(A,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===h0&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vl);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),I=i.state;I.setBlending(rr),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let k=g!==this.type;k&&w.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=A.length;L<z;L++){let H=A[L],V=H.shadow;if(V===void 0){jt("WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let K=V.getFrameExtents();r.multiply(K),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/K.x),r.x=s.x*K.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/K.y),r.y=s.y*K.y,V.mapSize.y=s.y));let G=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=G,V.map===null||k===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Go){if(H.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ei(r.x,r.y,{format:as,type:ki,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),V.map.texture.name=H.name+".shadowMap",V.map.depthTexture=new $r(r.x,r.y,Ci),V.map.depthTexture.name=H.name+".shadowMapDepth",V.map.depthTexture.format=Qi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=pn,V.map.depthTexture.magFilter=pn}else H.isPointLight?(V.map=new yu(r.x),V.map.depthTexture=new ah(r.x,zi)):(V.map=new ei(r.x,r.y),V.map.depthTexture=new $r(r.x,r.y,zi)),V.map.depthTexture.name=H.name+".shadowMap",V.map.depthTexture.format=Qi,this.type===vl?(V.map.depthTexture.compareFunction=G?_u:gu,V.map.depthTexture.minFilter=Sn,V.map.depthTexture.magFilter=Sn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=pn,V.map.depthTexture.magFilter=pn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==r.x||V.map.height!==r.y)&&V.map.setSize(r.x,r.y);let R=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();H.isPointLight!==!0&&V.updateMatrices(H,x);for(let Z=0;Z<R;Z++){let mt=V.getCamera(Z);if(H.isPointLight){let gt=V.camera,Yt=V.matrix,It=H.distance||gt.far;It!==gt.far&&(gt.far=It,gt.updateProjectionMatrix()),Il.setFromMatrixPosition(H.matrixWorld),gt.position.copy(Il),dp.copy(gt.position),dp.add(kw[Z]),gt.up.copy(Vw[Z]),gt.lookAt(dp),gt.updateMatrixWorld(),Yt.makeTranslation(-Il.x,-Il.y,-Il.z),y_.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),V._frustum.setFromProjectionMatrix(y_,gt.coordinateSystem,gt.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(V.map),i.clear());let gt=V.getViewport(Z);o.set(s.x*gt.x,s.y*gt.y,s.x*gt.z,s.y*gt.w),I.viewport(o)}n=V.getFrustum(Z),v(w,x,mt,H,this.type)}V.isPointLightShadow!==!0&&this.type===Go&&S(V,x),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(T,C,D)};function S(A,w){let x=t.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new ei(r.x,r.y,{format:as,type:ki}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,x,u,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,x,f,_,null)}function M(A,w,x,T){let C=null,D=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)C=D;else if(C=x.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let I=C.uuid,k=w.uuid,L=c[I];L===void 0&&(L={},c[I]=L);let z=L[k];z===void 0&&(z=C.clone(),L[k]=z,w.addEventListener("dispose",b)),C=z}if(C.visible=w.visible,C.wireframe=w.wireframe,T===Go?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:d[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let I=i.properties.get(C);I.light=x}return C}function v(A,w,x,T,C){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&C===Go)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);let k=t.update(A),L=A.material;if(Array.isArray(L)){let z=k.groups;for(let H=0,V=z.length;H<V;H++){let K=z[H],G=L[K.materialIndex];if(G&&G.visible){let R=M(A,G,T,C);A.onBeforeShadow(i,A,w,x,k,R,K),i.renderBufferDirect(x,null,k,R,A,K),A.onAfterShadow(i,A,w,x,k,R,K)}}}else if(L.visible){let z=M(A,L,T,C);A.onBeforeShadow(i,A,w,x,k,z,null),i.renderBufferDirect(x,null,k,z,A,null),A.onAfterShadow(i,A,w,x,k,z,null)}}let I=A.children;for(let k=0,L=I.length;k<L;k++)v(I[k],w,x,T,C)}function b(A){A.target.removeEventListener("dispose",b);for(let x in c){let T=c[x],C=A.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Hw(i,t){function e(){let F=!1,_t=new Fe,nt=null,Mt=new Fe(0,0,0,0);return{setMask:function(Tt){nt!==Tt&&!F&&(i.colorMask(Tt,Tt,Tt,Tt),nt=Tt)},setLocked:function(Tt){F=Tt},setClear:function(Tt,st,ht,ot,qt){qt===!0&&(Tt*=ot,st*=ot,ht*=ot),_t.set(Tt,st,ht,ot),Mt.equals(_t)===!1&&(i.clearColor(Tt,st,ht,ot),Mt.copy(_t))},reset:function(){F=!1,nt=null,Mt.set(-1,0,0,0)}}}function n(){let F=!1,_t=!1,nt=null,Mt=null,Tt=null;return{setReversed:function(st){if(_t!==st){let ht=t.get("EXT_clip_control");st?ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.ZERO_TO_ONE_EXT):ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.NEGATIVE_ONE_TO_ONE_EXT),_t=st;let ot=Tt;Tt=null,this.setClear(ot)}},getReversed:function(){return _t},setTest:function(st){st?et(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(st){nt!==st&&!F&&(i.depthMask(st),nt=st)},setFunc:function(st){if(_t&&(st=X0[st]),Mt!==st){switch(st){case Yc:i.depthFunc(i.NEVER);break;case qc:i.depthFunc(i.ALWAYS);break;case Zc:i.depthFunc(i.LESS);break;case Lo:i.depthFunc(i.LEQUAL);break;case Jc:i.depthFunc(i.EQUAL);break;case $c:i.depthFunc(i.GEQUAL);break;case Kc:i.depthFunc(i.GREATER);break;case Qc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=st}},setLocked:function(st){F=st},setClear:function(st){Tt!==st&&(Tt=st,_t&&(st=1-st),i.clearDepth(st))},reset:function(){F=!1,nt=null,Mt=null,Tt=null,_t=!1}}}function r(){let F=!1,_t=null,nt=null,Mt=null,Tt=null,st=null,ht=null,ot=null,qt=null;return{setTest:function(lt){F||(lt?et(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(lt){_t!==lt&&!F&&(i.stencilMask(lt),_t=lt)},setFunc:function(lt,$t,Bt){(nt!==lt||Mt!==$t||Tt!==Bt)&&(i.stencilFunc(lt,$t,Bt),nt=lt,Mt=$t,Tt=Bt)},setOp:function(lt,$t,Bt){(st!==lt||ht!==$t||ot!==Bt)&&(i.stencilOp(lt,$t,Bt),st=lt,ht=$t,ot=Bt)},setLocked:function(lt){F=lt},setClear:function(lt){qt!==lt&&(i.clearStencil(lt),qt=lt)},reset:function(){F=!1,_t=null,nt=null,Mt=null,Tt=null,st=null,ht=null,ot=null,qt=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,S=null,M=null,v=null,b=null,A=null,w=null,x=new ne(0,0,0),T=0,C=!1,D=null,I=null,k=null,L=null,z=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,K=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=K>=2);let R=null,Z={},mt=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),Yt=new Fe().fromArray(mt),It=new Fe().fromArray(gt);function Zt(F,_t,nt,Mt){let Tt=new Uint8Array(4),st=i.createTexture();i.bindTexture(F,st),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ht=0;ht<nt;ht++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(_t+ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return st}let $={};$[i.TEXTURE_2D]=Zt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(Lo),N(!1),ft(Ld),et(i.CULL_FACE),rt(rr);function et(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function dt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Gt(F,_t){return u[F]!==_t?(i.bindFramebuffer(F,_t),u[F]=_t,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_t),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function vt(F,_t){let nt=p,Mt=!1;if(F){nt=f.get(_t),nt===void 0&&(nt=[],f.set(_t,nt));let Tt=F.textures;if(nt.length!==Tt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let st=0,ht=Tt.length;st<ht;st++)nt[st]=i.COLOR_ATTACHMENT0+st;nt.length=Tt.length,Mt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(nt)}function Nt(F){return _!==F?(i.useProgram(F),_=F,!0):!1}let Ot={[ks]:i.FUNC_ADD,[f0]:i.FUNC_SUBTRACT,[d0]:i.FUNC_REVERSE_SUBTRACT};Ot[p0]=i.MIN,Ot[m0]=i.MAX;let j={[g0]:i.ZERO,[_0]:i.ONE,[x0]:i.SRC_COLOR,[Ud]:i.SRC_ALPHA,[w0]:i.SRC_ALPHA_SATURATE,[M0]:i.DST_COLOR,[y0]:i.DST_ALPHA,[v0]:i.ONE_MINUS_SRC_COLOR,[Od]:i.ONE_MINUS_SRC_ALPHA,[b0]:i.ONE_MINUS_DST_COLOR,[S0]:i.ONE_MINUS_DST_ALPHA,[T0]:i.CONSTANT_COLOR,[E0]:i.ONE_MINUS_CONSTANT_COLOR,[A0]:i.CONSTANT_ALPHA,[C0]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(F,_t,nt,Mt,Tt,st,ht,ot,qt,lt){if(F===rr){m===!0&&(dt(i.BLEND),m=!1);return}if(m===!1&&(et(i.BLEND),m=!0),F!==u0){if(F!==g||lt!==C){if((S!==ks||b!==ks)&&(i.blendEquation(i.FUNC_ADD),S=ks,b=ks),lt)switch(F){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case is:i.blendFunc(i.ONE,i.ONE);break;case Dd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:te("WebGLState: Invalid blending: ",F);break}else switch(F){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Dd:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nd:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",F);break}M=null,v=null,A=null,w=null,x.set(0,0,0),T=0,g=F,C=lt}return}Tt=Tt||_t,st=st||nt,ht=ht||Mt,(_t!==S||Tt!==b)&&(i.blendEquationSeparate(Ot[_t],Ot[Tt]),S=_t,b=Tt),(nt!==M||Mt!==v||st!==A||ht!==w)&&(i.blendFuncSeparate(j[nt],j[Mt],j[st],j[ht]),M=nt,v=Mt,A=st,w=ht),(ot.equals(x)===!1||qt!==T)&&(i.blendColor(ot.r,ot.g,ot.b,qt),x.copy(ot),T=qt),g=F,C=!1}function at(F,_t){F.side===ir?dt(i.CULL_FACE):et(i.CULL_FACE);let nt=F.side===bn;_t&&(nt=!nt),N(nt),F.blending===ns&&F.transparent===!1?rt(rr):rt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);let Mt=F.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ft(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function N(F){D!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),D=F)}function ft(F){F!==l0?(et(i.CULL_FACE),F!==I&&(F===Ld?i.cullFace(i.BACK):F===c0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),I=F}function Vt(F){F!==k&&(V&&i.lineWidth(F),k=F)}function Ft(F,_t,nt){F?(et(i.POLYGON_OFFSET_FILL),(L!==_t||z!==nt)&&(L=_t,z=nt,o.getReversed()&&(_t=-_t),i.polygonOffset(_t,nt))):dt(i.POLYGON_OFFSET_FILL)}function Ct(F){F?et(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function Kt(F){F===void 0&&(F=i.TEXTURE0+H-1),R!==F&&(i.activeTexture(F),R=F)}function U(F,_t,nt){nt===void 0&&(R===null?nt=i.TEXTURE0+H-1:nt=R);let Mt=Z[nt];Mt===void 0&&(Mt={type:void 0,texture:void 0},Z[nt]=Mt),(Mt.type!==F||Mt.texture!==_t)&&(R!==nt&&(i.activeTexture(nt),R=nt),i.bindTexture(F,_t||$[F]),Mt.type=F,Mt.texture=_t)}function he(){let F=Z[R];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Jt(){try{i.compressedTexImage2D(...arguments)}catch(F){te("WebGLState:",F)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(F){te("WebGLState:",F)}}function y(){try{i.texSubImage2D(...arguments)}catch(F){te("WebGLState:",F)}}function W(){try{i.texSubImage3D(...arguments)}catch(F){te("WebGLState:",F)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(F){te("WebGLState:",F)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(F){te("WebGLState:",F)}}function pt(){try{i.texStorage2D(...arguments)}catch(F){te("WebGLState:",F)}}function ct(){try{i.texStorage3D(...arguments)}catch(F){te("WebGLState:",F)}}function tt(){try{i.texImage2D(...arguments)}catch(F){te("WebGLState:",F)}}function it(){try{i.texImage3D(...arguments)}catch(F){te("WebGLState:",F)}}function yt(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function Ut(F,_t){d[F]!==_t&&(i.pixelStorei(F,_t),d[F]=_t)}function St(F){Yt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Yt.copy(F))}function xt(F){It.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),It.copy(F))}function ut(F,_t){let nt=c.get(_t);nt===void 0&&(nt=new WeakMap,c.set(_t,nt));let Mt=nt.get(F);Mt===void 0&&(Mt=i.getUniformBlockIndex(_t,F.name),nt.set(F,Mt))}function Wt(F,_t){let Mt=c.get(_t).get(F);l.get(_t)!==Mt&&(i.uniformBlockBinding(_t,Mt,F.__bindingPointIndex),l.set(_t,Mt))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,Z={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,S=null,M=null,v=null,b=null,A=null,w=null,x=new ne(0,0,0),T=0,C=!1,D=null,I=null,k=null,L=null,z=null,Yt.set(0,0,i.canvas.width,i.canvas.height),It.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:et,disable:dt,bindFramebuffer:Gt,drawBuffers:vt,useProgram:Nt,setBlending:rt,setMaterial:at,setFlipSided:N,setCullFace:ft,setLineWidth:Vt,setPolygonOffset:Ft,setScissorTest:Ct,activeTexture:Kt,bindTexture:U,unbindTexture:he,compressedTexImage2D:Jt,compressedTexImage3D:P,texImage2D:tt,texImage3D:it,pixelStorei:Ut,getParameter:yt,updateUBOMapping:ut,uniformBlockBinding:Wt,texStorage2D:pt,texStorage3D:ct,texSubImage2D:y,texSubImage3D:W,compressedTexSubImage2D:X,compressedTexSubImage3D:Q,scissor:St,viewport:xt,reset:Qt}}function Ww(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,y){return p?new OffscreenCanvas(P,y):Xa("canvas")}function m(P,y,W){let X=1,Q=Jt(P);if((Q.width>W||Q.height>W)&&(X=W/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let pt=Math.floor(X*Q.width),ct=Math.floor(X*Q.height);u===void 0&&(u=_(pt,ct));let tt=y?_(pt,ct):u;return tt.width=pt,tt.height=ct,tt.getContext("2d").drawImage(P,0,0,pt,ct),jt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+pt+"x"+ct+")."),tt}else return"data"in P&&jt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function g(P){return P.generateMipmaps}function S(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,y,W,X,Q,pt=!1){if(P!==null){if(i[P]!==void 0)return i[P];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ct;X&&(ct=t.get("EXT_texture_norm16"),ct||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=y;if(y===i.RED&&(W===i.FLOAT&&(tt=i.R32F),W===i.HALF_FLOAT&&(tt=i.R16F),W===i.UNSIGNED_BYTE&&(tt=i.R8),W===i.UNSIGNED_SHORT&&ct&&(tt=ct.R16_EXT),W===i.SHORT&&ct&&(tt=ct.R16_SNORM_EXT)),y===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.R8UI),W===i.UNSIGNED_SHORT&&(tt=i.R16UI),W===i.UNSIGNED_INT&&(tt=i.R32UI),W===i.BYTE&&(tt=i.R8I),W===i.SHORT&&(tt=i.R16I),W===i.INT&&(tt=i.R32I)),y===i.RG&&(W===i.FLOAT&&(tt=i.RG32F),W===i.HALF_FLOAT&&(tt=i.RG16F),W===i.UNSIGNED_BYTE&&(tt=i.RG8),W===i.UNSIGNED_SHORT&&ct&&(tt=ct.RG16_EXT),W===i.SHORT&&ct&&(tt=ct.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RG8UI),W===i.UNSIGNED_SHORT&&(tt=i.RG16UI),W===i.UNSIGNED_INT&&(tt=i.RG32UI),W===i.BYTE&&(tt=i.RG8I),W===i.SHORT&&(tt=i.RG16I),W===i.INT&&(tt=i.RG32I)),y===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),W===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),W===i.UNSIGNED_INT&&(tt=i.RGB32UI),W===i.BYTE&&(tt=i.RGB8I),W===i.SHORT&&(tt=i.RGB16I),W===i.INT&&(tt=i.RGB32I)),y===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),W===i.UNSIGNED_INT&&(tt=i.RGBA32UI),W===i.BYTE&&(tt=i.RGBA8I),W===i.SHORT&&(tt=i.RGBA16I),W===i.INT&&(tt=i.RGBA32I)),y===i.RGB&&(W===i.UNSIGNED_SHORT&&ct&&(tt=ct.RGB16_EXT),W===i.SHORT&&ct&&(tt=ct.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),y===i.RGBA){let it=pt?Wa:me.getTransfer(Q);W===i.FLOAT&&(tt=i.RGBA32F),W===i.HALF_FLOAT&&(tt=i.RGBA16F),W===i.UNSIGNED_BYTE&&(tt=it===Se?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&ct&&(tt=ct.RGBA16_EXT),W===i.SHORT&&ct&&(tt=ct.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function b(P,y){let W;return P?y===null||y===zi||y===Wo?W=i.DEPTH24_STENCIL8:y===Ci?W=i.DEPTH32F_STENCIL8:y===Ho&&(W=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===zi||y===Wo?W=i.DEPTH_COMPONENT24:y===Ci?W=i.DEPTH_COMPONENT32F:y===Ho&&(W=i.DEPTH_COMPONENT16),W}function A(P,y){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==pn&&P.minFilter!==Sn?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function w(P){let y=P.target;y.removeEventListener("dispose",w),T(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function x(P){let y=P.target;y.removeEventListener("dispose",x),D(y)}function T(P){let y=n.get(P);if(y.__webglInit===void 0)return;let W=P.source,X=f.get(W);if(X){let Q=X[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(P),Object.keys(X).length===0&&f.delete(W)}n.remove(P)}function C(P){let y=n.get(P);i.deleteTexture(y.__webglTexture);let W=P.source,X=f.get(W);delete X[y.__cacheKey],o.memory.textures--}function D(P){let y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let Q=0;Q<y.__webglFramebuffer[X].length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[X][Q]);else i.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)i.deleteFramebuffer(y.__webglFramebuffer[X]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let W=P.textures;for(let X=0,Q=W.length;X<Q;X++){let pt=n.get(W[X]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(W[X])}n.remove(P)}let I=0;function k(){I=0}function L(){return I}function z(P){I=P}function H(){let P=I;return P>=r.maxTextures&&jt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),I+=1,P}function V(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function K(P,y){let W=n.get(P);if(P.isVideoTexture&&U(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){let X=P.image;if(X===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(W,P,y);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+y)}function G(P,y){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){dt(W,P,y);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+y)}function R(P,y){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){dt(W,P,y);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+y)}function Z(P,y){let W=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){Gt(W,P,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+y)}let mt={[jc]:i.REPEAT,[$i]:i.CLAMP_TO_EDGE,[th]:i.MIRRORED_REPEAT},gt={[pn]:i.NEAREST,[I0]:i.NEAREST_MIPMAP_NEAREST,[Ml]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[Lh]:i.LINEAR_MIPMAP_NEAREST,[ss]:i.LINEAR_MIPMAP_LINEAR},Yt={[U0]:i.NEVER,[k0]:i.ALWAYS,[O0]:i.LESS,[gu]:i.LEQUAL,[F0]:i.EQUAL,[_u]:i.GEQUAL,[B0]:i.GREATER,[z0]:i.NOTEQUAL};function It(P,y){if(y.type===Ci&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Sn||y.magFilter===Lh||y.magFilter===Ml||y.magFilter===ss||y.minFilter===Sn||y.minFilter===Lh||y.minFilter===Ml||y.minFilter===ss)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,mt[y.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,mt[y.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,mt[y.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,gt[y.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,gt[y.minFilter]),y.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Yt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===pn||y.minFilter!==Ml&&y.minFilter!==ss||y.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Zt(P,y){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",w));let X=y.source,Q=f.get(X);Q===void 0&&(Q={},f.set(X,Q));let pt=V(y);if(pt!==P.__cacheKey){Q[pt]===void 0&&(Q[pt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),Q[pt].usedTimes++;let ct=Q[P.__cacheKey];ct!==void 0&&(Q[P.__cacheKey].usedTimes--,ct.usedTimes===0&&C(y)),P.__cacheKey=pt,P.__webglTexture=Q[pt].texture}return W}function $(P,y,W){return Math.floor(Math.floor(P/W)/y)}function et(P,y,W,X){let pt=P.updateRanges;if(pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,W,X,y.data);else{pt.sort((Ut,St)=>Ut.start-St.start);let ct=0;for(let Ut=1;Ut<pt.length;Ut++){let St=pt[ct],xt=pt[Ut],ut=St.start+St.count,Wt=$(xt.start,y.width,4),Qt=$(St.start,y.width,4);xt.start<=ut+1&&Wt===Qt&&$(xt.start+xt.count-1,y.width,4)===Wt?St.count=Math.max(St.count,xt.start+xt.count-St.start):(++ct,pt[ct]=xt)}pt.length=ct+1;let tt=e.getParameter(i.UNPACK_ROW_LENGTH),it=e.getParameter(i.UNPACK_SKIP_PIXELS),yt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Ut=0,St=pt.length;Ut<St;Ut++){let xt=pt[Ut],ut=Math.floor(xt.start/4),Wt=Math.ceil(xt.count/4),Qt=ut%y.width,F=Math.floor(ut/y.width),_t=Wt,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Qt),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Qt,F,_t,nt,W,X,y.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,tt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,it),e.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function dt(P,y,W){let X=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=i.TEXTURE_3D);let Q=Zt(P,y),pt=y.source;e.bindTexture(X,P.__webglTexture,i.TEXTURE0+W);let ct=n.get(pt);if(pt.version!==ct.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let nt=me.getPrimaries(me.workingColorSpace),Mt=y.colorSpace===Er?null:me.getPrimaries(y.colorSpace),Tt=y.colorSpace===Er||nt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let it=m(y.image,!1,r.maxTextureSize);it=he(y,it);let yt=s.convert(y.format,y.colorSpace),Ut=s.convert(y.type),St=v(y.internalFormat,yt,Ut,y.normalized,y.colorSpace,y.isVideoTexture);It(X,y);let xt,ut=y.mipmaps,Wt=y.isVideoTexture!==!0,Qt=ct.__version===void 0||Q===!0,F=pt.dataReady,_t=A(y,it);if(y.isDepthTexture)St=b(y.format===os,y.type),Qt&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,St,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,St,it.width,it.height,0,yt,Ut,null));else if(y.isDataTexture)if(ut.length>0){Wt&&Qt&&e.texStorage2D(i.TEXTURE_2D,_t,St,ut[0].width,ut[0].height);for(let nt=0,Mt=ut.length;nt<Mt;nt++)xt=ut[nt],Wt?F&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,xt.width,xt.height,yt,Ut,xt.data):e.texImage2D(i.TEXTURE_2D,nt,St,xt.width,xt.height,0,yt,Ut,xt.data);y.generateMipmaps=!1}else Wt?(Qt&&e.texStorage2D(i.TEXTURE_2D,_t,St,it.width,it.height),F&&et(y,it,yt,Ut)):e.texImage2D(i.TEXTURE_2D,0,St,it.width,it.height,0,yt,Ut,it.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Wt&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,St,ut[0].width,ut[0].height,it.depth);for(let nt=0,Mt=ut.length;nt<Mt;nt++)if(xt=ut[nt],y.format!==Ri)if(yt!==null)if(Wt){if(F)if(y.layerUpdates.size>0){let Tt=np(xt.width,xt.height,y.format,y.type);for(let st of y.layerUpdates){let ht=xt.data.subarray(st*Tt/xt.data.BYTES_PER_ELEMENT,(st+1)*Tt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,st,xt.width,xt.height,1,yt,ht)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,xt.width,xt.height,it.depth,yt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,St,xt.width,xt.height,it.depth,0,xt.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,xt.width,xt.height,it.depth,yt,Ut,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,St,xt.width,xt.height,it.depth,0,yt,Ut,xt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Wt&&Qt&&e.texStorage2D(i.TEXTURE_2D,_t,St,ut[0].width,ut[0].height);for(let nt=0,Mt=ut.length;nt<Mt;nt++)xt=ut[nt],y.format!==Ri?yt!==null?Wt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,xt.width,xt.height,yt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,St,xt.width,xt.height,0,xt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?F&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,xt.width,xt.height,yt,Ut,xt.data):e.texImage2D(i.TEXTURE_2D,nt,St,xt.width,xt.height,0,yt,Ut,xt.data)}else if(y.isDataArrayTexture)if(Wt){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,St,it.width,it.height,it.depth),F)if(y.layerUpdates.size>0){let nt=np(it.width,it.height,y.format,y.type);for(let Mt of y.layerUpdates){let Tt=it.data.subarray(Mt*nt/it.data.BYTES_PER_ELEMENT,(Mt+1)*nt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Mt,it.width,it.height,1,yt,Ut,Tt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,yt,Ut,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,it.width,it.height,it.depth,0,yt,Ut,it.data);else if(y.isData3DTexture)Wt?(Qt&&e.texStorage3D(i.TEXTURE_3D,_t,St,it.width,it.height,it.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,yt,Ut,it.data)):e.texImage3D(i.TEXTURE_3D,0,St,it.width,it.height,it.depth,0,yt,Ut,it.data);else if(y.isFramebufferTexture){if(Qt)if(Wt)e.texStorage2D(i.TEXTURE_2D,_t,St,it.width,it.height);else{let nt=it.width,Mt=it.height;for(let Tt=0;Tt<_t;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,St,nt,Mt,0,yt,Ut,null),nt>>=1,Mt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),it.parentNode!==nt){nt.appendChild(it),d.add(y),nt.onpaint=Mt=>{let Tt=Mt.changedElements;for(let st of d)Tt.includes(st.image)&&(st.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,it);else{let Tt=i.RGBA,st=i.RGBA,ht=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Tt,st,ht,it)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ut.length>0){if(Wt&&Qt){let nt=Jt(ut[0]);e.texStorage2D(i.TEXTURE_2D,_t,St,nt.width,nt.height)}for(let nt=0,Mt=ut.length;nt<Mt;nt++)xt=ut[nt],Wt?F&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,yt,Ut,xt):e.texImage2D(i.TEXTURE_2D,nt,St,yt,Ut,xt);y.generateMipmaps=!1}else if(Wt){if(Qt){let nt=Jt(it);e.texStorage2D(i.TEXTURE_2D,_t,St,nt.width,nt.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Ut,it)}else e.texImage2D(i.TEXTURE_2D,0,St,yt,Ut,it);g(y)&&S(X),ct.__version=pt.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Gt(P,y,W){if(y.image.length!==6)return;let X=Zt(P,y),Q=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);let pt=n.get(Q);if(Q.version!==pt.__version||X===!0){e.activeTexture(i.TEXTURE0+W);let ct=me.getPrimaries(me.workingColorSpace),tt=y.colorSpace===Er?null:me.getPrimaries(y.colorSpace),it=y.colorSpace===Er||ct===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let yt=y.isCompressedTexture||y.image[0].isCompressedTexture,Ut=y.image[0]&&y.image[0].isDataTexture,St=[];for(let st=0;st<6;st++)!yt&&!Ut?St[st]=m(y.image[st],!0,r.maxCubemapSize):St[st]=Ut?y.image[st].image:y.image[st],St[st]=he(y,St[st]);let xt=St[0],ut=s.convert(y.format,y.colorSpace),Wt=s.convert(y.type),Qt=v(y.internalFormat,ut,Wt,y.normalized,y.colorSpace),F=y.isVideoTexture!==!0,_t=pt.__version===void 0||X===!0,nt=Q.dataReady,Mt=A(y,xt);It(i.TEXTURE_CUBE_MAP,y);let Tt;if(yt){F&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Qt,xt.width,xt.height);for(let st=0;st<6;st++){Tt=St[st].mipmaps;for(let ht=0;ht<Tt.length;ht++){let ot=Tt[ht];y.format!==Ri?ut!==null?F?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ht,0,0,ot.width,ot.height,ut,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ht,Qt,ot.width,ot.height,0,ot.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ht,0,0,ot.width,ot.height,ut,Wt,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ht,Qt,ot.width,ot.height,0,ut,Wt,ot.data)}}}else{if(Tt=y.mipmaps,F&&_t){Tt.length>0&&Mt++;let st=Jt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Qt,st.width,st.height)}for(let st=0;st<6;st++)if(Ut){F?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,St[st].width,St[st].height,ut,Wt,St[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Qt,St[st].width,St[st].height,0,ut,Wt,St[st].data);for(let ht=0;ht<Tt.length;ht++){let qt=Tt[ht].image[st].image;F?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ht+1,0,0,qt.width,qt.height,ut,Wt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ht+1,Qt,qt.width,qt.height,0,ut,Wt,qt.data)}}else{F?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ut,Wt,St[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Qt,ut,Wt,St[st]);for(let ht=0;ht<Tt.length;ht++){let ot=Tt[ht];F?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ht+1,0,0,ut,Wt,ot.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ht+1,Qt,ut,Wt,ot.image[st])}}}g(y)&&S(i.TEXTURE_CUBE_MAP),pt.__version=Q.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function vt(P,y,W,X,Q,pt){let ct=s.convert(W.format,W.colorSpace),tt=s.convert(W.type),it=v(W.internalFormat,ct,tt,W.normalized,W.colorSpace),yt=n.get(y),Ut=n.get(W);if(Ut.__renderTarget=y,!yt.__hasExternalTextures){let St=Math.max(1,y.width>>pt),xt=Math.max(1,y.height>>pt);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,pt,it,St,xt,y.depth,0,ct,tt,null):e.texImage2D(Q,pt,it,St,xt,0,ct,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Kt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Q,Ut.__webglTexture,0,Ct(y)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Q,Ut.__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(P,y,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),y.depthBuffer){let X=y.depthTexture,Q=X&&X.isDepthTexture?X.type:null,pt=b(y.stencilBuffer,Q),ct=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Kt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct(y),pt,y.width,y.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct(y),pt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,pt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,P)}else{let X=y.textures;for(let Q=0;Q<X.length;Q++){let pt=X[Q],ct=s.convert(pt.format,pt.colorSpace),tt=s.convert(pt.type),it=v(pt.internalFormat,ct,tt,pt.normalized,pt.colorSpace);Kt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct(y),it,y.width,y.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct(y),it,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,it,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(P,y,W){let X=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(y.depthTexture);if(Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),It(i.TEXTURE_CUBE_MAP,y.depthTexture);let yt=s.convert(y.depthTexture.format),Ut=s.convert(y.depthTexture.type),St;y.depthTexture.format===Qi?St=i.DEPTH_COMPONENT24:y.depthTexture.format===os&&(St=i.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,St,y.width,y.height,0,yt,Ut,null)}}else K(y.depthTexture,0);let pt=Q.__webglTexture,ct=Ct(y),tt=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,it=y.depthTexture.format===os?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Qi)Kt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,tt,pt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,it,tt,pt,0);else if(y.depthTexture.format===os)Kt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,tt,pt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,it,tt,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function j(P){let y=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let X=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=X}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(W)for(let X=0;X<6;X++)Ot(y.__webglFramebuffer[X],P,X);else{let X=P.texture.mipmaps;X&&X.length>0?Ot(y.__webglFramebuffer[0],P,0):Ot(y.__webglFramebuffer,P,0)}else if(W){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=i.createRenderbuffer(),Nt(y.__webglDepthbuffer[X],P,!1);else{let Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=y.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,pt)}}else{let X=P.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Nt(y.__webglDepthbuffer,P,!1);else{let Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,pt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(P,y,W){let X=n.get(P);y!==void 0&&vt(X.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&j(P)}function at(P){let y=P.texture,W=n.get(P),X=n.get(y);P.addEventListener("dispose",x);let Q=P.textures,pt=P.isWebGLCubeRenderTarget===!0,ct=Q.length>1;if(ct||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=y.version,o.memory.textures++),pt){W.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[tt]=[];for(let it=0;it<y.mipmaps.length;it++)W.__webglFramebuffer[tt][it]=i.createFramebuffer()}else W.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let tt=0;tt<y.mipmaps.length;tt++)W.__webglFramebuffer[tt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(ct)for(let tt=0,it=Q.length;tt<it;tt++){let yt=n.get(Q[tt]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Kt(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let tt=0;tt<Q.length;tt++){let it=Q[tt];W.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[tt]);let yt=s.convert(it.format,it.colorSpace),Ut=s.convert(it.type),St=v(it.internalFormat,yt,Ut,it.normalized,it.colorSpace,P.isXRRenderTarget===!0),xt=Ct(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,St,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,W.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Nt(W.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),It(i.TEXTURE_CUBE_MAP,y);for(let tt=0;tt<6;tt++)if(y.mipmaps&&y.mipmaps.length>0)for(let it=0;it<y.mipmaps.length;it++)vt(W.__webglFramebuffer[tt][it],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,it);else vt(W.__webglFramebuffer[tt],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);g(y)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let tt=0,it=Q.length;tt<it;tt++){let yt=Q[tt],Ut=n.get(yt),St=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(St=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,Ut.__webglTexture),It(St,yt),vt(W.__webglFramebuffer,P,yt,i.COLOR_ATTACHMENT0+tt,St,0),g(yt)&&S(St)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(tt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,X.__webglTexture),It(tt,y),y.mipmaps&&y.mipmaps.length>0)for(let it=0;it<y.mipmaps.length;it++)vt(W.__webglFramebuffer[it],P,y,i.COLOR_ATTACHMENT0,tt,it);else vt(W.__webglFramebuffer,P,y,i.COLOR_ATTACHMENT0,tt,0);g(y)&&S(tt),e.unbindTexture()}P.depthBuffer&&j(P)}function N(P){let y=P.textures;for(let W=0,X=y.length;W<X;W++){let Q=y[W];if(g(Q)){let pt=M(P),ct=n.get(Q).__webglTexture;e.bindTexture(pt,ct),S(pt),e.unbindTexture()}}}let ft=[],Vt=[];function Ft(P){if(P.samples>0){if(Kt(P)===!1){let y=P.textures,W=P.width,X=P.height,Q=i.COLOR_BUFFER_BIT,pt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(P),tt=y.length>1;if(tt)for(let yt=0;yt<y.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let it=P.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let yt=0;yt<y.length;yt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[yt]);let Ut=n.get(y[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,W,X,0,0,W,X,Q,i.NEAREST),l===!0&&(ft.length=0,Vt.length=0,ft.push(i.COLOR_ATTACHMENT0+yt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ft.push(pt),Vt.push(pt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let yt=0;yt<y.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,ct.__webglColorRenderbuffer[yt]);let Ut=n.get(y[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ct(P){return Math.min(r.maxSamples,P.samples)}function Kt(P){let y=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function U(P){let y=o.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())}function he(P,y){let W=P.colorSpace,X=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Ha&&W!==Er&&(me.getTransfer(W)===Se?(X!==Ri||Q!==ni)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",W)),y}function Jt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.getTextureUnits=L,this.setTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=R,this.setTextureCube=Z,this.rebindTextures=rt,this.setupRenderTarget=at,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Xw(i,t){function e(n,r=Er){let s,o=me.getTransfer(r);if(n===ni)return i.UNSIGNED_BYTE;if(n===Nh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wd)return i.BYTE;if(n===Xd)return i.SHORT;if(n===Ho)return i.UNSIGNED_SHORT;if(n===Dh)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===Ci)return i.FLOAT;if(n===ki)return i.HALF_FLOAT;if(n===Zd)return i.ALPHA;if(n===Jd)return i.RGB;if(n===Ri)return i.RGBA;if(n===Qi)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===Oh)return i.RED;if(n===Fh)return i.RED_INTEGER;if(n===as)return i.RG;if(n===Bh)return i.RG_INTEGER;if(n===zh)return i.RGBA_INTEGER;if(n===bl||n===wl||n===Tl||n===El)if(o===Se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===bl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===bl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===El)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kh||n===Vh||n===Gh||n===Hh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===kh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wh||n===Xh||n===Yh||n===qh||n===Zh||n===Al||n===Jh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Wh||n===Xh)return o===Se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Yh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===qh)return s.COMPRESSED_R11_EAC;if(n===Zh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Al)return s.COMPRESSED_RG11_EAC;if(n===Jh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$h||n===Kh||n===Qh||n===jh||n===tu||n===eu||n===nu||n===iu||n===ru||n===su||n===ou||n===au||n===lu||n===cu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$h)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jh)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tu)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eu)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nu)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===iu)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ru)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===su)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ou)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===au)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lu)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cu)return o===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hu||n===uu||n===fu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===hu)return o===Se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===du||n===pu||n===Cl||n===mu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===du)return s.COMPRESSED_RED_RGTC1_EXT;if(n===pu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Yw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qw=`
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

}`,Sp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new el(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new gi({vertexShader:Yw,fragmentShader:qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new Kr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mp=class extends ji{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,_=typeof XRWebGLBinding<"u",m=new Sp,g={},S=e.getContextAttributes(),M=null,v=null,b=[],A=[],w=new wt,x=null,T=null,C=new yn;C.viewport=new Fe;let D=new yn;D.viewport=new Fe;let I=[C,D],k=new Ah,L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=b[$];return et===void 0&&(et=new Oo,b[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=b[$];return et===void 0&&(et=new Oo,b[$]=et),et.getGripSpace()},this.getHand=function($){let et=b[$];return et===void 0&&(et=new Oo,b[$]=et),et.getHandSpace()};function H($){let et=A.indexOf($.inputSource);if(et===-1)return;let dt=b[et];dt!==void 0&&(dt.update($.inputSource,$.frame,c||o),dt.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",K);for(let $=0;$<b.length;$++){let et=A[$];et!==null&&(A[$]=null,b[$].disconnect(et))}L=null,z=null,m.reset();for(let $ in g)delete g[$];if(t.setRenderTarget(M),f=null,u=null,d=null,r=null,v=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),T!==null){let $=T.camera;$.fov=T.fov,$.zoom=T.zoom,$.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(M=t.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",V),r.addEventListener("inputsourceschange",K),S.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Gt=null,vt=null;S.depth&&(vt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=S.stencil?os:Qi,Gt=S.stencil?Wo:zi);let Nt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Nt),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new ei(u.textureWidth,u.textureHeight,{format:Ri,type:ni,depthTexture:new $r(u.textureWidth,u.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let dt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,dt),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ei(f.framebufferWidth,f.framebufferHeight,{format:Ri,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Zt.setContext(r),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K($){for(let et=0;et<$.removed.length;et++){let dt=$.removed[et],Gt=A.indexOf(dt);Gt>=0&&(A[Gt]=null,b[Gt].disconnect(dt))}for(let et=0;et<$.added.length;et++){let dt=$.added[et],Gt=A.indexOf(dt);if(Gt===-1){for(let Nt=0;Nt<b.length;Nt++)if(Nt>=A.length){A.push(dt),Gt=Nt;break}else if(A[Nt]===null){A[Nt]=dt,Gt=Nt;break}if(Gt===-1)break}let vt=b[Gt];vt&&vt.connect(dt)}}let G=new O,R=new O;function Z($,et,dt){G.setFromMatrixPosition(et.matrixWorld),R.setFromMatrixPosition(dt.matrixWorld);let Gt=G.distanceTo(R),vt=et.projectionMatrix.elements,Nt=dt.projectionMatrix.elements,Ot=vt[14]/(vt[10]-1),j=vt[14]/(vt[10]+1),rt=(vt[9]+1)/vt[5],at=(vt[9]-1)/vt[5],N=(vt[8]-1)/vt[0],ft=(Nt[8]+1)/Nt[0],Vt=Ot*N,Ft=Ot*ft,Ct=Gt/(-N+ft),Kt=Ct*-N;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Kt),$.translateZ(Ct),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),vt[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let U=Ot+Ct,he=j+Ct,Jt=Vt-Kt,P=Ft+(Gt-Kt),y=rt*j/he*U,W=at*j/he*U;$.projectionMatrix.makePerspective(Jt,P,y,W,U,he),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function mt($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let et=$.near,dt=$.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),k.near=D.near=C.near=et,k.far=D.far=C.far=dt,(L!==k.near||z!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,z=k.far),k.layers.mask=$.layers.mask|6,C.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let Gt=$.parent,vt=k.cameras;mt(k,Gt);for(let Nt=0;Nt<vt.length;Nt++)mt(vt[Nt],Gt);vt.length===2?Z(k,C,D):k.projectionMatrix.copy(C.projectionMatrix),T===null&&$.isPerspectiveCamera&&(T={camera:$,fov:$.fov,zoom:$.zoom}),gt($,k,Gt)};function gt($,et,dt){dt===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(dt.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=nh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function($){return g[$]};let Yt=null;function It($,et){if(h=et.getViewerPose(c||o),p=et,h!==null){let dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Gt=!1;dt.length!==k.cameras.length&&(k.cameras.length=0,Gt=!0);for(let j=0;j<dt.length;j++){let rt=dt[j],at=null;if(f!==null)at=f.getViewport(rt);else{let ft=d.getViewSubImage(u,rt);at=ft.viewport,j===0&&(t.setRenderTargetTextures(v,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(v))}let N=I[j];N===void 0&&(N=new yn,N.layers.enable(j),N.viewport=new Fe,I[j]=N),N.matrix.fromArray(rt.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(rt.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(at.x,at.y,at.width,at.height),j===0&&(k.matrix.copy(N.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Gt===!0&&k.cameras.push(N)}let vt=r.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let j=d.getDepthInformation(dt[0]);j&&j.isValid&&j.texture&&m.init(j,r.renderState)}if(vt&&vt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let j=0;j<dt.length;j++){let rt=dt[j].camera;if(rt){let at=g[rt];at||(at=new el,g[rt]=at);let N=d.getCameraImage(rt);at.sourceTexture=N}}}}for(let dt=0;dt<b.length;dt++){let Gt=A[dt],vt=b[dt];Gt!==null&&vt!==void 0&&vt.update(Gt,et,c||o)}Yt&&Yt($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),p=null}let Zt=new S_;Zt.setAnimationLoop(It),this.setAnimationLoop=function($){Yt=$},this.dispose=function(){}}},Zw=new Re,A_=new ie;A_.set(-1,0,0,0,1,0,0,0,1);function Jw(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,jd(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,S,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,S,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===bn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===bn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let S=t.get(g),M=S.envMap,v=S.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Zw.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(A_),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,S,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=M*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,S){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===bn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let S=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $w(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let A=b.program;n.uniformBlockBinding(v,A)}function c(v,b){let A=r[v.id];A===void 0&&(m(v),A=h(v),r[v.id]=A,v.addEventListener("dispose",S));let w=b.program;n.updateUBOMapping(v,w);let x=t.render.frame;s[v.id]!==x&&(u(v),s[v.id]=x)}function h(v){let b=d();v.__bindingPointIndex=b;let A=i.createBuffer(),w=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,w,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,A),A}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let b=r[v.id],A=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let x=0,T=A.length;x<T;x++){let C=A[x];if(Array.isArray(C))for(let D=0,I=C.length;D<I;D++)f(C[D],x,D,w);else f(C,x,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,b,A,w){if(_(v,b,A,w)===!0){let x=v.__offset,T=v.value;if(Array.isArray(T)){let C=0;for(let D=0;D<T.length;D++){let I=T[D],k=g(I);p(I,v.__data,C),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function p(v,b,A){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,A)}function _(v,b,A,w){let x=v.value,T=b+"_"+A;if(w[T]===void 0)return typeof x=="number"||typeof x=="boolean"?w[T]=x:ArrayBuffer.isView(x)?w[T]=x.slice():w[T]=x.clone(),!0;{let C=w[T];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return w[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(v){let b=v.uniforms,A=0,w=16;for(let T=0,C=b.length;T<C;T++){let D=Array.isArray(b[T])?b[T]:[b[T]];for(let I=0,k=D.length;I<k;I++){let L=D[I],z=Array.isArray(L.value)?L.value:[L.value];for(let H=0,V=z.length;H<V;H++){let K=z[H],G=g(K),R=A%w,Z=R%G.boundary,mt=R+Z;A+=Z,mt!==0&&w-mt<G.storage&&(A+=w-mt),L.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=A,A+=G.storage}}}let x=A%w;return x>0&&(A+=w-x),v.__size=A,v.__cache={},this}function g(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",v),b}function S(v){let b=v.target;b.removeEventListener("dispose",S);let A=o.indexOf(b.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function M(){for(let v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:M}}var Kw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),sr=null;function Qw(){return sr===null&&(sr=new $a(Kw,16,16,as,ki),sr.name="DFG_LUT",sr.minFilter=Sn,sr.magFilter=Sn,sr.wrapS=$i,sr.wrapT=$i,sr.generateMipmaps=!1,sr.needsUpdate=!0),sr}var Su=class{constructor(t={}){let{canvas:e=G0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ni}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=f,m=new Set([zh,Bh,Fh]),g=new Set([ni,zi,Ho,Wo,Nh,Uh]),S=new Uint32Array(4),M=new Int32Array(4),v=new O,b=null,A=null,w=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,I=null,k=null,L=null,z=null;this._outputColorSpace=vn;let H=0,V=0,K=null,G=-1,R=null,Z=new Fe,mt=new Fe,gt=null,Yt=new ne(0),It=0,Zt=e.width,$=e.height,et=1,dt=null,Gt=null,vt=new Fe(0,0,Zt,$),Nt=new Fe(0,0,Zt,$),Ot=!1,j=new Fo,rt=!1,at=!1,N=new Re,ft=new O,Vt=new Fe,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ct=!1;function Kt(){return K===null?et:1}let U=n;function he(E,B){return e.getContext(E,B)}let Jt,P,y,W,X,Q,pt,ct,tt,it,yt,Ut,St,xt,ut,Wt,Qt,F,_t,nt,Mt,Tt,st;try{let E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",qt,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",$t,!1),U===null){let B="webgl2";if(U=he(B,E),U===null)throw he(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ht()}catch(E){throw e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",$t,!1),te("WebGLRenderer: "+E.message),E}function ht(){Jt=new s1(U),Jt.init(),Mt=new Xw(U,Jt),P=new Jb(U,Jt,t,Mt),y=new Hw(U,Jt),P.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),k=U.createFramebuffer(),L=U.createFramebuffer(),z=U.createFramebuffer(),W=new l1(U),X=new Rw,Q=new Ww(U,Jt,y,X,P,Mt,W),pt=new r1(C),ct=new hS(U),Tt=new qb(U,ct),tt=new o1(U,ct,W,Tt),it=new h1(U,tt,ct,Tt,W),F=new c1(U,P,Q),ut=new $b(X),yt=new Cw(C,pt,Jt,P,Tt,ut),Ut=new Jw(C,X),St=new Iw,xt=new Fw(Jt),Qt=new Yb(C,pt,y,it,p,l),Wt=new Gw(C,it,P),st=new $w(U,W,P,y),_t=new Zb(U,Jt,W),nt=new a1(U,Jt,W),W.programs=yt.programs,C.capabilities=P,C.extensions=Jt,C.properties=X,C.renderLists=St,C.shadowMap=Wt,C.state=y,C.info=W}_!==ni&&(T=new f1(_,e.width,e.height,a,r,s));let ot=new Mp(C,U);this.xr=ot,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=Jt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Jt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(E){E!==void 0&&(et=E,this.setSize(Zt,$,!1))},this.getSize=function(E){return E.set(Zt,$)},this.setSize=function(E,B,J=!0){if(ot.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Zt=E,$=B,e.width=Math.floor(E*et),e.height=Math.floor(B*et),J===!0&&(e.style.width=E+"px",e.style.height=B+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(Zt*et,$*et).floor()},this.setDrawingBufferSize=function(E,B,J){Zt=E,$=B,et=J,e.width=Math.floor(E*J),e.height=Math.floor(B*J),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(_===ni){te("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Z)},this.getViewport=function(E){return E.copy(vt)},this.setViewport=function(E,B,J,Y){E.isVector4?vt.set(E.x,E.y,E.z,E.w):vt.set(E,B,J,Y),y.viewport(Z.copy(vt).multiplyScalar(et).round())},this.getScissor=function(E){return E.copy(Nt)},this.setScissor=function(E,B,J,Y){E.isVector4?Nt.set(E.x,E.y,E.z,E.w):Nt.set(E,B,J,Y),y.scissor(mt.copy(Nt).multiplyScalar(et).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(E){y.setScissorTest(Ot=E)},this.setOpaqueSort=function(E){dt=E},this.setTransparentSort=function(E){Gt=E},this.getClearColor=function(E){return E.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,J=!0){let Y=0;if(E){let q=!1;if(K!==null){let bt=K.texture.format;q=m.has(bt)}if(q){let bt=K.texture.type,Pt=g.has(bt),At=Qt.getClearColor(),zt=Qt.getClearAlpha(),Xt=At.r,se=At.g,pe=At.b;Pt?(S[0]=Xt,S[1]=se,S[2]=pe,S[3]=zt,U.clearBufferuiv(U.COLOR,0,S)):(M[0]=Xt,M[1]=se,M[2]=pe,M[3]=zt,U.clearBufferiv(U.COLOR,0,M))}else Y|=U.COLOR_BUFFER_BIT}B&&(Y|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),I=E},this.dispose=function(){e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",$t,!1),Qt.dispose(),St.dispose(),xt.dispose(),X.dispose(),pt.dispose(),it.dispose(),Tt.dispose(),st.dispose(),yt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",De),ot.removeEventListener("sessionend",Te),ge.stop()};function qt(E){E.preventDefault(),Kd("WebGLRenderer: Context Lost."),D=!0}function lt(){Kd("WebGLRenderer: Context Restored."),D=!1;let E=W.autoReset,B=Wt.enabled,J=Wt.autoUpdate,Y=Wt.needsUpdate,q=Wt.type;ht(),W.autoReset=E,Wt.enabled=B,Wt.autoUpdate=J,Wt.needsUpdate=Y,Wt.type=q}function $t(E){te("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Bt(E){let B=E.target;B.removeEventListener("dispose",Bt),ee(B)}function ee(E){$e(E),X.remove(E)}function $e(E){let B=X.get(E).programs;B!==void 0&&(B.forEach(function(J){yt.releaseProgram(J)}),E.isShaderMaterial&&yt.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,J,Y,q,bt){B===null&&(B=Ft);let Pt=q.isMesh&&q.matrixWorld.determinantAffine()<0,At=hn(E,B,J,Y,q);y.setMaterial(Y,Pt);let zt=J.index,Xt=1;if(Y.wireframe===!0){if(zt=tt.getWireframeAttribute(J),zt===void 0)return;Xt=2}let se=J.drawRange,pe=J.attributes.position,kt=se.start*Xt,ve=(se.start+se.count)*Xt;bt!==null&&(kt=Math.max(kt,bt.start*Xt),ve=Math.min(ve,(bt.start+bt.count)*Xt)),zt!==null?(kt=Math.max(kt,0),ve=Math.min(ve,zt.count)):pe!=null&&(kt=Math.max(kt,0),ve=Math.min(ve,pe.count));let Qe=ve-kt;if(Qe<0||Qe===1/0)return;Tt.setup(q,Y,At,J,zt);let Ne,Ee=_t;if(zt!==null&&(Ne=ct.get(zt),Ee=nt,Ee.setIndex(Ne)),q.isMesh)Y.wireframe===!0?(y.setLineWidth(Y.wireframeLinewidth*Kt()),Ee.setMode(U.LINES)):Ee.setMode(U.TRIANGLES);else if(q.isLine){let Tn=Y.linewidth;Tn===void 0&&(Tn=1),y.setLineWidth(Tn*Kt()),q.isLineSegments?Ee.setMode(U.LINES):q.isLineLoop?Ee.setMode(U.LINE_LOOP):Ee.setMode(U.LINE_STRIP)}else q.isPoints?Ee.setMode(U.POINTS):q.isSprite&&Ee.setMode(U.TRIANGLES);if(q.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))Ee.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Tn=q._multiDrawStarts,Rt=q._multiDrawCounts,zn=q._multiDrawCount,xe=zt?ct.get(zt).bytesPerElement:1,vi=X.get(Y).currentProgram.getUniforms();for(let Gi=0;Gi<zn;Gi++)vi.setValue(U,"_gl_DrawID",Gi),Ee.render(Tn[Gi]/xe,Rt[Gi])}else if(q.isInstancedMesh)Ee.renderInstances(kt,Qe,q.count);else if(J.isInstancedBufferGeometry){let Tn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Rt=Math.min(J.instanceCount,Tn);Ee.renderInstances(kt,Qe,Rt)}else Ee.render(kt,Qe)};function ue(E,B,J,Y){I!==null&&E.isNodeMaterial&&I.setObject(Y,E),rt===!0&&ut.setState(E,J,!1),E.transparent===!0&&E.side===ir&&E.forceSinglePass===!1?(E.side=bn,E.needsUpdate=!0,He(E,B,Y),E.side=es,E.needsUpdate=!0,He(E,B,Y),E.side=ir):He(E,B,Y)}this.compile=function(E,B,J=null){J===null&&(J=E),I!==null&&I.renderStart(E,B,J),A=xt.get(J),A.init(B),x.push(A),J.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(A.pushLight(q),q.castShadow&&A.pushShadow(q))}),E!==J&&E.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(A.pushLight(q),q.castShadow&&A.pushShadow(q))}),A.setupLights(),I!==null&&I.updateLights(A.state.lightsArray),at=this.localClippingEnabled,rt=ut.init(this.clippingPlanes,at),rt===!0&&ut.setGlobalState(this.clippingPlanes,B),I!==null&&Wt.render(A.state.shadowsArray,J,B);let Y=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let bt=q.material;if(bt)if(Array.isArray(bt))for(let Pt=0;Pt<bt.length;Pt++){let At=bt[Pt];ue(At,J,B,q),Y.add(At)}else ue(bt,J,B,q),Y.add(bt)}),A=x.pop(),I!==null&&I.renderEnd(),Y},this.compileAsync=function(E,B,J=null){let Y=this.compile(E,B,J);return new Promise(q=>{function bt(){if(Y.forEach(function(Pt){let zt=X.get(Pt).currentProgram;(zt===void 0||zt.isReady())&&Y.delete(Pt)}),Y.size===0){q(E);return}setTimeout(bt,10)}Jt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Le=null;function cn(E){Le&&Le(E)}function De(){ge.stop()}function Te(){ge.start()}let ge=new S_;ge.setAnimationLoop(cn),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(E){Le=E,ot.setAnimationLoop(E),E===null?ge.stop():ge.start()},ot.addEventListener("sessionstart",De),ot.addEventListener("sessionend",Te),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(E,B);let J=ot.enabled===!0&&ot.isPresenting===!0,Y=T!==null&&(K===null||J)&&T.begin(C,K);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(B),B=ot.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,B,K),A=xt.get(E,x.length),A.init(B),A.state.textureUnits=Q.getTextureUnits(),x.push(A),N.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(N,Fi,B.reversedDepth),at=this.localClippingEnabled,rt=ut.init(this.clippingPlanes,at),b=St.get(E,w.length),b.init(),w.push(b),ot.enabled===!0&&ot.isPresenting===!0){let Pt=C.xr.getDepthSensingMesh();Pt!==null&&Fn(Pt,B,-1/0,C.sortObjects)}Fn(E,B,0,C.sortObjects),b.finish(),I!==null&&I.updateLights(A.state.lightsArray),C.sortObjects===!0&&b.sort(dt,Gt),Ct=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ct&&Qt.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&ut.beginShadows();let q=A.state.shadowsArray;if(Wt.render(q,E,B),rt===!0&&ut.endShadows(),(Y&&T.hasRenderPass())===!1){let Pt=b.opaque,At=b.transmissive;if(A.setupLights(),B.isArrayCamera){let zt=B.cameras;if(At.length>0)for(let Xt=0,se=zt.length;Xt<se;Xt++){let pe=zt[Xt];wn(Pt,At,E,pe)}Ct&&Qt.render(E);for(let Xt=0,se=zt.length;Xt<se;Xt++){let pe=zt[Xt];Pe(b,E,pe,pe.viewport)}}else At.length>0&&wn(Pt,At,E,B),Ct&&Qt.render(E),Pe(b,E,B)}K!==null&&V===0&&(Q.updateMultisampleRenderTarget(K),Q.updateRenderTargetMipmap(K)),Y&&T.end(C),E.isScene===!0&&E.onAfterRender(C,E,B),Tt.resetDefaultState(),G=-1,R=null,x.pop(),x.length>0?(A=x[x.length-1],Q.setTextureUnits(A.state.textureUnits),rt===!0&&ut.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?b=w[w.length-1]:b=null,I!==null&&I.renderEnd()};function Fn(E,B,J,Y){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLightProbeGrid)A.pushLightProbeGrid(E);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(j)){Y&&Vt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(N);let Pt=it.update(E),At=E.material;At.visible&&b.push(E,Pt,At,J,Vt.z,null,B)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(j))){let Pt=it.update(E),At=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Vt.copy(E.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Vt.copy(Pt.boundingSphere.center)),Vt.applyMatrix4(E.matrixWorld).applyMatrix4(N)),Array.isArray(At)){let zt=Pt.groups;for(let Xt=0,se=zt.length;Xt<se;Xt++){let pe=zt[Xt],kt=At[pe.materialIndex];kt&&kt.visible&&b.push(E,Pt,kt,J,Vt.z,pe,B)}}else At.visible&&b.push(E,Pt,At,J,Vt.z,null,B)}}let bt=E.children;for(let Pt=0,At=bt.length;Pt<At;Pt++)Fn(bt[Pt],B,J,Y)}function Pe(E,B,J,Y){let{opaque:q,transmissive:bt,transparent:Pt}=E;A.setupLightsView(J),rt===!0&&ut.setGlobalState(C.clippingPlanes,J),Y&&y.viewport(Z.copy(Y)),q.length>0&&Bn(q,B,J),bt.length>0&&Bn(bt,B,J),Pt.length>0&&Bn(Pt,B,J),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function wn(E,B,J,Y){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[Y.id]===void 0){let kt=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[Y.id]=new ei(1,1,{generateMipmaps:!0,type:kt?ki:ni,minFilter:ss,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}let bt=A.state.transmissionRenderTarget[Y.id],Pt=Y.viewport||Z;bt.setSize(Pt.z*C.transmissionResolutionScale,Pt.w*C.transmissionResolutionScale);let At=C.getRenderTarget(),zt=C.getActiveCubeFace(),Xt=C.getActiveMipmapLevel();C.setRenderTarget(bt),C.getClearColor(Yt),It=C.getClearAlpha(),It<1&&C.setClearColor(16777215,.5),C.clear(),Ct&&Qt.render(J);let se=C.toneMapping;C.toneMapping=Bi;let pe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),A.setupLightsView(Y),rt===!0&&ut.setGlobalState(C.clippingPlanes,Y),Bn(E,J,Y),Q.updateMultisampleRenderTarget(bt),Q.updateRenderTargetMipmap(bt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let ve=0,Qe=B.length;ve<Qe;ve++){let Ne=B[ve],{object:Ee,geometry:Tn,material:Rt,group:zn}=Ne;if(Rt.side===ir&&Ee.layers.test(Y.layers)){let xe=Rt.side;Rt.side=bn,Rt.needsUpdate=!0,Ke(Ee,J,Y,Tn,Rt,zn),Rt.side=xe,Rt.needsUpdate=!0,kt=!0}}kt===!0&&(Q.updateMultisampleRenderTarget(bt),Q.updateRenderTargetMipmap(bt))}C.setRenderTarget(At,zt,Xt),C.setClearColor(Yt,It),pe!==void 0&&(Y.viewport=pe),C.toneMapping=se}function Bn(E,B,J){let Y=B.isScene===!0?B.overrideMaterial:null;for(let q=0,bt=E.length;q<bt;q++){let Pt=E[q],{object:At,geometry:zt,group:Xt}=Pt,se=Pt.material;se.allowOverride===!0&&Y!==null&&(se=Y),At.layers.test(J.layers)&&Ke(At,B,J,zt,se,Xt)}}function Ke(E,B,J,Y,q,bt){I!==null&&q.isNodeMaterial&&I.setObject(E,q),E.onBeforeRender(C,B,J,Y,q,bt),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(C,B,J,Y,E,bt),q.transparent===!0&&q.side===ir&&q.forceSinglePass===!1?(q.side=bn,q.needsUpdate=!0,C.renderBufferDirect(J,B,Y,q,E,bt),q.side=es,q.needsUpdate=!0,C.renderBufferDirect(J,B,Y,q,E,bt),q.side=ir):C.renderBufferDirect(J,B,Y,q,E,bt),E.onAfterRender(C,B,J,Y,q,bt)}function He(E,B,J){B.isScene!==!0&&(B=Ft);let Y=X.get(E),q=A.state.lights,bt=A.state.shadowsArray,Pt=q.state.version,At=yt.getParameters(E,q.state,bt,B,J,A.state.lightProbeGridArray),zt=yt.getProgramCacheKey(At),Xt=Y.programs;Y.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,Y.fog=B.fog;let se=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Y.envMap=pt.get(E.envMap||Y.environment,se),Y.envMapRotation=Y.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Xt===void 0&&(E.addEventListener("dispose",Bt),Xt=new Map,Y.programs=Xt);let pe=Xt.get(zt);if(pe!==void 0){if(Y.currentProgram===pe&&Y.lightsStateVersion===Pt)return Vi(E,At),pe}else At.uniforms=yt.getUniforms(E),I!==null&&E.isNodeMaterial&&I.build(E,J,At),E.onBeforeCompile(At,C),pe=yt.acquireProgram(At,zt),Xt.set(zt,pe),Y.uniforms=At.uniforms;let kt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(kt.clippingPlanes=ut.uniform),Vi(E,At),Y.needsLights=xi(E),Y.lightsStateVersion=Pt,Y.needsLights&&(kt.ambientLightColor.value=q.state.ambient,kt.lightProbe.value=q.state.probe,kt.sunLights.value=q.state.sun,kt.sunLightShadows.value=q.state.sunShadow,kt.directionalLights.value=q.state.directional,kt.directionalLightShadows.value=q.state.directionalShadow,kt.spotLights.value=q.state.spot,kt.spotLightShadows.value=q.state.spotShadow,kt.rectAreaLights.value=q.state.rectArea,kt.ltc_1.value=q.state.rectAreaLTC1,kt.ltc_2.value=q.state.rectAreaLTC2,kt.pointLights.value=q.state.point,kt.pointLightShadows.value=q.state.pointShadow,kt.hemisphereLights.value=q.state.hemi,kt.sunShadowMatrix.value=q.state.sunShadowMatrix,kt.sunShadowCascade.value=q.state.sunShadowCascade,kt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,kt.spotLightMatrix.value=q.state.spotLightMatrix,kt.spotLightMap.value=q.state.spotLightMap,kt.pointShadowMatrix.value=q.state.pointShadowMatrix),Y.lightProbeGrid=A.state.lightProbeGridArray.length>0,Y.currentProgram=pe,Y.uniformsList=null,pe}function rn(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=Zo.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Vi(E,B){let J=X.get(E);J.outputColorSpace=B.outputColorSpace,J.batching=B.batching,J.batchingColor=B.batchingColor,J.instancing=B.instancing,J.instancingColor=B.instancingColor,J.instancingMorph=B.instancingMorph,J.skinning=B.skinning,J.morphTargets=B.morphTargets,J.morphNormals=B.morphNormals,J.morphColors=B.morphColors,J.morphTargetsCount=B.morphTargetsCount,J.numClippingPlanes=B.numClippingPlanes,J.numIntersection=B.numClipIntersection,J.vertexAlphas=B.vertexAlphas,J.vertexTangents=B.vertexTangents,J.toneMapping=B.toneMapping}function Xs(E,B){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;v.setFromMatrixPosition(B.matrixWorld);for(let J=0,Y=E.length;J<Y;J++){let q=E[J];if(q.texture!==null&&q.boundingBox.containsPoint(v))return q}return null}function hn(E,B,J,Y,q){B.isScene!==!0&&(B=Ft),Q.resetTextureUnits();let bt=B.fog,Pt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?B.environment:null,At=K===null?C.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:me.workingColorSpace,zt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Xt=pt.get(Y.envMap||Pt,zt),se=Y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pe=!!J.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),kt=!!J.morphAttributes.position,ve=!!J.morphAttributes.normal,Qe=!!J.morphAttributes.color,Ne=Bi;Y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ne=C.toneMapping);let Ee=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Tn=Ee!==void 0?Ee.length:0,Rt=X.get(Y),zn=A.state.lights;if(rt===!0&&(at===!0||E!==R)){let Ie=E===R&&Y.id===G;ut.setState(Y,E,Ie)}let xe=!1;Y.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==zn.state.version||Rt.outputColorSpace!==At||q.isBatchedMesh&&Rt.batching===!1||!q.isBatchedMesh&&Rt.batching===!0||q.isBatchedMesh&&Rt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Rt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Rt.instancing===!1||!q.isInstancedMesh&&Rt.instancing===!0||q.isSkinnedMesh&&Rt.skinning===!1||!q.isSkinnedMesh&&Rt.skinning===!0||q.isInstancedMesh&&Rt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Rt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Rt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Rt.instancingMorph===!1&&q.morphTexture!==null||Rt.envMap!==Xt||Y.fog===!0&&Rt.fog!==bt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==ut.numPlanes||Rt.numIntersection!==ut.numIntersection)||Rt.vertexAlphas!==se||Rt.vertexTangents!==pe||Rt.morphTargets!==kt||Rt.morphNormals!==ve||Rt.morphColors!==Qe||Rt.toneMapping!==Ne||Rt.morphTargetsCount!==Tn||!!Rt.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,Rt.__version=Y.version);let vi=Rt.currentProgram;xe===!0&&(vi=He(Y,B,q),I&&Y.isNodeMaterial&&I.onUpdateProgram(Y,vi,Rt));let Gi=!1,Ar=!1,qs=!1,we=vi.getUniforms(),Ze=Rt.uniforms;if(y.useProgram(vi.program)&&(Gi=!0,Ar=!0,qs=!0),Y.id!==G&&(G=Y.id,Ar=!0),Rt.needsLights){let Ie=Xs(A.state.lightProbeGridArray,q);Rt.lightProbeGrid!==Ie&&(Rt.lightProbeGrid=Ie,Ar=!0)}if(Gi||R!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),we.setValue(U,"projectionMatrix",E.projectionMatrix),we.setValue(U,"viewMatrix",E.matrixWorldInverse);let Rr=we.map.cameraPosition;Rr!==void 0&&Rr.setValue(U,ft.setFromMatrixPosition(E.matrixWorld)),P.logarithmicDepthBuffer&&we.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&we.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),R!==E&&(R=E,Ar=!0,qs=!0)}if(Rt.needsLights&&(zn.state.sunShadowMap.length>0&&we.setValue(U,"sunShadowMap",zn.state.sunShadowMap,Q),zn.state.directionalShadowMap.length>0&&we.setValue(U,"directionalShadowMap",zn.state.directionalShadowMap,Q),zn.state.spotShadowMap.length>0&&we.setValue(U,"spotShadowMap",zn.state.spotShadowMap,Q),zn.state.pointShadowMap.length>0&&we.setValue(U,"pointShadowMap",zn.state.pointShadowMap,Q)),q.isSkinnedMesh){we.setOptional(U,q,"bindMatrix"),we.setOptional(U,q,"bindMatrixInverse");let Ie=q.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),we.setValue(U,"boneTexture",Ie.boneTexture,Q))}q.isBatchedMesh&&(we.setOptional(U,q,"batchingTexture"),we.setValue(U,"batchingTexture",q._matricesTexture,Q),we.setOptional(U,q,"batchingIdTexture"),we.setValue(U,"batchingIdTexture",q._indirectTexture,Q),we.setOptional(U,q,"batchingColorTexture"),q._colorsTexture!==null&&we.setValue(U,"batchingColorTexture",q._colorsTexture,Q));let Cr=J.morphAttributes;if((Cr.position!==void 0||Cr.normal!==void 0||Cr.color!==void 0)&&F.update(q,J,vi),(Ar||Rt.receiveShadow!==q.receiveShadow)&&(Rt.receiveShadow=q.receiveShadow,we.setValue(U,"receiveShadow",q.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&B.environment!==null&&(Ze.envMapIntensity.value=B.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=Qw()),Ar){if(we.setValue(U,"toneMappingExposure",C.toneMappingExposure),Rt.needsLights&&qe(Ze,qs),bt&&Y.fog===!0&&Ut.refreshFogUniforms(Ze,bt),Ut.refreshMaterialUniforms(Ze,Y,et,$,A.state.transmissionRenderTarget[E.id]),Rt.needsLights&&Rt.lightProbeGrid){let Ie=Rt.lightProbeGrid;Ze.probesSH.value=Ie.texture,Ze.probesMin.value.copy(Ie.boundingBox.min),Ze.probesMax.value.copy(Ie.boundingBox.max),Ze.probesResolution.value.copy(Ie.resolution)}Zo.upload(U,rn(Rt),Ze,Q)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Zo.upload(U,rn(Rt),Ze,Q),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&we.setValue(U,"center",q.center),we.setValue(U,"modelViewMatrix",q.modelViewMatrix),we.setValue(U,"normalMatrix",q.normalMatrix),we.setValue(U,"modelMatrix",q.matrixWorld),Y.uniformsGroups!==void 0){let Ie=Y.uniformsGroups;for(let Rr=0,Zs=Ie.length;Rr<Zs;Rr++){let Cp=Ie[Rr];st.update(Cp,vi),st.bind(Cp,vi)}}return vi}function qe(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.sunLights.needsUpdate=B,E.sunLightShadows.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function xi(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(E,B,J){let Y=X.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),X.get(E.texture).__webglTexture=B,X.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:J,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){let J=X.get(E);J.__webglFramebuffer=B,J.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,J=0){K=E,H=B,V=J;let Y=null,q=!1,bt=!1;if(E){let At=X.get(E);if(At.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(U.FRAMEBUFFER,At.__webglFramebuffer),Z.copy(E.viewport),mt.copy(E.scissor),gt=E.scissorTest,y.viewport(Z),y.scissor(mt),y.setScissorTest(gt),G=-1;return}else if(At.__webglFramebuffer===void 0)Q.setupRenderTarget(E);else if(At.__hasExternalTextures)Q.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let se=E.depthTexture;if(At.__boundDepthTexture!==se){if(se!==null&&X.has(se)&&(E.width!==se.image.width||E.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(E)}}let zt=E.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(bt=!0);let Xt=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xt[B])?Y=Xt[B][J]:Y=Xt[B],q=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?Y=X.get(E).__webglMultisampledFramebuffer:Array.isArray(Xt)?Y=Xt[J]:Y=Xt,Z.copy(E.viewport),mt.copy(E.scissor),gt=E.scissorTest}else Z.copy(vt).multiplyScalar(et).floor(),mt.copy(Nt).multiplyScalar(et).floor(),gt=Ot;if(J!==0&&(Y=k),y.bindFramebuffer(U.FRAMEBUFFER,Y)&&y.drawBuffers(E,Y),y.viewport(Z),y.scissor(mt),y.setScissorTest(gt),q){let At=X.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,At.__webglTexture,J)}else if(bt){let At=B;for(let zt=0;zt<E.textures.length;zt++){let Xt=X.get(E.textures[zt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+zt,Xt.__webglTexture,J,At)}}else if(E!==null&&J!==0){let At=X.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,At.__webglTexture,J)}G=-1};function Ys(E){let B=X.get(E);return(B.__readFormat!==E.format||B.__readType!==E.type)&&(B.__readFormat=E.format,B.__readType=E.type,B.__formatReadable=P.textureFormatReadable(E.format),B.__typeReadable=P.textureTypeReadable(E.type)),B}this.readRenderTargetPixels=function(E,B,J,Y,q,bt,Pt,At=0){if(!(E&&E.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pt!==void 0&&(zt=zt[Pt]),zt){y.bindFramebuffer(U.FRAMEBUFFER,zt);try{let Xt=E.textures[At],se=Xt.format,pe=Xt.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+At);let kt=Ys(Xt);if(kt.__formatReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Y&&J>=0&&J<=E.height-q&&U.readPixels(B,J,Y,q,Mt.convert(se),Mt.convert(pe),bt)}finally{let Xt=K!==null?X.get(K).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(E,B,J,Y,q,bt,Pt,At=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pt!==void 0&&(zt=zt[Pt]),zt)if(B>=0&&B<=E.width-Y&&J>=0&&J<=E.height-q){y.bindFramebuffer(U.FRAMEBUFFER,zt);let Xt=E.textures[At],se=Xt.format,pe=Xt.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+At);let kt=Ys(Xt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ve),U.bufferData(U.PIXEL_PACK_BUFFER,bt.byteLength,U.STREAM_READ),U.readPixels(B,J,Y,q,Mt.convert(se),Mt.convert(pe),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Qe=K!==null?X.get(K).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Qe);let Ne=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await W0(U,Ne,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ve),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,bt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ve),U.deleteSync(Ne),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,J=0){let Y=Math.pow(2,-J),q=Math.floor(E.image.width*Y),bt=Math.floor(E.image.height*Y),Pt=B!==null?B.x:0,At=B!==null?B.y:0;Q.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,J,0,0,Pt,At,q,bt),y.unbindTexture()},this.copyTextureToTexture=function(E,B,J=null,Y=null,q=0,bt=0){let Pt,At,zt,Xt,se,pe,kt,ve,Qe,Ne=E.isCompressedTexture?E.mipmaps[bt]:E.image;if(J!==null)Pt=J.max.x-J.min.x,At=J.max.y-J.min.y,zt=J.isBox3?J.max.z-J.min.z:1,Xt=J.min.x,se=J.min.y,pe=J.isBox3?J.min.z:0;else{let Ze=Math.pow(2,-q);Pt=Math.floor(Ne.width*Ze),At=Math.floor(Ne.height*Ze),E.isDataArrayTexture?zt=Ne.depth:E.isData3DTexture?zt=Math.floor(Ne.depth*Ze):zt=1,Xt=0,se=0,pe=0}Y!==null?(kt=Y.x,ve=Y.y,Qe=Y.z):(kt=0,ve=0,Qe=0);let Ee=Mt.convert(B.format),Tn=Mt.convert(B.type),Rt;B.isData3DTexture?(Q.setTexture3D(B,0),Rt=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Q.setTexture2DArray(B,0),Rt=U.TEXTURE_2D_ARRAY):(Q.setTexture2D(B,0),Rt=U.TEXTURE_2D),y.activeTexture(U.TEXTURE0),y.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),y.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),y.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let zn=y.getParameter(U.UNPACK_ROW_LENGTH),xe=y.getParameter(U.UNPACK_IMAGE_HEIGHT),vi=y.getParameter(U.UNPACK_SKIP_PIXELS),Gi=y.getParameter(U.UNPACK_SKIP_ROWS),Ar=y.getParameter(U.UNPACK_SKIP_IMAGES);y.pixelStorei(U.UNPACK_ROW_LENGTH,Ne.width),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ne.height),y.pixelStorei(U.UNPACK_SKIP_PIXELS,Xt),y.pixelStorei(U.UNPACK_SKIP_ROWS,se),y.pixelStorei(U.UNPACK_SKIP_IMAGES,pe);let qs=E.isDataArrayTexture||E.isData3DTexture,we=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){let Ze=X.get(E),Cr=X.get(B),Ie=X.get(Ze.__renderTarget),Rr=X.get(Cr.__renderTarget);y.bindFramebuffer(U.READ_FRAMEBUFFER,Ie.__webglFramebuffer),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let Zs=0;Zs<zt;Zs++)qs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(E).__webglTexture,q,pe+Zs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(B).__webglTexture,bt,Qe+Zs)),U.blitFramebuffer(Xt,se,Pt,At,kt,ve,Pt,At,U.DEPTH_BUFFER_BIT,U.NEAREST);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||X.has(E)){let Ze=X.get(E),Cr=X.get(B);y.bindFramebuffer(U.READ_FRAMEBUFFER,L),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let Ie=0;Ie<zt;Ie++)qs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ze.__webglTexture,q,pe+Ie):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ze.__webglTexture,q),we?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Cr.__webglTexture,bt,Qe+Ie):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Cr.__webglTexture,bt),q!==0?U.blitFramebuffer(Xt,se,Pt,At,kt,ve,Pt,At,U.COLOR_BUFFER_BIT,U.NEAREST):we?U.copyTexSubImage3D(Rt,bt,kt,ve,Qe+Ie,Xt,se,Pt,At):U.copyTexSubImage2D(Rt,bt,kt,ve,Xt,se,Pt,At);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else we?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Rt,bt,kt,ve,Qe,Pt,At,zt,Ee,Tn,Ne.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Rt,bt,kt,ve,Qe,Pt,At,zt,Ee,Ne.data):U.texSubImage3D(Rt,bt,kt,ve,Qe,Pt,At,zt,Ee,Tn,Ne):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,bt,kt,ve,Pt,At,Ee,Tn,Ne.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,bt,kt,ve,Ne.width,Ne.height,Ee,Ne.data):U.texSubImage2D(U.TEXTURE_2D,bt,kt,ve,Pt,At,Ee,Tn,Ne);y.pixelStorei(U.UNPACK_ROW_LENGTH,zn),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xe),y.pixelStorei(U.UNPACK_SKIP_PIXELS,vi),y.pixelStorei(U.UNPACK_SKIP_ROWS,Gi),y.pixelStorei(U.UNPACK_SKIP_IMAGES,Ar),bt===0&&B.generateMipmaps&&U.generateMipmap(Rt),y.unbindTexture()},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){H=0,V=0,K=null,y.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var wu=class extends Ns{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new nr;t.deleteAttribute("uv");let e=new Tr({side:bn}),n=new Tr,r=new xl(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new re(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Qa(t,n,6),a=new Mn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new re(t,Ko(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new re(t,Ko(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new re(t,Ko(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new re(t,Ko(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new re(t,Ko(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new re(t,Ko(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ko(i){return new dl({color:0,emissive:16777215,emissiveIntensity:i})}var jw='-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',wp='ui-monospace, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',Dt={bg:"#0b0d12",panel:"#11141b",panel2:"#161a23",line:"rgba(255,255,255,0.07)",ink:"#e8eaef",muted:"#8a90a0",faint:"#5a6070",accent:"#3d9bff",green:"#3fcf8e",kw:"#cf8e6d",fn:"#56a8f5",str:"#6aab73",cm:"#7a7e85",prop:"#c77dbb",type:"#bcbec4"};function Be(i,t,e,n,r,s){let o=Math.min(s,n/2,r/2);i.beginPath(),i.moveTo(t+o,e),i.arcTo(t+n,e,t+n,e+r,o),i.arcTo(t+n,e+r,t,e+r,o),i.arcTo(t,e+r,t,e,o),i.arcTo(t,e,t+n,e,o),i.closePath()}function Me(i,t,e=400,n=jw){i.font=`${e} ${t}px ${n}`}function Tp(i,t,e,n,r){i.save(),i.strokeStyle=r,i.lineWidth=n*.16,i.lineCap="round",i.lineJoin="round",i.beginPath(),i.moveTo(t-n*.32,e),i.lineTo(t-n*.08,e+n*.24),i.lineTo(t+n*.34,e-n*.24),i.stroke(),i.restore()}function tT(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function Tu(i,t,e){let n=tT(i,t),r=n.getContext("2d"),s="";return{canvas:n,draw(o){let a=JSON.stringify(o);return a===s?!1:(s=a,r.save(),e(r,i,t,o),r.restore(),!0)}}}var R_=[[["package ","kw"],["org.sshorg.shared","type"]],[],[["interface ","kw"],["Product","type"],[" {","type"]],[["    val ","kw"],["platform","prop"],[": Platform","type"]],[["    fun ","kw"],["render","fn"],["(): Screen","type"]],[["}","type"]],[],[["fun ","kw"],["build","fn"],["() = ","type"],["product","fn"],[" {","type"]],[["    ","type"],["android","fn"],["()","type"]],[["    ","type"],["ios","fn"],["()","type"]],[["    ","type"],["desktop","fn"],["()","type"]],[["    ","type"],["web","fn"],["()","type"]],[["}","type"]],[],[["// one idea \xB7 many surfaces","cm"]],[["val ","kw"],["future","prop"],[" = ","type"],['"shared"',"str"]]],eT=R_.reduce((i,t)=>i+t.reduce((e,[n])=>e+n.length,0)+1,0),nT=[[0,"sshorg","dir"],[1,"shared","dir"],[2,"commonMain","dir"],[3,"Product.kt","kt",!0],[3,"Platform.kt","kt"],[2,"androidMain","dir-closed"],[2,"iosMain","dir-closed"],[1,"androidApp","dir-closed"],[1,"iosApp","dir-closed"],[1,"desktopApp","dir-closed"],[1,"build.gradle.kts","gradle"]];function P_(){return Tu(1600,1032,(i,t,e,{typing:n,caret:r})=>{i.fillStyle=Dt.bg,i.fillRect(0,0,t,e),i.fillStyle="#12151c",i.fillRect(0,0,t,58),["#ff5f57","#febc2e","#28c840"].forEach((p,_)=>{i.fillStyle=p,i.beginPath(),i.arc(32+_*26,29,7.5,0,Math.PI*2),i.fill()}),Me(i,19,500),i.fillStyle=Dt.muted,i.textAlign="center",i.fillText("sshorg \u2014 shared/src/commonMain/kotlin/Product.kt",t/2,36),i.textAlign="left",i.fillStyle=Dt.line,i.fillRect(0,58,t,1);let s=310;i.fillStyle="#0e1117",i.fillRect(0,59,s,e-59-38),Me(i,14,700),i.fillStyle=Dt.faint,i.fillText("PROJECT",28,98),nT.forEach(([p,_,m,g],S)=>{let M=140+S*40;g&&(i.fillStyle="rgba(61,155,255,0.16)",Be(i,12,M-26,s-24,36,8),i.fill());let v=28+p*22;i.fillStyle=m.startsWith("dir")?"#7f8aa3":m==="kt"?"#a97bff":"#5fb3a1",Be(i,v,M-16,16,14,3),i.fill(),Me(i,18,g?600:400),i.fillStyle=g?Dt.ink:"#aeb4c2",i.fillText(_,v+26,M-3)}),i.fillStyle=Dt.line,i.fillRect(s,59,1,e-59-38);let o=s+1,a=360,l=t-o-a;i.fillStyle="#0e1117",i.fillRect(o,59,l,50),i.fillStyle=Dt.bg,i.fillRect(o,59,200,50),i.fillStyle=Dt.accent,i.fillRect(o,59,200,3),Me(i,18,500),i.fillStyle=Dt.ink,i.fillText("Product.kt",o+26,91),i.fillStyle=Dt.muted,i.fillText("Platform.kt",o+226,91),i.fillStyle=Dt.line,i.fillRect(o,109,l,1);let c=Math.floor(n*eT),h=null,d=44;Me(i,23,400,wp);let u=i.measureText("M").width;R_.forEach((p,_)=>{let m=160+_*d;i.fillStyle=Dt.faint,i.textAlign="right",i.fillText(String(_+1),o+60,m),i.textAlign="left";let g=o+92;for(let[S,M]of p){if(c<=0)break;let v=S.slice(0,c);c-=v.length,i.fillStyle=Dt[M],i.fillText(v,g,m),g+=v.length*u}c>0?c-=1:h===null&&(h=[g,m])}),h&&r&&(i.fillStyle=Dt.accent,i.fillRect(h[0]+1,h[1]-22,3,28));let f=t-a;i.fillStyle="#0e1117",i.fillRect(f,59,a,e-59-38),i.fillStyle=Dt.line,i.fillRect(f,59,1,e-59-38),Me(i,14,700),i.fillStyle=Dt.faint,i.fillText("TARGETS",f+28,98),["Android","iOS","Desktop","Web"].forEach((p,_)=>{let m=132+_*74,g=n>.55+_*.1;i.fillStyle=Dt.panel2,Be(i,f+20,m,a-40,58,12),i.fill(),Me(i,20,600),i.fillStyle=Dt.ink,i.fillText(p,f+44,m+37),g?(i.fillStyle="rgba(63,207,142,0.16)",i.beginPath(),i.arc(f+a-62,m+29,16,0,Math.PI*2),i.fill(),Tp(i,f+a-62,m+29,18,Dt.green)):(i.strokeStyle=Dt.faint,i.lineWidth=2,i.beginPath(),i.arc(f+a-62,m+29,10,0,Math.PI*2),i.stroke())}),Me(i,14,700),i.fillStyle=Dt.faint,i.fillText("BUILD",f+28,460),i.fillStyle=Dt.panel2,Be(i,f+28,478,a-56,10,5),i.fill(),i.fillStyle=n>=1?Dt.green:Dt.accent,Be(i,f+28,478,Math.max(10,(a-56)*n),10,5),i.fill(),Me(i,17,500),i.fillStyle=Dt.muted,i.fillText(n>=1?"All targets up to date":"Compiling shared module\u2026",f+28,520),i.fillStyle="#12151c",i.fillRect(0,e-38,t,38),Me(i,16,500),i.fillStyle=Dt.muted,i.fillText("main",28,e-13),i.fillText("Kotlin Multiplatform",110,e-13),i.textAlign="right",i.fillText("UTF-8   LF   4 spaces",t-28,e-13),i.textAlign="left"})}function I_(){return Tu(700,1472,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#0d1018"),n.addColorStop(1,"#0a0c12"),i.fillStyle=n,i.fillRect(0,0,t,e),Me(i,30,600),i.fillStyle=Dt.ink,i.fillText("9:41",64,72),[0,1,2,3].forEach(p=>{i.fillRect(t-170+p*12,70-(p+1)*6,8,(p+1)*6)}),Be(i,t-104,50,50,24,7),i.lineWidth=2.5,i.strokeStyle=Dt.ink,i.stroke(),Be(i,t-100,54,36,16,4),i.fill(),i.fillStyle="#000",Be(i,t/2-96,30,192,56,28),i.fill(),Me(i,26,500),i.fillStyle=Dt.muted,i.fillText("Good evening",52,176),Me(i,58,700),i.fillStyle=Dt.ink,i.fillText("Your product",52,244),i.fillStyle="rgba(61,155,255,0.16)",Be(i,t-164,146,112,42,21),i.fill(),Me(i,20,700),i.fillStyle=Dt.accent,i.textAlign="center",i.fillText("DEMO",t-108,174),i.textAlign="left";let r=40,s=290,o=t-80,a=380,l=i.createLinearGradient(r,s,r+o,s+a);l.addColorStop(0,"#1c2c4d"),l.addColorStop(1,"#121a2c"),i.fillStyle=l,Be(i,r,s,o,a,40),i.fill(),Me(i,24,500),i.fillStyle="#a9b6d3",i.fillText("Weekly activity",r+36,s+62),Me(i,64,700),i.fillStyle=Dt.ink,i.fillText("Growing",r+36,s+140);let c=[.62,.55,.6,.44,.48,.34,.38,.22,.26,.14],h=s+180,d=160;i.beginPath(),c.forEach((p,_)=>{let m=r+36+_/(c.length-1)*(o-72),g=h+p*d;if(_===0)i.moveTo(m,g);else{let S=r+36+(_-1)/(c.length-1)*(o-72),M=h+c[_-1]*d;i.bezierCurveTo((S+m)/2,M,(S+m)/2,g,m,g)}}),i.strokeStyle="#6fb6ff",i.lineWidth=6,i.lineCap="round",i.stroke(),i.lineTo(r+o-36,h+d),i.lineTo(r+36,h+d),i.closePath();let u=i.createLinearGradient(0,h,0,h+d);u.addColorStop(0,"rgba(111,182,255,0.35)"),u.addColorStop(1,"rgba(111,182,255,0)"),i.fillStyle=u,i.fill(),[["Compose UI","Native feel on Android & iOS","#3d9bff"],["Shared domain","One Kotlin core","#a97bff"],["Realtime","Synced across devices","#3fcf8e"]].forEach(([p,_,m],g)=>{let S=712+g*162;i.fillStyle=Dt.panel2,Be(i,40,S,t-80,140,32),i.fill(),i.fillStyle=m,i.globalAlpha=.18,i.beginPath(),i.arc(116,S+70,38,0,Math.PI*2),i.fill(),i.globalAlpha=1,i.beginPath(),i.arc(116,S+70,13,0,Math.PI*2),i.fill(),Me(i,32,650),i.fillStyle=Dt.ink,i.fillText(p,180,S+62),Me(i,24,400),i.fillStyle=Dt.muted,i.fillText(_,180,S+100),i.strokeStyle=Dt.faint,i.lineWidth=4,i.beginPath(),i.moveTo(t-92,S+56),i.lineTo(t-78,S+70),i.lineTo(t-92,S+84),i.stroke()}),i.fillStyle="#10131a",i.fillRect(0,e-170,t,170),i.fillStyle=Dt.line,i.fillRect(0,e-170,t,2),[0,1,2,3].forEach(p=>{let _=100+p*((t-200)/3);i.fillStyle=p===0?Dt.accent:"#4a5060",Be(i,_-22,e-132,44,44,12),i.fill()}),i.fillStyle="#d7dae2",Be(i,t/2-110,e-34,220,10,5),i.fill()})}var bp=[{id:"shared",label:"shared \xB7 KMP",x:.5,y:.54,main:!0},{id:"android",label:"Android",x:.2,y:.33,color:"#3fcf8e"},{id:"ios",label:"iOS",x:.8,y:.33,color:"#e8eaef"},{id:"desktop",label:"Desktop",x:.17,y:.8,color:"#a97bff"},{id:"web",label:"Web",x:.83,y:.8,color:"#f0b35a"},{id:"ai",label:"AI agents",x:.5,y:.2,color:"#ff7eb6"},{id:"ci",label:"CI/CD",x:.5,y:.9,color:"#3d9bff"}];function L_(){return Tu(1480,1050,(i,t,e,{links:n})=>{i.fillStyle=Dt.bg,i.fillRect(0,0,t,e),i.fillStyle="rgba(255,255,255,0.05)";for(let a=30;a<t;a+=40)for(let l=120;l<e;l+=40)i.fillRect(a,l,2,2);Me(i,26,650),i.fillStyle=Dt.ink,i.fillText("Architecture",48,70),Me(i,20,400),i.fillStyle=Dt.muted,i.fillText("compose-graph \xB7 one shared core",230,70),i.fillStyle="rgba(63,207,142,0.14)",Be(i,t-150,42,102,40,20),i.fill(),i.fillStyle=Dt.green,i.beginPath(),i.arc(t-124,62,6,0,Math.PI*2),i.fill(),Me(i,18,700),i.fillText("LIVE",t-108,69);let r=bp[0],s=r.x*t,o=r.y*e;bp.slice(1).forEach((a,l)=>{let c=Math.min(1,Math.max(0,n*1.4-l*.08));if(c<=0)return;let h=a.x*t,d=a.y*e,u=i.createLinearGradient(s,o,h,d);u.addColorStop(0,"rgba(61,155,255,0.9)"),u.addColorStop(1,a.color),i.strokeStyle=u,i.lineWidth=4,i.beginPath(),i.moveTo(s,o),i.lineTo(s+(h-s)*c,o+(d-o)*c),i.stroke()}),bp.forEach((a,l)=>{let c=a.x*t,h=a.y*e,d=a.main||n*1.4-(l-1)*.08>=1;Me(i,a.main?30:24,650);let u=i.measureText(a.label).width+(a.main?84:64),f=a.main?84:64;i.fillStyle=a.main?"#15233d":Dt.panel2,Be(i,c-u/2,h-f/2,u,f,f/2),i.fill(),i.strokeStyle=a.main?Dt.accent:d?a.color:"rgba(255,255,255,0.12)",i.lineWidth=a.main?3:2,i.stroke(),i.fillStyle=Dt.ink,i.textAlign="center",i.fillText(a.label,c,h+(a.main?10:8)),i.textAlign="left"})})}var Dl=["Code","Test","Review","Deploy","Live"],iT=["Unit tests","UI tests","Lint & detekt","AI code review"],C_=["$ ./gradlew check","> Task :shared:allTests","> Task :androidApp:lint","BUILD SUCCESSFUL","deploy \u2192 production","release is live \u2713"];function D_(){return Tu(1680,960,(i,t,e,{pipeline:n,pulse:r})=>{i.fillStyle=Dt.bg,i.fillRect(0,0,t,e),Me(i,30,700),i.fillStyle=Dt.ink,i.fillText("release / production",56,82),i.fillStyle=Dt.panel2,Be(i,380,52,110,42,21),i.fill(),Me(i,20,600,wp),i.fillStyle=Dt.muted,i.fillText("main",408,80);let s=n>=1;i.fillStyle=s?"rgba(63,207,142,0.14)":"rgba(61,155,255,0.14)",Be(i,t-230,52,174,42,21),i.fill(),Me(i,19,700),i.fillStyle=s?Dt.green:Dt.accent,i.textAlign="center",i.fillText(s?"PASSED":"RUNNING",t-143,80),i.textAlign="left";let o=230,a=140,l=t-140,c=(l-a)/(Dl.length-1);i.strokeStyle="rgba(255,255,255,0.1)",i.lineWidth=6,i.beginPath(),i.moveTo(a,o),i.lineTo(l,o),i.stroke();let h=Math.min(1,n*1.08);i.strokeStyle=Dt.green,i.beginPath(),i.moveTo(a,o),i.lineTo(a+(l-a)*h,o),i.stroke(),Dl.forEach((f,p)=>{let _=a+p*c,m=h>=p/(Dl.length-1)-1e-6&&(p<Dl.length-1||h>=1),g=!m&&h>=(p-1)/(Dl.length-1);i.fillStyle=m?Dt.green:g?Dt.accent:"#262b36",i.beginPath(),i.arc(_,o,30,0,Math.PI*2),i.fill(),g&&(i.strokeStyle="rgba(61,155,255,0.35)",i.lineWidth=5,i.beginPath(),i.arc(_,o,40+r*8,0,Math.PI*2),i.stroke()),m&&Tp(i,_,o,30,"#07140d"),Me(i,24,600),i.fillStyle=m||g?Dt.ink:Dt.muted,i.textAlign="center",i.fillText(f,_,o+78),i.textAlign="left"});let d=390;i.fillStyle=Dt.panel,Be(i,56,d,760,500,28),i.fill(),Me(i,16,700),i.fillStyle=Dt.faint,i.fillText("CHECKS",92,d+56),iT.forEach((f,p)=>{let _=d+118+p*90,m=n>.2+p*.12;Me(i,26,550),i.fillStyle=Dt.ink,i.fillText(f,150,_+9),m?(i.fillStyle="rgba(63,207,142,0.16)",i.beginPath(),i.arc(108,_,20,0,Math.PI*2),i.fill(),Tp(i,108,_,22,Dt.green)):(i.strokeStyle=Dt.faint,i.lineWidth=3,i.beginPath(),i.arc(108,_,13,0,Math.PI*2),i.stroke())}),i.fillStyle="#07090d",Be(i,856,d,t-912,500,28),i.fill(),Me(i,16,700),i.fillStyle=Dt.faint,i.fillText("LOG",892,d+56),Me(i,24,400,wp);let u=Math.floor(n*C_.length+.001);C_.slice(0,u).forEach((f,p)=>{i.fillStyle=f.startsWith("$")?Dt.ink:f.includes("\u2713")||f.includes("SUCCESS")?Dt.green:Dt.muted,i.fillText(f,892,d+118+p*58)})})}function N_(i,t,e){let n=-i/2,r=-t/2,s=Math.min(e,i/2,t/2),o=new Fs;return o.moveTo(n+s,r),o.lineTo(n+i-s,r),o.absarc(n+i-s,r+s,s,-Math.PI/2,0,!1),o.lineTo(n+i,r+t-s),o.absarc(n+i-s,r+t-s,s,0,Math.PI/2,!1),o.lineTo(n+s,r+t),o.absarc(n+s,r+t-s,s,Math.PI/2,Math.PI,!1),o.lineTo(n,r+s),o.absarc(n+s,r+s,s,Math.PI,Math.PI*1.5,!1),o}function Ws(i,t,e,n,r){let s=e-r*2,o=new hl(N_(i-r*2,t-r*2,Math.max(.001,n-r)),{depth:s,bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelOffset:0,bevelSegments:6,curveSegments:18});return o.translate(0,0,-s/2),o}function ar(i,t,e){let n=new ul(N_(i,t,e),18),r=n.attributes.position,s=n.attributes.uv;for(let o=0;o<r.count;o+=1)s.setXY(o,r.getX(o)/i+.5,r.getY(o)/t+.5);return s.needsUpdate=!0,n}function Eu(i,t){let e=new tl(i);return e.colorSpace=vn,e.anisotropy=t,e}function rT(){let e=document.createElement("canvas");e.width=2048,e.height=1444;let n=e.getContext("2d"),r={x:2048*.085,y:1444*.07,w:2048*.83,h:1444*.44};n.fillStyle="rgba(8,9,11,0.55)",Be(n,r.x-14,r.y-14,r.w+28,r.h+28,26),n.fill();let s=[{n:14,h:.6},{n:14,h:1},{n:14,h:1},{n:13,h:1},{n:12,h:1},{n:0,h:1}],o=12,a=(r.h-o*5)/5.6,l=r.y;s.forEach((d,u)=>{let f=a*d.h,p=u===5?[1,1,1,1.3,5.2,1.3,1,1,1]:Array.from({length:d.n},(S,M)=>d.n===13&&(M===0||M===12)?1.55:d.n===12&&(M===0||M===11)?2.1:1),_=p.reduce((S,M)=>S+M,0),m=(r.w-o*(p.length-1))/_,g=r.x;p.forEach(S=>{let M=m*S;n.fillStyle="#111215",Be(n,g,l,M,f,10),n.fill(),n.fillStyle="rgba(255,255,255,0.045)",Be(n,g+3,l+3,M-6,f*.45,8),n.fill(),g+=M+o}),l+=f+o});let c=2048*.4,h=1444*.33;return n.strokeStyle="rgba(0,0,0,0.16)",n.lineWidth=5,n.fillStyle="rgba(0,0,0,0.035)",Be(n,(2048-c)/2,1444*.6,c,h,34),n.fill(),n.stroke(),e}function sT(){let i=document.createElement("canvas");i.width=512,i.height=512;let t=i.getContext("2d"),e=t.createLinearGradient(0,0,512,512);return e.addColorStop(0,"rgba(255,255,255,0.9)"),e.addColorStop(.32,"rgba(255,255,255,0.25)"),e.addColorStop(.42,"rgba(255,255,255,0)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,512,512),i}function oT(){let t=document.createElement("canvas");t.width=256,t.height=256;let e=t.getContext("2d"),n=e.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);return n.addColorStop(0,"rgba(0,0,0,0.62)"),n.addColorStop(.45,"rgba(0,0,0,0.3)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,256,256),t}function aT(i){return{reflection:new Ai({map:i,transparent:!0,opacity:.07,blending:is,depthWrite:!1,toneMapped:!1}),aluminium:new zs({color:13619928,metalness:1,roughness:.3,clearcoat:.15,clearcoatRoughness:.4}),titanium:new zs({color:9079696,metalness:1,roughness:.24,clearcoat:.4,clearcoatRoughness:.2}),glass:new zs({color:263173,metalness:0,roughness:.06,clearcoat:1,clearcoatRoughness:.03})}}function Au(i,t,e,n,r){let s=Eu(i.canvas,r),o=new Ai({map:s,toneMapped:!1,color:new ne(0,0,0)});return{mesh:new re(ar(t,e,n),o),setPower(l){o.color.setScalar(l)},update(l){let c=i.draw(l);return c&&(s.needsUpdate=!0),c}}}function Qo(i,t,e,n){let r=new re(new Kr(t,e),new Ai({map:i,transparent:!0,depthWrite:!1,opacity:n,toneMapped:!1}));return r.rotation.x=-Math.PI/2,r.renderOrder=-1,r}function lT(i,t,e){let l=new Un,c=new re(Ws(3.12,2.2,.085,.14,.028),i.aluminium);c.rotation.x=-Math.PI/2,c.position.y=.085/2,l.add(c);let h=new re(ar(3.12-.04,2.2-.04,.13),new Tr({map:t.keyboard,transparent:!0,roughness:.55,metalness:.1,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=.085+.0012,l.add(h);let d=new Un;d.position.set(0,.085,-2.2/2+.02),l.add(d);let u=new re(Ws(3.12,2.16,.05,.14,.018),i.aluminium);u.position.set(0,2.16/2,-.05/2),d.add(u);let f=new re(ar(3.12-.07,2.16-.07,.11),i.glass);f.position.set(0,2.16/2,.0015),d.add(f);let p=Au(P_(),2.88,1.858,.03,e);p.mesh.position.set(0,2.16/2+.035,.003),d.add(p.mesh);let _=new re(new Kr(.018,.018),new Ai({color:1776930}));_.position.set(0,2.16-.07,.0035),d.add(_);let m=new re(ar(3.12-.07,2.16-.07,.11),i.reflection);m.position.set(0,2.16/2,.005),d.add(m),l.add(Qo(t.shadow,3.12*1.25,2.2*1.3,.75));let g=Qo(t.shadow,3.12*1.04,2.2*1.06,.55);return g.position.y=.001,l.add(g),{group:l,screens:[p],setLid(S){d.rotation.x=Math.PI/2-S*(Math.PI/2+.28)},update({typing:S,caret:M}){return p.update({typing:Math.round(S*240)/240,caret:M})},boxes:{closed:new mn(new O(-3.12/2,0,-2.2/2),new O(3.12/2,.9,2.2/2)),open:new mn(new O(-3.12/2,0,-2.2/2-.55),new O(3.12/2,2.16,2.2/2))}}}function cT(i,t,e){let o=new Un,a=new Un;o.add(a),a.add(new re(Ws(.72,1.47,.078,.118,.02),i.titanium));let l=new re(ar(.72-.018,1.47-.018,.108),i.glass);l.position.z=.078/2+8e-4,a.add(l);let c=Au(I_(),.672,1.413,.094,e);c.mesh.position.z=.078/2+.0016,a.add(c.mesh);let h=new re(ar(.72-.018,1.47-.018,.108),i.reflection);h.position.z=.078/2+.0026,a.add(h),[[-1,.33,.1],[-1,.16,.16],[-1,-.02,.16],[1,.22,.24]].forEach(([u,f,p])=>{let _=new re(new nr(.012,p,.03),i.titanium);_.position.set(u*(.72/2+.003),f,0),a.add(_)}),a.rotation.x=-.08;let d=Qo(t.shadow,1.1,.7,.42);return d.position.y=-.97,o.add(d),{group:o,screens:[c],update(){return c.update({})},boxes:{main:new mn(new O(-.72/2,-1.47/2,-.1),new O(.72/2,1.47/2,.1))}}}function hT(i,t,e){let o=new Un,a=new Un;o.add(a),a.add(new re(Ws(2.47,1.77,.058,.16,.016),i.aluminium));let l=new re(ar(2.47-.02,1.77-.02,.15),i.glass);l.position.z=.058/2+8e-4,a.add(l);let c=Au(L_(),2.33,1.653,.085,e);c.mesh.position.z=.058/2+.0016,a.add(c.mesh);let h=new re(ar(2.47-.02,1.77-.02,.15),i.reflection);h.position.z=.058/2+.0026,a.add(h),a.rotation.x=-.1;let d=Qo(t.shadow,3.2,1.2,.38);return d.position.y=-1.14,o.add(d),{group:o,screens:[c],update({links:u}){return c.update({links:Math.round(u*120)/120})},boxes:{main:new mn(new O(-2.47/2,-1.77/2,-.12),new O(2.47/2,1.77/2,.12))}}}function uT(i,t,e){let o=new Un,a=new Un;a.position.set(0,2.3,-.05),o.add(a),a.add(new re(Ws(4.1,2.42,.09,.06,.016),i.aluminium));let l=new re(ar(4.1-.012,2.42-.012,.055),i.glass);l.position.z=.09/2+8e-4,a.add(l);let c=Au(D_(),3.94,2.251,.018,e);c.mesh.position.set(0,0,.09/2+.0016),a.add(c.mesh);let h=new re(ar(4.1-.012,2.42-.012,.055),i.reflection);h.position.z=.09/2+.0026,a.add(h);let d=new re(Ws(.95,2.34,.045,.03,.01),i.aluminium);d.position.set(0,1.17,-.36),d.rotation.x=.21,o.add(d);let u=new re(Ws(.95,1.3,.03,.09,.01),i.aluminium);u.rotation.x=-Math.PI/2,u.position.set(0,.015,-.32),o.add(u);let f=Qo(t.shadow,1.8,1.9,.7);f.position.z=-.32,o.add(f);let p=Qo(t.shadow,4.8,1.6,.25);return p.position.z=-.1,o.add(p),{group:o,screens:[c],update({pipeline:_,pulse:m}){return c.update({pipeline:Math.round(_*60)/60,pulse:Math.round(m*8)/8})},boxes:{main:new mn(new O(-4.1/2,0,-.95),new O(4.1/2,3.52,.1))}}}function U_(i){let t={keyboard:Eu(rT(),i),shadow:Eu(oT(),1),sheen:Eu(sT(),1)},e=aT(t.sheen);return{materials:e,textures:t,setFinish(n){let r=n!=="light";e.aluminium.color.set(r?7632765:13619928),e.aluminium.roughness=r?.34:.3,e.titanium.color.set(r?6119011:9079696)},laptop:lT(e,t,i),phone:cT(e,t,i),tablet:hT(e,t,i),monitor:uT(e,t,i)}}var Cu=new O(0,1,0),O_={laptop:{position:[-7,0,0],yaw:-.3},phone:{position:[-2.1,.98,.5],yaw:-.3},tablet:{position:[1.9,1.16,.2],yaw:-.3},monitor:{position:[8.8,0,-.9],yaw:-.3}},fT={intro:{device:"laptop",box:"closed",az:.05,el:.55,fill:.9,zone:"intro"},build:{device:"laptop",box:"open",az:-.2,el:.12,fill:.95,zone:"chapter"},ship:{device:"phone",box:"main",az:-.36,el:.04,fill:.86,zone:"chapter"},connect:{device:"tablet",box:"main",az:-.28,el:.07,fill:.93,zone:"chapter"},operate:{device:"monitor",box:"main",az:-.2,el:.05,fill:.95,zone:"chapter"},final:{device:null,az:-.5,el:.26,azTall:-.75,elTall:.3,fill:.97,zone:"final"}};function dT(i){return i>=1?{intro:{cx:.42,cy:-.04,hw:.5,hh:.66},chapter:{cx:.4,cy:0,hw:.52,hh:.7},final:{cx:0,cy:-.24,hw:.86,hh:.56}}:{intro:{cx:0,cy:.54,hw:.88,hh:.3},chapter:{cx:0,cy:.44,hw:.86,hh:.4},final:{cx:0,cy:-.1,hw:.9,hh:.5}}}function Ep(i,t){let{min:e,max:n}=i,r=[];for(let s of[e.x,n.x])for(let o of[e.y,n.y])for(let a of[e.z,n.z])r.push(new O(s,o,a).applyMatrix4(t));return r}function pT(i,t,e,n,r,s,o){let a=Math.tan(r/2)*n.hh*o,l=Math.tan(r/2)*s*n.hw*o,c=e.clone().negate(),h=new O().crossVectors(c,Cu).normalize(),d=new O().crossVectors(h,c),u=0;for(let f of i){let p=f.clone().sub(t),_=p.dot(e);u=Math.max(u,_+Math.abs(p.dot(h))/l,_+Math.abs(p.dot(d))/a)}return u}var mT=(i,t)=>new O(Math.sin(i)*Math.cos(t),Math.sin(t),Math.cos(i)*Math.cos(t));function F_(i){let t=new Su({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"});t.outputColorSpace=vn,t.toneMapping=yl,t.setClearColor(0,0);let e=new Ns,n=new Jo(t),r=new wu;e.environment=n.fromScene(r,.035).texture,r.dispose?.(),n.dispose();let s=new Vo(16777215,1.4);s.position.set(4,7,6);let o=new Vo(12375295,1.1);o.position.set(-6,4,-6),e.add(s,o);let a=new yn(28,1,.1,200),l=U_(t.capabilities.getMaxAnisotropy()),c=["laptop","phone","tablet","monitor"];for(let w of c){let{position:x,yaw:T}=O_[w],C=l[w].group;C.position.set(...x),C.rotation.y=T,e.add(C),C.updateMatrixWorld(!0)}let h=new Ai({color:4037631,transparent:!0,opacity:.9,toneMapped:!1,depthWrite:!1,blending:is}),d=new O(0,0,.08).applyMatrix4(l.tablet.group.matrixWorld),u=[new O(0,1.2,-1.2).applyMatrix4(l.laptop.group.matrixWorld),new O(0,0,.05).applyMatrix4(l.phone.group.matrixWorld),new O(0,2.3,0).applyMatrix4(l.monitor.group.matrixWorld)].map(w=>{let x=d.clone().lerp(w,.5).add(new O(0,1.1+d.distanceTo(w)*.12,.4)),T=new fl(new Os(d.clone(),x,w),120,.012,8,!1),C=new re(T,h);return C.visible=!1,e.add(C),C}),f={positions:null,targets:null,zones:[]},p={width:1,height:1},_={position:new O,target:new O,zone:{cx:0,cy:0}};function m(){let w=p.width/p.height,x=w<1;a.fov=x?36:28,a.aspect=w;let T=a.fov*Math.PI/180,C=dT(w),D=[];for(let z of c){let H=l[z],V=H.boxes.main??H.boxes.open;D.push(...Ep(V,H.group.matrixWorld))}let I=[],k=[],L=[];for(let z of Xf){let H=fT[z],V=C[H.zone],K,G;if(H.device){let gt=l[H.device];K=Ep(gt.boxes[H.box],gt.group.matrixWorld),G=O_[H.device].yaw}else K=D,G=0;let R=new mn().setFromPoints(K).getCenter(new O),Z=mT(G+(x&&H.azTall!==void 0?H.azTall:H.az),x&&H.elTall!==void 0?H.elTall:H.el),mt=pT(K,R,Z,V,T,w,H.fill);I.push(R.clone().addScaledVector(Z,mt)),k.push(R),L.push(V)}f={positions:new Us(I,!1,"centripetal"),targets:new Us(k,!1,"centripetal"),zones:L}}function g(w,x,T){p={width:Math.max(1,w),height:Math.max(1,x)},t.setPixelRatio(T),t.setSize(p.width,p.height,!1),m()}function S(w){let x=w==="light";l.setFinish(w),t.toneMappingExposure=x?1.02:.92,e.environmentIntensity=x?.95:.85,s.intensity=x?1.6:1.1,o.intensity=x?.5:1.1,h.color=new ne(x?29155:4037631),h.blending=x?ns:is,h.needsUpdate=!0}function M(w,{intro:x=1,time:T=0,pointerX:C=0,pointerY:D=0}={}){let I=Ig(w),k=Zf(w),L=Xf.length-1,z=k/L;f.positions.getPoint(z,_.position),f.targets.getPoint(z,_.target);let H=Math.min(L-1,Math.floor(k)),V=k-H,K=f.zones[H],G=f.zones[H+1];_.zone.cx=K.cx+(G.cx-K.cx)*V,_.zone.cy=K.cy+(G.cy-K.cy)*V;let R=_.position.clone().sub(_.target),Z=R.length(),mt=1-x;_.position.addScaledVector(R,.22*mt).addScaledVector(Cu,Z*.08*mt);let gt=R.clone().negate().normalize(),Yt=new O().crossVectors(gt,Cu).normalize();_.position.addScaledVector(Yt,C*Z*.035).addScaledVector(Cu,-D*Z*.02),a.position.copy(_.position),a.lookAt(_.target),a.setViewOffset(p.width,p.height,-_.zone.cx*p.width/2,_.zone.cy*p.height/2,p.width,p.height),l.laptop.setLid(I.lid),l.laptop.screens[0].setPower(I.power);let It=l.laptop.update({typing:I.typing,caret:I.typing>0&&I.typing<1?Math.floor(T*2.4)%2===0:!1});return[["phone",2],["tablet",3],["monitor",4]].forEach(([Zt,$])=>{l[Zt].screens[0].setPower(Ia((k-($-.85))/.55))}),It=l.phone.update()||It,It=l.tablet.update({links:I.links})||It,It=l.monitor.update({pipeline:I.pipeline,pulse:I.pipeline>0&&I.pipeline<1?T*1.4%1:0})||It,u.forEach((Zt,$)=>{let et=Math.min(1,Math.max(0,I.trails*1.3-$*.15)),dt=Zt.geometry.parameters.tubularSegments,Gt=Zt.geometry.parameters.radialSegments;Zt.visible=et>0,Zt.geometry.setDrawRange(0,Math.floor(et*dt)*Gt*6)}),{rail:k,cue:I.cue,screensChanged:It}}function v(){t.render(e,a)}function b(){a.updateMatrixWorld();let w={};for(let x of c){let T=l[x],C=x==="laptop"?T.boxes.open:T.boxes.main,D=Ep(C,T.group.matrixWorld).map(L=>L.project(a));if(D.some(L=>L.z>1||L.z<-1))continue;let I=D.map(L=>(L.x+1)/2*p.width),k=D.map(L=>(1-L.y)/2*p.height);w[x]={left:Math.min(...I),right:Math.max(...I),top:Math.min(...k),bottom:Math.max(...k)}}return w}function A(){t.dispose(),e.traverse(w=>{w.geometry?.dispose(),(Array.isArray(w.material)?w.material:w.material?[w.material]:[]).forEach(T=>{T.map?.dispose(),T.dispose()})}),e.environment?.dispose()}return{renderer:t,camera:a,resize:g,setTheme:S,update:M,render:v,deviceRects:b,dispose:A}}Pi.registerPlugin(ce);var B_=document.querySelector("[data-story]");B_&&_T(B_);function gT(){try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}}function z_(){let i=document.documentElement.dataset.theme;return i||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}function Ap(i,t){i.dataset.storyMode=t,t==="static"&&(window.__story={mode:"static"}),i.classList.toggle("story-live",t==="live"),i.classList.toggle("story-static",t==="static"),t!=="live"&&i.classList.remove("story-ready")}function _T(i){let t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=new URLSearchParams(window.location.search).get("story")==="static",n=null,r=()=>{n?.destroy(),n=null,Ap(i,"static")},s=()=>{if(!n){if(e||t.matches||!gT()){Ap(i,"static");return}try{n=xT(i,r)}catch(o){console.warn("[story] falling back to static scene",o),r()}}};t.addEventListener("change",()=>t.matches?r():s()),s()}function xT(i,t){let e=i.querySelector(".story-stage"),n=i.querySelector(".story-canvas"),r=Array.from(i.querySelectorAll("[data-story-copy]")),s=Array.from(i.querySelectorAll(".story-rail i")),o=i.querySelector(".story-cue"),a=window.matchMedia("(pointer: coarse)").matches;Ap(i,"live");let l=F_(n);l.setTheme(z_());let h=Math.min(window.devicePixelRatio||1,a?1.5:2),d=!0,u=()=>{let G=e.getBoundingClientRect();l.resize(G.width,G.height,h),d=!0};u();let f=new Rg({lerp:.085,smoothWheel:!0,anchors:!0,autoRaf:!1});f.on("scroll",ce.update);let p=G=>f.raf(G*1e3);Pi.ticker.add(p),Pi.ticker.lagSmoothing(0);let _={p:0,intro:0},m=Pi.to(_,{p:1,ease:"none",scrollTrigger:{trigger:i,start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}}),g=Pi.to(_,{intro:1,duration:2.4,ease:"expo.out",delay:.15}),S=r[0]?Pi.from(r[0].children,{y:26,autoAlpha:0,duration:1.1,ease:"expo.out",stagger:.07,delay:.1,clearProps:"transform,opacity,visibility"}):null,M={x:0,y:0,tx:0,ty:0},v=G=>{G.pointerType==="mouse"&&(M.tx=G.clientX/window.innerWidth*2-1,M.ty=G.clientY/window.innerHeight*2-1)};window.addEventListener("pointermove",v,{passive:!0});let b=!0,A=new IntersectionObserver(G=>{b=G.some(R=>R.isIntersecting),d=!0});A.observe(i);let w=new ResizeObserver(u);w.observe(e);let x=()=>{l.setTheme(z_()),d=!0},T=new MutationObserver(x);T.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});let C=window.matchMedia("(prefers-color-scheme: dark)");C.addEventListener("change",x);let D=G=>{G.preventDefault(),t()};n.addEventListener("webglcontextlost",D);let I={p:-1,intro:-1,px:0,py:0,copies:Yf.map(()=>-1),tick:-1},k=[],L=0,z=!1;function H(G){r.forEach((Z,mt)=>{let gt=Math.round(Pg(G,mt)*1e3)/1e3;gt!==I.copies[mt]&&(I.copies[mt]=gt,Z.style.opacity=String(gt),Z.style.transform=`translate3d(0, ${((1-gt)*18).toFixed(2)}px, 0)`,Z.style.visibility=gt<.01?"hidden":"visible")});let R=Lg(G);R!==I.tick&&(I.tick=R,s.forEach((Z,mt)=>Z.classList.toggle("is-active",mt===R-1)),i.dataset.storyShot=String(R))}function V(G){if(k.push(G),k.length<45)return;let R=k.reduce((Z,mt)=>Z+mt,0)/k.length;k.length=0,R>24&&h>1&&(h=Math.max(1,Math.round((h-.25)*100)/100),u())}let K=(G,R)=>{if(!b||document.hidden){k.length=0;return}let Z=1-Math.exp(-R/220);M.x+=(M.tx-M.x)*Z,M.y+=(M.ty-M.y)*Z;let mt=Math.abs(M.x-I.px)>1e-4||Math.abs(M.y-I.py)>1e-4,gt=d||_.p!==I.p||_.intro!==I.intro||mt,{screensChanged:Yt,cue:It}=l.update(_.p,{intro:_.intro,time:G,pointerX:M.x,pointerY:M.y});if(!gt&&!Yt){k.length=0;return}H(_.p),o&&(o.style.opacity=String(It)),l.render(),L+=1,!d&&I.p!==-1&&V(R),I.p=_.p,I.intro=_.intro,I.px=M.x,I.py=M.y,d=!1,z||(z=!0,requestAnimationFrame(()=>i.classList.add("story-ready")))};return Pi.ticker.add(K),window.__story={mode:"live",get progress(){return _.p},get dpr(){return h},get frames(){return L},rects:()=>l.deviceRects()},{destroy(){Pi.ticker.remove(K),Pi.ticker.remove(p),m.scrollTrigger?.kill(),m.kill(),g.kill(),S?.revert(),f.destroy(),A.disconnect(),w.disconnect(),T.disconnect(),C.removeEventListener("change",x),window.removeEventListener("pointermove",v),n.removeEventListener("webglcontextlost",D),r.forEach(G=>{G.style.opacity="",G.style.transform="",G.style.visibility=""}),l.dispose(),window.__story={mode:"static"}}}}
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
