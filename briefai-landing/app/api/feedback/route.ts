import { NextRequest, NextResponse } from "next/server";
import { readJsonFile, writeJsonFile } from "@/lib/data-path";

interface FeedbackEntry {
  id: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string[];
  q7: string;
  q8: string;
  name: string;
  email: string;
  createdAt: string;
}

const FILE = "feedback.json";

export async function GET() {
  try {
    const entries = await readJsonFile<FeedbackEntry[]>(FILE, []);
    return NextResponse.json(entries);
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { q1, q2, q3, q4, q5, q6, q7, q8, name, email } = body;

    if (!q1 || !q2 || !q3 || !q4 || !q5 || !q8) {
      return NextResponse.json(
        { error: "Required questions must be answered" },
        { status: 400 }
      );
    }

    const entries = await readJsonFile<FeedbackEntry[]>(FILE, []);

    const newEntry: FeedbackEntry = {
      id: Date.now().toString(),
      q1,
      q2,
      q3,
      q4,
      q5,
      q6: q6 || [],
      q7: q7 || "",
      q8,
      name: name || "",
      email: email || "",
      createdAt: new Date().toISOString(),
    };

    entries.push(newEntry);
    await writeJsonFile(FILE, entries);

    return NextResponse.json({ success: true, id: newEntry.id });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
