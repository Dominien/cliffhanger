import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Problem = () => {
  const problems = [
    {
      title: "Komplizierte Setups",
      description: "Die Integration erfordert oft unverständliche technische Schritte, die Ihr Team überfordern."
    },
    {
      title: "Markenkonsistenz",
      description: "Viele Lösungen passen sich nicht an Ihr Corporate Design an, wodurch Ihr Markenauftritt leidet."
    },
    {
      title: "Fehlender Support",
      description: "Statt einer zuverlässigen Rund-um-die-Uhr-Betreuung erleben Sie oft langsame Reaktionszeiten."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#1A1F36] mb-4">
            Haben Sie es auch satt, an technischen Hürden zu scheitern?
          </h2>
          <p className="text-lg text-gray-600">
            Vielleicht haben Sie bereits versucht, einen Chatbot zu integrieren – nur um festzustellen, 
            dass die technische Umsetzung viel komplizierter ist als gedacht.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 h-full bg-white">
                <div className="w-12 h-12 rounded-xl bg-[#00C2FF]/10 flex items-center justify-center mb-6">
                  <AlertCircle className="w-6 h-6 text-[#00C2FF]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A1F36] mb-3">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Problem;