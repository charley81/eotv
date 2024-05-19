'use client'

import { useSearchParams } from 'next/navigation'
import EventCard from './event-card'
import { getAllEventsAction } from '@/utils/actions'
import { useQuery } from '@tanstack/react-query'

export default function EventsList() {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''
  const category = searchParams.get('category') || 'all'
  const pageNumber = Number(searchParams.get('page')) || 1

  const { data, isPending } = useQuery({
    queryKey: ['events', search ?? '', category, pageNumber],
    queryFn: () => getAllEventsAction({ search, category, page: pageNumber })
  })

  const events = data?.events || []

  if (isPending) return <h2 className="text-xl">Please wait...</h2>
  if (events.length < 1)
    return (
      <h2 className="text-xl mt-10 px-4 text-muted-foreground">
        No events found
      </h2>
    )

  return (
    <div className="grid md:grid-cols-2 gap-8 mt-20 p-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}
