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
  Brain,
  Clock,
  CreditCard as CreditCardIcon,
  AlertTriangle as AlertTriangleIcon,
  TrendingDown,
  UserMinus,
  BanknoteIcon,
  Quote
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
                Nur 5 Beratungsgespräche übrig
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
                Web-App Entwicklung
              </span>
              
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Geschäftsprobleme lösen mit <span className="text-[#db9e22]">Web-Apps</span>,<br/>
                die wirklich helfen
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto"
              >
                Brauchen Sie eine digitale Lösung für Ihr Unternehmen, wissen aber nicht welche? Unsere KI findet die beste Idee - unser Team baut sie für Sie.
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
                    KI-Analyse starten - Kostenlos
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
                    Beratungsgespräch vereinbaren
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Problem Section */}
      <section className="py-20 relative overflow-hidden bg-white">
        {/* Subtle gold gradient accents */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#db9e22]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#db9e22]/5 rounded-full blur-3xl"></div>
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center px-4 py-1 bg-[#db9e22]/10 rounded-full mb-4">
              <span className="block w-2 h-2 rounded-full bg-[#db9e22]"></span>
              <span className="text-[#db9e22] font-semibold text-sm uppercase tracking-wider mx-2">Digitale Herausforderungen</span>
              <span className="block w-2 h-2 rounded-full bg-[#db9e22]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#101010] mt-3 mb-4">
              Was bremst Ihr Unternehmen aus?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Diese Probleme lösen wir täglich mit maßgeschneiderten Web-Apps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#db9e22]/30 to-[#e4bb68]/30 rounded-2xl blur-md opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#db9e22]/30 shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden group-hover:transform group-hover:scale-[1.02]">
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="p-4 bg-[#db9e22]/10 rounded-xl inline-flex">
                      <Clock className="w-8 h-8 text-[#db9e22]" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-[#101010]">Zeitverschwendung</h3>
                  
                  <div className="h-0.5 w-12 bg-[#db9e22] mb-4"></div>
                  
                  <p className="text-gray-600">
                    Zu viel verlorene Zeit durch manuelle Prozesse und Papierkram
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#db9e22] mr-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Automatisierung spart bis zu 70% Zeit</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#db9e22]/30 to-[#e4bb68]/30 rounded-2xl blur-md opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#db9e22]/30 shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden group-hover:transform group-hover:scale-[1.02]">
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="p-4 bg-[#db9e22]/10 rounded-xl inline-flex">
                      <Brain className="w-8 h-8 text-[#db9e22]" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-[#101010]">Unsicherheit</h3>
                  
                  <div className="h-0.5 w-12 bg-[#db9e22] mb-4"></div>
                  
                  <p className="text-gray-600">
                    Zweifel, welche digitale Lösung wirklich helfen würde
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#db9e22] mr-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">KI wählt die passende Lösung für Sie</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#db9e22]/30 to-[#e4bb68]/30 rounded-2xl blur-md opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#db9e22]/30 shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden group-hover:transform group-hover:scale-[1.02]">
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="p-4 bg-[#db9e22]/10 rounded-xl inline-flex">
                      <AlertTriangleIcon className="w-8 h-8 text-[#db9e22]" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-[#101010]">Risiko</h3>
                  
                  <div className="h-0.5 w-12 bg-[#db9e22] mb-4"></div>
                  
                  <p className="text-gray-600">
                    Angst vor IT-Projekten, die teuer sind und wenig bringen
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#db9e22] mr-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Feste Preise und garantierte Ergebnisse</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 max-w-3xl mx-auto"
          >
            <div className="relative bg-[#101010] px-8 py-10 rounded-2xl shadow-2xl overflow-hidden">
              {/* Decorative circuit-like elements */}
              <div className="absolute left-0 top-0 h-full w-1 bg-[#db9e22]"></div>
              <div className="absolute top-6 left-12 w-2 h-2 bg-[#db9e22]/70 rounded-full"></div>
              <div className="absolute top-12 left-10 w-1.5 h-1.5 bg-[#db9e22]/60 rounded-full"></div>
              <div className="absolute top-16 left-14 w-1 h-1 bg-[#db9e22]/50 rounded-full"></div>
              <div className="absolute bottom-6 right-12 w-2 h-2 bg-[#db9e22]/30 rounded-full"></div>
              <div className="absolute bottom-12 right-20 w-1.5 h-1.5 bg-[#db9e22]/20 rounded-full"></div>
              <div className="absolute bottom-24 right-14 w-1 h-1 bg-[#db9e22]/10 rounded-full"></div>
              
              <div className="relative flex items-center">
                <div className="mr-6 p-4 bg-[#db9e22]/10 rounded-xl">
                  <Zap className="w-8 h-8 text-[#db9e22]" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl text-white font-medium">
                    Ohne die richtige Web-App bleibt Ihr Unternehmen im digitalen Zeitalter zurück.
                  </p>
                  <div className="mt-2 flex items-center">
                    <div className="h-px w-8 bg-[#db9e22]/50"></div>
                    <span className="text-[#db9e22] text-sm ml-2">Jetzt handeln</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
      
      {/* Guide Section */}
      <section className="py-28 bg-[#101010] relative overflow-hidden">
        {/* Subtle dotted pattern background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(rgba(219, 158, 34, 0.3) 2px, transparent 2px)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
        
        {/* Subtle gold accent blur */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#db9e22]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#db9e22]/5 rounded-full blur-3xl"></div>
        
        <Container className="relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <div className="inline-block px-4 py-1 bg-[#db9e22]/10 rounded-full mb-6">
              <span className="text-[#db9e22] font-medium uppercase tracking-wider text-sm">Unser Ansatz</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto">
              So helfen wir Ihnen
            </h2>
            <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto">
              Bei Cliffhanger Studios verbinden wir KI und Entwicklung für maximalen Erfolg
            </p>
          </motion.div>

          {/* Card Section - 2 steps */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-[#151515] rounded-2xl overflow-hidden border border-white/10 shadow-xl group hover:shadow-2xl transition-all duration-300 relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#db9e22]/30 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <div className="pt-8 px-8 flex items-center justify-between">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#db9e22]/10 backdrop-blur-sm border border-[#db9e22]/30">
                    <Brain className="w-7 h-7 text-[#db9e22]" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#db9e22]/20 flex items-center justify-center">
                    <span className="text-[#db9e22] font-bold">1</span>
                  </div>
                </div>
                
                <div className="p-8 pt-6">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#db9e22] transition-colors duration-300">
                    KI-Analyse
                  </h3>
                  
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    Unsere KI analysiert Ihr Unternehmen gründlich und identifiziert die wirkungsvollsten Web-App-Konzepte für Ihre geschäftlichen Herausforderungen.
                  </p>
                  
                  <div className="pt-6 border-t border-white/10 space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#db9e22] mr-3 flex-shrink-0" />
                      <span className="text-white/70">Umfassende Geschäftsanalyse</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#db9e22] mr-3 flex-shrink-0" />
                      <span className="text-white/70">Datenbasierte App-Vorschläge</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#db9e22] mr-3 flex-shrink-0" />
                      <span className="text-white/70">Konkrete ROI-Prognosen</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-[#151515] rounded-2xl overflow-hidden border border-white/10 shadow-xl group hover:shadow-2xl transition-all duration-300 relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#db9e22]/30 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <div className="pt-8 px-8 flex items-center justify-between">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#db9e22]/10 backdrop-blur-sm border border-[#db9e22]/30">
                    <Code className="w-7 h-7 text-[#db9e22]" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#db9e22]/20 flex items-center justify-center">
                    <span className="text-[#db9e22] font-bold">2</span>
                  </div>
                </div>
                
                <div className="p-8 pt-6">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#db9e22] transition-colors duration-300">
                    Entwicklung
                  </h3>
                  
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    Unser erfahrenes Entwicklerteam setzt die KI-generierten Konzepte in leistungsstarke, skalierbare und benutzerfreundliche Web-Anwendungen um.
                  </p>
                  
                  <div className="pt-6 border-t border-white/10 space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#db9e22] mr-3 flex-shrink-0" />
                      <span className="text-white/70">Professionelle Programmierung</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#db9e22] mr-3 flex-shrink-0" />
                      <span className="text-white/70">Responsive & performant</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#db9e22] mr-3 flex-shrink-0" />
                      <span className="text-white/70">Integration in Ihre Systeme</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Quote Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto relative"
          >
            <div className="bg-[#1a1a1a] border border-[#db9e22]/20 rounded-2xl p-10 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#db9e22]/5 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#db9e22]/5 blur-3xl"></div>
              
              {/* Quote Icon */}
              <div className="w-14 h-14 rounded-full bg-[#db9e22]/10 flex items-center justify-center mx-auto mb-6 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#db9e22]">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              
              <p className="text-xl md:text-2xl text-white font-medium text-center relative z-10 mb-6">
                Wir verbinden moderne KI-Technologie mit echtem Entwickler-Handwerk - für Lösungen, die wirklich funktionieren.
              </p>
              
              <div className="flex items-center justify-center relative z-10">
                <div className="w-10 h-10 rounded-full bg-[#db9e22]/20 flex items-center justify-center">
                  <span className="text-[#db9e22] font-semibold">CS</span>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
      
      {/* Plan Section */}
      <section className="py-28 bg-white relative overflow-hidden">
        {/* Subtle decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#db9e22]/5 rounded-full blur-3xl -mr-48 -mt-48 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#db9e22]/5 rounded-full blur-3xl -ml-48 -mb-48 opacity-60"></div>
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-[#db9e22]/10 rounded-full mb-6">
              <span className="text-[#db9e22] font-medium text-sm">4 EINFACHE SCHRITTE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#101010] mb-6 max-w-3xl mx-auto">
              Ihr Weg zur maßgeschneiderten Web-App
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Von der ersten Idee bis zur fertigen Anwendung in wenigen Wochen
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Horizontal timeline for desktop */}
              <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gray-200"></div>
              <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-[#db9e22]/50 transform -translate-y-px" style={{ width: '0%' }}>
                <motion.div 
                  initial={{ width: '0%' }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-[#db9e22]"
                ></motion.div>
              </div>
              
              {/* Vertical timeline for mobile */}
              <div className="absolute lg:hidden left-[30px] top-0 bottom-0 w-0.5 bg-gray-200"></div>
              <div className="absolute lg:hidden left-[30px] top-0 bottom-0 w-0.5 bg-[#db9e22]/50 transform -translate-x-px h-0">
                <motion.div 
                  initial={{ height: '0%' }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-full bg-[#db9e22]"
                ></motion.div>
              </div>
              
              <div className="grid lg:grid-cols-4 gap-16 lg:gap-6">
                {/* Step 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  {/* Desktop circle */}
                  <div className="hidden lg:flex absolute left-1/2 top-0 -mt-8 transform -translate-x-1/2 z-20">
                    <div className="w-16 h-16 rounded-full bg-white shadow-lg border-2 border-[#db9e22] flex items-center justify-center">
                      <span className="text-[#db9e22] text-2xl font-bold">1</span>
                    </div>
                  </div>
                  
                  {/* Mobile circle */}
                  <div className="lg:hidden absolute left-[30px] top-0 transform -translate-x-1/2 z-20">
                    <div className="w-12 h-12 rounded-full bg-white shadow-lg border-2 border-[#db9e22] flex items-center justify-center">
                      <span className="text-[#db9e22] font-bold">1</span>
                    </div>
                  </div>
                  
                  <div className="pl-16 lg:pl-0 lg:text-center">
                    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:border-[#db9e22]/30 transition-all duration-300 hover:shadow-xl lg:mt-16 flex flex-col">
                      <div className="lg:h-16 flex items-center justify-center lg:mb-4">
                        <div className="w-12 h-12 rounded-lg bg-[#db9e22]/10 flex items-center justify-center">
                          <Brain className="w-6 h-6 text-[#db9e22]" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#101010] mb-3">KI-Analyse</h3>
                      <p className="text-gray-600 min-h-[60px] flex items-center">
                        Unsere KI prüft Ihr Unternehmen und findet die passende Web-App Idee
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  {/* Desktop circle */}
                  <div className="hidden lg:flex absolute left-1/2 top-0 -mt-8 transform -translate-x-1/2 z-20">
                    <div className="w-16 h-16 rounded-full bg-white shadow-lg border-2 border-[#db9e22] flex items-center justify-center">
                      <span className="text-[#db9e22] text-2xl font-bold">2</span>
                    </div>
                  </div>
                  
                  {/* Mobile circle */}
                  <div className="lg:hidden absolute left-[30px] top-0 transform -translate-x-1/2 z-20">
                    <div className="w-12 h-12 rounded-full bg-white shadow-lg border-2 border-[#db9e22] flex items-center justify-center">
                      <span className="text-[#db9e22] font-bold">2</span>
                    </div>
                  </div>
                  
                  <div className="pl-16 lg:pl-0 lg:text-center">
                    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:border-[#db9e22]/30 transition-all duration-300 hover:shadow-xl lg:mt-16 flex flex-col">
                      <div className="lg:h-16 flex items-center justify-center lg:mb-4">
                        <div className="w-12 h-12 rounded-lg bg-[#db9e22]/10 flex items-center justify-center">
                          <Users className="w-6 h-6 text-[#db9e22]" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#101010] mb-3">Beratungsgespräch</h3>
                      <p className="text-gray-600 min-h-[60px] flex items-center">
                        Wir besprechen die KI-Vorschläge und planen Ihre individuelle Lösung
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative"
                >
                  {/* Desktop circle */}
                  <div className="hidden lg:flex absolute left-1/2 top-0 -mt-8 transform -translate-x-1/2 z-20">
                    <div className="w-16 h-16 rounded-full bg-white shadow-lg border-2 border-[#db9e22] flex items-center justify-center">
                      <span className="text-[#db9e22] text-2xl font-bold">3</span>
                    </div>
                  </div>
                  
                  {/* Mobile circle */}
                  <div className="lg:hidden absolute left-[30px] top-0 transform -translate-x-1/2 z-20">
                    <div className="w-12 h-12 rounded-full bg-white shadow-lg border-2 border-[#db9e22] flex items-center justify-center">
                      <span className="text-[#db9e22] font-bold">3</span>
                    </div>
                  </div>
                  
                  <div className="pl-16 lg:pl-0 lg:text-center">
                    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:border-[#db9e22]/30 transition-all duration-300 hover:shadow-xl lg:mt-16 flex flex-col">
                      <div className="lg:h-16 flex items-center justify-center lg:mb-4">
                        <div className="w-12 h-12 rounded-lg bg-[#db9e22]/10 flex items-center justify-center">
                          <Code className="w-6 h-6 text-[#db9e22]" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#101010] mb-3">Entwicklung</h3>
                      <p className="text-gray-600 min-h-[60px] flex items-center">
                        Unsere Experten bauen Ihre maßgeschneiderte Web-App
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Step 4 */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative"
                >
                  {/* Desktop circle */}
                  <div className="hidden lg:flex absolute left-1/2 top-0 -mt-8 transform -translate-x-1/2 z-20">
                    <div className="w-16 h-16 rounded-full bg-white shadow-lg border-2 border-[#db9e22] flex items-center justify-center">
                      <span className="text-[#db9e22] text-2xl font-bold">4</span>
                    </div>
                  </div>
                  
                  {/* Mobile circle */}
                  <div className="lg:hidden absolute left-[30px] top-0 transform -translate-x-1/2 z-20">
                    <div className="w-12 h-12 rounded-full bg-white shadow-lg border-2 border-[#db9e22] flex items-center justify-center">
                      <span className="text-[#db9e22] font-bold">4</span>
                    </div>
                  </div>
                  
                  <div className="pl-16 lg:pl-0 lg:text-center">
                    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:border-[#db9e22]/30 transition-all duration-300 hover:shadow-xl lg:mt-16 flex flex-col">
                      <div className="lg:h-16 flex items-center justify-center lg:mb-4">
                        <div className="w-12 h-12 rounded-lg bg-[#db9e22]/10 flex items-center justify-center">
                          <Rocket className="w-6 h-6 text-[#db9e22]" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#101010] mb-3">Fertige Lösung</h3>
                      <p className="text-gray-600 min-h-[60px] flex items-center">
                        Sie erhalten Ihre Web-App, komplett eingerichtet und sofort einsatzbereit
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-md mx-auto text-center mt-20"
            >
              <Button
                size="lg"
                className="bg-[#db9e22] hover:bg-[#e4bb68] text-white font-medium py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => setLocation("/funnel")}
              >
                Jetzt KI-Analyse starten
              </Button>
              <p className="text-gray-500 mt-4 text-sm">
                Kostenlos und unverbindlich
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Failure Section */}
      <section className="py-24 bg-[#101010] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-8">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-1 bg-[#db9e22]/10 rounded-full mb-6">
                <span className="text-[#db9e22] font-semibold text-sm uppercase tracking-wider">
                  Dringender Handlungsbedarf
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Warum jetzt handeln wichtig ist
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Während Sie noch überlegen, nutzen Ihre Wettbewerber bereits moderne Web-Apps,
                um schneller und günstiger zu arbeiten.
              </p>
            </motion.div>

            <div className="mb-16">
              {/* Main Warning Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#151515] rounded-2xl p-10 border border-[#db9e22]/30 shadow-xl mb-12 relative overflow-hidden"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#db9e22]/5 rounded-full -mt-32 -mr-32 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#db9e22]/5 rounded-full -mb-24 -ml-24 blur-2xl"></div>
                
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="mb-8 md:mb-0 md:mr-10 flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-[#101010] rounded-2xl flex items-center justify-center shadow-lg border border-[#db9e22]/20">
                      <AlertTriangleIcon className="w-12 h-12 md:w-16 md:h-16 text-[#db9e22]" />
                    </div>
                  </div>
                  
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      Sie verlieren den Anschluss
                    </h3>
                    <p className="text-xl text-white/80 max-w-xl">
                      Jeder Tag ohne die richtige digitale Lösung kostet Sie wertvolle Zeit, Ressourcen und Marktanteile. Modernisieren Sie jetzt Ihre Geschäftsprozesse.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Cost Factors Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/5 hover:border-[#db9e22]/20 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-[#101010] rounded-lg flex items-center justify-center mr-4">
                      <CreditCardIcon className="w-7 h-7 text-[#db9e22] group-hover:text-[#e4bb68] transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Verlorene Einnahmen</h3>
                  </div>
                  <p className="text-white/70">
                    Ineffiziente Prozesse reduzieren Ihre Kapazität für Neugeschäft und gewinnbringende Projekte
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/5 hover:border-[#db9e22]/20 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-[#101010] rounded-lg flex items-center justify-center mr-4">
                      <Clock className="w-7 h-7 text-[#db9e22] group-hover:text-[#e4bb68] transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Vergeudete Zeit</h3>
                  </div>
                  <p className="text-white/70">
                    Manuelle Prozesse binden Personal, das wertschöpfendere Aufgaben übernehmen könnte
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/5 hover:border-[#db9e22]/20 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-[#101010] rounded-lg flex items-center justify-center mr-4">
                      <Users className="w-7 h-7 text-[#db9e22] group-hover:text-[#e4bb68] transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Wettbewerbsnachteil</h3>
                  </div>
                  <p className="text-white/70">
                    Ihre Konkurrenz verbessert sich täglich durch digitale Optimierung
                  </p>
                </motion.div>
              </div>
            </div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Button 
                size="lg"
                className="bg-[#db9e22] hover:bg-[#e4bb68] text-white text-base md:text-lg py-5 px-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-lg inline-flex items-center"
                onClick={() => setLocation("/funnel")}
              >
                <span>KI-Analyse jetzt starten</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-white/50 mt-4 text-sm">Der erste Schritt zu Ihrer digitalen Transformation</p>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Case Study Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <Container>
          {/* Case Study Header with Visually Distinct Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-[#f0f0f0] rounded-full px-5 py-2 border border-gray-200 mb-6 shadow-sm">
              <div className="w-6 h-6 bg-[#db9e22] rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xs">✓</span>
              </div>
              <span className="font-semibold text-gray-800">CASE STUDY</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#101010] mb-4">
              Ordnex KI-Baudokumentations-App
            </h2>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-2">
              Von manueller Dokumentation zu KI-gestützter Effizienz
            </p>
            
            <a 
              href="https://ord-nex.de" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-[#db9e22] hover:text-[#e4bb68] font-medium transition-colors duration-300"
            >
              <span>ord-nex.de</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

          {/* Visual Overview - Image Grid */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-12 gap-6">
              {/* Main App Preview - Large */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="md:col-span-7 bg-[#101010] rounded-2xl overflow-hidden shadow-xl relative"
              >
                <div className="p-4 pt-10 relative">
                  {/* App Status Bar */}
                  <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-5 py-2 bg-[#101010] text-white/80 text-xs">
                    <div className="flex items-center">
                      <span className="mr-2">Ordnex</span>
                      <div className="w-1.5 h-1.5 bg-[#db9e22] rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="block w-1.5 h-1.5 bg-white/80 rounded-full"></span>
                      <span className="block w-1.5 h-1.5 bg-white/80 rounded-full"></span>
                      <span className="block w-1.5 h-1.5 bg-white/80 rounded-full"></span>
                    </div>
                  </div>
                  
                  {/* Large App Screenshot */}
                  <div className="bg-[#f9f9f9] rounded-lg p-3 shadow-inner">
                    <div className="flex justify-between items-center mb-4 bg-white p-3 rounded-lg shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-[#db9e22]/20 flex items-center justify-center">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 21H9V12.6C9 12.2686 9.26863 12 9.6 12H14.4C14.7314 12 15 12.2686 15 12.6V21Z" stroke="#db9e22" strokeWidth="2"/>
                            <path d="M20.4 21H15V16.1C15 15.7686 15.2686 15.5 15.6 15.5H20.4C20.7314 15.5 21 15.7686 21 16.1V20.4C21 20.7314 20.7314 21 20.4 21Z" stroke="#db9e22" strokeWidth="2"/>
                            <path d="M9 21H3.6C3.26863 21 3 20.7314 3 20.4V16.1C3 15.7686 3.26863 15.5 3.6 15.5H8.4C8.73137 15.5 9 15.7686 9 16.1V21Z" stroke="#db9e22" strokeWidth="2"/>
                            <path d="M12 3L16.5 7.5M12 3L7.5 7.5M12 3V9" stroke="#db9e22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="font-semibold text-gray-800">Neuer Mangel erfassen</span>
                      </div>
                      <div className="text-xs text-gray-500">Bauprojekt: WHS-23-512</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-gray-700 text-sm">Mangel-Analyse</span>
                            <span className="text-sm font-semibold text-[#db9e22]">98%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-[#db9e22] rounded-full" style={{width: "98%"}}></div>
                          </div>
                          <div className="mt-1 text-sm font-medium text-gray-800">Riss im Putz (Fassade)</div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-gray-700 text-sm">Rechtliche Grundlage</span>
                            <span className="text-sm font-semibold text-[#db9e22]">95%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-[#db9e22] rounded-full" style={{width: "95%"}}></div>
                          </div>
                          <div className="mt-1 text-sm font-medium text-gray-800">VOB/B §13 Abs. 1</div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-100 rounded-lg p-3 flex flex-col justify-between">
                        <div>
                          <div className="text-sm font-medium text-gray-800 mb-2">KI-Empfehlung:</div>
                          <p className="text-xs text-gray-600">Mangelkategorie Typ C - Mittel</p>
                          <p className="text-xs text-gray-600">Behebung innerhalb von 14 Tagen erforderlich</p>
                        </div>
                        <div className="mt-2 text-center">
                          <span className="inline-block px-3 py-1 bg-[#db9e22]/10 rounded-full text-xs font-medium text-[#db9e22]">
                            Automatisch klassifiziert
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Side Panels - Challenge, Solution */}
              <div className="md:col-span-5 flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#db9e22]/10 flex items-center justify-center flex-shrink-0">
                      <AlertTriangleIcon className="w-5 h-5 text-[#db9e22]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#101010]">Die Herausforderung</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#db9e22]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-[#db9e22]" />
                      </div>
                      <p className="text-sm text-gray-700">Zeitintensive manuelle Dokumentation von Baumängeln</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#db9e22]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-[#db9e22]" />
                      </div>
                      <p className="text-sm text-gray-700">Fehlende Standardisierung führt zu Rechtsstreitigkeiten</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#db9e22]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-[#db9e22]" />
                      </div>
                      <p className="text-sm text-gray-700">Fachkräftemangel erhöht Druck auf Effizienz</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#db9e22]/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-[#db9e22]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#101010]">Unsere Lösung</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#db9e22]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-[#db9e22]" />
                      </div>
                      <p className="text-sm text-gray-700">KI-gestützte Analyse von Baumängeln per Fotouploads</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#db9e22]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-[#db9e22]" />
                      </div>
                      <p className="text-sm text-gray-700">Automatische Erstellung VOB/BGB-konformer Dokumentation</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#db9e22]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-[#db9e22]" />
                      </div>
                      <p className="text-sm text-gray-700">Zeiteinsparung von 75% bei der Baudokumentation</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-[#101010] rounded-2xl p-8 md:p-10 relative overflow-hidden shadow-xl">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#db9e22]/10 rounded-full -mr-32 -mt-32 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#db9e22]/10 rounded-full -ml-24 -mb-24 blur-2xl"></div>
              
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#db9e22]" />
                  </div>
                </div>
                
                <div>
                  <blockquote className="text-white/90 text-lg md:text-xl mb-6 italic">
                    "Die KI-App hat unsere Baudokumentation revolutioniert. Wir sparen täglich wertvolle Zeit und können uns auf das Bauen konzentrieren. Eine Investition, die sich sofort ausgezahlt hat."
                  </blockquote>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <p className="text-white font-semibold">Geschäftsführer, Ordnex</p>
                      <a 
                        href="https://ord-nex.de" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-[#db9e22] hover:text-[#e4bb68] text-sm inline-flex items-center gap-1 mt-1 transition-colors duration-300"
                      >
                        <span>ord-nex.de</span>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      {Array(5).fill(0).map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#db9e22" stroke="#db9e22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
      
      {/* Final Call To Action Section */}
      <section className="py-28 overflow-hidden relative">
        {/* Modern, dark background with subtle pattern */}
        <div className="absolute inset-0 bg-[#101010] z-0"></div>
        <div 
          className="absolute inset-0 opacity-5 z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 0h2v2H0V0zm4 4h2v2H4V4zm-4 0h2v2H0V4zm8 0h2v2H8V4zm-4 0h2v2H4V4zm8 8h2v2h-2v-2zm0-4h2v2h-2V8zm0-4h2v2h-2V4zm4 4h2v2h-2V8zm4 4h2v2h-2v-2zm-4 0h2v2h-2v-2zm-8 0h2v2H8v-2zm4 0h2v2h-2v-2zm-8 0h2v2H4v-2zm0 4h2v2H4v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        
        {/* Golden accent lighting effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#db9e22]/10 rounded-full blur-[120px] z-0 opacity-60"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#db9e22]/10 rounded-full blur-[120px] z-0 opacity-60"></div>
        
        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Left side - Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Starten Sie jetzt Ihre <span className="text-[#db9e22]">digitale Transformation</span>
                </h2>
                
                <p className="text-white/80 text-lg mb-8 max-w-lg">
                  Mit unserer KI-Analyse finden wir die perfekte Web-App-Lösung für Ihr Unternehmen. Schnell, präzise und maßgeschneidert.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-[#db9e22]" />
                    </div>
                    <span className="text-white">Unverbindliche KI-Analyse in 5 Minuten</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-[#db9e22]" />
                    </div>
                    <span className="text-white">Maßgeschneiderte Lösungsvorschläge</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-[#db9e22]" />
                    </div>
                    <span className="text-white">Professionelle Umsetzung durch Experten</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Right side - Cards with CTA buttons */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-6"
              >
                {/* CTA Card 1 - Primary */}
                <div className="bg-gradient-to-br from-[#db9e22] to-[#e4bb68] rounded-2xl p-1 shadow-lg group transform transition-transform duration-300 hover:scale-[1.02]">
                  <div className="bg-[#151515] rounded-xl p-6 h-full">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white">KI-Analyse starten</h3>
                      <div className="w-10 h-10 rounded-full bg-[#db9e22]/20 flex items-center justify-center">
                        <Brain className="w-5 h-5 text-[#db9e22]" />
                      </div>
                    </div>
                    <p className="text-white/70 mb-6">
                      In nur 5 Minuten erhalten Sie eine maßgeschneiderte KI-Analyse für Ihr Unternehmen
                    </p>
                    <Button 
                      size="lg"
                      className="w-full bg-[#db9e22] hover:bg-[#e4bb68] text-[#101010] font-bold text-base py-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => setLocation("/funnel")}
                    >
                      Jetzt starten
                    </Button>
                  </div>
                </div>
                
                {/* CTA Card 2 - Secondary */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg group transform transition-transform duration-300 hover:scale-[1.02]">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">Beratungsgespräch</h3>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#db9e22]" />
                    </div>
                  </div>
                  <p className="text-white/70 mb-6">
                    Lieber persönlich besprechen? Vereinbaren Sie ein unverbindliches Beratungsgespräch
                  </p>
                  <Button 
                    size="lg"
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-medium text-base py-5 rounded-lg border border-white/20 transition-all duration-300"
                    onClick={() => setLocation("/contact")}
                  >
                    Termin vereinbaren
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}