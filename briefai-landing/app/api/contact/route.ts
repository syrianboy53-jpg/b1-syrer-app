import { NextRequest, NextResponse } from 'next/server'
import { addMessage } from '@/lib/storage'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, E-Mail und Nachricht sind erforderlich' },
        { status: 400 }
      )
    }

    const newMessage = await addMessage({ name, email, message })
    return NextResponse.json(newMessage, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
}
