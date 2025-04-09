import OpenAI from "openai";

// Initialize OpenAI with graceful fallback
let openai: OpenAI;
try {
  if (!process.env.OPENAI_API_KEY) {
    console.warn('OPENAI_API_KEY is not set - chatbot will return default responses only');
    // Create a dummy instance that won't be used for actual API calls
    openai = {} as OpenAI;
  } else {
    openai = new OpenAI({ 
      apiKey: process.env.OPENAI_API_KEY
    });
  }
} catch (error) {
  console.error('Failed to initialize OpenAI client:', error);
  // Create a dummy instance that won't be used
  openai = {} as OpenAI;
}

export async function generateChatResponse(message: string): Promise<string> {
  try {
    // Return a default response if API key is missing
    if (!process.env.OPENAI_API_KEY) {
      console.warn('OPENAI_API_KEY not set, returning default chatbot response');
      return "Unser Chatbot ist derzeit in Wartung. Bitte versuchen Sie es später erneut oder buchen Sie einen kostenlosen Beratungstermin! [CTA_BUTTON]";
    }
    
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "Du bist ein hilfreicher digitaler Assistent für Cliffhanger, ein Unternehmen für digitale Transformation.\n\n" +
          "Persönlichkeit:\n" +
          "- Professionell und lösungsorientiert\n" +
          "- Fokus auf Kundenverständnis\n\n" +
          "Kommunikationsregeln:\n" +
          "- Halte Antworten sehr kurz (1-2 Sätze)\n" +
          "- Frage nach konkreten Bedürfnissen\n" +
          "- Antworte auf Deutsch\n" +
          "- Erwähne den kostenlosen Beratungscall bei Interesse\n" +
          "- Nutze [CTA_BUTTON] für Call-to-Action\n\n" +
          "Beispiel-CTAs:\n" +
          "- 'Lassen Sie uns Ihre Ziele im kostenlosen Call besprechen! [CTA_BUTTON]'\n" +
          "- 'Ich zeige Ihnen gerne konkrete Lösungen! [CTA_BUTTON]'"
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 150
    });

    return response.choices[0].message.content || "I apologize, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return "Unser Chatbot ist derzeit in Wartung. Bitte versuchen Sie es später erneut oder buchen Sie einen kostenlosen Beratungstermin! [CTA_BUTTON]";
  }
}