// AlwaysIndex - Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  initMobileMenu();
  
  // Navbar Scroll Effect
  initNavbarScroll();
  
  // Scroll Reveal Animations
  initScrollReveal();
  
  // Smooth Scroll for Anchor Links
  initSmoothScroll();
  
  // Contact Button Actions
  initContactButtons();
  
  // Newsletter Form
  initNewsletterForm();
});

// ============================
// MOBILE MENU
// ============================

function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (!toggle || !navLinks) return;
  
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });
  
  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ============================
// NAVBAR SCROLL EFFECT
// ============================

function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  
  if (!navbar) return;
  
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

// ============================
// SCROLL REVEAL
// ============================

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  if (revealElements.length === 0) return;
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 150;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Initial check
}

// ============================
// SMOOTH SCROLL
// ============================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ============================
// CONTACT BUTTONS
// ============================

function initContactButtons() {
  // WhatsApp buttons
  document.querySelectorAll('[data-whatsapp]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const number = btn.getAttribute('data-whatsapp');
      const message = btn.getAttribute('data-message') || 'Hi, I\'d like to learn more about AlwaysIndex services.';
      const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    });
  });
  
  // Email buttons
  document.querySelectorAll('[data-email]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email');
      const subject = btn.getAttribute('data-subject') || 'AlwaysIndex Inquiry';
      const body = btn.getAttribute('data-body') || 'Hi, I\'d like to learn more about your services.';
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  });
}

// ============================
// UTILITIES
// ============================

// Debounce function for performance
function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Service card hover effects (advanced)
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.service-card, .pricing-card, .testimonial-card, .brand-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
      this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function(e) {
      this.style.zIndex = '1';
    });
  });
});

// Parallax effect for hero section (optional)
window.addEventListener('scroll', debounce(() => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  parallaxElements.forEach(el => {
    const speed = el.getAttribute('data-parallax') || 0.5;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
}, 5));

// ============================
// NEWSLETTER FORM
// ============================

function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailInput = form.querySelector('input[type="email"]');
    const submitBtn = form.querySelector('button[type="submit"]');
    const email = emailInput.value;
    
    // Disable button during submission
    submitBtn.disabled = true;
    submitBtn.textContent = 'Subscribing...';
    
    // Placeholder: Replace with actual newsletter service integration
    // (e.g., ConvertKit, Mailchimp API, or server endpoint)
    
    // Simulate API call
    setTimeout(() => {
      // Success feedback
      submitBtn.textContent = 'Subscribed!';
      submitBtn.style.background = '#558C8C';
      emailInput.value = '';
      
      // Reset after 3 seconds
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Subscribe';
        submitBtn.style.background = '';
      }, 3000);
      
      // TODO: Integrate with newsletter service
      console.log('Newsletter signup:', email);
    }, 1000);
  });
}
