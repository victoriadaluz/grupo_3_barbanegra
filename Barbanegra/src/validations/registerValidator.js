const {check , body} = require('express-validator');
const {users} = require('../data/dataBase');

module.exports = [
        check('usuario')
        .notEmpty()
        .withMessage('El usuario es obligatorio')
        .isLength({min:3, max:12})
        .withMessage('Debe tener entre 3 a 12 caracteres'),        
        
        check('email')  
        .isEmail()     
        .withMessage('Debes ingresar un mail valido'),
        //chequeamos el email no este en la base de datos.

        body('email').custom(value=>{
            let user = users.filter(user=>{             
                return user.email == value
            })
            if(user == false) {
                return true
            } else{return false}
        })
        .withMessage('El email ya existe en la base de datos.'),

        body('usuario').custom(value=>{
            let user = users.filter(user=>{             
                return user.user == value
            })
            if(user == false) {
                return true
            } else{return false}
        })
        .withMessage('aime tenia razon'),
        
        
        
        //comparamos contraseñas
        body('pass1').custom((value,{req})=> value != req.body.pass ? false : true)
        .withMessage('Las contraseñas no coinciden')

]