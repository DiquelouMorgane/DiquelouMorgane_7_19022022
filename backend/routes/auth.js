//Imports//
const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth');

//Authentification signup and login roads//
router.post('/signup', authCtrl.signup);
router.post('/login', authCtrl.login);

module.exports = router;