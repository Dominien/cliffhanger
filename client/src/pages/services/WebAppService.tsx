import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Rocket,
  Zap,
  Settings,
  Users,
  CheckCircle,
  Smartphone,
  Laptop,
  ServerIcon,
  Database
} from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Moderne Technologien",
    description: "Entwicklung mit neuesten Frameworks und Technologien für optimale Performance und Skalierbarkeit."
  },
  {
    icon: Rocket,
    title: "Schnelle Entwicklung",
    description: "Effiziente Entwicklungsprozesse ermöglichen kurze Entwicklungszeiten ohne Qualitätseinbußen."
  },
  {
    icon: Settings,
    title: "Maßgeschneiderte Lösungen",
    description: "Individuell auf Ihre Geschäftsprozesse zugeschnittene Anwendungen, die genau Ihren Anforderungen entsprechen."
  },
  {
    icon: Database,
    title: "Datenintegration",
    description: "Nahtlose Integration mit bestehenden Systemen und Datenbanken für einen reibungslosen Workflow."
  }
];

const benefits = [
  {
    icon: Zap,
    title: "Digitalisierung beschleunigen",
    description: "Transformieren Sie Ihre Geschäftsprozesse und steigern Sie die Effizienz durch digitale Lösungen.",
    points: [
      "Automatisierung manueller Prozesse",
      "Reduzierung von Fehlerquellen",
      "Beschleunigte Arbeitsabläufe"
    ]
  },
  {
    icon: Users,
    title: "Kundenorientiertes Design",
    description: "Benutzerfreundliche Anwendungen, die sowohl Ihre Mitarbeiter als auch Kunden begeistern werden.",
    points: [
      "Intuitive Benutzeroberflächen",
      "Responsive Design für alle Geräte",
      "Barrierefreier Zugang"
    ]
  },
  {
    icon: ServerIcon,
    title: "Skalierbare Infrastruktur",
    description: "Zukunftssichere Lösungen, die mit Ihrem Unternehmen mitwachsen können.",
    points: [
      "Cloud-basierte Architekturen",
      "Modulare Komponenten",
      "Flexible Erweiterungen"
    ]
  }
];

const processSteps = [
  {
    number: "01",
    title: "Konzeption & Planung",
    description: "Wir analysieren Ihre Anforderungen und entwickeln ein maßgeschneidertes Konzept.",
    points: [
      "Detaillierte Anforderungsanalyse",
      "Technologie-Auswahl",
      "Projektplanung und Roadmap"
    ]
  },
  {
    number: "02",
    title: "Design & Entwicklung",
    description: "Unsere Experten setzen Ihre Web-App mit modernsten Technologien schnell um.",
    points: [
      "UI/UX Design",
      "Agile Entwicklungsmethoden",
      "Kontinuierliche Qualitätssicherung"
    ]
  },
  {
    number: "03",
    title: "Deployment & Support",
    description: "Nach dem Launch bieten wir umfassenden Support und Weiterentwicklung.",
    points: [
      "Sicheres Deployment",
      "Kontinuierliche Integration",
      "Proaktive Wartung und Updates"
    ]
  }
];

export default function WebAppService() {
  const [, setLocation] = useLocation();

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-[#101010] relative overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#db9e22] font-semibold text-sm uppercase tracking-wider mb-4 block">
                Web App Entwicklung
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Professionelle & schnelle Web-App Entwicklung
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Maßgeschneiderte Web-Apps mit modernen Technologien für die Digitalisierung und Automatisierung Ihrer Geschäftsprozesse – schnell, effizient und hochwertig.
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
              className="relative rounded-xl overflow-hidden aspect-square md:aspect-video"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#db9e22]/20 to-[#101010] flex items-center justify-center">
                <div className="relative">
                  <Laptop className="w-32 h-32 text-white/30 absolute -top-16 -left-24 transform -rotate-12" />
                  <Code className="w-40 h-40 text-white/20" />
                  <Smartphone className="w-24 h-24 text-white/30 absolute -bottom-12 -right-16 transform rotate-12" />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features Grid Section */}
      <section className="py-24 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#101010] mb-6">
              Digitale Lösungen für moderne Unternehmen
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wir entwickeln Web-Apps, die Ihr Unternehmen voranbringen – schnell, verlässlich und zukunftssicher.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-[#db9e22]/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-[#db9e22]" />
                </div>
                <h3 className="text-xl font-semibold text-[#101010] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#fdf6e9]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#101010] mb-6">
              Ihr Geschäftsvorteil durch digitale Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Web-Apps, die nicht nur technologisch überzeugen, sondern auch echten Mehrwert schaffen
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
                <h3 className="text-xl font-semibold text-[#101010] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {benefit.description}
                </p>
                <ul className="space-y-3">
                  {benefit.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#db9e22] flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#101010]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#db9e22] font-semibold text-sm uppercase tracking-wider mb-4 block">
              Unser Vorgehen
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
              Von der Idee zur fertigen Web-App
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Ein strukturierter und effizienter Prozess für schnelle Ergebnisse ohne Qualitätsverlust
            </p>
          </motion.div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
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
                    <div className="w-20 h-20 rounded-xl bg-[#db9e22]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-[#db9e22]">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-white/80 mb-6">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {step.points.map((point, i) => (
                          <div key={i} className="flex items-center gap-2 flex-shrink-0">
                            <CheckCircle className="w-5 h-5 flex-shrink-0 text-[#db9e22]" />
                            <span className="text-white/70">{point}</span>
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

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#101010] to-[#1a1a1a]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Bereit für Ihre maßgeschneiderte Web-App?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Lassen Sie uns gemeinsam Ihre Geschäftsprozesse digitalisieren und optimieren
            </p>
            <Button
              size="lg"
              onClick={() => setLocation("/funnel")}
              className="bg-[#db9e22] hover:bg-[#c78d1a] text-white text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
            >
              Jetzt kostenloses Beratungsgespräch vereinbaren
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}