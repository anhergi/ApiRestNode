const express = require("express");
const router = express.Router();

const Team = require("../model/Team");
//const Team = moongose.model("Team", new Schema({}));

router.get("/", async(req, res) => {
    const teams = await Team.find({}, 'tid region name imgURL').sort('tid');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(teams);
});

router.get("/:id", async(req, res) => {
    const teams = await Team.findById(req.params.id);
    res.json(teams);
});

module.exports = router;