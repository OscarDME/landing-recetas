"use client";

import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import RecipesPreviewSection from "@/components/RecipesPreviewSection";
import AboutSection from "@/components/AboutSection";
import BonusSection from "@/components/BonusSection";
import ProblemsSection from "@/components/ProblemsSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import { track } from "./fpixel";

export default function Home() {
  useEffect(() => {
    // Dispara PageView SOLO una vez
    if (typeof window !== "undefined" && !window.__fbPageViewFired) {
      window.__fbPageViewFired = true;
      if (window.fbq) window.fbq("track", "PageView");
    }
    // Marca que vieron la oferta
    track("ViewContent");
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <RecipesPreviewSection />
      <AboutSection />
      <BonusSection />
      <ProblemsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FinalCTASection />
      <GuaranteeSection />
      <FAQSection />
    </main>
  );
}
