import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, phone, message, website, form_loaded_at } =
      await request.json();

    // Spam filter: honeypot. Bots fill hidden fields; humans never see them.
    if (website) {
      console.log("[spam filter] Dropped submission:", "honeypot filled");
      return NextResponse.json({ success: true });
    }

    // Spam filter: time-trap. Humans can't fill four fields in under 2.5s.
    const elapsed = Date.now() - parseInt(form_loaded_at, 10);
    if (elapsed < 2500) {
      console.log(
        "[spam filter] Dropped submission:",
        `submitted in ${elapsed}ms`
      );
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const parts = name.trim().split(/\s+/);
    const firstname = parts[0];
    const lastname = parts.slice(1).join(" ");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      ``,
      `Message:`,
      message,
    ].join("\n");

    const res = await fetch(`${process.env.ZAMMAD_URL}/api/v1/tickets`, {
      method: "POST",
      headers: {
        Authorization: `Token token=${process.env.ZAMMAD_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: `New Contact Form Submission from ${name}`,
        group: "Support",
        customer: { email, firstname, lastname },
        article: {
          subject: `New Contact Form Submission from ${name}`,
          body,
          type: "email",
          from: email,
          internal: false,
          sender: "Customer",
        },
      }),
    });

    if (!res.ok) {
      const errorText = await res.text().catch(() => "");
      console.error("Zammad ticket create failed:", res.status, errorText);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

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
