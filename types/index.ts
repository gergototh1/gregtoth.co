export interface Article {
  id: string;
  title: string;
  description: string;
  cover_image: string;
  url: string;
  page_views_count: number;
  public_reactions_count: number;
  comments_count: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  content: string;
}

export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export interface ProjectPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  status: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
  content: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  watchers: number;
  forks: number;
  stargazers_count: number;
  html_url: string;
  homepage: string;
}

export interface User {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
}
