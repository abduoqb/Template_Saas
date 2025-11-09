'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Lock, CheckCircle, Sparkles, ChevronDown, Send, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import emailjs from '@emailjs/browser'

// Composant Confettis
const Confetti = () => {
  const confettiColors = ['#5a67d8', '#9f7aea', '#f6ad55', '#fc8181', '#4fd1c5']
  const confettiCount = 50

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {Array.from({ length: confettiCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-3 w-3 rounded-full"
          style={{
            backgroundColor: confettiColors[i % confettiColors.length],
            left: `${Math.random() * 100}%`,
            top: '-10%',
          }}
          initial={{ y: 0, x: 0, opacity: 1, rotate: 0 }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.random() * 200 - 100],
            opacity: [1, 1, 0],
            rotate: [0, Math.random() * 720 - 360],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 0.5,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}

export default function DemarrerProjetPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    typeProjet: '',
    description: '',
  })

  const [isFormValid, setIsFormValid] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [showConfetti, setShowConfetti] = useState(false)

  // Calcul de la progression
  const calculateProgress = () => {
    let filled = 0
    if (formData.nom.trim() !== '') filled++
    if (formData.email.includes('@')) filled++
    if (formData.telephone.trim() !== '') filled++
    if (formData.typeProjet !== '') filled++
    if (formData.description.trim().length >= 20) filled++
    return (filled / 5) * 100
  }

  const progress = calculateProgress()

  // Validation du formulaire
  useEffect(() => {
    const isValid =
      formData.nom.trim() !== '' &&
      formData.email.includes('@') &&
      formData.telephone.trim() !== '' &&
      formData.typeProjet !== '' &&
      formData.description.trim().length >= 20

    setIsFormValid(isValid)
  }, [formData])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isFormValid) return

    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Configuration EmailJS depuis variables d'environnement
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Configuration EmailJS manquante')
      }

      const templateParams = {
        from_name: formData.nom,
        from_email: formData.email,
        phone: formData.telephone,
        project_type: formData.typeProjet,
        message: formData.description,
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setIsSubmitted(true)
      setSubmitMessage('✅ Formulaire envoyé ! Le calendrier est maintenant débloqué.')
      setShowConfetti(true)

      // Arrêter les confettis après 4 secondes
      setTimeout(() => setShowConfetti(false), 4000)
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
      setSubmitMessage("❌ Erreur lors de l'envoi. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Confettis */}
      {showConfetti && <Confetti />}

      {/* Header with back button */}
      <div className="container mx-auto px-4 py-4 md:px-6 md:py-6">
        <Link href="/">
          <Button variant="glass" size="md" className="group">
            <ArrowLeft
              size={20}
              className="transition-transform duration-micro group-hover:-translate-x-1"
            />
            Retour à l&apos;accueil
          </Button>
        </Link>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-6 md:px-6 md:py-12">
        {/* Page title */}
        <motion.div
          className="mb-6 text-center md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="default" icon={<Sparkles size={16} />} className="mb-3 md:mb-4">
            Démarrons votre projet
          </Badge>
          <h1 className="mb-3 text-3xl font-bold text-text-primary md:mb-4 md:text-5xl">
            Créons quelque chose d&apos;exceptionnel ensemble
          </h1>
          <p className="mx-auto max-w-2xl text-base text-text-secondary md:text-lg">
            Remplissez le formulaire ci-dessous pour débloquer le calendrier et prendre rendez-vous
          </p>
        </motion.div>

        {/* Two columns layout */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {/* LEFT: Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass h-full rounded-card-lg p-5 md:p-8">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-text-primary md:mb-6 md:text-2xl">
                Parlez-nous de votre projet
              </h2>

              {/* Barre de progression */}
              <div className="mb-6">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Progression</span>
                  <span className="font-semibold text-primary-blue">
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <motion.div
                    className="h-full bg-gradient-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                </div>
              </div>

              <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
                {/* Nom */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-text-primary">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    className="glass w-full rounded-button border-2 border-gray-300 px-4 py-3 transition-colors focus:border-primary-blue focus:outline-none"
                    placeholder="Jean Dupont"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-text-primary">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass w-full rounded-button border-2 border-gray-300 px-4 py-3 transition-colors focus:border-primary-blue focus:outline-none"
                    placeholder="jean@exemple.com"
                    required
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-text-primary">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    className="glass w-full rounded-button border-2 border-gray-300 px-4 py-3 transition-colors focus:border-primary-blue focus:outline-none"
                    placeholder="06 12 34 56 78"
                    required
                  />
                </div>

                {/* Type de projet */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-text-primary">
                    Type de projet *
                  </label>
                  <div className="relative">
                    <select
                      name="typeProjet"
                      value={formData.typeProjet}
                      onChange={handleInputChange}
                      className="glass w-full cursor-pointer appearance-none rounded-button border-2 border-gray-300 bg-white/60 px-4 py-3 pr-12 font-semibold text-text-primary transition-colors focus:border-primary-blue focus:outline-none"
                      required
                    >
                      <option value="" className="text-gray-400">
                        Sélectionnez un type
                      </option>
                      <option value="vitrine" className="text-text-primary">
                        Site vitrine
                      </option>
                      <option value="ecommerce" className="text-text-primary">
                        E-commerce
                      </option>
                      <option value="blog" className="text-text-primary">
                        Blog
                      </option>
                      <option value="portfolio" className="text-text-primary">
                        Portfolio
                      </option>
                      <option value="autre" className="text-text-primary">
                        Autre
                      </option>
                    </select>
                    <ChevronDown
                      size={20}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-text-primary">
                    Description du projet * (min. 20 caractères)
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="glass w-full resize-none rounded-button border-2 border-gray-300 px-4 py-3 transition-colors focus:border-primary-blue focus:outline-none"
                    placeholder="Décrivez votre projet en quelques lignes..."
                    rows={4}
                    required
                  />
                  <p className="mt-1 text-xs text-text-secondary">
                    {formData.description.length} / 20 caractères minimum
                  </p>
                </div>

                {/* Submit button and status */}
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="submit-button"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-3"
                    >
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="group w-full disabled:cursor-not-allowed disabled:opacity-50"
                        disabled={!isFormValid || isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={20} className="animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            Soumettre et débloquer le calendrier
                          </>
                        )}
                      </Button>
                      {submitMessage && (
                        <p className="text-center text-sm text-red-600">{submitMessage}</p>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success-message"
                      className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 p-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <CheckCircle size={20} className="text-green-600" />
                      <span className="text-sm font-semibold text-green-700">{submitMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

          {/* RIGHT: Calendly */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass relative h-full min-h-[500px] overflow-hidden rounded-card-lg p-5 md:min-h-[700px] md:p-8">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-text-primary md:mb-6 md:text-2xl">
                Prenez rendez-vous
              </h2>

              {/* Calendly iframe */}
              <div className="h-[400px] w-full overflow-hidden rounded-lg md:h-[600px]">
                <iframe
                  src={process.env.NEXT_PUBLIC_CALENDLY_URL || ''}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="rounded-lg"
                ></iframe>
              </div>

              {/* Overlay when form is not submitted */}
              <AnimatePresence>
                {!isSubmitted && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center rounded-card-lg bg-gray-900/30 backdrop-blur-md px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="glass-strong max-w-md rounded-2xl p-6 text-center md:p-8">
                      <Lock size={48} className="mx-auto mb-3 text-gray-400 md:mb-4 md:size-16" />
                      <h3 className="mb-2 text-xl font-bold text-text-primary md:mb-3 md:text-2xl">
                        Calendrier verrouillé
                      </h3>
                      <p className="mb-3 text-sm text-text-secondary md:mb-4 md:text-base">
                        Veuillez compléter et soumettre le formulaire pour débloquer le calendrier
                        et prendre rendez-vous
                      </p>
                      <div className="flex items-center justify-center gap-2 text-xs text-text-secondary md:text-sm">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <span>
                          {isFormValid ? 'Cliquez sur soumettre' : 'Formulaire incomplet'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
