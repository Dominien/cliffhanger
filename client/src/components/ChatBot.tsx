import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation } from "wouter";

interface Message {
  id: string;
  content: string;
  type: 'user' | 'bot';
  context?: string;
}

interface ConversationState {
  stage: 'initial' | 'exploring' | 'qualifying' | 'closing';
  lastContext?: string;
  questionCount: number;
}

const initialQuickReplies = [
  "Wie läuft ein kostenloses Beratungsgespräch bei Ihnen ab?",
  "Welche digitalen Lösungen bieten Sie an?",
  "Wie schnell können Sie mein Projekt umsetzen?",
  "Was macht Cliffhanger besonders?"
];

const followUpQuestions = {
  pricing: [
    "Für welche Art von digitalem Projekt suchen Sie Unterstützung?",
    "Haben Sie bereits eine bestehende digitale Präsenz?",
    "Möchten Sie in einem kostenlosen Call Ihre Möglichkeiten besprechen?"
  ],
  consultation: [
    "Was ist Ihr wichtigstes Ziel für die digitale Transformation?",
    "In welchem Bereich sehen Sie den größten Handlungsbedarf?",
    "Sollen wir gleich einen kostenlosen Beratungstermin vereinbaren?"
  ],
  timeline: [
    "Wann möchten Sie mit der Umsetzung starten?",
    "Haben Sie einen bestimmten Zeitrahmen im Blick?",
    "Möchten Sie in einem kostenlosen Call erfahren, wie schnell wir starten können?"
  ],
  difference: [
    "Welcher Aspekt der digitalen Transformation ist Ihnen besonders wichtig?",
    "Hatten Sie schon Erfahrungen mit anderen Dienstleistern?",
    "Sollen wir Ihnen in einem kostenlosen Call zeigen, wie wir arbeiten?"
  ]
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [hasOpenedChat, setHasOpenedChat] = useState(false);
  const [showInitialPopup, setShowInitialPopup] = useState(false);
  const [showPersistentPopup, setShowPersistentPopup] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hallo! 👋 Ich bin deine persönliche KI von Cliffhanger Studios. Ich berate dich gerne zu unseren digitalen Lösungen - von KI-Chatbots bis zu professionellen Landing Pages. Wie kann ich dir heute helfen?',
      type: 'bot'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationState, setConversationState] = useState<ConversationState>({
    stage: 'initial',
    questionCount: 0
  });
  const [, navigate] = useLocation();

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setShowInitialPopup(true);
    }, 5000);

    const hideInitialTimer = setTimeout(() => {
      setShowInitialPopup(false);
      setShowPersistentPopup(true);
    }, 10000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideInitialTimer);
    };
  }, []);

  const getContextFromMessage = (message: string): string => {
    if (message.toLowerCase().includes('kost')) return 'pricing';
    if (message.toLowerCase().includes('beratung') || message.toLowerCase().includes('call')) return 'consultation';
    if (message.toLowerCase().includes('schnell') || message.toLowerCase().includes('zeit')) return 'timeline';
    if (message.toLowerCase().includes('unterschied') || message.toLowerCase().includes('andere')) return 'difference';
    return 'general';
  };

  const getFollowUpQuestion = (context: string, questionCount: number): string => {
    const questions = followUpQuestions[context as keyof typeof followUpQuestions] || [];
    return questions[questionCount % questions.length] || "Möchten Sie mehr darüber in einem kostenlosen Beratungsgespräch erfahren?";
  };

  const shouldOfferCall = (state: ConversationState): boolean => {
    return state.questionCount >= 3 || state.stage === 'closing';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      type: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const context = getContextFromMessage(userMessage.content);
      const newState = {
        ...conversationState,
        lastContext: context,
        questionCount: conversationState.questionCount + 1,
        stage: shouldOfferCall(conversationState) ? 'closing' : conversationState.stage
      };
      setConversationState(newState);

      // Try both API paths to ensure compatibility with different deployments
      let response;
      try {
        response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: input,
            context: context,
            conversationState: newState
          }),
        });
        
        if (!response.ok) {
          throw new Error('Primary endpoint failed');
        }
      } catch (error) {
        console.log('Trying fallback endpoint...');
        response = await fetch('/api/routes/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: input,
            context: context,
            conversationState: newState
          }),
        });
      }

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      let content = data.response;

      if (!shouldOfferCall(newState)) {
        const followUp = getFollowUpQuestion(context, newState.questionCount);
        content = `${content}\n\n${followUp}`;
      }

      const hasCTA = content.includes('[CTA_BUTTON]') || shouldOfferCall(newState);
      const cleanContent = content.replace('[CTA_BUTTON]', '');

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: cleanContent,
        type: 'bot',
        context: context
      };

      setMessages(prev => [...prev, botResponse]);

      if (hasCTA) {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: (Date.now() + 2).toString(),
            content: 'cta_button',
            type: 'bot'
          }]);
        }, 500);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Entschuldigung, es gab einen Fehler bei der Verarbeitung deiner Nachricht. Bitte versuche es später noch einmal.",
        type: 'bot'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = async (question: string) => {
    if (isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: question,
      type: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const context = getContextFromMessage(question);
      const newState = {
        ...conversationState,
        lastContext: context,
        questionCount: conversationState.questionCount + 1,
        stage: shouldOfferCall(conversationState) ? 'closing' : 'exploring'
      };
      setConversationState(newState);

      // Try both API paths to ensure compatibility with different deployments
      let response;
      try {
        response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: question,
            context: context,
            conversationState: newState
          }),
        });
        
        if (!response.ok) {
          throw new Error('Primary endpoint failed');
        }
      } catch (error) {
        console.log('Trying fallback endpoint...');
        response = await fetch('/api/routes/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: question,
            context: context,
            conversationState: newState
          }),
        });
      }

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      let content = data.response;

      if (!shouldOfferCall(newState)) {
        const followUp = getFollowUpQuestion(context, newState.questionCount);
        content = `${content}\n\n${followUp}`;
      }

      const hasCTA = content.includes('[CTA_BUTTON]') || shouldOfferCall(newState);
      const cleanContent = content.replace('[CTA_BUTTON]', '');

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: cleanContent,
        type: 'bot',
        context: context
      };

      setMessages(prev => [...prev, botResponse]);

      if (hasCTA) {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: (Date.now() + 2).toString(),
            content: 'cta_button',
            type: 'bot'
          }]);
        }, 500);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Entschuldigung, es gab einen Fehler bei der Verarbeitung deiner Nachricht. Bitte versuche es später noch einmal.",
        type: 'bot'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCTAClick = () => {
    navigate('/funnel');
    setOpen(false);
  };

  const handleChatOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
      setHasOpenedChat(true);
      setShowPersistentPopup(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {showInitialPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-4 z-50 mb-4 w-[calc(100%-2rem)] max-w-sm sm:w-auto"
          >
            <div 
              className="bg-white rounded-lg shadow-lg p-4 border border-[#db9e22] cursor-pointer"
              onClick={handleChatOpen}
            >
              <p className="text-sm text-gray-800 md:block hidden">
                Hey, ich bin deine persönliche KI von Cliffhanger Studios! 👋 Wir erstellen dir eine kostenlose Landing Page!
              </p>
              <p className="text-sm text-gray-800 block md:hidden">
                Klick mich an - Ich berate dich gerne! 💬
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPersistentPopup && !open && !hasOpenedChat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-16 right-4 z-50 mb-2"
          >
            <div 
              className="bg-white rounded-lg shadow-sm p-2 border border-[#db9e22] text-xs cursor-pointer"
              onClick={handleChatOpen}
            >
              <p className="text-gray-600">
                Klick mich an - Ich berate dich gerne! 💬
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <Button
          onClick={handleChatOpen}
          className="h-12 w-12 rounded-full bg-[#db9e22] hover:bg-[#c78d1a] text-white shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-20 right-4 z-50 w-[360px] rounded-lg border bg-[#101010] shadow-lg"
          >
            <div className="flex items-center justify-between border-b border-white/10 p-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-[#db9e22] flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Cliffhanger AI</h3>
                  <p className="text-xs text-gray-400">Dein KI-Berater - immer verfügbar</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-gray-400 hover:text-[#db9e22]"
                onClick={() => setOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              <AnimatePresence initial={false}>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={cn(
                      "flex",
                      message.type === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    {message.content === 'cta_button' ? (
                      <Button
                        onClick={handleCTAClick}
                        className="bg-[#db9e22] hover:bg-[#c78d1a] text-white font-medium py-2 px-4 rounded-lg shadow-sm transition-all duration-200 transform hover:scale-105"
                      >
                        Kostenlosen Call vereinbaren →
                      </Button>
                    ) : (
                      <div
                        className={cn(
                          "max-w-[80%] rounded-lg p-3",
                          message.type === 'user'
                            ? 'bg-[#db9e22] text-white'
                            : 'bg-white/10 text-white'
                        )}
                      >
                        {message.content}
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-center gap-2 rounded-lg bg-white/10 p-3">
                    <Loader2 className="h-4 w-4 animate-spin text-white" />
                    <span className="text-sm text-white">Cliffhanger AI schreibt...</span>
                  </div>
                </motion.div>
              )}

              {messages.length <= 1 && !isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="pt-4"
                >
                  <p className="text-sm text-gray-400 mb-2">Häufig gestellte Fragen:</p>
                  <div className="flex flex-col gap-2">
                    {initialQuickReplies.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickReply(question)}
                        className="text-left text-sm p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200 text-white"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="border-t border-white/10 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Schreibe eine Nachricht..."
                  disabled={isLoading}
                  className="flex-1 px-3 py-2 bg-white/5 text-white border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#db9e22] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed placeholder-gray-400"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading}
                  className={cn(
                    "bg-[#db9e22] hover:bg-[#c78d1a] text-white",
                    isLoading && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}