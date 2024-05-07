import { Control } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { times } from '@/utils/times'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup
} from '@/components/ui/select'

type CustomFormFieldProps = {
  control: Control<any>
  name: string
}

export function CustomFormField({ name, control }: CustomFormFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input placeholder={name} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

type CustomFormSelectProps = {
  control: Control<any>
  name: string
  items: string[]
}

export function CustomFormSelect({
  control,
  name,
  items
}: CustomFormSelectProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a verified email to display" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

type CustomFormTextareaProps = {
  control: Control<any>
  name: string
}

export function CustomFormTextarea({ name, control }: CustomFormTextareaProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Textarea placeholder={name} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

type CustomFormTimePickerProps = {
  control: Control<any>
  name: string
}

export function CustomFormTimePicker({
  control,
  name
}: CustomFormTimePickerProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={name} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {times.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  )
}
