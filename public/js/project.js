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
      document.body.style.pointerEvents = 'none';
      var children = Array.from(document.body.children).filter(function (el) {
        return el.tagName !== 'SCRIPT';
      });
      // Cancel fill-mode animations (e.g. nav-slide-down holds opacity:1 at animation cascade
      // level and overrides inline opacity). Must reflow before starting the new transition.
      children.forEach(function (el) {
        el.style.animation = 'none';
        el.style.transition = 'opacity 0.7s ease';
      });
      void document.body.offsetHeight;
      requestAnimationFrame(function () {
        children.forEach(function (el) { el.style.opacity = '0'; });
      });
      setTimeout(function () { window.location.href = href; }, 750);
    } else {
      // Desktop: slide body down + fade (keyframe, no fill-mode conflict)
      document.body.style.pointerEvents = 'none';
      document.body.style.animation = 'exit-down 0.7s ease forwards';
      setTimeout(function () { window.location.href = href; }, 720);
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

  // bfcache: reset body + children if iOS Safari restores this page after exit animation
  window.addEventListener('pageshow', function (e) {
    if (!e.persisted) return;
    document.body.style.animation = '';
    document.body.style.pointerEvents = '';
    Array.from(document.body.children).forEach(function (el) {
      el.style.animation = '';
      el.style.transition = '';
      el.style.opacity = '';
    });
  });
})();
