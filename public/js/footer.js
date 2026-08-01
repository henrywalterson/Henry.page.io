(function () {
  var phrases = [
    'solve a problem.',
    'make it feel human.',
    'create impact.'
  ];

  var el = document.querySelector('.footer-cta__typed');
  if (!el) return;

  var phraseIdx  = 0;
  var charIdx    = 0;
  var isDeleting = false;

  var TYPE_SPEED    = 65;
  var DELETE_SPEED  = 32;
  var PAUSE_FULL    = 2200;
  var PAUSE_EMPTY   = 420;

  function tick() {
    var phrase = phrases[phraseIdx];

    if (!isDeleting) {
      charIdx++;
      el.textContent = phrase.substring(0, charIdx);

      if (charIdx === phrase.length) {
        isDeleting = true;
        setTimeout(tick, PAUSE_FULL);
        return;
      }
      // slight jitter for natural feel
      setTimeout(tick, TYPE_SPEED + Math.random() * 35 - 17);
    } else {
      charIdx--;
      el.textContent = phrase.substring(0, charIdx);

      if (charIdx === 0) {
        isDeleting  = false;
        phraseIdx   = (phraseIdx + 1) % phrases.length;
        setTimeout(tick, PAUSE_EMPTY);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }

  setTimeout(tick, 1200);
})();
