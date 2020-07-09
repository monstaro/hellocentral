import React from "react";

const Pics = () => {
  return (
    <div className="main-area-container">
      <h1 className="area-header">Pixx</h1>
      <p className="area-text">
        <a
          data-flickr-embed="true"
          href="https://www.flickr.com/photos/189208467@N07/albums/72157715000772437"
          title="hellocentral"
        >
          <img
            src="https://live.staticflickr.com/65535/50085703107_d30a1081b8.jpg"
            width="500"
            height="500"
            alt="hellocentral"
          />
        </a>
        <script
          async
          src="//embedr.flickr.com/assets/client-code.js"
          charset="utf-8"
        ></script>
      </p>
    </div>
  );
};

export default Pics;
