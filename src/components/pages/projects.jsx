import React from "react";
import Header from '../common/Header'
import Menu from '../common/menu'
import { Link } from "react-router-dom";

const projects = [1, 2, 3, 4, 5]

function Projects() {
    return (
        <div>
            <div><Header/></div>
            <div><Menu/></div>
            <div className="flex flex-col gap-2">
                {projects.map((project) => (
                    <Link key={project} to={`/projects/${project}`}>
                        project {project}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Projects;