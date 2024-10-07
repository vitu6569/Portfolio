import React from "react";
import Header from '../common/Header'
import Menu from '../common/menu'

function Contact() {
    return (
        <div>
            <div><Header/></div>
            <div><Menu/></div>
            <main id="containerContacts">
                <section id="secondContainer">
                        <div id="leftContainer">
                            <h1 id="introductionTitleContacts">C<span id="transparentO">o</span>ntacts</h1>
                            <div id="contacts">
                                <div>
                                    <div className="nameCont" ><p id="mail">mail</p><a href="mailto:victoralmeida6569@outlook.com" className="linkCont">victoralmeida6569@outlook.com</a></div>
                                </div>
                                <div>
                                    <p className="nameCont"><a href="https://www.instagram.com/svictpr/">Instagram</a></p>
                                </div>
                            </div>
                        </div>
                </section>
            </main>
        </div>
    )
}

export default Contact