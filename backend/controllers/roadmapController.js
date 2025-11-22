
exports.roadmap = (req, res) => {
  const { targetRole } = req.body;

  const ROADMAPS = {
    "Frontend Developer": [
      "Phase 1 (1–2 months): HTML, CSS, JavaScript basics",
      "Phase 2 (2 months): React, Git, Responsive design",
      "Phase 3 (1–2 months): Projects, Optimization, Deployment"
    ],
    "Backend Developer": [
      "Phase 1 (1–2 months): Java basics, OOP, Git",
      "Phase 2 (2 months): Spring Boot, SQL, APIs",
      "Phase 3 (1–2 months): Deployment, Projects, System design basics"
    ],
    "Python Developer": [
      "Phase 1 (1–2 months): Python basics, Git",
      "Phase 2 (2 months): Flask, Django, APIs",
      "Phase 3 (1–2 months): Projects, Deployment"
    ],
    "C++ Developer": [
      "Phase 1 (1–2 months): C++ basics, OOP, STL",
      "Phase 2 (2 months): Data Structures, Algorithms",
      "Phase 3 (1–2 months): Projects, System design basics"
    ],
    "Data Analyst": [
      "Phase 1 (1–2 months): Excel, SQL basics, Statistics",
      "Phase 2 (2 months): Python, Dashboards, Data Analysis",
      "Phase 3 (1–2 months): Projects, Visualization, Reporting"
    ]
  };

  if (!ROADMAPS[targetRole]) {
    return res.status(404).json({ error: "Role not found. Available roles: " + Object.keys(ROADMAPS).join(", ") });
  }

  res.json({ roadmap: ROADMAPS[targetRole] });
};
