import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Barnstorm Contact Form <noreply@barnstormit.com>",
      to: "jeff@barnstormit.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr>
            <td style="padding:8px 12px;font-weight:bold;vertical-align:top;color:#555">Name</td>
            <td style="padding:8px 12px">${escapeHtml(name)}</td>
          </tr>
          <tr style="background:#f9f9f9">
            <td style="padding:8px 12px;font-weight:bold;vertical-align:top;color:#555">Email</td>
            <td style="padding:8px 12px"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;vertical-align:top;color:#555">Phone</td>
            <td style="padding:8px 12px">${phone ? escapeHtml(phone) : "Not provided"}</td>
          </tr>
          <tr style="background:#f9f9f9">
            <td style="padding:8px 12px;font-weight:bold;vertical-align:top;color:#555">Message</td>
            <td style="padding:8px 12px;white-space:pre-wrap">${escapeHtml(message)}</td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
