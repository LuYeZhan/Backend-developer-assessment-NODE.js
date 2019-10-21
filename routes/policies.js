const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const APIhelper = require('../helpers/APIhelper');
const { verifyToken, isAdmin } = require('../middlewares/authMiddlewares');
const { validationPolicyId } = require('../middlewares/validationMiddlewares');

router.post('/byname',verifyToken, isAdmin,  async (req, res) => {
  const {name} = req.body;
  try {
    const clients = APIhelper.getUsers();
    const policies  = APIhelper.getPolicies();
    let searchedPolicy = {};
    clients.forEach(client => {
      if(name === client.name){
        policies.forEach(policy => {
          if(client.id === policy.clientId){
            searchedPolicy = policy;
          }
        });
      }
    });
    if(searchedPolicy.clientId){
      res.render('policy', searchedPolicy );
    }else{
      res.render('not-found' );
    }
  } catch (error) {
    next(error);
  }
});

router.post('/bynumber',verifyToken, validationPolicyId, isAdmin, async (req, res) => {
  const {number} = req.body;
  try {
    const policies  = APIhelper.getPolicies();
    const clients = APIhelper.getUsers();
    let searchedClient = null;
    policies.forEach(policy => {
      if(number === policy.id){
        clients.forEach(client => {
          if(policy.clientId === client.id){
            searchedClient = client;
          }
        });
      }
    });
    if(searchedClient){ 
      res.render('userbypolicenumber', searchedClient );
    }else{
      res.render('not-found' );
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;