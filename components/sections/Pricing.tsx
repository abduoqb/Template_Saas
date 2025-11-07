'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowRight, Phone } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { PRICING_FEATURES } from '@/lib/constants'
import { formatPrice } from '@/lib/utils'

const checkmarkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
    },
  }),
}

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="default" className="mb-4">
            Tarif
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Une offre simple et claire
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour lancer votre présence en ligne
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card
            variant="glass"
            padding="lg"
            className="relative max-w-3xl mx-auto hover:-translate-y-2 hover:scale-[1.01]"
          >
            {/* Recommended Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge variant="gradient">Recommandé</Badge>
            </div>

            <div className="text-center pt-6 pb-8 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Pack Premium All-Inclusive
              </h3>

              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-6xl font-bold text-gradient">
                  {formatPrice(1500)}
                </span>
              </div>

              <p className="text-text-secondary">
                Votre site professionnel clé en main
              </p>
              <p className="text-sm text-green-600 font-semibold mt-2">
                Économisez 800€ vs. agences traditionnelles
              </p>
            </div>

            <div className="py-8">
              <p className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wide">
                Ce qui est inclus
              </p>

              <ul className="space-y-3 mb-8">
                {PRICING_FEATURES.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 text-text-secondary"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={checkmarkVariants}
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-blue/10 flex items-center justify-center">
                      <Check size={14} className="text-primary-blue" />
                    </div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demarrer-projet" className="flex-1">
                  <Button variant="primary" size="lg" className="w-full group">
                    Démarrer mon projet
                    <ArrowRight
                      size={20}
                      className="transition-transform duration-micro group-hover:translate-x-1"
                    />
                  </Button>
                </Link>
                <Link href="/offre" className="flex-1">
                  <Button variant="glass" size="lg" className="w-full group">
                    <ArrowRight
                      size={20}
                      className="transition-transform duration-micro group-hover:translate-x-1"
                    />
                    Découvrir l'offre
                  </Button>
                </Link>
              </div>

              <p className="text-xs text-text-secondary text-center mt-6">
                Prix HT. Paiement en plusieurs fois possible. Garantie satisfait ou remboursé 30
                jours.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
