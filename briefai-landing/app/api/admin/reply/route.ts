import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "messages.json");

interface Reply {
  text: string;
  createdAt: string;
}

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  read: boolean;
  replies: Reply[];
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messageId, reply } = body;

    if (!messageId || !reply) {
      return NextResponse.json(
        { error: "Message ID and reply text are required" },
        { status: 400 }
      );
    }

    const data = await fs.readFile(DATA_FILE, "utf-8");
    const messages: Message[] = JSON.parse(data);

    const messageIndex = messages.findIndex((m) => m.id === messageId);
    if (messageIndex === -1) {
      return NextResponse.json(
        { error: "Message not found" },
        { status: 404 }
      );
    }

    messages[messageIndex].replies.push({
      text: reply,
      createdAt: new Date().toISOString(),
    });
    messages[messageIndex].read = true;

    await fs.writeFile(DATA_FILE, JSON.stringify(messages, null, 2));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
