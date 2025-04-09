import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";

export default function ImpressumPage() {
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
            <h1 className="text-3xl font-bold text-[#1A1F36] mb-8">Impressum</h1>

            <div className="prose prose-gray max-w-none">
              <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="mb-4">
                Cliffhanger Studios<br />
                Niruchan Thanabalasingam<br />
                Gurlittstr. 16<br />
                40233 Düsseldorf<br />
                Deutschland
              </p>

              <h3 className="text-lg font-semibold mb-2">Öffnungszeiten</h3>
              <p className="mb-4">
                Mo. – Fr. von 10:00 bis 18:00 Uhr
              </p>

              <h3 className="text-lg font-semibold mb-2">Kontakt</h3>
              <p className="mb-4">
                Telefon: +49 176 81288433<br />
                E-Mail: info@cliffhanger-studio.de<br />
                Website: www.cliffhanger-studio.de
              </p>

              <h3 className="text-lg font-semibold mb-2">Vertretungsberechtigter Geschäftsführer</h3>
              <p className="mb-4">
                Niruchan Thanabalasingam
              </p>

              <h2 className="text-xl font-semibold mb-4 mt-8">Streitschlichtung</h2>
              <p className="mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
                <a href="https://ec.europa.eu/consumers/odr" className="text-[#00C2FF] hover:text-[#00A8E6]" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr
                </a><br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>

              <p className="mb-8">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h2 className="text-xl font-semibold mb-4">Haftung für Inhalte</h2>
              <p className="mb-8">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder 
                Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
                Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten 
                Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir 
                diese Inhalte umgehend entfernen.
              </p>

              <h2 className="text-xl font-semibold mb-4">Haftung für Links</h2>
              <p className="mb-8">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die 
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente 
                inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer 
                Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
                Links umgehend entfernen.
              </p>

              <h2 className="text-xl font-semibold mb-4">Urheberrecht</h2>
              <p className="mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb 
                der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. 
                Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen 
                Gebrauch gestattet.
              </p>
              <p className="mb-4">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem 
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. 
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}