'use client'

import { motion } from 'framer-motion'
import { Smartphone, Tablet, Monitor } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const devices = [
  { icon: Smartphone, label: 'Mobile', color: 'text-blue-500' },
  { icon: Tablet, label: 'Tablet', color: 'text-purple-500' },
  { icon: Monitor, label: 'Desktop', color: 'text-green-500' },
]

export function BentoResponsive() {
  return (
    <Card variant="glass" padding="lg" className="h-full">
      <h3 className="text-xl font-bold text-text-primary mb-2">100% Responsive</h3>
      <p className="text-sm text-text-secondary mb-6">
        Parfait sur tous les écrans
      </p>

      <div className="grid grid-cols-3 gap-4">
        {devices.map((device, index) => {
          const Icon = device.icon
          return (
            <motion.div
              key={device.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-3 flex justify-center">
                <div className="p-3 rounded-xl glass">
                  <Icon size={32} className={device.color} />
                </div>
              </div>
              <div className="text-sm font-semibold text-text-primary">{device.label}</div>
              <div className="text-xs text-text-secondary mt-1">Optimisé</div>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-text-secondary">
          📱 Design adaptatif pour une expérience parfaite partout
        </p>
      </div>
    </Card>
  )
}
