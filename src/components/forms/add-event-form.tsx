'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { times } from '@/utils/times'

import { Button } from '../ui/button'
import { Form } from '../ui/form'

import { AddEventAction } from '@/utils/actions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useToast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'

import {
  CustomFormField,
  CustomSelect,
  CustomTextarea,
  CustomDatePicker
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
      dateOfEvent: new Date(),
      startTime: '',
      endTime: '',
      eventHost: '',
      eventDetails: '',
      category: Category.Food
    }
  })

  const queryClient = useQueryClient()
  const { toast } = useToast()
  const router = useRouter()

  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditEventType) => AddEventAction(values),
    onSuccess: (data) => {
      if (!data) {
        toast({ description: 'There was an error' })
        return
      }
      toast({ description: 'Event added successfully' })
      queryClient.invalidateQueries({ queryKey: ['events'] })

      router.push('/all-events')
    }
  })

  function onSubmit(values: CreateAndEditEventType) {
    mutate(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="px-4 pt-16">
        <h2 className="text-4xl mb-8">Add Event</h2>
        <div className="grid gap-y-8 md:grid-cols-2 md:gap-4">
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
          <CustomDatePicker name="dateOfEvent" control={form.control} />
          <CustomSelect
            name="category"
            control={form.control}
            placeholderText="Category"
            items={Object.values(Category)}
          />
          <div className="w-full grid gap-y-8 md:flex md:gap-4">
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
          </div>

          <CustomFormField
            name="eventHost"
            control={form.control}
            placeholderText="Event Host"
          />
        </div>

        <CustomTextarea
          name="eventDetails"
          control={form.control}
          placeholderText="Event Details"
          styles="mt-8"
        />
        <Button type="submit" disabled={isPending} className="mt-8">
          {isPending ? 'Adding Event...' : 'Add Event'}
        </Button>
      </form>
    </Form>
  )
}
