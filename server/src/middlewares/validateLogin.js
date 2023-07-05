const jwt = require('jsonwebtoken')
const knex = require('../configs/connection')
const { unauthorizedUser, sessionExpired } = require('../utils/requestMessages')

const validateLogin = async (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return res.status(401).json({ message: unauthorizedUser })
  }
  try {
    const token = authorization.split(' ')[1]
    const { id } = jwt.verify(token, process.env.JWT_PASSWORD)
    const loggedInUser = await knex('users').where({ id }).first()
    if (!loggedInUser) {
      return res.status(401).json({ message: unauthorizedUser })
    }
    const { password: _, ...userData } = loggedInUser
    req.loggedInUser = userData
    next()
  } catch (error) {
    return res.status(401).json({ message: sessionExpired })
  }
}

module.exports = validateLogin
