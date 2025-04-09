import { Container } from "@/components/ui/container";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import GuideSection from "@/components/GuideSection";
import PlanSection from "@/components/PlanSection";
import CtaSection from "@/components/CtaSection";
import FailureSection from "@/components/FailureSection";
import VisionSection from "@/components/VisionSection";
import FAQSection from "@/components/FAQSection";
import FinalCallSection from "@/components/FinalCallSection";

export default function LandingPageService() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProblemSection />
      <GuideSection />
      <PlanSection />
      <CtaSection />
      <FailureSection />
      <VisionSection />
      <FAQSection />
      <FinalCallSection />
    </div>
  );
}