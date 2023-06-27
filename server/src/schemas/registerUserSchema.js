const joi = require('joi')
const {
  nameString,
  nameRequired,
  emailString,
  emailRequired,
  invalidEmail,
  passwordString,
  passwordRequired,
  passwordMustHas5Caracteres
} = require('./messages')

const registerUserSchema = joi.object({
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
  })
})

module.exports = registerUserSchema
