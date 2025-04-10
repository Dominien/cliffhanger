import { Request, Response } from 'express';
import { Resend } from 'resend';

// Initialize Resend (optional - can be used to forward chat messages)
const resend = new Resend(process.env.RESEND_API_KEY);

// Simple examples for quick responses
const SIMPLE_RESPONSES: Record<string, string> = {
  "hallo": "Hallo! Wie kann ich Ihnen heute helfen?",
  "hi": "Hallo! Wie kann ich Ihnen heute helfen?",
  "kontakt": "Sie können uns gerne über unser Kontaktformular erreichen oder direkt an info@cliffhangerstudios.de schreiben.",
  "website": "Wir erstellen professionelle Websites und Landing Pages für Ihr Unternehmen.",
  "preis": "Unsere Preise variieren je nach Anforderungen. Bitte kontaktieren Sie uns für ein individuelles Angebot.",
  "chatbot": "Wir entwickeln KI-gestützte Chatbots, die 24/7 für Ihre Kunden da sind.",
  "danke": "Gerne! Kann ich sonst noch etwas für Sie tun?",
  "media": "Wir bieten professionelle Foto- und Videoproduktion für Ihr Unternehmen an."
};

export default async function handler(req: Request, res: Response) {
  // Only handle POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get message from request body
    const { message } = req.body;
    console.log('Chat request received:', { message });

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Try to find a simple response first
    const lowerMessage = message.toLowerCase();
    let response = "";
    
    // Check for simple responses
    for (const [key, value] of Object.entries(SIMPLE_RESPONSES)) {
      if (lowerMessage.includes(key)) {
        response = value;
        break;
      }
    }
    
    // If no simple response, provide a default response
    if (!response) {
      response = "Vielen Dank für Ihre Nachricht! Unser Team wird sich in Kürze bei Ihnen melden. Alternativ können Sie uns auch direkt unter info@cliffhangerstudios.de kontaktieren.";
    }

    // Optionally notify via email for important chats
    if (lowerMessage.includes("termin") || lowerMessage.includes("angebot") || lowerMessage.includes("preis")) {
      try {
        await resend.emails.send({
          from: process.env.EMAIL_FROM || 'noreply@cliffhangerstudios.de',
          to: process.env.NOTIFICATION_EMAIL || 'info@cliffhangerstudios.de',
          subject: "Neue Chat-Anfrage: Potentieller Kunde",
          html: `
            <h1>Neue Chat-Anfrage</h1>
            <p>Ein Benutzer hat im Chat nach einem Termin, Angebot oder Preis gefragt.</p>
            <p><strong>Nachricht:</strong> ${message}</p>
            <p><strong>Zeitpunkt:</strong> ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}</p>
          `
        });
      } catch (emailError) {
        console.error('Failed to send chat notification email:', emailError);
        // Continue with response even if email fails
      }
    }

    // Return the response
    return res.status(200).json({ response });
  } catch (error) {
    console.error('Error in chat API:', error);
    
    return res.status(500).json({ 
      error: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
      response: "Entschuldigung, es ist ein Fehler aufgetreten. Bitte kontaktieren Sie uns direkt unter info@cliffhangerstudios.de."
    });
  }
}