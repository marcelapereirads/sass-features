import React, { Component } from "react";

import Item from "./MenuItem/MenuItem";

const pages = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Exemplos",
        url: "/exemplos"
    },
    {
        name: "Funcionalidades",
        url: "/funcionalidades"
    }
];

class MenuList extends Component {
    render() {
        return (
            <ul className="menu__list">
                {pages.map((page) => <Item name={page.name} url={page.url} />)}
            </ul>
        );
    }
}

export default MenuList;