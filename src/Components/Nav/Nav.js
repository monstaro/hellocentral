/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const [activeClass, setActiveClass] = useState(null);
  const getClassName = (section) => {
    if (activeClass === section) {
      return "active";
    } else {
      return "inactive";
    }
  };
  window.onpopstate = function () {
    let url = window.location.href.split("/");
    if (url[url.lenth - 1] !== "/") {
      setActiveClass(url[url.length - 1]);
    } else {
      setActiveClass(url[url.length - 2]);
    }
    //rewrite to work with .live when site is live
  };
  window.onload = function () {
    let url = window.location.href.split("/");
    if (url[url.lenth - 1] !== "/") {
      setActiveClass(url[url.length - 1]);
    } else {
      setActiveClass(url[url.length - 2]);
    }
    //rewrite to work with .live when site is live
  };
  return (
    <nav className="nav-links">
      <ul>
        <li>
          <Link
            to="/about"
            className={getClassName("about")}
            onClick={() => setActiveClass("about")}
          >
            about
          </Link>
        </li>
        <li>
          <Link
            to="/merch"
            className={getClassName("merch")}
            onClick={() => setActiveClass("merch")}
          >
            merch
          </Link>
        </li>
        <li>
          <Link
            to="/music"
            className={getClassName("music")}
            onClick={() => setActiveClass("music")}
          >
            music
          </Link>
        </li>
        <li>
          <Link
            to="/pics"
            className={getClassName("pics")}
            onClick={() => setActiveClass("pics")}
          >
            pics
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={getClassName("contact")}
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
