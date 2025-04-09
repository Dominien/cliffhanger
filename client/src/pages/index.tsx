import HeroSection from "@/components/sections/Hero";
import JungleSection from "@/components/sections/JungleSection";
import StepSection from "@/components/sections/StepSection";
import GuideSection from "@/components/GuideSection";
import VisionSection from "@/components/VisionSection";
import PlanSection from "@/components/PlanSection";
import ContactSection from "@/components/ContactSection";

export default function IndexPage() {
  return (
    <main>
      <HeroSection />
      <JungleSection />
      <StepSection />
      <GuideSection />
      <VisionSection />
      <PlanSection />
      <ContactSection />
    </main>
  );
}
