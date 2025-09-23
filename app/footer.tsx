'use client'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-200 py-8 text-center text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
      <p>© {new Date().getFullYear()} Greg Toth. Built with Next.js and Tailwind CSS.</p>
    </footer>
  )
}