const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

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
  },
  policies: [{
    type: ObjectId,
    ref: 'Policy'
  }]
}, { collection })

module.exports = mongoose.model('Client', ClientSchema)
