import { NextRequest, NextResponse } from 'next/server'
import { replyToMessage } from '@/lib/storage'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, reply } = body

    if (!id || !reply) {
      return NextResponse.json(
        { error: 'ID und Antwort sind erforderlich' },
        { status: 400 }
      )
    }

    const updatedMessage = await replyToMessage(id, reply)

    if (!updatedMessage) {
      return NextResponse.json(
        { error: 'Nachricht nicht gefunden' },
        { status: 404 }
      )
    }

    return NextResponse.json(updatedMessage)
  } catch {
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
}
