import { SiGoogleads, SiGoogleanalytics } from "react-icons/si";
import { FaShieldAlt, FaLock, FaAward, FaCheckCircle } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useEffect, useState } from "react";

const logos = [
  { icon: FaShieldAlt, name: "GDPR/DSGVO-Konform", color: "#4CAF50" },
  { icon: FaLock, name: "SSL/TLS-Konform", color: "#2196F3" },
  { icon: SiGoogleads, name: "Google Ads", color: "#4285F4" },
  { icon: SiGoogleanalytics, name: "Google Analytics", color: "#E37400" },
  { icon: FaAward, name: "Google Partner", color: "#4285F4" },
  { 
    icon: MdLocationOn, 
    name: "Made in Germany",
    colors: ["#000000", "#DD0000", "#FFCE00"]
  },
  { icon: FaCheckCircle, name: "Zertifizierte Agentur", color: "#4CAF50" },
];

export default function LogoSlider() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Create three sets of logos for a smoother infinite scroll
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-6 mt-12">
      <div 
        className={`flex ${isMobile ? 'animate-scroll-mobile' : 'animate-scroll-desktop'}`}
        style={{
          width: `${logos.length * 3 * 200}px`
        }}
      >
        {allLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-8 shrink-0"
          >
            {logo.colors ? (
              <div className="relative w-7 h-7">
                <MdLocationOn className="w-7 h-7 absolute" style={{ color: logo.colors[0] }} />
                <MdLocationOn className="w-7 h-7 absolute" style={{ color: logo.colors[1], clipPath: 'inset(33% 0 33% 0)' }} />
                <MdLocationOn className="w-7 h-7 absolute" style={{ color: logo.colors[2], clipPath: 'inset(66% 0 0 0)' }} />
              </div>
            ) : (
              <logo.icon className="w-7 h-7" style={{ color: logo.color }} />
            )}
            <span className="text-base font-medium whitespace-nowrap text-white/80">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}