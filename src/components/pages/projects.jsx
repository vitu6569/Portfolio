import React from "react";
import Header from '../common/Header'
import Menu from '../common/menu'
import { Link } from "react-router-dom";


function Projects() {
return (
        <div>
            <div><Header/></div>
            <div><Menu/></div>
        
            <main id="mainContainer">
                <nav>         
                    <div id="nameProjects">
                        <div id="headerProjects">
                            <div id="titleProjects">
                                <h1>projects</h1>
                                <h1 id="number">1</h1>
                            </div>
                        </div>
                        <div id="cardNames">
                            <div className="cardDesign start"></div>
                            <div className="cardDesign mid"></div>
                            <div className="cardDesign mid"></div>
                            <div className="cardDesign mid"></div>
                            <div className="cardDesign mid"></div>
                            <div className="cardDesign end"></div>
                        </div>
                    </div>
                    <div id="imagesPojects"></div>
                </nav>
            </main>
        </div>
    )
}

/*
const projects = [1, 2, 3, 4, 5]
<div className="flex flex-col gap-2">
    {projects.map((project) => (
        <Link key={project} to={`/projects/${project}`}>
            project {project}
        </Link>
    ))}
</div>
*/
export default Projects;