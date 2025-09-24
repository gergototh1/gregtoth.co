'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

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

// Static blog post data (matches data.ts)
const posts = [
  {
    slug: 'hello',
    title: 'Hello World - My First Blog Post',
    date: '2025-01-13',
    excerpt: 'Welcome to my new blog! This is my first post using MDX.',
    author: 'Greg Toth',
    tags: ['blog', 'introduction', 'mdx'],
    content: `# Welcome to My Blog!

This is my first blog post using **MDX**. With MDX, I can write regular Markdown and also include React components directly in my content.

## What is MDX?

MDX is a format that lets you write JSX in your Markdown documents. This means you can:

- Write normal Markdown content
- Include React components
- Create interactive content

## Example Code

Here's a simple JavaScript function:

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));
\`\`\`

## What's Next?

I'll be writing more posts about:

1. **Web Development** - Tips and tricks
2. **React** - Best practices
3. **Next.js** - Advanced techniques
4. **TypeScript** - Type safety`
  },
  {
    slug: 'from-business-to-dev',
    title: 'From Business Guy to Solo Developer',
    date: '2025-01-12',
    excerpt: 'My journey transitioning from business roles to full-stack development using AI and modern tools.',
    author: 'Greg Toth',
    tags: ['career', 'development', 'AI', 'solo'],
    content: `# From Business Guy to Solo Developer

After spending 10+ years in business development and marketing roles at various startups, I made the leap to becoming a solo developer. This transition wasn't traditional, and it wouldn't have been possible without modern AI tools.

## The Business Background

My career started in the business side of tech companies. I worked in:

- **Business Development** - Building partnerships and revenue streams
- **Marketing** - Digital marketing campaigns and growth strategies
- **Product Strategy** - Working with engineering teams on product direction
- **Sales** - Enterprise and SMB customer acquisition

## The Turning Point

In 2023, I realized that the traditional model of building teams and raising funding wasn't the only path anymore. AI tools like:

- **Claude** for code generation and architecture decisions
- **GitHub Copilot** for faster development
- **ChatGPT** for debugging and learning
- **V0** for rapid UI prototyping

These tools democratized software development in a way that allowed someone with business experience to become technically proficient quickly.

## The Solo Developer Philosophy

Being a solo developer means:

1. **Full Ownership** - Every decision, from technical architecture to business strategy
2. **Rapid Iteration** - No meetings, no approval processes, just build and ship
3. **AI-First Approach** - Leveraging AI for tasks that would traditionally require a team
4. **Business-Minded Development** - Building features that actually matter to users

## Current Projects

I'm now working on several projects:

- **CryptoVideoReport.com** - AI-powered crypto market analysis
- **Inbox2Invoice.com** - Automated invoice processing
- **This Blog** - Sharing the journey and lessons learned

## Lessons Learned

The biggest lesson? You don't need to be the best developer to build successful products. You need to:

- Understand your users
- Ship quickly and iterate
- Use the right tools for the job
- Focus on solving real problems

The combination of business experience and AI-assisted development is incredibly powerful for solo entrepreneurs.`
  },
  {
    slug: 'vibe-coding',
    title: 'The Power of Vibe Coding',
    date: '2025-01-11',
    excerpt: 'How AI-assisted development changed my approach to building products and why intuition matters more than perfection.',
    author: 'Greg Toth',
    tags: ['AI', 'development', 'philosophy', 'productivity'],
    content: `# The Power of Vibe Coding

Traditional software development follows strict methodologies: detailed requirements, architectural planning, extensive testing, code reviews. But what if there's a different way? What if you could build by feel, by intuition, by *vibe*?

## What is Vibe Coding?

Vibe coding is my term for a development approach that prioritizes:

- **Intuitive Problem Solving** - Trust your instincts about what users need
- **Rapid Prototyping** - Build first, optimize later
- **AI-Assisted Flow** - Let AI handle the boilerplate while you focus on the creative parts
- **Imperfect Progress** - Ship working solutions over perfect code

## The Traditional Way vs The Vibe Way

### Traditional Development:
1. Write detailed specifications
2. Create comprehensive tests
3. Build with extensive error handling
4. Code review and refactor
5. Document everything
6. Deploy with monitoring

### Vibe Development:
1. Have an idea
2. Ask AI to help build it
3. Iterate based on feel
4. Ship when it works
5. Fix issues as they come up
6. Move to the next idea

## Why Vibe Coding Works for Solo Developers

When you're building alone, you don't have the luxury of formal processes. You need to move fast and trust your judgment. AI tools make this possible by:

- **Handling the Routine** - AI writes boilerplate, handles imports, suggests patterns
- **Reducing Cognitive Load** - Less mental energy spent on syntax, more on solving problems
- **Enabling Experimentation** - Try ideas quickly without the overhead

## Examples from My Projects

### CryptoVideoReport.com
- **The Vibe**: "People want crypto news in video format"
- **The Build**: Used AI to help create video generation pipeline
- **The Result**: Working product in 3 weeks, not 3 months

### Inbox2Invoice.com
- **The Vibe**: "Email invoice processing should be automatic"
- **The Build**: AI helped with PDF parsing and email integration
- **The Result**: MVP that actually processes real invoices

## The Downsides

Vibe coding isn't perfect:

- **Technical Debt** - You accumulate shortcuts
- **Scalability Issues** - Quick solutions don't always scale
- **Documentation Gaps** - Hard to onboard others later
- **Quality Concerns** - Less rigorous testing

## When to Use Vibe Coding

Vibe coding works best when:

- You're building MVPs or prototypes
- You're a solo developer or small team
- Time to market is critical
- You have AI tools to assist
- You can afford to refactor later

## The Future of Development

I believe we're entering an era where the ability to build quickly and intuitively matters more than following perfect processes. AI tools are making it possible for anyone with good product instincts to create software.

The developers who thrive will be those who can:
1. Identify what users actually want
2. Use AI to build solutions quickly
3. Iterate based on real feedback
4. Scale when it's time to scale

Vibe coding is just the beginning. The future belongs to builders who can think in product and execute in code, even if that code isn't perfect.`
  }
]

// Helper functions for navigation
const getPreviousPost = (currentSlug: string) => {
  const currentIndex = posts.findIndex(post => post.slug === currentSlug)
  return currentIndex > 0 ? posts[currentIndex - 1] : null
}

const getNextPost = (currentSlug: string) => {
  const currentIndex = posts.findIndex(post => post.slug === currentSlug)
  return currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
}

export default function ArticlePage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="space-y-8">
        <div>
          <Link
            href="/articles"
            className="inline-flex items-center text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8"
          >
            ← Back to articles
          </Link>
          <h1 className="text-2xl font-semibold mb-4">Article Not Found</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            The article you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    )
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
          {getPreviousPost(slug) ? (
            <Link
              href={`/articles/${getPreviousPost(slug)?.slug}`}
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
                <div className="font-medium">{getPreviousPost(slug)?.title}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {getNextPost(slug) ? (
            <Link
              href={`/articles/${getNextPost(slug)?.slug}`}
              className="group flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors text-right"
            >
              <div className="text-right">
                <div className="text-xs text-zinc-500 dark:text-zinc-500">Next</div>
                <div className="font-medium">{getNextPost(slug)?.title}</div>
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