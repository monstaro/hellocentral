import React from "react";
import "./Merch.scss";
import tee3back from '../../icons/tee3back.jpg'
import tee3front from '../../icons/tee3front.jpg'

const Merch = () => {
  return (
    <div className="main-area-container">
      <h1 className="area-header">Merch</h1>
      <p className="merch-area-text">
        <div className="merch-container">
          <img className="merch-image" src={tee3back} onMouseOver={e => e.currentTarget.src = tee3front} onMouseOut={e => e.target.src = tee3back} alt="polyester bride tee $25" />
        </div>
      </p>
    </div>
  );
};

export default Merch;
