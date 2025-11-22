const express = require("express");
const router = express.Router();
const { roadmap } = require("../controllers/roadmapController");


router.post("/", roadmap);

module.exports = router;
