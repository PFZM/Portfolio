import React from "react";

import pilotLog from "../assets/images/pilotLog.png";
import coffeeMate from "../assets/images/coffeeMate.png";
import noteTaker from "../assets/images/noteTaker.png";
import socialMediaApi from "../assets/images/socialMediaApi.png";

function Portfolio() {
  const proyects = [
    {
      name: "Pilot Log",
      image: pilotLog,
      alt: "Pilot Log App",
      urlApp: "https://pilots-logbook.herokuapp.com/",
      urlRepo: "https://github.com/PFZM/Pilot-Log",
    },
    {
      name: "Coffe-mate",
      image: coffeeMate,
      alt: "Coffee-mate App",
      urlApp: "https://pfzm.github.io/Coffee-mate/",
      urlRepo: "https://github.com/PFZM/Coffee-mate",
    },
    {
      name: "Note Taker",
      image: noteTaker,
      alt: "Note Taker App",
      urlApp: "https://github.com/PFZM/Note_Taker",
      urlRepo: "https://note-taker-pfzm.herokuapp.com/",
    },
    {
      name: "Social Network API",
      image: socialMediaApi,
      alt: "Social Network API App",
      urlApp: "https://youtu.be/ou4tpGU7xIQ",
      urlRepo: "https://github.com/PFZM/Social_Network_API",
    },
  ];

  return (
    <div className="page">
      <h2 className="title">Portfolio - Projects</h2>
      <div className="projects-container">
        {proyects.map((project) => (
          <div key={project.name} className="card-container">
            <span className="project-name">{project.name}</span>
            <img
              className="image-project"
              src={project.image}
              alt={project.alt}
            />
            <a className="card-links" href={project.urlApp}>
              Application - Link
            </a>
            <a className="card-links" href={project.urlRepo}>
              Github Repo
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
