import type { ProjectPageData } from '../../types'

export const data: ProjectPageData = {
  seo: {
    title: 'Tworzenie aplikacji webowych | Marek Chodacki'
  },
  selectedItem: 'aplikacje-webowe',
  h1: 'Aplikacje webowe',
  projects: [
    {
      title: '2025 | Codefolio MCh',
      description: ['Prace w toku'],
      label: 'Technologie i&nbsp;narzędzia',
      techs: ['Astro', 'JavaScript', 'CSS'],
    },
    {
      title: '2024 | iChip WebApp | Demo',
      url: 'https://ichip-webapp.vercel.app/',
      rel: 'noopener noreferrer',
      anchor: 'Zobacz demo',
      description: [
        'Projekt i wdrożenie prototypu aplikacji webowej dla serwisu urządzeń mobilnych',
        'Zaawansowany formularz z walidacją do składania zleceń napraw online',
        'Dynamiczny cennik z wyszukiwarką modeli urządzeń',
        'Interaktywna mapa lokalizacji serwisu ułatwiająca klientom dotarcie do firmy',
        'Responsywny interfejs użytkownika zbudowany z myślą o UX i szybkości działania',
        'Integracja z EmailJS do obsługi formularza zgłoszeniowego bez potrzeby backendu',
      ],
      label: 'Technologie i&nbsp;narzędzia',
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
  ]
}
