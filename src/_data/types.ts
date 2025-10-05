/**
 * Shared types
 */

interface Seo {
  title: string
}

/**
 * Project pages
 */

interface Project {
  title: string
  url?: string
  rel?: string
  anchor?: string
  description: string[]
  label: string
  techs: string[]
}

export interface ProjectPageData {
  seo?: Seo
  selectedItem: string
  h1: string
  projects: Project[]
}

/**
 * Contact page
 */

interface ContactIntro {
  h1: string
  h2?: string
  p?: string
  chip: string
}

export interface ContactPageData {
  seo?: Seo
  selectedItem: string
  intro: ContactIntro
}

/**
 * Globals
 */

interface Niv {
  url: string
  image: string
  alt: string
  name: string
  vocation: string
}

interface Nav {
  url: string
  slug: string
  icon: string
  alt: string
  name: string
}

export interface Navigation {
  niv: Niv
  nav: Nav[]
}