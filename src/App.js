import React from "react";
import { Route, Router } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import HeaderContainer from "./Components/HeaderContainer/HeaderContainer";
import Merch from "./Components/Merch/Merch";
import Music from "./Components/Music/Music";
import Pics from "./Components/Pics/Pics";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <HeaderContainer />
      {/* <Router basename='/' > */}
      <Route path="/about" exact component={About} />
      <Route path="/merch" exact component={Merch} />
      <Route path="/music" exact component={Music} />
      <Route path="/pics" exact component={Pics} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/"  exact component={Home} />
      {/* </Router> */}
      <Footer />
    </div>
  );
}

export default App;
