import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

export default function Hero() {
  const [, setLocation] = useLocation();

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#101010] text-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.05) 1.5px, transparent 0)`,
            backgroundSize: '32px 32px',
            backgroundPosition: '-16px -16px',
            transform: 'rotate(-2deg) scale(1.2)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#101010] via-transparent to-[#101010]" />
      </div>

      <div className="w-full max-w-4xl mx-auto relative">
        {/* Urgency Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-12"
        >
          <div className="relative flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm border border-white/20">
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-[#db9e22] rounded-full" />
              <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-[#db9e22] rounded-full animate-ping" />
            </div>
            <span className="text-sm font-medium text-white/90">
              Nur 5 Beratungsgespräche übrig
            </span>
          </div>
        </motion.div>

        {/* Main Content - Centered Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mb-10"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
              Dein digitaler Erfolg – 
              <br className="md:block hidden" />
              <span className="text-[#db9e22] inline-block mt-2">Wir bringen dein Business online voran</span>
            </h1>
            <div className="absolute -inset-10 -z-10 bg-[#db9e22]/5 blur-3xl rounded-full opacity-30" />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
          >
            Cliffhanger Studio entwickelt individuelle, leistungsstarke Online-Lösungen, 
            die deine Marke stärken und deinen Umsatz steigern.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative mb-20 mx-auto flex justify-center"
          >
            <Button 
              size="lg"
              className="relative bg-[#db9e22] hover:bg-[#e4bb68] text-white text-lg py-7 px-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl"
              onClick={() => setLocation("/funnel")}
            >
              Jetzt kostenlosen Call buchen
            </Button>
            <div className="absolute -inset-5 -z-10 bg-[#db9e22]/20 blur-2xl rounded-full opacity-50" />
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Conversion Stat */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
          >
            <div className="flex items-center justify-between gap-8">
              <div>
                <h3 className="text-lg text-white/90 font-medium">Conversion-optimiert</h3>
                <p className="text-sm text-white/60 mt-1">
                  Höhere Conversion-Rate durch KI-gestützte Optimierung
                </p>
              </div>
              <div className="shrink-0">
                <span className="text-3xl font-bold text-[#db9e22] whitespace-nowrap">+140%</span>
              </div>
            </div>
          </motion.div>

          {/* Customer Satisfaction Stat */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
          >
            <div className="flex items-center justify-between gap-8">
              <div>
                <h3 className="text-lg text-white/90 font-medium">Kundenzufriedenheit</h3>
                <p className="text-sm text-white/60 mt-1">
                  Zufriedene Kunden durch exzellenten Service
                </p>
              </div>
              <div className="shrink-0">
                <span className="text-3xl font-bold text-[#db9e22] whitespace-nowrap">98%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}