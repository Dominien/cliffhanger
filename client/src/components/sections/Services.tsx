import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Globe, MessageSquare, Search, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web-Erstellung & Landing Pages",
    description: "Individuelle, conversion-optimierte Websites und Landing Pages, die Besucher in Kunden verwandeln.",
  },
  {
    icon: MessageSquare,
    title: "KI-Chatbot Integration",
    description: "Intelligente Chatbot-Lösungen, die automatisiert Kundenanfragen bearbeiten und deine Lead-Generierung verbessern.",
  },
  {
    icon: Search,
    title: "SEO & Online Marketing",
    description: "Strategien zur Steigerung deiner Sichtbarkeit in Suchmaschinen und nachhaltigem organischem Wachstum.",
  },
  {
    icon: Palette,
    title: "Branding & Webdesign",
    description: "Kreative Markenentwicklung und modernes Design, die deine Identität klar und überzeugend präsentieren.",
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-[#101010] relative overflow-hidden">
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

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unser Leistungsspektrum
          </h2>
          <div className="w-32 h-1 bg-[#db9e22] mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Services Layout */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Service Container */}
                <div className="relative">
                  {/* Hexagonal Background Shape */}
                  <div className="absolute inset-0 bg-white/5 transform -skew-x-12 rounded-xl group-hover:bg-white/10 transition-colors duration-300" />

                  <div className="relative p-8">
                    {/* Icon Container */}
                    <motion.div
                      className="relative mb-6 inline-block"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Glowing Background Effect */}
                      <div className="absolute inset-0 bg-[#db9e22] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />

                      {/* Icon Background */}
                      <div className="relative w-16 h-16 bg-gradient-to-br from-[#db9e22] to-[#e4bb68] p-0.5 rounded-xl transform rotate-45">
                        <div className="w-full h-full bg-[#101010] rounded-xl flex items-center justify-center transform -rotate-45">
                          <service.icon className="w-8 h-8 text-[#db9e22]" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="relative">
                      <motion.h3
                        className="text-2xl font-bold text-white mb-3 group-hover:text-[#db9e22] transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {service.title}
                      </motion.h3>
                      <p className="text-white/80 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;