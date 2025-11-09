'use client'

import { motion } from 'framer-motion'
import { Star, TrendingUp, Award, Users } from 'lucide-react'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { TESTIMONIALS } from '@/lib/constants'

const stats = [
  {
    icon: Users,
    value: '150+',
    label: 'Clients satisfaits',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Note moyenne',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: TrendingUp,
    value: '+250%',
    label: 'Croissance moyenne',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Award,
    value: '98%',
    label: 'Taux de satisfaction',
    color: 'from-purple-500 to-purple-600',
  },
]

// Enhanced testimonials with results
const enhancedTestimonials = [
  {
    ...TESTIMONIALS[0],
    result: '+320% de trafic en 3 mois',
    plan: 'Pack Premium',
  },
  {
    ...TESTIMONIALS[1],
    result: '+300% de conversions',
    plan: 'Pack Premium',
  },
  {
    ...TESTIMONIALS[2],
    result: 'ROI 8x en 6 mois',
    plan: 'Pack Starter',
  },
]

export function SocialProofOffre() {
  return (
    <section className="py-20 px-6 relative bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Ils ont choisi notre <span className="text-gradient">expertise</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Découvrez les résultats concrets de nos clients et pourquoi ils nous recommandent
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-card-lg p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 text-center"
              >
                <div className={`
                  w-12 h-12 mx-auto mb-4 rounded-xl
                  bg-gradient-to-br ${stat.color}
                  flex items-center justify-center
                  shadow-soft
                `}>
                  <Icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Testimonials with Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {enhancedTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative"
            >
              {/* Result Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-soft-lg whitespace-nowrap">
                  {testimonial.result}
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="pt-6">
                <TestimonialCard {...testimonial} />
              </div>

              {/* Plan Badge */}
              <div className="mt-3 text-center">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-blue/10 text-primary-blue">
                  {testimonial.plan}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-card-lg p-8 shadow-soft border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>
              <p className="font-semibold text-text-primary mb-1">
                Note moyenne Google
              </p>
              <p className="text-sm text-text-secondary">
                Basée sur 127 avis clients
              </p>
            </div>

            <div className="border-l border-r border-gray-200 px-4">
              <div className="text-4xl font-bold text-gradient mb-2">
                21 jours
              </div>
              <p className="font-semibold text-text-primary mb-1">
                Livraison moyenne
              </p>
              <p className="text-sm text-text-secondary">
                Garantie contractuelle
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold text-gradient mb-2">
                98%
              </div>
              <p className="font-semibold text-text-primary mb-1">
                Clients recommandent
              </p>
              <p className="text-sm text-text-secondary">
                Enquête satisfaction 2024
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-text-secondary italic max-w-3xl mx-auto">
            &ldquo;Leur expertise technique combinée à une vraie compréhension business fait toute la différence.
            Notre site n&apos;est pas juste beau, il convertit vraiment.&rdquo;
          </p>
          <p className="text-sm text-text-primary font-semibold mt-3">
            — Sophie Martin, Directrice E-commerce chez FashionLab
          </p>
        </motion.div>
      </div>
    </section>
  )
}
