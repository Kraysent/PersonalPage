import React, { Component } from "react";
import './contentContainer.css';

class ContentContainer extends Component {
    render() {
        var children = []
        var className = this.props.className

        if (this.props.title) {
            var titleDiv = <div className="info-block">
                {this.props.title}
            </div>

            children.push(titleDiv)
            children.push(this.props.children)
        }

        return (
            <div className={["content-container", className].join(" ")}>
                {children}
            </div>
        )
    }
}

export default ContentContainer;