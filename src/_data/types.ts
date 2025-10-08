/**
 * Shared types
 */

type RouteKey = 'home' | 'webapps' | 'websites' | 'seo' | 'contact'

interface Seo {
  title: string
}

/**
 * Layout
 */

export interface LayoutProps {
  routeKey: RouteKey
  title: string
}

/**
 * Home page
 */

interface CallButton {
  url: string
  image: string
  alt: string
  text: string
}

interface MailButton {
  url: string
  image: string
  alt: string
  text: string
}

export interface HomePageData {
  routeKey: RouteKey
  seo?: Seo
  h1: string
  p1: string
  p2: string
  p3: string
  p4: string
  callButton: CallButton
  mailButton: MailButton
  projects: Project[]
}

/**
 * Project pages
 */

interface Project {
  title: string
  url?: string
  rel?: string
  image?: string
  alt?: string
  anchor?: string
  description?: string[]
  label: string
  techs: string[]
}

export interface ProjectPageData {
  routeKey: RouteKey
  seo?: Seo
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

interface ContactFormField {
  type: string
  name: string
  id: string
  placeholder: string
  autocomplete?: string
  rows?: number
  required?: boolean
  isHalf?: boolean
}

interface ContactFormSubmit {
  btnText: string
  btnLoadingText: string
  messageSuccess: string
  messageError: string
}

export interface ContactPageData {
  routeKey: RouteKey
  seo?: Seo
  intro: ContactIntro
  fields: ContactFormField[]
  submit: ContactFormSubmit
}

/**
 * Validation
 */

export type ValidationMessages = {
  firstName: {
    invalidChars: string
    min: string
    max: string
  }
  lastName: {
    invalidChars: string
    min: string
    max: string
  }
  email: {
    required: string
    invalid: string
    max: string
  }
  message: {
    required: string
    min: string
    max: string
  }
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
