import { NextRequest, NextResponse } from 'next/server';
import { insertContactSchema } from '../shared/schema';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  // Only handle POST requests
  if (req.method !== 'POST') {
    return NextResponse.json(
      { error: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
    // Parse request body
    const body = await req.json();
    console.log('Received contact form submission:', body);

    // Validate data with schema
    const data = insertContactSchema.parse(body);
    
    // Format fields for email
    const websiteDisplay = data.website ? `<p><strong>Website:</strong> ${data.website}</p>` : '<p><strong>Website:</strong> Nicht angegeben</p>';

    // Send an email notification using Resend
    try {
      const { data: emailData, error } = await resend.emails.send({
        from: process.env.EMAIL_FROM || 'noreply@cliffhangerstudios.de',
        to: process.env.NOTIFICATION_EMAIL || 'info@cliffhangerstudios.de',
        subject: `Neue Kontaktanfrage: ${data.name}`,
        html: `
          <h1>Neue Kontaktanfrage</h1>
          <p>Eine neue Kontaktanfrage wurde über die Website empfangen.</p>
          
          <h2>Kontaktinformationen</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>E-Mail:</strong> ${data.email}</p>
          ${websiteDisplay}
          
          <h2>Anfrage</h2>
          <p><strong>Ziel/Anliegen:</strong> ${data.goal}</p>
          
          <p><strong>Einreichungszeit:</strong> ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}</p>
        `
      });

      if (error) {
        console.error('Failed to send email notification:', error);
      } else {
        console.log('Email sent successfully:', emailData);
      }
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Continue with the response even if email fails
    }

    // Return success response
    return NextResponse.json({
      success: true,
      ...data,
      createdAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in contact API:', error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
}