# Deployment Notes — AlwaysIndex Website

**Date:** March 4, 2025  
**Status:** ✅ Pushed to GitHub  
**Repo:** https://github.com/KJ-Okonjo/AlwaysIndex

---

## ✅ What Was Done

### 1. **Updated All Hero Headlines**
   - Removed dashes and made headlines more creative/cultural
   - Homepage: "Build With Us. Grow With Intent."
   - Website Creation: "Your Site, Live in Days. Built to Convert."
   - Growth Partnership: "Co-Build Your Growth. We're Selective."
   - Promotion: "Get Seen. By the Right People."

### 2. **Reordered Navigation (Website Creation Prioritized)**
   - New order: Home → **Websites** → Promotion → Partnership
   - Footer links updated to match
   - "Growth Partnership" shortened to "Partnership" in nav

### 3. **Created Better Testimonials**
   - More authentic, less AI-sounding
   - Real Nigerian names and realistic business types:
     - Tunde Bakare, KitchenCulture Lagos
     - Ngozi Okonkwo, Threads & Heritage
     - Kemi Adebayo, Bloom Naturals

### 4. **Added Newsletter Signup**
   - Form on homepage with email capture
   - Styled input + subscribe button
   - JavaScript validation and feedback
   - Placeholder for newsletter service integration (ConvertKit/Mailchimp)

### 5. **Created Upload Folder**
   - `assets/images/uploads/` for your custom images
   - Includes README with instructions

### 6. **Pushed to GitHub**
   - All files committed
   - Repository: `KJ-Okonjo/AlwaysIndex`
   - Branch: `main`

---

## 📸 Logo Integration — Next Steps

You provided two logo versions (black and white). To integrate them:

### Option A: Use PNG Logos Directly
1. Save the logo images to `assets/images/`:
   - `logo-black.png` (for light backgrounds)
   - `logo-white.png` (for dark backgrounds)

2. Update the logo reference in all HTML files:
   ```html
   <!-- Replace this: -->
   <img src="assets/images/logo.svg" alt="AlwaysIndex Logo" class="logo-image">
   
   <!-- With this: -->
   <img src="assets/images/logo-black.png" alt="AlwaysIndex Logo" class="logo-image">
   ```

3. For the footer (dark background), use `logo-white.png` if you want the logo visible there.

### Option B: Convert to SVG (Recommended)
- SVGs scale perfectly and load faster
- If you need help converting the PNG to SVG, let me know

---

## 🔧 Newsletter Integration

The newsletter form currently uses placeholder JavaScript. To make it functional:

### Option 1: ConvertKit
```javascript
// In js/script.js, replace the setTimeout simulation with:
fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    api_key: 'YOUR_API_KEY',
    email: email
  })
})
```

### Option 2: Mailchimp
Use Mailchimp's embedded form code or API integration

### Option 3: Custom Backend
Create a simple endpoint that captures emails to a database

---

## 📋 Instagram Embed Placeholders

The promotion page currently has placeholder Instagram post cards. To add real embeds later:

1. Get Instagram embed code from a post
2. Replace the placeholder `<a>` tags with Instagram embed `<blockquote>` code
3. Add Instagram embed script before closing `</body>` tag:
   ```html
   <script async src="//www.instagram.com/embed.js"></script>
   ```

---

## 🚀 Deploy to Live Site

### Quick Deploy Options:

**Netlify (Recommended):**
```bash
npm install -g netlify-cli
cd alwaysindex
netlify deploy --prod
```

**Vercel:**
```bash
npm install -g vercel
cd alwaysindex
vercel --prod
```

**GitHub Pages:**
- Go to repo settings
- Enable GitHub Pages
- Select `main` branch
- Site will be live at: `kj-okonjo.github.io/AlwaysIndex`

---

## 📞 Contact Info to Update

Current placeholders:
- **WhatsApp:** `+234 704 716 7280`
- **Email:** `hello@alwaysindex.com`

If these are correct, you're all set. If not, search and replace across all HTML files.

---

## ✨ What You Can Amend Later

Since you have creative control and will amend later:

1. **Logo files** — Upload the PNG versions to `assets/images/`
2. **Hero images** — Add background images to hero sections if desired
3. **Portfolio images** — Replace placeholder brand cards on promotion page
4. **Instagram embeds** — Swap placeholder cards with real embed code
5. **Newsletter service** — Integrate ConvertKit/Mailchimp
6. **Domain & SSL** — Point your custom domain to hosting
7. **Analytics** — Add Google Analytics or alternative

---

## 📂 File Structure (Now on GitHub)

```
alwaysindex/
├── index.html
├── website-creation.html
├── growth-partnership.html
├── promotion.html
├── README.md
├── PROJECT_SUMMARY.md
├── CHECKLIST.md
├── DEPLOYMENT_NOTES.md (this file)
├── .gitignore
├── css/styles.css
├── js/script.js
└── assets/
    └── images/
        ├── logo.svg (placeholder)
        ├── logo-black.png (placeholder - replace with real)
        ├── favicon.svg
        └── uploads/
            └── README.md
```

---

## 🎯 Immediate Action Items

1. ✅ Files pushed to GitHub
2. ⏳ Upload real logo PNG files to repo
3. ⏳ Update logo references in HTML files
4. ⏳ Choose hosting platform and deploy
5. ⏳ Integrate newsletter service (optional)
6. ⏳ Replace Instagram placeholders with real embeds (later)

---

**All files are now live on GitHub. Clone, amend, and deploy when ready!**

GitHub Repo: https://github.com/KJ-Okonjo/AlwaysIndex
