import React from "react";
import "./About.scss";
import hc from "../../icons/hc1.jpg";

const About = () => {
  return (
    <div className="main-area-container">
      <div className="image-area">
      <img className="about-img" src={hc} alt="the boys at the beach" />
      Alt Rock from Denver, CO
      <div className="members">
        <p className="area-text">Rob Knox - Drums</p>
        <p className="area-text">Justin Jokinen - Guitar</p>
        <p className="area-text">Cody Smith - Guitar, Vox</p>
        <p className="area-text">Frank McGinn - Bass</p>
      </div>
      </div>
      <button className="epk">View Full EPK (.pdf)</button>
    </div>
  );
};

export default About;
