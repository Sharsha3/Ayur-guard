/**
 * Portfolio — script.js
 * Handles: navbar scroll effects, mobile menu, scroll animations,
 * active nav link tracking, form submission, typed text effect.
 */

(function () {
  'use strict';

  /* =============================================
     1. NAVBAR — scroll style + mobile menu
     ============================================= */
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');

  // Scroll shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNavLink();
  }, { passive: true });

  // Mobile menu toggle
  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });


  /* =============================================
     2. ACTIVE NAV LINK — highlight based on scroll
     ============================================= */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNavLink() {
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      const top    = section.offsetTop;
      const height = section.offsetHeight;
      const id     = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(l => l.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }

  updateActiveNavLink();


  /* =============================================
     3. SCROLL ANIMATIONS — IntersectionObserver
     ============================================= */
  const animatedEls = document.querySelectorAll('[data-animate]');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    animatedEls.forEach(el => {
      // Skip hero elements — they should already be visible
      if (!el.closest('.hero')) {
        observer.observe(el);
      } else {
        el.classList.add('is-visible');
      }
    });
  } else {
    // Fallback: show everything
    animatedEls.forEach(el => el.classList.add('is-visible'));
  }


  /* =============================================
     4. TYPED TEXT — hero heading animation
     ============================================= */
  const heroHeading = document.querySelector('.hero-heading');

  if (heroHeading) {
    const lines = ['Building the', 'Future of', 'Digital Experiences'];
    const gradientWord = 'Future of';

    heroHeading.innerHTML = lines.map(line =>
      line === gradientWord
        ? `<span class="gradient-text">${line}</span>`
        : line
    ).join('<br />');

    // Subtle fade-in for the heading
    heroHeading.style.opacity = '0';
    heroHeading.style.transform = 'translateY(16px)';
    heroHeading.style.transition = 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        heroHeading.style.opacity = '1';
        heroHeading.style.transform = 'translateY(0)';
      });
    });
  }


  /* =============================================
     5. CONTACT FORM — fake submission + validation
     ============================================= */
  const form        = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  const submitBtn   = form ? form.querySelector('#form-submit') : null;

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Basic validation
      const inputs = form.querySelectorAll('input[required], textarea[required]');
      let valid = true;

      inputs.forEach(input => {
        input.style.borderColor = '';
        if (!input.value.trim()) {
          input.style.borderColor = '#FF7B7B';
          valid = false;
        }
      });

      // Email validation
      const emailInput = form.querySelector('#email');
      if (emailInput && emailInput.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        emailInput.style.borderColor = '#FF7B7B';
        valid = false;
      }

      if (!valid) return;

      // Simulate async submission
      submitBtn.disabled = true;
      const btnText = submitBtn.querySelector('.btn-text');
      const originalText = btnText.textContent;
      btnText.textContent = 'Sending…';
      submitBtn.style.opacity = '0.7';

      setTimeout(() => {
        form.reset();
        submitBtn.disabled = false;
        btnText.textContent = originalText;
        submitBtn.style.opacity = '';
        formSuccess.classList.add('show');

        // Hide success after 5 seconds
        setTimeout(() => formSuccess.classList.remove('show'), 5000);
      }, 1800);
    });

    // Clear red border on input
    form.querySelectorAll('input, textarea').forEach(el => {
      el.addEventListener('input', () => { el.style.borderColor = ''; });
    });
  }


  /* =============================================
     6. SMOOTH SCROLL — polyfill for older browsers
     ============================================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  /* =============================================
     7. SKILL CARDS — tilt effect on mouse move
     ============================================= */
  const skillCards = document.querySelectorAll('.skill-card');

  skillCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect   = card.getBoundingClientRect();
      const x      = e.clientX - rect.left;
      const y      = e.clientY - rect.top;
      const cx     = rect.width  / 2;
      const cy     = rect.height / 2;
      const rotateX = ((y - cy) / cy) * -6;
      const rotateY = ((x - cx) / cx) *  6;

      card.style.transform = `translateY(-6px) perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) perspective(600px) rotateX(0) rotateY(0)';
    });
  });


  /* =============================================
     8. PROJECT CARDS — parallax thumb
     ============================================= */
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    const thumb = card.querySelector('.thumb-svg');
    if (!thumb) return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      thumb.style.transform = `scale(1.07) translate(${x * 10}px, ${y * 8}px)`;
    });

    card.addEventListener('mouseleave', () => {
      thumb.style.transform = '';
    });
  });


  /* =============================================
     9. HERO — cursor glow tracker
     ============================================= */
  const heroSection = document.querySelector('.hero');

  if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const { left, top } = heroSection.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const visual = heroSection.querySelector('.hero-visual');
      if (visual) {
        const dx = (x / heroSection.offsetWidth  - 0.5) * 14;
        const dy = (y / heroSection.offsetHeight - 0.5) * 14;
        visual.style.transform = `translateY(var(--float-offset, 0px)) translate(${dx}px, ${dy}px)`;
      }
    });

    heroSection.addEventListener('mouseleave', () => {
      const visual = heroSection.querySelector('.hero-visual');
      if (visual) visual.style.transform = '';
    });
  }


  /* =============================================
     10. COUNTER ANIMATION — about section stats
     ============================================= */
  function animateCounter(el, target, suffix = '') {
    const duration = 1400;
    const start = performance.now();
    const num = parseInt(target);

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * num) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  // Run counters when about section enters viewport
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    let countersRun = false;

    const aboutObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersRun) {
          countersRun = true;

          const stats = aboutSection.querySelectorAll('.stat__num');
          stats.forEach(stat => {
            const raw = stat.textContent.trim(); // e.g. "50+"
            const num    = parseInt(raw);
            const suffix = raw.replace(/[0-9]/g, '');
            animateCounter(stat, num, suffix);
          });
        }
      },
      { threshold: 0.4 }
    );

    aboutObserver.observe(aboutSection);
  }

})();
