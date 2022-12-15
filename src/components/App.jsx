import React, { Component } from "react";
import CenterContainer from "components/centerContainer";
import SideContainer from "components/sideContainer";
import EmptyContainer from "components/emptyContainer";
import LinksContainer from "components/linksContainer";

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