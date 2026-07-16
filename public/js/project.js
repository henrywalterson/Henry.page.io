(function () {
  function exitToHome(href) {
    sessionStorage.setItem('cameFromDetail', '1');
    // Respect user's motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.location.href = href;
      return;
    }
    var isMobile = window.innerWidth <= 1100;
    document.body.style.pointerEvents = 'none';
    // Keyframe animation (not transition) — defines explicit from/to so no
    // prior-frame "from" state is needed, fires reliably in the same JS tick
    document.body.style.animation = isMobile
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

  // bfcache: reset body if iOS Safari restores this page after exit animation
  window.addEventListener('pageshow', function (e) {
    if (!e.persisted) return;
    document.body.style.animation = '';
    document.body.style.pointerEvents = '';
  });
})();
