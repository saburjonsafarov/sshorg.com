// sshorg.com — язык (ru/tg/en) и тема. Прогрессивное улучшение: без JS страница остаётся полной на русском.
'use strict';

const translations = {
  ru: {
    greeting: 'Привет, я Сабурджон.',
    role: 'Senior Android · Kotlin Multiplatform инженер',
    tagline: 'Продуктовый инженер: общий Kotlin-код для Android и iOS, забота об UI/UX и разработка, выстроенная вокруг ИИ-агентов.',
    location: 'Худжанд, Таджикистан · Eskhata Bank, команда Mobile Platform',
    cta_telegram: 'Написать в Telegram',
    nav_exp: 'Опыт',
    nav_projects: 'Проекты',
    nav_how: 'Метод',
    nav_contacts: 'Контакты',
    strengths_title: 'Чем я силён',
    s_kmp: 'Ранний адоптер и чемпион KMP: занёс технологию в банк — общий модуль EWalletKmp питает Android- и iOS-клиенты кошелька.',
    s_ai_title: 'AI-augmented разработка',
    s_ai: 'Придумал и сам внедрил AI Code Review в CI банка: Claude читает весь контекст проекта, а не только diff, — ревью каждого PR в 48 раз быстрее, ожидание сократилось на 98%.',
    s_legacy_title: 'Модернизация легаси',
    s_legacy: 'Перевожу легаси-монолиты на современный стек — Compose, Ktor, модуляризация, статанализ — стратегией strangler, не останавливая продукт.',
    s_product_title: 'Продукт и дизайн',
    s_product: 'Не прощаю плохой UX: island-эстетика, анимации, нативные жесты; каждую фичу проверяю на реальных устройствах.',
    statement_kmp: 'Один Kotlin. Обе платформы.',
    kmp_common_title: 'Общий Kotlin-код',
    kmp_common_sub: 'домен · данные · сеть — одна кодовая база',
    kmp_android_sub: 'нативный UI на Jetpack Compose',
    kmp_ios_sub: 'нативный UI на SwiftUI',
    kmp_caption: 'Логика — общая. UI — нативный.',
    statement_craft: 'Хороший продукт собирается из деталей.',
    stat_review: 'быстрее код-ревью с ИИ',
    stat_wait: 'меньше ожидания ревью',
    stat_years: 'лет в одной команде',
    exp_title: 'Опыт',
    exp_text: 'Путь начал ещё студентом — волонтёром в отделе разработки Худжандского политеха (оттуда вырос DicTeach). Bank Eskhata, Худжанд — почти пять лет в одной команде: волонтёр (ноябрь 2021) → стажёр → Junior → Middle → Senior Android-разработчик с ноября 2025; менторство джунов. Траектория технологий: C#/.NET → Kotlin/Android → Kotlin Multiplatform → сейчас осваиваю Swift/iOS.',
    hl_title: 'Ключевое в Mobile Platform',
    hl_ai: 'Придумал и внедрил AI Code Review — Claude в CI ревьюит каждый PR, в проде',
    hl_kmp: 'Занёс Kotlin Multiplatform: EWalletKmp — общее ядро Android- и iOS-кошельков',
    hl_core: 'Ядро супераппа: модули переводов и платежей с требованиями безопасности',
    hl_build: 'Модернизировал сборку: buildSrc → build-logic с convention plugins, non-transitive R — быстрее локально и в CI',
    hl_appsflyer: 'Интегрировал маркетинговую атрибуцию и deep links (AppsFlyer OneLink) — ссылка кампании ведёт точно в нужный экран, в проде',
    hl_quality: 'Поднял планку качества: detekt с type-resolution в CI, gitflow, валидация веток',
    projects_title: 'Проекты',
    tag_oss: 'опенсорс',
    tag_work: 'работа',
    tag_edu: 'для вуза',
    tag_rnd: 'личный R&D',
    p_aide: 'Собственная AI-IDE для macOS на SwiftUI: оркестратор классифицирует запросы по сложности и маршрутизирует между локальными моделями (Ollama) и облачными LLM — со sticky-роутингом, прогревом предсказанной модели во время набора и авто-фолбэком на локальные при потере сети.',
    p_graph: 'Первый force-directed граф для Compose Multiplatform (Android · iOS · Desktop): ядро физики без единой зависимости с Barnes-Hut O(n log n), Compose-рендерер и парсер Obsidian-вольтов. Apache-2.0, опубликована в Maven.',
    p_eskhata: 'Суперприложение Eskhata Bank в Google Play: платежи и переводы, карты, рассрочка, сбережения. Мои зоны: модули переводов и платежей, миграции сборки (Version Catalog, производительность Gradle), архитектурные ревью и общий KMP-код для Android и iOS.',
    p_dicteach: 'Словарь-разговорник на трёх языках — таджикский, русский, английский — для Худжандского политеха. Опубликован в Google Play.',
    stack_title: 'Стек',
    how_title: 'Как я работаю',
    how_lede: 'Рабочая модель — tech lead и архитектор, чья команда — ИИ-агенты: декомпозиция задач на параллельные агентские сессии, петли верификации, эволюционная архитектура — и финальная ответственность на мне.',
    how_spec_title: 'Спека раньше кода',
    how_spec: 'Любая задача начинается со спеки: от пары строк с одним критерием приёмки до полного конвейера с чекпоинтами. Критерии — в нотации EARS: каждое требование проверяемо.',
    how_agents_title: 'ИИ-агенты — часть команды',
    how_agents: 'Работаю с ИИ-агентами каждый день: параллельные сессии, очередь задач, сквозной цикл «код → merge → deploy → тест на устройстве». Для важных решений — панель независимых агентов и судей.',
    how_tools_title: 'Нет инструмента — построю',
    how_tools: 'AI-ревьюер для CI, собственная AI-IDE, автоматизация рутины: если инструмента не хватает, я его делаю.',
    how_bar_title: 'Планку держит человек',
    how_bar: 'ИИ ускоряет, но не решает: тесты, статанализ, adversarial-ревью перед первым запуском CI — и финальное слово всегда за инженером. Даже физику графа проверяю кадрами рендера в CI, а не на глаз.',
    edu_title: 'Образование',
    edu_text: 'Худжандский политехнический институт Таджикского технического университета — бакалавр программной инженерии (2020–2024), красный диплом.',
    hire_title: 'Создаю продукты на заказ',
    hire_text: 'Беру проекты под ключ: мобильные приложения на Kotlin Multiplatform (Android + iOS из одной кодовой базы), сайты, Telegram-боты и автоматизация. От идеи до продакшена: спека, дизайн, код, деплой.',
    hire_cta: 'Обсудить проект',
    contacts_title: 'Контакты',
    cv_label: 'Резюме (PDF)',
    cv_url: 'https://raw.githubusercontent.com/saburjonsafarov/saburjonsafarov/main/cv_ru.pdf',
    footer_name: 'Сабурджон Сафаров',
    footer_note: 'Без фреймворков: HTML + CSS + капля JS.',
    doc_title: 'Сабурджон Сафаров — Senior Android · Kotlin Multiplatform инженер',
  },
  tg: {
    greeting: 'Салом, ман Сабурҷон.',
    role: 'Senior Android · муҳандиси Kotlin Multiplatform',
    tagline: 'Муҳандиси маҳсулот: коди умумии Kotlin барои Android ва iOS, ғамхорӣ ба UI/UX ва таҳияе, ки дар атрофи агентҳои зеҳни сунъӣ сохта шудааст.',
    location: 'Хуҷанд, Тоҷикистон · Бонки «Эсхата», дастаи Mobile Platform',
    cta_telegram: 'Дар Telegram нависед',
    nav_exp: 'Таҷриба',
    nav_projects: 'Лоиҳаҳо',
    nav_how: 'Усул',
    nav_contacts: 'Тамос',
    strengths_title: 'Тавоноиҳои ман',
    s_kmp: 'Пешсаф ва чемпиони KMP: ин технологияро ба бонк овардам — модули умумии EWalletKmp клиентҳои Android ва iOS-и ҳамёнро таъмин мекунад.',
    s_ai_title: 'Таҳияи AI-augmented',
    s_ai: 'AI Code Review-ро дар CI-и бонк худам пешниҳод ва ҷорӣ кардам: Claude на танҳо diff, балки тамоми контексти лоиҳаро мехонад — баррасии ҳар PR 48 маротиба тезтар, интизорӣ 98% кам шуд.',
    s_legacy_title: 'Навсозии коди легаси',
    s_legacy: 'Монолитҳои кӯҳнаро ба стеки муосир мегузаронам — Compose, Ktor, модулбандӣ, таҳлили статикӣ — бо стратегияи strangler, бе таваққуфи маҳсулот.',
    s_product_title: 'Маҳсулот ва дизайн',
    s_product: 'UX-и бадро намебахшам: эстетикаи island, аниматсияҳо, жестҳои нативӣ; ҳар хусусиятро дар дастгоҳҳои воқеӣ месанҷам.',
    statement_kmp: 'Як Kotlin. Ҳар ду платформа.',
    kmp_common_title: 'Коди умумии Kotlin',
    kmp_common_sub: 'домен · додаҳо · шабака — як кодбаза',
    kmp_android_sub: 'UI-и нативӣ дар Jetpack Compose',
    kmp_ios_sub: 'UI-и нативӣ дар SwiftUI',
    kmp_caption: 'Мантиқ — умумӣ. UI — нативӣ.',
    statement_craft: 'Маҳсулоти хуб аз ҷузъиёт сохта мешавад.',
    stat_review: 'код-ревю бо зеҳни сунъӣ тезтар',
    stat_wait: 'интизории ревю камтар',
    stat_years: 'сол дар як даста',
    exp_title: 'Таҷриба',
    exp_text: 'Роҳро ҳанӯз донишҷӯ буданам — ихтиёрӣ дар шуъбаи таҳияи барномаҳои Донишкадаи политехникии Хуҷанд оғоз кардам (DicTeach аз ҳамон ҷо баромад). Бонки «Эсхата», Хуҷанд — қариб панҷ сол дар як даста: ихтиёрӣ (ноябри 2021) → таҷрибаомӯз → Junior → Middle → аз ноябри 2025 Senior Android-барномасоз; роҳбаладии ҷавонон. Траекторияи технологияҳо: C#/.NET → Kotlin/Android → Kotlin Multiplatform → ҳоло Swift/iOS меомӯзам.',
    hl_title: 'Корҳои асосӣ дар Mobile Platform',
    hl_ai: 'AI Code Review-ро фикр карда, ҷорӣ намудам — Claude дар CI ҳар PR-ро баррасӣ мекунад, дар прод',
    hl_kmp: 'Kotlin Multiplatform-ро ворид кардам: EWalletKmp — ядрои умумии ҳамёнҳои Android ва iOS',
    hl_core: 'Ядрои суперзамима: модулҳои интиқол ва пардохт бо талаботи амният',
    hl_build: 'Сборкаро навсозӣ кардам: buildSrc → build-logic бо convention plugins, non-transitive R — тезтар ҳам локалӣ, ҳам дар CI',
    hl_appsflyer: 'Атрибутсияи маркетингӣ ва deep links-ро ҷорӣ кардам (AppsFlyer OneLink) — пайванди кампания маҳз ба экрани лозимӣ мебарад, дар прод',
    hl_quality: 'Меъёри сифатро баланд кардам: detekt бо type-resolution дар CI, gitflow, санҷиши номи веткаҳо',
    projects_title: 'Лоиҳаҳо',
    tag_oss: 'опенсорс',
    tag_work: 'ҷои кор',
    tag_edu: 'барои донишкада',
    tag_rnd: 'R&D-и шахсӣ',
    p_aide: 'AI-IDE-и худӣ барои macOS дар SwiftUI: оркестратор дархостҳоро аз рӯи мураккабӣ ҷудо карда, байни моделҳои локалӣ (Ollama) ва LLM-ҳои абрӣ равона мекунад — бо sticky-роутинг, гармкунии модели пешбинишуда ҳангоми навиштан ва фолбэки худкор ба моделҳои локалӣ ҳангоми қатъи шабака.',
    p_graph: 'Аввалин графи force-directed барои Compose Multiplatform (Android · iOS · Desktop): ядрои физика бе ягон вобастагӣ бо Barnes-Hut O(n log n), рендерери Compose ва парсери Obsidian. Apache-2.0, дар Maven нашр шудааст.',
    p_eskhata: 'Суперзамимаи Бонки «Эсхата» дар Google Play: пардохту интиқолҳо, кортҳо, қистбандӣ, пасандозҳо. Соҳаҳои ман: модулҳои интиқол ва пардохт, муҳоҷирати сборка (Version Catalog, суръати Gradle), баррасиҳои меъморӣ ва коди умумии KMP барои Android ва iOS.',
    p_dicteach: 'Луғат ва китоби гуфтугӯ ба се забон — тоҷикӣ, русӣ, англисӣ — барои Донишкадаи политехникии Хуҷанд. Дар Google Play нашр шудааст.',
    stack_title: 'Стек',
    how_title: 'Чӣ тавр кор мекунам',
    how_lede: 'Модели кории ман — tech lead ва меъмор, ки дастааш аз агентҳои зеҳни сунъӣ иборат аст: тақсими вазифаҳо ба сессияҳои мувозии агентӣ, давраҳои санҷиш, меъмории таҳаввулшаванда — ва масъулияти ниҳоӣ бар дӯши ман.',
    how_spec_title: 'Аввал спека, баъд код',
    how_spec: 'Ҳар вазифа аз спека сар мешавад: аз ду сатр бо як меъёри қабул то конвейери пурра бо чекпоинтҳо. Меъёрҳо — бо нотацияи EARS: ҳар талабот санҷидашаванда аст.',
    how_agents_title: 'Агентҳои ЗС — қисми даста',
    how_agents: 'Ҳар рӯз бо агентҳои зеҳни сунъӣ кор мекунам: сессияҳои мувозӣ, навбати вазифаҳо, сикли пурраи «код → merge → deploy → тест дар дастгоҳ». Барои қарорҳои муҳим — панели агентҳо ва доварони мустақил.',
    how_tools_title: 'Абзор нест? Месозам',
    how_tools: 'AI-ревьюер барои CI, AI-IDE-и худӣ, автоматикунонии корҳои такрорӣ: агар абзор нарасад, худам месозам.',
    how_bar_title: 'Меъёрро инсон нигоҳ медорад',
    how_bar: 'ЗС суръат мебахшад, аммо қарор намедиҳад: тестҳо, таҳлили статикӣ, adversarial-ревью пеш аз аввалин CI — ва сухани охирин ҳамеша аз они муҳандис аст. Ҳатто физикаи графро бо кадрҳои рендер дар CI месанҷам, на бо чашм.',
    edu_title: 'Таҳсилот',
    edu_text: 'Донишкадаи политехникии Хуҷанди Донишгоҳи техникии Тоҷикистон — бакалавр аз рӯи муҳандисии барнома (2020–2024), дипломи аъло.',
    hire_title: 'Маҳсулот бо фармоиш месозам',
    hire_text: 'Лоиҳаҳоро пурра ба ӯҳда мегирам: замимаҳои мобилӣ дар Kotlin Multiplatform (Android + iOS аз як код), сайтҳо, Telegram-ботҳо ва автоматикунонӣ. Аз идея то продакшен: спека, дизайн, код, деплой.',
    hire_cta: 'Лоиҳаро муҳокима кунем',
    contacts_title: 'Тамос',
    cv_label: 'Резюме (PDF)',
    cv_url: 'https://raw.githubusercontent.com/saburjonsafarov/saburjonsafarov/main/cv_ru.pdf',
    footer_name: 'Сабурҷон Сафаров',
    footer_note: 'Бе фреймворкҳо: HTML + CSS + як қатра JS.',
    doc_title: 'Сабурҷон Сафаров — Senior Android · муҳандиси Kotlin Multiplatform',
  },
  en: {
    greeting: "Hi, I'm Saburjon.",
    role: 'Senior Android · Kotlin Multiplatform engineer',
    tagline: 'Product engineer: shared Kotlin code for Android and iOS, real care for UI/UX, and development built around AI agents.',
    location: 'Khujand, Tajikistan · Eskhata Bank, Mobile Platform team',
    cta_telegram: 'Message me on Telegram',
    nav_exp: 'Experience',
    nav_projects: 'Projects',
    nav_how: 'Method',
    nav_contacts: 'Contact',
    strengths_title: "What I'm good at",
    s_kmp: 'Early KMP adopter and champion: I brought it into the bank — the shared EWalletKmp module powers the Android and iOS wallet clients.',
    s_ai_title: 'AI-augmented development',
    s_ai: "Came up with AI Code Review for the bank's CI and shipped it myself: Claude reads the whole project context, not just the diff — every PR reviewed 48× faster, 98% less waiting.",
    s_legacy_title: 'Legacy modernization',
    s_legacy: 'I move legacy monoliths onto a modern stack — Compose, Ktor, modularization, static analysis — using the strangler pattern, without pausing the product.',
    s_product_title: 'Product and design',
    s_product: "I don't let bad UX slide: island aesthetics, animations, native gestures; I test every feature on real devices.",
    statement_kmp: 'One Kotlin. Both platforms.',
    kmp_common_title: 'Shared Kotlin code',
    kmp_common_sub: 'domain · data · networking — one codebase',
    kmp_android_sub: 'native UI in Jetpack Compose',
    kmp_ios_sub: 'native UI in SwiftUI',
    kmp_caption: 'Logic shared. UI native.',
    statement_craft: 'Great products are made of details.',
    stat_review: 'faster code review with AI',
    stat_wait: 'less review waiting',
    stat_years: 'years on one team',
    exp_title: 'Experience',
    exp_text: 'I started as a student volunteer at Khujand Polytechnic\'s software department (DicTeach grew out of it). Bank Eskhata, Khujand — nearly five years on one team: volunteer (November 2021) → intern → Junior → Middle → Senior Android developer since November 2025; mentoring juniors. Tech trajectory: C#/.NET → Kotlin/Android → Kotlin Multiplatform → currently picking up Swift/iOS.',
    hl_title: 'Mobile Platform highlights',
    hl_ai: 'Conceived and shipped AI Code Review — Claude reviews every PR in CI, live in production',
    hl_kmp: 'Brought in Kotlin Multiplatform: EWalletKmp, the shared core of the Android and iOS wallets',
    hl_core: 'Super-app core: the transfers and payments modules, built to security requirements',
    hl_build: 'Modernized the build: buildSrc → build-logic with convention plugins, non-transitive R — faster locally and in CI',
    hl_appsflyer: 'Integrated marketing attribution and deep links (AppsFlyer OneLink) — a campaign link lands exactly on the right screen, live in production',
    hl_quality: 'Raised the quality bar: detekt with type resolution in CI, gitflow, branch-name validation',
    projects_title: 'Projects',
    tag_oss: 'open source',
    tag_work: 'work',
    tag_edu: 'for the university',
    tag_rnd: 'personal R&D',
    p_aide: 'My own AI IDE for macOS in SwiftUI: an orchestrator classifies requests by complexity and routes them between local models (Ollama) and cloud LLMs — with sticky routing, pre-warming the predicted model while you type, and automatic fallback to local models when offline.',
    p_graph: 'The first force-directed graph for Compose Multiplatform (Android · iOS · Desktop): a dependency-free physics core with Barnes-Hut O(n log n), a Compose renderer and an Obsidian vault parser. Apache-2.0, published to Maven.',
    p_eskhata: 'Eskhata Bank\'s super-app on Google Play: payments and transfers, cards, instalments, savings. My areas: the transfers and payments modules, build migrations (Version Catalog, Gradle performance), architecture reviews and shared KMP code for Android and iOS.',
    p_dicteach: 'A three-language dictionary and phrasebook — Tajik, Russian, English — built for Khujand Polytechnic Institute. Published on Google Play.',
    stack_title: 'Stack',
    how_title: 'How I work',
    how_lede: 'My working model is a tech lead and architect whose team is AI agents: decomposing work into parallel agent sessions, verification loops, evolutionary architecture — with final accountability staying with me.',
    how_spec_title: 'Spec before code',
    how_spec: 'Every task starts with a spec: from a couple of lines with one acceptance criterion to a full pipeline with checkpoints. Criteria are written in EARS notation — every requirement is testable.',
    how_agents_title: 'AI agents on the team',
    how_agents: 'I work with AI agents every day: parallel sessions, a task queue, a full “code → merge → deploy → test on device” loop. Big decisions go through a panel of independent agents and judges.',
    how_tools_title: 'No tool? I build it',
    how_tools: 'An AI reviewer for CI, my own AI IDE, automation for the routine: when a tool is missing, I make one.',
    how_bar_title: 'The bar stays human',
    how_bar: 'AI speeds things up but does not decide: tests, static analysis, adversarial review before the first CI run — and the final word always belongs to the engineer. Even graph physics gets verified by rendered CI frames, not by eye.',
    edu_title: 'Education',
    edu_text: 'Khujand Polytechnic Institute of Tajik Technical University — BSc in software engineering (2020–2024), graduated with honors.',
    hire_title: 'I build products on commission',
    hire_text: 'I take on projects end to end: mobile apps in Kotlin Multiplatform (Android + iOS from one codebase), websites, Telegram bots and automation. From idea to production: spec, design, code, deploy.',
    hire_cta: "Let's discuss your project",
    contacts_title: 'Contact',
    cv_label: 'CV (PDF)',
    cv_url: 'https://raw.githubusercontent.com/saburjonsafarov/saburjonsafarov/main/cv_en.pdf',
    footer_name: 'Saburjon Safarov',
    footer_note: 'No frameworks: HTML + CSS + a dash of JS.',
    doc_title: 'Saburjon Safarov — Senior Android · Kotlin Multiplatform engineer',
  },
};

const LANG_KEY = 'sshorg.lang';
const THEME_KEY = 'sshorg.theme';

let typingTimer = null;

function stopTyping() {
  if (typingTimer !== null) {
    clearInterval(typingTimer);
    typingTimer = null;
  }
  const target = document.getElementById('typedGreeting');
  if (target) {
    target.classList.remove('typing-caret');
  }
}

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) {
    return;
  }
  stopTyping();
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const text = dict[element.dataset.i18n];
    if (text) {
      element.textContent = text;
    }
  });
  document.documentElement.lang = lang;
  document.title = dict.doc_title;
  const cvLink = document.getElementById('cvLink');
  if (cvLink) {
    cvLink.href = dict.cv_url;
  }
  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  });
  localStorage.setItem(LANG_KEY, lang);
}

function initialLanguage() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved && translations[saved]) {
    return saved;
  }
  const preferred = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || ''];
  for (const tag of preferred) {
    const base = tag.toLowerCase().split('-')[0];
    if (translations[base]) {
      return base;
    }
  }
  // Незнакомая локаль — англоязычный посетитель обслуживается лучше английским.
  return 'en';
}

function effectiveTheme() {
  const explicit = document.documentElement.dataset.theme;
  if (explicit) {
    return explicit;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function toggleTheme() {
  const next = effectiveTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem(THEME_KEY, next);
}

function typeGreeting() {
  const target = document.getElementById('typedGreeting');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!target || reducedMotion) {
    return;
  }
  const fullText = target.textContent;
  target.textContent = '';
  target.classList.add('typing-caret');
  let index = 0;
  typingTimer = setInterval(() => {
    index += 1;
    target.textContent = fullText.slice(0, index);
    if (index >= fullText.length) {
      stopTyping();
    }
  }, 45);
}

// Метка «JS работает»: только с ней CSS прячет .reveal-блоки до появления в вьюпорте.
document.documentElement.classList.add('js');

// Лендинг всегда открывается с начала: браузерное восстановление позиции скролла
// после перезагрузки ломает вводную анимацию hero.
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    window.scrollTo(0, 0);
  }
});

function initHeroParallax() {
  const hero = document.querySelector('.hero');
  const inner = document.querySelector('.hero-inner');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!hero || !inner || reducedMotion) {
    return;
  }
  let ticking = false;
  const update = () => {
    ticking = false;
    const heroHeight = hero.offsetHeight;
    if (heroHeight === 0) {
      return;
    }
    const scrolled = Math.min(Math.max(window.scrollY, 0), heroHeight);
    const progress = scrolled / heroHeight;
    // Контент уезжает медленнее фона, гаснет к 70% высоты hero и слегка сжимается.
    inner.style.opacity = String(Math.max(1 - progress / 0.7, 0));
    inner.style.transform = `translateY(${(scrolled * 0.3).toFixed(1)}px) scale(${(1 - progress * 0.06).toFixed(3)})`;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }, { passive: true });
  update();
}

function initTopbarShadow() {
  const topbar = document.querySelector('.topbar');
  if (!topbar) {
    return;
  }
  const update = () => topbar.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

function isFinePointer() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

function initCardSpotlight() {
  if (!isFinePointer()) {
    return;
  }
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${(((event.clientX - rect.left) / rect.width) * 100).toFixed(1)}%`);
      card.style.setProperty('--my', `${(((event.clientY - rect.top) / rect.height) * 100).toFixed(1)}%`);
    });
  });
}

function initHeroGlow() {
  const hero = document.querySelector('.hero');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!hero || !isFinePointer() || reducedMotion) {
    return;
  }
  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    hero.style.setProperty('--gx', `${(((event.clientX - rect.left) / rect.width) * 100).toFixed(1)}%`);
    hero.style.setProperty('--gy', `${(((event.clientY - rect.top) / rect.height) * 100).toFixed(1)}%`);
    hero.classList.add('glow-on');
  });
  hero.addEventListener('pointerleave', () => hero.classList.remove('glow-on'));
}

function initMagneticCta() {
  const zone = document.querySelector('.hero-actions');
  const button = zone ? zone.querySelector('.btn-primary') : null;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!zone || !button || !isFinePointer() || reducedMotion) {
    return;
  }
  const MAGNET_RANGE = 120;
  const MAGNET_PULL = 0.3;
  zone.addEventListener('pointermove', (event) => {
    const rect = button.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(dx, dy);
    if (distance < MAGNET_RANGE) {
      const pull = (1 - distance / MAGNET_RANGE) * MAGNET_PULL;
      button.style.transform = `translate(${(dx * pull).toFixed(1)}px, ${(dy * pull).toFixed(1)}px) scale(1.03)`;
    } else {
      button.style.transform = '';
    }
  });
  zone.addEventListener('pointerleave', () => {
    button.style.transform = '';
  });
}

function initCountUp() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion || !('IntersectionObserver' in window)) {
    return;
  }
  document.querySelectorAll('[data-countup]').forEach((element) => {
    const target = Number(element.dataset.countup);
    if (!Number.isFinite(target)) {
      return;
    }
    const prefix = element.dataset.prefix || '';
    const suffix = element.dataset.suffix || '';
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        observer.disconnect();
        const started = performance.now();
        const DURATION_MS = 1200;
        const tick = (now) => {
          const progress = Math.min((now - started) / DURATION_MS, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          element.textContent = `${prefix}${Math.round(eased * target)}${suffix}`;
          if (progress < 1) {
            window.requestAnimationFrame(tick);
          }
        };
        window.requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    observer.observe(element);
  });
}

// Живой force-directed граф — веб-оммаж библиотеке compose-graph владельца.
// Общий движок на два экземпляра: большой интерактивный в hero (drag с флингом,
// волна от тапа по пустому месту, клик по узлу подсвечивает его связи) и
// мини-демо в карточке проекта. Пауза, когда канвас вне вьюпорта или вкладка скрыта.
const GRAPH_COLORS = ['#2997ff', '#a972ff', '#ff6482', '#64d2ff'];

function createForceGraph(config) {
  const canvas = config.canvas;
  const host = config.host;
  if (!canvas || !host || !canvas.getContext) {
    return;
  }
  const ctx = canvas.getContext('2d');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nodes = config.nodes.map((node) => ({ ...node, x: 0, y: 0, vx: 0, vy: 0 }));
  const edges = config.edges;
  const pointer = { x: -1e4, y: -1e4 };
  const drag = { node: null, pointerId: null, moved: 0 };
  let selected = null;
  let width = 0;
  let height = 0;
  let rafId = null;
  let running = false;

  const neighbors = nodes.map(() => new Set());
  edges.forEach(([a, b]) => {
    neighbors[a].add(b);
    neighbors[b].add(a);
  });

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth || host.clientWidth;
    height = canvas.clientHeight || host.clientHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (config.measureExclude) {
      config.measureExclude();
    }
  };

  const seed = () => {
    nodes.forEach((node, index) => {
      const angle = (index / nodes.length) * Math.PI * 2;
      const radius = Math.min(width, height) * 0.36;
      node.x = width / 2 + Math.cos(angle) * radius;
      node.y = height / 2 + Math.sin(angle) * radius;
    });
  };

  const step = () => {
    const restLength = Math.min(width, height) * config.restFactor;
    for (let i = 0; i < nodes.length; i += 1) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j += 1) {
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distSq = Math.max(dx * dx + dy * dy, 64);
        const force = config.repulsion / distSq;
        const dist = Math.sqrt(distSq);
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        a.vx += fx; a.vy += fy;
        b.vx -= fx; b.vy -= fy;
      }
    }
    edges.forEach(([ai, bi]) => {
      const a = nodes[ai];
      const b = nodes[bi];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.max(Math.hypot(dx, dy), 1);
      const force = (dist - restLength) * 0.015;
      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;
      a.vx += fx; a.vy += fy;
      b.vx -= fx; b.vy -= fy;
    });
    const zone = config.excludeZone;
    nodes.forEach((node) => {
      if (node === drag.node) {
        return; // позицию ведёт указатель, скорость копится для флинга
      }
      const cx = width / 2 - node.x;
      const cy = height / 2 - node.y;
      node.vx += cx * 0.0015;
      node.vy += cy * 0.0015;
      if (zone && node.x > zone.x0 && node.x < zone.x1 && node.y > zone.y0 && node.y < zone.y1) {
        const toLeft = node.x - zone.x0;
        const toRight = zone.x1 - node.x;
        const toTop = node.y - zone.y0;
        const toBottom = zone.y1 - node.y;
        const minDist = Math.min(toLeft, toRight, toTop, toBottom);
        // сила растёт с глубиной проникновения — равновесие всегда вне зоны
        const push = Math.min(minDist * 0.06, 4);
        if (minDist === toLeft) {
          node.vx -= push;
        } else if (minDist === toRight) {
          node.vx += push;
        } else if (minDist === toTop) {
          node.vy -= push;
        } else {
          node.vy += push;
        }
      }
      const px = node.x - pointer.x;
      const py = node.y - pointer.y;
      const pointerDist = Math.hypot(px, py);
      if (pointerDist < 140 && pointerDist > 0) {
        node.vx += (px / pointerDist) * (140 - pointerDist) * 0.03;
        node.vy += (py / pointerDist) * (140 - pointerDist) * 0.03;
      }
      node.vx *= 0.9;
      node.vy *= 0.9;
      node.x = Math.min(Math.max(node.x + node.vx, 24), width - 24);
      node.y = Math.min(Math.max(node.y + node.vy, 24), height - 24);
    });
  };

  const draw = () => {
    const isDark = effectiveTheme() === 'dark';
    const selectedIndex = selected === null ? -1 : nodes.indexOf(selected);
    ctx.clearRect(0, 0, width, height);
    edges.forEach(([ai, bi]) => {
      const active = selectedIndex >= 0 && (ai === selectedIndex || bi === selectedIndex);
      if (active) {
        ctx.strokeStyle = GRAPH_COLORS[selected.group];
        ctx.globalAlpha = 0.8;
        ctx.lineWidth = 1.6;
      } else {
        ctx.strokeStyle = isDark ? 'rgba(245, 245, 247, 0.14)' : 'rgba(29, 29, 31, 0.12)';
        ctx.globalAlpha = selectedIndex >= 0 ? 0.35 : 1;
        ctx.lineWidth = 1;
      }
      ctx.beginPath();
      ctx.moveTo(nodes[ai].x, nodes[ai].y);
      ctx.lineTo(nodes[bi].x, nodes[bi].y);
      ctx.stroke();
    });
    ctx.font = config.labelFont;
    ctx.textAlign = 'center';
    nodes.forEach((node, index) => {
      const related = selectedIndex < 0 || index === selectedIndex || neighbors[selectedIndex].has(index);
      ctx.globalAlpha = related ? 1 : 0.3;
      const color = GRAPH_COLORS[node.group];
      ctx.save();
      ctx.shadowColor = color;
      ctx.shadowBlur = node === selected ? 16 : 10;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node === selected ? config.nodeRadius + 1.5 : config.nodeRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.fillStyle = isDark ? 'rgba(245, 245, 247, 0.55)' : 'rgba(29, 29, 31, 0.55)';
      ctx.fillText(node.id, node.x, node.y + config.labelOffset);
    });
    ctx.globalAlpha = 1;
  };

  const frame = () => {
    step();
    draw();
    rafId = window.requestAnimationFrame(frame);
  };

  const start = () => {
    if (!running && !reducedMotion) {
      running = true;
      rafId = window.requestAnimationFrame(frame);
    }
  };

  const stop = () => {
    running = false;
    if (rafId !== null) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  };

  const localPoint = (event) => {
    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };

  const findNode = (point) => {
    const HIT_RADIUS = 20;
    return nodes.find((node) => Math.hypot(node.x - point.x, node.y - point.y) < HIT_RADIUS) || null;
  };

  resize();
  seed();
  // граф появляется уже уложенным: короткий прогон физики + первый кадр сразу
  for (let i = 0; i < 160; i += 1) {
    step();
  }
  draw();
  if (reducedMotion) {
    for (let i = 0; i < 100; i += 1) {
      step();
    }
    draw();
    return;
  }

  host.addEventListener('pointermove', (event) => {
    const point = localPoint(event);
    pointer.x = point.x;
    pointer.y = point.y;
    if (config.interactive && !drag.node) {
      host.style.cursor = findNode(point) ? 'grab' : '';
    }
  });
  host.addEventListener('pointerleave', () => {
    pointer.x = -1e4;
    pointer.y = -1e4;
    if (config.interactive) {
      host.style.cursor = '';
    }
  });

  if (config.interactive) {
    host.addEventListener('pointerdown', (event) => {
      if (event.target.closest('a, button')) {
        return;
      }
      const point = localPoint(event);
      const hit = findNode(point);
      drag.moved = 0;
      if (hit) {
        drag.node = hit;
        drag.pointerId = event.pointerId;
        host.style.cursor = 'grabbing';
        event.preventDefault();
      } else {
        // волна-импульс от точки касания (shockwave как в compose-graph 0.4.0)
        nodes.forEach((node) => {
          const dx = node.x - point.x;
          const dy = node.y - point.y;
          const dist = Math.max(Math.hypot(dx, dy), 1);
          if (dist < 260) {
            const impulse = (1 - dist / 260) * 22;
            node.vx += (dx / dist) * impulse;
            node.vy += (dy / dist) * impulse;
          }
        });
        selected = null;
      }
    });
    window.addEventListener('pointermove', (event) => {
      if (!drag.node || event.pointerId !== drag.pointerId) {
        return;
      }
      const point = localPoint(event);
      const nextX = Math.min(Math.max(point.x, 24), width - 24);
      const nextY = Math.min(Math.max(point.y, 24), height - 24);
      drag.moved += Math.abs(nextX - drag.node.x) + Math.abs(nextY - drag.node.y);
      // остаточная скорость даёт флинг при отпускании
      drag.node.vx = (nextX - drag.node.x) * 0.5;
      drag.node.vy = (nextY - drag.node.y) * 0.5;
      drag.node.x = nextX;
      drag.node.y = nextY;
    });
    window.addEventListener('pointerup', (event) => {
      if (!drag.node || event.pointerId !== drag.pointerId) {
        return;
      }
      const TAP_THRESHOLD = 6;
      if (drag.moved < TAP_THRESHOLD) {
        selected = selected === drag.node ? null : drag.node;
      }
      drag.node = null;
      drag.pointerId = null;
      host.style.cursor = '';
    });
  }

  window.addEventListener('resize', resize);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => (entry.isIntersecting ? start() : stop()));
    }).observe(host);
  } else {
    start();
  }
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stop();
    } else {
      start();
    }
  });
}

function initGraphs() {
  const hero = document.querySelector('.hero');
  const heroInner = document.querySelector('.hero-inner');
  const heroZone = { x0: 0, y0: 0, x1: 0, y1: 0 };
  createForceGraph({
    canvas: document.querySelector('.hero-graph'),
    host: hero,
    nodes: [
      { id: 'Kotlin', group: 0 },
      { id: 'KMP', group: 0 },
      { id: 'Compose', group: 0 },
      { id: 'Ktor', group: 0 },
      { id: 'Coroutines', group: 0 },
      { id: 'Android', group: 1 },
      { id: 'iOS', group: 1 },
      { id: 'SwiftUI', group: 1 },
      { id: 'AI', group: 2 },
      { id: 'Claude', group: 2 },
      { id: 'CI', group: 2 },
      { id: 'UX', group: 3 },
      { id: 'Figma', group: 3 },
    ],
    edges: [
      [0, 1], [0, 2], [0, 3], [0, 4],
      [1, 5], [1, 6], [6, 7], [2, 5],
      [8, 9], [8, 10], [0, 8],
      [11, 12], [2, 11],
    ],
    nodeRadius: 4.5,
    labelFont: '11px -apple-system, BlinkMacSystemFont, sans-serif',
    labelOffset: 17,
    restFactor: 0.18,
    repulsion: 1600,
    excludeZone: heroZone,
    measureExclude: () => {
      if (!heroInner) {
        return;
      }
      // offsetTop/Left не зависят от transform параллакса — зона стабильна
      const PAD = 36;
      heroZone.x0 = heroInner.offsetLeft - PAD;
      heroZone.y0 = heroInner.offsetTop - PAD;
      heroZone.x1 = heroInner.offsetLeft + heroInner.offsetWidth + PAD;
      heroZone.y1 = heroInner.offsetTop + heroInner.offsetHeight + PAD;
    },
    interactive: true,
  });

  const cardCanvas = document.querySelector('.card-graph');
  if (cardCanvas) {
    createForceGraph({
      canvas: cardCanvas,
      host: cardCanvas.closest('.card'),
      nodes: [
        { id: 'compose-graph', group: 0 },
        { id: 'Android', group: 1 },
        { id: 'iOS', group: 1 },
        { id: 'Desktop', group: 1 },
        { id: 'physics', group: 2 },
        { id: 'canvas', group: 2 },
        { id: 'obsidian', group: 3 },
      ],
      edges: [[0, 1], [0, 2], [0, 3], [0, 4], [4, 5], [0, 6]],
      nodeRadius: 3.5,
      labelFont: '9px -apple-system, BlinkMacSystemFont, sans-serif',
      labelOffset: 13,
      restFactor: 0.34,
      repulsion: 700,
      excludeZone: null,
      measureExclude: null,
      interactive: false,
    });
  }
}

function initScrollSpy() {
  const links = document.querySelectorAll('.nav-link');
  if (!links.length || !('IntersectionObserver' in window)) {
    return;
  }
  const sectionToLink = new Map();
  links.forEach((link) => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
      sectionToLink.set(section, link);
    }
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => link.classList.remove('active'));
        sectionToLink.get(entry.target).classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sectionToLink.forEach((link, section) => observer.observe(section));
}

function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) {
    return;
  }
  let ticking = false;
  const update = () => {
    ticking = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? window.scrollY / max : 0;
    bar.style.width = `${(progress * 100).toFixed(2)}%`;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }, { passive: true });
  update();
}

function revealOnScroll() {
  const blocks = document.querySelectorAll('.reveal');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window) || reducedMotion) {
    blocks.forEach((block) => block.classList.add('in'));
    return;
  }
  const STAGGER_MS = 80;
  const observer = new IntersectionObserver((entries) => {
    // батч, попавший во вьюпорт одновременно, появляется каскадом сверху вниз
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    visible.forEach((entry, index) => {
      window.setTimeout(() => entry.target.classList.add('in'), index * STAGGER_MS);
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  blocks.forEach((block) => observer.observe(block));
}

const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme === 'dark' || savedTheme === 'light') {
  document.documentElement.dataset.theme = savedTheme;
}

applyLanguage(initialLanguage());
typeGreeting();
revealOnScroll();
initHeroParallax();
initTopbarShadow();
initScrollProgress();
initCardSpotlight();
initHeroGlow();
initMagneticCta();
initCountUp();
initGraphs();
initScrollSpy();

document.querySelectorAll('.lang-btn').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

document.getElementById('themeToggle').addEventListener('click', toggleTheme);
