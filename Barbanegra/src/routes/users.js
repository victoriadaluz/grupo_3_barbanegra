var express = require('express');
var router = express.Router();
let {login} = require('../controllers/usersController')
const uploadAvatar = require('../middlewares/uploadAvatar')

router.get('/login', login);

module.exports = router;
