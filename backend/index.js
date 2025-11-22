const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());


const skillsGapRoutes = require("./routes/skillGapRoutes");
const roadmapRoutes = require("./routes/roadmapRoutes"); 
const hackerNewsRoutes = require("./routes/hackerNewsRoutes");



app.use("/api/analyze/skill-gap", skillsGapRoutes); 
app.use("/api/analyze/roadmap", roadmapRoutes); 
app.use("/api/hackernews", hackerNewsRoutes);

app.get("/", (req, res) => {
  res.send("Backend running...");
});


const PORT = 4000;
app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
