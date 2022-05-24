const   mongoose                =   require("mongoose"),
        passportLocalMongoose   =   require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    userImage: String,
    displayName: String,
    role: {type:String, default: "user"},
    favorite: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Music"
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Artist"
        }
    ]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);