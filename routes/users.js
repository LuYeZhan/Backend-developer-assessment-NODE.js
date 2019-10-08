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
            res.render('auth-wrong-id');
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
            res.render('wrong-name');
          }
        });
      });
  } catch (error) {
    next(error);
  }
});

router.post('/polibyname', async (req, res, next) => {
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
        }
        );
      }
    }
    );
    if(searchedPolicy.clientId){
      res.render('policy', searchedPolicy );
    }else{
      res.render('not-found' );
    }
  } catch (error) {
    next(error);
  }
});

router.post('/usersbypolinumber', async (req, res, next) => {
  const {number} = req.body;
  try {
    const clients = await fetch(`http://www.mocky.io/v2/5808862710000087232b75ac`)
      .then(res => res.json())
      .then(data => {
        return data.clients;
      });
    const policies  = await fetch(`http://www.mocky.io/v2/580891a4100000e8242b75c5`)
      .then(res => res.json())
      .then(data => {
        return data.policies;
      });
    let clientToSend = {};
    policies.forEach(policy => {
      if(number === policy.id){
        clients.forEach(client => {
          if(client.id === policy.clientId){
            console.log('dentro');
            clientToSend = client.id;
            res.render('user-search', clientToSend );
          }
        });
      }
    });
    if(clientToSend.clientId){
      console.log(clientToSend.clientId,'4');
      res.render('user-search', clientToSend );
    }else{
      res.render('not-found' );
    }
  } catch (error) {
    next(error);
  }
});

router.get('/byusername', async (req, res, next) => {
  try {
    await fetch(`http://www.mocky.io/v2/5808862710000087232b75ac`)
      .then(res => res.json())
      .then(clients => {
        res.render('users', clients );
      });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
