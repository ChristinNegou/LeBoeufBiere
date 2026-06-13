"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "Menu" },
  { href: "/reservation", label: "Réservation" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative ml-auto w-72 h-full bg-[#2C1810] flex flex-col p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <span className="font-serif text-[#C9A84C] text-xl font-bold">
            Le Bœuf & Bière
          </span>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Fermer le menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-2 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`text-lg font-medium px-4 py-3 rounded transition-all duration-200 ${
                pathname === link.href
                  ? "bg-[#C9A84C] text-white"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-white/10">
          <Link
            href="/reservation"
            onClick={onClose}
            className="block w-full bg-[#C9A84C] text-white text-center font-semibold py-3 px-6 rounded hover:bg-[#a8872f] transition-colors"
          >
            Réserver une table
          </Link>
          <p className="text-white/40 text-xs text-center mt-4">
            Lun–Ven 11h–23h · Sam–Dim 10h–00h
          </p>
        </div>
      </div>
    </div>
  );
}
