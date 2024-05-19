import { EventType } from '@/utils/types'
import Link from 'next/link'
import { truncate, capitalizeWords } from '@/utils/helper-functions'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { MoveRight } from 'lucide-react'

type EventCardProps = {
  event: EventType
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Card>
      <CardHeader className="px-4 pt-8">
        <CardTitle>{capitalizeWords(event.eventName)}</CardTitle>
      </CardHeader>
      <CardContent className="px-4 py-8">
        <p>{truncate(event.eventDetails, 100)}</p>
      </CardContent>
      <CardFooter>
        <Link
          className="w-full font-bold text-muted-foreground flex gap-x-1 items-center justify-end"
          href={`/events/${event.id}`}
        >
          <MoveRight className="text-primary" />
          More
        </Link>
      </CardFooter>
    </Card>
  )
}
