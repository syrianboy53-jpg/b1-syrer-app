import { NextResponse } from "next/server";
import { readJsonFile } from "@/lib/data-path";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const registrations = await readJsonFile("pilot-registrations.json", []);
    return NextResponse.json(registrations);
  } catch {
    return NextResponse.json([]);
  }
}
