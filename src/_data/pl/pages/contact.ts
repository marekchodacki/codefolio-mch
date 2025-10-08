import type { ContactPageData } from '../../types'

export const data: ContactPageData = {
  routeKey: 'contact',
  seo: {
    title: 'Kontakt i współpraca | Marek Chodacki',
  },
  intro: {
    h1: 'Kontakt',
    h2: 'Masz pomysł?',
    p: 'Zaprojektuję dla Ciebie stronę, aplikację lub sklep internetowy.',
    chip: 'Dostępny do współpracy',
  },
  fields: [
    {
      type: 'text',
      name: 'firstName',
      id: 'firstName',
      placeholder: 'Twoje imię',
      autocomplete: 'given-name',
      isHalf: true,
    },
    {
      type: 'text',
      name: 'lastName',
      id: 'lastName',
      placeholder: 'Twoje nazwisko',
      autocomplete: 'family-name',
      isHalf: true,
    },
    {
      type: 'email',
      name: 'email',
      id: 'email',
      placeholder: '*Twój e-mail',
      autocomplete: 'email',
      required: true,
    },
    {
      type: 'textarea',
      name: 'message',
      id: 'message',
      placeholder: '*Opowiedz o swoim projekcie',
      rows: 5,
      required: true,
    },
  ],
  submit: {
    btnText: 'Wyślij',
    btnLoadingText: 'Wysyłanie...',
    messageSuccess:
      '✓ Formularz został poprawnie wysłany! Dziękuję bardzo za kontakt.',
    messageError: '✗ Wystąpił błąd podczas wysyłania. Spróbuj ponownie.',
  },
}
