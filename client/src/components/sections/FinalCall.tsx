import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCall = () => {
  return (
    <section className="py-24 bg-primary/5">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bereit für deine Website in 7 Tagen?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Während andere Monate brauchen, liefern wir in nur 7 Tagen – damit du sofort durchstarten kannst.
          </p>
          <div className="space-y-4">
            <ul className="space-y-2 mb-8">
              <li className="flex items-center justify-center gap-2">
                <ArrowRight className="w-5 h-5 text-primary" />
                <span>In nur 7 Tagen online</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <ArrowRight className="w-5 h-5 text-primary" />
                <span>Professionelles Design nach deinen Wünschen</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <ArrowRight className="w-5 h-5 text-primary" />
                <span>Fixpreis ohne versteckte Kosten</span>
              </li>
            </ul>
            <Button size="lg" className="w-full md:w-auto">
              In 7 Tagen online gehen
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinalCall;
