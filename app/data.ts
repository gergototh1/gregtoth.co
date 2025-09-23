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

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Hello World - My First Blog Post',
    description: 'Welcome to my new blog! This is my first post using MDX.',
    link: '/articles/hello',
    uid: 'hello',
  },
  {
    title: 'From Business Guy to Solo Developer',
    description: 'My journey transitioning from business roles to full-stack development using AI and modern tools.',
    link: '/articles/from-business-to-dev',
    uid: 'from-business-to-dev',
  },
  {
    title: 'The Power of Vibe Coding',
    description: 'How AI-assisted development changed my approach to building products and why intuition matters more than perfection.',
    link: '/articles/vibe-coding',
    uid: 'vibe-coding',
  },
]

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