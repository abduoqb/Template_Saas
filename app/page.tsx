import dynamic from 'next/dynamic'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { BentoGrid } from '@/components/sections/BentoGrid'

// Lazy load below-the-fold sections for better performance
const Pricing = dynamic(() => import('@/components/sections/Pricing').then(mod => ({ default: mod.Pricing })), {
  loading: () => <div className="h-96" />,
})
const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="h-96" />,
})
const CTAFinal = dynamic(() => import('@/components/sections/CTAFinal').then(mod => ({ default: mod.CTAFinal })), {
  loading: () => <div className="h-64" />,
})
const Footer = dynamic(() => import('@/components/layout/Footer').then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="h-96" />,
})

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <BentoGrid />
        <Pricing />
        <Testimonials />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
