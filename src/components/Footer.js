import React from "react";
import "../styles/footer.css";
import { FaGithub, FaWhatsappSquare, FaRegFilePdf } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { useLocation } from "react-router-dom";

const Footer = (props) => {
  const location = useLocation();

  function isFooterFixed() {
    if (
      location.pathname === "/proyects" ||
      location.pathname === "/Portfolio"
    ) {
      return "static";
    } else {
      return "fixed";
    }
  }
  const footerLinks = [
    {
      href: "https://github.com/PFZM",
      icon: <FaGithub size={40} color={"#caf0f8ff"} />,
    },
    {
      href: "https://www.linkedin.com/in/pablo-zambrano/",
      icon: <GrLinkedin size={40} color={"#caf0f8ff"} />,
    },
    {
      href: "mailto:pfzm@hotmail.com",
      icon: <HiOutlineMail size={40} color={"#caf0f8ff"} />,
    },
    {
      href: "http://wa.me/610450726664",
      target: "_blank",
      icon: <FaWhatsappSquare size={40} color={"#caf0f8ff"} />,
    },
    {
      href: "../assets/Pablo_Zambrano_Resume.pdf",
      text: "Resume",
      icon: <FaRegFilePdf size={40} color={"#caf0f8ff"} />,
    },
  ];

  return (
    <footer className="footer" style={{ position: isFooterFixed() }}>
      <h2>Connect with me!</h2>
      <div className="contact-links">
        {footerLinks.map((footerLink) => (
          <a
            key={footerLink.href}
            href={footerLink.href}
            target={footerLink.target}
          >
            <span style={{ fontSize: "1rem", color: "#caf0f8ff" }}>
              {footerLink.text}
            </span>
            {footerLink.icon}
          </a>
        ))}
      </div>
      <h3>Mobile: +61 450 726 664</h3>
    </footer>
  );
};

export default Footer;
