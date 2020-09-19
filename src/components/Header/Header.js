import React, { Component } from "react";

import MenuList from "./MenuList/MenuList";

class Header extends Component {
    render() {

        return (
            <header className="header">
                <nav className="header__menu">
                    <MenuList />
                </nav>
            </header>
        )
    }
}

export default Header;