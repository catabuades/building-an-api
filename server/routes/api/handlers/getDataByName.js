const express = require('express')
const router = express.Router()

const getDataByID = require('./handlers/getByID')
const getDataByName = require('./handlers/getAllBikes')
const getPolicyByName = require('./handlers/getPolicyByName')
const getNameByPolicy = require('./handlers/getNameByPolicy')

router.get('/clients', getDataByID)
router.get('/clients', getDataByName)
router.get('/admin', getPolicyByName)
router.get('/admin', getNameByPolicy)

module.exports = router
