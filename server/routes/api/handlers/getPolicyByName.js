/* En éste caso requiero los dos modelos porque se tienen que relacionar por id de usuario, a partir del qual con
el nombre del contratador de la  poliza se puede saber el numero de poliza o polizas */

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
