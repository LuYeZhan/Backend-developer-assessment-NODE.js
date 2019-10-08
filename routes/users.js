const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.post('/', async (req, res, next) => {
  const {id} = req.body;
  try {
    await fetch(`http://www.mocky.io/v2/5808862710000087232b75ac`)
      .then(res => res.json())
      .then(data => {
        let authClient = {};
        data.clients.forEach((client) => {
          if(id === client.id ){
            authClient = client;
          }
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

router.post('/searchbyid', async (req, res, next) => {
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

router.post('/searchbyname', async (req, res, next) => {
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
