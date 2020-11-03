import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MenuItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isRouteActivated: false
        }

        this.activateRoute = this.activateRoute.bind(this);
    }

    activateRoute() {
        if (!this.state.isRouteActivated && this.state.test) {
            this.setState({isRouteActivated: true});
        }
    }

    render() {
        return (
            <li className={ this.state.isRouteActivated ? "menu__item route__active" : "menu__item" }>
                    <NavLink exact to={this.props.url} isActive={() => { 
                        this.activateRoute();
                    }}>
                        {this.props.name}
                    </NavLink>
            </li>
        );
    }
}

export default MenuItem;