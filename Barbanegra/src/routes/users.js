var express = require('express');
var router = express.Router();
let {login,userRegister} = require('../controllers/usersController')
const uploadAvatar = require('../middlewares/uploadAvatar')
const registerValidator = require('../validations/registerValidator');

router.get('/login', login);
router.post('/login',registerValidator,userRegister);

module.exports = router;
