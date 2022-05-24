const { redirect } = require("express/lib/response");

const   express     =   require("express"),
        router      =   express.Router({mergeParams: true}),
        User        =   require("../models/user"),
        Music       =   require("../models/music"),
        Artist      =   require("../models/artist"),
        multer      =   require("multer"),
        path        =   require("path"),
        storage=   multer.diskStorage({
            destination: function(req, file, callback) {
                if(file.originalname.match(/\.(jpg|jpeg|png)$/i)) {
                    callback(null, "./public/upload/profiles/");
                } 
            },
            filename: function(req, file, callback) {
                callback(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
            }
        }),
        imageFilter =   function(req, file, callback) {
            if(!file.originalname.match(/\.(jpg|jpeg|png)$/i)) {
                return callback(new Error("File type not accept."), false);
            }
            callback(null, true);
        },
        upload =   multer({storage: storage, fileFilter: imageFilter}),
        middleware  =   require("../middleware/index");

router.get("/", middleware.isLoggedin, function(req, res){
    User.findById(req.params.id).populate("following").exec(function(err, foundUser) {
        if(err) {
            console.log(err);
            req.flash("error", ""+err);
            res.redirect("/");
        }
        else {
            Music.find({}).where("_id").in(foundUser.favorite).populate("artist").exec(function(err, foundMusics){
                if(err) {
                    console.log(err);
                    req.flash("error", ""+err);
                    res.redirect("/");
                }
                else {
                    res.render("profile/show.ejs", {user:foundUser, musics: foundMusics});
                }
            });
        }
    });
});

router.get("/edit", function(req, res) {
    User.findById(req.params.id, function(err, foundUser) {
        if(err) {
            console.log(err);
            req.flash("error", ""+err);
            res.redirect("/");
        }
        else {
            res.render("profile/edit.ejs", {user:foundUser});
        }
    });
});

router.put("/", upload.single("userImage"), function(req, res) {
    if(req.file) {
        req.body.user.userImage = "/upload/profiles/" + req.file.filename;
    }
    User.findByIdAndUpdate(req.params.id, req.body.user, function(err, foundUser) {
        if(err) {
            console.log(err);
            req.flash("error", ""+err);
            res.redirect("/");
        }
        else {
            req.flash("success",  "Update complete!");
            res.redirect("/profile/"+req.user._id);
        }
    });
});

router.post("/favorite/add", middleware.isLoggedin, function(req, res) {
    User.findById(req.params.id, function(err, foundUser) {
        if(err) {
            console.log(err);
            req.flash("error", ""+err);
            res.redirect("/");
        }
        else {
            Music.findById(req.body.musicID, function (err, foundMusic) {
                foundUser.favorite.push(req.body.musicID);
                foundUser.save();
                foundMusic.likes = foundMusic.likes + 1;
                foundMusic.save();
                res.redirect("back");
            });
        }
    });
});

router.post("/favorite/remove", middleware.isLoggedin, function(req, res) {
    User.findById(req.params.id, function(err, foundUser) {
        if(err) {
            console.log(err);
            req.flash("error", ""+err);
            res.redirect("/");
        }
        else {
            Music.findById(req.body.musicID, function (err, foundMusic) {
                foundUser.favorite.pull(req.body.musicID);
                foundUser.save();
                foundMusic.likes = foundMusic.likes - 1;
                foundMusic.save();
                res.redirect("back");
            });
        }
    });
});

router.post("/following/add", middleware.isLoggedin, function(req, res) {
    User.findById(req.params.id, function(err, foundUser) {
        if(err) {
            console.log(err);
            req.flash("error", ""+err);
            res.redirect("/");
        }
        else {
            Artist.findById(req.body.artistID, function (err, foundArtist) {
                foundUser.following.push(req.body.artistID);
                foundUser.save();
                foundArtist.followers = foundArtist.followers + 1;
                foundArtist.save();
                res.redirect("back");
            });
        }
    });
});

router.post("/following/remove", middleware.isLoggedin, function(req, res) {
    User.findById(req.params.id, function(err, foundUser) {
        if(err) {
            console.log(err);
            req.flash("error", ""+err);
            res.redirect("/");
        }
        else {
            Artist.findById(req.body.artistID, function (err, foundArtist) {
                foundUser.following.pull(req.body.artistID);
                foundUser.save();
                foundArtist.followers = foundArtist.followers - 1;
                foundArtist.save();
                res.redirect("back");
            });
        }
    });
});

router.delete("/", middleware.isAdmin, function(req, res){
    User.findById(req.params.id, function(err, foundUser){
        if(err) {
            console.log(err);
            req.flash("error", ""+err);
            res.redirect("back");
        }
        else {
            let followingList = foundUser.following;
            let favoriteList  = foundUser.favorite;
            User.findByIdAndRemove(req.params.id, function(err){
                if(err) {
                    console.log(err);
                    req.flash("error", ""+err);
                    res.redirect("back");
                }
                else {

                }
            });
            followingList.forEach(function(artist){
                Artist.findById(artist, function(err, foundArtist){
                    if(err) {
                        console.log(err);
                        req.flash("error", ""+err);
                        res.redirect("back");
                    }
                    else {
                        foundArtist.followers = foundArtist.followers - 1;
                        foundArtist.save();
                    }
                });
            });
            favoriteList.forEach(function(music){
                Music.findById(music, function(err, foundMusic){
                    if(err) {
                        console.log(err);
                        req.flash("error", ""+err);
                        res.redirect("back");
                    }
                    else {
                        foundMusic.likes = foundMusic.likes - 1;
                        foundMusic.save();
                    }
                });
            });
            req.flash("success","Delete complete!");
            res.redirect("/deleteUser");
        }
    });
});

module.exports = router;