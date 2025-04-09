import { motion, useScroll, useTransform } from "framer-motion";
import { Compass, Zap, MessageSquare, Target, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useRef } from "react";

const challenges = [
  {
    icon: Zap,
    title: "Veraltete Webseiten",
    description: "Outdated Design und fehlende Funktionalität schrecken potenzielle Kunden ab."
  },
  {
    icon: MessageSquare,
    title: "Unklare Kommunikation",
    description: "Ineffiziente Kanäle und inkonsistente Botschaften verwirren Ihre Zielgruppe."
  },
  {
    icon: Target,
    title: "Conversion-Verluste",
    description: "Nicht optimierte Prozesse führen zu verpassten Geschäftschancen."
  },
  {
    icon: AlertTriangle,
    title: "Fehlende Strategie",
    description: "Unklare Ziele und mangelnde Planung verhindern nachhaltiges Wachstum."
  }
];

export default function JungleSection() {
  const [, setLocation] = useLocation();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-white to-[#fdf6e9]">
      {/* Animated Background Elements - Enhanced */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <svg className="absolute top-0 left-0 w-full opacity-[0.07]" viewBox="0 0 400 400">
            <motion.path 
              d="M0,0 L400,0 L400,400 L0,400 Z" 
              fill="none" 
              stroke="#db9e22" 
              strokeWidth="0.5"
              animate={{
                d: [
                  "M0,0 L400,0 L400,400 L0,400 Z",
                  "M50,-50 L450,50 L350,450 L-50,350 Z",
                  "M0,0 L400,0 L400,400 L0,400 Z"
                ]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <motion.div 
            animate={{
              opacity: [0.03, 0.06, 0.03],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-[#db9e22] [mask-image:radial-gradient(100px_at_70%_30%,white,transparent)]" 
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section with Enhanced Compass Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-32 h-32 mx-auto mb-10"
          >
            {/* Enhanced glowing effect */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-[#db9e22] to-[#e4bb68] rounded-full blur-3xl"
            />

            {/* Rotating ring */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 rounded-full border-2 border-[#db9e22]/20"
            />

            {/* Pulsating inner circle */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.9, 1, 0.9]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-4 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
            >
              {/* Pulsating Compass Icon */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Compass className="w-16 h-16 text-[#db9e22]" />
              </motion.div>
            </motion.div>
          </motion.div>

          <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Fühlst du dich im digitalen{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#db9e22]">Dschungel</span>
              <motion.span
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-1 left-0 h-3 bg-[#db9e22]/10 z-0"
              />
            </span>{" "}
            verloren?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Viele Unternehmen kämpfen mit veralteten Websites und ineffizienter Kommunikation – 
            wir führen dich sicher durch den digitalen Wandel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#db9e22] to-[#e4bb68] rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                    <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-[#db9e22] to-[#e4bb68] p-4 transform group-hover:scale-110 transition-transform duration-300">
                      <challenge.icon className="w-full h-full text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#db9e22] transition-colors">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() => setLocation("/funnel")}
            className="bg-[#db9e22] hover:bg-[#e4bb68] text-white text-lg px-12 py-7 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Lass uns deinen Weg finden
          </Button>
        </motion.div>
      </div>
    </section>
  );
}