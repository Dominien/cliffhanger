import { Request, Response } from 'express';
import { insertFunnelResponseSchema } from '../shared/schema';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request, res: Response) {
  // Only handle POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get data from request body
    const body = req.body;
    console.log('Received funnel submission:', body);

    // Validate data with schema
    const data = insertFunnelResponseSchema.parse(body);
    
    // Format fields for email
    const websiteDisplay = data.website ? `<p><strong>Website:</strong> ${data.website}</p>` : '<p><strong>Website:</strong> Nicht angegeben</p>';
    const companyDisplay = data.companyName ? `<p><strong>Company:</strong> ${data.companyName}</p>` : '';
    const messageDisplay = data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : '';

    // Translate field values for better readability
    const businessTypeMap: Record<string, string> = {
      'service': 'Privatperson',
      'business': 'Unternehmer/in'
    };
    
    const serviceMap: Record<string, string> = {
      'landing_page': 'Landing Page',
      'chatbot': 'KI-Chatbot',
      'media': 'Foto & Video',
      'complete': 'Komplettlösung'
    };
    
    const timelineMap: Record<string, string> = {
      'immediate': 'Sofort',
      'next_quarter': 'Nächstes Quartal',
      'planning': 'Planungsphase'
    };
    
    const goalsMap: Record<string, string> = {
      'increase_sales': 'Mehr Kunden & Umsatz',
      'improve_support': 'Besserer Service',
      'automate_faq': 'Automatisierung',
      'lead_generation': 'Lead-Generierung',
      'other': 'Anderes Ziel'
    };

    // Send an email notification using Resend
    try {
      const emailResult = await resend.emails.send({
        from: process.env.EMAIL_FROM || 'noreply@cliffhangerstudios.de',
        to: process.env.NOTIFICATION_EMAIL || 'info@cliffhangerstudios.de',
        subject: `Neue Formular-Einreichung: ${data.firstName} ${data.lastName}`,
        html: `
          <h1>Neue Funnel-Einreichung</h1>
          <p>Eine neue Formular-Einreichung wurde über die Website empfangen.</p>
          
          <h2>Service-Informationen</h2>
          <p><strong>Geschäftstyp:</strong> ${businessTypeMap[data.businessType] || data.businessType}</p>
          <p><strong>Gewünschte Leistung:</strong> ${serviceMap[data.selectedService] || data.selectedService}</p>
          <p><strong>Projektzeitrahmen:</strong> ${timelineMap[data.projectTimeline] || data.projectTimeline}</p>
          <p><strong>Projektziele:</strong> ${goalsMap[data.projectGoals] || data.projectGoals}</p>
          
          <h2>Kontaktinformationen</h2>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>E-Mail:</strong> ${data.email}</p>
          <p><strong>Telefon:</strong> ${data.phone}</p>
          ${companyDisplay}
          ${websiteDisplay}
          ${messageDisplay}
          
          <p><strong>Einreichungszeit:</strong> ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}</p>
        `
      });

      console.log('Email sent successfully:', emailResult);
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Continue with the response even if email fails
    }

    // Return success response with a generated ID
    return res.status(200).json({
      success: true,
      id: Math.floor(Math.random() * 10000),
      ...data,
      createdAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in funnel-responses API:', error);
    
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    
    return res.status(500).json({ 
      error: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' 
    });
  }
}