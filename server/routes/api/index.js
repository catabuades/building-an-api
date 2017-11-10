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

// Rutas de autenticación
// router.post('/auth/admin', auth.admin)

// Ruta solo accesible si estás autenticado
// router.get('/admin',middleware.ensureAuthenticated, function(req, res) {...} );

module.exports = router
