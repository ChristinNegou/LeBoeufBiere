import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ReservationForm from "@/components/reservation/ReservationForm";

export const metadata: Metadata = {
  title: "Réservation | Le Bœuf & Bière",
  description:
    "Réservez votre table au Bœuf & Bière à Trois-Rivières. Formulaire de réservation en ligne avec confirmation immédiate.",
};

export default function ReservationPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#FAFAF7]">
        {/* Header */}
        <div className="bg-[#2C1810] py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#C9A84C] uppercase tracking-[0.3em] text-xs font-semibold mb-4">
              En ligne · Gratuit · Instantané
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-4">
              Réservez votre table
            </h1>
            <p className="text-white/60 max-w-lg mx-auto">
              Choisissez votre date et heure, remplissez vos informations —
              nous vous confirmons par email sous quelques heures.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ReservationForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
