import React from "react";
import "./Merch.scss";
import merchItems from './MerchDataset';

const Merch = () => {


  const renderClothingItem = () => {
    return merchItems.map(item => {
      if (!item.backImg) {
        return <div className="merch-container">
           <a href={item.url} rel="noopener noreferrer" target="_blank">
          <img
            className="merch-image"
            src={item.frontImg}
            alt={`${item.name} - ${item.price}` }
          />
          <p>{item.name} - {item.price}</p>
          </a>
        </div>
      } else {
        return <div className="merch-container">
        <a href={item.url} rel="noopener noreferrer" target="_blank">
       <img
         className="merch-image"
         src={item.backImg}
         onMouseOver={(e) => (e.currentTarget.src = item.frontImg)}
         onMouseOut={(e) => (e.target.src = item.backImg)}
         alt={`${item.name} - ${item.price}` }
       />
       <p>{item.name} - {item.price}</p>
       </a>
     </div>
      }
    })
  }
  return (
    <div className="main-area-contaifner">
      <div className="merch-area-text">
      {renderClothingItem()}
      </div>
      {/* <h1 className="area-header">Merch</h1>
      <p className="merch-area-text">
  

        
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
      </p> */}
    </div>
  );
};

export default Merch;
