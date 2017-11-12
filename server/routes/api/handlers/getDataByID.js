/* Requiero el modelo del qual quiero extraer la información, y con el método find genero la búsqueda por id de usuario. */

const Client = require('../../../models/Client')

function getDataById (req, res) {
  const { id } = req.params
  Client.find({ id })
    .then(client => res.json(client))
}

module.exports = getDataById
