# Screenshot Upload Instructions

## What Was Done

✅ **Hero Stats Updated**
- Added "24/7 Support" as the third stat
- Now shows: 7 Days Average | 100% Client Satisfaction | 24/7 Support

✅ **Email Changed**
- Old: hello@alwaysindex.com
- New: **waykonsystems@gmail.com**
- Updated in: Contact section, Footer (both pages), All mailto: links

✅ **Work Page Prepared for Screenshot**
- Changed from iframe embed to static image
- Better performance, faster loading
- No embedding issues

✅ **Forms Documentation Created**
- See `FORMS_SETUP.md` for complete details
- **Current Status:** Forms go NOWHERE (console.log only)
- **Recommendation:** Set up Formspree (15 min, free)

---

## 🚨 ACTION REQUIRED: Upload Screenshot

### Step 1: Locate Your Screenshot
**File name:** `Screenshot 2026-03-06 113644.png`

### Step 2: Upload to GitHub

**Option A: Via GitHub Web Interface**
1. Go to: https://github.com/KJ-Okonjo/AlwaysIndex
2. Navigate to: `assets/portfolio/`
3. Click "Add file" → "Upload files"
4. Drag and drop `Screenshot 2026-03-06 113644.png`
5. **IMPORTANT:** Rename to `waykon-preview.png` before uploading
6. Commit with message: "Add WayKON Capital preview screenshot"

**Option B: Via Git (if you have access)**
```bash
# From your local machine
cd /path/to/alwaysindex
cp "Screenshot 2026-03-06 113644.png" assets/portfolio/waykon-preview.png
git add assets/portfolio/waykon-preview.png
git commit -m "Add WayKON Capital preview screenshot"
git push origin main
```

**Option C: Share with Me**
If you can provide the screenshot file, I can handle the upload.

### Step 3: Verify
After upload, check: https://always-index.vercel.app/work.html

**Expected Result:**
- WayKON Capital preview shows your screenshot
- Full image visible, nothing cut off
- Clicking opens live site
- Hover effect works (slight zoom)

---

## Screenshot Requirements

### Recommended Specifications:
- **Dimensions:** 1600px × 1000px (16:10 ratio)
- **Format:** PNG (for quality) or JPG (for smaller size)
- **Content:** Full desktop view of https://way-kon-capital.vercel.app
- **File Size:** Under 500KB (optimized)

### What the Screenshot Should Show:
- Full WayKON Capital homepage
- Desktop view (not mobile)
- Header with logo and navigation
- Main hero section visible
- High quality, clear text

### How It Will Display:
```
┌─────────────────────────────────────┐
│                                     │
│   [Your Screenshot Here]            │
│   Aspect Ratio: 16:10               │
│   Fits perfectly in preview box     │
│   Nothing cut off                   │
│                                     │
└─────────────────────────────────────┘
```

---

## Current File Structure

```
alwaysindex/
├── assets/
│   └── portfolio/
│       ├── README.md              ✅ Created
│       └── waykon-preview.png     ❌ MISSING (needs upload)
├── css/
│   └── work.css                   ✅ Updated for image display
├── work.html                      ✅ Updated to use image
└── FORMS_SETUP.md                ✅ Created
```

---

## What Happens After Screenshot Upload

### Automatic:
1. ✅ Vercel detects new commit
2. ✅ Rebuilds site (1-2 minutes)
3. ✅ Screenshot appears on work page
4. ✅ Preview box shows full image

### Manual Check:
- Visit: https://always-index.vercel.app/work.html
- Verify WayKON preview looks good
- Test clicking to ensure link works
- Check mobile responsiveness

---

## If Screenshot Doesn't Fit Properly

### Issue: Image appears stretched or cropped
**Solution:** Resize image to 1600 × 1000 pixels exactly

### Issue: Image quality is poor
**Solution:** Use PNG format, ensure source is high resolution

### Issue: Wrong aspect ratio
**Solution:** Crop to 16:10 ratio (1600:1000, 1280:800, etc.)

### Tools for Resizing:
- **Online:** https://www.iloveimg.com/resize-image
- **Mac:** Preview (Tools → Adjust Size)
- **Windows:** Paint (Resize → Pixels)
- **Advanced:** Photoshop, GIMP, Figma

---

## Current Status Summary

| Item | Status | Action Required |
|------|--------|----------------|
| 24/7 Support stat | ✅ Done | None |
| Email updated | ✅ Done | None |
| Work page code | ✅ Done | None |
| Screenshot uploaded | ❌ Pending | **Upload waykon-preview.png** |
| Forms connected | ❌ Not done | See FORMS_SETUP.md |

---

## Next Steps Priority

**Priority 1: Screenshot**
- Upload `waykon-preview.png` to `assets/portfolio/`
- Takes 2 minutes
- Website will look complete

**Priority 2: Forms** (Separate task)
- Read `FORMS_SETUP.md`
- Set up Formspree account
- Connect contact form
- Takes 15 minutes

**Priority 3: Test Everything**
- Check work page preview
- Test contact form
- Share link on social media
- Verify meta tags show correctly

---

## Questions?

**Where exactly does the screenshot go?**
→ `alwaysindex/assets/portfolio/waykon-preview.png`

**What if I don't have the screenshot?**
→ Take a new one from https://way-kon-capital.vercel.app

**Can I use a different image?**
→ Yes, just name it `waykon-preview.png`

**Do I need to update any code?**
→ No, everything is already set up for the image

**Will this affect the live site link?**
→ No, clicking preview still opens the real site

---

**All changes pushed to GitHub:** ✅ Complete  
**Waiting on:** Screenshot upload  
**Commit:** 5446bd2
