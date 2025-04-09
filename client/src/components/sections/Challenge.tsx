import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

export const Challenge = () => {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-[#101010] mb-6">
              Fühlst du dich im digitalen Dschungel verloren?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Viele Unternehmen kämpfen mit veralteten Websites, ineffizienten 
              Kommunikationskanälen und einer unscharfen Markenpräsenz – und 
              verpassen so wertvolle Chancen im Online-Business.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Challenge;
