var express = require('express');
var router = express.Router();
let {login} = require('../controllers/usersController')

router.get('/login', login);

module.exports = router;
