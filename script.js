// Basic interactive bits + GSAP animations
document.addEventListener('DOMContentLoaded', () => {
  // set year
  const y = new Date().getFullYear();
  document.getElementById('year')?.textContent = y;
  document.getElementById('year2')?.textContent = y;

  // Hero entrance with GSAP
  if (window.gsap) {
    gsap.from('.brand-heading', {y: 28, opacity: 0, duration: 0.9, ease: 'power3.out'});
    gsap.from('.lead', {y: 18, opacity: 0, duration: 0.8, delay: 0.15});
    gsap.from('.hero-ctas .btn', {y: 8, opacity: 0, duration: 0.6, delay: 0.3, stagger: 0.12});
    gsap.from('.hero-image img', {scale: 1.08, opacity: 0, duration: 1.1, delay: 0.25, ease: 'power3.out'});
  }

  // Card click -> lightbox
  const cards = document.querySelectorAll('.card');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');
  const lbClose = document.querySelectorAll('.lightbox-close');

  function openLightbox(src, caption = '') {
    lbImg.src = src;
    lbImg.alt = caption;
    lbCaption.textContent = caption;
    lightbox.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lightbox.setAttribute('aria-hidden','true');
    lbImg.src = '';
    document.body.style.overflow = '';
  }

  cards.forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.dataset.full || btn.querySelector('img')?.src;
      const caption = btn.querySelector('.card-meta')?.textContent || '';
      openLightbox(src, caption);
    });
  });

  lbClose.forEach(b => b.addEventListener('click', closeLightbox));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // Small contact form handler (example: sends to Formspree or your backend)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Form integrations: replace with your API endpoint or Formspree action
      alert('Thanks! This demo form does not submit. Replace script with your backend or a service like Formspree.');
      contactForm.reset();
    });
  }

  // Subtle infinite bounce for primary CTA to catch attention (micro-interaction)
  const primaryBtn = document.querySelectorAll('.btn.primary');
  primaryBtn.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {y: -4, duration: 0.22});
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {y: 0, duration: 0.22});
    });
  });

});