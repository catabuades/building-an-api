function checkToken(req, res, next) {
  const { SERVER_TOKEN } = process.env
  const { token } = req.query

  if (token === SERVER_TOKEN) next()
  else res.status(500).send('Unauthorized!')
}

module.exports = checkToken

