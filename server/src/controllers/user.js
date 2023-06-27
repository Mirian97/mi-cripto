const knex = require('../configs/connection')
const bcrypt = require('bcrypt')
const { invalidEmailOrPassword, internalServerError } = require('../utils/requestMessages')
const saltOrRounds = 10

const registerUser = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const emailFound = await knex('users').first().where({ email })
    if (emailFound) {
      return res.status(400).json({ message: invalidEmailOrPassword })
    }
    const encryptedPassword = await bcrypt.hash(password, saltOrRounds)
    await knex('users').insert({ name, email, password: encryptedPassword })
    return res.status(201).send()
  } catch (error) {
    return res.status(500).json({ message: internalServerError })
  }
}

module.exports = {
  registerUser
}
