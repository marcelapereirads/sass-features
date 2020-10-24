import React, { Component } from "react";

import MenuList from "./MenuList/MenuList";
import HamburgerMenuIcon from './HamburgerMenuIcon';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showMenu: false
        }

        this.changeMenuState = this.changeMenuState.bind(this);
    }

    changeMenuState() {
        this.props.menuOpened(!this.state.showMenu);
        this.setState({ showMenu: !this.state.showMenu })
    }

    render() {
        return (
            <header className="header">
                <div className="header__hamburger" 
                    onClick={() => {
                        this.changeMenuState();                        
                    }}>
                    <HamburgerMenuIcon />
                </div>
                <nav className={ this.state.showMenu ? 'header__menu' : 'header__menu header__menu--hide' } onClick={() => {
                        this.changeMenuState();                        
                    }} >
                    <MenuList />
                </nav>
            </header>
        )
    }
}

export default Header;