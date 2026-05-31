import { NextRequest, NextResponse } from "next/server";
import { resend, TO, FROM } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, location, notes, projectTypes, investment, timeline, contactMethod } = await req.json();

    await resend.emails.send({
      from: FROM,
      to: TO,
      subject: `New Contact Request – ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Location:</b> ${location}</p>
        <p><b>Project Types:</b> ${projectTypes?.join(", ")}</p>
        <p><b>Investment:</b> ${investment}</p>
        <p><b>Timeline:</b> ${timeline}</p>
        <p><b>Preferred Contact:</b> ${contactMethod}</p>
        <p><b>Notes:</b> ${notes}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
