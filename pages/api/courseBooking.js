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

function isOptionalString(v, max = 5000) {
  return v == null || (typeof v === "string" && v.length <= max);
}

function isValidEmail(v) {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= 254;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { Name, Course, Email, Phone, Payment, Participants, Message } = req.body || {};

  if (
    !isNonEmptyString(Name, 200) ||
    !isNonEmptyString(Course, 500) ||
    !isValidEmail(Email) ||
    !isNonEmptyString(Phone, 50) ||
    !isOptionalString(Payment, 200) ||
    !isOptionalString(Participants, 5000) ||
    !isOptionalString(Message, 10000)
  ) {
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
    subject: `Papec Course Booking form submission from ${Name}`,
    html: `<h1>${escapeHtml(Name)} has contacted you</h1>
      <p>You have a course booking submission</p>
      <p><strong>Course:</strong> ${escapeHtml(Course)}</p>
      <p><strong>Email:</strong> ${escapeHtml(Email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(Phone)}</p>
      <p><strong>Payment:</strong> ${escapeHtml(Payment ?? "")}</p>
      <p><strong>Participants Details:</strong> ${escapeHtml(Participants ?? "")}</p>
      <p><strong>Message:</strong> ${escapeHtml(Message ?? "")}</p>`,
  };

  try {
    await transporter.sendMail(data);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Course booking send failed:", err.message);
    return res.status(500).json({ ok: false, error: "Send failed" });
  }
}
