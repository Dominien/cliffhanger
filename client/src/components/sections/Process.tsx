import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Strategie-Session",
      description: "Wir besprechen Ihre Herausforderungen und entwickeln gemeinsam einen Plan, der Ihre Marke perfekt widerspiegelt."
    },
    {
      number: "2",
      title: "Nahtlose Integration",
      description: "Unser Expertenteam implementiert den Chatbot direkt in Ihre Website – maßgeschneidert und im Einklang mit Ihrem Corporate Design."
    },
    {
      number: "3",
      title: "Laufender Support",
      description: "Mit kontinuierlichen Updates und persönlichem Support halten wir Ihren Service stets auf dem neuesten Stand."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            3 Schritte zu Ihrem Rundum-Sorglos-Kundenservice
          </h2>
          <p className="text-lg text-muted-foreground">
            Beratung. Integration. Betreuung. So einfach geht moderne Kundenkommunikation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 h-full">
                <div className="text-4xl font-bold text-primary mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-primary -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;
