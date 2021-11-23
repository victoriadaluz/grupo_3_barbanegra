const {
    check,
    body
} = require("express-validator")
const db = require('../database/models')
/* const {users} = require("../data/usersDB") */

module.exports = [
    check("username")
    .notEmpty()
    .withMessage("Ingrese un nombre"),

    check("email")
    .isEmail()
    .withMessage("Ingrese un email válido"),

    body('email').custom((value,{req}) => {
        return db.Users.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(user => {
                if (user) {
                    return Promise.reject("Este email ya está registrado.")
                }
            })
    }),

    check('password')
    .notEmpty()
    .withMessage('Por favor, ingrese su contraseña')
    .isLength({
        min: 6,
        max: 12
    })
    .withMessage("La contraseña debe contener entre 6 y 12 caracteres"),



    body('pass1').custom((value, {req}) => value !== req.body.password ? false : true)
    .withMessage("Las contraseñas no coinciden")
]