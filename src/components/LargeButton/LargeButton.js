import React, { Component } from "react";

class LargeButton extends Component {
    render() {

        return (
            <button className="large-button">
                <a href={this.props.url} target={this.props.target}>
                    {this.props.text}
                </a>
            </button>
        );
    }
}

export default LargeButton;