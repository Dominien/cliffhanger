import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Was bekomme ich im kostenlosen Call?",
    answer: [
      "Eine exklusive Vorschau deiner Landing Page – Wir präsentieren dir ein maßgeschneidertes Design, das perfekt zu deinem Business passt.",
      "Strategische Marketing-Beratung – Erfahre, wie du deine Landing Page gezielt für mehr Leads & Conversions einsetzen kannst.",
      "KI-gestützte Optimierungsvorschläge – Unsere smarte Technologie liefert datenbasierte Empfehlungen für bessere Performance."
    ]
  },
  {
    question: "Ist der Call wirklich kostenlos & unverbindlich?",
    answer: ["Ja! Du zahlst nichts und hast keine Verpflichtung. Wenn du zufrieden bist, kannst du nach dem Call entscheiden, ob du mit uns weiterarbeiten möchtest."]
  },
  {
    question: "Wie lange dauert der Call?",
    answer: ["Plane ca. 30–45 Minuten ein. Wir gehen effizient auf deine Wünsche ein und präsentieren dir dein individuelles Landing Page Konzept."]
  },
  {
    question: "Wie personalisiert ist die Landing Page Vorschau?",
    answer: ["Wir erstellen keine Standard-Templates. Dein Konzept wird von uns individuell nach deinen Anforderungen entwickelt und an deine Marke & Zielgruppe angepasst."]
  },
  {
    question: "Wie helfen mir KI-gestützte Optimierungen?",
    answer: [
      "Unsere KI analysiert deine Anforderungen und gibt datenbasierte Empfehlungen für:",
      "🚀 Conversion-Optimierung – Platzierung von CTAs, Struktur & Nutzerführung.",
      "🎯 UX-Verbesserungen – Nutzerfreundlichkeit & intuitive Navigation.",
      "📊 Datengetriebene Anpassungen – Basierend auf bewährten Best Practices."
    ]
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1F36] mb-6">
            FAQ – Häufig gestellte Fragen
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={`item-${index}`} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border border-gray-100 transition-shadow duration-200 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="w-full px-8 py-6 hover:no-underline text-xl">
                  <span className="text-left font-semibold text-[#1A1F36] pr-8">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="text-gray-600 space-y-4">
                    {faq.answer.map((paragraph, pIndex) => (
                      <p key={`answer-${index}-${pIndex}`} className="text-lg leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}