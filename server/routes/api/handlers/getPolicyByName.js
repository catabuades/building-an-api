const Policy = require('../../../models/Policy')
const Client = require('../../../models/Client')

function getPolicyByName (req, res) {
  const { name } = req.params
  Client.find({ name })
        .then(client => {
        	const { id } = client[0]
        	Policy.find({ clientId: id })
        		.then(policy => {
        			res.json(policy)
        		})
        })
}

module.exports = getPolicyByName
