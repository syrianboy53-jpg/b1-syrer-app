import { NextRequest, NextResponse } from "next/server";
import { readJsonFile, writeJsonFile } from "@/lib/data-path";

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

const FILE = "messages.json";

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

    const messages = await readJsonFile<Message[]>(FILE, []);

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

    await writeJsonFile(FILE, messages);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
