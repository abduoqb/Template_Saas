'use client'

import { motion } from 'framer-motion'
import { Trophy, Star, Sparkles, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const advantages = [
  {
    icon: Trophy,
    label: 'Image professionnelle',
    description: 'Inspirez confiance',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    icon: Star,
    label: 'Crédibilité maximale',
    description: 'Démarquez-vous',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: TrendingUp,
    label: 'Visibilité accrue',
    description: 'Soyez trouvé facilement',
    color: 'from-purple-500 to-pink-600',
  },
]

export function BentoCompetition() {
  return (
    <Card variant="glass" padding="lg" className="relative h-full overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-30 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-gradient-to-tr from-yellow-100 to-orange-100 opacity-30 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-3 flex items-center gap-2">
          <Sparkles size={24} className="text-primary-blue" />
          <h3 className="text-2xl font-bold text-text-primary">Démarquez-vous</h3>
        </div>
        <p className="mb-6 text-base text-text-secondary">
          Surpassez vos concurrents avec une présence en ligne professionnelle
        </p>

        {/* Main stat - Big 73% */}
        <motion.div
          className="relative mb-8 overflow-hidden rounded-lg bg-gradient-to-br from-primary-blue to-primary-violet p-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-white/10" />
          <div className="relative z-10 text-center">
            <motion.div
              className="mb-3 text-6xl font-bold text-white md:text-7xl"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              73%
            </motion.div>
            <p className="text-base font-semibold text-white/90 md:text-lg">
              des clients jugent votre crédibilité sur votre site web
            </p>
            <div className="mt-3 flex items-center justify-center gap-2 text-sm text-white/80">
              <Star size={16} fill="white" />
              <span>Première impression compte</span>
            </div>
          </div>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 gap-3">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <motion.div
                key={advantage.label}
                className="group flex items-center gap-4 rounded-xl border-2 border-gray-200 bg-white/60 p-4 transition-all duration-300 hover:border-primary-blue hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ x: 5, scale: 1.02 }}
              >
                <div className={`rounded-xl bg-gradient-to-br p-3 ${advantage.color} shadow-soft`}>
                  <Icon size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-text-primary transition-colors group-hover:text-primary-blue">
                    {advantage.label}
                  </div>
                  <div className="text-sm text-text-secondary">{advantage.description}</div>
                </div>
                <div className="opacity-0 transition-opacity group-hover:opacity-100">
                  <TrendingUp size={20} className="text-primary-blue" />
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-6 border-t border-gray-200 pt-4">
          <p className="text-center text-sm text-text-secondary">
            ⭐ <span className="font-semibold">Faites meilleure impression</span> que vos
            concurrents dès le premier clic
          </p>
        </div>
      </div>
    </Card>
  )
}
