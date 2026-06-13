"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const specialties = [
  {
    name: "Tartare de bœuf Angus",
    description: "Bœuf haché à la main, câpres, cornichons, jaune d'œuf, moutarde de Dijon et croûtons grillés.",
    price: "18 $",
    tag: "Entrée signature",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop",
  },
  {
    name: "Côte de bœuf pour deux",
    description: "Côte Angus 800g cuite au charbon, beurre maître d'hôtel, pommes de terre grenailles et légumes du marché.",
    price: "89 $",
    tag: "Plat vedette",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&auto=format&fit=crop",
  },
  {
    name: "La Forge — Blonde artisanale",
    description: "Notre bière blonde maison, légère et rafraîchissante, notes de miel et de céréales. 5.2% alc.",
    price: "8.50 $",
    tag: "Bière maison",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&auto=format&fit=crop",
  },
];

export default function SpecialtiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#2C1810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#C9A84C] uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            Nos incontournables
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
            Nos spécialités
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-[#1a0d09] rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-3 left-3 bg-[#C9A84C] text-white text-xs font-semibold px-3 py-1 rounded">
                  {item.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-white font-bold mb-2">
                  {item.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <p className="font-serif text-[#C9A84C] text-xl font-bold">
                  {item.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/menu"
            className="inline-flex items-center border-2 border-[#C9A84C] text-[#C9A84C] font-semibold px-8 py-3.5 rounded hover:bg-[#C9A84C] hover:text-white transition-all duration-200"
          >
            Voir tout le menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
