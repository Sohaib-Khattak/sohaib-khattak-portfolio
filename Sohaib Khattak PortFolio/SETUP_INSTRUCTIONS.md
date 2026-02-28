# Portfolio Setup Instructions

This document contains instructions for completing the setup of your portfolio website.

## 📧 EmailJS Configuration (Contact Form)

Your contact form requires EmailJS to send emails. Follow these steps:

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

### Step 2: Connect Email Service
1. Go to **Email Services** → **Add New Service**
2. Choose your email provider (Gmail recommended)
3. Follow the connection steps
4. Copy your **Service ID** (format: `service_xxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates** → **Create New Template**
2. Use this template:
   ```
   Subject: New Contact from Portfolio - {{subject}}

   From: {{from_name}}
   Email: {{from_email}}

   Message:
   {{message}}
   ```
3. Save and copy your **Template ID** (format: `template_xxxxx`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (format: `user_xxxxxxxxxxxxx`)

### Step 5: Update Your Portfolio Files

**File: index.html (Line 84)**
```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
```

**File: script.js (Line 242)**
```javascript
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
```

---

## 📊 Google Analytics Configuration (Tracking)

Track your portfolio visitors with Google Analytics.

### Step 1: Create Google Analytics Account
1. Go to https://analytics.google.com/
2. Sign in with your Google account
3. Click **Start measuring**

### Step 2: Set Up Property
1. **Account name**: Sohaib Khattak Portfolio
2. **Property name**: Portfolio Website
3. Select your timezone: Pakistan (PKT)
4. Click **Create**

### Step 3: Set Up Data Stream
1. Choose **Web** as platform
2. **Website URL**: Your domain (or use `http://localhost` for testing)
3. **Stream name**: Portfolio Website
4. Click **Create stream**
5. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 4: Update Your Portfolio

**File: index.html (Lines 12 & 17)**
```javascript
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-YOUR_MEASUREMENT_ID'); // Replace with your actual Measurement ID
</script>
```

---

## ✅ Quick Checklist

- [ ] EmailJS Public Key added to `index.html` line 84
- [ ] EmailJS Service ID added to `script.js` line 242
- [ ] EmailJS Template ID added to `script.js` line 242
- [ ] Google Analytics Measurement ID added to `index.html` lines 12 & 17
- [ ] Test contact form by sending a test message
- [ ] Verify Google Analytics is tracking (check Real-time reports)

---

## 🔗 Certificate Verification Links

All certificate verification links have been added from your CV:
- ✅ Database Structures and Management with MySQL (Meta)
- ✅ AI For Everyone (DeepLearning.AI)
- ✅ Google Data Analytics (Google)
- ✅ Introduction to HTML, CSS & JavaScript (IBM)
- ✅ Crash Course on Python (Google)
- ✅ n8n Workflow Automation
- ✅ AI/ML Training (UET Peshawar)
- ✅ Cloud Computing (AWS Student Community)

---

## 📝 Notes

- EmailJS free tier: 200 emails/month
- Google Analytics is completely free
- Both services are GDPR compliant
- Setup time: ~15 minutes total

---

## 🆘 Need Help?

If you encounter any issues:
1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. Check Google Analytics Help: https://support.google.com/analytics/
3. Contact me for assistance

---

**Last Updated**: February 28, 2026
