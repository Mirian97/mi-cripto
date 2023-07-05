const knex = require('../configs/connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { invalidEmailOrPassword, internalServerError } = require('../utils/requestMessages')

const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const loggedUser = await knex('users').where({ email }).first()
    if (!loggedUser) {
      return res.status(400).json({ message: invalidEmailOrPassword })
    }
    const validPassword = await bcrypt.compare(password, loggedUser.password)
    if (!validPassword) {
      return res.status(400).json({ message: invalidEmailOrPassword })
    }
    const token = jwt.sign({ id: loggedUser.id }, process.env.JWT_PASSWORD, {
      expiresIn: '2h'
    })
    const { password: _password, avatar: _avatar, ...userData } = loggedUser
    return res.status(200).json({ ...userData, token })
  } catch (error) {
    return res.status(500).json({ message: internalServerError })
  }
}

module.exports = login
