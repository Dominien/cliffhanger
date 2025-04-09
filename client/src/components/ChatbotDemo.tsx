import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

interface Message {
  type: "user" | "bot";
  content: string;
}

export default function ChatbotDemo() {
  const [, navigate] = useLocation();
  const [messages, setMessages] = useState<Message[]>([
    { 
      type: "bot", 
      content: "👋 Hallo! Ich bin Ihr digitaler Assistent. Wie kann ich Ihnen bei Ihrer digitalen Transformation helfen?" 
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageCount, setMessageCount] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    setMessages(prev => [...prev, { type: "user", content: userMessage }]);
    setIsLoading(true);
    setMessageCount(prev => prev + 1);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const botMessage = data.response;

      // Only add CTA_BUTTON after the third message
      const cleanMessage = botMessage.replace('[CTA_BUTTON]', '').trim();
      const messageWithCTA = messageCount >= 3 ? cleanMessage + ' [CTA_BUTTON]' : cleanMessage;

      setMessages(prev => [
        ...prev, 
        { type: "bot", content: messageWithCTA }
      ]);
      setMessageCount(prev => prev + 1);

      // Show CTA button after 3rd message
      if (messageCount >= 3) {
        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            { type: "bot", content: "cta_button" }
          ]);
        }, 500);
      }

    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        type: "bot", 
        content: "Entschuldigung, es gab einen Fehler bei der Verarbeitung Ihrer Nachricht. Bitte versuchen Sie es später erneut." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle CTA button click
  const handleCTAClick = () => {
    navigate('/funnel');
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl">
      <div className="border-b border-white/10 p-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-[#db9e22]/20 flex items-center justify-center">
            <Bot className="w-5 h-5 text-[#db9e22]" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Cliffhanger Assistant</h3>
            <p className="text-white/60 text-sm">Immer für Sie da</p>
          </div>
        </div>
      </div>

      <div className="h-[400px] p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex items-start gap-3 mb-4 ${message.type === "user" ? "flex-row-reverse" : ""}`}
          >
            {message.content === "cta_button" ? (
              <div className="ml-11 mt-2">
                <Button
                  onClick={handleCTAClick}
                  className="bg-[#db9e22] hover:bg-[#c78d1a] text-white font-medium py-2 px-4 rounded-lg shadow-sm transition-all duration-200 transform hover:scale-105"
                >
                  Jetzt Call vereinbaren →
                </Button>
              </div>
            ) : (
              <>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  message.type === "user" ? "bg-[#db9e22]/20" : "bg-white/10"
                }`}>
                  {message.type === "user" ? (
                    <User className="w-4 h-4 text-[#db9e22]" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`p-3 rounded-xl max-w-[80%] whitespace-pre-line ${
                  message.type === "user" 
                    ? "bg-[#db9e22] text-white" 
                    : "bg-white/10 text-white/90"
                }`}>
                  {message.content.replace('[CTA_BUTTON]', '')}
                </div>
              </>
            )}
          </motion.div>
        ))}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-white/50"
          >
            <Bot className="w-4 h-4" />
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  className="w-2 h-2 bg-white/50 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Schreiben Sie Ihre Nachricht..."
            className="flex-1 bg-white/5 rounded-lg px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#db9e22]/50"
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="bg-[#db9e22] hover:bg-[#c78d1a] text-white"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}