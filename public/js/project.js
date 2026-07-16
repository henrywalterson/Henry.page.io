(function () {
  function exitToHome(href) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sessionStorage.setItem('cameFromDetail', '1');
      window.location.href = href;
      return;
    }
    sessionStorage.setItem('cameFromDetail', '1');
    document.body.style.pointerEvents = 'none';
    var isMobile = window.innerWidth <= 1100;

    // Wrap all visual children in a div and animate that instead of <body>.
    // Transforming <body> on iOS Safari is unreliable: it is the scroll root,
    // and position:sticky children can detach from the animation.
    var wrap = document.createElement('div');
    Array.from(document.body.children).forEach(function (el) {
      if (el.tagName !== 'SCRIPT') wrap.appendChild(el);
    });
    document.body.insertBefore(wrap, document.body.firstChild);

    wrap.style.animation = isMobile
      ? 'exit-right 0.35s ease forwards'
      : 'exit-down 0.35s ease forwards';

    setTimeout(function () { window.location.href = href; }, 370);
  }

  function interceptHomeLink(selector) {
    var el = document.querySelector(selector);
    if (!el) return;
    el.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      exitToHome(this.href);
    });
  }

  interceptHomeLink('a.project-back[href="/#works"]');
  interceptHomeLink('a.nav__logo[href="/"]');

  // bfcache: if iOS Safari restores this page, unwrap if needed and reset styles
  window.addEventListener('pageshow', function (e) {
    if (!e.persisted) return;
    document.body.style.pointerEvents = '';
    var wrap = document.body.querySelector(':scope > div:not([class]):not([id])');
    if (wrap) {
      Array.from(wrap.children).forEach(function (el) {
        document.body.insertBefore(el, wrap);
      });
      document.body.removeChild(wrap);
    }
  });
})();
