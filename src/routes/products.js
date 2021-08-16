// ************ Require's ************
const express = require('express');
const router = express.Router();

/* Require Controller */

const {listar} = require('../controllers/productsController');

/* GET Products */
router.get('/', listar);

module.exports = router;