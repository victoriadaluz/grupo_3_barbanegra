var express = require('express');
var router = express.Router();
let {login,userRegister,userLogin,userLogout, userProfile, editProfile,prueba , updateProfile, deleteUser} = require('../controllers/usersController')
const uploadAvatar = require('../middlewares/uploadAvatar')
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator')
let userSession= require('../middlewares/userSession'); //validador de rutas

router.get('/prueba',prueba)

router.get('/register', login);
router.post('/register',registerValidator,userRegister);

router.get('/login',login);
router.post('/login',loginValidator,  userLogin)

router.get('/profile', userSession, userProfile)
//edit profile, form
router.get('/profile/edit/:id',userSession, editProfile)
router.put('/profile/edit/:id', uploadAvatar.single("image"), updateProfile)

/* LOGOUT */
router.get('/logout', userLogout)

router.delete('/deleteUser/:id',
 deleteUser)

module.exports = router;