import { motion } from "framer-motion";
import { Pencil, MessageCircle, CheckCircle, ArrowRight, GripVertical } from "lucide-react";

const steps = [
  {
    icon: Pencil,
    title: "Live-Vorschau im Call erhalten",
    description: "Nach deiner Anfrage erstellen wir ein individuelles Design-Konzept. Im Call siehst du live, wie deine Landing Page aussehen könnte – unverbindlich und direkt anpassbar.",
    benefits: [
      "Live Design-Preview",
      "Sofortige Anpassungen",
      "Keine Wartezeit"
    ]
  },
  {
    icon: MessageCircle,
    title: "Strategiegespräch führen",
    description: "Wir analysieren gemeinsam deine Ziele und besprechen, welche Anpassungen deine Landing Page noch perfektionieren können – in Echtzeit sichtbar und anpassbar im Call.",
    benefits: [
      "Zielgruppen-Analyse",
      "Marketing-Strategie",
      "Content-Planung"
    ]
  },
  {
    icon: CheckCircle,
    title: "Deine Entscheidung treffen",
    description: "Erst wenn du 100% zufrieden bist, finalisieren wir deine Landing Page und starten dein Marketing. Keine Verpflichtung – du entscheidest erst nach dem Call.",
    benefits: [
      "Keine Vorabkosten",
      "Flexibler Start",
      "Garantierte Zufriedenheit"
    ]
  }
];

export default function PlanSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f6f6f6] to-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#101010] mb-4">
            Dein Weg zur perfekten Landing Page
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ein transparenter Prozess, der dir von Anfang an zeigt, wie deine neue Landing Page entsteht.
          </p>
        </motion.div>

        <div className="relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-16 last:mb-0"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start relative">
                {/* Left side with number and grip */}
                <div className="flex items-center gap-4 lg:w-24">
                  <div className="flex flex-col items-center">
                    <GripVertical className="w-6 h-6 text-[#db9e22]/30" />
                    <div className="w-[2px] h-24 bg-gradient-to-b from-[#db9e22]/30 to-transparent" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#db9e22] to-[#e4bb68] bg-clip-text text-transparent">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group">
                    {/* Gradient Border on Hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#db9e22]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className="w-14 h-14 bg-[#db9e22]/10 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <step.icon className="w-7 h-7 text-[#db9e22]" />
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-[#101010] mb-3 group-hover:text-[#db9e22] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right side benefits - Now full width on mobile */}
                <div className="w-full lg:w-80 mt-4 lg:mt-0">
                  <div className="bg-[#101010] rounded-2xl p-6 text-white">
                    <h4 className="text-lg font-semibold mb-4 text-[#db9e22]">Deine Vorteile</h4>
                    <ul className="space-y-3">
                      {step.benefits.map((benefit, bIndex) => (
                        <motion.li
                          key={bIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + bIndex * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <ArrowRight className="w-4 h-4 text-[#db9e22]" />
                          <span className="text-white/90">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}