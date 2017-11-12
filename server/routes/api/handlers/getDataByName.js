/* Requiero el modelo del qual quiero extraer la información, y mediante el método find se hace la búsqueda por nombre de usuarios */

const Client = require('../../../models/Client')

function getDataByName (req, res) {
  const { name } = req.params
  Client.find({ name })
    .then(client => res.json(client))
}

module.exports = getDataByName
