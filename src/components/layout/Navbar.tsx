"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "Menu" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-[#2C1810] shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="font-serif text-[#C9A84C] text-xl sm:text-2xl font-bold tracking-wide hover:opacity-90 transition-opacity"
            >
              Le Bœuf & Bière
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-[#C9A84C]"
                      : "text-white/80 hover:text-[#C9A84C]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/reservation"
                className="hidden md:inline-flex items-center bg-[#C9A84C] text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-[#a8872f] transition-colors duration-200"
              >
                Réserver
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden text-white p-2 hover:text-[#C9A84C] transition-colors"
                aria-label="Ouvrir le menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
