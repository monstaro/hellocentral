import React from "react";
import "./About.scss";
import hc from "../../icons/hc1.jpg";

const About = () => {
  return (
    <div className="main-area-container">
      <div className="image-area">
        <div className="image-container">
          <img className="about-img" src={hc} alt="the boys at the beach" />
          <div className="members">
            <p className="about-area-text">Rob Knox - Drums</p>
            <p className="about-area-text">Justin Jokinen - Guitar</p>
            <p className="about-area-text">Cody Smith - Guitar, Vox</p>
            <p className="about-area-text">Frank McGinn - Bass</p>
          </div>
        </div>
        <p className="about-area-text">
          Fueled by an ambitious, genre---spanning take on modern alternative
          rock, hellocentral has taken the Denver music scene by storm over the
          past three years with their energetic and emotional live performances.
          Formed by four life---long friends, hellocentral is the product of a
          culmination of influences, experiences, and a common passion for
          music. Compared to the likes of Brand New, Turnover, and Blink 182,
          hellocentral set out to create music that people can not only dance
          to, but also connect with. Blending dreamy indie rock elements with
          hard---hitting, catchy pop punk choruses, the group is turning heads
          with their unique and refreshing sound. The band released their
          self---titled, self- recorded debut EP in 2018, followed by a string
          of local shows that added a loyal base of fans along the way. The EP
          caught the attention of producers Glenn Sawyer and Rich Veltrop at The
          Spot Studios, where hellocentral recorded and independently released 4
          singles in 2019. Frequently playing shows to promote their growing
          catalogue, hellocentral is becoming a prominent figure in the
          alternative/punk markets in Denver, earning local press and larger
          stages. hellocentral’s next release “HEATWAVE” is slated to drop
          August 21, 2020. The 3 song EP looks to be a breath of fresh air for
          the alternative-rock scene, combining pop- punk, and indie/electronic
          elements to create powerhouse tracks with contagiously catchy melodies
          that fans of all genres can identify with.
        </p>
      </div>
      {/* <button className="epk">View Full EPK (.pdf)</button> */}
    </div>
  );
};

export default About;
