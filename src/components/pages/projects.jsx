import React from "react";
import Header from '../common/Header'
import Menu from '../common/menu'
import { Link } from "react-router-dom";
import Cards from "../common/Cards";


function Projects() {
return (
        <div>
            <div><Header/></div>
            <div><Menu/></div>
            <div id="projectContainer">
                <div id="projectDesc">
                    <div id="Project">Project</div>
                    <div id="infoDesc">
                        <div id="StatsDesc">Status</div>
                        <div id="DateDesc">Date</div>
                    </div>
                </div>
            </div>
            <div id="pjcColumn">
                <div id="pjcScroll">
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </div>
            </div>
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