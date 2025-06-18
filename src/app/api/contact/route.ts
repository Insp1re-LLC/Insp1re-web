// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { firstName, lastName, email, phone, message, agree } = body;

  if (!firstName || !lastName || !email || !agree) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Log or send this info (e.g., via Resend, SendGrid, etc.)
  console.log("Contact Form Submission:", body);

  return NextResponse.json({ success: true });
}
