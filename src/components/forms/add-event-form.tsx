'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { Form } from '../ui/form'
import { times } from '@/utils/times'
import {
  CustomFormField,
  CustomSelect,
  CustomTextarea
} from './form-components'
import {
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
      startTime: '',
      endTime: '',
      eventHost: '',
      eventDetails: '',
      category: Category.Food
    }
  })

  function onSubmit(data: CreateAndEditEventType) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-4">
        <h2 className="text-4xl">Add Event</h2>
        <CustomFormField
          name="eventName"
          control={form.control}
          placeholderText="Event Name"
        />
        <CustomFormField
          name="houseNumber"
          control={form.control}
          placeholderText="House #"
        />
        <CustomFormField
          name="dateOfEvent"
          control={form.control}
          placeholderText="Date"
        />
        <CustomSelect
          name="category"
          control={form.control}
          placeholderText="Category"
          items={Object.values(Category)}
        />
        <CustomSelect
          name="startTime"
          control={form.control}
          items={times}
          placeholderText="Start Time"
        />
        <CustomSelect
          name="endTime"
          control={form.control}
          items={times}
          placeholderText="End Time"
        />
        <CustomFormField
          name="eventHost"
          control={form.control}
          placeholderText="Event Host"
        />
        <CustomTextarea
          name="eventDetails"
          control={form.control}
          placeholderText="Event Details"
        />
        <Button type="submit">Add Event</Button>
      </form>
    </Form>
  )
}
