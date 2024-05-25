import React from "react";
import "../Styles/About.css";
import aboutimg from "../Assests/aboutsectionimg.svg";
import { FaArrowRight } from "react-icons/fa6";

function About() {
  return (
    <div className="Aboutsection">
      <div className="container">
        <div className="row sectioncontainer">
          <div className="col-lg-6 col-md-6 col-xl-8">
            <p className="sectiontitle p-3 pt-0 pb-0">About</p>
            <p className="p-3 abouttext">
              👋 Hello, I'm <span className="textcolor">Ravindu Dilusha, </span>
              a self-motivated and creative individual with a strong passion for
              <span className="textcolor">
                {" "}
                UI/UX and frontend development.
              </span>
              With one year of hands-on experience in
              <span className="textcolor">
                {" "}
                HTML, CSS, Bootstrap, Javascript, ReactJS, Figma, Photoshop, and
                Illustrator
              </span>{" "}
              I am dedicated to crafting seamless and visually appealing digital
              experiences. Currently pursuing my BSc (Hons) in Information
              Technology at SLIT, I am honing my skills to stay at the forefront
              of technology. Join me on this exciting journey of turning ideas
              into interactive and user-friendly solutions. Let's create
              something extraordinary together! 🚀🖥️
            </p>
            <div className="resumebtncontainer">
              <a
                href="https://drive.google.com/file/d/1cf-pzcBsdRFnysX4M1PhmO5nSQvGVkh7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="resumelink"
              >
                <button className="resumebtn">
                  View resume
                  <FaArrowRight className="icon" />
                </button>
              </a>
            </div>
          </div>
          <div className="p-3 col-lg-6 col-md-6 col-xl-4">
            <div className="imgcontainer">
              <img
                src={aboutimg}
                className="aboutimg"
                alt="About section illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
