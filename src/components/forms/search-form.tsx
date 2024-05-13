'use client'

import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Category } from '@/utils/types'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select'
import { EventType } from '@/utils/types'

export default function SearchForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const search = formData.get('search') as string
    const category = formData.get('category') as Category
    console.log(search, category)
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Search Events" name="search" />
      <Select name="category">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {['All', ...Object.values(Category)].map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit" className="w-full">
        Search
      </Button>
    </form>
  )
}
