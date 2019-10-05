'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  id: { 
    type: String, unique: true, 
  }, 
  name: { 
    type: String, 
  }, 
  email : { 
    type: String, 
  }, 
  role: { 
    type: String 
  }});

const User = mongoose.model('User', userSchema);

module.exports = User;