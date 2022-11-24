import React, { Component } from "react";
import ContentContainer from "./contentContainer";
import './main.css';
import './centerContainer.css'

class CenterContainer extends Component {
    render() {
        return (
            <ContentContainer title="Kraysent's personal page" className="center-container">
                <div className="content-block">
                    Here shall be some content
                </div>

                <div className="footer info-block">
                    these are my attempts into some simple web development
                </div>
            </ContentContainer>
        )
    }
}

export default CenterContainer;