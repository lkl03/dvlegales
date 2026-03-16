# DV Legales — Next.js + TypeScript + Tailwind + Resend

Landing institucional one-page para DV Legales, preparada para subir a GitHub y hacer deploy en Vercel.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Resend para el formulario de contacto
- Lucide React para íconos

## Requisitos

- Node.js 20+
- npm 10+
- cuenta en Resend

## Instalación

```bash
npm install
npm run dev
```

Abrí `http://localhost:3000`.

## Variables de entorno

Copiá `.env.example` a `.env.local` y completá:

```bash
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_FROM_EMAIL=DV Legales <onboarding@resend.dev>
CONTACT_TO_EMAIL=dvlegales@gmail.com
```

## Assets a reemplazar

En `public/` dejé placeholders para que los reemplaces por los archivos finales del cliente:

- `logo-dv-legales.svg`
- `hero-fallback.svg`
- `profile-pic-1.svg`
- `profile-pic-2.svg`

Además, el hero ya está preparado para video en pantallas mayores a 1440px. Si querés activarlo, agregá este archivo:

- `hero-video.mp4`

Si no lo agregás, el sitio sigue funcionando con la imagen fallback.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run typecheck
```
