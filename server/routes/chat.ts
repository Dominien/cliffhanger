import { generateChatResponse } from '../openai-service.js';
import type { Request, Response } from 'express';

// API endpoint handler for /api/chat
export default async function handler(req: Request, res: Response) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, context, conversationState } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Log the request for debugging
    console.log('Chat request received:', { 
      message, 
      context: context || 'not provided', 
      conversationState: conversationState || 'not provided' 
    });

    const botResponse = await generateChatResponse(message);
    
    // Log the response
    console.log('Chat response generated:', { response: botResponse });
    
    return res.status(200).json({ response: botResponse });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    return res.status(500).json({
      error: 'Es gab einen Fehler bei der Verarbeitung deiner Nachricht.'
    });
  }
}