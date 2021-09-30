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
                    email: value
                }
            })
            .then(user => {
                if (user) {
                    return Promise.reject("Este email ya está registrado. Ingrese un nuevo email")
                }
            })
    }),

    check('password1')
    .notEmpty()
    .withMessage('Por favor, ingrese su contraseña')
    .isLength({
        min: 8,
        max: 12
    })
    .withMessage("La contraseña debe contener entre 6 y 12 caracteres"),



    body('password2').custom((value, {req}) => value !== req.body.password1 ? false : true)
    .withMessage("las contraseñas no coinciden")
]