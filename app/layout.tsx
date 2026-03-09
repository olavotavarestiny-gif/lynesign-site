import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'LyneSign | Indoor Digital Billboards & Local Marketing in Houston',
  description:
    'Amplify your brand with cutting-edge indoor digital billboards and data-driven marketing solutions in Houston, TX. Reach local customers where they shop, eat, work & play.',
  keywords: [
    'indoor digital billboards',
    'local advertising Houston',
    'digital marketing',
    'advertising agency Houston',
    'local SEO',
    'digital signage',
  ],
  metadataBase: new URL('https://lynesign.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lynesign.com',
    siteName: 'LyneSign',
    title: 'LyneSign | Indoor Digital Billboards & Local Marketing',
    description: 'Amplify your brand with cutting-edge indoor digital billboards and data-driven marketing solutions in Houston.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LyneSign | Indoor Digital Billboards',
    description: 'Reach local customers with cutting-edge digital advertising in Houston',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
