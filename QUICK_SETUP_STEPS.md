# Quick Setup Steps for ContactJS Form

## Complete These Steps Now

1. **Create your EmailJS account**
   - Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
   - Use your Gmail account to sign up (it's faster)

2. **Set up your email service**
   - In the EmailJS dashboard, go to "Email Services"
   - Click "Add New Service" 
   - Select "Gmail" (or your preferred email provider)
   - Connect your Gmail account (the one you want to receive messages at: kishankumar969846@gmail.com)
   - Name your service "Portfolio Contact" (or any name you prefer)
   - Note down the Service ID (it will look something like "service_xxxxxxx")

3. **Create your email template**
   - Go to "Email Templates" in the EmailJS dashboard
   - Click "Create New Template"
   - For Subject, enter: "Portfolio Contact: {{subject}}"
   - For Content, enter:
     ```
     You have received a message from your portfolio contact form:

     Name: {{from_name}}
     Email: {{from_email}}
     Subject: {{subject}}

     Message:
     {{message}}

     This email was sent from your portfolio contact form.
     ```
   - Save the template and note down the Template ID (it will look like "template_xxxxxxx")

4. **Get your Public Key**
   - Go to "Account" in the EmailJS dashboard
   - Find your "Public Key" (it will look like "XXXXXXXXXXXXXXXXXX")

5. **Update your Contact Component**
   - Open your project in your code editor
   - Navigate to src/components/Contact/index.js
   - Find this code block:
     ```javascript
     await emailjs.send(
       'service_tox7kqs',  // Your EmailJS service ID
       'template_nv7k7mj', // Your EmailJS template ID
       formData,
       'SybVGsYS52j2TfLbi'  // Your EmailJS public key
     );
     ```
   - Replace those placeholders with your actual EmailJS credentials:
     ```javascript
     await emailjs.send(
       'YOUR_SERVICE_ID',  // Replace with your Service ID from step 2
       'YOUR_TEMPLATE_ID', // Replace with your Template ID from step 3
       formData,
       'YOUR_PUBLIC_KEY'   // Replace with your Public Key from step 4
     );
     ```

6. **Test your contact form**
   - If your development server is already running, refresh the page
   - Fill out the contact form and submit it
   - Check your kishankumar969846@gmail.com inbox for the message
   - If you don't see it right away, check your spam folder

7. **Deploy your updated portfolio**
   - Once the contact form is working, deploy your updated portfolio to your hosting service

## Troubleshooting

If the form doesn't work:
- Double-check that all IDs and keys are correctly copied
- Make sure your EmailJS account is verified (check your email)
- Check if you've reached the free tier limit (200 emails per month)
- Try testing with the EmailJS dashboard's "Test" feature

## Next Steps

After completing this setup, your portfolio's contact form will be fully functional, allowing visitors to easily reach out to you. You can monitor all sent emails in the EmailJS dashboard. 