const {
    Router
} = require('express');
const router = Router();
const fs = require('fs');
let {
    dbParseado
} = require('../data/dataBase');

module.exports = {
    index: (req, res) => {
        res.render('admin/admin', {
            title: 'Admin-Barbanegra'
        })
    },
    listarProductos: (req, res) => {
        res.render('admin/adminProductos', {
            dbParseado
        })
    }
}