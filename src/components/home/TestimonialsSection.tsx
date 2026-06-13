"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import StarRating from "@/components/ui/StarRating";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Tremblay",
    location: "Trois-Rivières, QC",
    rating: 5,
    text: "Un repas absolument mémorable. La côte de bœuf était cuite à la perfection et la bière La Forge accompagnait divinement le tout. Le service est attentionné sans être envahissant. Un vrai coup de cœur !",
    initials: "ST",
  },
  {
    name: "Jean-François Morin",
    location: "Shawinigan, QC",
    rating: 5,
    text: "On y retourne régulièrement en famille. La poutine au canard confit est tout simplement divine — un classique québécois revisité avec talent. L'ambiance chaleureuse et rustique est parfaite pour une soirée en famille.",
    initials: "JM",
  },
  {
    name: "Amélie Gagnon",
    location: "Montréal, QC",
    rating: 5,
    text: "En visite à Trois-Rivières pour un week-end, nous avons eu la chance de découvrir ce restaurant sur recommandation. Les bières artisanales sont exceptionnelles, surtout la Noire de Trois-Rivières. On reviendra sans hésiter !",
    initials: "AG",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#C9A84C] uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            Vos avis
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C1810] font-bold">
            Ce que disent nos clients
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <Quote size={28} className="text-[#C9A84C]/30 mb-4" />
              <StarRating rating={t.rating} size={16} />
              <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center text-white font-semibold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#2C1810] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
