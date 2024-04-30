import { Button } from '@/components/ui/button'
import { db } from '@/server/db/index'

type Post = {
  id: number
  title: string
  content: string
  createdAt: Date
  updatedAt: Date | null
}

export const dynamic = 'force-dynamic'

export default async function Home() {
  const events = await db.query.events.findMany()
  console.log(events)
  return <main className="p-16"></main>
}
