import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://leboeuf-et-biere.vercel.app"),
  title: "Le Bœuf & Bière | Brasserie artisanale Trois-Rivières",
  description:
    "Restaurant brasserie artisanale à Trois-Rivières. Menu québécois, bières maison, réservations en ligne. Ouvert 7 jours sur 7.",
  keywords: [
    "restaurant Trois-Rivières",
    "brasserie artisanale Québec",
    "réservation restaurant",
    "bœuf bière",
  ],
  openGraph: {
    title: "Le Bœuf & Bière",
    description:
      "Brasserie artisanale à Trois-Rivières. Menu québécois authentique, bières maison brassées sur place.",
    images: ["/og-image.jpg"],
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Le Bœuf & Bière",
              description: "Brasserie artisanale à Trois-Rivières, Québec",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1234 rue des Forges",
                addressLocality: "Trois-Rivières",
                addressRegion: "QC",
                postalCode: "G9A 2G4",
                addressCountry: "CA",
              },
              telephone: "+1-819-555-0123",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://leboeuf-et-biere.vercel.app",
              servesCuisine: ["Québécoise", "Brasserie"],
              priceRange: "$$",
              openingHours: [
                "Mo-Fr 11:00-23:00",
                "Sa-Su 10:00-00:00",
              ],
              hasMenu: `${process.env.NEXT_PUBLIC_SITE_URL || "https://leboeuf-et-biere.vercel.app"}/menu`,
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
