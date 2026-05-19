import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title:
    "Invest In Narela | Premium Real Estate & Property Dealer in Delhi",
  description:
    "Find your dream property in Narela. Invest In Narela is the premier real estate platform for luxury residential, commercial, and investment properties in Delhi.",
  verification: {
    google: "t6PnryPQ5h4mxUUs5RCl8bxPxti6efIfOfTFl-gjpJI",
  },
  openGraph: {
    title: "Invest In Narela | Property Deals in Narela",
    description:
      "Find your dream property in Narela. We offer premium residential and commercial properties.",
    url: "https://investinnarela.in",
    siteName: "Invest In Narela",
    images: [
      {
        url: "https://investinnarela.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Invest In Narela - Real Estate",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invest In Narela | Premium Real Estate",
    description: "Delhi’s Premier Property Platform in Narela.",
    images: ["https://investinnarela.in/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Invest In Narela",
    image: "https://investinnarela.in/og-image.jpg",
    "@id": "https://investinnarela.in",
    url: "https://investinnarela.in",
    telephone: "+919310868777",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Invest In Narela HQ, Near Metro",
      addressLocality: "Narela",
      addressRegion: "Delhi",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.8428,
      longitude: 77.0906,
    },
    description:
      "Invest In Narela is your trusted property partner for buying, selling, and investing in residential and commercial properties in Narela, Delhi.",
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="font-sans antialiased text-[#1A1A1A] bg-[#FAFAFA] w-full min-h-screen"
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
