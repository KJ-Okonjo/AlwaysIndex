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
  
  // Currency Toggle
  initCurrencyToggle();
  
  // Demo Popup
  initDemoPopup();
});

// ============================
// MOBILE MENU
// ============================

function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (!toggle || !navLinks) return;
  
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
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
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      toggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    }
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

// ============================
// CURRENCY TOGGLE
// ============================

function initCurrencyToggle() {
  const currencyBtns = document.querySelectorAll('.currency-btn');
  
  if (currencyBtns.length === 0) return;
  
  // Exchange rates (approximate, update as needed)
  const rates = {
    NGN: 1,
    GBP: 0.00082,  // 1 NGN = ~0.00082 GBP
    USD: 0.0011    // 1 NGN = ~0.0011 USD
  };
  
  const symbols = {
    NGN: '₦',
    GBP: '£',
    USD: '$'
  };
  
  currencyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currency = btn.getAttribute('data-currency');
      
      // Update active state
      currencyBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Convert all pricing amounts
      convertPricing(currency, rates, symbols);
      
      // Save preference
      localStorage.setItem('preferredCurrency', currency);
    });
  });
  
  // Load saved preference
  const saved = localStorage.getItem('preferredCurrency');
  if (saved) {
    const savedBtn = document.querySelector(`[data-currency="${saved}"]`);
    if (savedBtn) savedBtn.click();
  }
}

function convertPricing(currency, rates, symbols) {
  const priceElements = document.querySelectorAll('.pricing-amount');
  
  priceElements.forEach(el => {
    const originalText = el.getAttribute('data-original') || el.textContent;
    
    // Store original if not already stored
    if (!el.getAttribute('data-original')) {
      el.setAttribute('data-original', originalText);
    }
    
    // Extract numeric values (handles ranges like "250k–400k")
    const matches = originalText.match(/₦?(\d+(?:\.\d+)?)(k|m)?/gi);
    
    if (!matches) return;
    
    let convertedText = originalText;
    
    matches.forEach(match => {
      const numMatch = match.match(/(\d+(?:\.\d+)?)(k|m)?/i);
      if (!numMatch) return;
      
      let value = parseFloat(numMatch[1]);
      const multiplier = numMatch[2];
      
      // Convert to base amount
      if (multiplier && multiplier.toLowerCase() === 'k') value *= 1000;
      if (multiplier && multiplier.toLowerCase() === 'm') value *= 1000000;
      
      // Convert currency
      const converted = value * rates[currency];
      
      // Format output
      let formatted;
      if (converted >= 1000000) {
        formatted = (converted / 1000000).toFixed(1) + 'm';
      } else if (converted >= 1000) {
        formatted = (converted / 1000).toFixed(0) + 'k';
      } else {
        formatted = Math.round(converted).toString();
      }
      
      // Replace in text
      const symbol = symbols[currency];
      convertedText = convertedText.replace(match, symbol + formatted);
    });
    
    el.textContent = convertedText;
  });
}

// ============================
// DEMO POPUP
// ============================

function initDemoPopup() {
  const popup = document.getElementById('demoPopup');
  const closeBtn = document.getElementById('closePopup');
  const form = document.getElementById('demoForm');
  
  if (!popup) return;
  
  // Show popup after 5 seconds
  setTimeout(() => {
    // Check if user hasn't already seen it in this session
    if (!sessionStorage.getItem('demoPopupShown')) {
      popup.classList.add('active');
      sessionStorage.setItem('demoPopupShown', 'true');
    }
  }, 5000); // 5 seconds delay
  
  // Close popup
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      popup.classList.remove('active');
    });
  }
  
  // Close on overlay click
  const overlay = popup.querySelector('.demo-popup-overlay');
  if (overlay) {
    overlay.addEventListener('click', () => {
      popup.classList.remove('active');
    });
  }
  
  // Handle form submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = document.getElementById('demoEmail').value;
      const phone = document.getElementById('demoPhone').value;
      
      // Validate at least one is filled
      if (!email && !phone) {
        alert('Please provide either your email or phone number.');
        return;
      }
      
      // Success message
      alert('Thank you! We\'ll follow up within 24 hours to discuss your demo website.');
      
      // Close popup
      popup.classList.remove('active');
      
      // Reset form
      form.reset();
      
      // In production, you would send this to your backend/CRM
      console.log('Demo request:', { email, phone });
    });
  }
}
