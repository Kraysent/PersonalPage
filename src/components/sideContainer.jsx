import React, { Component } from "react";
import './main.css';

class SideContainer extends Component {
    render() {
        return (
            <div className="side-container">{this.props.children}</div>
        )
    }
}

export default SideContainer;