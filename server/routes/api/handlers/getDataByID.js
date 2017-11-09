const Client = require('../../../models/Client')

function getDataById (req, res) {
  const { id } = req.params
  Client.find({ id })
    .then(client => res.json(client))
}

module.exports = getDataById
