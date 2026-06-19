const burger = document.querySelector('.nav__burger');
const links = document.querySelector('.nav__links');

if (burger && links) {
  burger.addEventListener('click', () => {
    const isOpen = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!isOpen));
    links.classList.toggle('is-open', !isOpen);
  });
}
