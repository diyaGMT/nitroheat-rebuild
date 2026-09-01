import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { COMPANY } from "@/lib/site";

const RECIPIENT = process.env.CONTACT_RECIPIENT || COMPANY.email;

/** Guards against unbounded payloads and reply-to header injection. */
const MAX_FIELDS = 40;
const MAX_VALUE_LENGTH = 5000;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isPlausibleEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

export async function POST(request: Request) {
  const apiKey = process.env.SENDGRID_API_KEY;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 500 },
    );
  }

  const body = await request.json().catch(() => null);
  const formType =
    typeof body?.formType === "string" ? body.formType.slice(0, 80) : "Enquiry";
  const rawFields = body?.fields;

  if (!rawFields || typeof rawFields !== "object" || Array.isArray(rawFields)) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const entries = Object.entries(rawFields as Record<string, unknown>)
    .filter(([, value]) => typeof value === "string" && value.trim())
    .slice(0, MAX_FIELDS)
    .map(
      ([label, value]) =>
        [label, (value as string).trim().slice(0, MAX_VALUE_LENGTH)] as const,
    );

  if (entries.length === 0) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  // Use the submitter's address as reply-to when they gave a valid one.
  const submittedEmail = entries.find(([label]) =>
    /email/i.test(label),
  )?.[1];
  const replyTo =
    submittedEmail && isPlausibleEmail(submittedEmail)
      ? submittedEmail
      : undefined;

  sgMail.setApiKey(apiKey);

  try {
    await sgMail.send({
      to: RECIPIENT,
      from: fromEmail,
      ...(replyTo ? { replyTo } : {}),
      subject: `NitroHeat website — ${formType}`,
      text: entries.map(([label, value]) => `${label}: ${value}`).join("\n"),
      html: `<h2>${escapeHtml(formType)}</h2><table cellpadding="6" style="border-collapse:collapse">${entries
        .map(
          ([label, value]) =>
            `<tr><td style="border:1px solid #ddd"><strong>${escapeHtml(
              label,
            )}</strong></td><td style="border:1px solid #ddd">${escapeHtml(
              value,
            ).replace(/\n/g, "<br />")}</td></tr>`,
        )
        .join("")}</table>`,
    });
  } catch (error) {
    console.error("Failed to send form email", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
