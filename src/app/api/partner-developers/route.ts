import { NextRequest, NextResponse } from "next/server";
import { getResend, TO, CC, FROM } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const { full_name, email, company, designation, project_location, structure_type, message } = await req.json();

    await getResend().emails.send({
      from: FROM,
      to: TO, cc: CC,
      subject: `New Developer Partner Enquiry - ${full_name}`,
      html: `
        <h2>Developer Partner Form Submission</h2>
        <p><b>Name:</b> ${full_name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Designation:</b> ${designation}</p>
        <p><b>Project Location:</b> ${project_location}</p>
        <p><b>Structure Type:</b> ${structure_type}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
