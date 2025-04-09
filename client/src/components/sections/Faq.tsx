import { Container } from "@/components/ui/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = () => {
  const faqs = [
    {
      question: "Was macht den Chatbot so besonders?",
      answer: "Unser Chatbot ist vollständig auf Ihr Corporate Design abgestimmt und arbeitet rund um die Uhr. Er beantwortet Kundenanfragen sofort und im Stil Ihres Unternehmens – selbst außerhalb der Geschäftszeiten."
    },
    {
      question: "Wie aufwendig ist die Integration?",
      answer: "Gar nicht aufwendig für Sie! Wir übernehmen die komplette technische Implementation. Von der Einrichtung bis zur Wartung kümmern wir uns um alles, damit Sie sich auf Ihr Kerngeschäft konzentrieren können."
    },
    {
      question: "Wie schnell ist der Chatbot einsatzbereit?",
      answer: "Nach unserem ersten Strategiegespräch können wir den Chatbot in der Regel innerhalb weniger Tage implementieren. Die genaue Dauer hängt von Ihren spezifischen Anforderungen ab."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-muted-foreground">
            Finden Sie Antworten auf die wichtigsten Fragen zu unserem Service.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
