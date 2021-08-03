var express = require('express');
var router = express.Router();
let controller= require('../src/controllers/logRegController')

router.get('/login', controller.login);

module.exports = router;
