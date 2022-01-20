import React, { useState } from "react";

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
        <div>
          <h3>Technical Skills</h3>
          <ul>
            {technicalSkills.map((technicalSkill) => (
              <li>{technicalSkill.skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Non-Technical Skills</h3>
          <ul>
            {nonTecSkills.map((nonTecSkill) => (
              <li>{nonTecSkill.skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;