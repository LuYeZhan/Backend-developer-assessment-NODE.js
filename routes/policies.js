const express = require('express');
const router = express.Router();


/* GET users listing. */

router.get('/policiesbyusername', async (req, res, next) => {
  try {
    const username = client.id;
    const policiesFound = Policies.findById(policies);
    if (!policiesFound) {
      next();
    }
    const policies = await Policies.findById(policies);
    console.log(policies);
  } catch (error) {
    next(error);
  }
});

router.get('/policiesbynumber', async (req, res, next) => {
  try {
    const number = policies.id;
    const policiesFound = Policies.findByNumber(policies);
    if (!policiesFound) {
      next();
    }
    const policies = await Policies.findByNumber(policies);
    console.log(policies);
  } catch (error) {
    next(error);
  }
});

module.exports = router;