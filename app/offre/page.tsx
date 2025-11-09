'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Gift } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Container, Section } from '@/components/ui'
import {
  ComparisonCards,
  ValueTimeline,
  SocialProofOffre,
  FAQOffre,
  CTAOffreUrgent,
} from '@/components/sections'

export default function OffrePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section - Simplifié */}
        <Section spacing="spacious" className="text-center bg-gradient-to-br from-white via-gray-50 to-white">
          <Container size="narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-blue/20 bg-primary-blue/5 px-4 py-2 mb-6">
                <Gift className="h-4 w-4 text-primary-blue" />
                <span className="text-sm font-semibold text-text-primary">
                  Offres Premium 2025
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 tracking-tight leading-tight">
                Votre site professionnel
                <br />
                <span className="text-gradient">clé en main</span>
              </h1>

              <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
                Du design sur-mesure au déploiement, en passant par le SEO et la formation.
                Tout inclus pour propulser votre business en ligne.
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>150+ clients satisfaits</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Livraison 21 jours max</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Note 4.9/5</span>
                </div>
              </div>
            </motion.div>
          </Container>
        </Section>

        {/* Comparison Cards - 3 plans tarifaires */}
        <ComparisonCards />

        {/* Value Timeline - Parcours client */}
        <ValueTimeline />

        {/* Social Proof - Témoignages + Stats */}
        <SocialProofOffre />

        {/* FAQ - Questions fréquentes */}
        <FAQOffre />

        {/* CTA Final avec urgence */}
        <CTAOffreUrgent />
      </main>
      <Footer />
    </>
  )
}
