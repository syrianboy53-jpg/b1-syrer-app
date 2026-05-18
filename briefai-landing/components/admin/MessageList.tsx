'use client'

import { useState } from 'react'

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

interface MessageListProps {
  messages: Message[]
  onReply: (id: string, reply: string) => Promise<void>
}

export default function MessageList({ messages, onReply }: MessageListProps) {
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyText, setReplyText] = useState('')
  const [sending, setSending] = useState(false)

  const handleReply = async (id: string) => {
    if (!replyText.trim()) return
    setSending(true)
    await onReply(id, replyText)
    setReplyingTo(null)
    setReplyText('')
    setSending(false)
  }

  if (messages.length === 0) {
    return (
      <div className="text-center py-12 text-text-gray">
        <span className="text-4xl block mb-3">📭</span>
        <p>Keine Nachrichten vorhanden</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {messages.map((msg) => (
        <div key={msg.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h4 className="font-semibold text-primary-dark">{msg.name}</h4>
              <p className="text-sm text-text-gray">{msg.email}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                msg.replied ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
              }`}>
                {msg.replied ? 'Beantwortet' : 'Neu'}
              </span>
              <span className="text-xs text-text-gray">
                {new Date(msg.createdAt).toLocaleDateString('de-DE')}
              </span>
            </div>
          </div>

          <p className="text-text-dark mb-3">{msg.message}</p>

          {msg.replied && msg.reply && (
            <div className="bg-green-50 rounded-lg p-3 mb-3">
              <p className="text-sm text-green-800">
                <span className="font-medium">Antwort:</span> {msg.reply}
              </p>
              <p className="text-xs text-green-600 mt-1">
                {msg.repliedAt && new Date(msg.repliedAt).toLocaleDateString('de-DE')}
              </p>
            </div>
          )}

          {!msg.replied && (
            <>
              {replyingTo === msg.id ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Antwort eingeben..."
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  />
                  <button
                    onClick={() => handleReply(msg.id)}
                    disabled={sending}
                    className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
                  >
                    {sending ? '...' : 'Senden'}
                  </button>
                  <button
                    onClick={() => { setReplyingTo(null); setReplyText('') }}
                    className="px-3 py-2 text-text-gray hover:text-text-dark text-sm transition-colors"
                  >
                    Abbrechen
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setReplyingTo(msg.id)}
                  className="text-sm text-primary font-medium hover:text-blue-700 transition-colors"
                >
                  Antworten →
                </button>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  )
}
