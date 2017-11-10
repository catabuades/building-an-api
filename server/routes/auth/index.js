const express = require('express')
const router = express.Router()

const getToken = require('./handlers/getToken.js')

router.get('/auth/token', getToken)

module.exports = router