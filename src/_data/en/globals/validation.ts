import type { ValidationMessages } from '../../types'

export const validationMessages: ValidationMessages = {
  firstName: {
    invalidChars: 'First name contains invalid characters',
    min: 'First name must be at least 2 characters',
    max: 'First name can be up to 50 characters',
  },
  lastName: {
    invalidChars: 'Last name contains invalid characters',
    min: 'Last name must be at least 2 characters',
    max: 'Last name can be up to 50 characters',
  },
  email: {
    required: 'Email is required',
    invalid: 'Invalid email address',
    max: 'Email is too long',
  },
  message: {
    required: 'Message is required',
    min: 'Message must be at least 10 characters',
    max: 'Message can be up to 1000 characters',
  },
}
