import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

export const CallToAction = () => {
  const [, setLocation] = useLocation();

  return (
    <section className="py-24 bg-[#101010] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(219, 158, 34, 0.15) 1.5px, transparent 0)`,
            backgroundSize: '32px 32px',
            backgroundPosition: '-16px -16px',
            transform: 'rotate(-2deg) scale(1.2)',
          }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Vereinbare jetzt deinen kostenlosen Beratungscall und erfahre, 
            wie wir dein digitales Potenzial entfalten können.
          </p>
          <Button
            size="lg"
            className="bg-[#db9e22] hover:bg-[#c78d1a] text-white text-lg py-6 px-8"
            onClick={() => setLocation("/funnel")}
          >
            Kostenlosen Call buchen
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default CallToAction;
