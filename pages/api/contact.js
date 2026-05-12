import nodemailer from "nodemailer";

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isNonEmptyString(v, max = 5000) {
  return typeof v === "string" && v.trim().length > 0 && v.length <= max;
}

function isValidEmail(v) {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= 254;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { Name, Email, Message } = req.body || {};

  if (!isNonEmptyString(Name, 200) || !isValidEmail(Email) || !isNonEmptyString(Message, 10000)) {
    return res.status(400).json({ ok: false, error: "Invalid input" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const data = {
    from: process.env.SMTP_USER,
    replyTo: Email,
    to: process.env.RECIPIENT_ADDRESS,
    subject: `Papec Contact form submission from ${Name}`,
    html: `<h1>${escapeHtml(Name)} has contacted you</h1>
      <p>You have a contact form submission</p>
      <p><strong>Email:</strong> ${escapeHtml(Email)}</p>
      <p><strong>Message:</strong> ${escapeHtml(Message)}</p>`,
  };

  try {
    await transporter.sendMail(data);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err.message);
    return res.status(500).json({ ok: false, error: "Send failed" });
  }
}
