import { Resend } from "resend";
import { NextResponse } from "next/server";
import data from "@/data";

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Contact email is temporarily unavailable" },
      { status: 503 }
    );
  }
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { from_name, from_email, message } = body;

    const emailData = await resend.emails.send({
      from: `${data.contact.name} <onboarding@resend.dev>`,
      to: [data.contact.email],
      subject: `New Contact Form Message from ${from_name}`,
      text: `
Name: ${from_name}
Email: ${from_email}
Message: ${message}
      `,
    });

    return NextResponse.json(emailData);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
