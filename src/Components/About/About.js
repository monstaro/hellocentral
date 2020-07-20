import React from "react";
import "./About.scss";
import hc from "../../icons/hc1.jpg";

const About = () => {
  return (
    <div className="main-area-container">
      <div className="image-area">
        <img className="about-img" src={hc} alt="the boys at the beach" />
        <p className="about-area-text">
          hellocentral is an alternative rock band from Denver, CO.
          </p>
      </div>
      <div className="members">
        <p className="about-area-text">Rob Knox - Drums</p>
        <p className="about-area-text">Justin Jokinen - Guitar</p>
        <p className="about-area-text">Cody Smith - Guitar, Vox</p>
        <p className="about-area-text">Frank McGinn - Bass</p>
      </div>
      <button className="epk">View Full EPK (.pdf)</button>
    </div>
  );
};

export default About;