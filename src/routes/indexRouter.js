const express = require('express');
const router = express.Router();
const {index,
        carrito,}= require('../controllers/homeController')


/* GET - Home */

router.get('/', index);

router.get('/cart', carrito);




module.exports = router;
