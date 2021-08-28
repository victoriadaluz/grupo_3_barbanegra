const dataBase = require('../data/dataBase')
let newUser = require('../data/dataBase')
let users
const {
    name,
    carousel
} = dataBase

module.exports = {
    login: (req, res) => {
        res.render('loginRegistro', {
            title: 'Login-Barbanegra'
        })
    }
    
}