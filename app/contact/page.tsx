'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen px-6 py-32">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-5xl font-bold text-text-primary md:text-6xl">
            Contactez-nous
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary md:text-xl">
            Une question ? Un projet ? Nous sommes là pour vous accompagner dans votre
            transformation digitale.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-text-primary"
                >
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-text-primary transition-all duration-micro focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-text-primary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-text-primary transition-all duration-micro focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
                  placeholder="jean.dupont@exemple.fr"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-text-primary"
                >
                  Téléphone (optionnel)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-text-primary transition-all duration-micro focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-text-primary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-text-primary transition-all duration-micro focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full group">
                Envoyer le message
                <Send
                  size={20}
                  className="transition-transform duration-micro group-hover:translate-x-1"
                />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-smooth hover:border-accent-primary hover:shadow-soft">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
                  <Mail size={24} className="text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text-primary">Email</h3>
                <a
                  href="mailto:contact@vitrine.fr"
                  className="text-text-secondary transition-colors hover:text-accent-primary"
                >
                  contact@vitrine.fr
                </a>
              </div>

              <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-smooth hover:border-accent-primary hover:shadow-soft">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
                  <Phone size={24} className="text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text-primary">Téléphone</h3>
                <a
                  href="tel:+33612345678"
                  className="text-text-secondary transition-colors hover:text-accent-primary"
                >
                  +33 6 12 34 56 78
                </a>
              </div>

              <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-smooth hover:border-accent-primary hover:shadow-soft">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
                  <MapPin size={24} className="text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text-primary">Localisation</h3>
                <p className="text-text-secondary">Paris, France</p>
              </div>
            </div>

            {/* Response Time */}
            <div className="rounded-2xl bg-gradient-primary p-8 text-white">
              <h3 className="mb-3 text-2xl font-bold">Réponse rapide garantie</h3>
              <p className="mb-4 opacity-90">
                Nous nous engageons à vous répondre sous 24h, du lundi au vendredi.
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <div className="h-2 w-2 animate-pulse rounded-full bg-white" />
                Disponible maintenant
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
