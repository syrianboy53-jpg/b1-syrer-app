import { NextResponse } from "next/server";
import { readJsonFile } from "@/lib/data-path";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const messages = await readJsonFile("messages.json", []);
    return NextResponse.json(messages);
  } catch {
    return NextResponse.json([]);
  }
}
