'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { NAV_LINKS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollY = useScrollPosition()
  const isScrolled = scrollY > 50

  return (
    <motion.nav
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-smooth',
        isScrolled ? 'glass-strong shadow-soft' : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-bold tracking-tight text-text-primary"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Vitrine<span className="text-gradient">.</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="group relative font-medium text-text-secondary transition-colors duration-micro hover:text-text-primary"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                {link.label}
                <span className="bg-gradient-primary absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-micro group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="/projets">
              <Button variant="primary" size="md">
                Contact
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 text-text-primary md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="glass-strong border-t border-gray-200 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-2 font-medium text-text-secondary transition-colors hover:text-text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="/projets">
                <Button variant="primary" size="md" className="mt-2 w-full">
                  Contact
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
