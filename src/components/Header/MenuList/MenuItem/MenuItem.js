import React, { Component } from "react";
import { Link } from "react-router-dom";

class MenuItem extends Component {
    render() {
        return (
            <li className="menu__item">
                    <Link to={this.props.url}>
                        {this.props.name}
                    </Link>
            </li>
        );
    }
}

export default MenuItem;