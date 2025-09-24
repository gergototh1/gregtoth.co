'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function Articles() {
  // Use static data for client component to avoid fs module issues
  const posts = [
    {
      slug: 'hello',
      title: 'Hello World - My First Blog Post',
      date: '2025-01-13',
      excerpt: 'Welcome to my new blog! This is my first post using MDX.',
      author: 'Greg Toth',
      tags: ['blog', 'introduction', 'mdx'],
      content: ''
    },
    {
      slug: 'from-business-to-dev',
      title: 'From Business Guy to Solo Developer',
      date: '2025-01-12',
      excerpt: 'My journey transitioning from business roles to full-stack development using AI and modern tools.',
      author: 'Greg Toth',
      tags: ['career', 'development', 'AI', 'solo'],
      content: ''
    },
    {
      slug: 'vibe-coding',
      title: 'The Power of Vibe Coding',
      date: '2025-01-11',
      excerpt: 'How AI-assisted development changed my approach to building products and why intuition matters more than perfection.',
      author: 'Greg Toth',
      tags: ['AI', 'development', 'philosophy', 'productivity'],
      content: ''
    }
  ]
  return (
    <motion.main
      className="space-y-8"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <Link
          href="/"
          className="inline-flex items-center text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8"
        >
          ← Back to home
        </Link>

        <h1 className="text-2xl font-semibold mb-8">Articles</h1>
      </motion.div>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex flex-col space-y-0">
          {posts.length === 0 ? (
            <p className="text-zinc-600 dark:text-zinc-400">No articles yet. Check back soon!</p>
          ) : (
            <AnimatedBackground
              enableHover
              className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.2,
              }}
            >
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  className="-mx-3 rounded-xl px-3 py-3"
                  href={`/articles/${post.slug}`}
                  data-id={post.slug}
                >
                  <div className="flex flex-col space-y-1">
                    <h4 className="font-normal dark:text-zinc-100">
                      {post.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </AnimatedBackground>
          )}
        </div>
      </motion.section>
    </motion.main>
  )
}