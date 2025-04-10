import { motion } from "framer-motion";
import { Clock, DollarSign, MessagesSquare, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

// Problems array
const problems = [
  {
    icon: Clock,
    title: "Lange Wartezeiten",
    description: "Wochen oder Monate auf deine Webseite zu warten kostet dich Zeit und Kunden.",
  },
  {
    icon: DollarSign,
    title: "Hohe Kosten für unnötige Extras",
    description: "Versteckte Kosten und teure Zusatzfunktionen, die du eigentlich nicht brauchst.",
  },
  {
    icon: MessagesSquare,
    title: "Komplizierte Prozesse ohne klare Kommunikation",
    description: "Unverständliche Fachbegriffe und mangelnde Transparenz im Entwicklungsprozess.",
  }
];

// Solutions array
const solutions = [
  {
    icon: Clock,
    title: "In nur 7 Tagen ist deine Website live!",
    description: "Schnelle Umsetzung ohne lange Wartezeiten – so kannst du sofort durchstarten.",
  },
  {
    icon: DollarSign,
    title: "Fixpreis ohne versteckte Kosten",
    description: "Transparente Preisgestaltung ohne Überraschungen – du weißt genau, was du bekommst.",
  },
  {
    icon: MessagesSquare,
    title: "Persönlicher Ansprechpartner für deine Wünsche",
    description: "Klare Kommunikation auf Augenhöhe – wir sprechen deine Sprache, nicht Fachchinesisch.",
  }
];

export default function ProblemSolutionSection() {
  const [, setLocation] = useLocation();

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Dein Business braucht eine Website – 
            <span className="text-[#db9e22]"> aber nicht die typisch deutsche Wartezeit!</span>
          </h2>
          <p className="text-lg text-gray-700">
            Viele Agenturen brauchen Wochen oder sogar Monate, um eine Webseite zu liefern. 
            Das kostet dich Zeit, Nerven und potenzielle Kunden.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-16">
          {/* Problems Column */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 mr-3">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Problem deutscher Agenturen:</h3>
              </div>
              
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#db9e22]/30 transition-all duration-300 bg-white"
                  >
                    <div className="flex-shrink-0 p-3 rounded-lg bg-[#101010] mr-4">
                      <problem.icon className="w-6 h-6 text-[#db9e22]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{problem.title}</h4>
                      <p className="text-gray-600 text-sm">{problem.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Solutions Column */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 mr-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Die Cliffhanger Studio Lösung:</h3>
              </div>

              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="flex items-start p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#db9e22]/30 transition-all duration-300 bg-white"
                  >
                    <div className="flex-shrink-0 p-3 rounded-lg bg-[#101010] mr-4">
                      <solution.icon className="w-6 h-6 text-[#db9e22]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{solution.title}</h4>
                      <p className="text-gray-600 text-sm">{solution.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Target Emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            Schnell, professionell & stressfrei – <span className="text-[#db9e22]">so geht Webdesign heute!</span>
          </h3>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() => setLocation("/funnel")}
            className="bg-[#db9e22] hover:bg-[#e4bb68] text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Jetzt in 7 Tagen online gehen
          </Button>
        </motion.div>
      </div>
    </section>
  );
}