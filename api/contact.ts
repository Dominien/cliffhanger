import { Request, Response } from 'express';
import { z } from 'zod';
import { Resend } from 'resend';

// Contact form schema
const insertContactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  website: z.string().regex(/^(https?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+.*$/, "Bitte geben Sie eine gültige Website-Adresse ein (z.B. www.name.de)").optional().or(z.literal('')),
  goal: z.string().min(5, "Please describe your goal briefly")
});

// Initialize Resend with API key - exact same way as in chat.ts
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request, res: Response) {
  console.log('Contact endpoint called with method:', req.method);
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Log the raw request body
    console.log('Raw request body:', req.body);
    
    // Parse and validate the data using zod schema
    const data = insertContactSchema.parse(req.body);
    console.log('Validated contact form data:', data);
    
    // Prepare the email HTML content
    const emailHtml = `
      <h1>Neue Kontaktanfrage</h1>
      <p>Eine neue Kontaktanfrage wurde über die Website empfangen.</p>
      
      <h2>Kontaktinformationen</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>E-Mail:</strong> ${data.email}</p>
      ${data.website ? `<p><strong>Website:</strong> ${data.website}</p>` : '<p><strong>Website:</strong> Nicht angegeben</p>'}
      
      <h2>Anfrage</h2>
      <p><strong>Ziel/Anliegen:</strong> ${data.goal}</p>
      
      <p><strong>Einreichungszeit:</strong> ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}</p>
    `;
    
    // First, return a success response to the client
    // This ensures the client gets a response even if email sending takes time
    res.status(200).json({
      success: true,
      message: 'Contact form submission received successfully',
      timestamp: new Date().toISOString()
    });
    
    // Then try to send the email
    try {
      console.log('Attempting to send contact email with Resend...');
      console.log('From:', process.env.EMAIL_FROM || 'noreply@cliffhangerstudios.de');
      console.log('To:', process.env.NOTIFICATION_EMAIL || 'info@cliffhangerstudios.de');
      
      // Use identical Resend call structure as in chat.ts
      const emailResult = await resend.emails.send({
        from: process.env.EMAIL_FROM || 'noreply@cliffhangerstudios.de',
        to: process.env.NOTIFICATION_EMAIL || 'info@cliffhangerstudios.de',
        subject: `Neue Kontaktanfrage: ${data.name}`,
        html: emailHtml
      });
      
      console.log('Contact email sent successfully:', emailResult);
    } catch (emailError) {
      console.error('Failed to send contact email notification:', emailError);
      if (emailError instanceof Error) {
        console.error('Error message:', emailError.message);
        console.error('Error name:', emailError.name);
      }
    }
    
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    
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