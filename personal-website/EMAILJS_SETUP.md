# EmailJS Setup Guide

Follow these steps to configure the contact form to send emails to your inbox:

## 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail is recommended)
   - For Gmail: You'll need to allow access via App Password
4. Follow the setup instructions and test the connection
5. Copy your **Service ID** (you'll need this later)

## 3. Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{name}}
Email: {{email}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. Make sure the template variables match: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`
5. Save the template and copy your **Template ID**

## 4. Get Your Public Key

1. Go to **Account** → **General** in your dashboard
2. Find your **Public Key** (also called API Key)
3. Copy this key

## 5. Configure Environment Variables

1. In your project root (`personal-website/`), create a `.env` file
2. Copy the contents from `.env.example`
3. Replace the placeholder values with your actual EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
```

## 6. Add .env to .gitignore

Make sure your `.env` file is in `.gitignore` to keep your keys private:

```
# .gitignore
.env
```

## 7. Restart Your Dev Server

After creating the `.env` file, restart your development server:

```bash
npm run dev
```

## 8. Test the Contact Form

1. Navigate to the contact page on your website
2. Fill out the form with test data
3. Click **Send**
4. Check your email inbox for the message

## Troubleshooting

### Emails not sending?

- Check browser console for errors
- Verify all three environment variables are set correctly
- Make sure your EmailJS account is verified
- Check your EmailJS dashboard for usage limits (free tier: 200 emails/month)
- Ensure template variable names match exactly

### Getting CORS errors?

- EmailJS should work without CORS issues
- Make sure you're using the correct Public Key (not Private Key)

### Need to send to a different email?

- In your EmailJS Email Service settings, you can configure which email address receives the messages
- You can also add multiple recipients in the template settings

## Free Tier Limits

- 200 emails per month
- 2 email services
- Unlimited email templates

For most personal portfolio websites, this is more than enough!






