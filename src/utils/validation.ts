import { z } from 'zod'
import type { ValidationMessages } from '../_data/types'

const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿĀ-žŻŹĆŁŚŃąęółśźćń’'\- ]+$/u

export function createClientZodSchema(msg: ValidationMessages) {
  return z.object({
    firstName: z
      .string()
      .trim()
      .regex(nameRegex, msg.firstName.invalidChars)
      .min(2, msg.firstName.min)
      .max(50, msg.firstName.max)
      .optional()
      .or(z.literal('')),
    lastName: z
      .string()
      .trim()
      .regex(nameRegex, msg.lastName.invalidChars)
      .min(2, msg.lastName.min)
      .max(50, msg.lastName.max)
      .optional()
      .or(z.literal('')),
    email: z
      .string()
      .trim()
      .min(1, msg.email.required)
      .email(msg.email.invalid)
      .max(254, msg.email.max),
    message: z
      .string()
      .trim()
      .min(1, msg.message.required)
      .min(10, msg.message.min)
      .max(1000, msg.message.max),
  })
}
