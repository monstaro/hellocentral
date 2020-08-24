import React from "react";
import "./Merch.scss";
import tee1 from "../../icons/1.png";
import tee1back from "../../icons/1back.png";
import tee2 from "../../icons/2.png";
import tee3 from "../../icons/3.png";
import tee3back from "../../icons/3back.png";
import tee4 from "../../icons/4.png";
import tee5 from "../../icons/hoodie.png";
import tee6 from "../../icons/565.png";
import tee7 from "../../icons/567.png";
import tee8 from "../../icons/c1.png";
import tee9back from "../../icons/c2back.png";
import tee9front from "../../icons/c2front.png";
import tee10back from "../../icons/c3back.png";
import tee10front from "../../icons/c3front.png";
import tee11front from "../../icons/c4front.png";
import tee11back from "../../icons/c4back.png";
import tee12 from "../../icons/c5front.png";

const Merch = () => {
  return (
    <div className="main-area-container">
      <h1 className="area-header">Merch</h1>
      <p className="merch-area-text">
      <div className="merch-container">
        <a href="https://bit.ly/2BlKlYv" rel="noopener noreferrer" target="_blank">
          <img
            className="merch-image"
            src={tee5}
            alt="1993 hoodie $23"
          />
          <p>'93 Hoodie - $23</p>
          </a>
        </div>
        <div className="merch-container">
        <a href="https://bit.ly/2YvWYZw" rel="noopener noreferrer" target="_blank">
          <img
            className="merch-image"
            src={tee8}
            alt="palm hoodie $23"
          />
          <p>Palm Canyon Hoodie - $23</p>
          </a>
        </div>
        <div className="merch-container">
          <a href="https://bit.ly/2ZTZppY" rel="noopener noreferrer" target="_blank">
          <img
            className="merch-image"
            src={tee2}
            alt="telephone tee $18"
          />
          <p>Telephone Tee - $18</p>
          </a>
        </div>
        <div className="merch-container">
        <a href="https://bit.ly/2FKOR4C" rel="noopener noreferrer" target="_blank">
          <img
            className="merch-image"
            src={tee9back}
            onMouseOver={(e) => (e.currentTarget.src = tee9front)}
            onMouseOut={(e) => (e.target.src = tee9back)}
            alt="Ghost Palms Long Sleeve Blk $24"
          />
          <p>Ghost Palm Blk Long Sleeve - $24</p>
          </a>
        </div>
        <div className="merch-container">
        <a href="https://bit.ly/32pcrMd" rel="noopener noreferrer" target="_blank">
          <img
            className="merch-image"
            src={tee10back}
            onMouseOver={(e) => (e.currentTarget.src = tee10front)}
            onMouseOut={(e) => (e.target.src = tee10back)}
            alt="Ghost Palms Long Sleeve White $24"
          />
          <p>Ghost Palm White Long Sleeve - $24</p>
          </a>
        </div>
        <div className="merch-container">
          <a href="https://teespring.com/rose-tee-1866?tsmac=store&tsmic=hellocentral-2&pid=46&cid=2755" rel="noopener noreferrer" target="_blank">
          <img
            className="merch-image"
            src={tee7}
            alt="polyester bride tee $25"
          />
          <p>Rose Tee - $18</p>
          </a>
        </div>
        <div className="merch-container">
        <a href="https://bit.ly/3aZVfAM" rel="noopener noreferrer" target="_blank">
          <img
            className="merch-image"
            src={tee11back}
            onMouseOver={(e) => (e.currentTarget.src = tee11front)}
            onMouseOut={(e) => (e.target.src = tee11back)}
            alt="Ghost Palms Long Sleeve White $24"
          />
          <p>Ghost Palm White Long Sleeve - $24</p>
          </a>
        </div>
        <div className="merch-container">
          <a href="https://bit.ly/30ECv52" rel="noopener noreferrer" target="_blank">
          <img
            className="merch-image"
            src={tee1back}
            onMouseOver={(e) => (e.currentTarget.src = tee1)}
            onMouseOut={(e) => (e.target.src = tee1back)}
            alt="Classic Tee White $25"
          />
          <p>Classic Tee White - $18</p>        
          </a>
        </div>
        <div className="merch-container">
          <a href="https://bit.ly/2ZPCegc" rel="noopener noreferrer" target="_blank">

          <img
            className="merch-image"
            src={tee3back}
            onMouseOver={(e) => (e.currentTarget.src = tee3)}
            onMouseOut={(e) => (e.target.src = tee3back)}
            alt="polyester bride tee $25"
          />
          <p>Classic Tee Black - $18</p>
                      
          </a>
        </div>
        <div className="merch-container">
          <a href="https://teespring.com/basic-tee-1206?tsmac=store&tsmic=hellocentral-2&pid=46&cid=2739" rel="noopener noreferrer" target="_blank">
          <img
            className="merch-image"
            src={tee6}
            alt="polyester bride tee $25"
          />
          <p>Basic Tee - $18</p>
          </a>
        </div>
        <div className="merch-container">
          <a href="https://bit.ly/2QmdWVC" rel="noopener noreferrer" target="_blank">
          <img
            className="merch-image"
            src={tee12}
            alt="Rose Tank - $15"
          />
          <p>Rose Tank - $15</p>
          </a>
        </div>
      </p>
    </div>
  );
};

export default Merch;
