'use strict';
const ObjectId = require('mongoose').Types.ObjectId;

const isUserAdmin = (req, res, next) => {
  if (clients.role === 'admin') {
    return res.redirect('/');
  }
  next();
};


module.exports = {
  isUserAdmin,
};
