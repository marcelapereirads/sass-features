import React, { Component } from "react";

import MenuList from "./MenuList/MenuList";
import HamburgerMenuIcon from './HamburgerMenuIcon';

class Header extends Component {   

    render() {

        return (
            <header className="header">
                <div className="header__hamburger" >
                    <HamburgerMenuIcon />
                </div>
                <nav className="header__menu" >
                    <MenuList />
                </nav>
            </header>
        )
    }
}

export default Header;