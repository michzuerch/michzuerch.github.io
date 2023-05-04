import type { MarkdownInstance } from 'astro'
import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'blog'>['data']

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'Privater Automarkt Radolfzell',
  description:
    'Homepage Privater Automarkt in Radolfzell, corporate/marketing/blog.',
  author: {
    name: 'Michael Zuercher',
    twitter: '@michzuerch',
    url: 'https://michzuerch.github.io',
    email: 'michzuerch@gmail.com',
    summary: 'Webdesign.',
  },
  org: {
    name: 'Privater Automarkt',
    twitter: '@billigcar',
    url: 'https://www.billig-car.de',
    email: 'info@billig-car.de',
    summary: 'Autohandel',
  },
  location: 'Herrenlandstrasse 39, Radolfzell',
  latlng: [47.74297128003603, 8.954879380531835] as [number, number],
  repository: 'https://github.com/michzuerch/PrivaterAutomarkt9',
  social: [
    {
      name: 'Email',
      link: 'mailto:info@billig-car.de',
      icon: 'envelope',
    },
    {
      name: 'Telefon',
      link: '+49 - (0)7732-942407',
      icon: 'telephone',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/hellothamcom',
      icon: 'linkedin',
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/hellothamcom',
      icon: 'facebook',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/hellothamcom',
      icon: 'instagram',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/hellothamcom',
      icon: 'twitter',
    },
    {
      name: 'Github',
      link: 'https://github.com/michzuerch/PrivaterAutomarkt9',
      icon: 'github',
    },
  ],
  buildTime: new Date(),
}

export const Logo = '../images/svg/astro/logo.svg'
export const LogoImage = '../images/astro/logo.png'
export const HeroImage = '../images/fotos/Hero.jpg'
export const FeaturedSVG = '../images/svg/undraw/undraw_design_inspiration.svg'
export const DefaultSVG = '../images/svg/undraw/undraw_my_feed.svg'
export const DefaultImage = '../images/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'Ueber uns', href: 'about' },
  { name: 'Kontact', href: 'contact' },
  { name: 'Blog', href: 'blog' },
  // { name: 'Docs', href: 'doc/introduction' },
]

export const CategoryDetail = [
  {
    category: 'instructions',
    coverSVG: '../images/svg/undraw/undraw_instruction_manual.svg',
    socialImage: '../images/undraw/undraw_instruction_manual.png',
    description: 'Guidelines on using this starter.',
  },
  {
    category: 'information',
    coverSVG: '../images/svg/undraw/undraw_instant_information.svg',
    socialImage: '../images/undraw/undraw_instant_information.png',
    description: 'Information articles.',
  },
]

export function categoryDetail(category: string | undefined) {
  const details = CategoryDetail.filter(cat => cat.category == category)

  if (details.length == 1) {
    return details[0]
  }
  return {
    category: 'General',
    coverSVG: '../images/svg/undraw/undraw_instant_information.svg',
    socialImage: '../images/undraw/undraw_instant_information.png',
    description: 'Category ' + category,
  }
}
export const AuthorDetail = [
  {
    name: 'Michael Zuercher',
    description: 'Webmaster',
    contact: 'michzuerch@gmail.com',
    image: '../images/authors/Michael Zuercher.jpg',
  },
]

export const DefaultAuthor = {
  name: 'Michael Zuercher',
  image: '../images/authors/default.png',
  contact: 'michzuerch@gmail.com',
  description: 'Webmaster',
}

export function authorDetail(author: string | undefined) {
  const details = AuthorDetail.filter(person => person.name == author)

  if (details.length == 1) {
    return details[0]
  }
  return DefaultAuthor
}

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/michzuerch/PrivaterAutomarkt9`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  'Section Header': [
    { text: 'Introduction', link: 'doc/introduction' },
    { text: 'Page 2', link: 'doc/page-2' },
    { text: 'Page 3', link: 'doc/page-3' },
  ],
  'Another Section': [{ text: 'Page 4', link: 'doc/page-4' }],
}
