# AlwaysIndex V2 - Complete Restructure

## Overview
Complete redesign of AlwaysIndex website following modern, professional design principles with white background, clean aesthetics, and streamlined content.

## Key Changes

### 1. Visual Design
- **Background**: Changed from black (#000000) to white (#FFFFFF)
- **Color Palette**: Red (#C62025), Blue (#547ba4), Grey (#666A86), Navy (#0d1d30)
- **No Gradients**: Removed all gradient effects for cleaner, more professional look
- **Removed Custom Cursor**: Back to standard browser cursor
- **Reduced Spacing**: Tighter, more compact layout throughout

### 2. Pricing Section
- **Reduced Bullet Points**:
  - Starter: 4 points (was 7)
  - Professional: 5 points (was 9)
  - Premium: 6 points (was 10)
- **Accent Colors per Tier**:
  - Starter: Blue (#547ba4)
  - Professional: Red (#C62025) - Most Popular
  - Premium: Grey (#666A86)
- **Removed Emojis**: All emoji icons removed

### 3. Optional Upgrades
- **Compact Layout**: 6 upgrades on one line (grid layout)
- **Removed**: "Add to Package" buttons
- **Removed**: Estimated Total calculator section
- **Smaller Cards**: Minimal design with just title and price

### 4. FAQ Section
- **Side-by-Side Layout**: Header on left, questions on right
- **Sticky Header**: FAQ title stays in view on desktop
- **Cleaner Accordion**: Simplified expand/collapse

### 5. Currency Converter
- **Position**: Fixed button in bottom right corner
- **Floating Design**: Clean white card with shadow
- **Always Visible**: Accessible from any section

### 6. Portfolio/Work
- **Separate Page**: Created `work.html` for portfolio showcase
- **3 Premium Websites**:
  1. **WayKON Capital** - Investment holding company (https://way-kon-capital.vercel.app)
  2. **NOIR Apparel** - Contemporary fashion brand (portfolio/noir-apparel/)
  3. **Studio Forma** - Creative design studio (portfolio/studio-forma/)
- **Live Previews**: Actual website iframes, not stock photos
- **Professional Quality**: Each showcase website designed to premium standards

## File Structure

```
alwaysindex/
├── index-new.html          # New main page
├── work.html               # Portfolio page
├── css/
│   ├── styles-v2.css       # New main stylesheet
│   └── work.css            # Portfolio page styles
├── js/
│   └── script-v2.js        # Updated JavaScript
└── portfolio/
    ├── noir-apparel/
    │   └── index.html      # Fashion brand showcase
    └── studio-forma/
        └── index.html      # Creative agency showcase
```

## Showcase Websites

### NOIR Apparel
- **Type**: Contemporary Fashion Brand
- **Style**: Minimalist, editorial, high-end
- **Features**: Product grid, clean typography, neutral palette
- **Fonts**: Inter + Playfair Display

### Studio Forma
- **Type**: Creative Design Studio
- **Style**: Bold, modern, energetic
- **Features**: Service grid, portfolio showcase, capabilities list
- **Fonts**: Space Grotesk
- **Colors**: Uses AlwaysIndex palette (red, blue, grey, navy)

## Design Inspiration Sources
- fff.club - Clean, professional investment platform
- digiface.agency - Streamlined pricing and service presentation
- are.na/ines-silva/websites - Modern web design trends

## Technical Implementation

### Responsive Design
- Mobile-first approach maintained
- Breakpoints: 480px, 768px, 900px
- Side-by-side FAQ switches to stacked on mobile
- Work previews optimize for smaller screens

### Performance
- No heavy animations or custom cursors
- Optimized CSS (no gradients reduces rendering load)
- Clean, semantic HTML
- Efficient JavaScript

### Color Usage
- **Red (#C62025)**: Primary CTAs, accents, most popular badge
- **Blue (#547ba4)**: Starter tier, secondary accents
- **Grey (#666A86)**: Premium tier, muted text
- **Navy (#0d1d30)**: Dark backgrounds, footer
- **White (#FFFFFF)**: Main background, clean space

## Next Steps
1. Replace `index.html` with `index-new.html` when ready to deploy
2. Add actual product images to showcase websites
3. Connect contact form to backend
4. Implement analytics tracking
5. Add meta tags and SEO optimization

## Notes
- All emoji icons removed throughout
- Professional, corporate tone maintained
- Mobile optimization prioritized
- Currency conversion functional with NGN, USD, GBP
- FAQ accordion works smoothly
- Navigation updated to include work page link

---

**Created**: March 6, 2026  
**Version**: 2.0  
**Status**: Ready for review
