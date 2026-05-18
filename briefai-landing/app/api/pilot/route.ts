import { NextRequest, NextResponse } from 'next/server'
import { addPilotRegistration } from '@/lib/storage'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, language, message } = body

    if (!name || !email || !language) {
      return NextResponse.json(
        { error: 'Name, E-Mail und Sprache sind erforderlich' },
        { status: 400 }
      )
    }

    const registration = await addPilotRegistration({
      name,
      email,
      language,
      message: message || undefined,
    })

    return NextResponse.json(registration, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
}
