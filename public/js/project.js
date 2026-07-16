(function () {
  function exitToHome(href) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sessionStorage.setItem('cameFromDetail', '1');
      window.location.href = href;
      return;
    }
    sessionStorage.setItem('cameFromDetail', '1');
    document.body.style.pointerEvents = 'none';
    // Fade out via keyframe — overrides the page-enter fill-mode that would
    // otherwise hold opacity:1 and block an inline style change
    document.body.style.animation = 'exit-fade 0.35s ease forwards';
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
