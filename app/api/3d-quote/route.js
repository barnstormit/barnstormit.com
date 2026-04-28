import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const ALLOWED_EXTENSIONS = ["stl", "step", "stp", "3mf", "obj"];
const MAX_FILE_SIZE = 25 * 1024 * 1024;

export async function POST(request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const material = formData.get("material");
    const colors = formData.get("colors");
    const quantity = formData.get("quantity");
    const timeline = formData.get("timeline");
    const notes = formData.get("notes");
    const file = formData.get("file");
    const website = formData.get("website");
    const formLoadedAt = formData.get("form_loaded_at");

    // Spam filter: honeypot. Bots fill hidden fields; humans never see them.
    if (website) {
      console.log("[spam filter] Dropped submission:", "honeypot filled");
      return NextResponse.json({ success: true });
    }

    // Spam filter: time-trap. Humans can't fill this form in under 2.5s.
    const elapsed = Date.now() - parseInt(formLoadedAt, 10);
    if (elapsed < 2500) {
      console.log(
        "[spam filter] Dropped submission:",
        `submitted in ${elapsed}ms`
      );
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !file || typeof file === "string") {
      return NextResponse.json(
        { error: "Name, email, and file are required." },
        { status: 400 }
      );
    }

    const filename = file.name || "";
    const ext = filename.split(".").pop()?.toLowerCase() || "";
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return NextResponse.json(
        { error: "File must be .stl, .step, .stp, .3mf, or .obj." },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File must be 25MB or smaller." },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);

    await resend.emails.send({
      from: "Barnstorm 3D Quote <noreply@barnstormit.com>",
      to: "3d@barnstormit.com",
      replyTo: email,
      subject: `New 3D Print Quote Request from ${name}`,
      html: `
        <h2>New 3D Print Quote Request</h2>
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
            <td style="padding:8px 12px;font-weight:bold;vertical-align:top;color:#555">Material</td>
            <td style="padding:8px 12px">${material ? escapeHtml(material) : "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;vertical-align:top;color:#555">Colors</td>
            <td style="padding:8px 12px;white-space:pre-wrap">${colors ? escapeHtml(colors) : "Not specified"}</td>
          </tr>
          <tr style="background:#f9f9f9">
            <td style="padding:8px 12px;font-weight:bold;vertical-align:top;color:#555">Quantity</td>
            <td style="padding:8px 12px">${quantity ? escapeHtml(quantity) : "1"}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;vertical-align:top;color:#555">Timeline</td>
            <td style="padding:8px 12px">${timeline ? escapeHtml(timeline) : "Not specified"}</td>
          </tr>
          <tr style="background:#f9f9f9">
            <td style="padding:8px 12px;font-weight:bold;vertical-align:top;color:#555">Notes</td>
            <td style="padding:8px 12px;white-space:pre-wrap">${notes ? escapeHtml(notes) : "None"}</td>
          </tr>
        </table>
      `,
      attachments: [
        {
          filename,
          content: fileBuffer,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("3D quote form error:", error);
    return NextResponse.json(
      { error: "Failed to send quote request. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
