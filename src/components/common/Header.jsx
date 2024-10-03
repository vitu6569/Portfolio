import React from "react";
import Circles from "./Circles";
import Toggle from "./toggle"

function Header() {
    return (
        <header id="headerMain">
             <a href="../pages/home">
                <h1 id="nameABV">VTS.</h1>
            </a>
            <div id="group">
                <Toggle/>
                <Circles/>     
            </div>
        </header>
    )
};

export default Header;