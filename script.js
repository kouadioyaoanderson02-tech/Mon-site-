(function() {
  'use strict';

  // ============================================
  // 1. NAV ACTIVE LINK ON SCROLL
  // ============================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav ul a');

  function updateActiveLink() {
    let current = '';
    const scrollY = window.scrollY + 100;

    sections.forEach(s => {
      const top = s.offsetTop;
      const height = s.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        current = s.getAttribute('id');
      }
    });

    navLinks.forEach(a => {
      a.style.color = '';
      a.style.borderBottomColor = 'transparent';
      if (a.getAttribute('href') === '#' + current) {
        a.style.color = 'var(--accent)';
        a.style.borderBottomColor = 'var(--accent)';
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  window.addEventListener('load', updateActiveLink);

  // ============================================
  // 2. SCROLL REVEAL (Intersection Observer)
  // ============================================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { 
    threshold: 0.12, 
    rootMargin: '0px 0px -20px 0px' 
  });

  document.querySelectorAll('.skill-card, .project-card, .contact-item').forEach(el => {
    observer.observe(el);
  });

  // ============================================
  // 3. CONTACT FORM
  // ============================================
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('✅ Message envoyé ! Je vous répondrai bientôt. 🚀');
      this.reset();
    });
  }

  // ============================================
  // 4. FIX: visible class for elements already in view
  // ============================================
  setTimeout(() => {
    document.querySelectorAll('.skill-card, .project-card, .contact-item').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  }, 200);

})();