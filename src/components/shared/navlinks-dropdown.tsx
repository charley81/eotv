import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { AlignJustify } from 'lucide-react'
import { Button } from '../ui/button'
import { mainNavLinks as links } from '@/utils/links'
import Link from 'next/link'

export default function NavlinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="icon">
          <AlignJustify />
          <span className="sr-only">Toggle navigation links</span>
        </Button>
      </DropdownMenuTrigger>

      <div className="p-2 w-lvh">
        <DropdownMenuContent className="w-52" align="start" sideOffset={16}>
          {links.map((link) => (
            <DropdownMenuItem key={link.href} asChild>
              <Link href={link.href} className="flex items-center gap-2">
                {link.icon} {link.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  )
}
