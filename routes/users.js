const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');


/* GET users listing. */

router.post('/serchById', async (req, res, next) => {
  const {id} = req.body;
  console.log(id);
  try {
    await fetch(`http://www.mocky.io/v2/5808862710000087232b75ac`)
      .then(res => res.json())
      .then(data => {
        console.log(data.clients[0]);
        let clientToSend = {};
        data.clients.forEach((client) => {
          if(id === client.id ){
            clientToSend = client;
            req.currentUser = client;
          }
        });
        if(clientToSend.role === 'admin'){
          res.render('admins', {clientToSend} );
        }else if(clientToSend.role === 'user'){
          res.render('users', {clientToSend} );
        }else{
          res.render('index');
        }
      });
  } catch (error) {
    next(error);
  }
});

router.post('/poliByName', async (req, res, next) => {
  const {name} = req.body;
  try {
    const clients = await fetch(`http://www.mocky.io/v2/5808862710000087232b75ac`)
      .then(res => res.json())
      .then(data => {
        console.log(data.clients)
        return data.clients;});
    const poli  = await fetch(`http://www.mocky.io/v2/580891a4100000e8242b75c5`)
      .then(res => res.json())
      .then(data => {
        return data.policies;
      });
    let poliToSend = {};
    clients.forEach(c => {
      if(name === c.name){
        poli.forEach(p => {
          if(c.id === p.clientId){
            console.log('ha entrado')
            poliToSend = p;
          }
        }
        );
      }
    }
    );
    console.log(poliToSend,'hecho');
    if(poliToSend.clientId){
      console.log(poliToSend,'pepe');
      res.render('poliza', poliToSend );
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
        console.log(data.clients)
        return data.clients;});
    const poli  = await fetch(`http://www.mocky.io/v2/580891a4100000e8242b75c5`)
      .then(res => res.json())
      .then(data => {
        return data.policies;
      });
    let clientToSend = {};
    poli.forEach(p => {
      if(number === p.id){
        clients.forEach(c => {
          if(c.id === p.clientId){
            console.log('ha entrado')
            clientToSend = c;
          }
        }
        );
      }
    }
    );
    console.log(clientToSend,'hecho');
    if(clientToSend.clientId){
      console.log(clientToSend,'pepe');
      res.render('poliza', clientToSend );
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
