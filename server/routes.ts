import { createServer } from 'http';
import { Express } from 'express';
import { generateChatResponse } from './openai-service.js';
import { insertLeadResponseSchema, insertFunnelResponseSchema } from '../shared/schema.js';
import { Resend } from 'resend';

// Initialize Resend
let resend: Resend;
try {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY is not set - email notifications will be logged but not sent');
    // Create a dummy instance that won't be used for actual email sending
    resend = {} as Resend;
  } else {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
} catch (error) {
  console.error('Failed to initialize Resend:', error);
  resend = {} as Resend;
}

export async function registerRoutes(app: Express) {
  // Add contact endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const data = req.body;
      console.log('Received contact form submission:', JSON.stringify(data));
      
      // Send email notification
      if (process.env.RESEND_API_KEY) {
        try {
          const emailResult = await resend.emails.send({
            from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
            to: process.env.NOTIFICATION_EMAIL || 'info@cliffhangerstudios.de',
            subject: 'New Contact Form Submission',
            html: `
              <h1>New Contact Form Submission</h1>
              <h2>Contact Information</h2>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              ${data.website ? `<p><strong>Website:</strong> ${data.website}</p>` : ''}
              <p><strong>Goal:</strong> ${data.goal}</p>
              <p><strong>Submission Time:</strong> ${new Date().toISOString()}</p>
            `
          });
          
          console.log('Email sent successfully:', emailResult);
        } catch (emailError) {
          console.error('Failed to send email notification:', emailError);
          // Continue with the response even if email fails
        }
      } else {
        console.warn('RESEND_API_KEY not set, skipping email notification');
      }
      
      // Return success response
      res.json({ success: true });
    } catch (error) {
      console.error('Error in /api/contact:', error);
      res.status(500).json({
        message: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
        type: 'UnknownError'
      });
    }
  });

  const httpServer = createServer(app);

  // Chat endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      const botResponse = await generateChatResponse(message);
      res.json({ response: botResponse });
    } catch (error) {
      console.error('Error in chat endpoint:', error);
      res.status(500).json({
        error: 'Es gab einen Fehler bei der Verarbeitung deiner Nachricht.'
      });
    }
  });

  // Lead response endpoint - sends email instead of storing in DB
  app.post('/api/lead-responses', async (req, res) => {
    try {
      // Validate the data using the schema
      const data = insertLeadResponseSchema.parse(req.body);
      console.log('Received lead response:', JSON.stringify(data));
      
      // Send email notification
      if (process.env.RESEND_API_KEY) {
        try {
          const emailResult = await resend.emails.send({
            from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
            to: process.env.NOTIFICATION_EMAIL || 'info@cliffhangerstudios.de',
            subject: 'New Lead Response',
            html: `
              <h1>New Lead Response</h1>
              <h2>Business Information</h2>
              <p><strong>Business Type:</strong> ${data.businessType}</p>
              <p><strong>Project Timeline:</strong> ${data.projectTimeline}</p>
              <p><strong>Project Goals:</strong> ${data.projectGoals}</p>
              
              <h2>Contact Information</h2>
              <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              ${data.companyName ? `<p><strong>Company:</strong> ${data.companyName}</p>` : ''}
              ${data.website ? `<p><strong>Website:</strong> ${data.website}</p>` : ''}
              ${data.currentChatbot !== undefined ? `<p><strong>Has Current Chatbot:</strong> ${data.currentChatbot ? 'Yes' : 'No'}</p>` : ''}
              
              <p><strong>Submission Time:</strong> ${new Date().toISOString()}</p>
            `
          });
          
          console.log('Email sent successfully:', emailResult);
        } catch (emailError) {
          console.error('Failed to send email notification:', emailError);
          // Continue with the response even if email fails
        }
      } else {
        console.warn('RESEND_API_KEY not set, skipping email notification');
      }
      
      // Return success response with a generated ID
      res.json({ 
        id: Math.floor(Math.random() * 10000),
        ...data,
        createdAt: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error in /api/lead-responses:', error);
      if (error instanceof Error) {
        res.status(400).json({
          message: error.message,
          type: error.name
        });
      } else {
        res.status(500).json({
          message: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
          type: 'UnknownError'
        });
      }
    }
  });

  // Funnel response endpoint - sends email instead of storing in DB
  app.post('/api/funnel-responses', async (req, res) => {
    try {
      // Validate the data using the schema
      const data = insertFunnelResponseSchema.parse(req.body);
      console.log('Received funnel response:', JSON.stringify(data));
      
      // Send email notification
      if (process.env.RESEND_API_KEY) {
        try {
          const emailResult = await resend.emails.send({
            from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
            to: process.env.NOTIFICATION_EMAIL || 'info@cliffhangerstudios.de',
            subject: 'New Funnel Response',
            html: `
              <h1>New Funnel Response</h1>
              <h2>Service Information</h2>
              <p><strong>Business Type:</strong> ${data.businessType}</p>
              <p><strong>Selected Service:</strong> ${data.selectedService}</p>
              <p><strong>Project Timeline:</strong> ${data.projectTimeline}</p>
              <p><strong>Project Goals:</strong> ${data.projectGoals}</p>
              
              <h2>Contact Information</h2>
              <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              ${data.companyName ? `<p><strong>Company:</strong> ${data.companyName}</p>` : ''}
              ${data.website ? `<p><strong>Website:</strong> ${data.website}</p>` : ''}
              ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ''}
              
              <p><strong>Submission Time:</strong> ${new Date().toISOString()}</p>
            `
          });
          
          console.log('Email sent successfully:', emailResult);
        } catch (emailError) {
          console.error('Failed to send email notification:', emailError);
          // Continue with the response even if email fails
        }
      } else {
        console.warn('RESEND_API_KEY not set, skipping email notification');
      }
      
      // Return success response with a generated ID
      res.json({ 
        id: Math.floor(Math.random() * 10000),
        ...data,
        createdAt: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error in /api/funnel-responses:', error);
      if (error instanceof Error) {
        res.status(400).json({
          message: error.message,
          type: error.name
        });
      } else {
        res.status(500).json({
          message: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
          type: 'UnknownError'
        });
      }
    }
  });

  return httpServer;
}