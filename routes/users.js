const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const APIhelper = require('../helpers/APIhelper');
const jwt = require('jsonwebtoken');
const { isNotLoggedIn, verifyToken, isAdmin } = require('../middlewares/authMiddlewares');
const { validationLogin, validationId, validationName, validationPolicyId } = require('../middlewares/validationMiddlewares');

router.post('/', isNotLoggedIn, validationLogin, async (req, res) => {
  const {id} = req.body;
  try {
    const data = await APIhelper.getUsers();
    let authClient = {};
    data.forEach((client) => {
      if(id === client.id ){
        authClient = client;
        if (client.length !== 0) {
          const token = jwt.sign({ authClient: authClient[0] }, process.env.JWT_MY_SECRET, { expiresIn: '24h' });
          res.cookie('auth', token);
          res.status(200).send({
            success: true,
            message: 'Authentication successful!',
            token: token
          });
        } else {
          res.status(400).send({
            success: false,
            message: 'Authentication failed! This id is not in the database'
          });
        }
      };         
    });
  } catch (error) {
    console.log(error);
  }
});

router.post('/byid', verifyToken, validationId,  async (req, res) => {
  const {id} = req.body;
  try {
    const data = APIhelper.getUsers();
    let searchedClient = {};
    data.forEach((client) => {
      if(id === client.id ){
        searchedClient = client;
        res.render('user-search',searchedClient);
      }
    });
  } catch(error) {
    console.log(error);
  }
});

router.post('/byname', verifyToken, validationId, async (req, res) => {
  const {name} = req.body;
  try {
    const data = APIhelper.getUsers();
    let searchedClient = {};
    data.forEach((client) => {
      if(name === client.name ){
        searchedClient = client;
        res.render('user-search',searchedClient);
      } 
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
