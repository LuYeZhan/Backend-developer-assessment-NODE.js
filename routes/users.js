const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/userbyid', async (req, res, next) => {
  try {
    const userId = clients.id;
    const userFound = User.findById(userId);
    if (!userFound) {
      next();
    }
    const user = await User.findById(userId);
    console.log(userId);
  } catch (error) {
    next(error);
  }
});

router.get('/userbyusername', async (req, res, next) => {
  try {
    const username = clients.name;
    const userFound = User.findByUsername(username);
    if (!userFound) {
      next();
    }
    const user = await User.findByUsername(username);
    console.log(username);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
