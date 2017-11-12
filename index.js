const path = require('path')

const app = require('./server/app.js')
const db = require('./server/config/db')

const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/neseguro'
const PORT = process.env.PORT || 3000

console.log(`Connecting to ${DB_URI}...`)

db.openUri(DB_URI)
app.listen(PORT)

console.log(`Listening on port ${PORT}...`)
