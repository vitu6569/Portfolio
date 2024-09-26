import React from "react";

function Toggle() {
    function handleClick() {
        const switchCont = document.getElementById("switch");
        const body = document.body;
        const currentTheme = body.classList.contains("light") ? "dark" : "light";
        
        localStorage.setItem("theme", currentTheme);
        body.className = currentTheme;
    
        if (currentTheme === "light") {
            switchCont.style.animation = "fall-in 1.5s forwards";
        } else {
            switchCont.style.animation = "fall-back 1.5s forwards";
        }
    }

    return (
        <div id="switch">
            <button onClick={handleClick}>
            </button>
            <span></span>
        </div>
    )
}

export default Toggle;