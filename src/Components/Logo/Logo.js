import React from "react";
import "../../fonts/Linebeam.ttf";
import "../../fonts/HelveticaNeue.ttf";
import "./Logo.scss";

const Logo = ({ color }) => {

  return (
      <p className={`hellocentral ${color}`}>
        hellocentral
      </p>
  );
};

export default Logo;
