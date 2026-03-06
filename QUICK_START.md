# Quick Start Guide - AlwaysIndex V2

## Viewing the New Design

### Main Page
Open in browser:
```
alwaysindex/index-new.html
```

### Portfolio Page
```
alwaysindex/work.html
```

### Showcase Websites
```
alwaysindex/portfolio/noir-apparel/index.html
alwaysindex/portfolio/studio-forma/index.html
```

## File Structure

```
alwaysindex/
│
├── index-new.html              # ← New main page (UPDATED)
├── work.html                   # ← Portfolio page (NEW)
│
├── css/
│   ├── styles-v2.css          # ← New main styles (NEW)
│   ├── work.css               # ← Portfolio styles (NEW)
│   └── styles-new.css         # (Old version - keep for reference)
│
├── js/
│   ├── script-v2.js           # ← New JavaScript (NEW)
│   └── script-new.js          # (Old version - keep for reference)
│
├── portfolio/                  # ← Showcase websites (NEW)
│   ├── noir-apparel/
│   │   └── index.html         # Fashion brand
│   └── studio-forma/
│       └── index.html         # Creative agency
│
└── Documentation/
    ├── V2_RESTRUCTURE_NOTES.md
    ├── BEFORE_AFTER.md
    ├── DEPLOYMENT_CHECKLIST.md
    └── QUICK_START.md (this file)
```

## Testing Locally

### Desktop
1. Open `index-new.html` in browser
2. Test navigation to all sections
3. Click "View Pricing" button
4. Test currency converter (bottom right)
5. Click through FAQ items
6. Navigate to Work page
7. Click on showcase websites

### Mobile
1. Resize browser to 375px width (iPhone)
2. Test mobile menu (hamburger)
3. Verify all sections are readable
4. Test touch interactions
5. Check currency converter is accessible

## Key Features to Test

### Currency Converter (Bottom Right)
- Should be visible on all pages
- Click NGN, USD, or GBP
- All prices should update
- Button should stay active

### FAQ Accordion
- Desktop: Header on left, questions on right
- Click any question to expand
- Only one open at a time
- Mobile: Stacks vertically

### Pricing Tiers
- Starter: Blue accent
- Professional: Red accent (Most Popular badge)
- Premium: Grey accent
- Each has correct number of bullet points (4/5/6)

### Work Page
- Shows 3 websites
- WayKON Capital (real project)
- NOIR Apparel (showcase)
- Studio Forma (showcase)
- Hover over previews to see "View Live Site"
- Click to open in new tab

## Making It Live

### Option 1: Replace Current Version
```bash
cd alwaysindex
mv index.html index-v1-backup.html
mv index-new.html index.html
```

### Option 2: Test First
Keep `index-new.html` and share the link for review before replacing.

## Customization Guide

### Changing Colors

In `css/styles-v2.css`, modify the root variables:
```css
:root {
  --accent-red: #C62025;    /* Primary CTAs */
  --accent-blue: #547ba4;   /* Starter tier */
  --accent-grey: #666A86;   /* Premium tier */
  --accent-navy: #0d1d30;   /* Dark accents */
}
```

### Updating Prices

In `index-new.html`, find pricing cards:
```html
<span class="price-value" data-ngn="350000">350,000</span>
```

Change the `data-ngn` attribute for automatic currency conversion.

### Adding/Removing Bullet Points

Edit the `<ul class="pricing-features">` section:
```html
<ul class="pricing-features">
  <li>Feature 1</li>
  <li>Feature 2</li>
  <!-- Add or remove <li> items -->
</ul>
```

### Updating Currency Rates

In `js/script-v2.js`, modify:
```javascript
const currencyRates = {
  NGN: 1,
  USD: 0.0012,  // Update this
  GBP: 0.00095  // Update this
};
```

## Common Tasks

### Change Contact Info
Update in `index-new.html` and `work.html`:
```html
<!-- WhatsApp -->
href="https://wa.me/2347047167280"

<!-- Email -->
href="mailto:hello@alwaysindex.com"
```

### Add New Showcase Website
1. Create folder: `portfolio/project-name/`
2. Add `index.html` with website
3. Update `work.html` to include new work item
4. Follow same structure as existing showcases

### Update Logo
Replace: `assets/images/Always Index LOGO .png`

### Change Fonts
In HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

In CSS:
```css
--font-primary: 'Your Font', sans-serif;
```

## Browser Compatibility

Tested and works on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Next Steps

1. **Review** all three pages in browser
2. **Test** on mobile device
3. **Get feedback** from stakeholders
4. **Deploy** when ready
5. **Monitor** analytics after launch

## Support

If you need to make changes:
1. Read relevant documentation file
2. Test changes in `index-new.html` (don't touch live `index.html`)
3. Use browser dev tools (F12) to debug
4. Validate HTML at validator.w3.org

## Production Deployment

Before going live:
- [ ] Test all links
- [ ] Verify phone/email are correct
- [ ] Check pricing is accurate
- [ ] Test on real mobile devices
- [ ] Set up form backend
- [ ] Add analytics
- [ ] Create backup of current version

---

**Ready to view?** Open `alwaysindex/index-new.html` in your browser!
