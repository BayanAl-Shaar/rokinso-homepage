import { HeroSection } from "@/app/components/hero-section";
import { ProblemSection } from "@/app/components/problem-section";
import { ValueSection } from "@/app/components/value-section";
import { FeaturesSection } from "@/app/components/features-section";
import { ProcessSection } from "@/app/components/process-section";
import { VideoSection } from "@/app/components/video-section";
import { PortfolioSection } from "@/app/components/portfolio-section";
import { PricingSection } from "@/app/components/pricing-section";
import { FAQSection } from "@/app/components/faq-section";
import { FinalCTASection } from "@/app/components/final-cta-section";
import { Footer } from "@/app/components/footer";
import { StickyCTA } from "@/app/components/sticky-cta";
import { Header } from "@/app/components/header";

export default function App() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <div id="hero">
        <HeroSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      {/*<ValueSection />*/}
      <VideoSection />
      <div id="features">
        <FeaturesSection />
      </div>
      {/*<ProcessSection />*/}
      <div id="about">
        {/*<ProblemSection />*/}
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <FAQSection />
      <div id="contact">
        <FinalCTASection />
      </div>
      <Footer />
      
      {/* Sticky CTA Button */}
      <StickyCTA />
    </div>
  );
}
