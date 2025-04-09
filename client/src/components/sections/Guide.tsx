import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

export const Guide = () => {
  const benefits = [
    {
      title: "Nahtlose Integration",
      description: "Wir fügen den Chatbot perfekt in Ihr Corporate Design ein – passend zu Ihren Farben und Ihrer Marke.",
    },
    {
      title: "24/7 Kundenunterstützung",
      description: "Ihr Chatbot antwortet immer im Stil Ihres Unternehmens, rund um die Uhr und an allen Tagen.",
    },
    {
      title: "Technischer Support",
      description: "Nach der Implementierung kümmert sich unser Team kontinuierlich um Updates und Wartungen.",
    }
  ];

  return (
    <section className="py-24 bg-[#101010] relative overflow-hidden">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Wir sind Ihr Full-Service-Partner
          </h2>
          <p className="text-lg text-white/80">
            Wir nehmen Ihnen die technische Last ab, damit Sie sich auf das Wesentliche konzentrieren können – Ihr Geschäft.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20">
                <CheckCircle className="w-10 h-10 text-[#db9e22] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#db9e22] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-[#db9e22] hover:bg-[#c78d1a] text-white"
          >
            Jetzt Demo anfordern
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Guide;