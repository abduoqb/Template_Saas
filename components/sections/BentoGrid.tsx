import { BentoSales } from '@/components/bento/BentoSales'
import { Bento247 } from '@/components/bento/Bento247'
import { BentoCompetition } from '@/components/bento/BentoCompetition'
import { BentoDidYouKnow } from '@/components/bento/BentoDidYouKnow'
import { Container, Section } from '@/components/ui'
import { Badge } from '@/components/ui/Badge'
import { Sparkles } from 'lucide-react'

export function BentoGrid() {
  return (
    <Section id="features" spacing="default">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="default" icon={<Sparkles size={16} />} className="mb-4">
            Pourquoi investir dans un site web
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            Boostez votre business
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Un site web professionnel transforme votre entreprise et multiplie vos opportunités de vente
          </p>
        </div>

        {/* Bento Grid - Asymmetric 2x3 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Sales Card - Large, takes full height on left (row-span-2) */}
          <div className="md:row-span-2">
            <BentoSales />
          </div>

          {/* 24/7 Card - Top right */}
          <div>
            <Bento247 />
          </div>

          {/* Competition Card - Bottom right */}
          <div>
            <BentoCompetition />
          </div>
        </div>

        {/* "Le saviez-vous ?" Card - Full width at bottom */}
        <div className="mt-8 max-w-6xl mx-auto">
          <BentoDidYouKnow />
        </div>
      </Container>
    </Section>
  )
}
