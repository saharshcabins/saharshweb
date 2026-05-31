import { NextRequest, NextResponse } from "next/server";
import { getResend, TO, CC, FROM } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const { full_name, corp_email, company, designation, website, market, message } = await req.json();

    await getResend().emails.send({
      from: FROM,
      to: TO, cc: CC,
      subject: `New Global Alliance Enquiry - ${full_name}`,
      html: `
        <h2>Global Alliance Form Submission</h2>
        <p><b>Name:</b> ${full_name}</p>
        <p><b>Corporate Email:</b> ${corp_email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Designation:</b> ${designation}</p>
        <p><b>Website:</b> ${website}</p>
        <p><b>Market:</b> ${market}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
