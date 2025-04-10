import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import LogoSlider from "./LogoSlider";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [, setLocation] = useLocation();

  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#101010]">
      {/* Simple Static Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.05) 1.5px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#101010] via-transparent to-[#101010]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Urgency Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-12"
        >
          <div className="relative flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/20">
            <div className="relative">
              <div className="w-2 h-2 bg-[#db9e22] rounded-full" />
              <motion.div 
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 left-0 w-2 h-2 bg-[#db9e22] rounded-full" 
              />
            </div>
            <span className="text-sm font-medium text-white/90">
              Nur 5 Beratungsgespräche übrig
            </span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative inline-block mb-8"
          >
            <motion.h1 
              className="text-5xl sm:text-6xl font-bold leading-tight text-white"
              animate={{ y: [0, -8, 0] }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Professionelle Webseiten
              <br />
              In nur 7 Tagen online!
            </motion.h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
          >
            Keine lange Wartezeit – in nur 7 Tagen ist deine professionelle Website online und bereit für deine Kunden.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg"
                className="relative bg-[#db9e22] hover:bg-[#e4bb68] text-white text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                onClick={() => setLocation("/funnel")}
              >
                In 7 Tagen online gehen
              </Button>
            </motion.div>
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -inset-4 -z-10 bg-[#db9e22]/20 blur-2xl rounded-full" 
            />
          </motion.div>
        </div>
      </div>

      {/* Logo Slider with transparent background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <LogoSlider />
      </motion.div>
    </section>
  );
}