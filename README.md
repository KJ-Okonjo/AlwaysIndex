# AlwaysIndex Website

**High-Leverage Brand Positioning & Growth Firm**

---

## 📁 Project Structure

```
alwaysindex/
├── index.html                      # Homepage
├── website-creation.html           # Website Creation service page
├── growth-partnership.html         # Strategic Growth Partnership page
├── promotion.html                  # Promotion / Brand Spotlight page
├── css/
│   └── styles.css                  # Main stylesheet
├── js/
│   └── script.js                   # Interactive JavaScript
├── assets/
│   ├── images/
│   │   ├── logo.svg                # AlwaysIndex logo (to be added)
│   │   └── favicon.svg             # Favicon (to be added)
│   └── icons/                      # Additional icons (optional)
└── README.md                       # This file
```

---

## 🎨 Design System

### Colors
- **Primary Black:** `#000000`
- **Primary White:** `#FFFFFF`
- **Accent Orange:** `#fa5f1f`
- **Accent Navy:** `#0d1d30`
- **Accent Blue:** `#547ba4`
- **Accent Gray:** `#666A86`
- **Accent Teal:** `#558C8C`
- **Accent Red:** `#C62025`

### Typography
- **Font Family:** Inter (sans-serif)
- **Weights:** 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold), 800 (extra-bold)

### Aesthetic
- Cultured, creative/editorial with 30–40% professional tone
- Clean, modern, with subtle animations
- Mobile-first, responsive design

---

## 🚀 Quick Start

### 1. Add Logo & Favicon
- Replace placeholder logo references in all HTML files
- Add your logo file to `assets/images/logo.svg` (or `.png`)
- Add favicon to `assets/images/favicon.svg` (or `.ico`)

### 2. Update Contact Information
- **WhatsApp:** Search for `data-whatsapp="2347047167280"` and update the number
- **Email:** Search for `hello@alwaysindex.com` and update the email address

### 3. Replace Placeholder Content
- **Testimonials:** Update client names, quotes, and company names
- **Portfolio/Brands:** Replace Instagram post links and brand images
- **Images:** Add real images to `assets/images/` directory

### 4. Customize Content
- Edit service descriptions, pricing, or features in each HTML file
- Adjust hero headlines and subheadlines to match your brand voice
- Add real case studies, portfolio items, or testimonials

### 5. Launch
- Upload files to your web hosting (GitHub Pages, Netlify, Vercel, etc.)
- Ensure all links and images are working correctly
- Test mobile responsiveness on multiple devices

---

## 📄 Page Breakdown

### **Homepage** (`index.html`)
- Hero section with CTA
- Services overview (3 revenue lines)
- Process workflow (Website Creation)
- Testimonials (placeholders)
- Contact section

### **Website Creation** (`website-creation.html`)
- Service overview
- Pricing tiers (Starter, Growth, Authority/E-Commerce)
- Optional upsells
- Process workflow
- Contact section

### **Growth Partnership** (`growth-partnership.html`)
- Partnership overview
- Ideal client fit section
- Pricing models (Monthly Retainer, Performance Share)
- Application process
- Contact section

### **Promotion** (`promotion.html`)
- Brand spotlight overview
- Pricing (Single Post, Full Feature, Premium Campaign)
- Ideal brands section
- Featured brands grid (Instagram posts)
- Application process
- Contact section

---

## 🔧 Customization Guide

### Update Navigation Menu
All pages use the same navigation structure. To add/remove menu items, edit the `<nav class="navbar">` section in each HTML file.

### Change Colors
Edit CSS variables in `css/styles.css` under the `:root` selector:
```css
:root {
  --primary-black: #000000;
  --accent-orange: #fa5f1f;
  /* etc. */
}
```

### Add New Sections
Use existing section structures as templates. Key classes:
- `.section` - Main container
- `.section-header` - Section title and description
- `.reveal` - Add scroll-reveal animation

### Modify Animations
Adjust animation timings and effects in `css/styles.css` under the `/* ANIMATIONS */` section.

### Update Contact Methods
Edit `js/script.js` in the `initContactButtons()` function to customize WhatsApp messages or email subjects.

---

## 📱 Features

### Mobile Menu
- Hamburger menu for mobile devices
- Smooth transitions and overlay
- Auto-closes when link is clicked

### Scroll Animations
- Elements with `.reveal` class fade in on scroll
- Navbar changes style when scrolled
- Smooth scroll for anchor links

### Contact Integration
- WhatsApp direct messaging via custom data attributes
- Email mailto links with pre-filled subjects
- No form submissions required (as requested)

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px for tablets/desktops
- Grid layouts adapt to screen size

---

## 🎯 Next Steps

### Content
- [ ] Add real logo and favicon
- [ ] Update contact information (WhatsApp, email)
- [ ] Replace testimonial placeholders with real client feedback
- [ ] Add real brand images to promotion page
- [ ] Update Instagram post links in `promotion.html`
- [ ] Add portfolio/case study images

### Optional Enhancements
- [ ] Add blog section (optional)
- [ ] Integrate Google Analytics or tracking
- [ ] Set up email capture (ConvertKit, Mailchimp, etc.)
- [ ] Add more interactive elements or micro-animations
- [ ] Create additional landing pages for campaigns
- [ ] SEO optimization (meta tags, Open Graph, schema markup)

### Deployment
- [ ] Choose hosting platform (Netlify, Vercel, GitHub Pages, etc.)
- [ ] Set up custom domain
- [ ] Test all links and functionality
- [ ] Mobile device testing
- [ ] Performance optimization (image compression, minification)

---

## 🛠️ Technical Notes

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox for layouts
- CSS Custom Properties (variables)

### Dependencies
- **Fonts:** Google Fonts (Inter)
- **Icons:** Emoji-based (can be replaced with icon libraries like Font Awesome)
- No JavaScript frameworks (vanilla JS)

### Performance
- Minimal external dependencies
- CSS animations use `transform` and `opacity` for GPU acceleration
- Lazy-loading ready for images (add `loading="lazy"` attribute)

---

## 📞 Contact & Support

**AlwaysIndex**  
WhatsApp: +234 704 716 7280  
Email: hello@alwaysindex.com

Owned and operated by **WayKON Capital**

---

## 📝 License

This website template is proprietary to AlwaysIndex. All rights reserved.

---

**Built with ⚡ by AlwaysIndex**
