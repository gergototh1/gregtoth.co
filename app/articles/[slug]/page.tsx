'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useParams, notFound } from 'next/navigation'

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

// MDX components with custom styling
const components = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4 mt-8" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3 mt-6" {...props} />
  ),
  p: (props: any) => (
    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4" {...props} />
  ),
  a: (props: any) => (
    <a
      className="text-zinc-900 dark:text-zinc-100 underline hover:text-zinc-700 dark:hover:text-zinc-300"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 mb-4 space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside text-zinc-600 dark:text-zinc-400 mb-4 space-y-2" {...props} />
  ),
  li: (props: any) => (
    <li className="leading-relaxed" {...props} />
  ),
  code: (props: any) => (
    <code
      className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg overflow-x-auto mb-6">
      <code className="text-sm font-mono" {...props} />
    </pre>
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-4 italic text-zinc-600 dark:text-zinc-400 mb-4"
      {...props}
    />
  ),
  strong: (props: any) => (
    <strong className="font-semibold text-zinc-900 dark:text-zinc-100" {...props} />
  ),
}

export default function ArticlePage() {
  const params = useParams()
  const slug = params?.slug as string
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data for now - will implement proper MDX loading later
    const mockPosts: Record<string, any> = {
      'hello': {
        meta: {
          title: 'Hello World - My First Blog Post',
          date: '2025-01-13',
          author: 'Greg Toth',
          tags: ['blog', 'introduction', 'mdx']
        },
        content: 'Welcome to my blog! This is where I\'ll share thoughts on development, AI, and building products solo.'
      },
      'from-business-to-dev': {
        meta: {
          title: 'From Business Guy to Solo Developer',
          date: '2025-01-12',
          author: 'Greg Toth',
          tags: ['career', 'development', 'AI', 'solo']
        },
        content: 'My journey from business development to solo development using AI tools and modern practices.'
      },
      'vibe-coding': {
        meta: {
          title: 'The Power of Vibe Coding',
          date: '2025-01-11',
          author: 'Greg Toth',
          tags: ['AI', 'development', 'philosophy', 'productivity']
        },
        content: 'How AI-assisted development changed my approach to building products and why intuition matters more than perfection.'
      }
    }

    const foundPost = mockPosts[slug]
    if (foundPost) {
      setPost(foundPost)
    }
    setLoading(false)
  }, [slug])

  if (loading) {
    return <div className="text-zinc-600 dark:text-zinc-400">Loading...</div>
  }

  if (!post) {
    return <div className="text-zinc-600 dark:text-zinc-400">Article not found.</div>
  }

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
          href="/articles"
          className="inline-flex items-center text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8"
        >
          ← Back to articles
        </Link>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            {post.meta.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
            <time>
              {new Date(post.meta.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>by {post.meta.author}</span>
          </div>

          {post.meta.tags.length > 0 && (
            <div className="flex gap-2">
              {post.meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-sm font-medium text-zinc-600 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      <motion.article
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="prose prose-zinc dark:prose-invert max-w-none"
      >
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {post.content}
        </p>
        <div className="mt-8 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            💡 <strong>Note:</strong> This is a simplified version. Full MDX rendering will be implemented in the next iteration.
          </p>
        </div>
      </motion.article>
    </motion.main>
  )
}