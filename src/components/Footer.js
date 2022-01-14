import React from "react";
import "../styles/footer.css";
import { FaGithub, FaWhatsappSquare, FaRegFilePdf } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Connect with me!</h2>
      <div class="contact-links">
        <a href="https://github.com/PFZM">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/pablo-zambrano/">
          <GrLinkedin />
        </a>
        <a href="mailto:pfzm@hotmail.com">
          <HiOutlineMail />
        </a>
        <a href="http://wa.me/610450726664" target="_blank">
          <FaWhatsappSquare />
        </a>
        <a href="assets/Documents/CV Pablo Zambrano.pdf">
          Resume
          <FaRegFilePdf />
        </a>
      </div>
      <h3>Mobile: +61 450 726 664</h3>
    </footer>
  );
};

export default Footer;
