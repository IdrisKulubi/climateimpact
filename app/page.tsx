import { Hero } from '@/components/shared/home/hero'
import { ImpactSection } from '@/components/shared/home/impact-section'
import { SolutionsSection } from '@/components/shared/home/solutions-section'
import { Navbar } from '@/components/shared/layout/navbar'
import { CtaSection } from '@/components/shared/home/cta-section'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ImpactSection />
      <SolutionsSection />
      <CtaSection />
    </main>
  )
}