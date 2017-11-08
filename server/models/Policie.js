
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const collection = 'policies'

var PolicieSchema = new Schema({
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
  }
}, { collection })

module.exports = mongoose.model('Policie', PolicieSchema)
