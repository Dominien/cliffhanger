import { Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function CtaSection() {
  const [, setLocation] = useLocation();

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#272727]">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(219, 158, 34, 0.05) 1.5px, transparent 0)`,
            backgroundSize: '32px 32px',
            backgroundPosition: '-16px -16px',
            transform: 'rotate(-2deg) scale(1.2)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 relative overflow-hidden">
          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#db9e22]/10 px-4 py-2 rounded-full mb-6">
              <Clock className="w-4 h-4 text-[#db9e22]" />
              <span className="text-sm font-medium text-[#db9e22]">Limitierte Plätze verfügbar</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Deine Landing Page ist nur einen Call entfernt
            </h2>

            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Buche jetzt dein kostenloses Strategiegespräch und erhalte im Call dein fertiges, conversionstarkes Landing Page-Konzept – live vorgestellt.
            </p>

            <Button
              size="lg"
              className="bg-[#db9e22] hover:bg-[#c78d1a] text-white px-6 py-3 text-base font-medium inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              onClick={() => setLocation("/funnel")}
            >
              <Sparkles className="w-4 h-4" />
              Jetzt Termin sichern
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}