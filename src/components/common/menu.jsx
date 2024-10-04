import React from "react"; 
import { Link } from "react-router-dom";

function Menu() {
    function closeMenu() {
        const html = document.documentElement
        const menuState = html.classList.contains("on") ? "" : "off"

        localStorage.setItem("state", menuState);
        html.className = menuState;
    }
    
    return(
        <div id="menuSel">
            <div className="options" id="ul">
                <div className="li" id="home"><Link to="/" onClick={closeMenu}><h1>Home</h1></Link></div>
                <div className="li" id="about"><Link to="/about" onClick={closeMenu}><h1>About</h1></Link></div>
                <div className="li" id="project"><Link to="/projects" onClick={closeMenu}><h1>Projects</h1></Link></div>
                <div className="li" id="contact"><Link to="/contacts" onClick={closeMenu}><h1>Contact</h1></Link></div>
            </div>
        </div>
    )
}

export default Menu;