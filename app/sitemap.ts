import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gregtoth.me'

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/projects',
    '/articles',
    '/contact',
  ]

  // Article pages
  const articleSlugs = ['hello', 'from-business-to-dev', 'vibe-coding']
  const articlePages = articleSlugs.map(slug => `/articles/${slug}`)

  const allPages = [...staticPages, ...articlePages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : page.startsWith('/articles') ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : page.startsWith('/articles') ? 0.8 : 0.7,
  }))
}