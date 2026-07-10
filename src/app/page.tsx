
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import CoursePreviewSection from "@/components/sections/CoursePreviewSection";
import PricingSection from "@/components/sections/PricingSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import { auth } from "@/auth";
import ScrollRevealInit from "@/components/layout/ScrollRevealInit";

export default async function Home() {
  const session = await auth();

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ScrollRevealInit />
      <Navbar session={session} />
      
      <main style={{ flex: 1 }}>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <CoursePreviewSection />
        <PricingSection />
        <SocialProofSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
}
