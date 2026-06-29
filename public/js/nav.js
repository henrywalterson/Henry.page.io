const burger = document.querySelector('.nav__burger');
const links = document.querySelector('.nav__links');

if (burger && links) {
  burger.addEventListener('click', () => {
    const isOpen = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!isOpen));
    links.classList.toggle('is-open', !isOpen);
  });
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
