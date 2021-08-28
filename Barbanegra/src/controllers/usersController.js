let {users,newUser} = require('../data/dataBase');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

module.exports = {
    login: (req, res) => {
        res.render('loginRegistro', {
            title: 'Login-Barbanegra',
            session: req.session
        })
    },

    userRegister: (req, res) => {
        let errors = validationResult(req);        
        if(errors.isEmpty()){
            let lastId= 1;            
            users.forEach(user=>{
                if(user.id > lastId){
                    lastId = user.id;
                }
            })
            let userNew = {
                id:lastId + 1,
                user: req.body.user.trim(),
                email : req.body.email.trim(),
                pass : bcrypt.hashSync(req.body.pass,10),
                rol: "ROL_USER",
                nombre: "",
                direccion: "",
                telefono: "",
                avatar : "default-user.png"
            }            
            users.push(userNew);
            newUser(users);
            res.redirect('/')
        }else{
            res.render('loginRegistro',{
                title: 'Login-Barbanegra',
                errors : errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    }
    
}