(function () {
  function exitToHome(href) {
    sessionStorage.setItem('cameFromDetail', '1');

    var isMobile = window.innerWidth <= 1100;
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isMobile && !reducedMotion) {
      document.body.style.pointerEvents = 'none';
      document.body.style.animation = 'exit-down 0.35s ease forwards';
      setTimeout(function () { window.location.href = href; }, 370);
    } else {
      window.location.href = href;
    }
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
