import React from "react";
import band1 from "../../icons/band1.jpg";
import band2 from "../../icons/band2.jpg";
import band3 from "../../icons/band3.jpg";
import "./Pics.scss";
import Carousel from "react-bootstrap/Carousel";

const Pics = () => {
  return (
    <div className="main-area-container">
      <Carousel>
        <Carousel.Item>
          <img className="d-block band-pic" src={band1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block band-pic" src={band2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block band-pic" src={band3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Pics;
