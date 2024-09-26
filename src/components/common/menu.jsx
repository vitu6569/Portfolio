import React from "react"; 

function Menu() {
    return(
        <div id="menuSel">
            <div className="options" id="ul">
                <div className="li" id="home"><h1>Home</h1></div>
                <div className="li" id="about"><h1>About</h1></div>
                <div className="li" id="project"><h1>Projects</h1></div>
                <div className="li" id="contact"><h1>Contact</h1></div>
            </div>
        </div>
    )
}

export default Menu;