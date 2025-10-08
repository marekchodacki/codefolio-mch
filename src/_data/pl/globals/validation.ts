import type { ValidationMessages } from '../../types'

export const validationMessages: ValidationMessages = {
  firstName: {
    invalidChars: 'Imię zawiera niedozwolone znaki',
    min: 'Imię musi mieć min. 2 znaki',
    max: 'Imię może mieć maks. 50 znaków',
  },
  lastName: {
    invalidChars: 'Nazwisko zawiera niedozwolone znaki',
    min: 'Nazwisko musi mieć min. 2 znaki',
    max: 'Nazwisko może mieć maks. 50 znaków',
  },
  email: {
    required: 'Email jest wymagany',
    invalid: 'Nieprawidłowy adres email',
    max: 'Email jest zbyt długi',
  },
  message: {
    required: 'Wiadomość jest wymagana',
    min: 'Wiadomość musi mieć min. 10 znaków',
    max: 'Wiadomość może mieć maks. 1000 znaków',
  },
}
