'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, CheckCircle } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const features = [
  { icon: Shield, label: 'SSL/HTTPS' },
  { icon: Lock, label: 'Données cryptées' },
  { icon: CheckCircle, label: 'RGPD conforme' },
]

export function BentoSecurity() {
  return (
    <Card variant="glass" padding="lg" className="h-full">
      <h3 className="text-xl font-bold text-text-primary mb-2">Sécurité maximale</h3>
      <p className="text-sm text-text-secondary mb-6">
        Protection de vos données
      </p>

      <div className="space-y-3">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.label}
              className="flex items-center gap-3 p-3 rounded-lg glass hover:bg-white/90 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600">
                <Icon size={18} className="text-white" />
              </div>
              <span className="text-sm font-semibold text-text-primary">{feature.label}</span>
              <CheckCircle size={16} className="text-green-500 ml-auto" />
            </motion.div>
          )
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-text-secondary">
          🔒 Sécurité et confidentialité garanties
        </p>
      </div>
    </Card>
  )
}
