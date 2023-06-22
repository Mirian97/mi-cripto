const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const { routes } = require('./routes')
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT, () => console.log(`Server is running in PORT ${PORT}`))
