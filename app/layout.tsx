import type {Metadata} from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Hawk Strategies | Delhi Political PR Agency',
  description: 'Delhi’s Premier Political PR & Public Image Consultancy. We build authority, visibility, influence, and public trust for politicians, creators, public figures, and brands across Delhi.',
  verification: {
    google: 't6PnryPQ5h4mxUUs5RCl8bxPxti6efIfOfTFl-gjpJI',
  },
  openGraph: {
    title: 'Hawk Strategies | Delhi Political PR Agency',
    description: 'Delhi’s Premier Political PR & Public Image Consultancy.',
    url: 'https://hawkstrategies.in',
    siteName: 'Hawk Strategies',
    images: [
      {
        url: 'https://hawkstrategies.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hawk Strategies',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hawk Strategies | Delhi Political PR Agency',
    description: 'Delhi’s Premier Political PR & Public Image Consultancy.',
    images: ['https://hawkstrategies.in/og-image.jpg'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Hawk Strategies',
    image: 'https://hawkstrategies.in/og-image.jpg',
    '@id': 'https://hawkstrategies.in',
    url: 'https://hawkstrategies.in',
    telephone: '+919310868777',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Senior Secondary School, Sanoth Village',
      addressLocality: 'Ghoga, Narela',
      addressRegion: 'Delhi',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.8291,
      longitude: 77.0673,
    },
    description: 'Delhi’s Premier Political PR & Public Image Consultancy. We build authority, visibility, influence, and public trust for politicians, creators, public figures, and brands across Delhi.',
  };

  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-[#111827] bg-[#FAFAFA] w-full min-h-screen" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
