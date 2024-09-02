import React from "react";
import Header from '../common/Header'
function Home() {
    return (
        <div>
            <div><Header/></div>
            <main id="container">
                <section id="firstContainer">
                    <div id="homeContainer">
                        <h1 id="introduction">Hi! I'm <span id="name">Victor Soares</span>!</h1>
                        <p id="resume">
                            A <span id="name">Frontend Developer</span> & <span id="name">3D Artist</span>
                        </p>
                    </div>
                </section>
            </main>
        </div>
    )
};

export default Home;