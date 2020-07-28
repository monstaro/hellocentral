import React from "react";
import band1 from "../../icons/hellopic1.jpg";
import band2 from "../../icons/hellopic2.jpg";
import band3 from "../../icons/hellopic3.jpg";
import band4 from "../../icons/hellopic4.jpg";

import "./Pics.scss";
import Carousel from "react-bootstrap/Carousel";

const Pics = () => {
  return (
    <div className="main-area-container">
      <Carousel nextLabel="" prevLabel="" className="carousel">
        <Carousel.Item>
          <img className="band-pic hello" src={band1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block band-pic" src={band2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block band-pic" src={band3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block band-pic" src={band4} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Pics;
