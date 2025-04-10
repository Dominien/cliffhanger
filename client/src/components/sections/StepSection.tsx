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
          {/* Connecting Line */}
          <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-px bg-[#db9e22]/20 md:transform md:-translate-x-1/2 hidden sm:block z-0" />

          <div className="space-y-12 md:space-y-0 relative">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                    {/* Step Number */}
                    <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-[#101010] text-white flex items-center justify-center font-bold text-lg shadow-md">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="h-14 flex items-center mt-6 mb-5">
                      <div className="w-12 h-12 rounded-lg bg-[#db9e22]/10 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-[#db9e22]" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#101010] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base mb-4 flex-grow">
                      {step.description}
                    </p>
                    
                    {/* Connector Line for Desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-10 -right-6 h-px w-12 bg-[#db9e22]/20 z-0" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
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