var express = require('express');
var router = express.Router();
let {login,userRegister,userLogin,userLogout, userProfile, editProfile,prueba} = require('../controllers/usersController')
const uploadAvatar = require('../middlewares/uploadAvatar')
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator')
let userSession= require('../middlewares/userSession'); //validador de rutas

router.get('/prueba',prueba)

router.get('/register', login);
router.post('/register',registerValidator,userRegister);

router.get('/login',login);
router.post('/login', loginValidator, userLogin)

router.get('/profile', userSession, userProfile)
router.post('/profile', uploadAvatar.single("image"), editProfile)

/* LOGOUT */
router.get('/logout', userLogout)

module.exports = router;
