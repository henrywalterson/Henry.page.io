const burger = document.querySelector('.nav__burger');
const links = document.querySelector('.nav__links');

if (burger && links) {
  const overlay = document.createElement('div');
  overlay.className = 'nav__overlay';
  document.body.appendChild(overlay);

  function closeBurger() {
    burger.setAttribute('aria-expanded', 'false');
    links.classList.remove('is-open');
    overlay.classList.remove('is-open');
  }

  burger.addEventListener('click', () => {
    const isOpen = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!isOpen));
    links.classList.toggle('is-open', !isOpen);
    overlay.classList.toggle('is-open', !isOpen);
  });

  overlay.addEventListener('click', closeBurger);
}

// Contact dropdown
(function () {
  var wrapper = document.querySelector('.nav__contact');
  var btn     = document.querySelector('.nav__contact-btn');
  if (!wrapper || !btn) return;

  // Toggle open
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    var isOpen = wrapper.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  // Email copy — keep dropdown open so user sees "Copied!" feedback, then close
  var copyItem = wrapper.querySelector('.nav__dropdown-item--copy');
  if (copyItem) {
    copyItem.addEventListener('click', function (e) {
      e.stopPropagation();
      var span      = copyItem.querySelector('span');
      navigator.clipboard.writeText('huyisdesigning@gmail.com').then(function () {
        copyItem.classList.add('is-copied');
        span.textContent = 'Copied!';
        setTimeout(function () {
          copyItem.classList.remove('is-copied');
          span.textContent = 'Email';
          wrapper.classList.remove('is-open');
          btn.setAttribute('aria-expanded', 'false');
        }, 1500);
      });
    });
  }

  // Close when clicking outside
  document.addEventListener('click', function () {
    wrapper.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      wrapper.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Nav exit: slide up when navigating back to homepage
(function() {
  var nav = document.querySelector('.nav');
  if (!nav) return;
  document.querySelectorAll('a.project-back, a[href="/"], a[href="/#works"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var href = link.getAttribute('href');
      nav.classList.add('nav--exit');
      setTimeout(function() { window.location.href = href; }, 350);
    });
  });
})();

// Mobile burger: email copy button
document.querySelectorAll('.nav__mobile-copy-btn').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    var label = btn.querySelector('span');
    navigator.clipboard.writeText('huyisdesigning@gmail.com').then(function () {
      btn.classList.add('is-copied');
      label.textContent = 'Copied!';
      setTimeout(function () {
        btn.classList.remove('is-copied');
        label.textContent = 'Email';
      }, 1500);
    });
  });
});

// Footer marquee: clone set, measure exact width after fonts load, then start animation
(function () {
  function initMarquee() {
    var track = document.querySelector('.footer-marquee__track');
    if (!track) return;
    var set = track.querySelector('.footer-marquee__set');
    if (!set) return;
    var clone = set.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
    var w = set.getBoundingClientRect().width;
    document.documentElement.style.setProperty('--marquee-offset', w + 'px');
    track.style.animationPlayState = 'running';
  }
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(initMarquee);
  } else {
    window.addEventListener('load', initMarquee);
  }
})();
