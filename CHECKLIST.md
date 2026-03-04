# AlwaysIndex Launch Checklist

Quick action items to go from draft to live.

---

## 🔴 Critical (Must Do Before Launch)

- [ ] **Replace Logo** → `assets/images/logo.svg` with your actual logo
- [ ] **Replace Favicon** → `assets/images/favicon.svg` with your actual icon
- [ ] **Update WhatsApp Number** → Search all files for `2347047167280` and replace
- [ ] **Update Email Address** → Search all files for `hello@alwaysindex.com` and replace
- [ ] **Test All Links** → Click every button, link, and menu item to ensure they work

---

## 🟡 High Priority (Should Do Soon)

- [ ] **Replace Testimonials** → Edit `index.html` with real client feedback
- [ ] **Update Instagram Posts** → Replace placeholder images/links in `promotion.html`
- [ ] **Add Real Portfolio Images** → Add brand photos to `assets/images/` and update references
- [ ] **Mobile Device Testing** → Test on iPhone, Android, and tablet
- [ ] **Choose Hosting Platform** → GitHub Pages / Netlify / Vercel / Custom

---

## 🟢 Nice to Have (Can Do Later)

- [ ] **Add Meta Descriptions** → SEO optimization for each page
- [ ] **Set Up Analytics** → Google Analytics or alternative
- [ ] **Create About Page** → Founder story or company background (optional)
- [ ] **Add Blog Section** → Case studies or thought leadership (optional)
- [ ] **Email Capture** → Newsletter signup form (if desired)
- [ ] **Social Media Links** → Add Instagram, Twitter, etc. to footer

---

## 🔧 Technical Checks

- [ ] **Validate HTML** → Use W3C Validator
- [ ] **Compress Images** → Optimize file sizes for faster loading
- [ ] **Test in Multiple Browsers** → Chrome, Safari, Firefox, Edge
- [ ] **Check Mobile Menu** → Ensure hamburger menu works on small screens
- [ ] **Verify WhatsApp Links** → Test that WhatsApp opens correctly on mobile

---

## 🚀 Pre-Launch

- [ ] **Set Custom Domain** → Point DNS to hosting provider
- [ ] **SSL Certificate** → Ensure HTTPS is enabled
- [ ] **404 Page** → Create custom error page (optional)
- [ ] **Robots.txt** → Configure for SEO (optional)
- [ ] **Sitemap.xml** → Generate for search engines (optional)

---

## 📊 Post-Launch

- [ ] **Share on Social Media** → Announce the launch
- [ ] **Collect Feedback** → Get input from users and clients
- [ ] **Monitor Analytics** → Track traffic and conversions
- [ ] **Iterate & Improve** → Make updates based on data

---

## ⚡ Quick Command Reference

### Search and Replace Contact Info (Linux/Mac)
```bash
# Update WhatsApp number
grep -rl "2347047167280" . | xargs sed -i 's/2347047167280/YOUR_NUMBER/g'

# Update email address
grep -rl "hello@alwaysindex.com" . | xargs sed -i 's/hello@alwaysindex.com/YOUR_EMAIL/g'
```

### Deploy to Netlify (Example)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy from project root
cd alwaysindex
netlify deploy --prod
```

### Deploy to GitHub Pages (Example)
```bash
# Push to GitHub repo
git init
git add .
git commit -m "Initial AlwaysIndex website"
git remote add origin https://github.com/yourusername/alwaysindex.git
git push -u origin main

# Enable GitHub Pages in repo settings
```

---

## 📞 Support

If you need help with any of these steps, reach out via:

- WhatsApp: [Your Number]
- Email: [Your Email]

---

**Built for AlwaysIndex — Production OS**
