const mongoose = require('mongoose')
const Schema = mongoose.Schema

const collection = 'clients'

var ClientSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default: true
  },
  role: {
    type: String,
    required: true
  }
}, { collection })

module.exports = mongoose.model('Client', ClientSchema)
