import { PropsWithChildren } from 'react'

type EventInfoTypes = {
  params: {
    id: string
  }
}

export default function EventInfo({ params }: EventInfoTypes) {
  return (
    <div>
      <h1 className="text-4xl">ID: {params.id}</h1>
    </div>
  )
}
