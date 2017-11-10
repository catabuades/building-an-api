const Client = require('../../../models/Client')
const jwt = require('jsonwebtoken')
const { SECRET } = process.env
const admin = req.params

function getToken(admin) {
	const payload = {
		sub: {role:admin}
	}
	return jwt.encode(payload, config.SECRET)
}

module.exports = getToken

// function getToken(req, res) {
//   console.log(SECRET);
//   const { role } = req.params
//   const token = jwt.sign({ role }, SECRET);
//   res.json({token})
// }