const   middlewareObj   =   {};

middlewareObj.isLoggedin = function (req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "You need to login first!");
    res.redirect("/login");
}

middlewareObj.isAdmin = function (req, res, next) {
    if(req.isAuthenticated()){
        if(req.user.role==="admin") {
            next();
        }
        else {
            req.flash("error", "You don't have permission to do this action!");
            res.redirect("back");
        }
    }
    else {
        req.flash("error", "You need to login first");
        res.redirect("/login");
    }
}

module.exports = middlewareObj;