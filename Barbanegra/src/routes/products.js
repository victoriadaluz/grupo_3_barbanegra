// ************ Require's ************
const express = require('express');
const router = express.Router();
let {listar, producto,prueba, category,search} = require('../controllers/productsController')

/* GET Products */
router.get('/', listar);
router.get('/prueba', prueba)

router.get('/detalle/:id', producto) 
router.get('/search', search);
router.get('/category/:id', category)

module.exports = router;