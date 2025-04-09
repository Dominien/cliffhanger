import { Clock, MessageSquare, MousePointer, Settings } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Langsame Ladezeiten",
    description: "Jede Sekunde Verzögerung senkt die Conversion-Rate."
  },
  {
    icon: MessageSquare,
    title: "Unklare Message",
    description: "Ohne klare Kommunikation verlierst du potenzielle Kunden."
  },
  {
    icon: MousePointer,
    title: "Fehlende Call-to-Actions",
    description: "Ohne gezielte CTAs wird dein Traffic nicht genutzt."
  },
  {
    icon: Settings,
    title: "Komplizierte Umsetzung",
    description: "Technische Hürden machen die Optimierung oft schwierig."
  }
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-[#f6f6f6]">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#272727] mb-6">
            Warum performen viele Landing Pages nicht?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ohne klares Design, Strategie und Optimierung bleibt dein Erfolg auf der Strecke.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="bg-[#db9e22] p-4 rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <problem.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-[#272727] mb-3 group-hover:text-[#db9e22] transition-colors">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}