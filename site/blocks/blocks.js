// Блоки 8×8: язык страницы и параметры дуэли. Без внешних запросов, данные из ссылки — только как текст.
(function () {
  var root = document.documentElement;
  var KEY = 'blocks-lang';

  function pickLang() {
    try { var saved = localStorage.getItem(KEY); if (saved === 'ru' || saved === 'en') return saved; } catch (e) {}
    var langs = navigator.languages || [navigator.language || 'ru'];
    for (var i = 0; i < langs.length; i++) {
      var code = String(langs[i]).slice(0, 2).toLowerCase();
      if (code === 'ru' || code === 'tg' || code === 'uz') return 'ru';
      if (code === 'en') return 'en';
    }
    return 'en';
  }

  function setLang(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang);
    var title = root.getAttribute('data-title-' + lang);
    if (title) document.title = title;
  }

  setLang(pickLang());
  var toggle = document.getElementById('lang');
  if (toggle) toggle.addEventListener('click', function () {
    var next = root.getAttribute('data-lang') === 'ru' ? 'en' : 'ru';
    setLang(next);
    try { localStorage.setItem(KEY, next); } catch (e) {}
  });

  // Дуэль: ссылка несёт только сид и счёт (спека, п. 24). Всё остальное игнорируем.
  var duel = document.getElementById('duel');
  if (!duel) return;
  var params = new URLSearchParams(location.search);
  var seed = params.get('s') || '';
  var score = params.get('p') || '';
  var valid = /^[A-Za-z0-9_-]{1,32}$/.test(seed) && /^\d{1,7}$/.test(score);
  var PKG = 'org.sshorg.blocks';
  var play = 'https://play.google.com/store/apps/details?id=' + PKG;
  if (valid) {
    var query = 's=' + seed + '&p=' + score;
    // Install referrer: после установки игра может открыть эту же раздачу.
    play += '&referrer=' + encodeURIComponent(query);
    var scoreText = String(Number(score));
    document.querySelectorAll('[data-score]').forEach(function (el) { el.textContent = scoreText; });
    duel.hidden = false;
    document.getElementById('no-duel').hidden = true;
    // В webview (Telegram, Instagram) intent:// часто заблокирован — там остаётся только Play.
    if (/Android/i.test(navigator.userAgent) && !/; wv\)/.test(navigator.userAgent)) {
      var open = document.getElementById('open');
      open.href = 'intent://sshorg.com/blocks/d?' + query + '#Intent;scheme=https;package=' + PKG +
        ';S.browser_fallback_url=' + encodeURIComponent(play) + ';end';
      open.hidden = false;
    }
  }
  document.querySelectorAll('[data-play]').forEach(function (el) { el.href = play; });
})();
