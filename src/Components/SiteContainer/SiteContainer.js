import React from "react";
import "./SiteContainer.scss";
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import { Route, Switch } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";
import Merch from "../Merch/Merch";

import Footer from "../Footer/Footer";

export const SiteContainer = () => {
  return (
    <div className="site-container">
      <HeaderContainer />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/merch" component={Merch} />

        <Route path="/" component={Home} />
      </Switch>
     <Footer />
    </div>
  );
};

export default SiteContainer;
