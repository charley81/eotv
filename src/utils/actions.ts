'use server'
import { db } from '@/server/db'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { events } from '@/server/db/schema'
import { createAndEditEventSchema, EventType } from './types'
import { revalidatePath } from 'next/cache'
import { QueryResult } from '@vercel/postgres'

function checkAuth(): string {
  const { userId } = auth()
  if (!userId) {
    throw new Error('Not authenticated')
    redirect('/')
  }

  return userId
}

type Event = typeof events.$inferInsert

// ===== Create Event Action =====
export async function createEventAction(values: Event) {
  const userId = checkAuth()
  createAndEditEventSchema.parse(values)
  try {
    await db.insert(events).values({ ...values, clerkId: userId })
    revalidatePath('/all-events')
  } catch (error) {
    console.error(error)
  }
}

// ===== Get All Events Action =====
type GetAllEventActionType = {
  search?: string
  category?: string
  page?: number
  limit?: number
}

export async function getAllEventsAction({
  search,
  category,
  page = 1,
  limit = 10
}: GetAllEventActionType): Promise<{
  events: EventType[]
  count: number
  page: number
  totalPages: number
}> {
  checkAuth()
  const result = await db.query.events.findMany({})

  return { events: [], count: 0, page: 1, totalPages: 1 }
}
