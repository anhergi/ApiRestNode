const express = require("express");
const router = express.Router();

const Player = require("../model/Player");
//const Team = moongose.model("Team", new Schema({}));

router.get("/", async(req, res) => {
    const players = await Player.find({tid: {$gte: 0}}, 'tid name pos').sort('tid');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(players);
});

router.get("/:id", async(req, res) => {
    const player = await Player.findById(req.params.id);
    res.json(player);
});

router.get("/byteams/:id", async(req, res) => {
    const player = await Player.find({tid: req.params.id});
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(player);
});

router.get("/nextDraft/:year", async(req, res) => {
    const player = await Player.find({"draft.year": 2020});
    // const player = await Player.find({tid: -2});
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(player);
});



module.exports = router;