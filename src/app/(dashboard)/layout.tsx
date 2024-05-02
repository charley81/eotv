import Navbar from '@/components/shared/navbar'
import Sidebar from '@/components/shared/sidebar'
import { PropsWithChildren } from 'react'

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <main className="grid lg:grid-cols-4 max-w-7xl mx-auto">
      {/* first col hide on sm screen */}
      <aside className="hidden lg:block lg:col-span-1 lg:min-h-screen p-16">
        <Sidebar />
      </aside>

      {/* second col hide dropdown on lg screen */}
      <section className="lg:col-span-3">
        <Navbar />
        <div>{children}</div>
      </section>
    </main>
  )
}
