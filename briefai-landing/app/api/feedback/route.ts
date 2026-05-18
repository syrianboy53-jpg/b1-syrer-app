import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "feedback.json");

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

async function readFeedback(): Promise<FeedbackEntry[]> {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeFeedback(entries: FeedbackEntry[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2));
}

export async function GET() {
  try {
    const entries = await readFeedback();
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

    const entries = await readFeedback();

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
    await writeFeedback(entries);

    return NextResponse.json({ success: true, id: newEntry.id });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
