import {
  descriptionMaxLength,
  fieldRequired,
  imageMaxSize1MB,
  invalidEmail,
  invalidImageExtension,
  passwordDoesntMatch,
  passwordMinLength
} from './messages'

export const validateFieldRequired = (value) => !!value || fieldRequired
export const validateEmail = (value) => /.+@.+\..+/.test(value) || invalidEmail
export const validatePasswordMinLength = (value) => value.length >= 5 || passwordMinLength
export const validateMatchingPasswords = (value, currentPassword) =>
  value === currentPassword || passwordDoesntMatch
export const validateDescriptionMaxLength = (value) => value.length < 501 || descriptionMaxLength
export const validateImageSize = (value) => value.size < 1024 * 1024 || imageMaxSize1MB
export const validateImageExtension = (value) => {
  const validExtensions = ['jpg', 'jpeg', 'png']
  const extension = value.name.split('.').pop()
  return validExtensions.includes(extension) || invalidImageExtension
}
