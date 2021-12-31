const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const vaccineRouter = require('./src/modules/vaccines/vaccine.route')

const app = express()
app.use(express.urlencoded({ extend : true }))
app.use(express.json())
app.use(cors())

app.use('/vaccine', vaccineRouter)

app.get('/', (req, res) => {
    res.send('vaccines shop is running ...')
})

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })

const PORT = process.env.PORT || 3030
app.listen(PORT, () => {
    console.log(`server is running on port -> ${PORT}`)
})

module.exports = app