import React from "react";
import "./Merch.scss";
import merchItems from "./MerchDataset";

const Merch = () => {
  const renderClothingItem = () => {
    return merchItems.map((item) => {
      if (!item.backImg) {
        return (
          <div className="merch-container">
            <a href={item.url} rel="noopener noreferrer" target="_blank">
              <img
                className="merch-image"
                src={item.frontImg}
                alt={`${item.name} - ${item.price}`}
              />
              <p>
                {item.name} - {item.price}
              </p>
            </a>
          </div>
        );
      } else {
        return (
          <div className="merch-container">
            <a href={item.url} rel="noopener noreferrer" target="_blank">
              <img
                className="merch-image"
                src={item.backImg}
                onMouseOver={(e) => (e.currentTarget.src = item.frontImg)}
                onMouseOut={(e) => (e.target.src = item.backImg)}
                alt={`${item.name} - ${item.price}`}
              />
              <p>
                {item.name} - {item.price}
              </p>
            </a>
          </div>
        );
      }
    });
  };
  return (
    <div className="main-area-contaifner">
      <div className="merch-area-text">{renderClothingItem()}</div>
    </div>
  );
};

export default Merch;
