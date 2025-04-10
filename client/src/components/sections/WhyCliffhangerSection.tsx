import { motion } from "framer-motion";
import { Lightbulb, Clock, Shield, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const benefits = [
  {
    icon: Clock,
    title: "Schnelle Umsetzung",
    description: "Deine Website ist in nur 7 Tagen einsatzbereit – ohne Kompromisse bei der Qualität.",
    highlights: ["Schneller Marktstart", "Keine langen Wartezeiten", "Zeitnahe Anpassungen"]
  },
  {
    icon: Lightbulb,
    title: "Maßgeschneiderte Lösungen",
    description: "Individuelle Websites, die perfekt zu deinem Unternehmen und deinen Zielen passen.",
    highlights: ["Branchen-spezifisches Design", "Conversion-optimiert", "Responsive für alle Geräte"]
  },
  {
    icon: Shield,
    title: "Zuverlässiger Partner",
    description: "100% Transparenz und klare Kommunikation während des gesamten Prozesses.",
    highlights: ["Fester Ansprechpartner", "Transparente Preise", "Zufriedenheitsgarantie"]
  }
];

export default function WhyCliffhangerSection() {
  const [, setLocation] = useLocation();

  return (
    <section className="py-24 md:py-32 bg-[#101010] relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#db9e22]/10 text-[#db9e22] font-medium text-sm mb-4">
            Unsere Stärken
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Warum mit uns arbeiten?
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Professionelle Webseiten schnell, individuell und zuverlässig – 
            mit Cliffhanger Studio hast du den richtigen Partner für deinen Online-Erfolg.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 h-full border border-white/10 hover:border-[#db9e22]/50 transition-all duration-300">
                {/* Icon with animated background effect */}
                <div className="relative mb-5">
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0"
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-[#db9e22]/30 via-transparent to-[#db9e22]/30 blur-lg" />
                  </motion.div>

                  <div className="relative z-10 w-14 h-14 rounded-lg bg-[#101010] border border-[#db9e22]/30 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-7 h-7 text-[#db9e22]" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#db9e22] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-white/70 mb-5 text-sm md:text-base">
                  {benefit.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {benefit.highlights.map((highlight, hIndex) => (
                    <motion.li
                      key={hIndex}
                      initial={{ opacity: 0, x: -5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + hIndex * 0.05 }}
                      className="flex items-center text-white/60 group-hover:text-white/80 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#db9e22] mr-2" />
                      <span className="text-sm">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto">
            <Button
              size="lg"
              onClick={() => setLocation("/funnel")}
              className="bg-[#db9e22] hover:bg-[#e4bb68] text-white text-base md:text-lg py-5 md:py-6 px-6 md:px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl w-full sm:w-auto"
            >
              Jetzt in 7 Tagen online gehen
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}