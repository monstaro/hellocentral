import React from "react";
import "./Merch.scss";
import tee1 from "../../icons/1.png";
import tee1back from "../../icons/1back.png";
import tee2 from "../../icons/2.png";
import tee3 from "../../icons/3.png";
import tee3back from "../../icons/3back.png";
import tee4 from "../../icons/4.png";
import tee5 from "../../icons/hoodie.png";

const Merch = () => {
  return (
    <div className="main-area-container">
      <h1 className="area-header">Merch</h1>
      <p className="merch-area-text">
      <div className="merch-container">
          <img
            className="merch-image"
            src={tee5}
            alt="polyester bride tee $25"
          />
          <p>'93 Hoodie - $23</p>
        </div>
        <div className="merch-container">
          <img
            className="merch-image"
            src={tee1back}
            onMouseOver={(e) => (e.currentTarget.src = tee1)}
            onMouseOut={(e) => (e.target.src = tee1back)}
            alt="polyester bride tee $25"
          />
          <p>Classic Tee White - $18</p>
        </div>
        <div className="merch-container">
          <img
            className="merch-image"
            src={tee3back}
            onMouseOver={(e) => (e.currentTarget.src = tee3)}
            onMouseOut={(e) => (e.target.src = tee3back)}
            alt="polyester bride tee $25"
          />
          <p>Classic Tee Black - $18</p>
        </div>
        <div className="merch-container">
          <img
            className="merch-image"
            src={tee2}
            alt="polyester bride tee $25"
          />
          <p>Telephone Tee - $18</p>
        </div>
        <div className="merch-container">
          <img
            className="merch-image"
            src={tee4}
            alt="polyester bride tee $25"
          />
          <p>Rose Tee - $18</p>
        </div>
      </p>
    </div>
  );
};

export default Merch;
