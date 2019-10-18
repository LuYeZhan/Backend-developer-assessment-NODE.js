const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const APIhelper = require('../helpers/APIhelper');
const jwt = require('jsonwebtoken');
const { isNotLoggedIn, verifyToken, isAdmin } = require('../middlewares/authMiddlewares');
const { validationLogin, validationId, validationName, validationPolicyId } = require('../middlewares/validationMiddlewares');

router.post('/', isNotLoggedIn, validationLogin, async (req, res, next) => {
  const {id} = req.body;
  try {
    await fetch(`http://www.mocky.io/v2/5808862710000087232b75ac`)
      .then(res => res.json())
      .then(data => {
        let authClient = {};
        data.clients.forEach((client) => {
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

          // Logout
          router.post('/logout', verifyToken, (req, res) => {
            res.clearCookie('auth');
            res.status(200).send({
              success: true,
              message: 'User logged out'
            });
          });
                    
        });
        if(authClient.role === 'admin'){
          res.render('admins', {authClient} );
        }else if(authClient.role === 'user'){
          res.render('users', {authClient} );
        }else{
          res.render('wrong-id');
        }
      });
  } catch (error) {
    next(error);
  }
});

router.post('/byid', verifyToken, validationId,  async (req, res) => {
  const {id} = req.body;
  try {
    await fetch(`http://www.mocky.io/v2/5808862710000087232b75ac`)
      .then(res => res.json())
      .then(data => {
        let searchedClient = {};
        data.clients.forEach((client) => {
          if(id === client.id ){
            searchedClient = client;
            res.render('user-search',searchedClient);
          } else {
            console.log('wrong-id');
          }
        });
      });
  } catch (error) {
    next(error);
  }
});

router.post('/byname', verifyToken, validationId, async (req, res, next) => {
  const {name} = req.body;
  try {
    await fetch(`http://www.mocky.io/v2/5808862710000087232b75ac`)
      .then(res => res.json())
      .then(data => {
        let searchedClient = {};
        data.clients.forEach((client) => {
          if(name === client.name ){
            searchedClient = client;
            res.render('user-search',searchedClient);
          } else {
            console.log('wrong-name');
          }
        });
      });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
