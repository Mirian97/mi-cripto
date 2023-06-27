const knex = require('../configs/connection')
const bcrypt = require('bcrypt')
const { invalidEmailOrPassword, internalServerError } = require('../utils/requestMessages')
const saltOrRounds = 10
const { uploadImage, deleteImage } = require('../services/upload')

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

const detailUser = async (req, res) => {
  return res.status(200).json(req.loggedInUser)
}

const updateUser = async (req, res) => {
  const { id, avatar_path } = req.loggedInUser
  try {
    let image = null
    if (req.file) {
      const { originalname, mimetype, buffer } = req.file
      avatar_path && (await deleteImage(avatar_path))
      image = await uploadImage(`users/${id}/${originalname}`, buffer, mimetype)
    }
    const updatedUser = await knex('users')
      .update({
        ...req.body,
        avatar_path: image ? image.path : null,
        avatar_url: image ? image.url : null
      })
      .where({ id })
      .returning('*')
    return res.status(200).json(updatedUser[0])
  } catch (error) {
    return res.status(500).json({ message: internalServerError })
  }
}

module.exports = {
  registerUser,
  detailUser,
  updateUser
}
