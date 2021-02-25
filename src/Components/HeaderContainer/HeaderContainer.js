import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./HeaderContainer.scss";

const HeaderContainer = () => {
  let colors = ["yellow", "pink", "teal", "white", "green"];
  let randomNumber = Math.floor(Math.random() * Math.floor(colors.length));
  const currentColor = colors[randomNumber];

  return (
    <div className="header-container">
      <Logo color={currentColor} />
      <Nav color={currentColor} />
    </div>
  );
};

export default HeaderContainer;
