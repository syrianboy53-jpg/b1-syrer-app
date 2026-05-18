import { promises as fs } from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data')

export interface ContactMessage {
  id: string
  name: string
  email: string
  message: string
  createdAt: string
  replied: boolean
  reply?: string
  repliedAt?: string
}

export interface PilotRegistration {
  id: string
  name: string
  email: string
  language: string
  message?: string
  createdAt: string
}

async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR)
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true })
  }
}

async function readJsonFile<T>(filename: string): Promise<T[]> {
  await ensureDataDir()
  const filePath = path.join(DATA_DIR, filename)
  try {
    const data = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function writeJsonFile<T>(filename: string, data: T[]): Promise<void> {
  await ensureDataDir()
  const filePath = path.join(DATA_DIR, filename)
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8')
}

export async function getMessages(): Promise<ContactMessage[]> {
  return readJsonFile<ContactMessage>('messages.json')
}

export async function addMessage(message: Omit<ContactMessage, 'id' | 'createdAt' | 'replied'>): Promise<ContactMessage> {
  const messages = await getMessages()
  const newMessage: ContactMessage = {
    ...message,
    id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    createdAt: new Date().toISOString(),
    replied: false,
  }
  messages.unshift(newMessage)
  await writeJsonFile('messages.json', messages)
  return newMessage
}

export async function replyToMessage(id: string, reply: string): Promise<ContactMessage | null> {
  const messages = await getMessages()
  const index = messages.findIndex(m => m.id === id)
  if (index === -1) return null
  messages[index].replied = true
  messages[index].reply = reply
  messages[index].repliedAt = new Date().toISOString()
  await writeJsonFile('messages.json', messages)
  return messages[index]
}

export async function getPilotRegistrations(): Promise<PilotRegistration[]> {
  return readJsonFile<PilotRegistration>('pilot-registrations.json')
}

export async function addPilotRegistration(
  registration: Omit<PilotRegistration, 'id' | 'createdAt'>
): Promise<PilotRegistration> {
  const registrations = await getPilotRegistrations()
  const newRegistration: PilotRegistration = {
    ...registration,
    id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    createdAt: new Date().toISOString(),
  }
  registrations.unshift(newRegistration)
  await writeJsonFile('pilot-registrations.json', registrations)
  return newRegistration
}
