import * as z from 'zod'

export type EventType = {
  id: string
  clerkId: string
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
  eventName: z.string().min(2, {
    message: 'Event name must be at least 2 characters'
  }),
  houseNumber: z.string().min(2, {
    message: 'House number must be at least 2 characters'
  }),
  dateOfEvent: z.date(),
  startTime: z.string().min(2, {
    message: 'Start time must be at least 2 characters'
  }),
  endTime: z.string().min(2, {
    message: 'End time must be at least 2 characters'
  }),
  eventHost: z.string().min(2, {
    message: 'Event host must be at least 2 characters'
  }),
  eventDetails: z.string().min(2, {
    message: 'Event details must be at least 2 characters'
  }),
  category: z.nativeEnum(Category)
})

export type CreateAndEditEventType = z.infer<typeof createAndEditEventSchema>
