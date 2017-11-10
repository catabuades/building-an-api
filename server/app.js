const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

// require('dotenv').load()

const routesAuth = require('./routes/auth')
const checkToken = require('./middlewares/checkToken')
const checkHeaderToken = require('.middlewares/checkHeaderToken')

const app = express()

const routesApi = require('./routes/api/')

app.use(express.static(path.join(__dirname, '../client')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/', routesApi)
app.use(routesAuth)
app.use(checkToken, routesApi)
app.use(checkHeaderToken, routesApi)

module.exports = app
