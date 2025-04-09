import { motion } from "framer-motion";
import { X } from "lucide-react";

const failures = [
  {
    title: "Verlorene Conversions",
    description: "Jede Sekunde ohne optimierte Seite kostet dich Kunden."
  },
  {
    title: "Höhere Werbekosten",
    description: "Ohne Performance-Seiten verpufft dein Budget."
  },
  {
    title: "Wachstumsbremse",
    description: "Während du wartest, gewinnen deine Wettbewerber."
  }
];

export default function FailureSection() {
  return (
    <section className="py-24 bg-[#f6f6f6] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(219, 158, 34, 0.05) 1.5px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#db9e22] font-semibold text-sm uppercase tracking-wider mb-4">⚠️ Achtung</span>
          <h2 className="text-4xl font-bold text-[#272727] mb-6">
            Warte nicht – jeder Tag kostet dich Kunden.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ohne eine optimierte Landing Page verlierst du wertvolle Leads & Umsatz.
          </p>
        </motion.div>

        <div className="relative">
          <div className="md:grid grid-cols-3 gap-8 relative">
            {/* Connection line - now a single gradient line */}
            <div className="hidden md:block absolute top-24 left-[16.666%] right-[16.666%] h-0.5 bg-gradient-to-r from-transparent via-[#db9e22]/20 to-transparent" />

            {failures.map((failure, index) => (
              <motion.div
                key={failure.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative mb-8 md:mb-0"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#db9e22]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon and number */}
                  <div className="relative flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#db9e22]/10 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <X className="w-7 h-7 text-[#db9e22]" />
                    </div>
                    <span className="text-3xl font-bold text-[#db9e22]/20 group-hover:text-[#db9e22]/30 transition-colors">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-[#272727] mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {failure.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:translate-x-1 transition-transform duration-300 delay-75">
                      {failure.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}