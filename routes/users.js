const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');


/* GET users listing. */

router.get('/byid', async (req, res, next) => {
  try {
    await fetch(`http://www.mocky.io/v2/5808862710000087232b75ac`)
      .then(res => res.json())
      .then(clients => {
        res.render('users', clients );
        console.log(clients);
      });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/byusername', async (req, res, next) => {
  try {
    await fetch(`http://www.mocky.io/v2/5808862710000087232b75ac`)
      .then(res => res.json())
      .then(clients => {
        res.render('users', clients );
        console.log(clients);
      });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
