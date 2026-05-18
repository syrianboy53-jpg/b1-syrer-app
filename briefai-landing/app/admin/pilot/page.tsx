'use client'

import { useState, useEffect } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import PilotList from '@/components/admin/PilotList'

interface PilotRegistration {
  id: string
  name: string
  email: string
  phone: string
  reason: string
  createdAt: string
  status: "pending" | "contacted" | "accepted" | "rejected"
}

export default function PilotPage() {
  const [registrations, setRegistrations] = useState<PilotRegistration[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRegistrations()
  }, [])

  const fetchRegistrations = async () => {
    try {
      const res = await fetch('/api/admin/pilot')
      const data = await res.json()
      setRegistrations(data)
    } catch (error) {
      console.error('Error fetching registrations:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-primary-dark">Pilot-Anmeldungen</h1>
            <p className="text-text-gray mt-1">Alle Registrierungen für das Pilot-Programm</p>
          </div>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            {registrations.length} Anmeldungen
          </span>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        ) : (
          <PilotList registrations={registrations} />
        )}
      </div>
    </AdminLayout>
  )
}
