import React from "react";
import "../../fonts/Linebeam.ttf";
import "../../fonts/HelveticaNeue.ttf";
import "./Logo.scss";

const Logo = ({ color }) => {

  return (
    <div className="logo">
      <p className={`hellocentral ${color}`}>
        hellocentral
      </p>
    </div>
  );
};

export default Logo;
