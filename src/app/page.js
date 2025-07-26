'use client'

import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import RecipesPreviewSection from '@/components/RecipesPreviewSection'
import AboutSection from '@/components/AboutSection'
import BonusSection from '@/components/BonusSection'
import ProblemsSection from '@/components/ProblemsSection'
import BenefitsSection from '@/components/BenefitsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FinalCTASection from '@/components/FinalCTASection'
import GuaranteeSection from '@/components/GuaranteeSection'
import FAQSection from '@/components/FAQSection'

export default function Home() {
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
  )
}