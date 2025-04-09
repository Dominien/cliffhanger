import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export const Failure = () => {
  const risks = [
    {
      title: "Kundenabwanderung",
      items: [
        "Lange Wartezeiten führen zu Frust",
        "Unpersönliche Betreuung mindert Vertrauen",
        "Schlechte Erfahrungen kosten Wiederholungskäufe"
      ]
    },
    {
      title: "Technische Blockaden",
      items: [
        "Komplizierte Integrationen verzögern den Fortschritt",
        "Zeit- und Ressourcenverschwendung",
        "Unzuverlässiger Service bleibt die Realität"
      ]
    },
    {
      title: "Marktanteile verlieren",
      items: [
        "Konkurrenten nutzen moderne Lösungen",
        "Ihr Markenauftritt wirkt veraltet",
        "Umsatzverluste durch ineffizienten Kundenservice"
      ]
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Das Risiko, nicht zu handeln
          </h2>
          <p className="text-lg text-gray-300">
            Jede Minute des Zögerns kostet Sie Kunden, Zeit und Umsatz – verpassen Sie nicht Ihre Chance auf einen erstklassigen Kundenservice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {risks.map((risk, index) => (
            <Card key={index} className="bg-slate-800 border-none p-6">
              <AlertTriangle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-white">{risk.title}</h3>
              <ul className="space-y-3">
                {risk.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Failure;
