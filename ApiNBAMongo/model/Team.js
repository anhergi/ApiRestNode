const moongose = require("mongoose");
const { Schema } = moongose;

const Team = new Schema({
    tid: Number,
    region: String,
    name: String,
    abbrev: String,
    // colors: [String],
    imgURL: String
});

module.exports = moongose.model("Team", Team);