import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { CalendarClock } from "lucide-react";

export const CallToAction = () => {
  const [, setLocation] = useLocation();

  return (
    <section className="py-24 md:py-32 bg-[#101010] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(219, 158, 34, 0.15) 1.5px, transparent 0)`,
            backgroundSize: '32px 32px',
            backgroundPosition: '-16px -16px',
            transform: 'rotate(-2deg) scale(1.2)',
          }}
        />
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#db9e22]/10 rounded-full blur-3xl opacity-30" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Icon */}
            <motion.div 
              initial={{ y: 10 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-6 inline-block"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#101010] border border-[#db9e22]/30 p-0.5 transform rotate-45 mx-auto">
                <div className="w-full h-full bg-[#101010] rounded-2xl flex items-center justify-center transform -rotate-45">
                  <CalendarClock className="w-10 h-10 text-[#db9e22]" />
                </div>
              </div>
            </motion.div>
            
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#db9e22]/10 text-[#db9e22] font-medium text-sm mb-4">
              Kein langes Warten
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bereit für deine Website in 7 Tagen?
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Buche jetzt deinen kostenlosen Beratungscall und starte sofort – 
              während andere Agenturen noch Angebote schreiben.
            </p>
            
            <Button
              size="lg"
              className="bg-[#db9e22] hover:bg-[#e4bb68] text-white text-lg py-6 md:py-7 px-8 md:px-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl"
              onClick={() => setLocation("/funnel")}
            >
              In 7 Tagen online gehen
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;