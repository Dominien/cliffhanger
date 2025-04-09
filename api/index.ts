// This is the Vercel Serverless function handler
import express from 'express';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend
let resend: Resend;
try {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY is not set - email notifications will be logged but not sent');
    // Create a dummy instance
    resend = {} as Resend;
  } else {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
} catch (error) {
  console.error('Failed to initialize Resend:', error);
  resend = {} as Resend;
}

// Lead response schema
const insertLeadResponseSchema = z.object({
  businessType: z.enum(["ecommerce", "service", "saas", "other"]),
  projectTimeline: z.enum(["immediate", "next_quarter", "planning"]),
  projectGoals: z.enum([
    "increase_sales",
    "improve_support",
    "automate_faq",
    "lead_generation",
    "other"
  ]),
  firstName: z.string().min(2, "Please enter your first name"),
  lastName: z.string().min(2, "Please enter your last name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  website: z.string().url("Please enter a valid website URL").optional(),
  companyName: z.string().min(2, "Please enter a valid company name").optional(),
  currentChatbot: z.boolean().optional(),
  privacyAccepted: z.literal(true)
});

// Funnel response schema
const insertFunnelResponseSchema = z.object({
  businessType: z.enum(["service", "business"]),
  selectedService: z.enum(["landing_page", "chatbot", "media", "complete"]),
  projectTimeline: z.enum(["immediate", "next_quarter", "planning"]),
  projectGoals: z.enum([
    "increase_sales",
    "improve_support",
    "automate_faq",
    "lead_generation",
    "other"
  ]),
  firstName: z.string().min(2, "Please enter your first name"),
  lastName: z.string().min(2, "Please enter your last name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  website: z.string().url("Please enter a valid website URL").optional(),
  companyName: z.string().min(2, "Please enter a valid company name").optional(),
  message: z.string().optional(),
  privacyAccepted: z.literal(true)
});

// Contact form schema
const insertContactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  website: z.string().url("Please enter a valid website URL").optional(),
  goal: z.string().min(5, "Please describe your goal briefly")
});

// Create Express app
const app = express();
app.use(express.json());

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Chat endpoint (dummy response since we don't have OpenAI here)
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
    
    const defaultResponse = "Ich bin derzeit im Wartungsmodus. Buchen Sie gerne einen kostenlosen Beratungstermin! [CTA_BUTTON]";
    res.json({ response: defaultResponse });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({
      error: 'Es gab einen Fehler bei der Verarbeitung deiner Nachricht.'
    });
  }
});

// Lead response endpoint
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

// Funnel response endpoint
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

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const data = insertContactSchema.parse(req.body);
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

// Export the Express API
export default app;