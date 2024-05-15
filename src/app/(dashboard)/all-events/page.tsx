//import { getAllEventsAction } from '@/utils/actions'
import EventsList from '@/components/events/events-list'
import SearchForm from '@/components/forms/search-form'
import { getAllEventsAction } from '@/utils/actions'
import {
  QueryClient,
  HydrationBoundary,
  dehydrate
} from '@tanstack/react-query'
import { SquareArrowOutDownRightIcon } from 'lucide-react'

export default async function AllEventsPage() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['events', '', 'all', 1],
    queryFn: () => getAllEventsAction({})
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchForm />
      <EventsList />
    </HydrationBoundary>
  )
}
