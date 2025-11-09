'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const vitals = [
  { label: 'LCP', value: '1.2s', status: 'good', color: 'text-green-500' },
  { label: 'FID', value: '8ms', status: 'good', color: 'text-green-500' },
  { label: 'CLS', value: '0.05', status: 'good', color: 'text-green-500' },
]

export function BentoSpeed() {
  return (
    <Card variant="glass" padding="lg" className="h-full">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600">
          <Zap size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">Vitesse éclair</h3>
          <p className="text-sm text-text-secondary">Core Web Vitals</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {vitals.map((vital, index) => (
          <motion.div
            key={vital.label}
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-xs font-semibold text-text-secondary mb-1">{vital.label}</div>
            <div className={`text-2xl font-bold ${vital.color}`}>{vital.value}</div>
            <div className="text-xs text-text-secondary mt-1">✓ Excellent</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-text-secondary">
          🚀 Chargement ultra-rapide pour une expérience optimale
        </p>
      </div>
    </Card>
  )
}
