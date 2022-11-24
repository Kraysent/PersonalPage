import React, { Component } from "react";
import CenterContainer from "./centerContainer";
import SideContainer from "./sideContainer";
import EmptyContainer from "./emptyContainer";
import LinksContainer from "./linksContainer";

class App extends Component {
    render() {
        return (
            <div className="global-container">
                <SideContainer>
                    <EmptyContainer flex="1"></EmptyContainer>
                    <LinksContainer></LinksContainer>
                    <EmptyContainer flex="1"></EmptyContainer>
                </SideContainer>
                <CenterContainer />
                <SideContainer/>
            </div>
        )
    }
}

export default App;