import React from "react";
import "./SiteContainer.scss";
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import { Route, Switch } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";
import Music from "../Music/Music";
import Footer from "../Footer/Footer";
import Merch from "../Merch/Merch";
import Pics from "../Pics/Pics";
import Contact from "../Contact/Contact";

export const SiteContainer = () => {
  return (
    <div className="site-container">
      <HeaderContainer />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/merch" component={Merch} />
        <Route path="/music" component={Music} />
        <Route path="/pics" component={Pics} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
};

export default SiteContainer;
