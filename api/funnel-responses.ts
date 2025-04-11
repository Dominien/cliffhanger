import { Request, Response } from 'express';
import { z } from 'zod';
import { Resend } from 'resend';

// Funnel response schema without database integration
const insertFunnelResponseSchema = z.object({
  businessType: z.enum(["service", "business"], {
    errorMap: () => ({ message: "Please select your business type" })
  }),
  selectedService: z.enum(["landing_page", "chatbot", "media", "complete"], {
    errorMap: () => ({ message: "Please select a service" })
  }),
  projectTimeline: z.enum(["immediate", "next_quarter", "planning"], {
    errorMap: () => ({ message: "Please select your project timeline" })
  }),
  projectGoals: z.enum([
    "increase_sales",
    "improve_support",
    "automate_faq",
    "lead_generation",
    "other"
  ], {
    errorMap: () => ({ message: "Please select your project goals" })
  }),
  firstName: z.string().min(2, "Please enter your first name"),
  lastName: z.string().min(2, "Please enter your last name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  website: z.string().regex(/^(https?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+.*$/, "Bitte geben Sie eine gültige Website-Adresse ein (z.B. www.name.de)").optional().or(z.literal('')),
  companyName: z.union([
    z.string().min(2, "Please enter a valid company name"),
    z.string().length(0),
    z.null(),
    z.undefined()
  ]).optional(),
  message: z.string().optional(),
  privacyAccepted: z.literal(true, {
    errorMap: () => ({ message: "Please accept the privacy policy" })
  })
});

// Initialize Resend exactly according to the documentation
console.log('RESEND_API_KEY available:', !!process.env.RESEND_API_KEY);
console.log('RESEND_API_KEY first 4 chars:', process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.substring(0, 4) : 'none');

// Initialize Resend exactly as in the documentation
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request, res: Response) {
  console.log('Funnel endpoint called with method:', req.method);
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Log the raw request body
    console.log('Raw request body:', req.body);
    
    // Parse and validate the data using zod schema
    const data = insertFunnelResponseSchema.parse(req.body);
    console.log('Validated form data:', data);
    
    // Prepare user-friendly values for the email
    const businessTypeMap = {
      'service': 'Privatperson',
      'business': 'Unternehmer/in'
    };
    
    const serviceMap = {
      'landing_page': 'Landing Page',
      'chatbot': 'KI-Chatbot',
      'media': 'Foto & Video',
      'complete': 'Komplettlösung'
    };
    
    const timelineMap = {
      'immediate': 'Sofort',
      'next_quarter': 'Nächstes Quartal',
      'planning': 'Planungsphase'
    };
    
    const goalsMap = {
      'increase_sales': 'Mehr Kunden & Umsatz',
      'improve_support': 'Besserer Service',
      'automate_faq': 'Automatisierung',
      'lead_generation': 'Lead-Generierung',
      'other': 'Anderes Ziel'
    };
    
    // Prepare the email HTML content
    const emailHtml = `
      <h1>Neue Formular-Einreichung</h1>
      <p>Eine neue Anfrage wurde über das Funnel-Formular empfangen.</p>
      
      <h2>Kontaktinformationen</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>E-Mail:</strong> ${data.email}</p>
      <p><strong>Telefon:</strong> ${data.phone}</p>
      ${data.companyName ? `<p><strong>Unternehmen:</strong> ${data.companyName}</p>` : ''}
      ${data.website ? `<p><strong>Website:</strong> ${data.website}</p>` : '<p><strong>Website:</strong> Nicht angegeben</p>'}
      
      <h2>Angefragte Leistung</h2>
      <p><strong>Geschäftstyp:</strong> ${businessTypeMap[data.businessType] || data.businessType}</p>
      <p><strong>Gewünschte Leistung:</strong> ${serviceMap[data.selectedService] || data.selectedService}</p>
      <p><strong>Projektzeitrahmen:</strong> ${timelineMap[data.projectTimeline] || data.projectTimeline}</p>
      <p><strong>Projektziele:</strong> ${goalsMap[data.projectGoals] || data.projectGoals}</p>
      ${data.message ? `<p><strong>Nachricht:</strong> ${data.message}</p>` : ''}
      
      <p><strong>Einreichungszeit:</strong> ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}</p>
    `;
    
    // First, return a success response to the client
    // This ensures the client gets a response even if email sending takes time
    res.status(200).json({
      success: true,
      message: 'Form submission received successfully',
      id: Math.floor(Math.random() * 10000),
      timestamp: new Date().toISOString()
    });
    
    // Add a timestamp to separate logs from different invocations
    console.log(`\n\n----- EMAIL SENDING ATTEMPT ${new Date().toISOString()} -----\n`);
    
    // Then try to send the email
    try {
      console.log('Attempting to send email with Resend...');
      console.log('Resend initialized:', !!resend && !!resend.emails);
      console.log('From:', process.env.EMAIL_FROM || 'noreply@cliffhangerstudios.de');
      console.log('To:', process.env.NOTIFICATION_EMAIL || 'info@cliffhangerstudios.de');
      
      // Check if Resend is properly initialized with send method
      if (!resend || !resend.emails || !resend.emails.send) {
        console.error('ERROR: Resend not properly initialized');
        throw new Error('Resend not properly initialized');
      }
      
      // Full detailed logging for debugging
      console.log('Email options:', {
        from: process.env.EMAIL_FROM || 'noreply@cliffhangerstudios.de',
        to: process.env.NOTIFICATION_EMAIL || 'info@cliffhangerstudios.de',
        subject: `Neue Formular-Einreichung: ${data.firstName} ${data.lastName}`,
        htmlLength: emailHtml?.length || 0
      });
      
      console.log('⏳ Sending email with Resend...');
      
      try {
        // Follow the exact format from Resend documentation
        const emailResult = await resend.emails.send({
          from: 'Cliffhanger Studios <onboarding@resend.dev>',
          to: [process.env.NOTIFICATION_EMAIL || 'info@cliffhangerstudios.de'],
          subject: `Neue Formular-Einreichung: ${data.firstName} ${data.lastName}`,
          html: emailHtml,
          text: `Neue Anfrage von ${data.firstName} ${data.lastName} (${data.email})`,
        });
        
        console.log('✅ Email sent successfully!');
        console.log('📧 Email details:', {
          id: emailResult.id,
          data: emailResult.data,
          to: emailResult.to || 'not provided in response'
        });
        
        // Log the full response for debugging
        console.log('📬 Full Resend response:', JSON.stringify(emailResult, null, 2));
      } catch (innerEmailError) {
        console.error('❌ Error in email sending inner try/catch:', innerEmailError);
        if (innerEmailError.response) {
          console.error('📋 Resend API response:', innerEmailError.response);
        }
        throw innerEmailError; // Re-throw to be caught by outer catch
      }
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      if (emailError instanceof Error) {
        console.error('Error message:', emailError.message);
        console.error('Error name:', emailError.name);
        console.error('Error stack:', emailError.stack);
      } else {
        console.error('Non-Error object thrown:', typeof emailError, emailError);
      }
    }
    
  } catch (error) {
    console.error('Error processing funnel submission:', error);
    
    // Only send error response if we haven't already sent a success response
    if (!res.headersSent) {
      if (error instanceof Error) {
        return res.status(400).json({ 
          success: false, 
          error: error.message 
        });
      }
      
      return res.status(500).json({ 
        success: false,
        error: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' 
      });
    }
  }
}