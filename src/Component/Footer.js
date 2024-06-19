import React from "react";
import "../Styles/Footer.css";
import logo from "../Assests/logo.svg";

function Footer() {
  return (
    <div className="footersection">
      <div className="container-fluid">
        <hr></hr>
      </div>
      <div className="footercontent">
        <div className="footerlogocontainer">
          <img src={logo} className="footerlogo" />
        </div>
        <div className="sociallinks">
          <a href="https://www.linkedin.com/in/ravindu-dilusha/"   target="_blank" className="socialnames">
            Linkedin
          </a>
          <a
            href="https://www.behance.net/ravidudilusha1"
            className="socialnames"
            target="_blank"
          >
            Behance
          </a>
        </div>
        <div className="availability-container">
          <div className="availability-border">
            <div className="availability-circle"></div>
          </div>
          <p className="availability-text">Available for Work</p>
        </div>
      </div>
      <p className="credittext">Designed By Ravindu Dilusha</p>
    </div>
  );
}

export default Footer;
