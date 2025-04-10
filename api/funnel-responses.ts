import { Request, Response } from 'express';
import { insertFunnelResponseSchema } from '../shared/schema';
import { Resend } from 'resend';

// Initialize Resend with API key - exact same way as in chat.ts
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
    
    // Then try to send the email
    try {
      console.log('Attempting to send email with Resend...');
      console.log('From:', process.env.EMAIL_FROM || 'noreply@cliffhangerstudios.de');
      console.log('To:', process.env.NOTIFICATION_EMAIL || 'info@cliffhangerstudios.de');
      
      // Use identical Resend call structure as in chat.ts
      const emailResult = await resend.emails.send({
        from: process.env.EMAIL_FROM || 'noreply@cliffhangerstudios.de',
        to: process.env.NOTIFICATION_EMAIL || 'info@cliffhangerstudios.de',
        subject: `Neue Formular-Einreichung: ${data.firstName} ${data.lastName}`,
        html: emailHtml
      });
      
      console.log('Email sent successfully:', emailResult);
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      if (emailError instanceof Error) {
        console.error('Error message:', emailError.message);
        console.error('Error name:', emailError.name);
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