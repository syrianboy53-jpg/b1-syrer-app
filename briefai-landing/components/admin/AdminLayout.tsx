'use client'

import Sidebar from './Sidebar'

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8 ml-64">
        {children}
      </main>
    </div>
  )
}
