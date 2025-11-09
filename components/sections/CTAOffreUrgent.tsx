'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock, Gift, Shield, CheckCircle2, Zap } from 'lucide-react'
import { Button } from '@/components/ui'

const urgencyFeatures = [
  { icon: Clock, text: 'Plus que 3 places disponibles ce mois-ci' },
  { icon: Gift, text: 'Bonus 300€ offerts (expire bientôt)' },
  { icon: Shield, text: 'Garantie satisfait ou remboursé 30 jours' },
]

const guarantees = [
  'Livraison garantie sous 21 jours',
  'Support prioritaire 90 jours',
  'Code source fourni',
  'Zéro frais caché',
]

export function CTAOffreUrgent() {
  return (
    <section className="relative overflow-hidden px-6 py-20">
      {/* Static Background */}
      <div className="via-primary-purple absolute inset-0 bg-gradient-to-br from-primary-blue to-primary-blue opacity-95" />
      <div className="bg-grid-white absolute inset-0 opacity-5" />

      <div className="container relative z-10 mx-auto max-w-5xl">
        <div className="text-center text-white animate-fade-in">
          {/* Urgency Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-5 py-2.5 backdrop-blur-sm">
            <Zap size={18} className="text-yellow-300" />
            <span className="text-sm font-semibold">
              🔥 Offre limitée - Plus que 3 places disponibles en Décembre 2025
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Prêt à transformer votre
            <br />
            <span className="text-yellow-300">présence en ligne ?</span>
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-white/90 md:text-2xl">
            Rejoignez les 150+ entrepreneurs qui ont choisi notre expertise pour propulser leur
            business en ligne
          </p>

          {/* Urgency Features */}
          <div className="mx-auto mb-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            {urgencyFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-card-lg border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
                    <Icon size={20} />
                  </div>
                  <span className="text-left text-sm font-semibold">{feature.text}</span>
                </div>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/demarrer-projet">
              <Button
                variant="primary"
                size="lg"
                className="group bg-white px-8 py-6 text-lg text-primary-blue shadow-soft-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)]"
              >
                🚀 Démarrer mon projet maintenant
                <ArrowRight className="h-6 w-6 transition-transform duration-micro group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="glass"
                size="lg"
                className="bg-red-primary border-0 px-8 py-6 text-lg text-white shadow-soft hover:shadow-soft-lg"
              >
                💬 Discuter avec un expert
              </Button>
            </Link>
          </div>

          {/* Guarantees Grid */}
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-white/90">
                <CheckCircle2 size={18} className="flex-shrink-0 text-green-300" />
                <span className="text-left">{guarantee}</span>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <p className="mt-8 text-sm text-white/70">
            ⏱️ Réponse sous 24h • 💰 Devis gratuit et sans engagement • 🔒 Paiement 100% sécurisé
          </p>

          {/* Urgency Timer Visual */}
          <div className="mx-auto mt-12 max-w-2xl rounded-card-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <p className="mb-3 text-sm font-semibold">⚡ Places disponibles ce mois-ci</p>
            <div className="flex justify-center gap-2">
              <div className="h-2 w-full max-w-md overflow-hidden rounded-full bg-white/20">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
                  initial={{ width: '0%' }}
                  whileInView={{ width: '75%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4, duration: 1, ease: 'easeOut' }}
                />
              </div>
            </div>
            <p className="mt-3 text-xs text-white/70">
              9 projets complétés ce mois • 3 places restantes
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
