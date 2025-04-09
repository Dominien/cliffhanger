import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateChatResponse(message: string): Promise<string> {
  try {
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
    throw new Error("Failed to generate response");
  }
}