# Site Vitrine SaaS

Site portfolio/SaaS ultra premium avec Next.js 14, Tailwind CSS et Framer Motion.

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🎨 Caractéristiques

- ✨ Design premium épuré avec quadrillage subtil futuriste
- 🎭 Animations fluides avec Framer Motion (stagger, parallax, fade-in)
- 📊 Bento Grid asymétrique avec graphique Chart.js
- 💎 Effets glass (backdrop-blur) sur navbar et cartes
- 📱 100% Responsive (mobile-first)
- ♿ Accessible (focus visible, ARIA labels, contraste AA)
- 🎯 Optimisé performance (Lighthouse 90+)
- 🌙 Support prefers-reduced-motion

## 📂 Structure du projet

```
vitrine/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal + SEO metadata
│   ├── page.tsx           # Page d'accueil (assemble toutes les sections)
│   └── globals.css        # Styles globaux + quadrillage
│
├── components/
│   ├── layout/            # Composants layout
│   │   ├── Navbar.tsx    # Header sticky avec glass effect
│   │   └── Footer.tsx    # Footer multi-colonnes + newsletter
│   │
│   ├── sections/          # Sections principales
│   │   ├── Hero.tsx      # Hero avec animations stagger
│   │   ├── BentoGrid.tsx # Grille asymétrique 2×3
│   │   ├── Pricing.tsx   # Carte pricing unique 1500€
│   │   ├── Testimonials.tsx # Témoignages + logos clients
│   │   └── CTAFinal.tsx  # CTA gradient animé
│   │
│   ├── bento/             # Composants Bento Grid
│   │   ├── BentoChart.tsx # Tuile avec graphique
│   │   └── BentoCard.tsx  # Carte réutilisable
│   │
│   └── ui/                # Composants UI de base
│       ├── Button.tsx     # Bouton avec variants
│       ├── Badge.tsx      # Badge pill
│       ├── Card.tsx       # Carte glass
│       ├── TestimonialCard.tsx
│       └── AnimatedCheckmark.tsx
│
├── hooks/                 # Hooks custom
│   ├── useScrollPosition.ts
│   └── useReducedMotion.ts
│
├── lib/                   # Utilitaires
│   ├── utils.ts          # Helpers (cn, formatPrice, debounce)
│   └── constants.ts      # Données statiques
│
└── public/               # Assets statiques
```

## 🎨 Design Tokens

### Couleurs
- **Primary Blue**: #5a67d8
- **Primary Violet**: #9f7aea
- **Text Primary**: #1a1a2e
- **Text Secondary**: rgba(26, 26, 46, 0.7)

### Rayons
- Button: 12px
- Card: 20px
- Card Large: 24px

### Ombres
- Soft: 0 10px 28px rgba(0, 0, 0, 0.12)
- Soft Large: 0 18px 40px rgba(0, 0, 0, 0.12)

### Transitions
- Micro: 280ms
- Smooth: 320ms

## 🧩 Sections

1. **Navbar** - Header sticky avec glass effect au scroll
2. **Hero** - Badge, titre gradient, double CTA, stats
3. **Bento Grid** - Grille asymétrique avec graphique Chart.js
4. **Pricing** - Offre unique centrée avec checkmarks animés
5. **Testimonials** - 3 témoignages + logos clients
6. **CTA Final** - Section gradient avec avantages
7. **Footer** - Multi-colonnes + newsletter

## 🛠️ Stack technique

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Chart.js + react-chartjs-2
- **Icons**: Lucide React
- **Language**: TypeScript

## 📝 Scripts disponibles

```bash
npm run dev      # Démarrage développement
npm run build    # Build production
npm run start    # Démarrage production
npm run lint     # Linting ESLint
npm run format   # Formatage Prettier
```

## 🎯 Performance

- Images WebP optimisées
- Lazy loading avec IntersectionObserver
- GPU-accelerated animations (transform, opacity)
- Font-display: swap
- Critical CSS inline
- Lighthouse targets: 90+ partout

## ♿ Accessibilité

- Focus rings visibles (2px blue)
- Labels ARIA complets
- Contraste AA minimum
- Navigation clavier
- Support prefers-reduced-motion

## 📱 Responsive

- **Desktop**: 1280px+
- **Tablette**: 768px - 1279px
- **Mobile**: < 768px

## 🔮 Prochaines étapes

- [ ] Ajouter des images réelles dans `/public/images`
- [ ] Connecter le formulaire newsletter à une API
- [ ] Ajouter une page projets/portfolio
- [ ] Implémenter le mode sombre
- [ ] Configurer Analytics
- [ ] Déployer sur Vercel

## 📄 Licence

MIT
