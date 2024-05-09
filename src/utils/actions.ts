'use server'
import { db } from '@/server/db'
import { auth } from '@clerk/nextjs/server'
import { and, eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'
import { events } from '@/server/db/schema'
import { useToast } from '@/components/ui/use-toast'
import {
  EventType,
  CreateAndEditEventType,
  createAndEditEventSchema
} from './types'
import { revalidatePath } from 'next/cache'

function checkAuth(): string {
  const { userId } = auth()
  if (!userId) {
    return redirect('/')
  }

  return userId
}

export async function createEventAction(values: CreateAndEditEventType) {
  const userId = checkAuth()
  try {
    const event = await db.insert(events).values({ ...values, clerkId: userId })
    return event
  } catch (error) {
    console.error(error)
  }
}
