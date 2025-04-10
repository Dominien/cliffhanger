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
    title: "Schritt 1: KI findet App-Ideen",
    description: "Unsere KI analysiert dein Geschäft und findet die besten Web-App Ideen, die deinem Business wirklich helfen."
  },
  {
    icon: Sparkles,
    title: "Schritt 2: Wir besprechen alles",
    description: "Gemeinsam gehen wir die KI-Vorschläge durch und entscheiden, welche Web-App wir für dich entwickeln sollen."
  },
  {
    icon: Rocket,
    title: "Schritt 3: Unser Team baut",
    description: "Unsere Entwickler bauen deine Web-App schnell und professionell. Du bekommst regelmäßige Updates zum Fortschritt."
  },
  {
    icon: Database,
    title: "Schritt 4: Fertige App für dich",
    description: "Wir liefern deine fertige Web-App, verbinden sie mit deinen bestehenden Systemen und sorgen für einen perfekten Start."
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
    description: "In nur 5 Minuten zeigt unsere KI, welche Web-App-Lösungen dein Business wirklich voranbringen würden.",
    points: [
      "KI-gesteuerte Analyse deines Geschäftsmodells",
      "Identifikation der besten App-Möglichkeiten",
      "Konkrete Vorschläge mit Nutzen für dein Business"
    ]
  },
  {
    number: "02",
    title: "Konzept & Design",
    description: "Basierend auf den KI-Vorschlägen erstellen wir gemeinsam das perfekte Konzept für deine Web-App.",
    points: [
      "Besprechung der KI-Vorschläge mit dir",
      "Professionelles Design deiner App",
      "Festlegung aller wichtigen Funktionen"
    ]
  },
  {
    number: "03",
    title: "Entwicklung & Launch",
    description: "Unser Team baut deine Web-App komplett für dich und sorgt für einen reibungslosen Start.",
    points: [
      "Professionelle Entwicklung durch unser Team",
      "Regelmäßige Updates zum Fortschritt",
      "Nahtlose Einbindung in dein Geschäft"
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
                NEU: KI-generierte Web-App Ideen, professionell umgesetzt
              </span>
            </div>
          </motion.div>

          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <span className="text-[#db9e22] font-semibold text-sm uppercase tracking-wider mb-4 block">
                Intelligente Lösungen für dein Unternehmen
              </span>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                <span className="text-[#db9e22]">Web-App Ideen</span> von unserer KI,<br/> 
                <span className="text-[#db9e22]">gebaut von uns</span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto"
              >
                Unsere KI findet die besten App-Ideen für dein Business, dann baut unser Team diese für dich. Von der ersten Idee bis zur fertigen Web-App.
              </motion.p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative"
                >
                  <Button 
                    size="lg"
                    className="relative bg-[#db9e22] hover:bg-[#e4bb68] text-white text-base md:text-lg w-full sm:w-auto py-5 px-6 md:px-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-lg"
                    onClick={() => setLocation("/funnel")}
                  >
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
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 w-full sm:w-auto py-5 px-6 md:px-10 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg"
                    onClick={() => setLocation("/contact")}
                  >
                    Bereits App-Idee? Lass uns reden
                  </Button>
                </motion.div>
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
              Innovative Ideen, professionell umgesetzt
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              So einfach geht's: Unsere KI findet die besten Web-App Ideen für dein Business. Dann besprechen wir alles mit dir und unser Team baut die App genau nach deinen Wünschen.
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
              KI-Ideen, von uns umgesetzt
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Unsere KI findet die besten App-Ideen, unser Team baut sie für dich. Du bekommst eine fertige Web-App ohne Stress - von der ersten Idee bis zur fertigen Lösung.
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
                Cliffhanger Studios baut deine Web-App
              </span>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-6">
              KI-generierte App-Ideen, von uns entwickelt
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Starte mit einer 5-Minuten KI-Analyse. Dann bauen wir von Cliffhanger Studios deine maßgeschneiderte Web-App genau nach deinen Wünschen und Anforderungen.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-md mx-auto sm:max-w-none justify-center gap-6">
              <Button
                size="lg"
                onClick={() => setLocation("/funnel")}
                className="bg-[#db9e22] hover:bg-[#e4bb68] text-white text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group rounded-lg"
              >
                KI-Bewertung starten
              </Button>
              
              <Button
                size="lg"
                onClick={() => setLocation("/contact")}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-lg py-6 px-8 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg group"
              >
                Bereits App-Idee? Lass uns reden
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}