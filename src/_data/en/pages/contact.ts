import type { ContactPageData } from '../../types'

export const data: ContactPageData = {
  routeKey: 'contact',
  seo: {
    title: 'Contact and Collaboration | Marek Chodacki',
  },
  intro: {
    h1: 'Contact',
    h2: 'Got an idea?',
    p: 'I’ll design a website, web app, or online store tailored to your goals.',
    chip: 'Available for collaboration',
  },
  fields: [
    {
      type: 'text',
      name: 'firstName',
      id: 'firstName',
      placeholder: 'Your first name',
      autocomplete: 'given-name',
      isHalf: true,
    },
    {
      type: 'text',
      name: 'lastName',
      id: 'lastName',
      placeholder: 'Your last name',
      autocomplete: 'family-name',
      isHalf: true,
    },
    {
      type: 'email',
      name: 'email',
      id: 'email',
      placeholder: '*Your email',
      autocomplete: 'email',
      required: true,
    },
    {
      type: 'textarea',
      name: 'message',
      id: 'message',
      placeholder: '*Tell me about your project',
      rows: 5,
      required: true,
    },
  ],
  submit: {
    btnText: 'Send',
    btnLoadingText: 'Sending…',
    messageSuccess:
      '✓ Your message has been sent successfully. Thank you for reaching out!',
    messageError: '✗ An error occurred while sending. Please try again.',
  },
}
