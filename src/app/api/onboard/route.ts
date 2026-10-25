import { NextResponse } from "next/server";
import { mkdir, appendFile } from "fs/promises";
import path from "path";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, practiceName, email, phone, practiceSize, message } =
    body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    name.trim().length < 2 ||
    typeof practiceName !== "string" ||
    practiceName.trim().length < 2 ||
    typeof email !== "string" ||
    !EMAIL_RE.test(email.trim()) ||
    typeof practiceSize !== "string" ||
    practiceSize.trim().length === 0
  ) {
    return NextResponse.json(
      { error: "Please fill in all required fields with valid values." },
      { status: 400 },
    );
  }

  const record = {
    name: name.trim(),
    practiceName: practiceName.trim(),
    email: email.trim(),
    phone: typeof phone === "string" ? phone.trim() : "",
    practiceSize: practiceSize.trim(),
    message: typeof message === "string" ? message.trim() : "",
    submittedAt: new Date().toISOString(),
  };

  const dataDir = path.join(process.cwd(), "data");
  await mkdir(dataDir, { recursive: true });
  await appendFile(
    path.join(dataDir, "onboarding-submissions.jsonl"),
    JSON.stringify(record) + "\n",
    "utf8",
  );

  return NextResponse.json({ ok: true });
}
