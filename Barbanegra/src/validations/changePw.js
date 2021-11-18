const { check, body } = require('express-validator');
const bcrypt = require('bcryptjs')
const db = require('../database/models')

module.exports = [
    check('passwordNew')
    .notEmpty()
    .withMessage('Por favor, ingrese su contraseña'),
    
    check('password')
    .notEmpty()
    .withMessage('Por favor, ingrese su contraseña'),

    body('password')
        .custom((value, {req})=> {            
            return db.Users.findOne({
                where:{
                    id:req.params.id,
                }
            })
            .then((user) => {
                 if(!bcrypt.compareSync(req.body.password, user.password)){                    
                    req.session.test=req.session.test+1
                    console.log(req.session.test);
                    return Promise.reject()
                    
                }
            })
            
        })
]    