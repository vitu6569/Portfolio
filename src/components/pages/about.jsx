import React from "react";
import Header from '../common/Header'
import Menu from '../common/menu'

function About() {
    return (
        <div>
            <div><Header/></div>
            <div><Menu/></div> 
            <main id="containerAbout">
                <section id="secondContainer">
                    <div id="leftContainer">
                        <h1 id="introductionTitleAbout">A<span id="transparentB">B</span>OUT</h1>
                        <p id="aboutResume">Hi, my name is João Victor and i use Vitu as my nickname across social medias. I'm a Front-end developer and 3D artist from Brazil. I also love listening to music and I’m always curious to learn more when it comes to new technologies and creative coding.</p>
                    </div>
                </section>
            </main>
        </div>
    )
    /*
        <h1 id="aboutTitle">A<span id="transparentB">B</span>OUT</h1>
        <p id="aboutResume">Hi, my name is João Victor and i use Vitu as my nickname across social medias. I'm a Front-end developer and 3D artist from Brazil. I also love listening to music and I’m always curious to learn more when it comes to new technologies and creative coding.</p>
    */
}

export default About;