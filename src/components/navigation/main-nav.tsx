'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link
        href="/"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          pathname === '/' ? 'text-primary' : 'text-muted-foreground'
        }`}
      >
        Home
      </Link>
      <Link
        href="/(dashboard)/dashboard"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          pathname === '/(dashboard)/dashboard' ? 'text-primary' : 'text-muted-foreground'
        }`}
      >
        Dashboard
      </Link>
      <Link
        href="/(dashboard)/contracts"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          pathname === '/(dashboard)/contracts' ? 'text-primary' : 'text-muted-foreground'
        }`}
      >
        Contracts
      </Link>
      <Link
        href="/(auth)/register"
        className={`text-sm font-medium transition-colors hover:text-primary ${
          pathname === '/(auth)/register' ? 'text-primary' : 'text-muted-foreground'
        }`}
      >
        Register
      </Link>
      {/* Add more navigation links as needed */}
    </nav>
  )
}
