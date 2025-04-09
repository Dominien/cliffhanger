import { Link } from "wouter";
import { 
  Mail,
  LayoutTemplate,
  Camera,
  MessageSquare,
  FileText,
  Shield,
  BookOpen
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #272727 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/">
              <a className="inline-block">
                <img 
                  src="/CliffhangerLogoBW.svg" 
                  alt="Cliffhanger Studios Logo" 
                  className="h-8 w-auto"
                />
              </a>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cliffhanger Studios ist Ihr Partner für digitale Transformation. 
              Wir verbinden kreatives Design mit modernster Technologie.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#db9e22]">Leistungen</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/landing-page">
                  <a className="group flex items-center text-gray-600 hover:text-[#db9e22] transition-colors">
                    <LayoutTemplate className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                    Landing Page Service
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services/media">
                  <a className="group flex items-center text-gray-600 hover:text-[#db9e22] transition-colors">
                    <Camera className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                    Foto & Video Service
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services/ai-chatbot">
                  <a className="group flex items-center text-gray-600 hover:text-[#db9e22] transition-colors">
                    <MessageSquare className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                    KI-Chatbot Service
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#db9e22]">Rechtliches</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/impressum">
                  <a className="group flex items-center text-gray-600 hover:text-[#db9e22] transition-colors">
                    <FileText className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                    Impressum
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/datenschutz">
                  <a className="group flex items-center text-gray-600 hover:text-[#db9e22] transition-colors">
                    <Shield className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                    Datenschutz
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/agb">
                  <a className="group flex items-center text-gray-600 hover:text-[#db9e22] transition-colors">
                    <BookOpen className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                    AGB
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#db9e22]">Kontakt</h3>
            <div className="space-y-4">
              <a 
                href="mailto:info@cliffhanger-studios.de"
                className="group flex items-center text-gray-600 hover:text-[#db9e22] transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                info@cliffhanger-studios.de
              </a>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wir freuen uns darauf, von Ihnen zu hören und Ihre Vision gemeinsam umzusetzen.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 text-center md:text-left text-sm text-gray-500">
          © {new Date().getFullYear()} Cliffhanger Studios. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}