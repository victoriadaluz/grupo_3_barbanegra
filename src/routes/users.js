var express = require('express');
var router = express.Router();
let controller = require('../controllers/usersController')

router.get('/login', controller.login);

module.exports = router;
