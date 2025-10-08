import type { Navigation } from '../../types'

export const data: Navigation = {
  niv: {
    url: '/',
    image: '/assets/pics/marek.jpg',
    alt: 'Marek Chodacki',
    name: 'Marek Chodacki',
    vocation: 'Programista Fullstack',
  },
  nav: [
    {
      url: '/',
      slug: 'home',
      icon: '/assets/icons/nav_home.svg',
      alt: 'Strona główna',
      name: 'Strona Główna',
    },
    {
      url: '/aplikacje-webowe',
      slug: 'webapps',
      icon: '/assets/icons/nav_webapps.svg',
      alt: 'Tworzenie aplikacji webowych',
      name: 'Aplikacje Webowe',
    },
    {
      url: '/strony-sklepy',
      slug: 'websites',
      icon: '/assets/icons/nav_websites.svg',
      alt: 'Projektowanie stron i sklepów internetowych',
      name: 'Strony i&nbsp;Sklepy',
    },
    {
      url: '/seo-pozycjonowanie',
      slug: 'seo',
      icon: '/assets/icons/nav_seo.svg',
      alt: 'Optymalizacja SEO i Pozycjonowanie stron internetowych',
      name: 'SEO i&nbsp;Pozycjonowanie',
    },
    {
      url: '/kontakt',
      slug: 'contact',
      icon: '/assets/icons/nav_contact.svg',
      alt: 'Kontakt',
      name: 'Kontakt',
    },
  ],
}
