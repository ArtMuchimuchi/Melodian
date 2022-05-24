const { redirect } = require("express/lib/response");

const   express     =   require("express"),
        router      =   express.Router(),
        User        =   require("../models/user"),
        Music       =   require("../models/music"),
        Artist      =   require("../models/artist"),
        middleware  =   require("../middleware/index"),
        multer      =   require("multer"),
        path        =   require("path"),
        storage=   multer.diskStorage({
            destination: function(req, file, callback) {
                if(file.originalname.match(/\.(jpg|jpeg|png)$/i)) {
                    callback(null, "./public/upload/images/");
                }
                else if(file.originalname.match(/\.(mp3)$/i)) {
                    callback(null, "./public/upload/musics/");
                }   
            },
            filename: function(req, file, callback) {
                callback(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
            }
        }),
        fileFilter =   function(req, file, callback) {
            if(!file.originalname.match(/\.(jpg|jpeg|png|mp3)$/i)) {
                return callback(new Error("File type not accept."), false);
            }
            callback(null, true);
        },
        upload =   multer({storage: storage, fileFilter: fileFilter});

router.get("/new", middleware.isAdmin, function(req, res) {
    res.render("music/new.ejs");
});

router.post("/", middleware.isAdmin, upload.fields([{name:"imageCover"},{name:"musicSource"}]), function(req, res) {
    req.body.music.imageCover = "/upload/images/" + req.files["imageCover"][0].filename;
    req.body.music.musicSource = "/upload/musics/" + req.files["musicSource"][0].filename;
    Artist.findOne({ name: req.body.music.artist }, function(err, foundArtist){
        if(err) {
            console.log(err);
            req.flash("error", ""+err);
            res.redirect("back");
        }
        else {
            req.body.music.artist = foundArtist;
            Music.create(req.body.music, function(err, newMusic) {
                if(err) {
                    console.log(err);
                    req.flash("error", ""+err);
                    res.redirect("back");
                }
                else {
                    res.redirect("/");
                }
            });
        }    
    });
});

router.get("/:id", function(req, res) {
    Music.findById(req.params.id).populate("artist").exec(function(err, foundMusic) {
        if(err) {
            console.log(err);
        }
        else {
            res.render("music/show.ejs",{music:foundMusic});
        }
    });
});

router.get("/:id/edit", middleware.isAdmin, function(req, res) {
    Music.findById(req.params.id).populate("artist").exec(function(err, foundMusic){
        if(err) {
            console.log(err);
        }
        else {
            res.render("music/edit.ejs", {music:foundMusic});
        }
    });
});

router.put("/:id", middleware.isAdmin, upload.fields([{name:"imageCover"},{name:"musicSource"}]), function(req, res){
    if(req.files["imageCover"]) {
        req.body.music.imageCover = "/upload/images/" + req.files["imageCover"][0].filename;
    }
    if(req.files["musicSource"]){
        req.body.music.musicSource = "/upload/musics/" + req.files["musicSource"][0].filename;
    }
    Artist.findOne({ name: req.body.music.artist }, function(err, foundArtist){
        if(err) {
            console.log(err);
            req.flash("error", ""+err);
            res.redirect("back");
        }
        else {
            req.body.music.artist = foundArtist;
            Music.findByIdAndUpdate(req.params.id, req.body.music, function(err, updateMusic){
                if(err) {
                    console.log(err);
                    req.flash("error", ""+err);
                    res.redirect("back");
                }
                else {
                    req.flash("success", "Update complete!");
                    res.redirect("/music/"+req.params.id);
                }
            });
        }    
    });
});

router.delete("/:id", middleware.isAdmin, function(req, res){
    Music.findByIdAndRemove(req.params.id, function(err){
        if(err) {
            console.log(err);
            req.flash("error", ""+err);
            res.redirect("back");
        }
        else {
            req.flash("success", "Delete complete!");
            res.redirect("/");
        }
    });
});

module.exports = router;