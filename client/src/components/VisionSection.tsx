import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Container } from "@/components/ui/container";
import { 
  Check,
  ChevronRight,
  Zap,
  Target,
  Clock
} from "lucide-react";

const benefits = [
  "Live Design-Preview im persönlichen Call",
  "Maßgeschneidertes Design für deine Marke",
  "Unverbindlich und ohne Risiko"
];

const features = [
  {
    icon: Zap,
    title: "Schnelle Umsetzung",
    description: "Direkte Visualisierung deiner Ideen"
  },
  {
    icon: Target,
    title: "Perfekte Abstimmung",
    description: "Exakt auf deine Zielgruppe zugeschnitten"
  },
  {
    icon: Clock,
    title: "Sofortige Anpassung",
    description: "Live-Änderungen während des Calls"
  }
];

const VisionSection = () => {
  const [, setLocation] = useLocation();

  return (
    <section className="py-24 bg-[#272727] relative overflow-hidden">
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

      <Container>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Side - Static on mobile, animated on desktop */}
          <div className="md:hidden text-left">
            <h2 className="text-3xl font-bold text-white mb-4">
              Erlebe, wie deine Vision Gestalt annimmt
            </h2>
            <p className="text-white/80 mb-6">
              Fülle das Formular aus & erhalte deine fertige Landing Page – ganz ohne Risiko.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 text-white/90"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#db9e22]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#db9e22]" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg"
              className="w-full md:w-auto bg-[#db9e22] hover:bg-[#c78d1a] text-white transition-all hover:scale-105"
              onClick={() => setLocation("/funnel")}
            >
              Jetzt kostenlosen Call buchen
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Desktop version with animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden md:block text-left"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Erlebe, wie deine Vision Gestalt annimmt
            </h2>
            <p className="text-white/80 mb-6">
              Fülle das Formular aus & erhalte deine fertige Landing Page – ganz ohne Risiko.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 text-white/90"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#db9e22]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#db9e22]" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg"
              className="w-full md:w-auto bg-[#db9e22] hover:bg-[#c78d1a] text-white transition-all hover:scale-105"
              onClick={() => setLocation("/funnel")}
            >
              Jetzt kostenlosen Call buchen
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Right Side - Feature Grid */}
          {/* Static version for mobile */}
          <div className="md:hidden grid gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-[#db9e22]/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-[#db9e22]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 text-sm group-hover:translate-x-1 transition-transform duration-300 delay-75">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Animated version for desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:grid gap-6"
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-[#db9e22]/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-[#db9e22]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 text-sm group-hover:translate-x-1 transition-transform duration-300 delay-75">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default VisionSection;