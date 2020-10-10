const moongose = require("mongoose");
const { Schema } = moongose;

const Player = new Schema({
    tid: Number,
    draft: Object
    // region: String,
    // name: String,
    // abbrev: String,
    // // colors: [String],
    // imgURL: String
});

module.exports = moongose.model("Player", Player);