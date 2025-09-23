type Project = {
  name: string
  description: string
  link: string
  video?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Crypto Video Report',
    description: 'AI-powered cryptocurrency market analysis and video reporting platform.',
    link: 'https://cryptovideoreport.com',
    id: 'project1',
  },
  {
    name: 'Inbox2Invoice',
    description: 'Automated invoice extraction and processing from email attachments using AI.',
    link: 'https://inbox2invoice.com',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Solo Development',
    title: 'Indie Hacker & Developer',
    start: '2023',
    end: 'Present',
    link: 'https://gregtoth.me',
    id: 'work1',
  },
  {
    company: 'Various Startups',
    title: 'Business Development & Marketing',
    start: '2014',
    end: '2023',
    link: 'https://gregtoth.me',
    id: 'work2',
  },
]

import { getAllPosts } from '@/lib/mdx'

export function getBlogPosts(): BlogPost[] {
  const posts = getAllPosts()
  return posts.map(post => ({
    title: post.title,
    description: post.excerpt,
    link: `/articles/${post.slug}`,
    uid: post.slug,
  }))
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/gregtoth',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/gregtoth',
  },
  {
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/gregtoth',
  },
]

export const EMAIL = 'greg@gregtoth.me'