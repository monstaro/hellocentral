import React from "react";
import "./Music.scss";
import CFH from "../../icons/CFH.jpg";
import LoveChild from "../../icons/Love Child.jpg";
import SYTS from "../../icons/SYTS.jpg";
import Temple from "../../icons/Temple.jpg";
import HeatWave from "../../icons/HeatWave3.jpg";

const Music = () => {
  return (
    <div className="main-area-container">
      <p className="music-area-text">
        <div className="album-container">
        <a href="https://ditto.fm/heatwave-hellocentral" rel="noopener noreferrer" target="_blank">
            <img src={HeatWave} alt="Heatwave" className="album-image" />
            <p>HEAT//WAVE (EP)</p>
            </a>
        </div>
        <div className="album-container">
          <a href="https://open.spotify.com/album/6EK4ZAMwYx0I3wi4KyjaMC?si=YNAzaEu2TtmeqQvT05LZTw" rel="noopener noreferrer" target="_blank">
            <img src={LoveChild} alt="Love Child" className="album-image" />
            <p>Love Child (Single)</p>
          </a>
        </div>
        <div className="album-container">
          <a href="https://open.spotify.com/album/6cVNWGgfrED4CtKevUQ7Tx?si=6nJNfv7zQFC7DYpiZUgrOg" rel="noopener noreferrer" target="_blank">
            <img src={CFH} alt="Carbon Fiber House" className="album-image" />
            <p>Carbon Fiber House (Single)</p>
          </a>
        </div>
        <div className="album-container">
          <a href="https://open.spotify.com/album/5NGQLsZK1wXtUe7OuZXgyk?si=EsEuDK6xSH21LawvXpJcQQ" rel="noopener noreferrer" target="_blank">
            <img src={SYTS} alt="Sing You To Sleep" className="album-image" />
            <p>Sing You To Sleep (Single)</p>
          </a>
        </div>
        <div className="album-container">
          <a href="https://open.spotify.com/album/2JfsKuy4ire5YNAFnVxDlJ?si=lTViL-z5Qdi-v8AtGm5LFg" rel="noopener noreferrer" target="_blank">
            <img src={Temple} alt="Temple" className="album-image" />
            <p>Temple (Single)</p>
          </a>
        </div>
      </p>
    </div>
  );
};

export default Music;
