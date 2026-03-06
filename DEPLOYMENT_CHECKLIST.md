# Deployment Checklist - AlwaysIndex V2

## Pre-Deployment

### Files Created ✓
- [x] `index-new.html` - New main page
- [x] `work.html` - Portfolio showcase page
- [x] `css/styles-v2.css` - New stylesheet
- [x] `css/work.css` - Portfolio page styles
- [x] `js/script-v2.js` - Updated JavaScript
- [x] `portfolio/noir-apparel/index.html` - Fashion brand showcase
- [x] `portfolio/studio-forma/index.html` - Creative agency showcase

### Quality Checks
- [ ] Test all internal links
- [ ] Verify currency converter functionality
- [ ] Test FAQ accordion on all devices
- [ ] Check mobile responsiveness
- [ ] Validate HTML
- [ ] Test contact form (currently console.log only)
- [ ] Test newsletter form (currently console.log only)
- [ ] Check all navigation links work
- [ ] Verify work page previews load correctly
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)

### Content Review
- [ ] Proofread all copy
- [ ] Verify pricing matches business requirements
- [ ] Check phone number is correct (+234 704 716 7280)
- [ ] Verify email address (hello@alwaysindex.com)
- [ ] Confirm WayKON Capital link is live

### Design QA
- [x] White background throughout
- [x] No gradients used
- [x] Normal cursor (no custom animation)
- [x] Red, blue, grey tones prominent
- [x] Each pricing tier has different accent color
- [x] Currency button in bottom right
- [x] FAQ header on left, questions on right
- [x] Pricing bullets reduced (4/5/6)
- [x] Upgrades fit on one line
- [x] No emojis
- [x] Reduced spacing between sections

## Deployment Steps

### 1. Backup Current Version
```bash
cd alwaysindex
cp index.html index-v1-backup.html
cp css/styles-new.css css/styles-v1-backup.css
cp js/script-new.js js/script-v1-backup.js
```

### 2. Deploy New Version
```bash
# Option A: Replace files
mv index-new.html index.html
# Update CSS and JS references in index.html if needed

# Option B: Update links
# Keep index-new.html and update all references
```

### 3. Test Live Site
- [ ] Homepage loads correctly
- [ ] All sections visible and properly styled
- [ ] Navigation works
- [ ] Currency converter functional
- [ ] FAQ accordion works
- [ ] Forms display correctly
- [ ] Work page accessible and displays showcases
- [ ] Mobile version works
- [ ] Footer links work

### 4. Analytics & Tracking
- [ ] Add Google Analytics (if applicable)
- [ ] Set up form submission tracking
- [ ] Monitor page load times
- [ ] Check for console errors

## Post-Deployment

### Immediate (Day 1)
- [ ] Monitor contact form submissions
- [ ] Check analytics for any errors
- [ ] Test on different devices
- [ ] Get feedback from stakeholders

### Week 1
- [ ] Review user behavior analytics
- [ ] Monitor bounce rates
- [ ] Check conversion rates
- [ ] Collect user feedback

### Month 1
- [ ] Analyze performance metrics
- [ ] Plan improvements based on data
- [ ] Update content as needed
- [ ] Optimize based on user behavior

## Known Limitations

1. **Showcase Websites**: Currently using placeholder images
   - Need to add actual product photography for NOIR
   - Need to add actual project screenshots for Studio Forma

2. **Forms**: Currently using console.log
   - Need backend integration for contact form
   - Need email service for newsletter

3. **Currency Conversion**: Using static rates
   - Consider API integration for live rates
   - Update rates regularly if staying static

4. **Work Page Previews**: Using iframes
   - May have loading issues with some sites
   - Consider screenshot fallbacks

## Contact Integration Options

### Email Services
- FormSpree
- EmailJS
- Netlify Forms
- Custom backend

### Recommended: FormSpree
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- form fields -->
</form>
```

## SEO Checklist
- [ ] Add meta descriptions to all pages
- [ ] Add Open Graph tags
- [ ] Add Twitter Card tags
- [ ] Submit sitemap to Google
- [ ] Set up Google Search Console
- [ ] Create robots.txt
- [ ] Add schema.org markup for business

---

**Last Updated**: March 6, 2026  
**Version**: 2.0  
**Ready for Deployment**: Pending QA
