import Link from 'next/link'
import { Sparkles, ArrowRight, Play } from 'lucide-react'
import { Button, Container, Section } from '@/components/ui'
import { Badge } from '@/components/ui/Badge'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-20">
      {/* Subtle background gradient - static */}
      <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-primary-blue/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-primary-violet/10 rounded-full blur-3xl opacity-50" />

      <Container>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 animate-fade-in">
          {/* Badge */}
          <div className="flex justify-center mb-6 md:mb-6">
            <Badge variant="default" icon={<Sparkles size={16} />}>
              Disponible pour nouveaux projets
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-text-primary mb-4 md:mb-6 leading-tight">
            Créons quelque chose{' '}
            <span className="text-gradient">d&apos;extraordinaire</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
            Transformons ensemble vos idées en expériences digitales uniques et mémorables qui
            marquent les esprits et propulsent votre activité.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
            <Link href="/projets">
              <Button variant="primary" size="lg" className="group w-full sm:w-auto sm:min-w-[200px]">
                Voir mes projets
                <ArrowRight
                  size={20}
                  className="transition-transform duration-micro group-hover:translate-x-1"
                />
              </Button>
            </Link>
            <Link href="/en-cours">
              <Button variant="glass" size="lg" className="group w-full sm:w-auto sm:min-w-[200px]">
                <Play size={20} className="transition-transform duration-micro group-hover:scale-110" />
                Démo interactive
              </Button>
            </Link>
          </div>

          {/* Stats or features */}
          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto px-4">
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
          </div>
        </div>
      </Container>
    </section>
  )
}
