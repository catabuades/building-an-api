const Client = require('../../../models/Client')

function getDataByName (req, res) {
  const { name } = req.params
  Client.find({ name })
    .then(client => res.json(client))
}

module.exports = getDataByName
