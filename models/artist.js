const   mongoose                =   require("mongoose");

const artistSchema = new mongoose.Schema({
    name: String,
    artistImage: String,
    followers: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Artist", artistSchema);