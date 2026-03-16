import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://dvlegales.com.ar'),
  title: 'DV Legales | Asesoramiento legal estratégico',
  description:
    'Sitio institucional de DV Legales. Asesoramiento integral en derecho tributario, laboral empresarial, comercial, penal, familia y daños.',
  openGraph: {
    title: 'DV Legales',
    description:
      'Asesoramiento legal integral con enfoque estratégico, humano y profesional.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DV Legales',
    description:
      'Asesoramiento legal integral con enfoque estratégico, humano y profesional.'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
