import * as z from 'zod'

export type EventType = {
  id: string
  eventName: string
  houseNumber: string
  dateOfEvent: Date
  category: string
  startTime: string
  endTime: string
  eventHost: string
  eventDetails: string
  createdAt: Date
  updatedAt: Date
}

export enum Category {
  Fire = 'Fire',
  Food = 'Food',
  Other = 'Other'
}

export const createAndEditEventSchema = z.object({
  eventName: z.string().min(2).max(25),
  houseNumber: z.string().min(2).max(6),
  dateOfEvent: z.date(),
  startTime: z.string().min(2),
  endTime: z.string().min(2),
  eventHost: z.string().min(2).max(25),
  eventDetails: z.string().min(2).max(100),
  category: z.nativeEnum(Category)
})

export type CreateAndEditEventType = z.infer<typeof createAndEditEventSchema>
