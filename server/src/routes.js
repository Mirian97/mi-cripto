const express = require('express')
const validateBody = require('./middlewares/validateBody')
const registerUserSchema = require('./schemas/registerUserSchema')
const { registerUser } = require('./controllers/user')
const routes = express()

routes.post('/user', validateBody(registerUserSchema), registerUser)

module.exports = routes
