import { createServer } from 'http';
import { Express } from 'express';
import { generateChatResponse } from './openai-service';
import { insertLeadResponseSchema, insertFunnelResponseSchema } from '@shared/schema';
import { Resend } from 'resend';

// Initialize Resend
let resend: Resend;
try {
  resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key');
} catch (error) {
  console.error('Failed to initialize Resend:', error);
  resend = {} as Resend;
}

export async function registerRoutes(app: Express) {
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
            from: 'onboarding@resend.dev', // Update with your verified domain
            to: process.env.NOTIFICATION_EMAIL || 'your-email@example.com',
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
            from: 'onboarding@resend.dev', // Update with your verified domain
            to: process.env.NOTIFICATION_EMAIL || 'your-email@example.com',
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