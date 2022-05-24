const   express     =   require("express"),
        router      =   express.Router(),
        User        =   require("../models/user"),
        Music       =   require("../models/music"),
        Artist      =   require("../models/artist"),
        passport    =   require("passport"),
        middleware  =   require("../middleware/index");

router.get("/", function(req, res){
    Music.find({}).populate("artist").exec(function(err, allMusics){
        if(err) {
            console.log(err);
        }
        else {
            res.render("landing.ejs", {musics: allMusics});
        }
    });
});

router.get("/register", function(req, res){
    res.render("register.ejs");
});

router.post("/register", function(req, res){
    let newUser = new User({
        username: req.body.username,
        userImage: "/images/icons/unknow.jpg",
        displayName: "melodianUser#"+ Date.now()
    });
    if(req.body.adminCode==="topSecret") {
        newUser.role = "admin";
    }
    User.register(newUser, req.body.password, function(err, user){
        if(err) {
            req.flash("error",""+err);
            return res.redirect("/register");
        }
        else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/");
            });
        }
    });
});

router.get("/login", function(req, res){
    res.render("login.ejs");
});

router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true,
        failureFlash: "Something wrong, please try again."
    }),
    function(req, res) {

    }
);

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

router.post("/search", function(req, res) {
    Music.find({ name: {$regex:req.body.searchKey, $options:"i"}}).populate("artist").exec(function(err, foundMusics){
        if(err) {
            console.log(err);
        }
        else {
            Artist.find({ name: {$regex:req.body.searchKey, $options:"i"}}, function(err, foundArtists) {
                res.render("search.ejs", { musics: foundMusics, artists: foundArtists});
            });
        }
    });
    
});

router.get("/deleteUser", middleware.isAdmin, function(req, res) {
    let fakeUsers = false;
    res.render("deleteUser.ejs", {users:fakeUsers});
});

router.post("/deleteUser", middleware.isAdmin, function(req, res) {
    User.find({ displayName: {$regex:req.body.userDisplayName, $options:"i"}}, function(err, foundUsers){
        if(err) {
            console.log(err);
        }
        else {
            res.render("deleteUser.ejs", {users: foundUsers});
        }
    });
    
});

module.exports = router;