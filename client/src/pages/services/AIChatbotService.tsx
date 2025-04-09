import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MessageSquare,
  Clock,
  Target,
  Lock,
  ArrowRight,
  Zap,
  Check,
  Compass,
  AlertTriangle
} from "lucide-react";
import { useRef } from "react";
import ChatbotDemo from "@/components/ChatbotDemo";

const features = [
  {
    icon: MessageSquare,
    title: "24/7 Verfügbarkeit",
    description: "Ihr digitaler Assistent ist rund um die Uhr für Ihre Kunden da.",
    color: "#db9e22",
  },
  {
    icon: Clock,
    title: "Sofortige Antworten",
    description: "Keine Wartezeiten - Ihre Kunden erhalten unmittelbar qualifizierte Antworten.",
    color: "#db9e22",
  },
  {
    icon: Target,
    title: "Personalisierte Interaktion",
    description: "Der Chatbot passt sich individuell an die Bedürfnisse Ihrer Kunden an.",
    color: "#db9e22",
  },
  {
    icon: Lock,
    title: "Sichere Kommunikation",
    description: "Höchste Sicherheitsstandards für vertrauliche Gespräche.",
    color: "#db9e22",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Schnelle Integration",
    description: "Nahtlose Einbindung in Ihre bestehende Webseite",
    benefits: [
      "Plug-and-Play Installation",
      "Minimale Ausfallzeit",
      "Sofort einsatzbereit"
    ]
  },
  {
    icon: Target,
    title: "Intelligente Antworten",
    description: "KI-gestützte Kommunikation für optimale Kundenzufriedenheit",
    benefits: [
      "Präzise Antworten",
      "Lernfähiges System",
      "Mehrsprachig verfügbar"
    ]
  },
  {
    icon: Lock,
    title: "Datensicherheit",
    description: "Höchste Sicherheitsstandards für Ihre Daten",
    benefits: [
      "DSGVO-konform",
      "Verschlüsselte Übertragung",
      "Regelmäßige Updates"
    ]
  }
];

const steps = [
  {
    icon: MessageSquare,
    title: "Bedarfsanalyse",
    description: "Wir analysieren Ihre Anforderungen und erstellen ein maßgeschneidertes Konzept.",
    benefits: [
      "Individuelle Beratung",
      "Technische Evaluation",
      "Kostenanalyse"
    ]
  },
  {
    icon: Target,
    title: "Implementierung",
    description: "Integration des Chatbots in Ihre bestehende Infrastruktur.",
    benefits: [
      "Schnelle Installation",
      "Technischer Support",
      "Mitarbeiter-Training"
    ]
  },
  {
    icon: Zap,
    title: "Optimierung",
    description: "Kontinuierliche Verbesserung und Anpassung an Ihre Bedürfnisse.",
    benefits: [
      "Performance-Monitoring",
      "KI-Training",
      "Support & Wartung"
    ]
  }
];

export default function AIChatbotService() {
  const [, setLocation] = useLocation();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <>
      {/* Hero Section with Chatbot Demo */}
      <section className="py-24 bg-[#272727] relative overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#db9e22] font-semibold text-sm uppercase tracking-wider mb-4 block">
                KI-Chatbot Service
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                KI-Chatbot für intelligenten Kundenservice
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Automatisieren Sie Ihren Kundenservice mit unserem KI-gestützten Chatbot. Testen Sie es gleich aus!
              </p>
              <Button
                size="lg"
                onClick={() => setLocation("/funnel")}
                className="bg-[#db9e22] hover:bg-[#c78d1a] text-white"
              >
                Jetzt Beratungsgespräch vereinbaren
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ChatbotDemo />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-[#fdf6e9] relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#272727] mb-6">
              Transformieren Sie Ihren Kundenservice
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mit unserem KI-Chatbot bieten Sie Ihren Kunden einen Service der nächsten Generation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-[#db9e22]/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-[#db9e22]" />
                </div>
                <h3 className="text-xl font-semibold text-[#272727] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {benefit.description}
                </p>
                <ul className="space-y-3">
                  {benefit.benefits.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#db9e22]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section ref={sectionRef} className="py-24 bg-[#272727] relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#db9e22] font-semibold text-sm uppercase tracking-wider mb-4 block">
              Unser Prozess
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
              Der Weg zu Ihrem intelligenten Chatbot
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Ein transparenter Prozess von der Analyse bis zur Implementierung
            </p>
          </motion.div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-16 h-16 rounded-xl bg-[#db9e22]/10 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-8 h-8 text-[#db9e22]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-white/80 mb-6">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {step.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2 flex-shrink-0">
                            <Check className="w-5 h-5 flex-shrink-0 text-[#db9e22]" />
                            <span className="text-white/70 whitespace-nowrap">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Failure Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#fdf6e9]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-red-500/10 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            <h2 className="text-4xl font-bold text-[#272727] mb-6">
              Vermeiden Sie diese Fehler
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Viele Unternehmen scheitern bei der Implementierung von KI-Chatbots. Lernen Sie aus deren Fehlern.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Mangelnde Personalisierung",
                description: "Standardantworten ohne Kontext führen zu frustrierten Kunden"
              },
              {
                title: "Fehlende Integration",
                description: "Isolierte Chatbots ohne Anbindung an bestehende Systeme"
              },
              {
                title: "Unzureichendes Training",
                description: "KI ohne kontinuierliche Verbesserung bleibt ineffektiv"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-red-500 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#272727] to-[#1a1a1a] relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-20 h-20 mx-auto mb-6 bg-[#db9e22]/10 rounded-full flex items-center justify-center"
              >
                <Compass className="w-10 h-10 text-[#db9e22]" />
              </motion.div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Bereit für die Zukunft des Kundenservice?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                Lassen Sie uns gemeinsam Ihren individuellen KI-Chatbot entwickeln
              </p>
            </div>

            <Button
              size="lg"
              onClick={() => setLocation("/funnel")}
              className="relative bg-[#db9e22] hover:bg-[#c78d1a] text-white text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
            >
              Jetzt kostenlosen Call buchen
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}