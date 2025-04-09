import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";

export default function AGBPage() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl font-bold text-[#1A1F36] mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

            <div className="prose prose-gray max-w-none">
              <h2 className="text-xl font-semibold mb-4">1. Geltungsbereich</h2>
              <p className="mb-4">
                Diese AGB gelten für sämtliche Angebote und Leistungen, die von Cliffhanger Studios über die Website www.cliffhanger-studios.de angeboten werden. Das Leistungsspektrum umfasst unter anderem digitale Transformationsdienstleistungen, Beratungsgespräche, Strategieentwicklung, Web-Erstellung, Landing Pages, Foto- & Videoproduktionen, KI-Chatbot-Integration, SEO, Online-Marketing sowie Branding- und Webdesign-Leistungen. Abweichende oder ergänzende Bedingungen des Kunden finden keine Anwendung, sofern nicht ausdrücklich und schriftlich etwas anderes vereinbart wurde.
              </p>

              <h2 className="text-xl font-semibold mb-4">2. Leistungsbeschreibung, Kostenlosigkeit und Unverbindlichkeit</h2>
              <p className="mb-4">Cliffhanger Studios bietet sowohl kostenfreie als auch kostenpflichtige Leistungen an.</p>
              <p className="mb-2"><strong>Kostenfreie Leistungen:</strong></p>
              <p className="mb-4">Leistungen wie der kostenlose Strategie-Call dienen ausschließlich zu Informations- und Demonstrationszwecken und begründen keinerlei vertragliche Verpflichtung.</p>
              <p className="mb-2"><strong>Kostenpflichtige Leistungen:</strong></p>
              <p className="mb-4">Für die Erbringung kostenpflichtiger Leistungen (z. B. Web-Erstellung, Foto- & Videoproduktion, KI-Chatbot-Integration etc.) kommt ein Vertrag erst durch eine individuelle, schriftliche Vereinbarung oder durch Annahme eines verbindlichen Angebots zustande.</p>
              <p className="mb-4">Die jeweils konkreten Leistungsbeschreibungen, Preise und Konditionen ergeben sich aus den auf der Website veröffentlichten Informationen sowie den zwischen Cliffhanger Studios und dem Kunden geschlossenen Verträgen.</p>

              <h2 className="text-xl font-semibold mb-4">3. Zustandekommen von Verträgen</h2>
              <p className="mb-4">
                Die Inanspruchnahme kostenfreier Leistungen erfolgt informell und ohne vertragliche Bindung. Für kostenpflichtige Leistungen kommt ein rechtsverbindlicher Vertrag erst durch die Annahme eines Angebots oder den Abschluss eines schriftlichen Vertrages zustande.
              </p>

              <h2 className="text-xl font-semibold mb-4">4. Pflichten des Kunden</h2>
              <p className="mb-4">
                Der Kunde verpflichtet sich, bei der Buchung und Inanspruchnahme der Leistungen wahrheitsgemäße, vollständige und aktuelle Angaben zu machen. Ferner hat der Kunde alle erforderlichen technischen und organisatorischen Voraussetzungen (z. B. stabile Internetverbindung, funktionsfähige Endgeräte) für die Durchführung von Online-Calls und digitalen Übertragungen sicherzustellen. Der Kunde ist ferner verpflichtet, bei Bedarf aktiv an der Leistungsumsetzung mitzuwirken (z. B. Bereitstellung von Inhalten, Feedback während Design-Reviews).
              </p>

              <h2 className="text-xl font-semibold mb-4">5. Haftung</h2>
              <p className="mb-4">
                Cliffhanger Studios erbringt die angebotenen Leistungen mit größtmöglicher Sorgfalt. Eine Garantie für den wirtschaftlichen Erfolg oder spezifische Resultate wird jedoch nicht übernommen, es sei denn, es wurde ausdrücklich etwas anderes schriftlich vereinbart.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Bei Vorsatz oder grober Fahrlässigkeit haftet Cliffhanger Studios unbeschränkt.</li>
                <li className="mb-2">Bei leichter Fahrlässigkeit haftet Cliffhanger Studios nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) und beschränkt sich auf den vertragstypischen, vorhersehbaren Schaden.</li>
                <li>Für technische Störungen, Verzögerungen, Unterbrechungen oder Einflüsse höherer Gewalt wird keine Haftung übernommen.</li>
              </ul>

              <h2 className="text-xl font-semibold mb-4">6. Kosten, Zahlungsbedingungen und Abrechnung</h2>
              <p className="mb-4">
                Sofern kostenpflichtige Leistungen in Anspruch genommen werden, gelten die jeweils zum Zeitpunkt der Leistungserbringung veröffentlichten Preise und die individuell vereinbarten Zahlungsmodalitäten.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Rechnungen sind, sofern nicht anders vereinbart, ohne Abzug innerhalb der auf der Rechnung genannten Frist zu begleichen.</li>
                <li className="mb-2">Etwaige Preisänderungen werden dem Kunden rechtzeitig mitgeteilt.</li>
                <li>Etwaige Zusatzleistungen, die während der Projektumsetzung vereinbart werden, sind gesondert zu vergüten.</li>
              </ul>

              <h2 className="text-xl font-semibold mb-4">7. Datenschutz</h2>
              <p className="mb-4">
                Die Verarbeitung personenbezogener Daten erfolgt ausschließlich gemäß der Datenschutzerklärung von Cliffhanger Studios, die unter www.cliffhanger-studios.de/datenschutz abrufbar ist. Mit der Übermittlung von Daten über Kontakt- oder Buchungsformulare willigt der Kunde in die Speicherung und Verarbeitung seiner personenbezogenen Daten im Rahmen der Vertragsabwicklung ein.
              </p>

              <h2 className="text-xl font-semibold mb-4">8. Urheber- und Nutzungsrechte</h2>
              <p className="mb-4">
                Alle im Rahmen der Leistungen erstellten Inhalte, Designs, Konzepte und Werke bleiben grundsätzlich Eigentum von Cliffhanger Studios, sofern nicht ausdrücklich schriftlich etwas anderes vereinbart wurde. Dem Kunden werden – soweit vertraglich vorgesehen – einfache, nicht übertragbare Nutzungsrechte eingeräumt. Eine weitergehende Übertragung von Rechten bedarf der schriftlichen Zustimmung von Cliffhanger Studios.
              </p>

              <h2 className="text-xl font-semibold mb-4">9. Widerrufsrecht</h2>
              <p className="mb-4">
                Sofern Verbraucher außerhalb von Geschäftsräumen einen Vertrag abschließen, gelten die gesetzlichen Widerrufsrechte. Die Einzelheiten hierzu ergeben sich aus der jeweils gültigen Widerrufsbelehrung, die dem Kunden vor Vertragsschluss separat mitgeteilt wird.
              </p>

              <h2 className="text-xl font-semibold mb-4">10. Schlussbestimmungen</h2>
              <p className="mb-4">
                Es gilt ausschließlich das Recht der Bundesrepublik Deutschland. Sollte eine Bestimmung dieser AGB unwirksam sein oder werden, so bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der unwirksamen Bestimmung gilt die gesetzliche Regelung.
              </p>
              <p className="mb-4">
                Ausschließlicher Gerichtsstand für alle Streitigkeiten aus dem Zusammenhang mit diesen AGB ist – soweit gesetzlich zulässig – der Geschäftssitz von Cliffhanger Studios.
              </p>

              <p className="text-sm text-gray-600 mt-8">
                Stand: 19. Februar 2025
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}