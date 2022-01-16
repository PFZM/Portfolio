import React, { useState } from "react";
import "../styles/footer.css";
import { FaGithub, FaWhatsappSquare, FaRegFilePdf } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState([
    {
      href: "https://github.com/PFZM",
      icon: <FaGithub />,
    },
    {
      href: "https://www.linkedin.com/in/pablo-zambrano/",
      icon: <GrLinkedin />,
    },
    {
      href: "mailto:pfzm@hotmail.com",
      icon: <HiOutlineMail />,
    },
    {
      href: "http://wa.me/610450726664",
      target: "_blank",
      icon: <FaWhatsappSquare />,
    },
    {
      href: "../assets/Pablo_Zambrano_Resume.pdf",
      text: "Resume",
      icon: <FaRegFilePdf />,
    },
  ]);

  return (
    <footer className="footer">
      <h2>Connect with me!</h2>
      <div class="contact-links">
        {footerLinks.map((footerLink) => (
          <a href={footerLink.href} target={footerLink.target}>
            {footerLink.text}
            {footerLink.icon}
          </a>
        ))}
      </div>
      <h3>Mobile: +61 450 726 664</h3>
    </footer>
  );
};

export default Footer;
