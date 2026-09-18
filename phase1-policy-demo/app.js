(function () {
  'use strict';

  var I18N = window.I18N || { S: {}, MONTHS: { zh: [], en: [] } };
  var S = I18N.S;
  var MONTHS = I18N.MONTHS;

  var STORAGE_KEY = 'hsbc-demo-lang';
  var DEFAULT_LANG = 'zh';
  var SUPPORTED = ['zh', 'en'];

  var lang = DEFAULT_LANG;
  var currentView = 'all';
  var currentMonth = 0;

  /* ---------- helpers ---------- */
  function getLang() {
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) { /* localStorage unavailable */ }
    return DEFAULT_LANG;
  }

  function t(key, target) {
    var entry = S[key];
    if (!entry) return '';
    var value = entry[target || lang];
    return value == null ? (entry.zh || '') : value;
  }

  function monthsFor(target) {
    return MONTHS[target || lang] || MONTHS.zh || [];
  }

  /* ---------- apply translations to the DOM ---------- */
  function applyLang(next) {
    lang = SUPPORTED.indexOf(next) === -1 ? DEFAULT_LANG : next;

    // text nodes
    var nodes = document.querySelectorAll('[data-i18n]');
    Array.prototype.forEach.call(nodes, function (el) {
      var key = el.getAttribute('data-i18n');
      var value = t(key);
      var attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, value.replace(/<[^>]+>/g, ''));
        return;
      }
      // SVG text/title/desc are not HTML parsers — use textContent
      if (el.namespaceURI === 'http://www.w3.org/2000/svg') {
        el.textContent = value.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '');
      } else {
        el.innerHTML = value;
      }
    });

    // attributes consumed by other scripts
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-title]'), function (el) {
      el.setAttribute('data-title', t(el.getAttribute('data-i18n-title')));
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-copy]'), function (el) {
      el.setAttribute('data-copy', t(el.getAttribute('data-i18n-copy')));
    });

    // document level
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'zh-CN');
    document.title = t('page.title');

    // toggle state
    Array.prototype.forEach.call(document.querySelectorAll('.lang-switch button[data-lang]'), function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // re-render dynamic regions in the new language
    setArchView(currentView);
    buildMonthButtons();
    renderMonth(currentMonth);

    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  /* ---------- Architecture view switching ---------- */
  var archTabs = document.querySelectorAll('.arch-tabs button[data-view]');
  var archLayers = document.querySelectorAll('.arch .layer[data-stage]');
  var archNodes = document.querySelectorAll('.arch .nodes button[data-title]');
  var archDetail = document.getElementById('archDetail');

  var ARCH_VIEW_KEYS = {
    all: { title: 'av.all.title', copy: 'av.all.copy' },
    before: { title: 'av.before.title', copy: 'av.before.copy' },
    runtime: { title: 'av.runtime.title', copy: 'av.runtime.copy' },
    after: { title: 'av.after.title', copy: 'av.after.copy' }
  };

  function setArchDetail(title, copy) {
    archDetail.innerHTML = '<strong></strong><span></span>';
    archDetail.querySelector('strong').textContent = title;
    archDetail.querySelector('span').textContent = copy;
  }

  function setArchView(view) {
    currentView = view;
    archTabs.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-view') === view);
    });
    archLayers.forEach(function (layer) {
      var show = view === 'all' || layer.getAttribute('data-stage') === view;
      layer.style.display = show ? '' : 'none';
    });
    archNodes.forEach(function (node) {
      node.classList.remove('selected');
    });
    var keys = ARCH_VIEW_KEYS[view] || ARCH_VIEW_KEYS.all;
    setArchDetail(t(keys.title), t(keys.copy));
  }

  archTabs.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setArchView(btn.getAttribute('data-view'));
    });
  });

  archNodes.forEach(function (node) {
    node.addEventListener('click', function () {
      archNodes.forEach(function (n) { n.classList.remove('selected'); });
      node.classList.add('selected');
      setArchDetail(node.getAttribute('data-title'), node.getAttribute('data-copy'));
    });
  });

  /* ---------- Monthly plan (12 months) ---------- */
  var monthGrid = document.getElementById('planMonths');
  var phaseDetail = document.getElementById('phaseDetail');

  function buildMonthButtons() {
    if (!monthGrid) return;
    var list = monthsFor();
    var html = '';
    list.forEach(function (mo, i) {
      html += '<button class="month' + (i === currentMonth ? ' active' : '') + '" data-m="' + i + '">' +
        (mo.gate ? '<span class="gate">' + mo.gate + '</span>' : '') +
        '<span>' + mo.m + '</span>' +
        '<h3>' + mo.title + '</h3>' +
        '</button>';
    });
    monthGrid.innerHTML = html;
  }

  function renderMonth(i) {
    if (!phaseDetail) return;
    var list = monthsFor();
    var mo = list[i] || list[0];
    if (!mo) return;
    phaseDetail.innerHTML =
      '<div><span class="tag">' + mo.m + (mo.gate ? ' · ' + mo.gate : '') + '</span>' +
      '<h3>' + mo.title + '</h3>' +
      '<p>' + mo.goal + '</p>' +
      '<ul><li><b>' + t('plan.scutTag') + '</b>' + mo.scut + '</li>' +
      '<li><b>' + t('plan.hsbcTag') + '</b>' + mo.hsbc + '</li></ul></div>' +
      '<div><h3>' + t('plan.deliverHead') + '</h3><p>' + mo.deliver + '</p></div>';
  }

  function setMonth(i) {
    currentMonth = i;
    var btns = monthGrid ? monthGrid.querySelectorAll('.month[data-m]') : [];
    btns.forEach(function (btn) {
      btn.classList.toggle('active', Number(btn.getAttribute('data-m')) === i);
    });
    renderMonth(i);
  }

  if (monthGrid) {
    monthGrid.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('.month[data-m]') : null;
      if (!btn || !monthGrid.contains(btn)) return;
      setMonth(Number(btn.getAttribute('data-m')));
    });
  }

  /* ---------- Language switch ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.lang-switch button[data-lang]'), function (btn) {
    btn.addEventListener('click', function () {
      var next = btn.getAttribute('data-lang');
      if (next !== lang) applyLang(next);
    });
  });

  /* ---------- Init ---------- */
  applyLang(getLang());
})();
