import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const Success = () => {
  const benefits = [
    {
      title: "Mehr zufriedene Kunden",
      description: "Ihre Kunden erhalten sofort persönliche Hilfe, bauen Vertrauen auf und kehren gerne wieder."
    },
    {
      title: "Weniger technische Sorgen",
      description: "Wir übernehmen alles – von der Planung über die Integration bis zur dauerhaften Betreuung."
    },
    {
      title: "Mehr Zeit für das Wesentliche",
      description: "Während wir Ihren Kundenservice auf Hochglanz bringen, können Sie sich voll auf Ihr Kerngeschäft konzentrieren."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Was bedeutet das für Sie?
          </h2>
          <p className="text-lg text-muted-foreground">
            Erleben Sie, wie einfach exzellenter Kundenservice sein kann.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CheckCircle className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Success;
