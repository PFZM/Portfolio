import React, { useState } from "react";

function Portfolio() {
  const [proyects, setProyects] = useState([
    {
      name: "Pilot Log",
      image: "test",
      alt: "Pilot Log App",
      urlApp: "https://pilots-logbook.herokuapp.com/",
      urlRepo: "https://github.com/PFZM/Pilot-Log",
    },
    {
      name: "",
      image: "",
      alt: "",
      urlApp: "",
      urlRepo: "",
    },
    {
      name: "",
      image: "",
      alt: "",
      urlApp: "",
      urlRepo: "",
    },
    {
      name: "",
      image: "",
      alt: "",
      urlApp: "",
      urlRepo: "",
    },
    {
      name: "",
      image: "",
      alt: "",
      urlApp: "",
      urlRepo: "",
    },
    {
      name: "",
      image: "",
      alt: "",
      urlApp: "",
      urlRepo: "",
    },
  ]);

  return (
    <div className="page">
      <h1 className="title">Portfolio</h1>
      <ul>
        Projects
        {proyects.map((project) => (
          <li>
            {project.name}
            <img src={project.image} alt={project.alt} />
            <a href={project.urlApp}>Application</a>
            <a href={project.urlRepo}>Github Repo</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
