'use client'

import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Something went wrong</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          An error occurred while loading this page. Please try again.
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-md hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          Go home
        </Link>
      </div>

      {process.env.NODE_ENV === 'development' && (
        <details className="mt-8 p-4 bg-red-50 dark:bg-red-900/20 rounded-md">
          <summary className="cursor-pointer text-red-800 dark:text-red-200 font-medium">
            Error details (development only)
          </summary>
          <pre className="mt-2 text-sm text-red-700 dark:text-red-300 overflow-auto">
            {error.message}
          </pre>
        </details>
      )}
    </div>
  )
}