import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MenuGrid from "@/components/menu/MenuGrid";
import { DEMO_MENU_ITEMS } from "@/lib/demo-data";
import { MenuItem } from "@/lib/types";

export const metadata: Metadata = {
  title: "Notre Menu | Le Bœuf & Bière",
  description:
    "Découvrez notre menu complet : entrées, plats mijotés, grillades, bières artisanales maison, desserts et boissons. Produits locaux québécois.",
};

async function getMenuItems(): Promise<MenuItem[]> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey || supabaseUrl === "your_supabase_url") {
    return DEMO_MENU_ITEMS;
  }

  try {
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await supabase
      .from("menu_items")
      .select("*")
      .eq("is_available", true)
      .order("sort_order");

    if (error || !data) return DEMO_MENU_ITEMS;
    return data as MenuItem[];
  } catch {
    return DEMO_MENU_ITEMS;
  }
}

export default async function MenuPage() {
  const items = await getMenuItems();

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#FAFAF7]">
        {/* Header */}
        <div className="bg-[#2C1810] py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#C9A84C] uppercase tracking-[0.3em] text-xs font-semibold mb-4">
              Saison printemps–été 2025
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-4">
              Notre Menu
            </h1>
            <p className="text-white/60 max-w-lg mx-auto">
              Une sélection de plats élaborés avec les meilleurs produits locaux
              du Québec, accompagnés de nos bières artisanales brassées sur place.
            </p>
          </div>
        </div>

        {/* Menu content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <MenuGrid items={items} />

          <p className="text-center text-gray-400 text-sm mt-12 pt-8 border-t border-gray-100">
            Menu susceptible de changer selon l&apos;arrivage · Prix taxes non incluses
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
