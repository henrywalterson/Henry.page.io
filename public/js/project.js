(function () {
  function exitToHome(href) {
    var isMobile = window.innerWidth <= 1100;
    sessionStorage.setItem('cameFromDetail', '1');
    document.body.style.pointerEvents = 'none';
    // Use keyframe animation (not CSS transition) so the browser doesn't need
    // a previous-frame "from" state — the keyframe defines it explicitly
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

  // bfcache: reset body state if iOS Safari restores this page
  window.addEventListener('pageshow', function (e) {
    if (!e.persisted) return;
    document.body.style.animation = '';
    document.body.style.pointerEvents = '';
  });
})();
