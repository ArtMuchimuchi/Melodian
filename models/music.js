const   mongoose                =   require("mongoose");

const musicSchema = new mongoose.Schema({
    name: String,
    imageCover: String,
    musicSource: String,
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Artist"
    },
    release: String,
    lyrics: String,
    genre: String,
    likes: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Music", musicSchema);