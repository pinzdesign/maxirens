import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { to, html } = await req.json();
    console.log("Request TO: " + to);

    const resend = new Resend(process.env.NEXT_PUBLIC_API_KEY_RESEND);

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [to],
      subject: "Kundekontakt via Maxirens Webside",
      html: html,
    });

    if (error) {
      console.log("Error: " + error.name);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.log("Fejl: " + error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
