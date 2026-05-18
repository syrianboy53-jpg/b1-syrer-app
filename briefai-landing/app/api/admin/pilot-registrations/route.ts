import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "pilot-registrations.json");

export async function GET() {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    const registrations = JSON.parse(data);
    return NextResponse.json(registrations);
  } catch {
    return NextResponse.json([]);
  }
}
