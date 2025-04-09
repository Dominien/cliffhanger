import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const Approach = () => {
  const steps = [
    {
      title: "Analyse & Strategie",
      description: "Wir beginnen mit einer intensiven Analyse deiner aktuellen Situation und definieren gemeinsam klare Ziele.",
    },
    {
      title: "Konzept & Umsetzung",
      description: "Mit kreativen Ideen und modernem Design setzen wir dein individuelles Konzept um – stets markenkonform und zielgruppenspezifisch.",
    },
    {
      title: "Optimierung & Wachstum",
      description: "Durch kontinuierliche Optimierung und Performance-Monitoring sorgen wir dafür, dass dein Online-Auftritt langfristig erfolgreich bleibt.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#101010] mb-6">
            So erreichen wir deinen Erfolg – Schritt für Schritt
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#db9e22]/10 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[#db9e22]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#101010] mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-[#db9e22]/30"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Approach;
