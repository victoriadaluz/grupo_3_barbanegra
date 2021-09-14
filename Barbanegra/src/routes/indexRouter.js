const express = require('express');
const router = express.Router();
const {index,
        carrito,}= require('../controllers/homeController')
 const loginValidator = require('../validations/loginValidator');
 let userSession= require('../middlewares/userSession');

/* GET - Home */

router.get('/', index);

router.get('/cart', userSession, carrito);



module.exports = router;
