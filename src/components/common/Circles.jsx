import React from "react";

function Circles() {

    function menuInp() {
        // usar essa variavel dps
        // const menuCont = document.getElementById("menuButton");
        const html = document.documentElement;
        const currentState = html.classList.contains("on") ? "" : "on";
                
        localStorage.setItem("state", currentState);
        html.className = currentState;
    
        if (currentState === "on") {
            
        } else {

        }
    }

    return (
        <div id="menuButton">
            <button id="circlesGroups" onClick={menuInp}>
                <div id="circlesGrid">
                    <span className="candyBox circleOne"></span>
                    <span className="candyBox circleTwo" id="topcircle"></span>
                    <span className="candyBox circleThree"></span>
                    <span className="candyBox circleFour" id="leftcircle"></span>
                    <span className="candyBox circleFive"></span>
                    <span className="candyBox circleSix" id="rightcircle"></span>
                    <span className="candyBox circleSeven"></span>
                    <span className="candyBox circleEight" id="bottomcircle"></span>
                    <span className="candyBox circleNine"></span>
                </div>
            </button>
        </div>
    )
};

export default Circles;