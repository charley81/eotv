'use server'

import prisma from '../utils/db'
import { auth } from '@clerk/nextjs/server'
import {
  EventType,
  CreateAndEditEventType,
  createAndEditEventSchema
} from './types'
import { redirect } from 'next/navigation'
import { Prisma } from '@prisma/client'
//import dayjs from 'dayjs'

function checkAuth() {
  const { userId } = auth()
  if (!userId) redirect('/')
  return userId
}

// Add Event
export async function AddEventAction(
  values: CreateAndEditEventType
): Promise<EventType | null> {
  const userId = checkAuth()
  try {
    createAndEditEventSchema.parse(values)
    const event = await prisma.eotvEvent.create({
      data: {
        ...values,
        clerkId: userId
      }
    })

    return event
  } catch (error) {
    console.error(error)
    return null
  }
}

type GetAllEventsActionType = {
  search?: string
  category?: string
  page?: number
  limit?: number
}

// Get All Events
export async function getAllEventsAction({
  search,
  category,
  page = 1,
  limit = 10
}: GetAllEventsActionType): Promise<{
  events: EventType[]
  count: number
  page: number
  totalPages: number
}> {
  const userId = checkAuth()

  try {
    let whereClause: Prisma.EotvEventWhereInput = {
      clerkId: userId
    }

    if (search) {
      whereClause = {
        ...whereClause,
        OR: [
          { eventName: { contains: search } },
          { category: { contains: search } }
        ]
      }
    }

    if (category && category !== 'all') {
      whereClause = {
        ...whereClause,
        category: category
      }
    }

    const skip = (page - 1) * limit

    const events: EventType[] = await prisma.eotvEvent.findMany({
      where: whereClause,
      skip,
      take: limit,
      orderBy: {
        createdAt: 'desc'
      }
    })

    const count: number = await prisma.eotvEvent.count({
      where: whereClause
    })
    const totalPages = Math.ceil(count / limit)
    return { events, count, page, totalPages }
  } catch (error) {
    console.error(error)
    return { events: [], count: 0, page: 1, totalPages: 0 }
  }
}
