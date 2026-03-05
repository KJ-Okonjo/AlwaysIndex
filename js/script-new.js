// ============================
// ALWAYSINDEX - DYNAMIC JAVASCRIPT
// ============================

// Currency conversion rates (hardcoded - NGN base)
const CURRENCY_RATES = {
  NGN: 1,
  GBP: 0.0008,
  USD: 0.0011
};

const CURRENCY_SYMBOLS = {
  NGN: '₦',
  GBP: '£',
  USD: '$'
};

let currentCurrency = 'NGN';
let selectedPackage = null;
let selectedUpgrades = new Set();

// ============================
// CUSTOM CURSOR
// ============================

document.addEventListener('DOMContentLoaded', () => {
  const cursorDot = document.querySelector('[data-cursor-dot]');
  const cursorOutline = document.querySelector('[data-cursor-outline]');
  
  if (window.innerWidth > 768) {
    window.addEventListener('mousemove', (e) => {
      const posX = e.clientX;
      const posY = e.clientY;
      
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
      
      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 500, fill: 'forwards' });
    });
    
    // Hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .work-card, .pricing-card, .upgrade-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorOutline.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        cursorOutline.classList.remove('hover');
      });
    });
  }
});

// ============================
// MOBILE MENU
// ============================

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle?.addEventListener('click', () => {
  mobileMenuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuToggle?.classList.remove('active');
    navLinks?.classList.remove('active');
  });
});

// ============================
// SMOOTH SCROLL
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

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
// SCROLL ANIMATIONS
// ============================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe elements
document.querySelectorAll('.section-header, .pricing-card, .work-card, .process-step').forEach(el => {
  observer.observe(el);
});

// ============================
// CURRENCY CONVERTER
// ============================

function convertPrice(ngnPrice, toCurrency) {
  const converted = ngnPrice * CURRENCY_RATES[toCurrency];
  // Round to nearest 10
  return Math.round(converted / 10) * 10;
}

function formatPrice(price, currency) {
  if (currency === 'NGN') {
    return price.toLocaleString('en-NG');
  }
  return price.toLocaleString('en-US');
}

function updateAllPrices(currency) {
  currentCurrency = currency;
  const symbol = CURRENCY_SYMBOLS[currency];
  
  // Update currency symbols
  document.querySelectorAll('.currency-symbol').forEach(el => {
    el.textContent = symbol;
  });
  
  // Update price values
  document.querySelectorAll('.price-value').forEach(el => {
    const ngnPrice = parseInt(el.dataset.ngn);
    const convertedPrice = convertPrice(ngnPrice, currency);
    el.textContent = formatPrice(convertedPrice, currency);
  });
  
  // Update total if package selected
  updateTotal();
}

// Currency button handlers
document.querySelectorAll('.currency-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.currency-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateAllPrices(btn.dataset.currency);
  });
});

// ============================
// PRICING CALCULATOR
// ============================

// Package selection
document.querySelectorAll('.pricing-card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') return; // Don't select if clicking CTA
    
    document.querySelectorAll('.pricing-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    
    selectedPackage = card.dataset.package;
    const basePrice = parseInt(card.querySelector('.price-value').dataset.ngn);
    
    updateTotal();
  });
});

// Upgrade toggles
document.querySelectorAll('.upgrade-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const upgradeCard = btn.closest('.upgrade-card');
    const upgradeId = upgradeCard.dataset.upgrade;
    
    if (selectedUpgrades.has(upgradeId)) {
      selectedUpgrades.delete(upgradeId);
      upgradeCard.classList.remove('selected');
      btn.textContent = 'Add to Package';
    } else {
      selectedUpgrades.add(upgradeId);
      upgradeCard.classList.add('selected');
      btn.textContent = 'Remove';
    }
    
    updateTotal();
  });
});

function updateTotal() {
  const totalElement = document.querySelector('.total-value');
  const calculatorNote = document.querySelector('.calculator-note');
  
  if (!selectedPackage) {
    totalElement.textContent = '0';
    calculatorNote.textContent = 'Select a package above to calculate your total';
    return;
  }
  
  // Get base package price
  const packageCard = document.querySelector(`.pricing-card[data-package="${selectedPackage}"]`);
  let totalNGN = parseInt(packageCard.querySelector('.price-value').dataset.ngn);
  
  // Add upgrade prices
  selectedUpgrades.forEach(upgradeId => {
    const upgradeCard = document.querySelector(`.upgrade-card[data-upgrade="${upgradeId}"]`);
    const upgradePrice = parseInt(upgradeCard.dataset.price);
    totalNGN += upgradePrice;
  });
  
  // Convert and display
  const convertedTotal = convertPrice(totalNGN, currentCurrency);
  totalElement.textContent = formatPrice(convertedTotal, currentCurrency);
  
  const upgradeCount = selectedUpgrades.size;
  if (upgradeCount > 0) {
    calculatorNote.textContent = `Base package + ${upgradeCount} upgrade${upgradeCount > 1 ? 's' : ''}`;
  } else {
    calculatorNote.textContent = 'Base package only';
  }
}

// ============================
// WORK FILTER
// ============================

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    document.querySelectorAll('.work-card').forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
        setTimeout(() => card.classList.add('visible'), 100);
      } else {
        card.classList.remove('visible');
        setTimeout(() => card.style.display = 'none', 300);
      }
    });
  });
});

// ============================
// PORTFOLIO MODAL
// ============================

const modal = document.getElementById('portfolioModal');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');
const portfolioFrame = document.getElementById('portfolioFrame');

document.querySelectorAll('.work-card').forEach(card => {
  card.addEventListener('click', () => {
    const previewPage = card.dataset.preview;
    
    // For now, show placeholder
    // In production, load actual portfolio pages
    portfolioFrame.src = `portfolio/${previewPage}.html`;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
  portfolioFrame.src = '';
}

modalClose?.addEventListener('click', closeModal);
modalOverlay?.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ============================
// FAQ ACCORDION
// ============================

document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Close all other items
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // Toggle current item
    if (!isActive) {
      faqItem.classList.add('active');
    }
  });
});

// ============================
// CONTACT FORM
// ============================

const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  
  // For now, just log and show success
  console.log('Form submission:', data);
  
  // Create WhatsApp message
  const message = `Hi, I'm interested in starting a website project.

Name: ${data.name}
Brand: ${data.brandName}
Email: ${data.email}
Project Type: ${data.projectType}
Budget: ${data.budget}

Message: ${data.message}`;
  
  const whatsappUrl = `https://wa.me/2347047167280?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  
  // Show success message
  alert('Redirecting to WhatsApp! We\'ll get back to you shortly.');
  
  // Reset form
  contactForm.reset();
});

// ============================
// NEWSLETTER FORM
// ============================

const newsletterForm = document.getElementById('newsletterForm');

newsletterForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = newsletterForm.querySelector('input[type="email"]').value;
  
  // For now, just show success
  alert(`Thank you for subscribing! We'll send updates to ${email}`);
  
  newsletterForm.reset();
});

// ============================
// MOUSE PARALLAX EFFECT
// ============================

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;
  
  // Move gradient orbs slightly based on mouse position
  document.querySelectorAll('.gradient-orb').forEach((orb, index) => {
    const speed = (index + 1) * 20;
    const x = (mouseX - 0.5) * speed;
    const y = (mouseY - 0.5) * speed;
    
    orb.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// ============================
// INITIALIZE
// ============================

// Set initial currency
updateAllPrices('NGN');

// Add visible class to elements in view on load
setTimeout(() => {
  document.querySelectorAll('.section-header, .pricing-card, .work-card').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');
    }
  });
}, 100);

console.log('AlwaysIndex website initialized');
