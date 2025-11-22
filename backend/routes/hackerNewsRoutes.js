
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const topIdsRes = await axios.get("https://hacker-news.firebaseio.com/v0/topstories.json");
    const topIds = topIdsRes.data.slice(0, 5); 

    const stories = await Promise.all(
      topIds.map(async (id) => {
        const storyRes = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        return {
          title: storyRes.data.title,
          url: storyRes.data.url,
          score: storyRes.data.score,
          time: storyRes.data.time,
          type: storyRes.data.type,
          by: storyRes.data.by
        };
      })
    );

    res.json({ stories });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch Hacker News stories" });
  }
});

module.exports = router;
