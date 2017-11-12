/* En éste caso requiero los dos modelos porque se tienen que relacionar por id de usuario, a partir del qual con
el numero de poliza se puede saber el nombre del usuario */

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
