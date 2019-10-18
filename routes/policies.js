const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const APIhelper = require('../helpers/APIhelper');
const { isNotLoggedIn, verifyToken, isAdmin } = require('../middlewares/authMiddlewares');
const { validationLogin, validationId, validationName, validationPolicyId } = require('../middlewares/validationMiddlewares');


router.post('/byname',verifyToken, isAdmin,  async (req, res) => {
  const {name} = req.body;
  try {
    const clients = await fetch(`http://www.mocky.io/v2/5808862710000087232b75ac`)
      .then(res => res.json())
      .then(data => {
        return data.clients;});
    const policies  = await fetch(`http://www.mocky.io/v2/580891a4100000e8242b75c5`)
      .then(res => res.json())
      .then(data => {
        return data.policies;
      });
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
    const policies  = await fetch(`http://www.mocky.io/v2/580891a4100000e8242b75c5`)
      .then(res => res.json())
      .then(data => {
        return data.policies;
      });
    const clients = await fetch(`http://www.mocky.io/v2/5808862710000087232b75ac`)
      .then(res => res.json())
      .then(data => {
        return data.clients;});
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