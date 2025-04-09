import { motion } from "framer-motion";
import { Lightbulb, Zap, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const benefits = [
  {
    icon: Lightbulb,
    title: "Expertise",
    description: "Jahrelange Erfahrung in digitaler Transformation",
    highlights: ["10+ Jahre Erfahrung", "Zertifizierte Experten", "Branchenführende Lösungen"]
  },
  {
    icon: Zap,
    title: "Effizienz",
    description: "Schnelle Umsetzung deiner digitalen Vision",
    highlights: ["Agile Entwicklung", "Schnelle Iterationen", "Messbare Resultate"]
  },
  {
    icon: Users,
    title: "Persönliche Betreuung",
    description: "Individueller Support auf Augenhöhe",
    highlights: ["1:1 Beratung", "Dedizierter Ansprechpartner", "Proaktive Kommunikation"]
  }
];

export default function WhyCliffhangerSection() {
  const [, setLocation] = useLocation();

  return (
    <section className="py-24 bg-[#272727] relative overflow-hidden">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Warum Cliffhanger Studio?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Wir bringen deine digitale Vision in Bewegung – mit maßgeschneiderten Lösungen, 
            schneller Umsetzung und individueller Betreuung, die dein Business wachsen lässt.
          </p>
        </motion.div>

        {/* Benefits Grid - Updated to 3 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/10 hover:border-[#db9e22]/50 transition-all duration-300">
                {/* Icon Container */}
                <div className="relative mb-6">
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

                  <div className="relative z-10 w-16 h-16 rounded-xl bg-[#272727] border border-[#db9e22]/30 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-[#db9e22]" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#db9e22] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-white/70 mb-6 group-hover:text-white/90 transition-colors">
                  {benefit.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {benefit.highlights.map((highlight, hIndex) => (
                    <motion.li
                      key={hIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + hIndex * 0.1 }}
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
          className="text-center mt-16"
        >
          <Button
            size="lg"
            onClick={() => setLocation("/funnel")}
            className="bg-[#db9e22] hover:bg-[#c78d1a] text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Starte deine Erfolgsgeschichte
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}