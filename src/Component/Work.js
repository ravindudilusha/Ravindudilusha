import React from "react";
import "../Styles/Work.css";
import workimg1 from "../Assests/work1.svg";
import workimg2 from "../Assests/work2.svg";
import workimg3 from "../Assests/work3.svg";

import { FaArrowRight } from "react-icons/fa6";

function Work() {
  return (
    <div className="worksection">
      <div className="container">
        <p className="sectiontitle p-3">Work</p>
        <div className="row workcontent p-3">
          <div className="col-12 col-md-6">
          <div className="image-container">
          <img src={workimg1} className="img-fluid work-image" alt="Work Image" />
          <div className="image-overlay">
            <p className="viewtext">View on Behance</p>
            <FaArrowRight className="arrowicon" />
          </div>
        </div>
          </div>
          <div className="col-12 col-md-6 workdescription">
            <p className="workdescriptiontitle">
              Sri Lanka Revealed-Crafting the Lanka Journey Mobile App UX/UI for
              Seamless Exploration
            </p>
            <p className="workdate">2024 February</p>
            <p className="workdescription">
              Lanka Journey is the revolutionary travel planning app that
              seamlessly transforms your Sri Lankan adventure into an
              unforgettable experience. Whether you're a curious foreign tourist
              or a local explorer, Lanka Journey is your one-stop solution for
              efficient time management and discovering the wonders of this
              island paradise. Navigate with ease, explore attractions
              effortlessly, and make the most of your journey.
            </p>
            <div className="visitcontainer">
              <p className="viewtext">View on Behance</p>
              <FaArrowRight className="arrowicon" />
            </div>
          </div>
        </div>
        <div className="row workcontent p-3">
          <div className="col-12 col-md-6">
          <div className="image-container">
          <img src={workimg2} className="img-fluid work-image" alt="Work Image" />
          <div className="image-overlay">
            <p className="viewtext">View on Behance</p>
            <FaArrowRight className="arrowicon" />
          </div>
        </div>
          </div>
          <div className="col-12 col-md-6 workdescription">
            <p className="workdescriptiontitle1">
              RushGrub-A Case Study in Designing a Convenient Food Pickup App
            </p>
            <p className="workdate">2024 March</p>
            <p className="workdescription">
              RushGrub is a convenient food pickup app designed to streamline
              your dining experience. Say goodbye to waiting in long queues at
              restaurants! With RushGrub, you can easily order your favorite
              dishes from nearby restaurants and pick them up at your
              convenience. Whether you're on a tight schedule or simply prefer a
              hassle-free pickup, RushGrub has you covered. Enjoy delicious
              meals without the wait, only with RushGrub.
            </p>
            <div className="visitcontainer2">
              <p className="viewtext">View on Behance</p>
              <FaArrowRight className="arrowicon" />
            </div>
          </div>
        </div>
        <div className="row workcontent p-3">
          <div className="col-12 col-md-6">
          <div className="image-container">
          <img src={workimg3} className="img-fluid work-image" alt="Work Image" />
          <div className="image-overlay">
            <p className="viewtext">View on Github</p>
            <FaArrowRight className="arrowicon" />
          </div>
        </div>
          </div>
          <div className="col-12 col-md-6 workdescription">
            <p className="workdescriptiontitle3">
              Building a Responsive Restaurant Landing Page with React, CSS &
              Bootstrap
            </p>
            <p className="workdate">2022 November</p>
            <p className="workdescription">
            My first web dev project!. This landing page invites you to discover PizzaDay, a new online
              pizza ordering platform. Built with modern web technologies like
              React.js, CSS, and Bootstrap, the website offers a sleek and
              user-friendly experience.
            </p>
            <div className="visitcontainer3">
              <p className="viewtext">View on Github</p>
              <FaArrowRight className="arrowicon" />
            </div>
          </div>
        </div>
        <div className="buttoncontainer">
        <button type="button" class="Seemorebutton">See more</button>
        </div>
      </div>
    </div>
  );
}

export default Work;
