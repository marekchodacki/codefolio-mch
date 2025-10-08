import type { Navigation } from '../../types'

export const data: Navigation = {
  niv: {
    url: '/',
    image: '/assets/pics/marek.jpg',
    alt: 'Marek Chodacki',
    name: 'Marek Chodacki',
    vocation: 'Fullstack Developer',
  },
  nav: [
    {
      url: '/',
      slug: 'home',
      icon: '/assets/icons/nav_home.svg',
      alt: 'Home',
      name: 'Home',
    },
    {
      url: '/webapps',
      slug: 'webapps',
      icon: '/assets/icons/nav_webapps.svg',
      alt: 'Web Applications',
      name: 'Web Applications',
    },
    {
      url: '/websites-stores',
      slug: 'websites',
      icon: '/assets/icons/nav_websites.svg',
      alt: 'Designing websites and stores',
      name: 'Webs &amp;&nbsp;E-Commerce',
    },
    {
      url: '/seo-positioning',
      slug: 'seo',
      icon: '/assets/icons/nav_seo.svg',
      alt: 'SEO optimalization and positioning',
      name: 'SEO &amp;&nbsp;Positioning',
    },
    {
      url: '/contact',
      slug: 'contact',
      icon: '/assets/icons/nav_contact.svg',
      alt: 'Contact',
      name: 'Contact',
    },
  ],
}
