/* ============================
   ALWAYSINDEX V2 - SCRIPTS
============================ */

// Currency conversion rates (updated regularly)
const currencyRates = {
  NGN: 1,
  USD: 0.0012,
  GBP: 0.00095
};

const currencySymbols = {
  NGN: '₦',
  USD: '$',
  GBP: '£'
};

let currentCurrency = 'NGN';

// ============================
// MOBILE MENU
// ============================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// ============================
// NAVBAR SCROLL EFFECT
// ============================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ============================
// CURRENCY CONVERTER
// ============================
function updatePrices(currency) {
  currentCurrency = currency;
  const rate = currencyRates[currency];
  const symbol = currencySymbols[currency];
  
  // Update all price displays
  document.querySelectorAll('.price-value').forEach(priceElement => {
    const ngnPrice = parseInt(priceElement.getAttribute('data-ngn'));
    const convertedPrice = Math.round(ngnPrice * rate);
    
    // Format with commas
    const formattedPrice = convertedPrice.toLocaleString();
    priceElement.textContent = formattedPrice;
  });
  
  // Update all currency symbols
  document.querySelectorAll('.currency-symbol').forEach(symbolElement => {
    symbolElement.textContent = symbol;
  });
}

// Currency button event listeners
document.querySelectorAll('.currency-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    document.querySelectorAll('.currency-btn').forEach(b => b.classList.remove('active'));
    
    // Add active class to clicked button
    btn.classList.add('active');
    
    // Update prices
    const currency = btn.getAttribute('data-currency');
    updatePrices(currency);
  });
});

// ============================
// FAQ ACCORDION
// ============================
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
    
    // Toggle current item
    item.classList.toggle('active');
  });
});

// ============================
// CONTACT FORM - FORMSPREE INTEGRATION
// ============================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    try {
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Success
        alert('Thank you for your inquiry! We will get back to you within 24 hours.');
        contactForm.reset();
      } else {
        // Error from Formspree
        const data = await response.json();
        if (data.errors) {
          alert('Error: ' + data.errors.map(error => error.message).join(', '));
        } else {
          alert('Oops! There was a problem submitting your form. Please try again.');
        }
      }
    } catch (error) {
      // Network error
      console.error('Form submission error:', error);
      alert('Oops! There was a problem submitting your form. Please try again or contact us directly.');
    } finally {
      // Re-enable button
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  });
}

// ============================
// NEWSLETTER FORM
// ============================
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = newsletterForm.querySelector('input[type="email"]').value;
    
    // Here you would typically send the email to your server
    console.log('Newsletter subscription:', email);
    
    // Show success message
    alert('Thank you for subscribing!');
    
    // Reset form
    newsletterForm.reset();
  });
}

// ============================
// SMOOTH SCROLL
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ============================
// COUNT-UP ANIMATION
// ============================
function animateCount(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const duration = 2000; // 2 seconds
  const increment = target / (duration / 16); // 60fps
  let current = 0;
  
  const updateCount = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCount);
    } else {
      element.textContent = target;
    }
  };
  
  updateCount();
}

// ============================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // Trigger count-up animation for stats
      if (entry.target.hasAttribute('data-target')) {
        animateCount(entry.target);
        observer.unobserve(entry.target); // Only animate once
      }
    }
  });
}, observerOptions);

// Observe all animatable elements
document.querySelectorAll('.section-header, .pricing-card, .process-step, .work-card, .stat-number[data-target]').forEach(el => {
  observer.observe(el);
});
