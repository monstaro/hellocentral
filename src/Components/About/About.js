import React from "react";
import "./About.scss";
import aboutpic from "../../images/about-pic.jpg";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container className="about-area">
        <div className="img-container">
          <img
            className="about-img"
            src={aboutpic}
            alt="hellocentral"
          />
        </div>
        <div className="about-area-text">
          Fueled by an ambitious, genre-spanning take on modern alternative
          rock, hellocentral has taken over the Denver music scene with their
          energetic and emotional live performances. Formed by four life-long
          friends, hellocentral is the product of a culmination of influences,
          experiences, and a common passion for music. Compared to the likes of
          Brand New, Turnover, and Blink 182, hellocentral set out to create
          music that people can not only dance to, but also connect with.
          Blending dreamy indie rock elements with hard-hitting, catchy pop punk
          choruses, the group is turning heads with their unique and refreshing
          sound. The band released their self-titled, self recorded debut EP in
          2018, followed by a string of local shows that added a loyal base of
          fans along the way. The EP caught the attention of producers Glenn
          Sawyer and Rich Veltrop at The Spot Studios, where hellocentral
          recorded and independently released 4 singles in 2019. Frequently
          playing shows to promote their growing catalogue, hellocentral is
          becoming a prominent figure in the alternative/punk markets in Denver,
          earning local press and larger stages. hellocentral's last release,
          "HEATWAVE" was released in 2020 to even more interests among radio
          stations and music blogs. The band is currently working on their first
          full-length LP, said to infuse elements of trap and hip-hop into their
          ever-evolving sound. The LP is slated for release Autumn 2021.
        </div>
    </Container>
  );
};


export default About;
