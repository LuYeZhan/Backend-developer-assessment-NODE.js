'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const policiesSchema = new Schema({
  id: {
    type: String
  },
  amountInsured: {
    type: Number
  },
  email: {
    type: String
  },
  inceptionDate: {
    type: String
  },
  installmentPayment: {
    type: Boolean
  },
  clientId: {
    type: String
  }});

const User = mongoose.model('Policies', policiesSchema);

module.exports = Policies;