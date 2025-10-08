import type { ProjectPageData } from '../../types'

export const data: ProjectPageData = {
  routeKey: 'webapps',
  seo: {
    title: 'Web Applications Design | Marek Chodacki',
  },
  h1: 'Web Applications',
  projects: [
    {
      title: '2025 | Codefolio MCh',
      description: ['In progress'],
      label: 'Technologies &amp;&nbsp;tools',
      techs: ['Astro', 'JavaScript', 'CSS'],
    },
    {
      title: '2024 | iChip WebApp | Demo',
      url: 'https://ichip-webapp.vercel.app/',
      rel: 'noopener noreferrer',
      anchor: 'Check demo',
      description: [
        'Design and deployment of a prototype web application for a mobile device repair service',
        'Advanced, validated form for submitting online repair requests',
        'Dynamic pricing with a searchable device model catalog',
        'Interactive service location map to streamline customer navigation',
        'Responsive, high-performance UI built with a strong UX focus',
        'EmailJS integration for handling submission workflows without a backend',
      ],
      label: 'Technologies &amp;&nbsp;tools',
      techs: [
        'Vue 3',
        'TypeScript',
        'Vite',
        'Vue Router',
        'Tailwind',
        'Vee-Validate',
        'Zod',
        'EmailJS',
        'Vercel',
      ],
    },
  ],
}
