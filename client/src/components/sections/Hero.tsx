import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Rocket, Lightbulb, LaptopIcon, MapPin } from "lucide-react";

export default function Hero() {
  const [, setLocation] = useLocation();

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#101010] text-center">
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

      <div className="w-full max-w-4xl mx-auto">
        {/* Urgency Indicator - Properly centered */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8 md:mb-10"
        >
          <div className="relative flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-sm border border-white/20">
            <div className="relative">
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#db9e22] rounded-full" />
              <div className="absolute top-0 left-0 w-2 h-2 md:w-2.5 md:h-2.5 bg-[#db9e22] rounded-full animate-ping" />
            </div>
            <span className="text-xs md:text-sm font-medium text-white/90">
              Nur 5 Beratungsgespräche übrig
            </span>
          </div>
        </motion.div>

        {/* Main Content - Centered Layout with optimized mobile spacing */}
        <div className="flex flex-col items-center justify-center space-y-5 md:space-y-7">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-white">
              Professionelle Webseiten
              <span className="inline md:hidden"> – </span>
              <br className="hidden md:block" />
              <span className="text-[#db9e22] inline-block mt-1 md:mt-2">In nur 7 Tagen online!</span>
            </h1>
            <div className="absolute -inset-10 -z-10 bg-[#db9e22]/5 blur-3xl rounded-full opacity-30" />
          </motion.div>

          {/* Feature Icons - Optimized for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 md:gap-10 my-4"
          >
            <div className="flex items-center gap-2">
              <div className="bg-[#db9e22]/20 p-1.5 md:p-2 rounded-full">
                <Rocket className="w-4 h-4 md:w-5 md:h-5 text-[#db9e22]" />
              </div>
              <span className="text-sm md:text-lg font-medium text-white">Schnell</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#db9e22]/20 p-1.5 md:p-2 rounded-full">
                <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-[#db9e22]" />
              </div>
              <span className="text-sm md:text-lg font-medium text-white">Individuell</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#db9e22]/20 p-1.5 md:p-2 rounded-full">
                <LaptopIcon className="w-4 h-4 md:w-5 md:h-5 text-[#db9e22]" />
              </div>
              <span className="text-sm md:text-lg font-medium text-white">100% zuverlässig</span>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-2 text-base md:text-xl text-white/90 max-w-2xl mx-auto font-medium px-2"
          >
            <MapPin className="hidden md:block w-5 h-5 text-[#db9e22] shrink-0" /> 
            <span>Perfekt für Unternehmen, die sofort durchstarten wollen!</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative mx-auto flex justify-center"
          >
            <Button 
              size="lg"
              className="relative bg-[#db9e22] hover:bg-[#e4bb68] text-white text-base md:text-lg py-5 md:py-7 px-6 md:px-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl"
              onClick={() => setLocation("/funnel")}
            >
              Kostenloses Angebot anfordern
            </Button>
            <div className="absolute -inset-5 -z-10 bg-[#db9e22]/20 blur-2xl rounded-full opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}