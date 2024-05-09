import AddEventForm from '@/components/forms/add-event-form'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'

export default function AddEventPage() {
  const queryClient = new QueryClient()

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AddEventForm />
      </HydrationBoundary>
    </>
  )
}
