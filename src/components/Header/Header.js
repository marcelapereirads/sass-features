import React, { Component } from "react";

import MenuList from "./MenuList/MenuList";
import HamburgerMenuIcon from './HamburgerMenuIcon';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showMenu: false
        }

        this.emitOpenEvent = this.emitOpenEvent.bind(this);
    }

    setShowMenu() {
        this.setState({showMenu: !this.state.showMenu});
    }

    emitOpenEvent() {
        this.props.menuOpened(!this.state.showMenu);
    }

    render() {
        return (
            <header className="header">
                <div className="header__hamburger" 
                    onClick={() => {
                        this.emitOpenEvent()
                        this.setState({ showMenu: !this.state.showMenu });                        
                    }}>
                    <HamburgerMenuIcon />
                </div>
                <nav className={ this.state.showMenu ? 'header__menu' : 'header__menu header__menu--hide' } >
                    <MenuList />
                </nav>
            </header>
        )
    }
}

export default Header;