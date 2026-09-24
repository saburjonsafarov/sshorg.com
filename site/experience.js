/* sshorg.com — an original, dependency-free WebGL device story. MIT. */
(() => {
  'use strict';
  const clamp = (x, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, x));
  const lerp = (a, b, t) => a + (b - a) * t;
  const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
  const identity = () => [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  function multiply(a, b) {
    const out = new Array(16).fill(0);
    for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) for (let k = 0; k < 4; k++) out[c * 4 + r] += a[k * 4 + r] * b[c * 4 + k];
    return out;
  }
  function translation(x = 0, y = 0, z = 0) { const m = identity(); m[12] = x; m[13] = y; m[14] = z; return m; }
  function rotationX(a) { const c = Math.cos(a), s = Math.sin(a); return [1,0,0,0, 0,c,s,0, 0,-s,c,0, 0,0,0,1]; }
  function rotationY(a) { const c = Math.cos(a), s = Math.sin(a); return [c,0,-s,0, 0,1,0,0, s,0,c,0, 0,0,0,1]; }
  function rotationZ(a) { const c = Math.cos(a), s = Math.sin(a); return [c,s,0,0, -s,c,0,0, 0,0,1,0, 0,0,0,1]; }
  function scale(s) { const m = identity(); m[0] = m[5] = m[10] = s; return m; }
  const compose = (x=0,y=0,z=0,rx=0,ry=0,rz=0,s=1) => [translation(x,y,z),rotationX(rx),rotationY(ry),rotationZ(rz),scale(s)].reduce(multiply);
  const normalize = v => { const n = Math.hypot(...v) || 1; return v.map(x => x / n); };
  const cross = (a,b) => [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
  const dot = (a,b) => a.reduce((s,x,i) => s+x*b[i],0);
  function perspective(fov, aspect, near=.1, far=80) { const f=1/Math.tan(fov/2), d=1/(near-far); return [f/aspect,0,0,0, 0,f,0,0, 0,0,(far+near)*d,-1, 0,0,2*far*near*d,0]; }
  function lookAt(eye, target) { const z=normalize(eye.map((v,i)=>v-target[i])), x=normalize(cross([0,1,0],z)), y=cross(z,x); return [x[0],y[0],z[0],0, x[1],y[1],z[1],0, x[2],y[2],z[2],0, -dot(x,eye),-dot(y,eye),-dot(z,eye),1]; }
  function rounded(w,h,d,r=.12) {
    const out=[], ring=[], count=9;
    r=Math.min(r,w/2,h/2);
    for(let corner=0;corner<4;corner++) {
      const angle=corner*Math.PI/2, cx=(corner===0||corner===3?1:-1)*(w/2-r), cy=(corner<2?1:-1)*(h/2-r);
      for(let i=0;i<=count;i++) {const a=angle+i/count*Math.PI/2; ring.push([cx+Math.cos(a)*r,cy+Math.sin(a)*r]);}
    }
    const put=(p,n,uv)=>out.push(...p,...n,...uv);
    for(let i=0;i<ring.length;i++) {
      const a=ring[i],b=ring[(i+1)%ring.length];
      for(const z of [1,-1]) { const ps=z===1?[a,b]:[b,a]; put([0,0,z*d/2],[0,0,z],[.5,.5]); for(const p of ps) put([p[0],p[1],z*d/2],[0,0,z],[p[0]/w+.5,p[1]/h+.5]); }
      const n=normalize([b[1]-a[1],a[0]-b[0],0]);
      for(const p of [[a[0],a[1],d/2],[a[0],a[1],-d/2],[b[0],b[1],-d/2],[a[0],a[1],d/2],[b[0],b[1],-d/2],[b[0],b[1],d/2]]) put(p,n,[0,0]);
    }
    return out;
  }
  function plane(w,h) { return [-w/2,-h/2,0,0,0,1,0,0,w/2,-h/2,0,0,0,1,1,0,w/2,h/2,0,0,0,1,1,1,-w/2,-h/2,0,0,0,1,0,0,w/2,h/2,0,0,0,1,1,1,-w/2,h/2,0,0,0,1,0,1]; }
  function front(w,h,r) {
    const all=rounded(w,h,.01,r), out=[];
    for(let i=0;i<all.length;i+=96) out.push(...all.slice(i,i+24));
    return out;
  }
  function torus(radius,tube=.009,arc=Math.PI*2) {
    const out=[],seg=128,sides=5;
    for(let i=0;i<seg;i++)for(let j=0;j<sides;j++){
      const point=(u,v)=>{const a=u/seg*arc,b=v/sides*Math.PI*2;return [(radius+tube*Math.cos(b))*Math.cos(a),tube*Math.sin(b),(radius+tube*Math.cos(b))*Math.sin(a),Math.cos(b)*Math.cos(a),Math.sin(b),Math.cos(b)*Math.sin(a),u/seg,v/sides];};
      out.push(...point(i,j),...point(i+1,j),...point(i+1,j+1),...point(i,j),...point(i+1,j+1),...point(i,j+1));
    } return out;
  }
  function sphere(r,rows=24,cols=40) {
    const out=[],p=(u,v)=>{const a=u/cols*Math.PI*2,b=v/rows*Math.PI; const n=[Math.sin(b)*Math.cos(a),Math.cos(b),Math.sin(b)*Math.sin(a)];return [...n.map(x=>x*r),...n,u/cols,v/rows];};
    for(let y=0;y<rows;y++)for(let x=0;x<cols;x++) out.push(...p(x,y),...p(x+1,y),...p(x+1,y+1),...p(x,y),...p(x+1,y+1),...p(x,y+1));
    return out;
  }
  const boundaries=[.17,.36,.59,.83];
  const chapterAt=p=>boundaries.reduce((n,b)=>n+(p>=b?1:0),0);
  const jumps=[0,.23,.46,.7,.95];
  if(typeof module!=='undefined' && module.exports) module.exports={clamp,smooth,multiply,translation,rotationX,rotationY,compose,lookAt,perspective,rounded,front,torus,chapterAt};
  if(typeof document==='undefined') return;

  const translations={
    ru:{skip:'Перейти к проектам',navStory:'История',navProjects:'Проекты',navContact:'Контакт',language:'Язык',letsTalk:'Обсудим идею',intro:'Создаю продукты.<br>За пределами одного экрана.',seeWork:'Смотреть проекты',location:'Худжанд, Таджикистан · Инженер, который создаёт.',creation:'СОЗДАНИЕ',laptopTitle:'Из идеи.<br><span class="silver">В продукт.</span>',laptopText:'Сначала — смысл и архитектура. Затем — интерфейс и код. Идея обретает форму, а не остаётся в заметках.',mobile:'МОБИЛЬНЫЙ ОПЫТ',phoneTitle:'Большие идеи.<br><span class="silver">В твоём кармане.</span>',phoneText:'Приложения, которыми приятно пользоваться. Общая логика на Kotlin. Внимание к каждой детали на Android и iOS.',systems:'БОЛЬШЕ, ЧЕМ ИНТЕРФЕЙС',systemsTitle:'Всё связано.<br><span class="silver">Всё продумано.</span>',systemsText:'За красивым экраном — система. Архитектура, инструменты для команды и путь от первого коммита до релиза.',ecosystem:'ОДНА ЭКОСИСТЕМА',finalTitle:'Разные экраны.<br><span class="silver">Один замысел.</span>',finalText:'От небольшой идеи до связанного продукта. Создадим то, чем захочется пользоваться.',startProject:'Обсудить проект',scroll:'Прокрути. История оживает.',motion:'Без анимации',motionOn:'Включить анимацию',selected:'ИЗБРАННОЕ',workTitle:'Не просто идеи.<br><span class="silver">Работающий код.</span>',workText:'Открытые инструменты и работа над реальными продуктами. Разные задачи. Одна инженерная планка.',graphDescription:'Живая физика связей для Compose Multiplatform. Узлы, камера и графы — на общем Kotlin.',bankDescription:'Работа над мобильным банковским продуктом: Android, общий KMP-код и инструменты мобильной платформы.',demoNote:'Экраны устройств в 3D-сцене — демонстрационные концепты, не интерфейсы банковского приложения и не реальные финансовые данные.',approach:'КАК Я РАБОТАЮ',craftTitle:'Технологии — инструмент.<br><span class="silver">Продукт — цель.</span>',craftOne:'Понять задачу',craftOneText:'Сценарии, ограничения и критерии результата. Спецификация раньше кода.',craftTwo:'Собрать систему',craftTwoText:'Общая логика, ясные границы и интерфейс, который не требует инструкции.',craftThree:'Довести до запуска',craftThreeText:'Проверки, сборка и выпуск. ИИ ускоряет работу; ответственность остаётся у инженера.',next:'СЛЕДУЮЩАЯ ИСТОРИЯ',contactTitle:'Начнём<br><span class="silver">с твоей идеи.</span>',contactText:'Приложение, сайт или инструмент для команды.<br>Обсудим задачу и найдём правильную форму.',writeTelegram:'Написать в Telegram',classic:'Обычная версия ↗'},
    en:{skip:'Skip to projects',navStory:'The story',navProjects:'Selected work',navContact:'Contact',language:'Language',letsTalk:'Let’s talk',intro:'Building products.<br>Beyond one screen.',seeWork:'Explore my work',location:'Khujand, Tajikistan · An engineer who builds.',creation:'THE CRAFT',laptopTitle:'From an idea.<br><span class="silver">To something real.</span>',laptopText:'Purpose and architecture first. Interface and code next. Giving ideas a shape beyond the notebook.',mobile:'MOBILE EXPERIENCES',phoneTitle:'Big ideas.<br><span class="silver">In your pocket.</span>',phoneText:'Apps that feel good to use. Shared Kotlin logic. Care in every detail, on Android and iOS.',systems:'BEYOND THE INTERFACE',systemsTitle:'All connected.<br><span class="silver">By design.</span>',systemsText:'Behind every screen is a system. Architecture, tools for the team, and a path from the first commit to release.',ecosystem:'ONE ECOSYSTEM',finalTitle:'Different screens.<br><span class="silver">One vision.</span>',finalText:'From a small idea to a connected product. Let’s build something people will love to use.',startProject:'Discuss a project',scroll:'Scroll. The story unfolds.',motion:'Reduce motion',motionOn:'Enable motion',selected:'SELECTED WORK',workTitle:'More than ideas.<br><span class="silver">Working code.</span>',workText:'Open tools and contributions to real products. Different challenges. The same engineering standards.',graphDescription:'Living connections for Compose Multiplatform. Nodes, cameras and graph physics, written in shared Kotlin.',bankDescription:'Contributing to a mobile banking product: Android, shared KMP code and mobile platform tooling.',demoNote:'The device screens in this 3D scene are illustrative concepts, not bank app interfaces or real financial data.',approach:'HOW I WORK',craftTitle:'Technology is a tool.<br><span class="silver">The product is the point.</span>',craftOne:'Understand the problem',craftOneText:'User scenarios, constraints and acceptance criteria. Specification before code.',craftTwo:'Build the system',craftTwoText:'Shared logic, clear boundaries and an interface that needs no instructions.',craftThree:'Make it real',craftThreeText:'Testing, building and shipping. AI accelerates the work; the engineer owns the outcome.',next:'THE NEXT STORY',contactTitle:'Let’s start<br><span class="silver">with your idea.</span>',contactText:'An app, a website or a tool for your team.<br>Let’s find the right shape for the problem.',writeTelegram:'Say hello on Telegram',classic:'Classic site ↗'},
    tg:{skip:'Гузаштан ба лоиҳаҳо',navStory:'Ҳикоя',navProjects:'Лоиҳаҳо',navContact:'Тамос',language:'Забон',letsTalk:'Идеяро муҳокима кунем',intro:'Маҳсулот месозам.<br>Фаротар аз як экран.',seeWork:'Дидани лоиҳаҳо',location:'Хуҷанд, Тоҷикистон · Муҳандисе, ки месозад.',creation:'ЭҶОД',laptopTitle:'Аз идея.<br><span class="silver">То маҳсулот.</span>',laptopText:'Аввал — мақсад ва меъморӣ. Баъд — интерфейс ва код. Идея шакл мегирад, на танҳо дар қайдҳо мемонад.',mobile:'ТАҶРИБАИ МОБИЛӢ',phoneTitle:'Идеяҳои бузург.<br><span class="silver">Дар ҷайби ту.</span>',phoneText:'Барномаҳое, ки истифодаашон гуворост. Мантиқи муштарак дар Kotlin. Таваҷҷуҳ ба ҷузъиёт дар Android ва iOS.',systems:'ФАРОТАР АЗ ИНТЕРФЕЙС',systemsTitle:'Ҳама пайваст.<br><span class="silver">Ҳама андешида.</span>',systemsText:'Паси ҳар экран — як система. Меъморӣ, абзорҳо барои даста ва роҳ аз коммити аввал то нашр.',ecosystem:'ЯК ЭКОСИСТЕМА',finalTitle:'Экранҳои гуногун.<br><span class="silver">Як андеша.</span>',finalText:'Аз идеяи хурд то маҳсулоти пайваста. Чизе созем, ки истифодааш писанд ояд.',startProject:'Муҳокимаи лоиҳа',scroll:'Варақ зан. Ҳикоя зинда мешавад.',motion:'Бе аниматсия',motionOn:'Фаъол кардани аниматсия',selected:'ЛОИҲАҲОИ ИНТИХОБӢ',workTitle:'На танҳо идеяҳо.<br><span class="silver">Коди коркунанда.</span>',workText:'Абзорҳои кушода ва кор бо маҳсулоти воқеӣ. Вазифаҳои гуногун. Як меъёри муҳандисӣ.',graphDescription:'Физикаи зиндаи пайвандҳо барои Compose Multiplatform. Гиреҳҳо, камера ва графҳо дар Kotlin-и муштарак.',bankDescription:'Кор дар маҳсулоти бонкии мобилӣ: Android, коди муштараки KMP ва абзорҳои платформаи мобилӣ.',demoNote:'Экранҳои дастгоҳҳо дар саҳнаи 3D намунаҳои намоишӣ мебошанд, на интерфейси барномаи бонкӣ ё маълумоти воқеии молиявӣ.',approach:'ЧӢ ГУНА КОР МЕКУНАМ',craftTitle:'Технология — абзор.<br><span class="silver">Маҳсулот — ҳадаф.</span>',craftOne:'Фаҳмидани вазифа',craftOneText:'Сенарияҳо, маҳдудиятҳо ва меъёрҳои натиҷа. Мушаххасот пеш аз код.',craftTwo:'Сохтани система',craftTwoText:'Мантиқи муштарак, ҳудудҳои равшан ва интерфейси фаҳмо.',craftThree:'Расондан то нашр',craftThreeText:'Санҷиш, сохт ва нашр. Зеҳни сунъӣ корро метезонад; масъулият бо муҳандис мемонад.',next:'ҲИКОЯИ НАВБАТӢ',contactTitle:'Аз идеяи ту<br><span class="silver">оғоз мекунем.</span>',contactText:'Барнома, сомона ё абзор барои даста.<br>Вазифаро муҳокима карда, шакли дурустро меёбем.',writeTelegram:'Навиштан дар Telegram',classic:'Нусхаи одӣ ↗'}
  };
  const story=document.querySelector('.story'),canvas=document.getElementById('scene'),stage=document.querySelector('.stage');
  if(!story||!canvas||!stage) return;
  const chapters=[...document.querySelectorAll('[data-chapter]')],motionButton=document.getElementById('motion'),languageSelect=document.getElementById('language');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(hover:hover) and (pointer:fine)');
  let language='ru',manualStatic=false,renderer=null,raf=0,progress=0,target=0,px=0,py=0,tx=0,ty=0,active=-1,sceneVisible=true,lastTime=0;
  const storage={get:k=>{try{return localStorage.getItem(k);}catch{return null;}},set:(k,v)=>{try{localStorage.setItem(k,v);}catch{}}};
  function updateLanguage(lang) {
    language=translations[lang]?lang:'ru';document.documentElement.lang=language;languageSelect.value=language;
    for(const el of document.querySelectorAll('[data-t]')) el.innerHTML=translations[language][el.dataset.t]||translations.ru[el.dataset.t]||'';
    languageSelect.setAttribute('aria-label',translations[language].language);
    const labels={ru:['Начало','Ноутбук','Смартфон','Системы','Экосистема'],en:['Introduction','Laptop','Phone','Systems','Ecosystem'],tg:['Оғоз','Ноутбук','Телефон','Системаҳо','Экосистема']};
    document.querySelectorAll('[data-jump]').forEach((b,i)=>b.setAttribute('aria-label',labels[language][i]));
    updateMotionLabel();storage.set('sshorg.experience.lang',language);
  }
  function updateMotionLabel(){const on=isStatic();motionButton.setAttribute('aria-pressed',String(on));const text=reduced.matches?({ru:'Уменьшение движения включено в системе',en:'Reduced motion follows your system',tg:'Камкунии ҳаракат дар система фаъол аст'}[language]):translations[language][on?'motionOn':'motion'];motionButton.querySelector('[data-t]').textContent=text;motionButton.setAttribute('aria-label',text);motionButton.disabled=reduced.matches;}
  function isStatic(){return manualStatic||reduced.matches||!renderer;}
  function setChapter(n){if(n===active)return;active=n;chapters.forEach((c,i)=>{const hidden=i!==n;c.classList.toggle('active',!hidden);c.inert=hidden;c.setAttribute('aria-hidden',String(hidden));});document.querySelectorAll('[data-jump]').forEach((b,i)=>{if(i===n)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current');});document.getElementById('chapter-counter').textContent=String(n+1).padStart(2,'0');document.getElementById('device-caption').textContent=['01 — THE START OF SOMETHING.','02 — AN IDEA TAKES SHAPE.','03 — SMALL SCREEN. BIG POSSIBILITIES.','04 — THE SYSTEM BEHIND THE SCREEN.','05 — ONE CONNECTED VISION.'][n];story.dataset.chapter=String(n);}

  function makeTexture(kind){
    const c=document.createElement('canvas');c.width=kind==='phone'?512:1024;c.height=kind==='phone'?1024:640;const g=c.getContext('2d');if(!g)throw Error('Canvas2D unavailable');
    const W=c.width,H=c.height;
    const rect=(x,y,w,h,fill,r=0)=>{g.fillStyle=fill;g.beginPath();g.roundRect(x,y,w,h,r);g.fill();};
    const text=(s,x,y,size=20,color='#b3c3d7',weight=400)=>{g.fillStyle=color;g.font=`${weight} ${size}px -apple-system, BlinkMacSystemFont, sans-serif`;g.fillText(s,x,y);};
    const line=(a,b,color='#233648',width=1)=>{g.strokeStyle=color;g.lineWidth=width;g.beginPath();g.moveTo(...a);g.lineTo(...b);g.stroke();};
    const gradient=g.createLinearGradient(0,0,W,H);gradient.addColorStop(0,'#152439');gradient.addColorStop(1,'#080e18');rect(0,0,W,H,gradient);
    if(kind==='website'){
      rect(0,0,W,46,'#1a2330');['#be726e','#b4a46e','#6a9c83'].forEach((col,i)=>rect(20+i*22,18,9,9,col,5));rect(360,10,305,26,'#0d1620',6);text('sshorg.com',457,29,13,'#94a6ba');
      text('S.',48,102,37,'#edf3fc',600);text('Saburjon',105,96,19,'#e2eaf6');text('Work     About     Contact',720,94,14,'#8ca1b8');
      text('INDEPENDENT MIND. CONNECTED PRODUCTS.',52,189,13,'#93c4c8',500);text('Beyond',46,289,89,'#edf3fa',600);text('one screen.',46,384,89,'#b6c7dc',600);text('Saburjon Safarov / Kotlin Multiplatform',51,435,19,'#94a9bf');
      rect(51,476,174,44,'#dfebf6',23);text('Explore my work  ↗',72,504,15,'#101b28',600);text('Kotlin      Android      iOS',53,578,15,'#758da9');
      const grad=g.createRadialGradient(795,328,12,795,328,230);grad.addColorStop(0,'#68bdc128');grad.addColorStop(1,'#68bdc100');rect(565,125,459,440,grad);
      for(let i=0;i<3;i++){g.strokeStyle=['#9bdace','#9fc5ee','#495f80'][i];g.lineWidth=1.5;g.beginPath();g.ellipse(804,323,120+i*24,85+i*20,-.4+i*.7,0,Math.PI*2);g.stroke();}text('K',778,344,68,'#e1edf8',550);
    } else if(kind==='keyboard'){
      rect(0,0,W,H,'#26313f');rect(64,35,896,355,'#121923',20);
      for(let row=0;row<5;row++)for(let col=0;col<14;col++){const x=77+col*62,y=49+row*66;rect(x,y,55,55,'#334253',6);rect(x+1,y+1,53,49,'#0a111a',5);if(row>0)text(('QWERTYUIOPASDFGHJKLZXCVBNM')[(row*14+col)%26],x+21,y+30,13,'#8194aa');}
      rect(250,354,455,32,'#111923',6);g.strokeStyle='#68798b';g.lineWidth=2;g.beginPath();g.roundRect(341,423,342,174,12);g.stroke();
    } else if(kind==='phone'){
      text('9:41',32,43,20,'#c4d5e4',550);text('•••  ▰',410,43,18,'#c4d5e4');text('YOUR EVERYDAY, REIMAGINED',32,127,13,'#8cabbc');text('Hello, creator.',30,174,36,'#e8f1f9',570);
      const gr=g.createLinearGradient(25,215,483,433);gr.addColorStop(0,'#374e68');gr.addColorStop(1,'#142b3b');rect(26,216,460,210,gr,24);text('A little more clarity.',49,256,17,'#b7cdda');text('Make room',48,316,39,'#e6f3fb',540);text('for what matters.',48,362,39,'#d4e6ef',540);text('STUDIO / INTERFACE CONCEPT',49,399,11,'#97bdc8');
      ['Plan','Create','Explore'].forEach((s,i)=>{rect(26+i*158,451,143,95,'#253647',16);text(['+','◇','↗'][i],83+i*158,492,26,'#b4dfdb');text(s,70+i*158,524,15,'#b9cbd9');});
      text('Your space',30,593,21,'#e0eaf5',550);['Ideas worth making','Keep things simple','Built for everyday'].forEach((s,i)=>{rect(28,617+i*90,455,77,'#172634',15);rect(42,634+i*90,41,41,'#2f495a',13);text(['✦','↗','◉'][i],54,662+i*90,22,'#a7d7d2');text(s,101,652+i*90,19,'#d2e4ed');text(['Product notes','Personal workflow','Interface exploration'][i],101,678+i*90,13,'#7f9db1');text('›',451,665+i*90,24,'#9cbfce');});
      rect(24,913,463,65,'#1e303d',25);text('⌂',88,952,26,'#bce4d9');text('◇',242,952,26,'#718d9f');text('○',396,952,26,'#718d9f');rect(185,1000,140,5,'#ccdae7',3);
    } else if(kind==='graph'){
      text('compose-graph',37,52,27,'#d9e7f5',560);text('CONNECTIONS, IN MOTION.',38,80,12,'#87a4be');
      for(let x=24;x<W;x+=26)for(let y=108;y<H;y+=26)rect(x,y,1.3,1.3,'#57718a55');
      const nodes=[[520,318,'Kotlin'],[300,191,'Android'],[736,159,'iOS'],[824,361,'Desktop'],[651,490,'Compose'],[331,466,'Physics'],[162,341,'Nodes']];
      [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,6],[1,2],[2,3],[4,5],[5,6]].forEach(([a,b])=>line(nodes[a].slice(0,2),nodes[b].slice(0,2),'#40647b',2));
      nodes.forEach(([x,y,s],i)=>{g.fillStyle=i?'#91bdce':'#c5e7e1';g.beginPath();g.arc(x,y,i?8:17,0,Math.PI*2);g.fill();text(s,x+18,y+6,i?17:23,i?'#93aec2':'#d4edf1');});text('GRAPH / DEMO CONCEPT',38,602,12,'#617e9b');
    } else if(kind==='pipeline'){
      rect(0,0,178,H,'#101d2b');text('S / SYSTEMS',25,52,19,'#bdcfe2',600);['Overview','Releases','Workflows','Architecture','Settings'].forEach((s,i)=>{if(i===0)rect(12,100,154,40,'#2b3c4d',7);text(s,26,125+i*54,15,i?'#748da7':'#d7e5f0');});
      text('From commit to confidence.',211,72,31,'#d9e9f6',550);text('RELEASE PIPELINE / CONCEPT',213,106,12,'#7ca4b8');
      ['Code','Build','Test','Deploy','Observe'].forEach((s,i)=>{const x=213+i*158;rect(x,162,138,148,'#1b2d3e',16);if(i<4)line([x+93,211],[x+187,211],'#84c6c2',2);g.fillStyle='#a3d6ce';g.beginPath();g.arc(x+68,y=211,16,0,Math.PI*2);g.fill();text('✓',x+61,217,18,'#163839',600);text(s,x+37,277,18,'#b9cfe0');});
      rect(212,349,428,229,'#122536',17);text('One connected system',233,389,21,'#b8cfdd',500);text('SPECIFY → BUILD → VERIFY',233,428,15,'#719caf');
      const bars=[.2,.35,.3,.52,.41,.64,.58,.76,.7,.86,.92];bars.forEach((v,i)=>rect(237+i*34,549-v*93,17,v*93,i>7?'#a2d8cf':'#537f9c',3));rect(661,349,335,229,'#162b3b',17);text('Human intent.',687,404,29,'#dfedf4',500);text('Intelligent tools.',687,444,29,'#a2bccc',500);text('Thoughtful delivery.',687,490,20,'#87a8bb');text('ILLUSTRATIVE WORKFLOW',687,547,11,'#6d97ab');
    }
    return c;
  }
  const VERTEX=`attribute vec3 aPosition;attribute vec3 aNormal;attribute vec2 aUv;uniform mat4 uModel;uniform mat4 uVP;varying vec3 vWorld;varying vec3 vNormal;varying vec2 vUv;void main(){vec4 p=uModel*vec4(aPosition,1.0);vWorld=p.xyz;vNormal=normalize(mat3(uModel)*aNormal);vUv=aUv;gl_Position=uVP*p;}`;
  const FRAGMENT=`precision mediump float;varying vec3 vWorld;varying vec3 vNormal;varying vec2 vUv;uniform vec3 uColor;uniform vec3 uEye;uniform float uMode;uniform sampler2D uTexture;void main(){vec3 n=normalize(vNormal);vec3 v=normalize(uEye-vWorld);vec3 l=normalize(vec3(-3.0,5.0,5.0));vec3 l2=normalize(vec3(5.0,2.0,-2.0));vec3 base=uColor;vec3 c;if(uMode>2.5){c=base;}else if(uMode>1.5){float dist=length(vWorld.xz);float grid=min(abs(fract(vWorld.x*.55-.5)-.5),abs(fract(vWorld.z*.55-.5)-.5));float g=1.0-smoothstep(.003,.015,grid);c=base+vec3(.055,.08,.11)*g*exp(-dist*.16);c+=vec3(.025,.035,.055)*exp(-length(vWorld.xz-vec2(1.8,0.0))*.36);}else if(uMode>.5){c=texture2D(uTexture,vUv).rgb*(.86+.14*max(dot(n,v),0.0));}else{float diffuse=.29+.48*max(dot(n,l),0.0)+.32*max(dot(n,l2),0.0);float spec=pow(max(dot(n,normalize(l+v)),0.0),85.0);float spec2=pow(max(dot(n,normalize(l2+v)),0.0),32.0);float rim=pow(1.0-max(dot(n,v),0.0),3.0);c=base*diffuse+vec3(.9,.98,1.0)*spec*.9+vec3(.38,.55,.8)*spec2*.6+vec3(.22,.35,.5)*rim*.5;}float fog=1.0-exp(-max(0.0,length(uEye-vWorld)-13.0)*.055);c=mix(c,vec3(.027,.039,.063),fog);gl_FragColor=vec4(c,1.0);}`;
  /* A painter-sorted fallback keeps actual meshes visible without a GPU context. */
  function softwareContext(canvas){
    const ctx=canvas.getContext('2d',{alpha:false});if(!ctx)throw Error('No graphics context');
    let buffer=null,texture=null,queue=[];const uniforms={};
    const transform=(m,p,w=1)=>[m[0]*p[0]+m[4]*p[1]+m[8]*p[2]+m[12]*w,m[1]*p[0]+m[5]*p[1]+m[9]*p[2]+m[13]*w,m[2]*p[0]+m[6]*p[1]+m[10]*p[2]+m[14]*w,m[3]*p[0]+m[7]*p[1]+m[11]*p[2]+m[15]*w];
    const light=normalize([-3,5,5]),light2=normalize([5,2,-2]);
    const shade=(base,n,v)=>{const d=.29+.48*Math.max(dot(n,light),0)+.32*Math.max(dot(n,light2),0),s=Math.pow(Math.max(dot(n,normalize(light.map((x,i)=>x+v[i]))),0),85),s2=Math.pow(Math.max(dot(n,normalize(light2.map((x,i)=>x+v[i]))),0),32),rim=Math.pow(1-Math.max(dot(n,v),0),3);return base.map((x,i)=>clamp(x*d+[.9,.98,1][i]*s*.9+[.38,.55,.8][i]*s2*.6+[.22,.35,.5][i]*rim*.5));};
    const noop=()=>{};
    const gl={software:true,createProgram:()=>({}),createShader:()=>({}),shaderSource:noop,compileShader:noop,attachShader:noop,deleteShader:noop,linkProgram:noop,getProgramParameter:()=>true,getProgramInfoLog:()=>'',useProgram:noop,getUniformLocation:(_,n)=>n,getAttribLocation:(_,n)=>['aPosition','aNormal','aUv'].indexOf(n),enableVertexAttribArray:noop,enable:noop,depthFunc:noop,clearColor:noop,createBuffer:()=>({}),bindBuffer:(_,b)=>buffer=b,bufferData:(_,data)=>buffer.data=data,createTexture:()=>({}),bindTexture:(_,t)=>texture=t,pixelStorei:noop,texImage2D:(...args)=>texture.image=args[args.length-1],texParameteri:noop,viewport:noop,vertexAttribPointer:noop,uniformMatrix4fv:(n,_,v)=>uniforms[n]=v,uniform3fv:(n,v)=>uniforms[n]=v,uniform1f:(n,v)=>uniforms[n]=v,uniform1i:noop,deleteBuffer:noop,deleteTexture:noop,deleteProgram:noop,clear:()=>{queue=[];ctx.fillStyle='#070a10';ctx.fillRect(0,0,canvas.width,canvas.height);}};
    gl.drawArrays=(_,start,count)=>{
      let data=buffer.data;const M=uniforms.uModel,VP=uniforms.uVP,eye=uniforms.uEye,mode=uniforms.uMode,base=uniforms.uColor,screenW=canvas.width/2,screenH=canvas.height/2;
      if(mode===1){
        if(!buffer.screenGrid){const xs=[],ys=[];for(let j=0;j<data.length;j+=8){xs.push(data[j]);ys.push(data[j+1]);}const x0=Math.min(...xs),x1=Math.max(...xs),y0=Math.min(...ys),y1=Math.max(...ys),z=data[2],grid=[];const vertex=(u,v)=>[lerp(x0,x1,u),lerp(y0,y1,v),z,0,0,1,u,v];for(let y=0;y<8;y++)for(let x=0;x<8;x++){grid.push(...vertex(x/8,y/8),...vertex((x+1)/8,y/8),...vertex((x+1)/8,(y+1)/8),...vertex(x/8,y/8),...vertex((x+1)/8,(y+1)/8),...vertex(x/8,(y+1)/8));}buffer.screenGrid=new Float32Array(grid);}data=buffer.screenGrid;count=data.length/8;
      }
      for(let i=start*8;i<(start+count)*8;i+=24){
        const raw=[Array.from(data.slice(i,i+3)),Array.from(data.slice(i+8,i+11)),Array.from(data.slice(i+16,i+19))];
        const world=raw.map(p=>transform(M,p)),clip=world.map(p=>transform(VP,p));
        if(clip.some(p=>p[3]<=.05))continue;
        const center=[0,1,2].map(k=>(world[0][k]+world[1][k]+world[2][k])/3),n=normalize(transform(M,Array.from(data.slice(i+3,i+6)),0).slice(0,3)),v=normalize(eye.map((x,k)=>x-center[k]));
        if(mode<2.5&&dot(n,v)<=0)continue;
        const points=clip.map(p=>[screenW+p[0]/p[3]*screenW,screenH-p[1]/p[3]*screenH]);
        if(points.every(p=>p[0]<-10)||points.every(p=>p[0]>canvas.width+10)||points.every(p=>p[1]<-10)||points.every(p=>p[1]>canvas.height+10))continue;
        const area=Math.abs((points[1][0]-points[0][0])*(points[2][1]-points[0][1])-(points[2][0]-points[0][0])*(points[1][1]-points[0][1]));if(area<.04)continue;
        const color=mode===0?shade(base,n,v):base;const depth=mode===2?1e6:(clip[0][3]+clip[1][3]+clip[2][3])/3;const groupDepth=mode===2?1e6:(mode===3?depth:transform(VP,transform(M,[0,0,0]))[3]);
        queue.push({points,depth,groupDepth,color:color.map(x=>Math.round(clamp(x)*255)),image:mode===1?texture.image:null,uv:[[data[i+6],1-data[i+7]],[data[i+14],1-data[i+15]],[data[i+22],1-data[i+23]]]});
      }
    };
    gl.finishFrame=()=>{
      queue.sort((a,b)=>(b.groupDepth-a.groupDepth)||(b.depth-a.depth));
      for(const q of queue){
        const [a,b,c]=q.points;const mid=[(a[0]+b[0]+c[0])/3,(a[1]+b[1]+c[1])/3];const expanded=q.points.map(p=>{const dx=p[0]-mid[0],dy=p[1]-mid[1],k=1+.9/Math.max(1,Math.hypot(dx,dy));return[mid[0]+dx*k,mid[1]+dy*k];});ctx.beginPath();ctx.moveTo(...expanded[0]);ctx.lineTo(...expanded[1]);ctx.lineTo(...expanded[2]);ctx.closePath();
        if(!q.image){ctx.fillStyle=`rgb(${q.color.join(',')})`;ctx.fill();ctx.strokeStyle=ctx.fillStyle;ctx.lineWidth=.45;ctx.stroke();continue;}
        const [s,t,u]=q.uv.map(([x,y])=>[x*q.image.width,y*q.image.height]);const det=(t[0]-s[0])*(u[1]-s[1])-(u[0]-s[0])*(t[1]-s[1]);if(Math.abs(det)<.0001)continue;
        const ma=((b[0]-a[0])*(u[1]-s[1])-(c[0]-a[0])*(t[1]-s[1]))/det,mc=((c[0]-a[0])*(t[0]-s[0])-(b[0]-a[0])*(u[0]-s[0]))/det,mb=((b[1]-a[1])*(u[1]-s[1])-(c[1]-a[1])*(t[1]-s[1]))/det,md=((c[1]-a[1])*(t[0]-s[0])-(b[1]-a[1])*(u[0]-s[0]))/det;
        ctx.save();ctx.clip();ctx.transform(ma,mb,mc,md,a[0]-ma*s[0]-mc*s[1],a[1]-mb*s[0]-md*s[1]);ctx.drawImage(q.image,0,0);ctx.restore();
      }
    };
    return gl;
  }

  function createRenderer(){
    const gl=canvas.getContext('webgl',{alpha:true,antialias:true,powerPreference:'low-power',premultipliedAlpha:false})||softwareContext(canvas);
    const buffers=[],textures=[],program=gl.createProgram();
    for(const [type,source]of[[gl.VERTEX_SHADER,VERTEX],[gl.FRAGMENT_SHADER,FRAGMENT]]){const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);gl.attachShader(program,s);gl.deleteShader(s);}
    gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(program)||'Shader compilation failed');gl.useProgram(program);
    const U={};for(const name of ['uModel','uVP','uColor','uEye','uMode','uTexture'])U[name]=gl.getUniformLocation(program,name);
    const A=['aPosition','aNormal','aUv'].map(n=>gl.getAttribLocation(program,n));A.forEach(a=>gl.enableVertexAttribArray(a));
    gl.enable(gl.DEPTH_TEST);gl.depthFunc(gl.LEQUAL);gl.clearColor(.027,.039,.063,1);
    function geometry(vertices){const b=gl.createBuffer();buffers.push(b);gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(vertices),gl.STATIC_DRAW);return{buffer:b,count:vertices.length/8};}
    function texture(kind){const t=gl.createTexture();textures.push(t);gl.bindTexture(gl.TEXTURE_2D,t);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,makeTexture(kind));gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);return t;}
    const T={};for(const kind of ['website','keyboard','phone','graph','pipeline'])T[kind]=texture(kind);
    const silver=[.43,.50,.60],edge=[.13,.18,.25],black=[.021,.029,.046],stand=[.31,.39,.49];
    const object=(shape,color,local=identity(),mode=0,tex=null)=>({shape:geometry(shape),color,local,mode,tex});
    const laptop=[object(rounded(3.6,2.28,.13,.12),silver,compose(0,-.48,.10,-Math.PI/2)),object(front(3.47,2.12,.10),[1,1,1],compose(0,-.404,.10,-Math.PI/2),1,T.keyboard)];
    const lid=[object(rounded(3.58,2.21,.115,.13),silver,translation(0,1.08,0)),object(rounded(3.46,2.10,.014,.095),black,translation(0,1.08,.064)),object(front(3.33,1.96,.07),[1,1,1],translation(0,1.08,.075),1,T.website),object(rounded(.15,.035,.012,.015),black,translation(0,2.113,.084))];
    const phone=[object(rounded(1.16,2.40,.16,.18),silver),object(rounded(1.102,2.34,.025,.165),black,translation(0,0,.085)),object(front(1.049,2.255,.138),[1,1,1],translation(0,0,.102),1,T.phone),object(rounded(.31,.085,.018,.042),black,translation(0,1.017,.116)),object(rounded(.017,.22,.07,.006),stand,translation(.587,.35,0)),object(rounded(.017,.18,.07,.006),stand,translation(-.587,.41,0)),object(rounded(.32,.6,.04,.09),edge,translation(.32,.76,-.10))];
    const tablet=[object(rounded(2.95,2.04,.105,.15),silver),object(rounded(2.85,1.94,.016,.13),black,translation(0,0,.060)),object(front(2.72,1.81,.086),[1,1,1],translation(0,0,.073),1,T.graph)];
    const monitor=[object(rounded(3.63,2.30,.14,.10),silver,translation(0,.18,0)),object(front(3.46,2.13,.055),[1,1,1],translation(0,.18,.080),1,T.pipeline),object(rounded(.34,.80,.14,.055),stand,translation(0,-1.15,-.06)),object(rounded(1.28,.75,.085,.16),silver,compose(0,-1.54,.09,-Math.PI/2))];
    const floor=object(plane(80,80),[.025,.034,.050],compose(0,-1.80,0,-Math.PI/2),2);
    const planet=object(sphere(3,12,24),[.048,.071,.104],translation(9,5,-12));
    const orbit=object(torus(3.6,.008),[.22,.46,.58],identity(),3),orbit2=object(torus(4.2,.007,Math.PI*1.65),[.13,.24,.37],identity(),3);
    const starVertices=[];for(let i=0;i<135;i++){const x=Math.sin(i*127.1)*20,y=1+(Math.sin(i*31.7)+1)*6,z=-12-Math.abs(Math.sin(i*12.9))*15,r=.008+(i%4)*.003;starVertices.push(x-r,y-r,z,0,0,1,0,0,x+r,y-r,z,0,0,1,1,0,x,y+r,z,0,0,1,.5,1);}const stars=object(starVertices,[.24,.33,.43],identity(),3);
    let width=0,height=0,draws=0,frames=0;
    function resize(){const w=Math.max(1,Math.round(stage.clientWidth)),h=Math.max(1,Math.round(document.body.classList.contains('interactive')?stage.clientHeight:canvas.clientHeight));const dpr=gl.software?Math.min(1,1440/w):Math.min(devicePixelRatio||1,w<701?1.5:1.75);width=w;height=h;canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);gl.viewport(0,0,canvas.width,canvas.height);}
    function draw(item,parent){gl.bindBuffer(gl.ARRAY_BUFFER,item.shape.buffer);A.forEach((a,i)=>gl.vertexAttribPointer(a,i===2?2:3,gl.FLOAT,false,32,[0,12,24][i]));gl.uniformMatrix4fv(U.uModel,false,multiply(parent,item.local));gl.uniform3fv(U.uColor,item.color);gl.uniform1f(U.uMode,item.mode);gl.bindTexture(gl.TEXTURE_2D,item.tex||T.website);gl.drawArrays(gl.TRIANGLES,0,item.shape.count);draws++;}
    const mixPose=(a,b,t)=>a.map((v,i)=>lerp(v,b[i],t));
    function render(p,mouseX=0,mouseY=0,staticView=false){
      if(!width)resize();draws=0;const mobile=width<701;
      const viewHeight=staticView?4.8:(mobile?8.7:6.0),camZ=viewHeight/(2*Math.tan(Math.PI/9));
      const eye=staticView?[mobile?0:1.8,1.0,camZ]:[mouseX*.13,1.0+mouseY*.07,camZ];const look=staticView?[mobile?0:1.8,-.60,0]:[0,mobile?1.35:0,0];
      gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.useProgram(program);gl.uniformMatrix4fv(U.uVP,false,multiply(perspective(Math.PI/4.5,width/height),lookAt(eye,look)));gl.uniform3fv(U.uEye,eye);gl.uniform1i(U.uTexture,0);
      draw(planet,identity());draw(stars,rotationY(p*.055));draw(floor,identity());
      const open=smooth(0,.16,p),toPhone=smooth(.29,.44,p),toSystem=smooth(.54,.67,p),toFinal=smooth(.80,.96,p);
      const baseX=mobile?0:1.8,baseY=mobile?(height<740?-.55:-.38):.10;
      let a=[baseX,baseY,0,.06,-.36,-.055,mobile?.90:1.0];
      a=mixPose(a,[baseX+.10,baseY-.02,.6,.02,-.18,-.025,mobile?.93:1.05],smooth(.03,.23,p));
      a=mixPose(a,[-4.8,baseY-.20,-3,.12,.45,-.09,.55],toPhone);
      a=mixPose(a,[mobile?-1.04:.08,mobile?-.63:-.35,mobile?-.2:.5,.05,.30,-.035,mobile?.44:.55],toFinal);
      const lidAngle=lerp(.36,1.86,open);const rootA=compose(...a);if(toPhone<1||toFinal>0){laptop.forEach(o=>draw(o,rootA));const hinge=multiply(rootA,compose(0,-.38,-.99,Math.PI/2-lidAngle));lid.forEach(o=>draw(o,hinge));}
      let b=mixPose([6,baseY+.3,-2,0,-1.15,.18,.75],[baseX+.14,baseY+.22,.9,-.04,-.21,.105,mobile?1.15:1.25],toPhone);
      b=mixPose(b,[-4.5,baseY,-3,0,.65,-.10,.60],toSystem);
      b=mixPose(b,[mobile?0:1.80,mobile?-.94:-.55,mobile?.7:1.25,0,-.10,.035,mobile?.71:.82],toFinal);
      if(toPhone>0&&(toSystem<1||toFinal>0))phone.forEach(o=>draw(o,compose(...b)));
      let c=mixPose([7,baseY,-4,0,-.8,-.12,.65],[baseX-.55,baseY-.20,1.0,.08,.12,-.085,mobile?.79:.9],toSystem);
      c=mixPose(c,[mobile?.98:3.42,mobile?-.98:-.78,mobile?.3:1.0,.06,-.18,.025,mobile?.45:.58],toFinal);
      let d=mixPose([8,baseY+1,-5,0,-.7,.04,.70],[baseX+.83,baseY+.70,-.75,0,-.30,.02,mobile?.67:.94],toSystem);
      d=mixPose(d,[mobile?.72:3.65,mobile?-.15:.41,-.8,0,-.22,0,mobile?.45:.72],toFinal);
      if(toSystem>0){monitor.forEach(o=>draw(o,compose(...d)));tablet.forEach(o=>draw(o,compose(...c)));}
      if(toFinal>.01){const orbitRoot=compose(mobile?0:1.8,-1.72,.0,0,p*.18,0,(mobile?.49:.80)*toFinal);draw(orbit,orbitRoot);draw(orbit2,orbitRoot);}
      canvas.dataset.lidAngle=lidAngle.toFixed(3);canvas.dataset.frames=String(++frames);canvas.dataset.drawCalls=String(draws);if(gl.finishFrame)gl.finishFrame();canvas.dataset.renderer=gl.software?'canvas2d':'webgl';canvas.dataset.progress=p.toFixed(4);
    }
    function dispose(){buffers.forEach(b=>gl.deleteBuffer(b));textures.forEach(t=>gl.deleteTexture(t));gl.deleteProgram(program);}
    return{resize,render,dispose};
  }
  function measure(){const rect=story.getBoundingClientRect();sceneVisible=rect.bottom>0&&rect.top<innerHeight;target=clamp(-rect.top/Math.max(1,story.offsetHeight-stage.offsetHeight));}
  function frame(now){raf=0;if(document.hidden||!renderer||!sceneVisible)return;const dt=Math.min(50,now-lastTime||16);lastTime=now;const alpha=1-Math.exp(-dt/95);progress=lerp(progress,target,alpha);px=lerp(px,tx,alpha);py=lerp(py,ty,alpha);if(isStatic()){renderer.render(.97,0,0,true);setChapter(0);return;}renderer.render(progress,px,py);setChapter(chapterAt(progress));document.getElementById('story-progress').style.transform=`scaleX(${progress})`;if(Math.abs(progress-target)>.0001||Math.abs(px-tx)>.001||Math.abs(py-ty)>.001)raf=requestAnimationFrame(frame);}
  function schedule(){measure();if(!raf&&!document.hidden&&sceneVisible)raf=requestAnimationFrame(frame);}
  function applyMode(){document.body.classList.toggle('interactive',!isStatic());document.body.classList.toggle('static-mode',isStatic());setChapter(0);updateMotionLabel();if(renderer)renderer.resize();measure();progress=target;schedule();}
  function initialise(){try{renderer=createRenderer();document.body.classList.add('gpu-ready');applyMode();}catch(error){console.warn('3D scene unavailable; using the readable portfolio.',error);renderer=null;document.body.classList.remove('gpu-ready');applyMode();}}
  manualStatic=storage.get('sshorg.experience.static')==='true';
  const initialLang=storage.get('sshorg.experience.lang')||(navigator.languages||[navigator.language]).map(s=>s?.split('-')[0]).find(s=>translations[s])||'en';updateLanguage(initialLang);
  languageSelect.addEventListener('change',()=>updateLanguage(languageSelect.value));
  motionButton.addEventListener('click',()=>{manualStatic=!isStatic();if(reduced.matches)manualStatic=true;storage.set('sshorg.experience.static',String(manualStatic));applyMode();if(story.getBoundingClientRect().bottom<0)story.scrollIntoView({behavior:'instant'});});
  document.querySelectorAll('[data-jump]').forEach(b=>b.addEventListener('click',()=>{const distance=story.offsetHeight-stage.offsetHeight;window.scrollTo({top:scrollY+story.getBoundingClientRect().top+jumps[Number(b.dataset.jump)]*distance,behavior:reduced.matches?'instant':'smooth'});}));
  window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',()=>{if(renderer)renderer.resize();schedule();});
  stage.addEventListener('pointermove',e=>{if(!fine.matches||isStatic()||e.pointerType==='touch')return;tx=(e.clientX/innerWidth-.5)*2;ty=(e.clientY/innerHeight-.5)*2;schedule();},{passive:true});
  stage.addEventListener('pointerleave',()=>{tx=ty=0;schedule();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0;}else schedule();});
  reduced.addEventListener('change',()=>{tx=ty=px=py=0;applyMode();});
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();cancelAnimationFrame(raf);raf=0;renderer=null;document.body.classList.remove('gpu-ready');applyMode();});
  canvas.addEventListener('webglcontextrestored',initialise);
  if('IntersectionObserver'in window)new IntersectionObserver(entries=>{sceneVisible=entries.some(e=>e.isIntersecting);if(sceneVisible)schedule();else{cancelAnimationFrame(raf);raf=0;}}).observe(story);
  window.addEventListener('pageshow',schedule);
  initialise();
})();
