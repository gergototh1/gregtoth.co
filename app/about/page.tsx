'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

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

export default function About() {
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

        <h1 className="text-2xl font-semibold mb-6">About</h1>
      </motion.div>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-6"
      >
        <div className="space-y-6">
          <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">Business guy turned vibe coder</h2>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I've spent 10+ years in business development and marketing, and even ran my own software development company as CEO – without ever being a developer myself.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I always had bold product ideas, but until recently, turning them into real software felt out of reach.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            That changed with AI and vibe coding.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Now I can build my own products from scratch, combining my business instincts with AI-powered development. No dev team, no endless blockers – just me, my ideas, and the tools to ship them.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I love exploring the intersection of AI and product creation. For me, it's not just about coding – it's about creating new solutions, faster than ever, and actually bringing them to life.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Outside of building, you'll probably catch me geeking out on the latest AI breakthroughs, startup trends, or sketching out the next "crazy but doable" product idea.
          </p>
        </div>
      </motion.section>
    </motion.main>
  )
}