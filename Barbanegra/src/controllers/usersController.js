const {
    validationResult
} = require('express-validator');
const bcrypt = require('bcryptjs');
const {
    Users,
} = require('../database/models');

module.exports = {
    //Vista login por GET
    prueba: (req, res) => {
        Users.findAll()
            .then(prueba => {
                res.send(prueba)
            })
    },

    login: (req, res) => {
        res.render('login-register', {
            title: 'Login-Barbanegra',
            session: req.session.user ? req.session.user : "",
            login: 1

        })
    },
    //Proceso por POST
    userLogin: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            Users.findOne({
                    where: {
                        email: req.body.email
                    }
                })
                .then((user) => {
                    
                    req.session.user = {
                        id: user.id,
                        user: user.user,
                        email: user.email,
                        image: user.imagee,
                        rol: user.rol,
                        test:4
                    };
                    /*    si hacemos un checkbox poner
               if(req.body.nameimput)  */
                    if (req.body.remember) {
                        /* si seleccionan recordar creo la cookie */
                        res.cookie('cookieNegra', req.session.user, {
                            maxAge: 100000 * 60 * 60
                        })
                    }
                    /** guardamos el usuario en locals */
                    res.locals.user = req.session.user;

                    /**redireccionamos al home si todo esta ok */
                    res.redirect('/');

                })
        } else {
            res.render('login-register', {
                title: 'Login-Barbanegra',
                errors: errors.mapped(),
                session: req.session.user ? req.session.user : "",
                login: 1
            })
        }
    },
    //metodo register por post  

    userRegister: (req, res) => {
      let errors = validationResult(req);       
        if (errors.isEmpty()) {
            let {
                firstName,
                email,
                password
            } = req.body
            Users.create({
                firstName,
                email,
                password: bcrypt.hashSync(password, 10),
                image: "default-user.png",
                rol: 0,
                nombre: "",
                direccion: "",
                telefono: "",
            }).then(() => {
                res.redirect('/users/login')
            }).catch(err => console.log(err))
        } else {
            res.render('login-register', {
                title: 'Login-Barbanegra',
                errors: errors.mapped(),
                old: req.body,
                session: req.session.user ? req.session.user : ""
            })

        }

    },
    /* USER PROFILE */
    userProfile: (req, res) => {
        Users.findByPk(req.session.user.id)
            .then((user) => {
                res.render("profile", {
                    session: req.session,
                    user,
                })
            })



    },
    editProfile: (req, res) => {
        Users.findByPk(req.session.user.id)
            .then((user) => {
                res.render("editProfile", {
                    session: req.session,
                    user,
                })
            })
    },

    updateProfile: (req, res) => {
        let errors = validationResult(req);
        const {
            firstName,
            lastName,
            tel,
            street,
            city,
            province,
            number,
            postalCode
        } = req.body
        if (errors.isEmpty()) {
            Users.update({
                    firstName: firstName,
                    lastName: lastName,
                    tel: tel,
                    street: street,
                    city: city,
                    province: province,
                    number: number,
                    postalCode: postalCode,
                    image: req.file && req.file.filename,
                }, {
                    where: {
                        id:req.params.id
                    }
                })
                .then(() => {
                    Users.findByPk(req.params.id)
                        .then(() => {
                            res.redirect('/users/profile')
                        })
                }).catch(err => console.log(err))
        }
        /* else{
                    res.render('UserProfile2', {
                        session: req.session,
                        old: req.body,
                        errors : errors.mapped()
                    })
                } */




    },
    userLogout: (req, res) => {
        req.session.destroy();
        if (req.cookies.cookieNegra) {
            res.cookie('cookieNegra', '', {
                maxAge: -1
            })
        }
        res.redirect('/');
    },
    deleteUser: (req, res) => {
        Users.destroy({
            where: {
                id: +req.params.id
            }
        }),
        req.session.destroy()
        res.redirect("/")

    },
    changePw:(req, res) => {
        Users.findByPk(req.session.user.id)
            .then((user) => {
                res.render('changePw',{
                    user,
                    session: req.session,
                })
            })
           /*  const {
                passwordlog, 
                passwordNew,
                passwordNew2              
            } = req.body */

    },
    updatePw:(req, res)=>{
        
        let errors = validationResult(req);
        const {
            password, 
            passwordNew,            
        } = req.body
        if (errors.isEmpty()){
            Users.update({
                password:  bcrypt.hashSync(passwordNew, 10),               
            },
            {where: {
                id:req.params.id
            }}
            ).then(() => {
                Users.findByPk(req.params.id)
                    .then((user) => {
                        res.redirect('/users/profile')
                    })
            }).catch(err => console.log(err)) 
        }else if ( req.session.user.test == 0) {
            req.session.destroy();
            if (req.cookies.cookieNegra) {
                res.cookie('cookieNegra', '', {
                    maxAge: -1
                })
            }
            res.redirect('/users/login');
        }
         else {
            Users.findByPk(req.session.user.id)
            .then((user) => {
                res.render('changePw',{
                    user,
                    test: req.session.user.test,
                    session: req.session,
                    errors: errors.mapped()
                })
            })
        }
            
        


    }


}