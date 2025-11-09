import { Github, Dribbble, Twitter, Linkedin, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { FOOTER_LINKS } from '@/lib/constants'

const socialIcons = {
  github: Github,
  dribbble: Dribbble,
  twitter: Twitter,
  linkedin: Linkedin,
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-8 md:pt-16 pb-6 md:pb-8 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3 md:mb-4">
              Portfolio<span className="text-gradient">.</span>
            </h3>
            <p className="text-text-secondary text-sm mb-4 md:mb-6 leading-relaxed">
              Créateur d&apos;expériences digitales uniques et mémorables. Transformons ensemble
              vos idées en réalité.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {['github', 'dribbble', 'twitter', 'linkedin'].map((social) => {
                const Icon = socialIcons[social as keyof typeof socialIcons]
                const socialLabels = {
                  github: 'GitHub',
                  dribbble: 'Dribbble',
                  twitter: 'Twitter',
                  linkedin: 'LinkedIn'
                }
                return (
                  <a
                    key={social}
                    href={`#${social}`}
                    aria-label={`Suivez-nous sur ${socialLabels[social as keyof typeof socialLabels]}`}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-primary-blue transition-all duration-micro hover:scale-110 active:scale-95"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Product Links - Hidden on mobile */}
          <div className="hidden md:block">
            <h4 className="font-semibold text-text-primary mb-4">Produit</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links - Hidden on mobile */}
          <div className="hidden md:block">
            <h4 className="font-semibold text-text-primary mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links - Hidden on mobile */}
          <div className="hidden md:block">
            <h4 className="font-semibold text-text-primary mb-4">Support</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links - Hidden on mobile */}
          <div className="hidden md:block">
            <h4 className="font-semibold text-text-primary mb-4">Légal</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter - Hidden on mobile */}
        <div className="hidden md:block max-w-md mx-auto text-center mb-12">
          <h4 className="font-semibold text-text-primary mb-2">Restez informé</h4>
          <p className="text-sm text-text-secondary mb-4">
            Recevez les dernières actualités et conseils directement dans votre boîte mail
          </p>
          <form className="flex gap-2">
            <label htmlFor="newsletter-email" className="sr-only">
              Adresse email pour la newsletter
            </label>
            <input
              type="email"
              id="newsletter-email"
              name="email"
              placeholder="votre@email.com"
              aria-label="Adresse email pour la newsletter"
              className="flex-1 px-4 py-2 rounded-button bg-gray-100 border border-gray-200 text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all text-sm"
            />
            <Button variant="primary" size="md" type="submit">
              <Send size={16} aria-hidden="true" />
              S&apos;inscrire
            </Button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-text-secondary text-center md:text-left">
            © 2025 Portfolio. Créé avec ❤️ par votre développeur.
          </p>
          <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
            <a
              href="#mentions"
              className="text-xs md:text-sm text-text-secondary hover:text-text-primary hover:underline"
            >
              Mentions légales
            </a>
            <a
              href="#privacy"
              className="text-xs md:text-sm text-text-secondary hover:text-text-primary hover:underline"
            >
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
