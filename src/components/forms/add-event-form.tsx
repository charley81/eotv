'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { times } from '@/utils/times'

import { Button } from '../ui/button'
import { Form } from '../ui/form'

import { createEventAction } from '@/utils/actions'
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
    mutationFn: (values: CreateAndEditEventType) => {
      return createEventAction(values)
    },
    onError: (error) => {
      toast({ description: error.message })
    },
    onSuccess: () => {
      toast({ description: 'job created' })
      queryClient.invalidateQueries({ queryKey: ['events'] })
      router.push('/my-events')
      // form.reset();
    }
  })

  function onSubmit(values: CreateAndEditEventType) {
    mutate(values)
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
        <CustomDatePicker name="dateOfEvent" control={form.control} />
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
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Adding Event...' : 'Add Event'}
        </Button>
      </form>
    </Form>
  )
}
