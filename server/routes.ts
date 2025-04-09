import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertLeadResponseSchema, type InsertLeadResponse } from "@shared/schema";
import { db } from "./db";
import { leadResponses } from "@shared/schema";
import { generateChatResponse } from "./openai-service";

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);

  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const botResponse = await generateChatResponse(message);
      res.json({ response: botResponse });
    } catch (error) {
      console.error('Error in chat endpoint:', error);
      res.status(500).json({ 
        error: "Es gab einen Fehler bei der Verarbeitung deiner Nachricht."
      });
    }
  });

  // Lead responses endpoint
  app.post("/api/lead-responses", async (req, res) => {
    try {
      const data = insertLeadResponseSchema.parse(req.body);
      console.log('Received lead response:', JSON.stringify(data));

      const [result] = await db.insert(leadResponses)
        .values(data)
        .returning();

      console.log('Successfully inserted lead response:', result);
      res.json(result);
    } catch (error) {
      console.error('Error in /api/lead-responses:', error);
      if (error instanceof Error) {
        res.status(400).json({ 
          message: error.message,
          type: error.name 
        });
      } else {
        res.status(500).json({ 
          message: "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
          type: "UnknownError"
        });
      }
    }
  });

  return httpServer;
}