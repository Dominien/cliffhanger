import { motion } from "framer-motion";
import { Send, Code, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const steps = [
  {
    number: "01",
    icon: Send,
    title: "Anfrage senden",
    description: "Du füllst unser kurzes Formular aus und teilst uns deine Anforderungen mit. Wir melden uns innerhalb von 24 Stunden bei dir zurück.",
  },
  {
    number: "02",
    icon: Code,
    title: "Design & Entwicklung",
    description: "Wir setzen deine Wünsche professionell um und erstellen eine maßgeschneiderte Website, die genau zu deinem Unternehmen passt.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "In 7 Tagen online",
    description: "Deine Website ist startklar und bereit für Besucher! Wir kümmern uns um den Launch und stellen sicher, dass alles reibungslos funktioniert.",
  }
];

export default function StepSection() {
  const [, setLocation] = useLocation();

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#db9e22]/10 text-[#db9e22] font-medium text-sm mb-4">
            3 einfache Schritte
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#101010] mb-5">
            Deine neue Webseite in nur 7 Tagen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unser effizienter Prozess garantiert schnelle Ergebnisse ohne Kompromisse bei der Qualität.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mb-20">
          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
                whileHover={{ y: -5 }}
              >
                {/* Step Card */}
                <div className="relative bg-white rounded-xl p-7 shadow-md border border-gray-100 hover:shadow-xl hover:border-[#db9e22]/30 transition-all duration-300 h-full flex flex-col">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#db9e22] text-white flex items-center justify-center font-bold text-lg shadow-md">
                    {step.number}
                  </div>
                  
                  {/* Icon with glow effect */}
                  <div className="relative h-16 flex items-center mb-6">
                    <div className="absolute w-14 h-14 bg-[#db9e22]/10 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-14 h-14 rounded-lg bg-[#101010] border border-[#db9e22]/20 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                      <step.icon className="w-7 h-7 text-[#db9e22]" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-[#101010] mb-3 group-hover:text-[#db9e22] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Step connection indicators */}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 hidden md:flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[#db9e22]/30"></div>
                    </div>
                  )}
                </div>
                
                {/* Arrow indicators between cards (only on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 text-[#db9e22]">
                    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L10 10L1 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="max-w-xl mx-auto">
            <p className="text-lg font-medium text-[#101010] mb-6">
              Schnell, einfach & stressfrei – ohne Kompromisse!
            </p>
            <Button
              size="lg"
              onClick={() => setLocation("/funnel")}
              className="bg-[#db9e22] hover:bg-[#e4bb68] text-white text-base md:text-lg py-5 md:py-6 px-6 md:px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl"
            >
              Jetzt starten – in 7 Tagen online
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}