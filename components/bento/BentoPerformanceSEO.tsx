'use client'

import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const metrics = [
  { label: 'Performance', score: 98, color: 'bg-green-500' },
  { label: 'SEO', score: 100, color: 'bg-green-500' },
  { label: 'Accessibility', score: 95, color: 'bg-green-500' },
]

export function BentoPerformanceSEO() {
  return (
    <Card variant="glass" padding="lg" className="h-full">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600">
          <TrendingUp size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary">Performances SEO</h3>
          <p className="text-sm text-text-secondary">Lighthouse Scores</p>
        </div>
      </div>

      <div className="space-y-5">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-text-primary">{metric.label}</span>
              <span className="text-lg font-bold text-gradient">{metric.score}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${metric.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${metric.score}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-text-secondary">
          ⚡ Optimisé pour les moteurs de recherche et les performances
        </p>
      </div>
    </Card>
  )
}
