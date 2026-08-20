// sshorg.com — язык (ru/tg/en) и тема. Прогрессивное улучшение: без JS страница остаётся полной на русском.
'use strict';

const translations = {
  ru: {
    greeting: 'Привет, я Сабурджон.',
    role: 'Senior Android · Kotlin Multiplatform инженер',
    tagline: 'Продуктовый инженер: общий Kotlin-код для Android и iOS, забота об UI/UX и разработка, выстроенная вокруг ИИ-агентов.',
    location: 'Худжанд, Таджикистан · Eskhata Bank, команда Mobile Platform',
    cta_telegram: 'Написать в Telegram',
    strengths_title: 'Чем я силён',
    s_kmp: 'Ранний адоптер и чемпион KMP: занёс технологию в банк — общий модуль EWalletKmp питает Android- и iOS-клиенты кошелька.',
    s_ai_title: 'AI-augmented разработка',
    s_ai: 'Придумал и сам внедрил AI Code Review в CI банка: ревью каждого PR — в 48 раз быстрее, ожидание сократилось на 98%.',
    s_legacy_title: 'Модернизация легаси',
    s_legacy: 'Перевожу легаси-монолиты на современный стек — Compose, Ktor, модуляризация, статанализ — стратегией strangler, не останавливая продукт.',
    s_product_title: 'Продукт и дизайн',
    s_product: 'Не прощаю плохой UX: island-эстетика, анимации, нативные жесты; каждую фичу проверяю на реальных устройствах.',
    exp_title: 'Опыт',
    exp_text: 'Bank Eskhata, Худжанд — почти пять лет в одной команде: волонтёр (ноябрь 2021) → стажёр → Junior → Middle → Senior Android-разработчик с ноября 2025. Клиентские мобильные приложения банка, менторство джунов.',
    projects_title: 'Проекты',
    tag_oss: 'опенсорс',
    tag_work: 'работа',
    tag_edu: 'для вуза',
    p_graph: 'Библиотека force-directed графа «как в Obsidian» для Compose Multiplatform: физика без зависимостей, живое поведение узлов. Apache-2.0.',
    p_eskhata: 'Суперприложение Eskhata Bank (E-Wallet) в Google Play: код-ревью, модернизация легаси и общий KMP-код для Android и iOS в команде Mobile Platform.',
    p_dicteach: 'Словарь-разговорник на трёх языках — таджикский, русский, английский — для Худжандского политеха. Опубликован в Google Play.',
    stack_title: 'Стек',
    edu_title: 'Образование',
    edu_text: 'Худжандский политехнический институт Таджикского технического университета — бакалавр программной инженерии (2020–2024), красный диплом.',
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
    strengths_title: 'Тавоноиҳои ман',
    s_kmp: 'Пешсаф ва чемпиони KMP: ин технологияро ба бонк овардам — модули умумии EWalletKmp клиентҳои Android ва iOS-и ҳамёнро таъмин мекунад.',
    s_ai_title: 'Таҳияи AI-augmented',
    s_ai: 'AI Code Review-ро дар CI-и бонк худам пешниҳод ва ҷорӣ кардам: баррасии ҳар PR — 48 маротиба тезтар, интизорӣ 98% кам шуд.',
    s_legacy_title: 'Навсозии коди легаси',
    s_legacy: 'Монолитҳои кӯҳнаро ба стеки муосир мегузаронам — Compose, Ktor, модулбандӣ, таҳлили статикӣ — бо стратегияи strangler, бе таваққуфи маҳсулот.',
    s_product_title: 'Маҳсулот ва дизайн',
    s_product: 'UX-и бадро намебахшам: эстетикаи island, аниматсияҳо, жестҳои нативӣ; ҳар хусусиятро дар дастгоҳҳои воқеӣ месанҷам.',
    exp_title: 'Таҷриба',
    exp_text: 'Бонки «Эсхата», Хуҷанд — қариб панҷ сол дар як даста: ихтиёрӣ (ноябри 2021) → таҷрибаомӯз → Junior → Middle → аз ноябри 2025 Senior Android-барномасоз. Замимаҳои мобилии муштариёни бонк ва роҳбаладии барномасозони ҷавон.',
    projects_title: 'Лоиҳаҳо',
    tag_oss: 'опенсорс',
    tag_work: 'ҷои кор',
    tag_edu: 'барои донишкада',
    p_graph: 'Китобхонаи графи force-directed «мисли Obsidian» барои Compose Multiplatform: физика бе вобастагиҳо, рафтори зиндаи гиреҳҳо. Apache-2.0.',
    p_eskhata: 'Суперзамимаи Бонки «Эсхата» (E-Wallet) дар Google Play: код-ревю, навсозии легаси ва коди умумии KMP барои Android ва iOS дар дастаи Mobile Platform.',
    p_dicteach: 'Луғат ва китоби гуфтугӯ ба се забон — тоҷикӣ, русӣ, англисӣ — барои Донишкадаи политехникии Хуҷанд. Дар Google Play нашр шудааст.',
    stack_title: 'Стек',
    edu_title: 'Таҳсилот',
    edu_text: 'Донишкадаи политехникии Хуҷанди Донишгоҳи техникии Тоҷикистон — бакалавр аз рӯи муҳандисии барнома (2020–2024), дипломи аъло.',
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
    strengths_title: "What I'm good at",
    s_kmp: 'Early KMP adopter and champion: I brought it into the bank — the shared EWalletKmp module powers the Android and iOS wallet clients.',
    s_ai_title: 'AI-augmented development',
    s_ai: "Came up with AI Code Review for the bank's CI and shipped it myself: every PR reviewed 48× faster, 98% less waiting.",
    s_legacy_title: 'Legacy modernization',
    s_legacy: 'I move legacy monoliths onto a modern stack — Compose, Ktor, modularization, static analysis — using the strangler pattern, without pausing the product.',
    s_product_title: 'Product and design',
    s_product: "I don't let bad UX slide: island aesthetics, animations, native gestures; I test every feature on real devices.",
    exp_title: 'Experience',
    exp_text: 'Bank Eskhata, Khujand — nearly five years on one team: volunteer (November 2021) → intern → Junior → Middle → Senior Android developer since November 2025. The bank\'s client mobile apps, plus mentoring juniors.',
    projects_title: 'Projects',
    tag_oss: 'open source',
    tag_work: 'work',
    tag_edu: 'for the university',
    p_graph: 'Obsidian-style force-directed graph library for Compose Multiplatform: dependency-free physics, nodes that feel alive. Apache-2.0.',
    p_eskhata: 'Eskhata Bank super-app (E-Wallet) on Google Play: code review, legacy modernization and shared KMP code for Android and iOS on the Mobile Platform team.',
    p_dicteach: 'A three-language dictionary and phrasebook — Tajik, Russian, English — built for Khujand Polytechnic Institute. Published on Google Play.',
    stack_title: 'Stack',
    edu_title: 'Education',
    edu_text: 'Khujand Polytechnic Institute of Tajik Technical University — BSc in software engineering (2020–2024), graduated with honors.',
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

function revealOnScroll() {
  const blocks = document.querySelectorAll('.reveal');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window) || reducedMotion) {
    blocks.forEach((block) => block.classList.add('in'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
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

document.querySelectorAll('.lang-btn').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

document.getElementById('themeToggle').addEventListener('click', toggleTheme);
