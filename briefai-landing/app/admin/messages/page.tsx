'use client'

import { useState, useEffect } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import MessageList from '@/components/admin/MessageList'

interface Message {
  id: string
  name: string
  email: string
  message: string
  createdAt: string
  replied: boolean
  reply?: string
  repliedAt?: string
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/admin/messages')
      const data = await res.json()
      setMessages(data)
    } catch (error) {
      console.error('Error fetching messages:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleReply = async (id: string, reply: string) => {
    try {
      const res = await fetch('/api/admin/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, reply }),
      })
      if (res.ok) {
        await fetchMessages()
      }
    } catch (error) {
      console.error('Error sending reply:', error)
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-primary-dark">Nachrichten</h1>
          <p className="text-text-gray mt-1">Alle eingehenden Nachrichten verwalten</p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        ) : (
          <MessageList messages={messages} onReply={handleReply} />
        )}
      </div>
    </AdminLayout>
  )
}
