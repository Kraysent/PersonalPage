import React, { Component } from "react";
import 'components/main.css';

class EmptyContainer extends Component {
    render() {
        return (
            <div className="empty-container" style={{flex: this.props.flex}}></div>
        )
    }
}

export default EmptyContainer;