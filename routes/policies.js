const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

/* GET users listing. */

router.get('/byusername', async (req, res, next) => {
  try {
    await fetch(`http://www.mocky.io/v2/580891a4100000e8242b75c5`)
      .then(res => res.json())
      .then(policies => {
        res.render('policies', policies );
      });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/bynumber', async (req, res, next) => {
  try {
    await fetch(`http://www.mocky.io/v2/580891a4100000e8242b75c5`)
      .then(res => res.json())
      .then(policies => {
        res.render('policies', policies );
      });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;