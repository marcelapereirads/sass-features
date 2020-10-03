import React, { Component } from "react";

class HamburgerMenuIcon extends Component {
    render() {

        return (
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="4" rx="5" fill="#fff" />
                <rect width="30" height="4" rx="5" y="12" fill="#fff" />
                <rect width="30" height="4" rx="5" y="24" fill="#fff" />
            </svg>
        )
    }
}

export default HamburgerMenuIcon;