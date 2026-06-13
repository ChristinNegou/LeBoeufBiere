# Cahier des charges — Projet 1 : Site web restaurant québécois
> Portfolio freelance · Dev : Next.js 14 · 

---

## 1. Contexte et objectif

Créer un site web fictif mais entièrement fonctionnel pour un restaurant québécois appelé
**"Le Bœuf & Bière"** — brasserie artisanale à Trois-Rivières, Québec.

Ce projet sert de pièce maîtresse du portfolio pour démontrer aux restaurateurs et
commerces locaux la capacité à livrer un site moderne, rapide, bilingue et optimisé SEO.

**Ce projet doit impressionner un restaurateur en 30 secondes.**

---

## 2. Stack technique

| Couche | Technologie | Version |
|---|---|---|
| Framework | Next.js (App Router) | 14+ |
| Styling | Tailwind CSS | 3+ |
| Base de données | Supabase (PostgreSQL) | latest |
| Emails | Resend | latest |
| Déploiement | Vercel | gratuit |
| Langue | TypeScript | 5+ |

---

## 3. Pages et routes

### 3.1 Page d'accueil `/`

**Section Hero (above the fold) :**
- Image de fond plein écran (photo haute qualité d'ambiance brasserie — utiliser une URL
  Unsplash directement dans le code, ex. `https://images.unsplash.com/photo-XXXXX`)
- Overlay sombre semi-transparent (rgba 0,0,0,0.5)
- Titre centré : "Le Bœuf & Bière" en police serif élégante
- Sous-titre : "Brasserie artisanale · Trois-Rivières"
- Deux boutons CTA : "Voir le menu" (lien vers /menu) et "Réserver une table"
  (scroll vers section réservation ou lien vers /reservation)
- Badge horaires discret en bas du hero : "Lun–Ven 11h–23h · Sam–Dim 10h–00h"

**Section "Notre histoire" :**
- Layout 2 colonnes : texte à gauche, photo à droite
- Texte fictif 3 paragraphes sur l'histoire du restaurant (fondé en 2018 par deux amis
  brasseurs, engagement produits locaux québécois, etc.)
- Photo intérieure du restaurant (Unsplash)

**Section "Nos spécialités" :**
- Grille 3 cartes : une entrée signature, un plat principal, une bière maison
- Chaque carte : photo, nom du plat, description courte, prix
- Bouton "Voir tout le menu" en bas

**Section "Réservation rapide" :**
- Formulaire inline (pas de page séparée sur la home)
- Champs : Prénom, Nom, Email, Téléphone, Date, Heure (select), Nombre de personnes (select 1–12), Message optionnel
- Bouton submit "Confirmer ma réservation"
- Envoi email via Resend à une adresse fictive de démonstration
- Message de confirmation après envoi (toast ou message inline)

**Section "Avis clients" :**
- 3 témoignages fictifs avec nom, note étoiles (5/5) et texte court
- Style cards épurées

**Footer :**
- Logo texte, adresse fictive (ex: 1234 rue des Forges, Trois-Rivières, QC G9A 2G4)
- Horaires complets
- Liens réseaux sociaux (icônes, liens # pour le portfolio)
- Mention "Site créé par [Ton Nom] · Développeur web freelance Québec" avec lien vers ton portfolio

---

### 3.2 Page Menu `/menu`

**Structure :**
- Titre de page "Notre Menu"
- Tabs ou sections filtrables : Entrées · Plats · Grillades · Bières · Desserts · Boissons
- Les items de menu sont chargés depuis Supabase (voir section base de données)
- Chaque item : photo (optionnelle), nom, description, prix, badge allergènes si applicable
- Badge "Populaire" ou "Nouveauté" sur certains items
- Mention en bas : "Menu susceptible de changer selon l'arrivage · Prix taxes non incluses"

**Filtres :**
- Boutons filtres par catégorie (Entrées, Plats, etc.)
- Filtre végétarien / sans gluten (simple toggle)

---

### 3.3 Page Réservation `/reservation`

- Formulaire complet (même champs que section home + champ occasion spéciale)
- Calendrier visuel pour la sélection de date (utiliser `react-day-picker`)
- Sélection d'heure par créneaux de 30 minutes (11h00 à 22h00)
- Validation côté client avec messages d'erreur clairs en français
- Après soumission : page de confirmation avec récapitulatif et numéro de réservation fictif (généré aléatoirement)
- Email de confirmation envoyé via Resend (template HTML simple)

---

### 3.4 Page À propos `/a-propos`

- Histoire du restaurant (texte fictif élaboré, 4–5 paragraphes)
- Section "L'équipe" : 3 fiches fictives (Chef, Brasseur, Directeur de salle) avec photo Unsplash et biographie courte
- Section "Nos valeurs" : 3 icônes + texte (Produits locaux, Bières artisanales, Expérience chaleureuse)
- Section "Presse & récompenses" : 2–3 faux logos de médias avec citation courte

---

### 3.5 Page Contact `/contact`

- Adresse complète avec carte Google Maps intégrée (embed iframe)
- Horaires détaillés par jour
- Numéro de téléphone fictif et email fictif
- Formulaire de contact simple (Nom, Email, Sujet, Message)
- Liens vers les réseaux sociaux

---

## 4. Base de données Supabase

### Table `menu_items`

```sql
create table menu_items (
  id uuid default gen_random_uuid() primary key,
  name_fr text not null,
  name_en text,
  description_fr text,
  description_en text,
  category text not null, -- 'entrees' | 'plats' | 'grillades' | 'bieres' | 'desserts' | 'boissons'
  price decimal(10,2) not null,
  image_url text,
  is_vegetarian boolean default false,
  is_gluten_free boolean default false,
  is_popular boolean default false,
  is_new boolean default false,
  is_available boolean default true,
  sort_order integer default 0,
  created_at timestamp with time zone default now()
);
```

### Table `reservations`

```sql
create table reservations (
  id uuid default gen_random_uuid() primary key,
  confirmation_number text not null,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  date date not null,
  time time not null,
  party_size integer not null,
  special_occasion text,
  message text,
  status text default 'pending', -- 'pending' | 'confirmed' | 'cancelled'
  created_at timestamp with time zone default now()
);
```

### Données de démonstration

Insérer au minimum :
- 5 entrées, 6 plats principaux, 3 grillades, 6 bières, 4 desserts, 4 boissons
- Toutes avec noms et descriptions réalistes en français québécois
- Quelques items marqués `is_popular = true` et `is_new = true`

---

## 5. Composants à créer

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Navigation sticky avec logo + liens + CTA réserver
│   │   ├── Footer.tsx          # Footer complet
│   │   └── MobileMenu.tsx      # Menu hamburger pour mobile
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── StorySection.tsx
│   │   ├── SpecialtiesSection.tsx
│   │   ├── QuickReservation.tsx
│   │   └── TestimonialsSection.tsx
│   ├── menu/
│   │   ├── MenuFilters.tsx
│   │   ├── MenuGrid.tsx
│   │   └── MenuItemCard.tsx
│   ├── reservation/
│   │   ├── ReservationForm.tsx
│   │   └── ConfirmationPage.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       └── StarRating.tsx
```

---

## 6. Design et identité visuelle

**Palette de couleurs :**
- Primaire : `#1A1A2E` (bleu nuit) ou `#2C1810` (brun cuir) — choisir selon l'ambiance
- Accent : `#C9A84C` (or brasserie)
- Fond clair : `#FAFAF7`
- Texte : `#1A1A1A`

**Typographie (Google Fonts) :**
- Titres : `Playfair Display` (serif élégant)
- Corps : `Inter` ou `Lato` (sans-serif lisible)

**Style général :**
- Ambiance chaleureuse, haut de gamme mais accessible
- Beaucoup de photos (Unsplash, libres de droits)
- Espacements généreux
- Animations subtiles au scroll (Framer Motion ou simple CSS)

---

## 7. SEO et performance

**Métadonnées à inclure sur chaque page :**
```typescript
// Exemple pour la page d'accueil
export const metadata: Metadata = {
  title: 'Le Bœuf & Bière | Brasserie artisanale Trois-Rivières',
  description: 'Restaurant brasserie artisanale à Trois-Rivières. Menu québécois, bières maison, réservations en ligne. Ouvert 7 jours sur 7.',
  keywords: ['restaurant Trois-Rivières', 'brasserie artisanale Québec', 'réservation restaurant'],
  openGraph: {
    title: 'Le Bœuf & Bière',
    description: '...',
    images: ['/og-image.jpg'],
  },
};
```

**Données structurées JSON-LD (Schema.org) sur la home :**
- Type `Restaurant` avec nom, adresse, horaires, téléphone, menu URL

**Performance :**
- Toutes les images avec `next/image` (lazy loading automatique)
- Police Google Fonts via `next/font`
- Score Lighthouse cible : 90+ sur mobile

---

## 8. Responsive design

Tous les composants doivent être parfaitement fonctionnels sur :
- Mobile : 375px (iPhone SE) et 390px (iPhone 14)
- Tablette : 768px (iPad)
- Desktop : 1280px et 1440px

La navigation mobile utilise un menu hamburger avec overlay.

---

## 9. Variables d'environnement requises

```env
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 10. Instructions de démarrage pour Claude Code

1. Initialiser le projet : `npx create-next-app@latest leboeuf-et-biere --typescript --tailwind --app --src-dir`
2. Installer les dépendances : `npm install @supabase/supabase-js resend react-day-picker framer-motion`
3. Créer le schéma Supabase et insérer les données de démonstration
4. Construire les composants dans l'ordre : Layout → Home → Menu → Reservation → About → Contact
5. Configurer les métadonnées SEO sur chaque page
6. Tester sur mobile avant de déployer

**Commande de déploiement Vercel :** `vercel --prod`

---

## 11. Livrable final attendu

- Site entièrement fonctionnel déployé sur Vercel
- URL publique du type `leboeuf-et-biere.vercel.app`
- README.md avec description du projet, stack, et instructions d'installation
- Captures d'écran desktop + mobile pour le portfolio (3–5 screenshots)
- Accès démo Supabase avec données pré-remplies

---

*Cahier des charges rédigé pour usage portfolio freelance — Christin Negou, développeur web & mobile Québec*
