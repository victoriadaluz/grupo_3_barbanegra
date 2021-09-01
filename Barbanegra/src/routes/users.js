var express = require('express');
var router = express.Router();
let {login,userRegister,userLogin,userLogout} = require('../controllers/usersController')
const uploadAvatar = require('../middlewares/uploadAvatar')
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator')
let userSession= require('../middlewares/userSession'); //validador de rutas

router.get('/register', login);
router.post('/register',registerValidator,userRegister);

router.get('/login', login);
router.post('/login', loginValidator, userLogin)

/* LOGOUT */
router.get('/logout', userLogout)

module.exports = router;
