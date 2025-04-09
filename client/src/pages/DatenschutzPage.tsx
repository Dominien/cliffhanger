import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";

export default function DatenschutzPage() {
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
            <h1 className="text-3xl font-bold text-[#1A1F36] mb-8">Datenschutzerklärung</h1>

            <div className="prose prose-gray max-w-none">
              <h2 className="text-xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-lg font-semibold mb-2">Allgemeine Hinweise</h3>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-lg font-semibold mb-2">Datenerfassung auf unserer Website</h3>
              <h4 className="text-base font-semibold mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
              <p className="mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Impressum dieser Website entnehmen.
              </p>

              <h4 className="text-base font-semibold mb-2">Wie erfassen wir Ihre Daten?</h4>
              <p className="mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch 
                beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten 
                (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>

              <h4 className="text-base font-semibold mb-2">Wofür nutzen wir Ihre Daten?</h4>
              <p className="mb-4">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <h4 className="text-base font-semibold mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
              <p className="mb-4">
                Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, 
                Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema 
                Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. 
                Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>

              <h2 className="text-xl font-semibold mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="text-lg font-semibold mb-2">Datenschutz</h3>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften 
                sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-lg font-semibold mb-2">Hinweis zur verantwortlichen Stelle</h3>
              <p className="mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                  Cliffhanger Studios<br />
                  Gurlittstr. 16<br />
                  40233 Düsseldorf<br />
                  Deutschland<br /><br />
                  Telefon: +49 176 81288433<br />
                  E-Mail: info@cliffhanger-studio.de
                </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}