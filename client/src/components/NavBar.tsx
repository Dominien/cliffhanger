import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, ChevronDown, Layout, MessageSquare, Home, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  const handleCTAClick = () => {
    setLocation("/funnel");
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    setLocation("/");
    setMobileMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    setLocation(path);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-2 flex-shrink-0 text-[#272727] hover:text-[#db9e22] transition-colors"
          >
            <img 
              src="/CliffhangerLogoBW.svg" 
              alt="Cliffhanger Studios Logo" 
              className="h-8 w-auto"
            />
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation("/")}
              className="flex items-center gap-2 text-[#272727] hover:text-[#db9e22] transition-colors font-medium"
            >
              <Home className="w-4 h-4" />
              <span>Startseite</span>
            </button>
            <div className="relative group">
              <button className="flex items-center gap-2 text-[#272727] hover:text-[#db9e22] transition-colors group-hover:text-[#db9e22] font-medium">
                <span>Leistungen</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-72 rounded-xl bg-white ring-1 ring-black/5 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left group-hover:translate-y-0 translate-y-2">
                <div className="p-3 space-y-1">
                  <button
                    onClick={() => handleNavigation("/services/landing-page")}
                    className="flex items-center gap-3 w-full p-3 text-sm text-[#272727] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <Layout className="w-5 h-5 text-[#db9e22] flex-shrink-0" />
                    <div className="flex flex-col items-start">
                      <span className="font-medium">Landing Page</span>
                      <span className="text-xs text-gray-500">Professionelle Webseiten</span>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavigation("/services/ai-chatbot")}
                    className="flex items-center gap-3 w-full p-3 text-sm text-[#272727] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-5 h-5 text-[#db9e22] flex-shrink-0" />
                    <div className="flex flex-col items-start">
                      <span className="font-medium">KI-Chatbot</span>
                      <span className="text-xs text-gray-500">24/7 Kundenservice</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <button 
              onClick={() => handleNavigation("/contact")}
              className="flex items-center gap-2 text-[#272727] hover:text-[#db9e22] transition-colors font-medium"
            >
              <Mail className="w-4 h-4" />
              <span>Kontakt</span>
            </button>
            <Button 
              className="bg-[#db9e22] hover:bg-[#e4bb68] text-white font-medium shadow-sm hover:shadow-md"
              onClick={handleCTAClick}
            >
              Jetzt kostenlosen Call buchen
            </Button>
          </div>

          <button 
            className="md:hidden text-[#272727] hover:text-[#db9e22] z-50" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden will-change-transform"
          >
            <div className="px-4 py-3 space-y-2">
              <button
                onClick={() => handleNavigation("/")}
                className="flex items-center gap-3 w-full p-3 text-[#272727] hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Home className="w-5 h-5 text-[#db9e22]" />
                <span className="font-medium">Startseite</span>
              </button>

              <div className="space-y-1">
                <button
                  onClick={() => handleNavigation("/services/landing-page")}
                  className="flex items-center gap-3 w-full p-3 text-[#272727] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Layout className="w-5 h-5 text-[#db9e22]" />
                  <span className="font-medium">Landing Page</span>
                </button>
                <button
                  onClick={() => handleNavigation("/services/ai-chatbot")}
                  className="flex items-center gap-3 w-full p-3 text-[#272727] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-5 h-5 text-[#db9e22]" />
                  <span className="font-medium">KI-Chatbot</span>
                </button>
              </div>

              <button
                onClick={() => handleNavigation("/contact")}
                className="flex items-center gap-3 w-full p-3 text-[#272727] hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5 text-[#db9e22]" />
                <span className="font-medium">Kontakt</span>
              </button>

              <div className="p-3">
                <Button 
                  className="w-full bg-[#db9e22] hover:bg-[#e4bb68] text-white font-medium shadow-sm hover:shadow-md"
                  onClick={handleCTAClick}
                >
                  Jetzt kostenlosen Call buchen
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}