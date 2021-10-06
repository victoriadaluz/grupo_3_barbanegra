module.exports = (req, res, next) => {
    if(req.session && req.session.user.rol == 1){
        next();
    } else {
        res.redirect('/users/login')
    }
}