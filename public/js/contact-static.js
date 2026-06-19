const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');
const submitBtn = document.getElementById('submitBtn');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    feedback.className = 'form-feedback';
    feedback.textContent = '';

    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      feedback.textContent = 'Please enter a valid email address.';
      feedback.classList.add('error');
      return;
    }
    if (!message) {
      feedback.textContent = 'Message cannot be empty.';
      feedback.classList.add('error');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', email, message }).toString(),
      });

      if (res.ok) {
        feedback.textContent = "Thanks — I'll get back to you soon!";
        feedback.classList.add('success');
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      feedback.textContent = 'Something went wrong. Please try again.';
      feedback.classList.add('error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send message';
    }
  });
}
