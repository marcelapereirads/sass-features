import React, { Component } from "react";

class CodeViewer extends Component {
    render() {
        return (
            <pre className={this.props.className}>
                <div className="code__title">
                    {this.props.title}
                </div>
                <p>
                    {this.props.children}
                </p>
            </pre>
        );
    }
}

export default CodeViewer;