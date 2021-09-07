module.exports = (req, res, next) => {
    if(req.session && req.session.user.rol == "ROL_ADMIN"){
        next();
    } else {
        res.redirect('/users/login')
    }
}