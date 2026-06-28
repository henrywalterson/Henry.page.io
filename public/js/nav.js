const burger = document.querySelector('.nav__burger');
const links = document.querySelector('.nav__links');

if (burger && links) {
  burger.addEventListener('click', () => {
    const isOpen = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!isOpen));
    links.classList.toggle('is-open', !isOpen);
  });
}

// Scroll to #contact: force lazy images to load first so layout shift
// doesn't cause the scroll to land at the wrong position mid-page.
document.querySelectorAll('a[href="#contact"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    var target = document.getElementById('contact');
    if (!target) return;
    e.preventDefault();

    var navH = (document.querySelector('.nav') || { offsetHeight: 0 }).offsetHeight;

    // Trigger eager loading on any still-lazy images
    document.querySelectorAll('img[loading="lazy"]').forEach(function(img) {
      img.loading = 'eager';
    });

    // Wait for all pending images; 500ms fallback if they take too long
    var pending = Array.from(document.querySelectorAll('img')).filter(function(img) {
      return !img.complete;
    });

    var done = false;
    function doScroll() {
      if (done) return;
      done = true;
      var y = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    if (pending.length === 0) {
      doScroll();
    } else {
      var loaded = 0;
      pending.forEach(function(img) {
        function onDone() { if (++loaded >= pending.length) doScroll(); }
        img.addEventListener('load', onDone, { once: true });
        img.addEventListener('error', onDone, { once: true });
      });
      setTimeout(doScroll, 500);
    }
  });
});
