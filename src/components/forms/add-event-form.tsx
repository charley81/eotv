'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { Form } from '../ui/form'
import {
  CustomFormField,
  CustomFormSelect,
  CustomFormTextarea,
  CustomFormTimePicker
} from './form-components'
import {
  EventType,
  Category,
  createAndEditEventSchema,
  CreateAndEditEventType
} from '@/utils/types'

export default function AddEventForm() {
  const form = useForm<CreateAndEditEventType>({
    resolver: zodResolver(createAndEditEventSchema),
    defaultValues: {
      eventName: '',
      houseNumber: '',
      dateOfEvent: '',
      category: Category.Food,
      startTime: '',
      endTime: '',
      eventHost: '',
      eventDetails: ''
    }
  })

  function onSubmit(data: CreateAndEditEventType) {
    console.log(data)
  }

  return (
    <main>
      <h2 className="text-4xl">Add Event</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-4">
          <CustomFormField name="Event Name" control={form.control} />
          <CustomFormField name="House #" control={form.control} />
          <CustomFormField name="Date of Event" control={form.control} />
          <CustomFormSelect
            name="Category"
            control={form.control}
            items={Object.values(Category)}
          />
          <CustomFormTimePicker name="Start Time" control={form.control} />
          <CustomFormTimePicker name="End Time" control={form.control} />
          <CustomFormField name="Event Host" control={form.control} />
          <CustomFormTextarea name="Event Details" control={form.control} />
          <Button type="submit">Add Event</Button>
        </form>
      </Form>
    </main>
  )
}
