export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const contactTo = process.env.CONTACT_TO_EMAIL;
const contactFrom = process.env.CONTACT_FROM_EMAIL;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      fullName?: string;
      email?: string;
      phone?: string;
      service?: string;
      message?: string;
      company?: string;
    };

    if (body.company) {
      return NextResponse.json({ message: 'Consulta enviada correctamente.' }, { status: 200 });
    }

    const fullName = body.fullName?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const service = body.service?.trim();
    const message = body.message?.trim();

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { message: 'Nombre, email y mensaje son obligatorios.' },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: 'Ingresá un email válido.' }, { status: 400 });
    }

    if (!resendApiKey || !contactTo || !contactFrom) {
      return NextResponse.json(
        {
          message:
            'Faltan variables de entorno de Resend. Revisá RESEND_API_KEY, CONTACT_FROM_EMAIL y CONTACT_TO_EMAIL.'
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: contactFrom,
      to: [contactTo],
      subject: `Nueva consulta desde DV Legales: ${fullName}`,
      text: [
        `Nombre: ${fullName}`,
        `Email: ${email}`,
        `Teléfono: ${phone || 'No informado'}`,
        `Área: ${service || 'No informada'}`,
        '',
        'Mensaje:',
        message
      ].join('\n'),
    });

    return NextResponse.json({ message: 'Consulta enviada correctamente.' }, { status: 200 });
  } catch (error) {
    console.error('Contact route error', error);
    return NextResponse.json(
      { message: 'No se pudo enviar la consulta. Intentá nuevamente en unos minutos.' },
      { status: 500 }
    );
  }
}
