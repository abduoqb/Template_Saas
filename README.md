# Site Vitrine SaaS - Portfolio Premium

Site portfolio/SaaS ultra premium avec Next.js 14, Tailwind CSS et animations optimisées.

<img width="2854" height="1389" alt="image" src="https://github.com/user-attachments/assets/ed32e1c9-da3e-42ba-a297-9b6150dab793" />

## 🎯 Performances PageSpeed Insights

| Métrique | Mobile | Desktop |
|----------|--------|---------|
| **Performance** | 🟢 99-100 | 🟢 100 |
| **Accessibilité** | 🟢 96-100 | 🟢 96-100 |
| **Bonnes pratiques** | 🟢 100 | 🟢 100 |
| **SEO** | 🟢 100 | 🟢 100 |

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🎨 Caractéristiques

### Performance & Optimisation
- ✅ **Images AVIF + WebP** avec compression optimale
- ✅ **Lazy loading** des sections below-the-fold
- ✅ **Code splitting** webpack optimisé
- ✅ **Polices réduites** : 3 weights au lieu de 6 (-50% téléchargement)
- ✅ **Animations CSS pures** pour les effets simples
- ✅ **Framer Motion** uniquement pour animations complexes
- ✅ **Bundle optimisé** : -18% sur page d'accueil

### Design & UX
- 🎨 Design premium épuré avec quadrillage subtil futuriste
- 🎭 Animations équilibrées (scrollbar native, pas de surcharge)
- 🧩 Bento Grid asymétrique avec graphiques Chart.js
- 💎 Effets glass (backdrop-blur) sur navbar et cartes
- 📱 100% Responsive (mobile-first)
- ⚡ Support prefers-reduced-motion

### Accessibilité WCAG AA
- ♿ Contrastes optimisés (4.5:1+)
- 🔍 Labels ARIA complets
- ⌨️ Navigation clavier complète
- 📖 Lecteurs d'écran supportés
- 🎯 Focus visible (2px blue)

## 📂 Structure du projet

```
vitrine/
├── app/                         # Next.js App Router
│   ├── layout.tsx              # Layout principal + SEO metadata
│   ├── page.tsx                # Page d'accueil
│   ├── globals.css             # Styles globaux + quadrillage
│   ├── contact/                # Page de contact
│   │   └── page.tsx
│   ├── demarrer-projet/        # Formulaire projet avec validation
│   │   └── page.tsx
│   ├── en-cours/               # Page travaux en cours
│   │   └── page.tsx
│   ├── offre/                  # Page offres détaillées
│   │   └── page.tsx
│   └── projets/                # Portfolio projets
│       └── page.tsx
│
├── components/
│   ├── layout/                 # Composants layout
│   │   ├── Navbar.tsx         # Header sticky avec glass effect + menu mobile
│   │   └── Footer.tsx         # Footer multi-colonnes + newsletter
│   │
│   ├── sections/               # Sections principales
│   │   ├── Hero.tsx           # Hero avec stats (optimisé CSS)
│   │   ├── BentoGrid.tsx      # Grille asymétrique 2×3
│   │   ├── Pricing.tsx        # Carte pricing unique 1500€
│   │   ├── Testimonials.tsx   # Témoignages + logos clients
│   │   ├── CTAFinal.tsx       # CTA gradient final
│   │   ├── CTAOffreUrgent.tsx # CTA avec urgence (page offre)
│   │   ├── ComparisonCards.tsx # Comparaison templates vs custom
│   │   ├── ValueTimeline.tsx  # Timeline de valeur
│   │   ├── SocialProofOffre.tsx # Preuves sociales
│   │   ├── FAQOffre.tsx       # FAQ accordéon
│   │   └── index.ts           # Exports centralisés
│   │
│   ├── bento/                  # Composants Bento Grid (13 cartes)
│   │   ├── BentoCard.tsx      # Carte réutilisable de base
│   │   ├── BentoSales.tsx     # Augmentation des ventes
│   │   ├── Bento247.tsx       # Disponibilité 24/7
│   │   ├── BentoCompetition.tsx # Démarquez-vous
│   │   ├── BentoDidYouKnow.tsx  # Le saviez-vous ?
│   │   ├── BentoChart.tsx     # Graphique croissance
│   │   ├── BentoSpeed.tsx     # Vitesse éclair
│   │   ├── BentoPerformanceSEO.tsx # Performance SEO
│   │   ├── BentoResponsive.tsx # 100% Responsive
│   │   ├── BentoSecurity.tsx  # Sécurité maximale
│   │   ├── BentoReach.tsx     # Portée mondiale
│   │   ├── BentoROI.tsx       # ROI rapide
│   │   └── BentoTech.tsx      # Technologies de pointe
│   │
│   └── ui/                     # Composants UI de base
│       ├── Button.tsx          # Bouton avec variants (primary, glass, outline)
│       ├── Badge.tsx           # Badge pill avec contraste optimisé
│       ├── Card.tsx            # Carte glass avec variants
│       ├── Container.tsx       # Container responsive
│       ├── Section.tsx         # Section avec spacing
│       ├── TestimonialCard.tsx # Carte témoignage
│       ├── AnimatedCheckmark.tsx # Checkmark animé
│       └── index.ts            # Exports centralisés
│
├── hooks/                      # Hooks custom
│   ├── useScrollPosition.ts   # Position scroll
│   └── useReducedMotion.ts    # Détection prefers-reduced-motion
│
├── lib/                        # Utilitaires
│   ├── utils.ts               # Helpers (cn, formatPrice, debounce)
│   └── constants.ts           # Données statiques (nav, footer, testimonials)
│
├── public/                     # Assets statiques
│
├── next.config.js             # Config Next.js optimisée (AVIF, webpack)
├── tailwind.config.ts         # Design tokens
└── vercel.json                # Config déploiement Vercel
```

## 🎨 Design Tokens

### Couleurs
```tsx
colors: {
  primary: {
    blue: '#5a67d8',
    violet: '#9f7aea',
  },
  text: {
    primary: '#1a1a2e',
    secondary: 'rgba(26, 26, 46, 0.75)', // Optimisé WCAG AA
    tertiary: 'rgba(26, 26, 46, 0.65)',
    muted: 'rgba(26, 26, 46, 0.55)',
  },
}
```

### Rayons
- **Button**: 12px
- **Card**: 16px
- **Card Medium**: 20px
- **Card Large**: 24px

### Ombres
- **Soft**: 0 10px 28px rgba(0, 0, 0, 0.12)
- **Soft Large**: 0 18px 40px rgba(0, 0, 0, 0.12)
- **Soft XL**: 0 24px 50px rgba(0, 0, 0, 0.10)
- **Glow**: 0 0 40px rgba(90, 103, 216, 0.15)

### Transitions
- **Micro**: 280ms
- **Smooth**: 320ms
- **Slower**: 400ms

## 🧩 Pages & Sections

### Pages
1. **/** - Page d'accueil (Hero, BentoGrid, Pricing, Testimonials, CTA)
2. **/offre** - Offres détaillées avec comparaison et FAQ
3. **/contact** - Formulaire de contact avec validation
4. **/demarrer-projet** - Formulaire projet multi-étapes avec confetti
5. **/projets** - Portfolio (travaux en cours)
6. **/en-cours** - Page maintenance avec barre de progression

### Sections principales
1. **Navbar** - Header sticky avec glass effect au scroll + menu mobile
2. **Hero** - Badge, titre gradient, double CTA, stats
3. **Bento Grid** - 13 cartes asymétriques avec graphiques
4. **Pricing** - Offre unique centrée avec checkmarks
5. **Testimonials** - 3 témoignages clients
6. **CTA Final** - Section gradient avec avantages
7. **Footer** - Multi-colonnes + newsletter + réseaux sociaux

## 🛠️ Stack technique

- **Framework**: Next.js 14.2.33 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11 (optimisé)
- **Charts**: Chart.js 4.4 + react-chartjs-2 5.2
- **Icons**: Lucide React 0.344
- **Forms**: EmailJS 4.4 (formulaires contact)
- **Language**: TypeScript 5.3
- **Déploiement**: Vercel

## 📝 Scripts disponibles

```bash
npm run dev      # Démarrage développement (localhost:3000)
npm run build    # Build production optimisé
npm run start    # Démarrage production
npm run lint     # Linting ESLint
npm run format   # Formatage Prettier
```

## 🎯 Optimisations Performance

### Images
- Format AVIF prioritaire (meilleur ratio compression)
- WebP en fallback
- Lazy loading automatique
- Tailles responsive optimisées

### Code
- **Lazy loading** : Pricing, Testimonials, CTAFinal, Footer
- **Code splitting** : Webpack optimisé (chunks intelligents)
- **Tree shaking** : Imports optimisés
- **Minification** : SWC minifier
- **Compression** : Gzip activé

### Fonts
- **Inter** : 3 weights (400, 600, 700) au lieu de 6
- Font-display: swap
- Preload activé

### Animations
- CSS pure pour fade-in, hover, transitions simples
- Framer Motion uniquement pour animations complexes
- Support prefers-reduced-motion
- GPU-accelerated (transform, opacity)

## ♿ Accessibilité WCAG AA

### Contraste
- ✅ Tous textes : ratio minimum 4.5:1
- ✅ Badges : bg-blue-100 + text-blue-700 (4.5:1+)
- ✅ Boutons : contraste suffisant sur tous états

### Navigation
- ✅ Navigation clavier complète (Tab, Enter, Esc)
- ✅ Focus visible sur tous éléments interactifs
- ✅ Skip links pour navigation rapide
- ✅ Ordre logique de tabulation

### ARIA
- ✅ Labels sur tous contrôles (aria-label, aria-labelledby)
- ✅ aria-expanded sur menu mobile
- ✅ aria-controls pour liens de navigation
- ✅ aria-hidden sur icônes décoratives
- ✅ sr-only pour textes lecteurs d'écran

### Sémantique
- ✅ HTML5 landmarks (<main>, <nav>, <footer>)
- ✅ Titres hiérarchiques (h1 → h6)
- ✅ Liens distincts (textes différents pour fonctions différentes)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+
- **Large Desktop**: 1280px+

## 🌐 SEO

### Metadata
- ✅ Title template dynamique
- ✅ Open Graph complet (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Canonical URLs
- ✅ Robots directives optimisées
- ✅ Keywords pertinents

### Structure
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Données structurées
- ✅ URLs propres

## 🚀 Déploiement Vercel

Le site est configuré pour un déploiement automatique sur Vercel :

```bash
# Push sur GitHub = déploiement automatique
git push origin master
```

### Environnement
- **Production**: https://site-vitrine-claude-code.vercel.app
- **Preview**: Déploiement automatique sur chaque PR
- **CI/CD**: Build + tests automatiques

## ✅ Prochaines étapes

- [x] ~~Ajouter une page projets/portfolio~~ (Créée, en attente de contenu)
- [x] ~~Déployer sur Vercel~~ (Déployé et en production)
- [x] ~~Optimiser performance Lighthouse 90+~~ (99-100 atteint !)
- [x] ~~Optimiser accessibilité AA~~ (96-100 atteint !)
- [ ] Ajouter des images réelles dans `/public/images`
- [ ] Connecter le formulaire newsletter à Mailchimp/SendGrid
- [ ] Ajouter contenu page projets/portfolio
- [ ] Configurer Google Analytics / Plausible
- [ ] Ajouter sitemap.xml dynamique
- [ ] Implémenter le mode sombre (optionnel)

## 📄 Licence

MIT

---

**Développé avec [Claude Code](https://claude.com/claude-code)**
