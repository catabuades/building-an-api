const jwt = require('jsonwebtoken')
const { SECRET } = process.env

function checkHeaderToken(req, res, next) {
  const { token } = req.headers
  jwt.verify(token, SECRET, function(err, decoded) {
    if (err) res.status(500).send('Unauthorized!')
    else next()
  });
}

module.exports = checkHeaderToken

