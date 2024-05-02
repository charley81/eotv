import Navbar from '@/components/shared/navbar'
import Sidebar from '@/components/shared/sidebar'
import { PropsWithChildren } from 'react'

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <main className="grid lg:grid-cols-4">
      {/* first col hide on sm screen */}
      <aside className="hidden lg:block lg:col-span-1 lg:min-h-screen">
        <Sidebar />
      </aside>

      {/* second col hide dropdown on lg screen */}
      <div className="lg:col-span-3">
        <Navbar />
        <div>{children}</div>
      </div>
    </main>
  )
}
