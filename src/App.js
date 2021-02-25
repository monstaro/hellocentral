import React from "react";
import HeaderContainer from "./Components/HeaderContainer/HeaderContainer";
import SiteContainer from "./Components/SiteContainer/SiteContainer";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <SiteContainer>
        <HeaderContainer />
      </SiteContainer>
    </div>
  );
}

export default App;
