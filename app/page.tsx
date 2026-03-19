import Link from 'next/link';
import {
  ArrowUp,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Instagram
} from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { HeroTypingTitle } from '@/components/hero-typing-title';
import { Reveal } from '@/components/reveal';
import { ServicesShowcase } from '@/components/services-showcase';
import { SiteHeader } from '@/components/site-header';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';

const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#estudio', label: 'El estudio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#contacto', label: 'Contacto' }
] as const;

const highlights = [
  {
    pretitle: 'Especialización',
    title: 'Atención personalizada',
    copy:
      'Trabajamos cada consulta con escucha real, análisis jurídico serio y una estrategia alineada a la situación concreta.'
  },
  {
    pretitle: 'Planificación',
    title: 'Estrategia jurídica clara',
    copy:
      'Acompañamos con criterio técnico para ordenar escenarios, anticipar riesgos y definir próximos pasos.'
  },
  {
    pretitle: 'Dedicación',
    title: 'Acompañamiento integral',
    copy:
      'Ofrecemos seguimiento cercano, directo y sostenido desde la primera conversación hasta la ejecución de la estrategia.'
  }
] as const;

const services = [
  {
    name: 'Derecho Tributario',
    summary:
      'Asesoramiento al contribuyente en materia tributaria local, provincial, nacional e internacional.',
    detail:
      'Se analiza cada situación tributaria con profundidad para construir una estrategia sólida, preventiva o defensiva, frente a inspecciones, determinaciones fiscales y conflictos vinculados a la ley penal tributaria.',
    bullets: [
      'Análisis técnico frente a contingencias fiscales y planificación dentro del marco legal.',
      'Defensa y acompañamiento en conflictos con organismos recaudadores y procesos complejos.'
    ]
  },
  {
    name: 'Derecho Laboral Empresarial',
    summary:
      'Acompañamiento legal a empresas en relaciones laborales, contratación y cumplimiento normativo.',
    detail:
      'El servicio abarca modalidades de contratación, redacción de contratos, reglamentos internos, esquemas de compensación y resolución de conflictos, con foco en ordenar relaciones laborales y reducir exposición al riesgo.',
    bullets: [
      'Soporte estratégico para contratación, reglamentos internos y sanciones disciplinarias.',
      'Asistencia para prevenir conflictos y responder con criterio ante reclamos o contingencias.'
    ]
  },
  {
    name: 'Derecho Comercial y Societario',
    summary:
      'Soporte legal para constitución de sociedades, reorganización, expansión y defensa judicial.',
    detail:
      'Se acompaña el desarrollo del negocio con una mirada integral, desde la estructura societaria inicial hasta reorganizaciones, conflictos entre socios, cumplimiento y litigios vinculados a la actividad comercial.',
    bullets: [
      'Asesoramiento para constitución, reorganización y expansión societaria.',
      'Base legal firme para decisiones comerciales, contratos y conflictos judiciales.'
    ]
  },
  {
    name: 'Derecho Penal',
    summary:
      'Defensa legal en procesos penales con respuesta ágil ante situaciones urgentes.',
    detail:
      'El estudio interviene con rapidez y reserva profesional en procesos penales de diversa complejidad, construyendo una estrategia de defensa desde el primer momento y acompañando cada instancia con seguimiento activo.',
    bullets: [
      'Atención frente a urgencias y seguimiento permanente del caso.',
      'Defensa en delitos patrimoniales, lesiones, homicidios, delitos sexuales, cibercrimen y otros supuestos penales.'
    ]
  },
  {
    name: 'Derecho de Familia y Sucesiones',
    summary:
      'Abordaje humano y técnico de conflictos familiares, planificación sucesoria y procesos de herencia.',
    detail:
      'Se prioriza una intervención sensible y precisa en temas de alta complejidad personal, combinando acompañamiento profesional con herramientas jurídicas para negociaciones, procesos contenciosos y planificación sucesoria.',
    bullets: [
      'Intervención en conflictos familiares, acuerdos privados y procesos sucesorios.',
      'Búsqueda de soluciones equilibradas con especial atención al impacto humano y patrimonial.'
    ]
  },
  {
    name: 'Derecho de Daños',
    summary:
      'Representación en reclamos de indemnización y reparación de daños patrimoniales y personales.',
    detail:
      'Cada caso se estudia con detalle para determinar responsabilidad, alcance del daño y estrategia de reclamo, ya sea por accidentes, incumplimientos, actos ilícitos o supuestos de mala praxis.',
    bullets: [
      'Reclamos por responsabilidad civil, accidentes de tránsito y mala praxis.',
      'Determinación precisa de daños y construcción técnica del reclamo indemnizatorio.'
    ]
  }
] as const;

const team = [
  {
    position: 'Dra.',
    name: 'Del Valle María Soledad',
    bio: 'Abogada egresada de la UBA y docente universitaria, con sólida experiencia en derecho tributario, penal tributario y comercial.',
    image: '/profile-pic-1.jpg',
    email: 'msdelvalle1983@gmail.com',
    phoneLabel: '+54 9 11 5117 5372',
    phoneHref: 'https://wa.me/5491151175372',
    linkedinLabel: 'María Soledad Del Valle',
    linkedinHref:
      'https://www.linkedin.com/in/mar%C3%ADa-soledad-del-valle-bb1151200/',
    license: `Tº141 Fº822 C.P.A.C.F.
Tº137 Fº17 C.F.A.S.M.
Tº24 Fº435 C.A.S.M.`
  },
  {
    position: 'Dr.',
    name: 'Minini Maximiliano',
    bio: 'Abogado graduado en la UBA y docente universitario, con amplia formación en derecho laboral, penal y civil de daños.',
    image: '/profile-pic-2.jpg',
    email: 'maximiliano.minini@gmail.com',
    phoneLabel: '+54 9 11 5418 9477',
    phoneHref: 'https://wa.me/5491154189477',
    linkedinLabel: 'Maximiliano Minini',
    linkedinHref: 'https://www.linkedin.com/in/maximiliano-minini-68580622a/',
    license: `Tº23 Fº455 C.A.S.M.
Tº141 Fº750 C.P.A.C.F.`
  }
] as const;

const year = new Date().getFullYear();

const officeAddress =
  'Curapaligüe 1942, B1678HJP Caseros, Provincia de Buenos Aires';

const mapsEmbedSrc =
  'https://www.google.com/maps?q=Curapalig%C3%BCe%201942%2C%20B1678HJP%20Caseros%2C%20Provincia%20de%20Buenos%20Aires&z=16&output=embed';

const mapsDirectionsHref =
  'https://www.google.com/maps/search/?api=1&query=Curapalig%C3%BCe%201942%2C%20B1678HJP%20Caseros%2C%20Provincia%20de%20Buenos%20Aires';

const instagramHref = 'https://www.instagram.com/dvlegales_/' as const;
const instagramHandle = '@dvlegales_' as const;

export default function HomePage() {

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <main className="bg-background text-foreground">
      <SiteHeader navItems={navItems} />

      <section id="inicio" className="scroll-mt-28 border-b border-border">
        <div className="hero-shell relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-20 bg-[#191621]" />
          <img
            src="/hero-fallback.jpg"
            alt="Fondo institucional DV Legales"
            className="hero-float absolute inset-0 -z-10 block h-full w-full object-cover opacity-72 xl:hidden"
          />
          <video
            className="absolute inset-0 -z-10 hidden h-full w-full object-cover xl:block"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero-fallback.jpg"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay absolute inset-0 -z-10" />

          <div className="container-shell relative flex min-h-[calc(100svh-78px)] flex-col justify-end py-16 sm:py-20 lg:py-24">
            <div className="text-white">
              <p className="section-eyebrow text-white/72!">Estudio jurídico</p>
              <HeroTypingTitle
                firstLine="Asesoramiento legal integral."
                secondLine="Criterio estratégico y cercanía real."
              />
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
                En DV Legales propiciamos un espacio de escucha, acompañamiento y
                asesoramiento profesional para personas, empresas y organizaciones
                que necesitan decisiones claras en momentos importantes.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#contacto"
                  className="btn-white-fill inline-flex min-w-[210px] items-center justify-center"
                >
                  Contacto
                </Link>
                <Link
                  href="#servicios"
                  className="btn-white-outline inline-flex min-w-[210px] items-center justify-center"
                >
                  Nuestros servicios
                </Link>
              </div>
            </div>

            <div className="mx-auto mt-12 flex justify-start sm:mt-14">
              <Link
                href="#estudio"
                aria-label="Ir a la siguiente sección"
                className="inline-flex h-14 w-14 items-center justify-center text-white!"
              >
                <ChevronDown className="h-8 w-8 animate-bounce" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="estudio"
        className="scroll-mt-28 border-b border-border bg-[linear-gradient(180deg,#ffffff_0%,#f7f4f3_100%)] py-16 sm:py-24"
      >
        <div className="container-shell">
          <Reveal className="mx-auto max-w-4xl text-center" y={20} duration={0.62}>
            <img
              src="/logo-dv-legales-alt.png"
              alt="DV Legales"
              className="mx-auto h-8 w-auto object-contain sm:h-10"
            />
            <h2 className="section-title mx-auto mt-4 text-center">
              Un estudio que combina respaldo técnico, cercanía y estrategia.
            </h2>
            <p className="section-copy mx-auto mt-6 text-center">
              En DV Legales acompañamos a personas, empresas y organizaciones desde
              la primera consulta hasta la definición del mejor curso de acción, con
              un abordaje profesional, claro y humano.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                y={18}
                duration={0.56}
              >
                <article className="rounded-[18px] border border-border bg-white p-7 shadow-[0_18px_40px_rgba(47,38,61,0.05)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent/60">
                    {item.pretitle}
                  </p>
                  <h3 className="mt-4 text-[1.7rem] font-semibold leading-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-muted">
                    {item.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="servicios"
        className="scroll-mt-28 border-b border-border bg-white py-16 sm:py-24"
      >
        <div className="container-shell">
          <Reveal y={20} duration={0.62}>
            <p className="section-eyebrow">Servicios jurídicos</p>
            <h2 className="section-title mt-4">
              Áreas de práctica pensadas para decisiones con respaldo legal.
            </h2>
            <p className="section-copy mt-6 max-w-3xl">
              Abordamos cada servicio con análisis técnico, comunicación clara y una
              estrategia acorde al caso. Seleccioná un área para ver cómo podemos
              acompañarte según tu necesidad.
            </p>
          </Reveal>

          <Reveal delay={0.04} y={18} duration={0.58} className="mt-12">
            <ServicesShowcase services={services} />
          </Reveal>
        </div>
      </section>

      <section
        id="equipo"
        className="scroll-mt-28 border-b border-border bg-[linear-gradient(180deg,#f7f4f3_0%,#ffffff_100%)] py-16 sm:py-24"
      >
        <div className="container-shell">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <Reveal className="max-w-3xl" y={20} duration={0.62}>
              <p className="section-eyebrow">Nuestros Profesionales</p>
              <h2 className="section-title mt-4">
                Un equipo profesional que acompaña con criterio, experiencia y
                cercanía.
              </h2>
            </Reveal>

            <Reveal delay={0.04} className="max-w-2xl" y={18} duration={0.58}>
              <p className="section-copy">
                Nuestro estudio reúne perfiles con formación académica sólida y
                experiencia práctica para intervenir con claridad en todo tipo de
                asuntos jurídicos: tributarios, comerciales, laborales, penales,
                civiles y de familia.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {team.map((member, index) => (
              <Reveal
                key={member.name}
                delay={index * 0.05}
                y={18}
                duration={0.56}
              >
                <article className="overflow-hidden rounded-[20px] border border-border bg-white shadow-[0_18px_40px_rgba(47,38,61,0.06)]">
                  <div className="p-6 sm:p-8">
                    <p className="text-xs uppercase tracking-[0.28em] text-accent/60">
                      {member.position}
                    </p>
                    <h3 className="mt-3 text-[2rem] font-semibold leading-tight text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-muted">
                      {member.bio}
                    </p>
                  </div>

                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-70 w-full object-cover object-top sm:h-100"
                  />

                  <div className="grid gap-px border-t border-border bg-border sm:grid-cols-2">
                    <div className="bg-white p-5">
                      <span className="block text-xs uppercase tracking-[0.24em] text-accent/60">
                        Email
                      </span>
                      <a
                        href={`mailto:${member.email}`}
                        className="mt-2 block text-base font-medium text-foreground transition-colors hover:text-accent"
                      >
                        {member.email}
                      </a>
                    </div>
                    <div className="bg-white p-5">
                      <span className="block text-xs uppercase tracking-[0.24em] text-accent/60">
                        Teléfono / WhatsApp
                      </span>
                      <a
                        href={member.phoneHref}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 block text-base font-medium text-foreground transition-colors hover:text-accent"
                      >
                        {member.phoneLabel}
                      </a>
                    </div>
                    <div className="bg-white p-5">
                      <span className="block text-xs uppercase tracking-[0.24em] text-accent/60">
                        LinkedIn
                      </span>
                      <a
                        href={member.linkedinHref}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex max-w-full items-center gap-1.5 text-base font-medium text-foreground transition-colors hover:text-accent"
                      >
                        <span className="break-words">{member.linkedinLabel}</span>
                        <ArrowUpRight className="h-4 w-4 shrink-0" />
                      </a>
                    </div>
                    <div className="bg-white p-5">
                      <span className="block text-xs uppercase tracking-[0.24em] text-accent/60">
                        Matrícula
                      </span>
                      <span className="mt-2 block text-base font-medium text-foreground">
                        {member.license.split('\n').map((line, lineIndex, arr) => (
                          <span key={lineIndex}>
                            {line}
                            {lineIndex < arr.length - 1 ? <br /> : null}
                          </span>
                        ))}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="scroll-mt-28 bg-white py-16 sm:py-24">
        <div className="container-shell grid gap-8 xl:grid-cols-[0.84fr_1.16fr] xl:items-start">
          <Reveal y={20} duration={0.6}>
            <div className="overflow-hidden rounded-[20px] border border-border bg-[linear-gradient(180deg,#f7f4f3_0%,#ffffff_100%)] shadow-[0_18px_40px_rgba(47,38,61,0.05)]">
              <div className="border-b border-border p-8 sm:p-10">
                <p className="text-xs uppercase tracking-[0.28em] text-accent/60">
                  Contacto
                </p>
                <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                  Asesoramiento legal para tus necesidades jurídicas.
                </h2>
                <p className="mt-5 text-base leading-8 text-muted">
                  Podés escribirnos para contarnos tu situación. Te acompañamos con
                  una primera orientación clara y el próximo paso adecuado para tu
                  caso.
                </p>

                <div className="mt-8 grid gap-px overflow-hidden rounded-[16px] border border-border bg-border text-sm">
                  <a
                    href="https://wa.me/5491151175372"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-3 bg-white p-5 transition-colors hover:bg-[#f7f4f3]"
                  >
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>
                      <span className="block text-xs uppercase tracking-[0.24em] text-accent/60">
                        WhatsApp
                      </span>
                      <span className="mt-1 block text-base font-medium text-foreground">
                        +54 9 11 5117 5372
                      </span>
                    </span>
                  </a>

                  <a
                    href="mailto:dvlegales@gmail.com"
                    className="flex items-start gap-3 bg-white p-5 transition-colors hover:bg-[#f7f4f3]"
                  >
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>
                      <span className="block text-xs uppercase tracking-[0.24em] text-accent/60">
                        Email
                      </span>
                      <span className="mt-1 block text-base font-medium text-foreground">
                        dvlegales@gmail.com
                      </span>
                    </span>
                  </a>

                  <a
                    href={mapsDirectionsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-3 bg-white p-5 transition-colors hover:bg-[#f7f4f3]"
                  >
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>
                      <span className="block text-xs uppercase tracking-[0.24em] text-accent/60">
                        Ubicación
                      </span>
                      <span className="mt-1 block text-base font-medium leading-7 text-foreground">
                        {officeAddress}
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              <div className="relative min-h-70 sm:min-h-80 lg:min-h-90">
                <iframe
                  title="Ubicación DV Legales en Google Maps"
                  src={mapsEmbedSrc}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.05} y={18} duration={0.56}>
              <div className="rounded-[20px] border border-border bg-white p-8 shadow-[0_18px_40px_rgba(47,38,61,0.05)] sm:p-10">
                <div className="mb-8 max-w-2xl">
                  <p className="text-xs uppercase tracking-[0.28em] text-accent/60">
                    Escribinos
                  </p>
                  <h3 className="mt-3 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                    Dejanos tu mensaje.
                  </h3>
                  <p className="mt-3 text-base leading-8 text-muted">
                    Estamos para ayudarte con soluciones claras y acompañamiento
                    integral.
                  </p>
                </div>

                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={0.08} y={16} duration={0.52}>
              <div className="rounded-[20px] border border-border bg-[linear-gradient(180deg,#f7f4f3_0%,#ffffff_100%)] p-6 shadow-[0_18px_40px_rgba(47,38,61,0.05)] sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-white text-accent">
                    <Instagram className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-[0.28em] text-accent/60">
                      Nuestro Instagram
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
                      <h3 className="text-lg font-medium text-foreground">
                        DV Legales
                      </h3>
                      <span className="text-sm text-muted">{instagramHandle}</span>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-muted sm:text-base">
                      Seguinos para ver novedades y contenido vinculado al ámbito jurídico.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={instagramHref}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-accent-fill inline-flex items-center justify-center gap-2"
                  >
                    Seguinos
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-white">
        <div className="container-shell grid gap-8 py-12 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
          <Reveal y={16} duration={0.52}>
            <div className="flex flex-col items-center gap-4 sm:items-start">
              <img
                src="/logo-dv-legales.png"
                alt="DV Legales"
                className="h-14 w-auto object-contain sm:h-20"
              />
              <p className="text-center text-base text-muted sm:text-start">
                © DV LEGALES | Todos los derechos reservados
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.04} y={16} duration={0.5}>
            <div className="grid gap-3 text-center text-base text-foreground">
              <p className="text-xs uppercase tracking-[0.24em] text-accent/60">
                Contacto
              </p>
              <a
                href="mailto:dvlegales@gmail.com"
                className="transition-colors hover:text-accent"
              >
                dvlegales@gmail.com
              </a>
              <a
                href="https://wa.me/5491151175372"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                +54 9 11 5117 5372
              </a>
              <a
                href="https://wa.me/5491154189477"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                +54 9 11 5418 9477
              </a>
              <a
                href={instagramHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 transition-colors hover:text-accent"
              >
                <span>Instagram {instagramHandle}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} y={16} duration={0.5}>
            <div className="flex justify-center sm:justify-end">
              <ScrollToTopButton />
            </div>
          </Reveal>
        </div>

        <div className="bg-[#212121]">
          <div className="mx-auto w-full max-w-screen-2xl px-4 py-2 sm:px-6 lg:px-8">
            <p className="footer-credit text-center text-xs text-white/80">
              ©{year} | diseñado y desarrollado por{' '}
              <a
                href="https://eterlab.co/"
                target="_blank"
                rel="noreferrer"
                className="italic text-white/90 transition-colors hover:text-white"
              >
                eterlab.
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}