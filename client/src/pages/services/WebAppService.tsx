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
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px',
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
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
                Während Sie noch überlegen, nutzen Ihre Wettbewerber bereits moderne Web-Apps,
                um schneller und günstiger zu arbeiten.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Left Side - Falling Behind Visual */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative flex flex-col justify-center h-[450px] md:h-auto">
                  {/* Mobile Layout - Stacked cards with fixed positioning */}
                  <div className="md:hidden flex flex-col space-y-6 items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 w-full max-w-[280px]">
                      <div className="flex items-center space-x-4">
                        <Rocket className="w-10 h-10 text-[#db9e22] flex-shrink-0" />
                        <span className="text-white text-sm font-semibold">Ihre Wettbewerber gewinnen Marktanteile</span>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 w-full max-w-[280px]">
                      <div className="flex items-center space-x-4">
                        <BanknoteIcon className="w-10 h-10 text-red-500 flex-shrink-0" />
                        <span className="text-white text-sm font-semibold">Verlorenes Potenzial und Umsatz</span>
                      </div>
                    </div>
                    
                    <div className="bg-[#151515] backdrop-blur-sm rounded-xl p-6 shadow-xl border border-[#db9e22]/30 w-full max-w-[280px]">
                      <div className="flex flex-col items-center text-center">
                        <AlertTriangleIcon className="w-14 h-14 text-[#db9e22] mb-3" />
                        <span className="text-white text-base font-semibold">Sie verlieren den Anschluss</span>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 w-full max-w-[280px]">
                      <div className="flex items-center space-x-4">
                        <Clock className="w-10 h-10 text-red-500 flex-shrink-0" />
                        <span className="text-white text-sm font-semibold">Verlorene Zeit und Effizienz</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop Layout - Regular grid layout */}
                  <div className="hidden md:grid md:grid-cols-3 md:gap-8">
                    <div className="col-span-3 flex justify-center mb-8">
                      <div className="w-64 h-64 bg-[#151515] backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[#db9e22]/30">
                        <div className="w-full h-full flex flex-col items-center justify-center">
                          <AlertTriangleIcon className="w-20 h-20 text-[#db9e22] mb-6" />
                          <span className="text-white text-xl font-semibold text-center">Sie verlieren den Anschluss</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 h-full">
                      <div className="flex flex-col items-center justify-center h-full">
                        <Rocket className="w-14 h-14 text-[#db9e22] mb-4" />
                        <span className="text-white text-base font-semibold text-center">Ihre Wettbewerber gewinnen Marktanteile</span>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 h-full">
                      <div className="flex flex-col items-center justify-center h-full">
                        <BanknoteIcon className="w-14 h-14 text-red-500 mb-4" />
                        <span className="text-white text-base font-semibold text-center">Verlorenes Potenzial und Umsatz</span>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 h-full">
                      <div className="flex flex-col items-center justify-center h-full">
                        <Clock className="w-14 h-14 text-red-500 mb-4" />
                        <span className="text-white text-base font-semibold text-center">Verlorene Zeit und Effizienz</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Right Side - Cost of Delay */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-[#151515] p-5 rounded-xl mb-8">
                  <p className="text-xl text-white font-medium">
                    Jeder Tag ohne die richtige digitale Lösung kostet Sie:
                  </p>
                </div>
                
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="bg-[#1a1a1a] rounded-xl p-5 border border-white/5 hover:border-[#db9e22]/20 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-[#db9e22]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#db9e22]/30 transition-colors duration-300">
                        <CreditCardIcon className="w-6 h-6 text-[#db9e22]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Verlorene Einnahmen
                        </h3>
                        <p className="text-white/70">
                          Ineffiziente Prozesse reduzieren Ihre Kapazität für Neugeschäft und gewinnbringende Projekte
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="bg-[#1a1a1a] rounded-xl p-5 border border-white/5 hover:border-[#db9e22]/20 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-[#db9e22]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#db9e22]/30 transition-colors duration-300">
                        <Clock className="w-6 h-6 text-[#db9e22]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Vergeudete Arbeitszeit
                        </h3>
                        <p className="text-white/70">
                          Manuelle Prozesse binden Personal, das wertschöpfendere Aufgaben übernehmen könnte
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="bg-[#1a1a1a] rounded-xl p-5 border border-white/5 hover:border-[#db9e22]/20 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-[#db9e22]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#db9e22]/30 transition-colors duration-300">
                        <Users className="w-6 h-6 text-[#db9e22]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Wettbewerbsnachteil
                        </h3>
                        <p className="text-white/70">
                          Ihre Konkurrenz verbessert sich täglich durch digitale Optimierung
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="pt-8"
                >
                  <Button 
                    size="lg"
                    className="bg-[#db9e22] hover:bg-[#e4bb68] text-white text-base md:text-lg w-full py-5 px-6 md:px-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-lg"
                    onClick={() => setLocation("/funnel")}
                  >
                    KI-Analyse jetzt starten
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Case Study Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-[#db9e22] font-semibold text-sm uppercase tracking-wider mb-4 block">
                Erfolgsgeschichte
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#101010] mb-6">
                Wie wir Ordnex zu digitaler Exzellenz verholfen haben
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Von der Idee zur führenden KI-Lösung für die Baudokumentation
              </p>
            </motion.div>

            {/* Case Study Content */}
            <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
              {/* Left Side - App Image Mockup */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden shadow-2xl relative"
              >
                <div className="bg-gradient-to-br from-[#101010] to-[#333] p-4 pt-12 relative">
                  {/* App Status Bar */}
                  <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-2 text-white/80 text-xs">
                    <span>09:41</span>
                    <div className="flex items-center gap-1">
                      <span>4G</span>
                      <div className="h-3 w-4 relative">
                        <div className="absolute bottom-0 left-0 w-1 h-1 bg-white/80 rounded-sm"></div>
                        <div className="absolute bottom-0 left-1.5 w-1 h-1.5 bg-white/80 rounded-sm"></div>
                        <div className="absolute bottom-0 left-3 w-1 h-2 bg-white/80 rounded-sm"></div>
                      </div>
                      <div className="h-3 w-6 relative">
                        <div className="absolute top-0 right-0 w-5 h-2.5 border border-white/80 rounded-sm"></div>
                        <div className="absolute top-0 right-0 w-3 h-2.5 bg-white/80 rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* App Screenshot Content */}
                  <div className="bg-white rounded-lg p-4">
                    <div className="bg-gray-100 rounded-lg p-4 mb-4">
                      <h4 className="text-lg font-bold mb-2">KI-Analyse</h4>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">Mangel-Typ</span>
                        <span className="font-semibold">98%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full mb-4">
                        <div className="h-2 bg-[#db9e22] rounded-full" style={{ width: '98%' }}></div>
                      </div>
                      <p className="text-gray-800 font-medium">Riss in Putz</p>
                      
                      <div className="flex justify-between mt-4 mb-2">
                        <span className="text-gray-700">Rechtsbasis</span>
                        <span className="font-semibold">92%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full mb-4">
                        <div className="h-2 bg-[#db9e22] rounded-full" style={{ width: '92%' }}></div>
                      </div>
                      <p className="text-gray-800 font-medium">VOB/B §13</p>
                      
                      <div className="flex justify-between mt-4 mb-2">
                        <span className="text-gray-700">Schweregrad</span>
                        <span className="font-semibold">87%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full mb-4">
                        <div className="h-2 bg-[#db9e22] rounded-full" style={{ width: '87%' }}></div>
                      </div>
                      <p className="text-gray-800 font-medium">Mittel (3/5)</p>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-[#db9e22] font-semibold mb-1">Analyse abgeschlossen</p>
                      <p className="text-sm text-gray-600">In Sekunden klassifiziert!</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Right Side - Challenge & Solution */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-[#101010] mb-4">Die Herausforderung</h3>
                  <p className="text-gray-700 mb-6">
                    Ordnex benötigte eine digitale Lösung, um die zeitaufwändige und fehleranfällige Dokumentation von Baumängeln zu revolutionieren. Das Unternehmen suchte nach einer Möglichkeit, diesen Prozess zu digitalisieren und durch KI zu optimieren.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#db9e22]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-[#db9e22]" />
                      </div>
                      <span className="text-gray-700">Bauexperten verbringen zu viel Zeit mit Papierkram</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#db9e22]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-[#db9e22]" />
                      </div>
                      <span className="text-gray-700">Mangelnde Standardisierung bei der Dokumentation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#db9e22]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-[#db9e22]" />
                      </div>
                      <span className="text-gray-700">Rechtliche Risiken durch unvollständige Nachweise</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#101010] mb-4">Unsere Lösung</h3>
                  <p className="text-gray-700 mb-6">
                    Wir haben für Ordnex eine maßgeschneiderte Web-App mit integrierter KI entwickelt, die Baumängel automatisch analysiert und rechtssichere Dokumentationen erstellt.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#db9e22]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-[#db9e22]" />
                      </div>
                      <span className="text-gray-700">KI-gestützte Analyse von Baumängeln per Foto</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#db9e22]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-[#db9e22]" />
                      </div>
                      <span className="text-gray-700">VOB/BGB-konforme Dokumentationserstellung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#db9e22]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-[#db9e22]" />
                      </div>
                      <span className="text-gray-700">Benutzerfreundliche Web-App mit mobiler Optimierung</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
            
            {/* Results and Testimonial */}
            <div className="bg-[#f8f9fa] rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Results */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-[#101010]">Ergebnisse</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h4 className="text-[#db9e22] text-3xl font-bold mb-2">75%</h4>
                      <p className="text-gray-700">Zeitersparnis bei der Dokumentation</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h4 className="text-[#db9e22] text-3xl font-bold mb-2">98%</h4>
                      <p className="text-gray-700">Genauigkeit der KI-Analysen</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h4 className="text-[#db9e22] text-3xl font-bold mb-2">3x</h4>
                      <p className="text-gray-700">Schnellere Projektabwicklung</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h4 className="text-[#db9e22] text-3xl font-bold mb-2">89%</h4>
                      <p className="text-gray-700">Reduzierte Rechtsstreitigkeiten</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Right Side - Testimonial */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-xl p-8 shadow-lg relative"
                >
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#db9e22] rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <blockquote className="text-gray-700 italic mb-6">
                    "Cliffhanger Studios hat unsere Vision perfekt umgesetzt. Die Web-App mit KI-Integration hat die Art und Weise, wie wir Baumängel dokumentieren, komplett revolutioniert. Unsere Kunden sparen jetzt täglich wertvolle Zeit und können sich auf das konzentrieren, was wirklich zählt: das Bauen. Die Zusammenarbeit war professionell, schnell und äußerst zielgerichtet - genau das, was wir gesucht haben."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#f0f0f0] flex items-center justify-center text-[#101010] font-bold text-xl">
                      M
                    </div>
                    <div>
                      <h4 className="font-bold text-[#101010]">Michael Roth</h4>
                      <p className="text-gray-600 text-sm">Geschäftsführer, Ordnex GmbH</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Final Call To Action Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#db9e22]/10 to-[#db9e22]/30 z-0"></div>
        <div className="absolute inset-0 backdrop-blur-sm z-0"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#db9e22]/20 rounded-full blur-3xl -mr-40 -mt-40 z-0"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#db9e22]/20 rounded-full blur-3xl -ml-40 -mb-40 z-0"></div>
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Starten Sie jetzt Ihre digitale Transformation
            </h2>
            
            {/* Main CTA Button with Glow Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 relative"
            >
              <Button 
                size="lg"
                className="relative bg-[#db9e22] hover:bg-[#e4bb68] text-white text-lg md:text-xl py-6 px-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-lg"
                onClick={() => setLocation("/funnel")}
              >
                KI-Analyse starten - Dauert nur 5 Minuten
              </Button>
              <div className="absolute inset-0 -z-10 bg-[#db9e22] blur-xl rounded-full opacity-40 scale-110 animate-pulse"></div>
            </motion.div>
            
            {/* Divider with Text */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-white/20 w-8"></div>
              <p className="text-white/70 font-medium">oder</p>
              <div className="h-px bg-white/20 w-8"></div>
            </div>
            
            {/* Secondary CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                size="lg"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 text-lg md:text-xl py-6 px-10 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg"
                onClick={() => setLocation("/contact")}
              >
                Beratungsgespräch vereinbaren
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}