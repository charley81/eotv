import { Copy, FilePlus2, SquareUserRound } from 'lucide-react'

// <Copy />
// <FilePlus2 />
// <SquareUserRound />

type Link = {
  href: string
  name: string
  icon: React.ReactNode
}

export const mainNavLinks: Link[] = [
  {
    href: '/all-events',
    name: 'All Events',
    icon: <Copy />
  },
  {
    href: '/add-event',
    name: 'Add Event',
    icon: <FilePlus2 />
  },
  {
    href: '/my-events',
    name: 'My Events',
    icon: <SquareUserRound />
  }
]
