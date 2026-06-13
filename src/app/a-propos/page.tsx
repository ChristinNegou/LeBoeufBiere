import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Leaf, Beer, Heart, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos | Le Bœuf & Bière",
  description:
    "L'histoire du Bœuf & Bière, brasserie artisanale fondée en 2018 à Trois-Rivières par deux amis passionnés de cuisine québécoise et de bières artisanales.",
};

const team = [
  {
    name: "Marc-André Bouchard",
    role: "Chef cuisinier & Co-fondateur",
    bio: "Formé à l'Institut de tourisme et d'hôtellerie du Québec, Marc-André s'est spécialisé dans la cuisine régionale québécoise. Son obsession pour les produits locaux et les cuissons lentes est la signature de notre cuisine.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&auto=format&fit=crop",
  },
  {
    name: "Simon Lafrenière",
    role: "Maître brasseur & Co-fondateur",
    bio: "Passionné de fermentation depuis l'adolescence, Simon a perfectionné son art pendant dix ans avant d'ouvrir la brasserie. Ses recettes de bières intègrent des ingrédients locaux uniques comme le sirop d'érable et les herbes des Laurentides.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop",
  },
  {
    name: "Isabelle Roy",
    role: "Directrice de salle",
    bio: "Avec 15 ans d'expérience dans la restauration haut de gamme montréalaise, Isabelle a rejoint l'aventure en 2020. Sa philosophie : chaque client doit se sentir comme un invité à la maison.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Produits locaux",
    description:
      "Plus de 90% de nos ingrédients proviennent de producteurs québécois à moins de 200 km. Nous travaillons avec des fermes certifiées de la Mauricie et du Centre-du-Québec.",
  },
  {
    icon: Beer,
    title: "Bières artisanales",
    description:
      "Chacune de nos bières est brassée sur place en petites quantités. Nos recettes évoluent avec les saisons, en intégrant houblons et céréales du terroir québécois.",
  },
  {
    icon: Heart,
    title: "Expérience chaleureuse",
    description:
      "Nous croyons que la restauration est avant tout une affaire humaine. Notre équipe est formée pour créer des moments mémorables, des petits-déjeuners aux grandes tablées.",
  },
];

const press = [
  {
    outlet: "Le Nouvelliste",
    quote: "Une brasserie qui redéfinit la gastronomie trifluvienne. Une adresse incontournable.",
    year: "2024",
  },
  {
    outlet: "Tourisme Québec",
    quote: "Lauréat du Prix Excellence Terroir 2023 — catégorie Restauration artisanale.",
    year: "2023",
  },
  {
    outlet: "Caribou Magazine",
    quote: "Marc-André Bouchard figure parmi les chefs les plus inspirants de la nouvelle scène culinaire québécoise.",
    year: "2024",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#FAFAF7]">
        {/* Header */}
        <div className="bg-[#2C1810] py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#C9A84C] uppercase tracking-[0.3em] text-xs font-semibold mb-4">
              Depuis 2018
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-bold">
              Notre histoire
            </h1>
          </div>
        </div>

        {/* Story */}
        <section className="py-20 bg-[#FAFAF7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Tout a commencé dans le sous-sol de Marc-André, à l'automne 2014. Deux
                  amis d'enfance, une cuve de brassage bricolée et une passion commune pour
                  les arômes complexes des ales et lagers artisanales. Pendant quatre ans,
                  Marc-André et Simon ont affiné leurs recettes, expérimenté avec les
                  ingrédients du terroir québécois et rêvé d'un espace où partager leur
                  passion avec Trois-Rivières.
                </p>
                <p>
                  En avril 2018, le Bœuf & Bière ouvre ses portes rue des Forges, dans un
                  ancien entrepôt de brique rouge qui incarne parfaitement l'esprit industriel
                  et chaleureux qu'ils imaginaient. La cuisine de Marc-André et les bières de
                  Simon se répondent harmonieusement : les sauces mijotées à la rousse fumée,
                  les marinades à l'IPA houblonnée, les desserts au stout au chocolat.
                </p>
                <p>
                  En 2020, la crise sanitaire a failli tout emporter. Mais la solidarité
                  trifluvienne a été immense : commandes de plats à emporter, bouteilles de
                  bière à la brasserie, messages d'encouragement. Cette période difficile a
                  renforcé nos liens avec la communauté et affermi notre conviction que la
                  restauration locale est un pilier essentiel de la vie sociale.
                </p>
                <p>
                  Aujourd'hui, l'équipe compte vingt-deux personnes, la brasserie produit
                  six bières permanentes et une dizaine de créations saisonnières par an.
                  Mais l'âme reste la même : deux amis, une table, une pinte bien versée.
                  Bienvenue chez nous.
                </p>
                <p>
                  Notre engagement envers la durabilité se reflète dans chaque décision
                  opérationnelle. Les résidus de brassage sont transformés en pain artisanal
                  par notre partenaire boulangerie, les déchets alimentaires sont compostés,
                  et nous avons investi en 2023 dans un système de récupération d'eau de
                  brassage qui réduit notre consommation de 40%.
                </p>
              </div>
              <div className="relative">
                <div className="relative h-80 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&auto=format&fit=crop"
                    alt="La brasserie du Bœuf & Bière"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#C9A84C] text-white rounded-lg px-5 py-4 shadow-lg">
                  <p className="font-serif text-3xl font-bold">2018</p>
                  <p className="text-xs text-white/80">Fondé à Trois-Rivières</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-[#2C1810]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-[#C9A84C] uppercase tracking-[0.3em] text-xs font-semibold mb-4">
                Les visages derrière l'assiette
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
                Notre équipe
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-[#1a0d09] rounded-xl overflow-hidden"
                >
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-white font-bold">
                      {member.name}
                    </h3>
                    <p className="text-[#C9A84C] text-sm font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-[#FAFAF7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-[#C9A84C] uppercase tracking-[0.3em] text-xs font-semibold mb-4">
                Ce qui nous guide
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C1810] font-bold">
                Nos valeurs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map(({ icon: Icon, title, description }) => (
                <div key={title} className="text-center px-4">
                  <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-5">
                    <Icon size={28} className="text-[#C9A84C]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#2C1810] font-bold mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Press */}
        <section className="py-20 bg-cream-dark bg-[#F0EDE8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-[#C9A84C] uppercase tracking-[0.3em] text-xs font-semibold mb-4">
                Ils parlent de nous
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2C1810] font-bold">
                Presse & récompenses
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {press.map((item) => (
                <div
                  key={item.outlet}
                  className="bg-white rounded-xl p-7 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Award size={18} className="text-[#C9A84C]" />
                      <span className="font-bold text-[#2C1810]">{item.outlet}</span>
                    </div>
                    <span className="text-xs text-gray-400">{item.year}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
