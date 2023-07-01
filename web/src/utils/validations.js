import { fieldRequired, invalidEmail, passwordDoesntMatch, passwordMinLength } from './messages'

export const validateFieldRequired = (value) => !!value || fieldRequired
export const validateEmail = (value) => /.+@.+\..+/.test(value) || invalidEmail
export const validatePasswordMinLength = (value) => value.length >= 5 || passwordMinLength
export const validateMatchingPasswords = (value, currentPassword) =>
  value === currentPassword || passwordDoesntMatch
