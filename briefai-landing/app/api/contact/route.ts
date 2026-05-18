import { NextRequest, NextResponse } from "next/server";
import { readJsonFile, writeJsonFile } from "@/lib/data-path";

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  read: boolean;
  replies: Array<{ text: string; createdAt: string }>;
}

const FILE = "messages.json";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const messages = await readJsonFile<Message[]>(FILE, []);
    const newMessage: Message = {
      id: Date.now().toString(),
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
      read: false,
      replies: [],
    };

    messages.push(newMessage);
    await writeJsonFile(FILE, messages);

    return NextResponse.json({ success: true, id: newMessage.id });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
