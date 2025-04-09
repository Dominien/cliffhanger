import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Users,
  Calendar,
  ArrowRight,
  Check,
  Image
} from "lucide-react";

const benefits = [
  "Professionelle Foto- und Videoaufnahmen",
  "Flexible Verfügbarkeit nach Bedarf",
  "Persönliche Betreuung & Beratung",
  "Event-Dokumentation & Marketing-Content"
];

const features = [
  {
    icon: Camera,
    title: "Professionelle Fotografie",
    description: "Von Produktaufnahmen bis Unternehmensportraits – wir setzen Ihr Business perfekt in Szene."
  },
  {
    icon: Video,
    title: "Videoproduktion",
    description: "Dynamische Videoinhalte, die Ihre Botschaft überzeugend transportieren."
  },
  {
    icon: Users,
    title: "Persönliche Partnerschaft",
    description: "Ihr kreativer Partner, der Ihr Unternehmen versteht und unterstützt."
  },
  {
    icon: Calendar,
    title: "Flexible Buchung",
    description: "Professionelle Medienproduktion genau dann, wenn Sie sie brauchen."
  }
];

export default function MediaService() {
  const [, setLocation] = useLocation();

  const handleCTAClick = () => {
    setLocation("/funnel");
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
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
                Ihr kreativer Partner
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Professionelle Foto- & Videografie für Ihr Unternehmen
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Setzen Sie Ihr Unternehmen mit hochwertigen Fotos und Videos perfekt in Szene – flexibel und genau dann, wenn Sie uns brauchen.
              </p>
              <Button
                size="lg"
                onClick={handleCTAClick}
                className="bg-[#db9e22] hover:bg-[#c78d1a] text-white"
              >
                Jetzt persönliches Gespräch vereinbaren
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-xl overflow-hidden"
            >
              {/* Placeholder for hero video/image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#db9e22]/20 to-[#272727]/50 flex items-center justify-center">
                <Image className="w-16 h-16 text-white/50" />
                <span className="absolute mt-20 text-white/50">Showcase Video</span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#272727] mb-6">
              Ihr persönlicher Medienpartner
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wir sind mehr als ein Dienstleister – wir sind Ihr kreativer Partner für alle visuellen Herausforderungen.
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
                <h3 className="text-xl font-semibold text-[#272727] mb-4">
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

      {/* Portfolio Preview Section */}
      <section className="py-24 bg-[#272727]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Unsere Arbeiten
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Entdecken Sie eine Auswahl unserer besten Projekte
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.2 }}
                className="aspect-video bg-white/5 rounded-xl overflow-hidden relative group"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image className="w-12 h-12 text-white/30 group-hover:text-white/50 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#fdf6e9]">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#272727] mb-6">
                Ihr Vorteil mit uns
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Profitieren Sie von einem persönlichen Medienpartner, der Ihr Unternehmen versteht und genau dann zur Stelle ist, wenn Sie ihn brauchen.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#db9e22]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#db9e22]" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              {/* Placeholder for benefit section image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#db9e22]/20 to-[#272727]/50 flex items-center justify-center">
                <Image className="w-16 h-16 text-white/50" />
                <span className="absolute mt-20 text-white/50">Feature Image</span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#272727]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Bereit für professionelle Medienproduktion?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Lassen Sie uns in einem persönlichen Gespräch über Ihre Visionen sprechen
            </p>
            <Button
              size="lg"
              onClick={handleCTAClick}
              className="bg-[#db9e22] hover:bg-[#c78d1a] text-white"
            >
              Jetzt kostenloses Beratungsgespräch buchen
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}