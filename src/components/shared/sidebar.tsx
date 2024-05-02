'use client'

import Logo from './logo'
import { mainNavLinks } from '../../utils/links'
import { Button } from '../ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <>
      <Logo />
      <nav className="mt-20">
        <ul className="grid gap-2">
          {mainNavLinks.map((link) => (
            <li key={link.href}>
              <Button
                asChild
                variant="link"
                className={cn('text-muted-foreground', {
                  'text-foreground': pathname === link.href
                })}
              >
                <Link href={link.href} className="flex items-center gap-1">
                  {link.icon} {link.name}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
