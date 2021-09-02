let { users, newUser } = require('../data/dataBase');
const { validationResult } = require('express-validator');
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
        if (errors.isEmpty()) {
            let lastId = 1;
            users.forEach(user => {
                if (user.id > lastId) {
                    lastId = user.id;
                }
            });
            let userNew = {
                id: lastId + 1,
                user: req.body.usuario.trim(),
                email: req.body.email.trim(),
                pass: bcrypt.hashSync(req.body.pass, 10),
                rol: "ROL_USER",
                nombre: "",
                direccion: "",
                telefono: "",
                avatar: "default-user.png"
            }
            users.push(userNew);
            newUser(users);
            res.redirect('/users/login')
        } else {
            res.render('loginRegistro', {
                title: 'Login-Barbanegra',
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    },
    userProfile: (req, res) => {
        let user = users.find(user=> user.id === req.session.user.id);
        res.render('userProfile2', {
            session: req.session,
            user
            
        })
    },

    userLogin: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let user = users.find(user => user.email === req.body.email);            
            req.session.user = {
                id: user.id,
                user: user.user,
                email: user.email,
                avatar: user.avatar,
                rol: user.rol
            }


            /*    si hacemos un checkbok poner
               if(req.body.nameimput)  */
               if(req.body.remember){ /* si seleccionan recordar creo la cookie */
            res.cookie('cookieNegra', req.session.user, { maxAge: 1000 * 60 * 3 })
                }
            /** guardamos el usuario en locals */
            res.locals.user = req.session.user;
            /**redireccionamos al home si todo esta ok */
            res.redirect('/')

        } else {
            res.render('loginRegistro', {
                title: 'Login-Barbanegra',
                errors: errors.mapped(),
                session: req.session
            })
        }
    },
    userLogout: (req, res) => {
        req.session.destroy();
        if (req.cookies.cookieNegra) {
            res.cookie('cookieNegra', '', { maxAge: -1 })
        }
        res.redirect('/');
    }

}