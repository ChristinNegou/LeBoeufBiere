import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import StorySection from "@/components/home/StorySection";
import SpecialtiesSection from "@/components/home/SpecialtiesSection";
import QuickReservation from "@/components/home/QuickReservation";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export const metadata: Metadata = {
  title: "Le Bœuf & Bière | Brasserie artisanale Trois-Rivières",
  description:
    "Restaurant brasserie artisanale à Trois-Rivières. Menu québécois authentique, bières maison brassées sur place, réservations en ligne. Ouvert 7 jours sur 7.",
  keywords: [
    "restaurant Trois-Rivières",
    "brasserie artisanale Québec",
    "réservation restaurant",
    "cuisine québécoise",
    "bières artisanales",
  ],
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StorySection />
        <SpecialtiesSection />
        <QuickReservation />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
