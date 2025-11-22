const express = require("express");
const router = express.Router();
const { skillGapAnalysis } = require("../controllers/skillGapController");

router.post("/", skillGapAnalysis);  
module.exports = router;
