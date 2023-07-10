import { validateEmail, validateFieldRequired, validatePasswordMinLength } from './validations'

export const nameRules = [validateFieldRequired]
export const emailRules = [validateFieldRequired, validateEmail]
export const passwordRules = [validateFieldRequired, validatePasswordMinLength]
