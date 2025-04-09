import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCall = () => {
  return (
    <section className="py-24 bg-primary/5">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Jetzt kostenlose Demo anfordern
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Entdecken Sie, wie Ihr Kundenservice 24/7 für Sie arbeitet – ohne technischen Ballast.
          </p>
          <div className="space-y-4">
            <ul className="space-y-2 mb-8">
              <li className="flex items-center justify-center gap-2">
                <ArrowRight className="w-5 h-5 text-primary" />
                <span>Sofortige Kundenbetreuung</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <ArrowRight className="w-5 h-5 text-primary" />
                <span>Nahtlose Integration in Ihr Corporate Design</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <ArrowRight className="w-5 h-5 text-primary" />
                <span>Mehr Zeit für Ihr Kerngeschäft</span>
              </li>
            </ul>
            <Button size="lg" className="w-full md:w-auto">
              Jetzt Demo anfordern
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinalCall;
