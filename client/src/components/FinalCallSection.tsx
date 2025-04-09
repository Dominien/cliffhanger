import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { useLocation } from "wouter";

export default function FinalCallSection() {
  const [, setLocation] = useLocation();

  return (
    <section className="relative py-16 bg-[#101010] overflow-hidden">
      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #f6f6f6 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }}
            className="absolute inset-0"
          />
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#db9e22]/10 px-4 py-2 rounded-full mb-8"
          >
            <Clock className="w-4 h-4 text-[#db9e22]" />
            <span className="text-sm font-medium text-[#db9e22]">Limitierte Plätze verfügbar</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight"
          >
            Dein Erfolg wartet nicht – handle jetzt!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Sichere dir deinen kostenlosen, unverbindlichen Call und erhalte live deine maßgeschneiderte Landing Page. Keine Zeit verlieren – starte sofort durch!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative inline-block"
          >
            {/* Pulsing effect behind the button */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-[#db9e22]/20 blur-lg rounded-lg"
            />

            {/* Main button with hover effects */}
            <button 
              onClick={() => setLocation("/funnel")}
              className="relative bg-[#db9e22] hover:bg-[#e4bb68] text-white px-6 py-3 rounded-lg text-base font-medium inline-flex items-center gap-2 transition-all duration-300 hover:translate-y-[-1px] hover:shadow-lg hover:shadow-[#db9e22]/20"
            >
              <span>Jetzt Call buchen</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4 text-white" />
              </motion.div>
            </button>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute -top-12 -right-12 w-24 h-24">
            <div className="absolute inset-0 bg-[#db9e22] opacity-20 blur-2xl rounded-full" />
          </div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16">
            <div className="absolute inset-0 bg-[#db9e22] opacity-10 blur-xl rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}