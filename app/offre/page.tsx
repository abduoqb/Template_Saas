'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Check, ArrowRight, Sparkles, Rocket, Briefcase, Settings,
  Target, Gift, Shield, Clock, Star, Code
} from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Container, Section, Button } from '@/components/ui'

const features = [
  {
    icon: Sparkles,
    title: 'CRÉATION & DESIGN',
    items: [
      'Site web 100% sur-mesure (pages illimitées)',
      'Design premium adaptatif mobile/tablette/desktop',
      '3 propositions de maquettes au choix',
      'Animations modernes et transitions fluides',
      'Révisions illimitées pendant la création',
    ],
  },
  {
    icon: Rocket,
    title: 'PERFORMANCE & RÉFÉRENCEMENT',
    items: [
      'SEO technique avancé (score 95+/100)',
      'Installation Google Analytics & Search Console',
      'Vitesse optimisée (chargement < 3 secondes)',
      'Certificat SSL sécurisé',
      'Sitemap XML automatique',
    ],
  },
  {
    icon: Briefcase,
    title: 'FONCTIONNALITÉS BUSINESS',
    items: [
      'Blog professionnel avec CMS intuitif',
      'E-commerce jusqu\'à 50 produits (Stripe/PayPal inclus)',
      'Formulaires intelligents avec notifications',
      'Espace client sécurisé',
      'Calendrier de réservation en ligne',
      'Newsletter & pop-ups marketing',
    ],
  },
  {
    icon: Settings,
    title: 'TECHNIQUE & INTÉGRATIONS',
    items: [
      'Hébergement premium 1 AN OFFERT (valeur 120€)',
      'Nom de domaine .com/.fr offert (valeur 15€)',
      'Sauvegardes automatiques quotidiennes',
      'Intégrations API (CRM, réseaux sociaux, outils métier)',
      'Emails professionnels @votredomaine.com',
    ],
  },
  {
    icon: Target,
    title: 'ACCOMPAGNEMENT VIP',
    items: [
      'Support prioritaire 90 jours (réponse < 24h)',
      'Formation vidéo personnalisée (2h)',
      'Documentation complète sur-mesure',
      'Modifications gratuites pendant 30 jours',
      'Conseils stratégiques marketing inclus',
    ],
  },
]

const guarantees = [
  { icon: Shield, text: 'Satisfait ou remboursé 30 jours' },
  { icon: Clock, text: 'Livraison en 21 jours maximum' },
  { icon: Star, text: 'Aucun frais caché' },
  { icon: Code, text: 'Code source fourni (vous êtes propriétaire)' },
]

const bonuses = [
  'Création logo professionnel',
  '10 visuels réseaux sociaux',
  'Guide SEO personnalisé',
]

export default function OffrePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <Section spacing="spacious" className="text-center">
          <Container size="narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-blue/20 bg-primary-blue/5 px-4 py-2 mb-6">
                <Gift className="h-4 w-4 text-primary-blue" />
                <span className="text-sm font-medium text-text-primary">
                  Offre Premium
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-4 tracking-tight">
                Pack Premium <span className="text-gradient">All-Inclusive</span>
              </h1>

              <div className="flex items-baseline justify-center gap-2 mb-3">
                <span className="text-6xl md:text-7xl font-bold text-gradient">
                  1 500 €
                </span>
              </div>

              <p className="text-xl text-text-secondary mb-2">
                Votre site professionnel clé en main
              </p>
              <p className="text-lg text-green-600 font-semibold">
                Économisez 800€ vs. agences traditionnelles
              </p>
            </motion.div>
          </Container>
        </Section>

        {/* Features Grid */}
        <Section spacing="default" background="secondary">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white rounded-card-lg p-8 shadow-soft hover:shadow-soft-lg transition-shadow duration-micro"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-primary text-white">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-text-primary">
                        {feature.title}
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            <div className="w-5 h-5 rounded-full bg-primary-blue/10 flex items-center justify-center">
                              <Check size={14} className="text-primary-blue" />
                            </div>
                          </div>
                          <span className="text-text-secondary leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </Container>
        </Section>

        {/* Guarantees */}
        <Section spacing="compact">
          <Container size="narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-text-primary mb-4">
                💎 Garanties Exclusives
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guarantees.map((guarantee, index) => {
                const Icon = guarantee.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 p-6 rounded-card-lg border-2 border-primary-blue/20 bg-white hover:border-primary-blue/40 hover:shadow-soft transition-all duration-micro"
                  >
                    <div className="p-3 rounded-xl bg-primary-blue/10">
                      <Icon size={24} className="text-primary-blue" />
                    </div>
                    <span className="font-semibold text-text-primary">
                      {guarantee.text}
                    </span>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-6 rounded-card-lg bg-green-50 border-2 border-green-200"
            >
              <p className="text-center text-green-800 font-semibold">
                ✓ RGPD compliant - Respect total de la législation européenne
              </p>
            </motion.div>
          </Container>
        </Section>

        {/* Bonus Section */}
        <Section spacing="default" background="gradient" className="text-white">
          <Container size="narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-3">
                🔥 BONUS LIMITÉ
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Valeur totale : 300€
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bonuses.map((bonus, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="p-6 rounded-card-lg bg-white/10 backdrop-blur-sm border border-white/20"
                  >
                    <Gift className="h-10 w-10 mx-auto mb-3" />
                    <p className="font-semibold">{bonus}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </Section>

        {/* CTA Final */}
        <Section spacing="spacious">
          <Container size="narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-card-lg p-12 shadow-soft-xl"
            >
              <h2 className="text-4xl font-bold text-text-primary mb-4">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
                Plus de 150 clients satisfaits - Note moyenne 4.9/5
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demarrer-projet">
                  <Button variant="primary" size="lg" className="group">
                    Démarrer mon projet
                    <ArrowRight className="h-5 w-5 transition-transform duration-micro group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/#pricing">
                  <Button variant="glass" size="lg">
                    Retour aux tarifs
                  </Button>
                </Link>
              </div>

              <p className="text-sm text-text-secondary mt-6">
                💬 Une question ? Contactez-nous pour un devis personnalisé
              </p>
            </motion.div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}
