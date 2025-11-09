'use client'

import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'gradient' | 'outline'
  icon?: ReactNode
}

export function Badge({
  className,
  variant = 'default',
  icon,
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-micro'

  const variants = {
    default:
      'bg-blue-50 text-primary-blue border border-blue-100 shadow-sm',
    gradient:
      'bg-gradient-primary text-white shadow-soft',
    outline:
      'border-2 border-current bg-transparent',
  }

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </div>
  )
}
