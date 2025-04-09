import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export const Cta = () => {
  const [, setLocation] = useLocation();

  const handleDemoClick = () => {
    setLocation("/funnel");
  };

  return (
    <section className="py-24 bg-primary/5">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Erleben Sie den Unterschied!
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Kontaktieren Sie uns jetzt für eine kostenlose Demo und entdecken Sie, wie wir Ihren Kundenservice revolutionieren.
          </p>
          <div className="space-x-4">
            <Button size="lg" onClick={handleDemoClick}>Demo anfordern</Button>
            <Button size="lg" variant="outline" onClick={handleDemoClick}>Mehr erfahren</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cta;