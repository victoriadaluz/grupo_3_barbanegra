const {
    check,
    body
} = require("express-validator")
const db = require('../database/models')
/* const {users} = require("../data/usersDB") */

module.exports = [
    check("name")
    .notEmpty()
    .withMessage("Ingrese un nombre"),

    check("email")
    .isEmail()
    .withMessage("Ingrese un email válido"),

    body('email').custom(value => {
        return db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(user => {
                if (user) {
                    return Promise.reject("Este email ya está registrado. Ingrese un nuevo email")
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



    body('password').custom((value, {req}) => value !== req.body.password ? false : true)
    .withMessage("las contraseñas no coinciden")
]