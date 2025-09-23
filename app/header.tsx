'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const navigation = [
  { name: '.about', href: '/about' },
  { name: '.projects', href: '/projects' },
  { name: '.articles', href: '/articles' },
  { name: '.contact', href: '/contact' },
]

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="mb-12">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/" className="font-mono font-semibold text-lg text-black dark:text-white tracking-wide">
            greg.toth
          </Link>
          <p className="text-zinc-600 dark:text-zinc-500 font-mono text-sm">
            ~/vibe-coder && indie-hacker
          </p>
        </div>

        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 ${
                  pathname === item.href
                    ? 'text-zinc-900 dark:text-zinc-100'
                    : 'text-zinc-600 dark:text-zinc-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex h-7 w-7 items-center justify-center rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className={`h-4 w-4 transition-transform ${isMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="mt-4 md:hidden">
          <div className="flex flex-col space-y-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 px-2 py-1 rounded ${
                  pathname === item.href
                    ? 'text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800'
                    : 'text-zinc-600 dark:text-zinc-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}