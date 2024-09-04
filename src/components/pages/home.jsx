import React from "react";
import Header from '../common/Header'
function Home() {
    return (
        <div>
            <div><Header/></div>
            <main id="container">
                <section id="firstContainer">
                    <div id="homeContainer">
                        <h1 id="introduction"><span className="transparanteL">Hi! I'm</span> <span id="name">Victor Soares</span><span className="transparanteL">!</span></h1>
                        <p id="resume">
                            <span className="transparanteLTwo">A </span><span id="name">Frontend Developer</span> <span className="transparanteLTwo">& </span><span id="name">3D Artist</span>
                        </p>
                    </div>
                </section>
            </main>
        </div>
    )
};

export default Home;