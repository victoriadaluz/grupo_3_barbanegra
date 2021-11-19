const { check, body } = require('express-validator');
const bcrypt = require('bcryptjs')
const db = require('../database/models')

module.exports = [
    check('passwordNew')
    .notEmpty()
    .withMessage('El campo de contraseña no puede estar vacio'),
    
    check('password')
    .notEmpty()
    .withMessage('El campo de contraseña no puede estar vacio'),

    body('password')
        .custom((value, {req})=> {            
            return db.Users.findOne({
                where:{
                    id:req.params.id,
                    email:req.body.email
                }
            })
            .then((user) => {
                 if(!bcrypt.compareSync(req.body.password, user.password)){                    
                    req.session.user.test=req.session.user.test-1
                    console.log(`🍔🍔WRONG PASSWORD🍔🍔${req.session.user.test}`);
                    return Promise.reject()
                    
                }
            }) .catch((err)=>{
                return Promise.reject('password incorrecta')
            })
            
        })
]    