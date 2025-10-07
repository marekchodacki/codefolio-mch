import { z } from 'zod'

const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿĀ-žŻŹĆŁŚŃąęółśźćń’'\- ]+$/u;

export const clientZodSchema = z.object({
  firstName: z
    .string()
    .trim()
    .regex(nameRegex, 'Imię zawiera niedozwolone znaki')
    .min(2, 'Imię musi mieć min. 2 znaki')
    .max(50, 'Imię może mieć maks. 50 znaków')
    .optional()
    .or(z.literal('')),
  lastName: z
    .string()
    .trim()
    .regex(nameRegex, 'Nazwisko zawiera niedozwolone znaki')
    .min(2, 'Nazwisko musi mieć min. 2 znaki')
    .max(50, 'Nazwisko może mieć maks. 50 znaków')
    .optional()
    .or(z.literal('')),
  email: z
    .string()
    .trim()
    .min(1, 'Email jest wymagany')
    .email('Nieprawidłowy adres email')
    .max(254, 'Email jest zbyt długi'),
  message: z
    .string()
    .trim()
    .min(1, 'Wiadomość jest wymagana')
    .min(10, 'Wiadomość musi mieć min. 10 znaków')
    .max(1000, 'Wiadomość może mieć maks. 1000 znaków'),
})
