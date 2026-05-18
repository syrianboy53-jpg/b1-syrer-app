import { NextResponse } from 'next/server'
import { getPilotRegistrations } from '@/lib/storage'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const registrations = await getPilotRegistrations()
    return NextResponse.json(registrations)
  } catch {
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
}
