import { Copy, FilePlus2, SquareUserRound } from 'lucide-react'

// <Copy />
// <FilePlus2 />
// <SquareUserRound />

type Link = {
  href: string
  name: string
  Icon: React.ReactNode
}

const links:git a Link[] = [
  {
    href: '/all-events',
    name: 'All Events',
    Icon: <Copy />
  },
  {
    href: '/create-event',
    name: 'Create Event',
    Icon: <FilePlus2 />
  },
  {
    href: '/my-events',
    name: 'My Events',
    Icon: <SquareUserRound />
  }
]
