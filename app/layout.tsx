import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Portfolio Premium | Créateur d\'expériences digitales',
  description: 'Site portfolio et SaaS ultra premium. Transformons ensemble vos idées en réalité avec des expériences digitales uniques et mémorables.',
  keywords: ['portfolio', 'saas', 'développement web', 'design premium', 'next.js'],
  authors: [{ name: 'Votre Nom' }],
  openGraph: {
    title: 'Portfolio Premium | Créateur d\'expériences digitales',
    description: 'Transformons ensemble vos idées en réalité avec des expériences digitales uniques et mémorables.',
    type: 'website',
    locale: 'fr_FR',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
