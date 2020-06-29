/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "./Nav.scss";
const Nav = () => {
  return (
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/about" >about</Link>
          </li>
          //
          <li>
            <Link to="/merch">merch</Link>
          </li>
          //
          <li>
            <Link to="/music">music</Link>
          </li>
          //
          <li>
            <Link to="/pics">pics</Link>
          </li>
          //
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Nav;
