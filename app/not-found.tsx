import Link from 'next/link'

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">404 - Page Not Found</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Try these instead:</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/"
              className="text-zinc-900 dark:text-zinc-100 hover:underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-zinc-900 dark:text-zinc-100 hover:underline"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-zinc-900 dark:text-zinc-100 hover:underline"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/articles"
              className="text-zinc-900 dark:text-zinc-100 hover:underline"
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-zinc-900 dark:text-zinc-100 hover:underline"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}