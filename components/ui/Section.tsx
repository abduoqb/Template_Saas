import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  spacing?: 'default' | 'compact' | 'spacious'
  background?: 'default' | 'secondary' | 'gradient'
}

/**
 * Section component for consistent vertical spacing and background styling
 * Provides semantic HTML structure and design system integration
 */
export function Section({
  children,
  className,
  id,
  spacing = 'default',
  background = 'default'
}: SectionProps) {
  const spacingStyles = {
    compact: 'py-12 md:py-16',
    default: 'py-16 md:py-24',
    spacious: 'py-24 md:py-32 lg:py-40',
  }

  const backgroundStyles = {
    default: 'bg-transparent',
    secondary: 'bg-bg-secondary',
    gradient: 'bg-gradient-animated',
  }

  return (
    <section
      id={id}
      className={cn(
        'relative w-full',
        spacingStyles[spacing],
        backgroundStyles[background],
        className
      )}
    >
      {children}
    </section>
  )
}
