const express = require('express')
const validateBody = require('./middlewares/validateBody')
const validateLogin = require('./middlewares/validateLogin')
const { registerUser, detailUser } = require('./controllers/user')
const login = require('./controllers/login')
const registerUserSchema = require('./schemas/registerUserSchema')
const loginSchema = require('./schemas/loginSchema')
const routes = express()

routes.post('/login', validateBody(loginSchema), login)
routes.post('/user', validateBody(registerUserSchema), registerUser)
routes.use(validateLogin)
routes.get('/user', detailUser)

module.exports = routes
