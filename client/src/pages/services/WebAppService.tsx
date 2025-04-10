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
  Database,
  Sparkles,
  Brain
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "KI-gestützte Potentialanalyse",
    description: "Unsere KI analysiert dein Geschäftsmodell und identifiziert Bereiche, die durch eine Web-App optimiert werden können."
  },
  {
    icon: Sparkles,
    title: "Personalisierte App-Vorschläge",
    description: "Erhalte maßgeschneiderte Web-App Ideen, die genau auf die Anforderungen und Ziele deines Unternehmens abgestimmt sind."
  },
  {
    icon: Rocket,
    title: "Schnelle Umsetzung",
    description: "Nach der KI-Bewertung setzen wir deine ausgewählte Web-App Idee in kürzester Zeit um, damit du schnell durchstarten kannst."
  },
  {
    icon: Database,
    title: "Nahtlose Integration",
    description: "Wir sorgen für die problemlose Anbindung an deine bestehenden Systeme und Datenbanken für einen reibungslosen Workflow."
  }
];

const benefits = [
  {
    icon: Brain,
    title: "KI-gesteuerte Geschäftsoptimierung",
    description: "Lass unsere KI dein Geschäftsmodell analysieren und verborgenes Potential aufdecken.",
    points: [
      "Automatische Schwachstellenanalyse",
      "Datengestützte Optimierungsvorschläge",
      "Maßgeschneiderte Web-App Empfehlungen"
    ]
  },
  {
    icon: Zap,
    title: "Sofortige Effizienzsteigerung",
    description: "Entdecke, wie eine Web-App deine Prozesse automatisieren und deine Effizienz steigern kann.",
    points: [
      "Automatisierung manueller Tätigkeiten",
      "Reduktion von Fehlerquellen um bis zu 90%",
      "Beschleunigte Arbeitsabläufe durch Digitalisierung"
    ]
  },
  {
    icon: Users,
    title: "Verbesserte Kunden- und Mitarbeitererfahrung",
    description: "Nutzerfreundliche Web-Apps, die sowohl deine Kunden als auch dein Team begeistern werden.",
    points: [
      "Intuitive, maßgeschneiderte Benutzeroberflächen",
      "Nahtlose Nutzung auf allen Geräten",
      "Moderne, ansprechende Designs"
    ]
  }
];

const processSteps = [
  {
    number: "01",
    title: "KI-Potentialanalyse",
    description: "Unsere KI analysiert dein Unternehmen und generiert maßgeschneiderte Web-App Ideen.",
    points: [
      "KI-gestützte Geschäftsmodellanalyse",
      "Automatische Identifikation von Optimierungspotential",
      "Konkrete Web-App Vorschläge mit ROI-Berechnung"
    ]
  },
  {
    number: "02",
    title: "Konzept & Design",
    description: "Gemeinsam verfeinern wir die ausgewählte Idee und erstellen ein detailliertes Konzept.",
    points: [
      "Interaktive Bedarfsanalyse & Feedback",
      "Erstellung von UI/UX Prototypen",
      "Festlegung von Features und Funktionen"
    ]
  },
  {
    number: "03",
    title: "Schnelle Umsetzung & Launch",
    description: "Wir setzen deine Web-App in kürzester Zeit um und sorgen für einen reibungslosen Start.",
    points: [
      "Agile Entwicklung mit regelmäßigen Updates",
      "Testing und Qualitätssicherung",
      "Nahtlose Integration in bestehende Systeme"
    ]
  }
];

export default function WebAppService() {
  const [, setLocation] = useLocation();

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#101010]">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.05) 1.5px, transparent 0)`,
              backgroundSize: '32px 32px',
              backgroundPosition: '-16px -16px',
              transform: 'rotate(-2deg) scale(1.2)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#101010] via-transparent to-[#101010]" />
        </div>

        <Container>
          {/* Urgency Indicator - Properly centered */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8 md:mb-10"
          >
            <div className="relative flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-sm border border-white/20">
              <div className="relative">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#db9e22] rounded-full" />
                <div className="absolute top-0 left-0 w-2 h-2 md:w-2.5 md:h-2.5 bg-[#db9e22] rounded-full animate-ping" />
              </div>
              <span className="text-xs md:text-sm font-medium text-white/90">
                NEU: KI-Bewertung deines Web-App Potentials
              </span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="text-[#db9e22] font-semibold text-sm uppercase tracking-wider mb-4 block">
                Intelligente Lösungen für dein Unternehmen
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Web-App Ideen von unserer <span className="text-[#db9e22]">KI generiert</span> für dein Business
              </h1>
              
              {/* Feature Icons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap gap-4 md:gap-10 my-6"
              >
                <div className="flex items-center gap-2">
                  <div className="bg-[#db9e22]/20 p-1.5 md:p-2 rounded-full">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-[#db9e22]" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-white">Schnelle Umsetzung</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#db9e22]/20 p-1.5 md:p-2 rounded-full">
                    <Laptop className="w-4 h-4 md:w-5 md:h-5 text-[#db9e22]" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-white">Maßgeschneiderte Lösungen</span>
                </div>
              </motion.div>
              
              <p className="text-xl text-white/80 mb-8">
                Lass unsere KI dein Geschäft analysieren und erhalte maßgeschneiderte Web-App Ideen, die dein Unternehmen digitalisieren und optimieren – ohne technisches Vorwissen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative"
                >
                  <Button 
                    size="lg"
                    className="relative bg-[#db9e22] hover:bg-[#e4bb68] text-white text-base md:text-lg w-full sm:w-auto py-5 px-6 md:px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-lg"
                    onClick={() => setLocation("/funnel")}
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    KI-Bewertung starten
                  </Button>
                  <div className="absolute -inset-5 -z-10 bg-[#db9e22]/20 blur-2xl rounded-full opacity-50" />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Button 
                    size="lg"
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 w-full sm:w-auto py-5 px-6 md:px-8 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg"
                    onClick={() => setLocation("/contact")}
                  >
                    Kostenloses Gespräch vereinbaren
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden aspect-square md:aspect-video bg-[#1a1a1a] border border-white/10 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#db9e22]/10 to-[#101010] flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center p-8">
                  {/* Animated elements */}
                  <motion.div 
                    animate={{ 
                      rotate: [0, 10, 0, -10, 0],
                      scale: [1, 1.02, 1, 0.98, 1]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                    className="absolute top-4 left-4 opacity-50"
                  >
                    <Laptop className="w-20 h-20 text-white/30" />
                  </motion.div>
                  
                  <motion.div 
                    animate={{ 
                      rotate: [0, -5, 0, 5, 0],
                      y: [0, -10, 0, 10, 0]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                    className="absolute bottom-8 right-8 opacity-40"
                  >
                    <Smartphone className="w-16 h-16 text-white/30" />
                  </motion.div>
                  
                  {/* Central code element with pulsing effect */}
                  <motion.div 
                    className="relative z-10 bg-[#101010]/80 backdrop-blur-sm p-6 rounded-xl border border-white/10"
                    animate={{ 
                      boxShadow: [
                        "0 0 20px 0px rgba(219, 158, 34, 0.3)",
                        "0 0 25px 5px rgba(219, 158, 34, 0.4)",
                        "0 0 20px 0px rgba(219, 158, 34, 0.3)"
                      ]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#db9e22]/20 flex items-center justify-center mr-3">
                        <Sparkles className="w-5 h-5 text-[#db9e22]" />
                      </div>
                      <div className="text-white font-medium">Cliffhanger KI Bewertung</div>
                    </div>
                    <div className="text-white/70 text-sm space-y-2">
                      <p>Analysiere Geschäftsprozesse...</p>
                      <p>Identifiziere Automatisierungspotential...</p>
                      <p>Generiere maßgeschneiderte Web-App Ideen...</p>
                      <div className="flex items-center text-[#db9e22]">
                        <Code className="w-4 h-4 mr-2" />
                        <span className="font-medium">Optimierungsvorschläge bereit!</span>
                      </div>
                    </div>
                  </motion.div>
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
              KI-gestützte Analyse & Web-App Entwicklung
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unsere KI identifiziert das Digitalisierungspotential deines Unternehmens und liefert konkrete Web-App Ideen, die wir schnell und effizient umsetzen.
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
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/20 mb-6">
              <div className="w-2.5 h-2.5 bg-[#db9e22] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/90">
                KI-Bewertung ohne Verpflichtung
              </span>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-6">
              Entdecke das Web-App Potential deines Unternehmens
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Lass unsere KI in wenigen Minuten analysieren, wie eine maßgeschneiderte Web-App dein Business transformieren kann.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-md mx-auto sm:max-w-none justify-center gap-6">
              <Button
                size="lg"
                onClick={() => setLocation("/funnel")}
                className="bg-[#db9e22] hover:bg-[#e4bb68] text-white text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group rounded-lg"
              >
                <Sparkles className="w-5 h-5 mr-3" />
                KI-Bewertung jetzt starten
              </Button>
              
              <Button
                size="lg"
                onClick={() => setLocation("/contact")}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-lg py-6 px-8 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg group"
              >
                Kostenloses Gespräch vereinbaren
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}