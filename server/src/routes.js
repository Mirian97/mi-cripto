const express = require('express')
const routes = express()

routes.get('/', (req, res) => {
  return res.send('Hello world')
})

module.exports = routes
