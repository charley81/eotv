import ThemeToggle from './theme-toggle'
import NavlinksDropdown from './navlinks-dropdown'
import { UserButton } from '@clerk/nextjs'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 pt-10">
      <NavlinksDropdown />
      <div className="flex items-center gap-x-2">
        <ThemeToggle />
        <UserButton />
      </div>
    </nav>
  )
}
