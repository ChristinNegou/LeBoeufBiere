import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
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

export const metadata: Metadata = {
  title: "Contact | Le Bœuf & Bière",
  description:
    "Contactez le Bœuf & Bière à Trois-Rivières. Adresse, téléphone, horaires et formulaire de contact.",
};

const hours = [
  { day: "Lundi", hours: "11h00 – 23h00" },
  { day: "Mardi", hours: "11h00 – 23h00" },
  { day: "Mercredi", hours: "11h00 – 23h00" },
  { day: "Jeudi", hours: "11h00 – 23h00" },
  { day: "Vendredi", hours: "11h00 – 23h00" },
  { day: "Samedi", hours: "10h00 – 00h00" },
  { day: "Dimanche", hours: "10h00 – 00h00" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#FAFAF7]">
        {/* Header */}
        <div className="bg-[#2C1810] py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#C9A84C] uppercase tracking-[0.3em] text-xs font-semibold mb-4">
              On est là pour vous
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-bold">
              Nous contacter
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Left: Info */}
            <div className="space-y-8">
              {/* Address */}
              <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-100">
                <h2 className="font-serif text-xl text-[#2C1810] font-bold mb-4">
                  Où nous trouver
                </h2>
                <div className="flex items-start gap-3 text-gray-600">
                  <MapPin size={20} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-[#2C1810]">1234 rue des Forges</p>
                    <p>Trois-Rivières, QC G9A 2G4</p>
                  </div>
                </div>

                {/* Google Maps embed */}
                <div className="mt-5 rounded-lg overflow-hidden border border-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.0!2d-72.5415!3d46.3432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc8c1e3b0f8f8f5%3A0x1234567890abcdef!2sRue%20des%20Forges%2C%20Trois-Rivi%C3%A8res%2C%20QC!5e0!3m2!1sfr!2sca!4v1234567890"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Carte du restaurant"
                  />
                </div>
              </div>

              {/* Contact info */}
              <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-100">
                <h2 className="font-serif text-xl text-[#2C1810] font-bold mb-4">
                  Coordonnées
                </h2>
                <div className="space-y-3">
                  <a
                    href="tel:+18195550123"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#C9A84C] transition-colors"
                  >
                    <Phone size={18} className="text-[#C9A84C] shrink-0" />
                    <span>(819) 555-0123</span>
                  </a>
                  <a
                    href="mailto:info@leboeufetbiere.ca"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#C9A84C] transition-colors"
                  >
                    <Mail size={18} className="text-[#C9A84C] shrink-0" />
                    <span>info@leboeufetbiere.ca</span>
                  </a>
                </div>

                <div className="flex gap-3 mt-5 pt-5 border-t border-gray-100">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#C9A84C] transition-colors"
                  >
                    <InstagramIcon size={16} /> Instagram
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#C9A84C] transition-colors"
                  >
                    <FacebookIcon size={16} /> Facebook
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-100">
                <h2 className="font-serif text-xl text-[#2C1810] font-bold mb-4 flex items-center gap-2">
                  <Clock size={18} className="text-[#C9A84C]" />
                  Horaires d&apos;ouverture
                </h2>
                <ul className="space-y-2.5">
                  {hours.map(({ day, hours: h }) => (
                    <li key={day} className="flex justify-between text-sm">
                      <span className="text-gray-500">{day}</span>
                      <span className="font-medium text-[#2C1810]">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Contact form */}
            <div>
              <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-100">
                <h2 className="font-serif text-xl text-[#2C1810] font-bold mb-1">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-400 text-sm mb-6">
                  Nous répondons sous 24–48h en jours ouvrables.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
