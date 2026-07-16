(function () {
  // Exit animation when navigating back to homepage
  var backLink = document.querySelector('a.project-back[href="/#works"]');
  if (!backLink) return;

  backLink.addEventListener('click', function (e) {
    e.preventDefault();
    var href = this.href;
    var isMobile = window.innerWidth <= 1100;

    sessionStorage.setItem('cameFromDetail', '1');

    document.body.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    document.body.style.transform = isMobile ? 'translateX(40px)' : 'translateY(20px)';
    document.body.style.opacity = '0';
    document.body.style.pointerEvents = 'none';

    setTimeout(function () { window.location.href = href; }, 370);
  });

  // bfcache: reset body state if iOS Safari restores this page
  window.addEventListener('pageshow', function (e) {
    if (!e.persisted) return;
    document.body.style.transition = '';
    document.body.style.transform = '';
    document.body.style.opacity = '';
    document.body.style.pointerEvents = '';
  });
})();
