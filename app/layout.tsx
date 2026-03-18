import type { Metadata } from 'next';
import './globals.css';
import { JsonLd } from '@/components/json-ld';

const siteUrl = 'https://dvlegales.com.ar';
const siteName = 'DV Legales';
const siteTitle = 'DV Legales | Asesoramiento legal estratégico';
const siteDescription =
  'Estudio jurídico en Caseros, Provincia de Buenos Aires. Asesoramiento legal integral en derecho tributario, laboral empresarial, comercial, penal, familia, sucesiones y daños.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  keywords: [
    'DV Legales',
    'estudio jurídico',
    'abogados en Caseros',
    'abogados en Buenos Aires',
    'derecho tributario',
    'derecho laboral empresarial',
    'derecho comercial y societario',
    'derecho penal',
    'derecho de familia',
    'sucesiones',
    'derecho de daños',
    'asesoramiento legal'
  ],
  authors: [{ name: 'DV Legales', url: siteUrl }],
  creator: 'DV Legales',
  publisher: 'DV Legales',
  alternates: {
    canonical: '/'
  },
  category: 'legal services',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DV Legales | Asesoramiento legal estratégico'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/twitter-image.jpg']
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: ['/favicon.ico']
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
