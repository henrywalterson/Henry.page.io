(function () {
  function exitToHome(href) {
    var isMobile = window.innerWidth <= 1100;
    sessionStorage.setItem('cameFromDetail', '1');
    // Cancel page-enter CSS animation — its fill-mode holds opacity:1 and
    // overrides inline style, preventing the fade-out from working
    document.body.style.animation = 'none';
    document.body.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    document.body.style.transform = isMobile ? 'translateX(40px)' : 'translateY(20px)';
    document.body.style.opacity = '0';
    document.body.style.pointerEvents = 'none';
    setTimeout(function () { window.location.href = href; }, 370);
  }

  function interceptHomeLink(selector) {
    var el = document.querySelector(selector);
    if (!el) return;
    el.addEventListener('click', function (e) {
      // Let browser handle Cmd/Ctrl/Shift+click (new tab/window)
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
    document.body.style.transition = '';
    document.body.style.transform = '';
    document.body.style.opacity = '';
    document.body.style.pointerEvents = '';
  });
})();
