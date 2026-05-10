import type {Metadata} from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Public Image Consultant | Delhi Political PR Agency',
  description: 'Delhi’s Premier Political PR & Public Image Consultancy. We build authority, visibility, influence, and public trust for politicians, creators, public figures, and brands across Delhi.',
  openGraph: {
    title: 'Public Image Consultant | Delhi Political PR Agency',
    description: 'Delhi’s Premier Political PR & Public Image Consultancy.',
    url: 'https://publicimageconsultant.in',
    siteName: 'Public Image Consultant',
    images: [
      {
        url: 'https://publicimageconsultant.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Public Image Consultant',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Public Image Consultant | Delhi Political PR Agency',
    description: 'Delhi’s Premier Political PR & Public Image Consultancy.',
    images: ['https://publicimageconsultant.in/og-image.jpg'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Public Image Consultant',
    image: 'https://publicimageconsultant.in/og-image.jpg',
    '@id': 'https://publicimageconsultant.in',
    url: 'https://publicimageconsultant.in',
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
    <html lang="en" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-white bg-[#050B18] w-full min-h-screen" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
