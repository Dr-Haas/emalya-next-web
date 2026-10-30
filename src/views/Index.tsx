"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import ProductsShowcase from "@/components/ProductsShowcase";
import TechniquesComparison from "@/components/TechniquesComparison";
import TechniqueQuiz from "@/components/TechniqueQuiz";
import ComfortProtectionSection from "@/components/ComfortProtectionSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import PaymentSection from "@/components/PaymentSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";
import Reveal from "@/components/motion/Reveal";
import ReadingProgress from "@/components/motion/ReadingProgress";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <ReadingProgress />
      <Navbar />
      <HeroSection />
      <Reveal>
        <ManifestoSection />
      </Reveal>
      <Reveal>
        <ProductsShowcase />
      </Reveal>
      <Reveal>
        <ComfortProtectionSection />
      </Reveal>
      <Reveal>
        <BeforeAfterSection />
      </Reveal>
      <Reveal>
        <TechniquesComparison />
      </Reveal>
      <Reveal>
        <TechniqueQuiz />
      </Reveal>
      <Reveal>
        <PaymentSection />
      </Reveal>
      <Reveal>
        <SocialSection />
      </Reveal>
      <Footer />
    </div>
  );
};

export default Index;
