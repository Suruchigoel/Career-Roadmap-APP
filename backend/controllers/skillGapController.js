
const ROLE_SKILLS = {
  "Frontend Developer": ["HTML", "CSS", "JavaScript", "React", "Git"],
  "Backend Developer": ["Java", "Spring Boot", "SQL", "APIs", "Git"],
  "Python Developer": ["Python", "Flask", "Django", "APIs", "Git"],
  "C++ Developer": ["C++", "STL", "DSA", "OOPS", "Git"],
  "Data Analyst": ["Excel", "SQL", "Python", "Dashboards", "Statistics"]
};

exports.skillGapAnalysis = (req, res) => {
  const { targetRole, currentSkills } = req.body;

  if (!targetRole || !currentSkills) {
    return res.status(400).json({ error: "targetRole & currentSkills required" });
  }

  const formattedCurrent = currentSkills.map(s => s.toLowerCase());
  const required = ROLE_SKILLS[targetRole];

  if (!required) {
    return res.status(404).json({
      error: "Role not found. Available roles: " + Object.keys(ROLE_SKILLS).join(", ")
    });
  }

  const matched = required.filter(skill =>
    formattedCurrent.includes(skill.toLowerCase())
  );

  const missing = required.filter(
    skill => !formattedCurrent.includes(skill.toLowerCase())
  );

  res.json({
    targetRole,
    matchedSkills: matched,
    missingSkills: missing,
    recommendations: missing.map(s => `Learn ${s} via docs, YouTube or course.`),
    suggestedLearningOrder: missing
  });
};
