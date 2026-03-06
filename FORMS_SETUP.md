# Forms Setup & Configuration

## Current Status: Forms are NOT Connected

### Where Do Forms Currently Go?

**Answer:** Nowhere. They are currently set to `console.log()` only.

The forms currently exist in the frontend but do NOT send data anywhere:

### 1. Contact Form (`index.html`)
**Location:** Contact section (#contact)

**Current Behavior:**
```javascript
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  
  // Currently just logs to browser console
  console.log('Form submitted:', data);
  
  // Shows alert
  alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  
  // Resets form
  contactForm.reset();
});
```

**What Happens:**
- User fills out form
- User clicks "Send Inquiry"
- Alert message appears
- Form resets
- **Data is NOT saved or sent anywhere**

### 2. Newsletter Form (`index.html` + `work.html`)
**Location:** Footer section

**Current Behavior:**
```javascript
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = newsletterForm.querySelector('input[type="email"]').value;
  
  // Currently just logs to browser console
  console.log('Newsletter subscription:', email);
  
  // Shows alert
  alert('Thank you for subscribing!');
  
  // Resets form
  newsletterForm.reset();
});
```

**What Happens:**
- User enters email
- User clicks "Subscribe"
- Alert message appears
- Form resets
- **Email is NOT saved or sent anywhere**

---

## How to Connect Forms (Options)

### Option 1: Formspree (Recommended - Easiest)
**Free tier:** 50 submissions/month  
**Website:** https://formspree.io

**Setup:**
1. Create account at Formspree
2. Create a new form
3. Get your form endpoint (e.g., `https://formspree.io/f/YOUR_FORM_ID`)
4. Update the form action in HTML:

```html
<!-- Contact Form -->
<form class="contact-form" id="contactForm" 
      action="https://formspree.io/f/YOUR_FORM_ID" 
      method="POST">
  <!-- Keep all existing fields -->
</form>
```

5. Update JavaScript in `js/script-v2.js`:
```javascript
// Remove the e.preventDefault() to allow form submission
// Or keep it and add fetch() to send data to Formspree
```

**Email Delivery:**
- Formspree sends form data to: waykonsystems@gmail.com
- Configure in Formspree dashboard

### Option 2: Netlify Forms
**Free tier:** 100 submissions/month  
**Website:** https://www.netlify.com/products/forms/

**Setup:**
1. Add `netlify` attribute to form:
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact">
  <!-- existing fields -->
</form>
```

2. Deploy to Netlify
3. View submissions in Netlify dashboard
4. Configure email notifications

### Option 3: EmailJS
**Free tier:** 200 emails/month  
**Website:** https://www.emailjs.com/

**Setup:**
1. Create account
2. Connect email service (Gmail)
3. Create email template
4. Install EmailJS library
5. Update JavaScript to send via EmailJS

**Example Code:**
```javascript
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#contactForm')
  .then(() => {
    alert('Thank you for your inquiry!');
    contactForm.reset();
  });
```

### Option 4: Custom Backend
Build your own backend with:
- Node.js + Express
- Python + Flask
- PHP

**Requires:**
- Server hosting
- Email service (SendGrid, Mailgun, etc.)
- Database (if storing submissions)

---

## Recommended Setup for AlwaysIndex

### For Contact Form:
**Use Formspree** (simplest, most reliable)

**Steps:**
1. Go to https://formspree.io
2. Sign up with waykonsystems@gmail.com
3. Create form named "AlwaysIndex Contact"
4. Get form ID
5. Update `index.html` form action
6. Test submission

**Result:**
- All contact form submissions → waykonsystems@gmail.com
- Organized in Formspree dashboard
- Can export to spreadsheet

### For Newsletter:
**Options:**
- **Mailchimp** (free up to 500 subscribers)
- **Buttondown** (free up to 100 subscribers)
- **ConvertKit** (free up to 300 subscribers)

**Or use same Formspree:**
- Create separate form for newsletter
- Emails go to waykonsystems@gmail.com
- Manually add to mailing list

---

## Current Form Fields

### Contact Form
```
- name (text, required)
- brandName (text, required)
- email (email, required)
- projectType (select, required)
  Options: clothing, personal, startup, ecommerce, other
- budget (select, required)
  Options: starter (₦350k), professional (₦600k), premium (₦950k), custom
- message (textarea, required)
```

### Newsletter Form
```
- email (email, required)
```

---

## Testing Current Forms

### To Test in Browser:
1. Open website
2. Fill out contact form
3. Open browser console (F12)
4. Click "Send Inquiry"
5. Check console for logged data
6. Form should reset

**Note:** No actual email is sent. Data only appears in browser console.

---

## Next Steps to Make Forms Live

**Priority:** Connect contact form first

**Recommended Timeline:**
1. **Day 1:** Set up Formspree account
2. **Day 1:** Connect contact form
3. **Day 2:** Test submissions
4. **Day 3:** Add newsletter integration
5. **Week 2:** Consider upgrading to paid plan if needed

**Cost:**
- Formspree Free: $0/month (50 submissions)
- Formspree Paid: $10/month (1,000 submissions)
- Likely fine on free plan initially

---

## Files to Update When Connecting Forms

```
index.html           - Update form action/method
work.html            - Update newsletter form
js/script-v2.js      - Update submit handlers
```

**Documentation:**
- Formspree: https://help.formspree.io/
- Netlify Forms: https://docs.netlify.com/forms/setup/

---

**Current Status:** ❌ Not connected  
**Recommended Fix:** ✅ Formspree (15 min setup)  
**Cost:** 🆓 Free tier sufficient for now
