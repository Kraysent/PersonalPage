import React, { Component } from "react";
import ContentContainer from "components/contentContainer";
import "components/linksContainer.css";
import gh from "images/github-dark-theme.png";
import linkedin from "images/linkedin-dark-theme.png";
import openInNewTab from "commons";

class LinksContainer extends Component {
    render() {
        var links = [
            ["GitHub", "https://github.com/Kraysent", gh],
            ["LinkedIn", "https://www.linkedin.com/in/kraysent/", linkedin]
        ]

        var children = []

        for (let [service, link, pic] of links) {
            children.push(
                <li className="list-element"
                    onClick={function () { openInNewTab(link) }}
                    key={service}>
                    <img src={pic} className="icon" alt={service} />{service}
                </li>
            )
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
