import Hero from "@/components/sections/Hero";
import Solution from "@/components/sections/Solution";
import Services from "@/components/sections/Services";
import CallToAction from "@/components/sections/CallToAction";
import ProblemSolutionSection from "@/components/sections/JungleSection";
import WhyCliffhangerSection from "@/components/sections/WhyCliffhangerSection";
import StepSection from "@/components/sections/StepSection";
import FailureSection from "@/components/sections/FailureSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProblemSolutionSection />
      <WhyCliffhangerSection />
      <StepSection />
      <Services />
      <FailureSection />
      <CallToAction />
    </div>
  );
}