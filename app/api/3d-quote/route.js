import { NextResponse } from "next/server";

const ALLOWED_EXTENSIONS = ["stl", "step", "stp", "3mf", "obj"];
const MAX_FILE_SIZE = 4 * 1024 * 1024;

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
        { error: "File must be 4MB or smaller." },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const fileBase64 = Buffer.from(arrayBuffer).toString("base64");

    const parts = name.trim().split(/\s+/);
    const firstname = parts[0];
    const lastname = parts.slice(1).join(" ");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Material: ${material || "Not specified"}`,
      `Colors: ${colors || "Not specified"}`,
      `Quantity: ${quantity || "1"}`,
      `Timeline: ${timeline || "Not specified"}`,
      ``,
      `Notes:`,
      notes || "None",
    ].join("\n");

    const res = await fetch(`${process.env.ZAMMAD_URL}/api/v1/tickets`, {
      method: "POST",
      headers: {
        Authorization: `Token token=${process.env.ZAMMAD_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: `New 3D Print Quote Request from ${name}`,
        group: "Support",
        customer: { email, firstname, lastname },
        article: {
          subject: `New 3D Print Quote Request from ${name}`,
          body,
          type: "email",
          from: email,
          to: "support@barnstormit.com",
          internal: false,
          sender: "Customer",
          attachments: [
            {
              filename,
              data: fileBase64,
              "mime-type": file.type || "application/octet-stream",
            },
          ],
        },
      }),
    });

    if (!res.ok) {
      const errorText = await res.text().catch(() => "");
      console.error("Zammad ticket create failed:", res.status, errorText);
      return NextResponse.json(
        { error: "Failed to send quote request. Please try again." },
        { status: 500 }
      );
    }

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
