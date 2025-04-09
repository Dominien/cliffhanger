import NavBar from "@/components/NavBar";
import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/Problem";
import GuideSection from "@/components/sections/Guide";
import ProcessSection from "@/components/sections/Process";
import CtaSection from "@/components/CtaSection";
import FailureSection from "@/components/FailureSection";
import SuccessSection from "@/components/SuccessSection";
import FaqSection from "@/components/FAQSection";
import FinalCallSection from "@/components/FinalCallSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <div className="bg-white">
          <ProblemSection />
        </div>
        <div className="bg-slate-50">
          <GuideSection />
        </div>
        <div className="bg-white">
          <ProcessSection />
        </div>
        <div className="bg-[#272727]">
          <CtaSection />
        </div>
        <div className="bg-slate-50">
          <FailureSection />
        </div>
        <div className="bg-white">
          <SuccessSection />
        </div>
        <div className="bg-slate-50">
          <FaqSection />
        </div>
        <div className="bg-[#272727]">
          <FinalCallSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}