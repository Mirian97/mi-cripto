const express = require('express')
const validateBody = require('./middlewares/validateBody')
const validateLogin = require('./middlewares/validateLogin')
const { registerUser, detailUser, updateUser } = require('./controllers/user')
const login = require('./controllers/login')
const multer = require('./middlewares/multer')
const registerUserSchema = require('./schemas/registerUserSchema')
const updateUserSchema = require('./schemas/updateUserSchema')
const loginSchema = require('./schemas/loginSchema')
const routes = express()

routes.post('/login', validateBody(loginSchema), login)
routes.post('/user', validateBody(registerUserSchema), registerUser)
routes.use(validateLogin)
routes.get('/user', detailUser)
routes.put('/user/:idUser', multer.single('avatar'), validateBody(updateUserSchema), updateUser)

module.exports = routes
