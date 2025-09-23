'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PROJECTS } from '../data'

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

export default function Projects() {
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

        <h1 className="text-2xl font-semibold mb-4">Projects</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          A collection of products I've built solo, leveraging AI and modern development practices.
        </p>
      </motion.div>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.name} className="space-y-4">
              <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center">
                  <div className="text-zinc-500 dark:text-zinc-400 text-sm font-mono">
                    {project.name}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <a
                  className="font-base group relative inline-block text-xl font-medium text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                </a>

                <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-zinc-900 dark:text-zinc-100 hover:text-zinc-700 dark:hover:text-zinc-300 font-medium"
                >
                  Visit project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}