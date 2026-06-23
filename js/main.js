// Primer Café — interactivity

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.querySelector('[data-testid="nav-toggle"]');
  const mobileNav = document.querySelector('[data-testid="mobile-nav"]');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('is-open');
      const expanded = mobileNav.classList.contains('is-open');
      navToggle.setAttribute('aria-expanded', String(expanded));
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Toast helper
  const toast = document.querySelector('[data-testid="toast"]');
  let toastTimeout;

  function showToast(message) {
    if (!toast) return;
    toast.querySelector('span').textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 3200);
  }

  // Subscribe forms (hero + CTA band) — front-end only for now.
  // TODO: connect to your email provider (Mailchimp/Brevo/etc.) or a backend endpoint.
  document.querySelectorAll('[data-subscribe-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const email = input ? input.value.trim() : '';

      if (!email || !email.includes('@')) {
        showToast('Ingresa un correo válido.');
        return;
      }

      // Placeholder "success" — replace with real API call later.
      showToast('¡Listo! Revisa tu correo para confirmar.');
      if (input) input.value = '';
    });
  });
});
