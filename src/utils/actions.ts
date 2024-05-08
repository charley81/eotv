'use server'
import { db } from '@/server/db'
import { auth } from '@clerk/nextjs/server'
import { and, eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'
import {
  EventType,
  CreateAndEditEventType,
  createAndEditEventSchema
} from './types'

function checkAuth(): string {
  const { userId } = auth()
  if (!userId) {
    return redirect('/')
  }

  return userId
}

export async function createEventAction(
  event: CreateAndEditEventType
): Promise<EventType | null> {
  const userId = checkAuth()
  try {
    createAndEditEventSchema.parse(event)
    const newEvent: EventType = await db.insert({
      ...event,
      clerkId: userId
    })
    return newEvent
  } catch (error) {
    console.error(error)
    return null
  }
}
