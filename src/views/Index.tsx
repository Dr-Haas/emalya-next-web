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

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ManifestoSection />
      <ProductsShowcase />
      <ComfortProtectionSection />
      <BeforeAfterSection />
      <TechniquesComparison />
      <TechniqueQuiz />
      <PaymentSection />
      <SocialSection />
      <Footer />
    </div>
  );
};

export default Index;
