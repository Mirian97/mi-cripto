const jwt = require('jsonwebtoken')
const knex = require('../configs/connection')
const { internalServerError, unauthorizedUser } = require('../utils/requestMessages')

const validateLogin = async (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return res.status(401).json({ mensagem: unauthorizedUser })
  }
  try {
    const token = authorization.split(' ')[1]
    const { id } = jwt.verify(token, process.env.JWT_PASSWORD)
    const loggedInUser = await knex('users').where({ id }).first()
    if (!loggedInUser) {
      return res.status(401).json({ mensagem: unauthorizedUser })
    }
    const { password: _, ...userData } = loggedInUser
    req.loggedInUser = userData
    next()
  } catch (error) {
    return res.status(500).json({ message: internalServerError })
  }
}

module.exports = validateLogin
