import { db } from '@/server/db/index'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const events = await db.query.events.findMany()

  return (
    <main className="p-16">
      {events.map((event) => (
        <div key={event.id} className="p-4 ">
          <h2 className="text-xl font-bold">{event.eventName}</h2>
        </div>
      ))}
    </main>
  )
}
