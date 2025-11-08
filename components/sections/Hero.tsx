'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sparkles, ArrowRight, Play } from 'lucide-react'
import { Button, Container, Section } from '@/components/ui'
import { Badge } from '@/components/ui/Badge'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-20">
      {/* Decorative blurred orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-primary-blue/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: 'easeOut' }}
        className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-primary-violet/10 rounded-full blur-3xl"
      />

      <Container>
        <motion.div
          className="relative z-10 max-w-5xl mx-auto text-center px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6 md:mb-6">
          <Badge variant="default" icon={<Sparkles size={16} />}>
            Disponible pour nouveaux projets
          </Badge>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-text-primary mb-4 md:mb-6 leading-tight"
        >
          Créons quelque chose{' '}
          <span className="text-gradient">d&apos;extraordinaire</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
        >
          Transformons ensemble vos idées en expériences digitales uniques et mémorables qui
          marquent les esprits et propulsent votre activité.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
        >
          <Link href="/projets">
            <Button variant="primary" size="lg" className="group w-full sm:w-auto sm:min-w-[200px]">
              Voir mes projets
              <ArrowRight
                size={20}
                className="transition-transform duration-micro group-hover:translate-x-1"
              />
            </Button>
          </Link>
          <Link href="#demo">
            <Button variant="glass" size="lg" className="group w-full sm:w-auto sm:min-w-[200px]">
              <Play size={20} className="transition-transform duration-micro group-hover:scale-110" />
              Démo interactive
            </Button>
          </Link>
        </motion.div>

        {/* Stats or features (optional) */}
        <motion.div
          variants={itemVariants}
          className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto px-4"
        >
          {[
            { value: '50+', label: 'Projets réalisés' },
            { value: '99%', label: 'Clients satisfaits' },
            { value: '24/7', label: 'Support disponible' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-1 md:mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-text-tertiary p-1"
        >
          <motion.div className="h-1.5 w-1.5 rounded-full bg-text-tertiary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
