const joi = require('joi')
const {
  nameString,
  nameRequired,
  emailString,
  emailRequired,
  invalidEmail,
  passwordString,
  passwordRequired,
  passwordMustHas5Caracteres,
  descriptionString,
  descriptionMustHasMax500Characterss
} = require('./messages')

const updateUserSchema = joi.object({
  name: joi.string().required().trim().messages({
    'string.base': nameString,
    'string.empty': nameRequired,
    'any.required': nameRequired
  }),
  email: joi.string().email().required().trim().messages({
    'string.base': emailString,
    'string.empty': emailRequired,
    'any.required': emailRequired,
    'string.email': invalidEmail
  }),
  password: joi.string().min(5).required().trim().messages({
    'string.base': passwordString,
    'string.empty': passwordRequired,
    'any.required': passwordRequired,
    'string.min': passwordMustHas5Caracteres
  }),
  description: joi.string().max(500).trim().messages({
    'string.base': descriptionString,
    'string.empty': descriptionString,
    'string.max': descriptionMustHasMax500Characterss
  })
})

module.exports = updateUserSchema
