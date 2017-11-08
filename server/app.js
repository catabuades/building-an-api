const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const routesApi = require('./routes/api/')

app.use(express.static(path.join(__dirname, '../client')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/', routesApi)

module.exports = app
