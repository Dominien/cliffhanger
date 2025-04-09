import { motion } from "framer-motion";
import { Zap, Target, Lock, Check, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const features = [
  {
    icon: Zap,
    title: "Individuelle Konzept-Vorschau",
    description:
      "Im Gespräch wird dir dein fertiges Landing Page-Konzept präsentiert – du siehst, wie dein Online-Auftritt aussehen kann.",
    benefits: [
      "Live Design-Preview im Call",
      "Responsive auf allen Geräten",
      "Conversion-optimierte Layouts",
    ],
    color: "#db9e22",
  },
  {
    icon: Target,
    title: "100% Business-Optimiert",
    description:
      "Kein Template, sondern maßgeschneidertes Design für deine Marke.",
    benefits: [
      "Angepasst an deine CI",
      "Zielgruppen-spezifisches Design",
      "Performance-optimiert",
    ],
    color: "#22db9e",
  },
  {
    icon: Lock,
    title: "Unverbindlicher Einblick",
    description:
      "Du entscheidest erst nach dem Call, ob du mit uns arbeiten willst.",
    benefits: [
      "Kostenlose Beratung",
      "Keine versteckten Kosten",
      "Flexible Umsetzung",
    ],
    color: "#9e22db",
  },
];

export default function GuideSection() {
  const [, setLocation] = useLocation();

  return (
    <section className="py-24 bg-[#272727] relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 50, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            <div
              className="w-full h-full rounded-full opacity-10"
              style={{
                background: `radial-gradient(circle, ${features[i % features.length].color}55 0%, transparent 70%)`,
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#db9e22] font-semibold text-sm uppercase tracking-wider mb-4 block">
            Dein Weg zum Erfolg
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Wir begleiten dich auf deiner digitalen Reise
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Entdecke, wie wir gemeinsam deine Online-Präsenz transformieren und messbare Erfolge erzielen.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 relative">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Glowing background */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${feature.color}99 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-xl bg-[#272727] border border-white/10 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4 mt-6 group-hover:translate-x-1 transition-transform duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 mb-6 group-hover:text-white/90 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  {feature.benefits.map((benefit, bIndex) => (
                    <motion.div
                      key={bIndex}
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + bIndex * 0.1 }}
                      className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${feature.color}22` }}
                      >
                        <Check className="w-3 h-3" style={{ color: feature.color }} />
                      </div>
                      <span className="text-white/80 text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            onClick={() => setLocation("/funnel")}
            className="relative bg-[#db9e22] hover:bg-[#c78d1a] text-white text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
          >
            Starte deine digitale Reise
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}