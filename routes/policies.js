const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.post('/byname', async (req, res, next) => {
  const {name} = req.body;
  try {
    const clients = await fetch(`http://www.mocky.io/v2/5808862710000087232b75ac`)
      .then(res => res.json())
      .then(data => {
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
            poliToSend = p;
          }
        });
      }
    });
    if(poliToSend.clientId){
      res.render('policy', poliToSend );
    }else{
      res.render('not-found' );
    }
  } catch (error) {
    next(error);
  }
});

router.post('/bynumber', async (req, res, next) => {
  const {number} = req.body;
  try {
    const poli  = await fetch(`http://www.mocky.io/v2/580891a4100000e8242b75c5`)
      .then(res => res.json())
      .then(data => {
        return data.policies;
      });
    const clients = await fetch(`http://www.mocky.io/v2/5808862710000087232b75ac`)
      .then(res => res.json())
      .then(data => {
        return data.clients;});
    let clientToSend = null;
    poli.forEach(p => {
      if(number === p.id){
        clients.forEach(c => {
          if(p.clientId === c.id){
            clientToSend = c;
          }
        });
      }
    });
    if(clientToSend){ 
      res.render('userbypolicenumber', clientToSend );
    }else{
      res.render('not-found' );
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;