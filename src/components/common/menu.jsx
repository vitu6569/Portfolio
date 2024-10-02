import React from "react"; 
import { Link } from "react-router-dom";

function Menu() {
    return(
        <div id="menuSel">
            <div className="options" id="ul">
                <div className="li" id="home"><Link to="/"><h1>Home</h1></Link></div>
                <div className="li" id="about"><Link to="/about"><h1>About</h1></Link></div>
                <div className="li" id="project"><Link to="/projects"><h1>Projects</h1></Link></div>
                <div className="li" id="contact"><Link to="/contacts"><h1>Contact</h1></Link></div>
            </div>
        </div>
    )
}

export default Menu;