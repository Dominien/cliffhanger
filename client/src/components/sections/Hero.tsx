import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import { Suspense, lazy } from "react";

// Lazy load the 3D component to improve initial page load
const MacBookScene = lazy(() => import("@/components/MacBookScene"));

export default function Hero() {
  const [, setLocation] = useLocation();

  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#101010]">
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

      <div className="max-w-7xl mx-auto relative">
        {/* Urgency Indicator */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="relative flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/20">
            <div className="relative">
              <div className="w-2 h-2 bg-[#db9e22] rounded-full" />
              <div className="absolute top-0 left-0 w-2 h-2 bg-[#db9e22] rounded-full animate-ping" />
            </div>
            <span className="text-sm font-medium text-white/90">
              Nur 5 Beratungsgespräche übrig
            </span>
          </div>
        </div>

        {/* Main Content - Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="relative mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
                Dein digitaler Erfolg – 
                <br />
                Wir bringen dein Business online voran
              </h1>
            </div>

            <p className="text-xl text-white/80 mb-8">
              Cliffhanger Studio entwickelt individuelle, leistungsstarke Online-Lösungen, 
              die deine Marke stärken und deinen Umsatz steigern.
            </p>

            <div className="relative">
              <Button 
                size="lg"
                className="relative bg-[#db9e22] hover:bg-[#e4bb68] text-white text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                onClick={() => setLocation("/funnel")}
              >
                Jetzt kostenlosen Call buchen
              </Button>
              <div className="absolute -inset-4 -z-10 bg-[#db9e22]/20 blur-2xl rounded-full opacity-50" />
            </div>
          </motion.div>

          {/* Right Column - 3D MacBook Model */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full h-[500px] relative bg-gradient-radial from-[#101010]/0 to-[#101010]/80 rounded-2xl overflow-hidden"
          >
            <Suspense fallback={
              <div className="flex items-center justify-center h-full">
                <div className="w-10 h-10 border-4 border-[#db9e22] border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              <MacBookScene />
            </Suspense>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Conversion Stat */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between gap-8">
              <div>
                <h3 className="text-lg text-white/90">Conversion-optimiert</h3>
                <p className="text-sm text-white/60 mt-1">
                  Höhere Conversion-Rate durch KI-gestützte Optimierung
                </p>
              </div>
              <div className="shrink-0">
                <span className="text-3xl font-bold text-[#db9e22] whitespace-nowrap">+140%</span>
              </div>
            </div>
          </div>

          {/* Customer Satisfaction Stat */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between gap-8">
              <div>
                <h3 className="text-lg text-white/90">Kundenzufriedenheit</h3>
                <p className="text-sm text-white/60 mt-1">
                  Zufriedene Kunden durch exzellenten Service
                </p>
              </div>
              <div className="shrink-0">
                <span className="text-3xl font-bold text-[#db9e22] whitespace-nowrap">98%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}