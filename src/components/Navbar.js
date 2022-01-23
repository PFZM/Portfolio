import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar({ currentPage }) {
  const navItems = [
    {
      title: "About me",
      pageName: "About",
      href: "/Portfolio",
    },
    {
      title: "Portfolio",
      pageName: "Portfolio",
      href: "/proyects",
    },
    {
      title: "Contact",
      pageName: "Contact",
      href: "/contact",
    },
    {
      title: "Skills",
      pageName: "Skills",
      href: "/skills",
    },
  ];

  return (
    <ul className="navbar">
      {navItems.map((navItem) => (
        <li key={navItem.title} className="nav-item">
          <Link
            to={navItem.href}
            className={
              currentPage === navItem.pageName ? "nav-link active" : "nav-link"
            }
          >
            {navItem.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
