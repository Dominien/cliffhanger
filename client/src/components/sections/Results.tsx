import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

export const Results = () => {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-[#101010] mb-6">
              Ergebnisse, die für sich sprechen
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Unsere digitalen Lösungen steigern nicht nur die Sichtbarkeit, 
              sondern auch die Performance. Unternehmen, die mit uns arbeiten, 
              profitieren von höheren Conversion-Raten, verbessertem Kundenengagement 
              und nachhaltigem Wachstum. Wir liefern maßgeschneiderte Konzepte, 
              die messbare Erfolge erzielen – von der ersten Analyse bis zur 
              finalen Optimierung.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Results;
