import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import './HeaderContainer.scss';

const HeaderContainer = () => {
    return (
        <div className="header-container">
        <Logo />
        <Nav />
        </div>
    )
}

export default HeaderContainer;