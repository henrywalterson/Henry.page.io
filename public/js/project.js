(function () {
  function exitToHome(href) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sessionStorage.setItem('cameFromDetail', '1');
      window.location.href = href;
      return;
    }
    sessionStorage.setItem('cameFromDetail', '1');

    var isMobile = window.innerWidth <= 1100;

    if (isMobile) {
      // Overlay approach: most reliable on iOS Safari — animates a fresh element,
      // no fill-mode conflicts, no body-transform issues
      var overlay = document.createElement('div');
      overlay.style.cssText = [
        'position:fixed', 'inset:0', 'z-index:9999',
        'background:var(--color-bg,#f5f5f3)',
        'opacity:0',
        'transition:opacity 0.35s ease',
        'pointer-events:none'
      ].join(';');
      document.body.appendChild(overlay);
      void overlay.offsetHeight; // commit opacity:0 as "from" state before transition
      overlay.style.opacity = '1';
      setTimeout(function () { window.location.href = href; }, 370);
    } else {
      // Desktop: slide body down + fade (keyframe, no fill-mode conflict)
      document.body.style.pointerEvents = 'none';
      document.body.style.animation = 'exit-down 0.35s ease forwards';
      setTimeout(function () { window.location.href = href; }, 370);
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
