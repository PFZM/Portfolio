import React, { useState } from "react";

function Portfolio() {
  const [proyects, setProyects] = useState([
    {
      name: "Pilot Log",
      image: "../../assets/images/Pilot_Log.png",
      alt: "Pilot Log App",
      urlApp: "https://pilots-logbook.herokuapp.com/",
      urlRepo: "https://github.com/PFZM/Pilot-Log",
    },
    {
      name: "Coffe-mate",
      image: "../src/assets/images/Coffe_Mate.png",
      alt: "Coffee-mate App",
      urlApp: "https://pfzm.github.io/Coffee-mate/",
      urlRepo: "https://github.com/PFZM/Coffee-mate",
    },
    {
      name: "Note Taker",
      image: "../src/assets/images/Note taker.png",
      alt: "Note Taker App",
      urlApp: "https://github.com/PFZM/Note_Taker",
      urlRepo: "https://note-taker-pfzm.herokuapp.com/",
    },
    {
      name: "Social Network API",
      image: "../src/assets/images/Social_Media_API.png",
      alt: "Social Network API App",
      urlApp: "https://youtu.be/ou4tpGU7xIQ",
      urlRepo: "https://github.com/PFZM/Social_Network_API",
    },
  ]);

  return (
    <div className="page">
      <h1 className="title">Portfolio - Projects</h1>
      {proyects.map((project) => (
        <card className="card-container">
          {project.name}
          <img src={project.image} alt={project.alt} />
          <a href={project.urlApp}>Application</a>
          <a href={project.urlRepo}>Github Repo</a>
        </card>
      ))}
    </div>
  );
}

export default Portfolio;
