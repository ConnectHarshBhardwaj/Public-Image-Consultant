import type {Metadata} from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

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
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-white bg-[#050B18] w-full min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
