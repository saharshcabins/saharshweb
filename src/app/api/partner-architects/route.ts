import { NextRequest, NextResponse } from "next/server";
import { getResend, TO, CC, FROM } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const { full_name, email, firm_name, role, website, specialisation, message } = await req.json();

    await getResend().emails.send({
      from: FROM,
      to: TO, cc: CC,
      subject: `New Architect Partner Enquiry - ${full_name}`,
      html: `
        <h2>Architect Partner Form Submission</h2>
        <p><b>Name:</b> ${full_name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Firm Name:</b> ${firm_name}</p>
        <p><b>Role:</b> ${role}</p>
        <p><b>Website:</b> ${website}</p>
        <p><b>Specialisation:</b> ${specialisation}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
