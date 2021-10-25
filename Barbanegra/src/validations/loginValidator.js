const { check, body } = require('express-validator');
const bcrypt = require('bcryptjs')
const db = require('../database/models')

module.exports = [
    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    check('passwordlog')
    .notEmpty()
    .withMessage('Por favor, ingrese su contraseña'),

    body('passwordlog')
        .custom((value, {req})=> {            
            return db.Users.findOne({
                where:{
                    email: req.body.email,
                }
            })
            .then((user) => {
               
                if(!bcrypt.compareSync(req.body.passwordlog, user.password)){
                    
                    return Promise.reject("Email o contraseña incorrectos")
                }
            })
            
        })
]    