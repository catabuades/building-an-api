const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const collection = 'policies'

var PolicySchema = new Schema({
  id: {
    type: String,
    required: true
  },
  amountInsured: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  inceptionDate: {
    type: Date,
    required: true
  },
  installmentPayment: {
    type: Boolean,
    required: true
  },
  clientId: {
    type: String,
    required: true
  },
  clients: [{
    type: ObjectId,
    ref: 'Client'
  }]
}, { collection })

module.exports = mongoose.model('Policy', PolicySchema)
