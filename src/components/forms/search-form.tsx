'use client'

import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Category } from '@/utils/types'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select'

export default function SearchForm() {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''
  const category = searchParams.get('category') || 'All'

  const router = useRouter()
  const pathname = usePathname()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    let params = new URLSearchParams()

    const formData = new FormData(event.currentTarget)
    const search = formData.get('search') as string
    const category = formData.get('category') as string

    params.set('search', search)
    params.set('category', category)

    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-20 p-4 max-w-3xl mx-auto xl:flex xl:justify-between xl:items-center xl:gap-x-4 xl:max-w-6xl"
    >
      <section className="grid gap-y-5 sm:grid-cols-2 sm:gap-y-0 sm:gap-x-4 xl:flex xl:flex-1 xl">
        <Input
          type="text"
          placeholder="Search Events"
          name="search"
          defaultValue={search}
        />
        <Select name="category" defaultValue={category}>
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
      </section>

      <Button type="submit" className="mt-8 w-full xl:mt-0 xl:w-1/3">
        Search
      </Button>
    </form>
  )
}
