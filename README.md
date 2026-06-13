# Le Bœuf & Bière — Site web restaurant

Site web complet pour une brasserie artisanale fictive à Trois-Rivières, Québec.
Réalisé comme pièce maîtresse de portfolio freelance.

## Démo en ligne

**URL :** https://le-boeuf-biere.vercel.app


## Stack technique

| Couche | Technologie |
|--------|-------------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS 4 |
| Base de données | Supabase (PostgreSQL) |
| Emails | Resend |
| Déploiement | Vercel |
| Langue | TypeScript 5 |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Accueil — Hero, histoire, spécialités, réservation rapide, avis |
| `/menu` | Menu filtrable par catégorie et régimes alimentaires |
| `/reservation` | Formulaire complet avec calendrier react-day-picker |
| `/a-propos` | Histoire, équipe, valeurs, presse |
| `/contact` | Carte, horaires, formulaire de contact |

## Installation

```bash
# Cloner le dépôt
git clone <url>
cd projet1

# Installer les dépendances
npm install

# Copier et remplir les variables d'environnement
cp .env.local.example .env.local
# Remplir NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, RESEND_API_KEY

# Lancer en développement
npm run dev
```

## Configuration Supabase

1. Créer un projet sur [supabase.com](https://supabase.com)
2. Copier l'URL et la clé anon dans `.env.local`
3. Exécuter le fichier `supabase-schema.sql` dans l'éditeur SQL Supabase
   — il crée les tables et insère les données de démonstration

## Configuration Resend (emails)

1. Créer un compte sur [resend.com](https://resend.com)
2. Créer une clé API
3. L'ajouter dans `.env.local` sous `RESEND_API_KEY`

> Sans ces clés, le site fonctionne entièrement avec les données de démonstration locales.

## Déploiement Vercel

```bash
# Installer la CLI Vercel
npm i -g vercel

# Déployer
vercel --prod
```

Ajouter les variables d'environnement dans le dashboard Vercel (Settings → Environment Variables).

## Structure des fichiers

```
src/
├── app/
│   ├── layout.tsx            # Layout global + SEO JSON-LD
│   ├── page.tsx              # Page d'accueil
│   ├── menu/page.tsx         # Page menu
│   ├── reservation/page.tsx  # Page réservation
│   ├── a-propos/page.tsx     # Page à propos
│   ├── contact/page.tsx      # Page contact
│   └── api/
│       ├── reservation/route.ts
│       └── contact/route.ts
├── components/
│   ├── layout/               # Navbar, Footer, MobileMenu
│   ├── home/                 # Hero, Story, Specialties, QuickReservation, Testimonials
│   ├── menu/                 # MenuGrid, MenuFilters, MenuItemCard
│   ├── reservation/          # ReservationForm
│   ├── contact/              # ContactForm
│   └── ui/                   # Button, Badge, StarRating
└── lib/
    ├── supabase.ts
    ├── types.ts
    └── demo-data.ts          # Données de démo (sans Supabase)
```

---

*Portfolio freelance — Christin Negou, développeur web & mobile Québec*
