-- ============================================================
-- Le Bœuf & Bière — Schéma Supabase
-- Coller dans l'éditeur SQL de ton projet Supabase
-- ============================================================

-- Table des items du menu
create table if not exists menu_items (
  id uuid default gen_random_uuid() primary key,
  name_fr text not null,
  name_en text,
  description_fr text,
  description_en text,
  category text not null check (category in ('entrees', 'plats', 'grillades', 'bieres', 'desserts', 'boissons')),
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

-- Table des réservations
create table if not exists reservations (
  id uuid default gen_random_uuid() primary key,
  confirmation_number text not null unique,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  date date not null,
  time time not null,
  party_size integer not null check (party_size between 1 and 20),
  special_occasion text,
  message text,
  status text default 'pending' check (status in ('pending', 'confirmed', 'cancelled')),
  created_at timestamp with time zone default now()
);

-- RLS: lecture publique du menu
alter table menu_items enable row level security;
create policy "Public can read menu_items" on menu_items
  for select using (true);

-- RLS: insertion publique des réservations
alter table reservations enable row level security;
create policy "Public can insert reservations" on reservations
  for insert with check (true);

-- ============================================================
-- DONNÉES DE DÉMONSTRATION
-- ============================================================

insert into menu_items (name_fr, description_fr, category, price, image_url, is_vegetarian, is_gluten_free, is_popular, is_new, sort_order) values

-- ENTRÉES
('Tartare de bœuf classique', 'Bœuf Angus haché à la main, câpres, cornichons, jaune d''œuf, moutarde de Dijon, croûtons grillés', 'entrees', 18.00, 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop', false, false, true, false, 1),
('Soupe à l''oignon gratinée', 'Bouillon de bœuf maison, oignons caramélisés, croûton de pain artisanal, fromage St-Guillaume fondu', 'entrees', 14.00, 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format&fit=crop', true, false, true, false, 2),
('Poutine au canard confit', 'Frites de pommes de terre locales, fromage en grains, canard confit effiloché, sauce brune maison', 'entrees', 22.00, 'https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=600&auto=format&fit=crop', false, true, false, true, 3),
('Plateau de fromages québécois', 'Sélection de 4 fromages artisanaux du Québec, confiture de figues, noix caramélisées, craquelins', 'entrees', 24.00, 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&auto=format&fit=crop', true, false, false, false, 4),
('Crevettes poêlées à l''ail', 'Crevettes tigrées, beurre d''ail et fines herbes, citron confit, pain baguette artisanal', 'entrees', 20.00, 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&auto=format&fit=crop', false, true, false, false, 5),

-- PLATS PRINCIPAUX
('Côte de bœuf pour deux', 'Côte de bœuf Angus 800g, beurre maître d''hôtel, pommes de terre grenailles rôties, légumes du marché', 'plats', 89.00, 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&auto=format&fit=crop', false, true, true, false, 1),
('Burger Le Bœuf & Bière', 'Galette bœuf Angus 200g, bacon croustillant, cheddar vieilli, oignons caramélisés à la bière blonde, frites maison', 'plats', 26.00, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop', false, false, true, false, 2),
('Saumon de l''Atlantique', 'Filet de saumon poêlé, purée de céleri-rave, beurre blanc au citron, asperges vertes, câpres', 'plats', 34.00, 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop', false, true, false, true, 3),
('Risotto aux champignons sauvages', 'Champignons forestiers du Québec, parmesan vieilli 24 mois, truffe noire, huile d''olive extra-vierge', 'plats', 28.00, 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&auto=format&fit=crop', true, true, false, false, 4),
('Poulet rôti aux herbes', 'Poulet fermier entier rôti, sauce au jus, pommes de terre dauphinoises, salade verte', 'plats', 32.00, 'https://images.unsplash.com/photo-1598103442097-8b74394b95c8?w=600&auto=format&fit=crop', false, true, false, false, 5),
('Pâtes à la carbonara maison', 'Linguines fraîches, pancetta croustillante, pecorino romano, œufs biologiques, poivre noir concassé', 'plats', 24.00, 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&auto=format&fit=crop', false, false, false, false, 6),

-- GRILLADES
('Entrecôte 300g', 'Entrecôte Angus élevé au grain, cuisson au charbon de bois, sauce au poivre vert, frites maison', 'grillades', 42.00, 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&auto=format&fit=crop', false, true, true, false, 1),
('Filet mignon 250g', 'Filet de bœuf tendre, sauce au foie gras, purée de pommes de terre truffée, haricots verts', 'grillades', 52.00, 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop', false, true, false, false, 2),
('Côtelettes d''agneau', 'Rack d''agneau du Québec, herbes de Provence, tapenade d''olives, ratatouille provençale', 'grillades', 46.00, 'https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=600&auto=format&fit=crop', false, true, false, true, 3),

-- BIÈRES
('La Forge — Blonde artisanale', 'Bière blonde légère et rafraîchissante, notes de miel et de céréales. 5.2% alc.', 'bieres', 8.50, 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&auto=format&fit=crop', true, false, true, false, 1),
('La Mauricie — IPA houblonnée', 'India Pale Ale généreusement houblonnée, arômes d''agrumes et de résine. 6.5% alc.', 'bieres', 9.00, 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=600&auto=format&fit=crop', true, false, true, false, 2),
('La Noire de Trois-Rivières', 'Stout impérial aux notes de café torréfié et de chocolat noir. 7.8% alc.', 'bieres', 9.50, 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&auto=format&fit=crop', true, false, false, false, 3),
('La Brasseur — Rousse fumée', 'Bière rousse aux malts fumés, caractère robuste, finale longue et chaleureuse. 5.8% alc.', 'bieres', 9.00, 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=600&auto=format&fit=crop', true, false, false, true, 4),
('La Belle Saison', 'Saison belge aux épices, notes d''orange et de coriandre, pétillante et estivale. 6.2% alc.', 'bieres', 9.00, 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&auto=format&fit=crop', true, false, false, false, 5),
('Bière du moment — Spéciale saisonnière', 'Notre création éphémère du brasseur. Quantités limitées.', 'bieres', 10.00, 'https://images.unsplash.com/photo-1566843972142-a7fcb70de55b?w=600&auto=format&fit=crop', true, false, false, true, 6),

-- DESSERTS
('Fondant au chocolat noir', 'Cœur coulant de chocolat 70%, glace à la vanille de Tahiti, coulis de framboises', 'desserts', 12.00, 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&auto=format&fit=crop', true, false, true, false, 1),
('Tarte au sucre traditionnelle', 'Recette grand-mère, sirop d''érable du Québec, crème fouettée à la fleur de sel', 'desserts', 10.00, 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&auto=format&fit=crop', true, false, true, false, 2),
('Crème brûlée à l''érable', 'Crème onctueuse parfumée au sirop d''érable, caramel craquant, sucre à la cassonade', 'desserts', 11.00, 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&auto=format&fit=crop', true, true, false, false, 3),
('Gâteau au fromage et coulis de bleuets', 'Fromage à la crème onctueux sur croûte sablée, coulis de bleuets sauvages du Lac-Saint-Jean', 'desserts', 11.00, 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&auto=format&fit=crop', true, false, false, true, 4),

-- BOISSONS
('Limonade maison à l''érable', 'Citrons pressés, sirop d''érable, eau pétillante, menthe fraîche', 'boissons', 6.00, 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&auto=format&fit=crop', true, true, false, false, 1),
('Café de spécialité', 'Espresso simple ou double, torréfaction locale, option lait d''avoine ou noisette', 'boissons', 4.50, 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop', true, true, false, false, 2),
('Cocktail sans alcool — Pomme & Gingembre', 'Jus de pomme de verger local, gingembre frais, citron vert, eau tonique, glaçons', 'boissons', 7.00, 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&auto=format&fit=crop', true, true, false, true, 3),
('Sélection de vins au verre', 'Demandez à notre sommelier — vins biologiques du Québec et importation privée', 'boissons', 12.00, 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop', true, true, false, false, 4);
