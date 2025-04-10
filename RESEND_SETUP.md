# Setting Up Resend Email Notifications for Vercel Deployment

This document explains how to set up Resend email notifications for your form submissions in your Vercel deployment.

## 1. Create a Resend Account

1. Go to [Resend's website](https://resend.com) and sign up for an account
2. Verify your domain (or use Resend's provided domain for testing)

## 2. Get Your API Key

1. After logging in, go to the API Keys section
2. Create a new API key
3. Copy the API key for the next step

## 3. Add Environment Variables to Vercel

Add the following environment variables in your Vercel project settings:

1. Go to your Vercel dashboard
2. Select your project
3. Navigate to "Settings" > "Environment Variables"
4. Add the following variables:

```
RESEND_API_KEY=your_resend_api_key_here
EMAIL_FROM=your_verified_email@yourdomain.com
NOTIFICATION_EMAIL=email_to_receive_notifications@yourdomain.com
```

## 4. Test the Setup

Once your environment variables are set and your project is deployed, test the email notifications by:

1. Filling out the contact form on your website
2. Checking your notification email inbox to see if you received the submission
3. You can also check the Resend dashboard to verify the email was sent successfully

## Troubleshooting

If you're not receiving email notifications:

1. Verify your API key is correct
2. Check that your "from" email is a verified domain in Resend
3. Check Vercel Function logs for any errors
4. Ensure your form submissions are reaching the API endpoints

## API Endpoints

The following API endpoints are set up for form submissions:

- `/api/contact` - For contact form submissions
- `/api/funnel-responses` - For funnel form submissions 
- `/api/health` - A simple health check endpoint

Each of these endpoints will send an email notification when a form is submitted successfully.