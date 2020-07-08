import React from "react";
import "./Music.scss";
import CFH from "../../icons/CFH.jpg";
import LoveChild from "../../icons/Love Child.jpg";
import SYTS from "../../icons/SYTS.jpg";
import Temple from "../../icons/Temple.jpg";
import Heatwave from "../../icons/HEATWAVE4.jpg";

const Music = () => {
  return (
    <div className="main-area-container">
      <h1 className="area-header">Music</h1>
      <p className="music-area-text">
      <div className="album-container">
          <img src={Heatwave} alt="Heatwave" className="album-image" />
          <p>HEAT//WAVE (EP)</p>
        </div>
        <div className="album-container">
          <img src={LoveChild} alt="Love Child" className="album-image" />
          <p>Love Child (Single)</p>
        </div>
        <div className="album-container">
          <img src={CFH} alt="Carbon Fiber House" className="album-image" />
          <p>Carbon Fiber House (Single)</p>
        </div>
        <div className="album-container">
          <img src={SYTS} alt="Sing You To Sleep" className="album-image" />
          <p>Sing You To Sleep (Single)</p>
        </div>
        <div className="album-container">
          <img src={Temple} alt="Temple" className="album-image" />
          <p>Temple (Single)</p>
        </div>
      </p>
    </div>
  );
};

export default Music;
