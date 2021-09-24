// ************ Require's ************
const express = require('express');
const router = express.Router();
let {listar, producto,prueba} = require('../controllers/productsController')

/* GET Products */
router.get('/', listar);
router.get('/prueba', prueba)

router.get('/detalle/:id', producto) 

module.exports = router;