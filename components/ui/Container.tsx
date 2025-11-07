import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'default' | 'narrow' | 'wide' | 'full'
}

/**
 * Container component for consistent page layout and max-width constraints
 * Follows design system spacing guidelines
 */
export function Container({
  children,
  className,
  size = 'default'
}: ContainerProps) {
  const sizeStyles = {
    default: 'max-w-7xl',
    narrow: 'max-w-4xl',
    wide: 'max-w-[1400px]',
    full: 'max-w-full',
  }

  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8 w-full',
        sizeStyles[size],
        className
      )}
    >
      {children}
    </div>
  )
}
