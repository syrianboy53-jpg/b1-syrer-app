import { NextRequest, NextResponse } from "next/server";
import { readJsonFile, writeJsonFile } from "@/lib/data-path";

interface PilotRegistration {
  id: string;
  name: string;
  email: string;
  city: string;
  language: string;
  role: string;
  participation: string;
  message: string;
  createdAt: string;
  status: "pending" | "contacted" | "accepted" | "rejected";
}

const FILE = "pilot-registrations.json";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, city, language, role, participation, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const registrations = await readJsonFile<PilotRegistration[]>(FILE, []);

    const exists = registrations.some((r) => r.email === email);
    if (exists) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    const newRegistration: PilotRegistration = {
      id: Date.now().toString(),
      name,
      email,
      city: city || "",
      language: language || "",
      role: role || "",
      participation: participation || "",
      message: message || "",
      createdAt: new Date().toISOString(),
      status: "pending",
    };

    registrations.push(newRegistration);
    await writeJsonFile(FILE, registrations);

    return NextResponse.json({ success: true, id: newRegistration.id });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
