import { motion } from 'framer-motion'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/mdx'

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

// MDX components with custom styling (not used in current implementation)
// const components = {
//   h1: (props: React.ComponentProps<'h1'>) => (
//     <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6" {...props} />
//   ),
//   h2: (props: React.ComponentProps<'h2'>) => (
//     <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4 mt-8" {...props} />
//   ),
//   h3: (props: React.ComponentProps<'h3'>) => (
//     <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3 mt-6" {...props} />
//   ),
//   p: (props: React.ComponentProps<'p'>) => (
//     <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4" {...props} />
//   ),
//   a: (props: React.ComponentProps<'a'>) => (
//     <a
//       className="text-zinc-900 dark:text-zinc-100 underline hover:text-zinc-700 dark:hover:text-zinc-300"
//       {...props}
//     />
//   ),
//   ul: (props: React.ComponentProps<'ul'>) => (
//     <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 mb-4 space-y-2" {...props} />
//   ),
//   ol: (props: React.ComponentProps<'ol'>) => (
//     <ol className="list-decimal list-inside text-zinc-600 dark:text-zinc-400 mb-4 space-y-2" {...props} />
//   ),
//   li: (props: React.ComponentProps<'li'>) => (
//     <li className="leading-relaxed" {...props} />
//   ),
//   code: (props: React.ComponentProps<'code'>) => (
//     <code
//       className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm font-mono"
//       {...props}
//     />
//   ),
//   pre: (props: React.ComponentProps<'pre'>) => (
//     <pre className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg overflow-x-auto mb-6">
//       <code className="text-sm font-mono" {...props} />
//     </pre>
//   ),
//   blockquote: (props: React.ComponentProps<'blockquote'>) => (
//     <blockquote
//       className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-4 italic text-zinc-600 dark:text-zinc-400 mb-4"
//       {...props}
//     />
//   ),
//   strong: (props: React.ComponentProps<'strong'>) => (
//     <strong className="font-semibold text-zinc-900 dark:text-zinc-100" {...props} />
//   ),
// }

// Helper functions for navigation
const getPreviousPost = (currentSlug: string) => {
  const posts = getAllPosts()
  const currentIndex = posts.findIndex(post => post.slug === currentSlug)
  return currentIndex > 0 ? posts[currentIndex - 1] : null
}

const getNextPost = (currentSlug: string) => {
  const posts = getAllPosts()
  const currentIndex = posts.findIndex(post => post.slug === currentSlug)
  return currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
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
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
            <time>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>by {post.author}</span>
          </div>

          {post.tags.length > 0 && (
            <div className="flex gap-2">
              {post.tags.map((tag) => (
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
        className="space-y-6"
      >
        <div
          className="space-y-6 text-zinc-600 dark:text-zinc-400 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: post.content
              .replace(/\n\n/g, '</p><p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">')
              .replace(/^/, '<p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">')
              .replace(/$/, '</p>')
              .replace(/## (.*?)<\/p>/g, '<h2 class="text-xl font-medium text-zinc-900 dark:text-zinc-100 mt-8 mb-4">$1</h2>')
              .replace(/### (.*?)<\/p>/g, '<h3 class="text-lg font-medium text-zinc-900 dark:text-zinc-100 mt-6 mb-3">$1</h3>')
              .replace(/- (.*?)<\/p>/g, '<li class="text-zinc-600 dark:text-zinc-400 leading-relaxed">$1</li>')
              .replace(/(<li.*?<\/li>)/g, '<ul class="list-disc list-inside space-y-2 my-4">$1</ul>')
              .replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium text-zinc-900 dark:text-zinc-100">$1</strong>')
              .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
              .replace(/<p[^>]*><h/g, '<h')
              .replace(/<\/h([1-6])><\/p>/g, '</h$1>')
              .replace(/<p[^>]*><ul>/g, '<ul>')
              .replace(/<\/ul><\/p>/g, '</ul>')
              .replace(/<p[^>]*><\/p>/g, '')
          }}
        />
      </motion.article>

      <motion.nav
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800"
      >
        <div className="flex justify-between items-center">
          {getPreviousPost(params.slug) ? (
            <Link
              href={`/articles/${getPreviousPost(params.slug)?.slug}`}
              className="group flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-zinc-500 dark:text-zinc-500">Previous</div>
                <div className="font-medium">{getPreviousPost(params.slug)?.title}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {getNextPost(params.slug) ? (
            <Link
              href={`/articles/${getNextPost(params.slug)?.slug}`}
              className="group flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors text-right"
            >
              <div className="text-right">
                <div className="text-xs text-zinc-500 dark:text-zinc-500">Next</div>
                <div className="font-medium">{getNextPost(params.slug)?.title}</div>
              </div>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </motion.nav>
    </motion.main>
  )
}