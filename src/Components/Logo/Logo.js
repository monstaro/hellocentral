import React from "react";
import "../../fonts/Linebeam.ttf";
import "../../fonts/HelveticaNeue.ttf";
import "./Logo.scss";

const Logo = () => {

  const generateRandomColor = () => {
    let colors = ['yellow', 'pink', 'teal', 'white', 'green'];
    let randomNumber = Math.floor(Math.random() * Math.floor(colors.length))
    return `hellocentral ${colors[randomNumber]}`
  }

  return (
    <div className="logo">
      <p className={generateRandomColor()}>
        hellocentral
      </p>
    </div>
  );
};

export default Logo;
