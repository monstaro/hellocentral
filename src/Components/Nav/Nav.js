/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = ({ color }) => {
  const [activeClass, setActiveClass] = useState(null);
  const getClassName = (section) => {
    if (activeClass === section) {
      return `active-nav ${color}`;
    } else {
      return "inactive";
    }
  };
  window.onpopstate = function () {
    let url = window.location.href.split("/");
    setActiveClass(url[url.length - 1]);
  };
  window.onload = function () {
    let url = window.location.href.split("/");
    setActiveClass(url[url.length - 1]);
  };

  return (
    <nav className="nav-links">
      <ul>
        <li>
          <Link
            to="/about"
            className={getClassName("about") + " headlink"}
            onClick={() => setActiveClass("about")}
          >
            about
          </Link>
        </li>
        <li>
          <Link
            to="/merch"
            className={getClassName("merch") + " headlink"}
            onClick={() => setActiveClass("merch")}
          >
            merch
          </Link>
        </li>
        <li>
          <Link
            to="/music"
            className={getClassName("music") + " headlink"}
            onClick={() => setActiveClass("music")}
          >
            music
          </Link>
        </li>
        <li>
          <Link
            to="/pics"
            className={getClassName("pics") + " headlink"}
            onClick={() => setActiveClass("pics")}
          >
            pics
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={getClassName("contact") + " headlink"}
            onClick={() => setActiveClass("contact")}
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
