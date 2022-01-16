import React, { useState } from "react";
import "../styles/navbar.css";

function Navbar({ currentPage, handlePageChange }) {
  const [navItems, setNavItems] = useState([
    {
      title: "About me",
      pageName: "About",
      href: "#about",
    },
    {
      title: "Portfolio",
      pageName: "Portfolio",
      href: "#portfolio",
    },
    {
      title: "Contact",
      pageName: "Contact",
      href: "#contact",
    },
    {
      title: "Skills",
      pageName: "Skills",
      href: "#skills",
    },
  ]);

  return (
    <ul className="navbar">
      {navItems.map((navItem) => (
        <li className="nav-item">
          <a
            href={navItem.href}
            onClick={() => handlePageChange(navItem.pageName)}
            className={
              currentPage === navItem.pageName ? "nav-link active" : "nav-link"
            }
          >
            {navItem.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
