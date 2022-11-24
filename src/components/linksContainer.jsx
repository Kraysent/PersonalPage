import React, { Component } from "react";
import ContentContainer from "./contentContainer";
import "./linksContainer.css";
import gh from "./images/github-dark-theme.png";

class LinksContainer extends Component {
    render() {
        var links = {
            "GitHub": ["https://github.com/Kraysent", gh]
        }

        var children = []

        for (let [service, [link, pic]] of Object.entries(links)) {
            children.push(<li>
                <a href={link} target="_blank" className="link">
                    <img src={pic} className="icon"/>{service}
                </a>
            </li>)
        }

        return (
            <ContentContainer title="links" className="links-container">
                <ul className="links-list">
                    {children}
                </ul>
            </ContentContainer>
        )
    }
}

export default LinksContainer;
