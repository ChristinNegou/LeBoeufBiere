import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1a0d09] text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-[#C9A84C] text-2xl font-bold mb-4">
              Le Bœuf & Bière
            </h3>
            <p className="text-sm leading-relaxed text-white/60 mb-6">
              Brasserie artisanale au cœur de Trois-Rivières. Une cuisine québécoise authentique,
              des bières brassées sur place et une ambiance chaleureuse.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A84C] transition-colors"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A84C] transition-colors"
              >
                <FacebookIcon size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-widest text-xs mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ["Accueil", "/"],
                ["Notre menu", "/menu"],
                ["Réservation", "/reservation"],
                ["À propos", "/a-propos"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-[#C9A84C] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-widest text-xs mb-5">
              Horaires
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Clock size={14} className="mt-0.5 text-[#C9A84C] shrink-0" />
                <div>
                  <p className="text-white/70">Lun – Ven</p>
                  <p>11h00 – 23h00</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="mt-0.5 text-[#C9A84C] shrink-0" />
                <div>
                  <p className="text-white/70">Sam – Dim</p>
                  <p>10h00 – 00h00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-widest text-xs mb-5">
              Nous trouver
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-[#C9A84C] shrink-0" />
                <span>1234 rue des Forges<br />Trois-Rivières, QC G9A 2G4</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[#C9A84C] shrink-0" />
                <a href="tel:+18195550123" className="hover:text-[#C9A84C] transition-colors">
                  (819) 555-0123
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[#C9A84C] shrink-0" />
                <a href="mailto:info@leboeufetbiere.ca" className="hover:text-[#C9A84C] transition-colors">
                  info@leboeufetbiere.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Le Bœuf & Bière · Tous droits réservés</p>
          <p>
            Site créé par{" "}
            <a
              href="https://github.com/ChristinNegou"
              className="text-[#C9A84C] hover:underline"
            >
              Christin Negou — Développeur web & mobile Québec
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
