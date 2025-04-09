import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    emoji: "🔍",
    title: "Analyse & Strategie",
    description: "Wir starten mit einem kostenlosen Call, um deine aktuelle Situation zu verstehen und gemeinsame Ziele festzulegen.",
    callNote: "Kurzer, persönlicher Austausch + individuelle Bedarfsanalyse"
  },
  {
    icon: Lightbulb,
    emoji: "💡",
    title: "Konzept & Umsetzung",
    description: "Mit kreativen Ideen und modernem Design setzen wir dein Konzept um – markenkonform, zielgruppenspezifisch und stets transparent.",
    callNote: "Erste Entwürfe werden mit dir im Call besprochen und verfeinert"
  },
  {
    icon: Rocket,
    emoji: "🚀",
    title: "Optimierung & Wachstum",
    description: "Durch laufende Optimierungen und Performance-Monitoring stellen wir sicher, dass dein Online-Auftritt nachhaltig Erfolge erzielt.",
    callNote: "Regelmäßige Calls, um Fortschritte zu tracken und neue Chancen zu nutzen"
  }
];

export default function StepSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#272727] mb-4">
            So erreichen wir deinen Erfolg – Schritt für Schritt
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#db9e22]/20 hidden md:block" />

          <div className="space-y-16 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8`}>
                  {/* Step Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{step.emoji}</span>
                        <h3 className="text-2xl font-semibold text-[#272727]">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="text-sm text-[#db9e22] font-medium bg-[#db9e22]/5 p-3 rounded-lg">
                        {step.callNote}
                      </div>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-white shadow-lg border border-[#db9e22]/20 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#db9e22] to-[#e4bb68] flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}