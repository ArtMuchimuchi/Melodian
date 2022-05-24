const   express         = require("express"),
        app             = express(),
        PORT            = 3000,
        bodyParser      = require("body-parser"),
        mongoose        = require("mongoose"),
        passport        = require("passport"),
        LocalStrategy   = require("passport-local"),
        flash           = require("connect-flash"),
        methodOverride  = require("method-override"),
        User            = require("./models/user"),
        seedDB          = require("./seed.js");

const   indexRoutes     = require("./routes/index"),
        musicRoutes     = require("./routes/music"),
        profileRoutes   = require("./routes/profile"),
        artistRoutes    = require("./routes/artist");

mongoose.connect("mongodb://127.0.0.1/Melodian");
app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(flash());
seedDB();

app.use(require("express-session")({
    secret: "secret word",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", indexRoutes);
app.use("/music", musicRoutes);
app.use("/artist", artistRoutes);
app.use("/profile/:id", profileRoutes);

app.listen(PORT, function(){
    console.log("Server listening at port "+PORT);
});