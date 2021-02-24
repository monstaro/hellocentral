import React from "react";
import "../../fonts/Linebeam.ttf";
import "../../fonts/HelveticaNeue.ttf";
import "./Logo.scss";
import pinklogo from '../../images/logo-pink.png'

const Logo = () => {

  const generateRandomColor = () => {
    let colors = ['yellow', 'pink'];
    let randomNumber = Math.floor(Math.random() * Math.floor(colors.length))
    return `hellocentral ${colors[randomNumber]}`
  }

  return (
    <div className="logo">
      <p className={generateRandomColor()}>
        hellocentral
        {/* <img src={pinklogo} style={{width: '600px'}}/> */}
      </p>
    </div>
  );
};

export default Logo;
