'use client'

import { motion } from 'framer-motion'
import { Globe, Users, MapPin } from 'lucide-react'
import { Card } from '@/components/ui/Card'

export function BentoReach() {
  return (
    <Card variant="glass" padding="lg" className="h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600">
          <Globe size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">Touchez le monde entier</h3>
          <p className="text-sm text-text-secondary">Élargissez votre clientèle</p>
        </div>
      </div>

      <div className="space-y-4 mt-6">
        <motion.div
          className="flex items-center justify-between p-3 rounded-lg glass"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-3">
            <MapPin size={20} className="text-purple-500" />
            <span className="font-semibold text-text-primary">Votre ville</span>
          </div>
          <span className="text-2xl">→</span>
        </motion.div>

        <motion.div
          className="flex items-center justify-between p-3 rounded-lg glass"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <MapPin size={20} className="text-purple-500" />
            <span className="font-semibold text-text-primary">Votre région</span>
          </div>
          <span className="text-2xl">→</span>
        </motion.div>

        <motion.div
          className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <Globe size={20} />
            <span className="font-bold">Le monde entier</span>
          </div>
          <Users size={24} />
        </motion.div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-text-secondary">
          🚀 Des milliers de clients potentiels en plus
        </p>
      </div>
    </Card>
  )
}
