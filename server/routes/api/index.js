/* Se requiere el servidor y la routa de los handlers con sus respectivos métodos get ya que se requiere
una información de la base de datos */

const express = require('express')
const router = express.Router()

const getDataByID = require('./handlers/getDataByID')
const getDataByName = require('./handlers/getDataByName')
const getNameByPolicy = require('./handlers/getNameByPolicy')
const getPolicyByName = require('./handlers/getPolicyByName')

router.get('/getClientById/:id', getDataByID)
router.get('/getClientByName/:name', getDataByName)
router.get('/getNameByPolicy/:id', getNameByPolicy)
router.get('/getPolicyByName/:name', getPolicyByName)

module.exports = router
