import React from "react";

function Skills() {
  const technicalSkills = [
    {
      skill: "HTML",
    },
    {
      skill: "CSS",
    },
    {
      skill: "JavaScript",
    },
    {
      skill: "React",
    },
    {
      skill: "NodeJS",
    },
    {
      skill: "Express",
    },
    {
      skill: "MySQL",
    },
    {
      skill: "NoSQL",
    },
  ];

  const nonTecSkills = [
    {
      skill: "Leadership",
    },
    {
      skill: "Team player",
    },
    {
      skill: "Problem solving",
    },
    {
      skill: "Creativity",
    },
    {
      skill: "Adaptability",
    },
  ];

  return (
    <div className="page">
      <h2 className="title">Skills</h2>
      <div className="list-skills">
        <div className="div-list">
          <h3>Technical Skills</h3>
          <ul className="individual-list">
            {technicalSkills.map((technicalSkill) => (
              <li key={technicalSkill.skill}>{technicalSkill.skill}</li>
            ))}
          </ul>
        </div>
        <div className="div-list">
          <h3>Non-Technical Skills</h3>
          <ul className="individual-list">
            {nonTecSkills.map((nonTecSkill) => (
              <li key={nonTecSkill.skill}>{nonTecSkill.skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
