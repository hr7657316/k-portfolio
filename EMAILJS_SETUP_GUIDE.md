# EmailJS Setup Guide for Portfolio Contact Form

This guide will help you set up EmailJS to make the contact form in your portfolio fully functional.

## Step 1: Create a Free EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account.
2. Verify your email address.

## Step 2: Add an Email Service

1. Once logged in, go to the **Email Services** tab.
2. Click **Add New Service**.
3. Choose your email provider (Gmail is recommended for simplicity).
4. Connect your Gmail account (you'll need to authorize EmailJS to send emails on your behalf).
5. Give your service a name (e.g., "Portfolio Contact") and note down the **Service ID**.

## Step 3: Create an Email Template

1. Go to the **Email Templates** tab.
2. Click **Create New Template**.
3. Design your email template using their editor. A simple template could include:

**Subject**: New Contact Form Submission from Portfolio - {{subject}}

**Body**:
```
You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Sent via Portfolio Contact Form
```

4. Save the template and note down the **Template ID**.

## Step 4: Get Your Public Key

1. Go to the **Account** tab.
2. Find your **Public Key** and note it down.

## Step 5: Update Your Contact Component

Replace the values in your Contact/index.js file with your actual EmailJS credentials:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',  // Replace with your Service ID
  'YOUR_TEMPLATE_ID', // Replace with your Template ID
  formData,
  'YOUR_PUBLIC_KEY'   // Replace with your Public Key
);
```

## Step 6: Test the Form

1. Run your portfolio site.
2. Fill out the contact form and submit it.
3. Check your email to see if you received the message.

## Additional Notes:

- The free plan allows up to 200 emails per month, which should be enough for a personal portfolio.
- Make sure your email template includes all the variables used in your contact form (from_name, from_email, subject, message).
- If you're not receiving emails, check your spam folder.
- For local testing, you might need to turn off certain browser extensions that block third-party cookies.

If you encounter any issues, check the EmailJS documentation or contact their support. 