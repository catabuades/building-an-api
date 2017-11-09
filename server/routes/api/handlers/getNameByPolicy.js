const Policy = require('../../../models/Policy')
const Client = require('../../../models/Client')

function getNameByPolicy (req, res) {
  const { id } = req.params
  Policy.find({ id })
    .then(policy => {
    	const { clientId } = policy[0]
    	Client.find({ id: clientId })
    		.then(client => {
    			res.json(client)
    		})
    })
}

module.exports = getNameByPolicy
