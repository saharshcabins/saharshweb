import { NextRequest, NextResponse } from "next/server";
import { getResend, TO, FROM } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    await getResend().emails.send({
      from: FROM,
      to: TO,
      subject: `New Contact Request - ${data.Name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${data.Name}</p>
        <p><b>Phone:</b> ${data.Phone}</p>
        <p><b>Email:</b> ${data.Email}</p>
        <p><b>Project Location:</b> ${data["Project Location"]}</p>
        <p><b>Interest:</b> ${data.Interest}</p>
        <p><b>Budget:</b> ${data.Budget}</p>
        <p><b>Timeline:</b> ${data.Timeline}</p>
        <p><b>Contact Method:</b> ${data["Contact Method"]}</p>
        <p><b>Notes:</b> ${data.Notes}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
