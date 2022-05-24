const { redirect } = require("express/lib/response");
const artist = require("../models/artist");

const   express     =   require("express"),
        router      =   express.Router({mergeParams: true}),
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

router.get("/new", middleware.isAdmin, function(req, res) {
    res.render("artist/new.ejs");
});
        
router.post("/", middleware.isAdmin, upload.single("image"), function(req, res){
    req.body.artist.artistImage = "/upload/profiles/" + req.file.filename;
    Artist.create(req.body.artist, function(err, newArtist){
        if(err) {
            console.log(err);
            req.flash("error", ""+err);
            res.redirect("back");
        }
        else {
            req.flash("success", "New artist added!")
            res.redirect("back");
        }
    });
});

router.get("/:id", function(req,res){
    Artist.findById(req.params.id, function(err, foundArtist){
        if(err) {
            console.log(err);
            req.flash("error", ""+err);
            res.redirect("back");
        }
        else {
            Music.find({ artist: { $in: foundArtist }}, function(err, foundMusics){
                if(err) {
                    console.log(err);
                    req.flash("error", ""+err);
                    res.redirect("back");
                }
                else {
                    res.render("artist/show.ejs", {artist: foundArtist, musics: foundMusics});
                }
            });
        }
    });
});

router.get("/:id/edit", middleware.isAdmin, function(req, res) {
    Artist.findById(req.params.id, function(err, foundArtist){
        if(err) {
            console.log(err);
        }
        else {
            res.render("artist/edit.ejs", {artist:foundArtist});
        }
    });
});

router.put("/:id", middleware.isAdmin, upload.single("image"), function(req, res){
    if(req.file) {
        req.body.artist.artistImage = "/upload/profiles/" + req.file.filename;
    }
    Artist.findByIdAndUpdate(req.params.id, req.body.artist, function(err, updateArtist){
        if(err) {
            console.log(err);
            req.flash("error", ""+err);
            res.redirect("back");
        }
        else {
            req.flash("success", "Update complete!");
            res.redirect("/artist/" + req.params.id);
        }    
    });
});

router.delete("/:id", middleware.isAdmin, function(req, res){
    Music.deleteMany().where("artist").equals(req.params.id).exec(function(err, foundMusics){
        if(err) {
            console.log(err);
            req.flash("error", ""+err);
            res.redirect("back");
        }
        else {
            Artist.findByIdAndRemove(req.params.id, function(err){
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
        }
    });
});

module.exports = router;