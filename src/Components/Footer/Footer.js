import React from "react";
import instagram from "../../icons/instagram-sketched.svg";
import spotify from "../../icons/spotify-sketch.svg";
import soundcloud from "../../icons/soundcloud.svg";
import bandcamp from "../../icons/bandcamp.svg";
import itunes from "../../icons/itunes.svg";

import "./Footer.scss";

const Footer = () => {
  
  return (
    <div className="footer-container">
      <div className="footer-contents">
        <a href="https://soundcloud.com/hellocentral" rel="noopener noreferrer" target="_blank">
          <img src={soundcloud} alt="soundcloud" className="icon" />
        </a>
        <a href="https://instagram.com/hellocentral" rel="noopener noreferrer" target="_blank">
        <img src={instagram} alt="instagram" className="icon" />
        </a>
        <a href="https://open.spotify.com/artist/73Ji1BcaCg9S5jEq5WGLYn?si=milSU6UeRteozJkwPewazQ" rel="noopener noreferrer" target="_blank">
        <img src={spotify} alt="spotify" className="icon" />
        </a>
        <a href="https://music.apple.com/us/artist/hellocentral/1364673111" rel="noopener noreferrer" target="_blank">
        <img src={itunes} alt="itunes" className="icon" />
        </a>
        <a href="https://hellocentralofficial.bandcamp.com/" rel="noopener noreferrer" target="_blank">
        <img src={bandcamp} alt="bandcamp" className="icon" />
        </a>
      </div>
      <p className="footer-text">©{new Date().getFullYear()} hellocentral</p>
    </div>
  );
};

export default Footer;
