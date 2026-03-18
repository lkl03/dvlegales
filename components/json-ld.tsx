type Props = {
  url?: string;
};

export function JsonLd({ url = 'https://dvlegales.com.ar' }: Props) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${url}#legalservice`,
    name: 'DV Legales',
    url,
    image: `${url}/opengraph-image.jpg`,
    description:
      'Estudio jurídico en Caseros, Provincia de Buenos Aires. Asesoramiento legal integral en derecho tributario, laboral empresarial, comercial, penal, familia, sucesiones y daños.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Curapaligüe 1942',
      addressLocality: 'Caseros',
      addressRegion: 'Provincia de Buenos Aires',
      postalCode: 'B1678HJP',
      addressCountry: 'AR'
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Provincia de Buenos Aires'
    },
    email: 'dvlegales@gmail.com',
    telephone: ['+54 9 11 5117 5372', '+54 9 11 5418 9477'],
    sameAs: [
      'https://www.linkedin.com/in/mar%C3%ADa-soledad-del-valle-bb1151200/',
      'https://www.linkedin.com/in/maximiliano-minini-68580622a/'
    ],
    founder: [
      { '@type': 'Attorney', name: 'Del Valle María Soledad' },
      { '@type': 'Attorney', name: 'Minini Maximiliano' }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
