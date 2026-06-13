"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-[#C9A84C] uppercase tracking-[0.3em] text-xs font-semibold mb-4">
              Notre histoire
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C1810] font-bold mb-8 leading-tight">
              Fondés par passion,<br />animés par la tradition
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                En 2018, deux amis d'enfance de Trois-Rivières, Marc-André Bouchard et
                Simon Lafrenière, décident de transformer leur passion commune pour la
                brasserie artisanale en une aventure gastronomique. Après des années à
                perfectionner leurs recettes dans leurs caves respectives, ils ouvrent
                les portes du Bœuf & Bière avec une vision simple : offrir une cuisine
                québécoise authentique, sublimée par des bières brassées sur place.
              </p>
              <p>
                Depuis le premier jour, notre engagement envers les produits locaux est
                au cœur de chaque assiette. Nos viandes proviennent de fermes mauriciennes
                certifiées, nos légumes arrivent chaque matin du marché du Port, et nos
                fromages sont sélectionnés avec soin auprès des artisans fromagers du Québec.
                Nous croyons qu'un bon repas commence par de bons ingrédients.
              </p>
              <p>
                Aujourd'hui, le Bœuf & Bière est devenu une institution trifluvienne.
                Notre brasserie produit six bières signature et une création saisonnière
                mensuelle, toutes élaborées à partir de houblons et de malts québécois.
                Venez partager notre table — c'est celle de toute une communauté.
              </p>
            </div>

            <div className="mt-10 flex gap-12">
              {[
                { value: "6+", label: "Années d'expérience" },
                { value: "12", label: "Bières brassées" },
                { value: "95%", label: "Produits locaux" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-serif text-3xl font-bold text-[#C9A84C]">{value}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="relative h-[480px] lg:h-[560px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
                alt="Intérieur chaud du Bœuf & Bière"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#C9A84C]/20 rounded-lg -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#2C1810]/10 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
