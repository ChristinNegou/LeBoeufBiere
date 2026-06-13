"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&auto=format&fit=crop')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[#C9A84C] uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Brasserie artisanale
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight">
            Le Bœuf & Bière
          </h1>
          <p className="text-white/80 text-lg sm:text-xl lg:text-2xl font-light tracking-wide mb-10">
            Trois-Rivières, Québec
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center bg-[#C9A84C] text-white font-semibold px-8 py-4 rounded text-base hover:bg-[#a8872f] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Voir le menu
            </Link>
            <Link
              href="/reservation"
              className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-4 rounded text-base hover:bg-white hover:text-[#2C1810] transition-all duration-200"
            >
              Réserver une table
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Hours badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/40 backdrop-blur-sm text-white/80 text-sm px-5 py-2.5 rounded-full border border-white/20"
      >
        <Clock size={14} className="text-[#C9A84C]" />
        <span>Lun–Ven 11h–23h · Sam–Dim 10h–00h</span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
