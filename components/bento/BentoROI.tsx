'use client'

import { motion } from 'framer-motion'
import { PiggyBank, TrendingUp, Calendar } from 'lucide-react'
import { Card } from '@/components/ui/Card'

export function BentoROI() {
  return (
    <Card variant="glass" padding="lg" className="h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
          <PiggyBank size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">ROI rapide</h3>
          <p className="text-sm text-text-secondary">Rentabilité assurée</p>
        </div>
      </div>

      <div className="space-y-5 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-text-primary">Investissement</span>
            <span className="text-lg font-bold text-text-primary">1 500€</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-full w-1/3 bg-gray-400 rounded-full" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-text-primary">Gains après 6 mois</span>
            <span className="text-lg font-bold text-green-600">5 000€+</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <TrendingUp size={24} className="text-green-600" />
          <div>
            <div className="text-2xl font-bold text-green-700">233%</div>
            <div className="text-sm text-green-600">Retour sur investissement</div>
          </div>
        </motion.div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2 text-xs text-text-secondary">
          <Calendar size={14} />
          <span>Amorti en moins de 3 mois</span>
        </div>
      </div>
    </Card>
  )
}
