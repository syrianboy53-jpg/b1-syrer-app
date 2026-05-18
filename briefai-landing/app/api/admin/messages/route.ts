import { NextResponse } from 'next/server'
import { getMessages } from '@/lib/storage'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const messages = await getMessages()
    return NextResponse.json(messages)
  } catch {
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
}
