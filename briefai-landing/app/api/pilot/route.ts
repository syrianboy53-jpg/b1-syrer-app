import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "pilot-registrations.json");

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

async function readRegistrations(): Promise<PilotRegistration[]> {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeRegistrations(
  registrations: PilotRegistration[]
): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(registrations, null, 2));
}

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

    const dataDir = path.join(process.cwd(), "data");
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }

    const registrations = await readRegistrations();

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
    await writeRegistrations(registrations);

    return NextResponse.json({ success: true, id: newRegistration.id });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
