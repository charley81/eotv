'use server'
import { db } from '@/server/db'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { events } from '@/server/db/schema'
import { createAndEditEventSchema } from './types'
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

type NewEvent = typeof events.$inferInsert

export async function createEventAction(values: NewEvent) {
  const userId = checkAuth()
  createAndEditEventSchema.parse(values)
  try {
    const event = await db.insert(events).values({ ...values, clerkId: userId })
    revalidatePath('/all-events')
  } catch (error) {
    console.error(error)
  }
}
