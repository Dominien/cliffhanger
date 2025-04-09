import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

const failures = [
  {
    title: "Ladeverzögerungen",
    mainStat: "-7%",
    statDescription: "Conversions pro Sekunde Verzögerung",
    secondaryStat: "53%",
    secondaryDescription: "Absprünge bei 3s mehr Ladezeit",
    detail: "Jede Sekunde Verzögerung kostet Sie Kunden und Umsatz",
  },
  {
    title: "Verpasste Chancen",
    mainStat: "97%",
    statDescription: "suchen online nach lokalen Unternehmen",
    secondaryStat: "70%",
    secondaryDescription: "Abbrüche bei komplizierter Navigation",
    detail: "Ohne optimierte Online-Präsenz gehen Leads verloren",
  },
  {
    title: "Frustrierte Nutzer",
    mainStat: "88%",
    statDescription: "kehren nach schlechter Erfahrung nicht zurück",
    secondaryStat: "2x",
    secondaryDescription: "höhere Absprungrate bei mangelnder UX",
    detail: "Schlechte Nutzererfahrung schadet nachhaltig",
  },
  {
    title: "Ineffektive Ausgaben",
    mainStat: "40%",
    statDescription: "des Marketing-Budgets verpufft",
    secondaryStat: "ROI",
    secondaryDescription: "Verluste ohne Tracking & Optimierung",
    detail: "Fehlende Strategie führt zu Budgetverschwendung",
  },
];

export default function FailureSection() {
  return (
    <section className="py-24 bg-[#f6f6f6] relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#272727] mb-4">
            Fatale Marketingfehler
          </h2>
          <p className="text-lg text-gray-600">
            Diese Fehler kosten Sie täglich Umsatz und Wachstumspotenzial
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {failures.map((failure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Title with animated highlight on hover */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-[#272727] group-hover:text-[#db9e22] transition-colors">
                    {failure.title}
                  </h3>
                </motion.div>

                {/* Main Statistic with Animation */}
                <motion.div
                  className="mb-6"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-3">
                      <motion.span
                        className="text-5xl font-bold text-[#db9e22]"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {failure.mainStat}
                      </motion.span>
                      <span className="text-sm text-gray-600 leading-tight max-w-[160px]">
                        {failure.statDescription}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Secondary Stat with Highlight */}
                <motion.div
                  className="bg-gradient-to-r from-[#272727]/5 to-transparent p-4 rounded-lg mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-semibold text-[#db9e22]">
                      {failure.secondaryStat}
                    </span>
                    <span className="text-sm text-gray-600">
                      {failure.secondaryDescription}
                    </span>
                  </div>
                </motion.div>

                {/* Impact Statement */}
                <motion.p
                  className="text-gray-600 text-sm font-medium pl-3 border-l-2 border-[#db9e22]"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {failure.detail}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#272727] text-lg font-medium mb-4">
            Werden diese Fehler nicht behoben, verliert Ihr Business täglich
            Potenzial.
          </p>

          <p className="text-sm text-gray-500 italic">
            (Alle Zahlen basieren auf branchenüblichen Studien und Erhebungen.)
          </p>
        </div>
      </Container>
    </section>
  );
}