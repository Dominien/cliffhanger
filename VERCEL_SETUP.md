# Vercel Deployment Setup

This document explains how to set up this project for deployment on Vercel.

## Environment Variables

Make sure to add the following environment variables in your Vercel project settings:

1. `RESEND_API_KEY` - Your Resend API key for sending email notifications
2. `EMAIL_FROM` - The email address to send notifications from (must be verified in Resend)
3. `NOTIFICATION_EMAIL` - The email address to receive form notifications

## API Routes

The project includes the following API routes that are configured to work with Vercel:

- `/api/funnel-responses` - Handles funnel form submissions
- `/api/contact` - Handles contact form submissions
- `/api/chat` - Handles chat messages
- `/api/health` - A simple health check endpoint

## Deployment Steps

1. Push your code to a Git repository
2. Connect the repository to Vercel
3. Set up the environment variables as described above
4. Deploy the project

## Troubleshooting

If you encounter issues with the API routes:

1. Check the function logs in Vercel for specific error messages
2. Verify that your environment variables are correctly set
3. Check the Resend dashboard to confirm emails are being sent

## Testing the Deployment

After deploying:

1. Submit a test contact form and check if you receive an email notification
2. Submit a test funnel form and check if you receive an email notification
3. Send a test chat message and check if you receive a response

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Resend Documentation](https://resend.com/docs)
- [Express.js Documentation](https://expressjs.com/)