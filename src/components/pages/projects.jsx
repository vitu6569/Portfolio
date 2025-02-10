import React, {useState} from "react";
import Header from '../common/Header'
import Menu from '../common/menu'

function CustomCard({ children }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`cardDesign ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ transform: isHovered ? 'scale(1)' : 'scale(0.99)',  backgroundColor: isHovered ? "var(--surface-color)" : ""}}
        >
            {children}
        </div>
    );
}

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
                                <a href="https://vitu6569.github.io/Age-App-Calculate/" target="blank">                            
                                    <CustomCard className="cardDesign start">
                                        <h1 className="title" id="ageApp">Age-App-Calculator</h1>
                                        <p className="status"><span className="colorStatus on"></span>Status</p>
                                    </CustomCard>
                                </a>
                                <CustomCard className="cardDesign mid">
                                    <h1 className="title">Coming soon</h1>
                                    <p className="status"><span className="colorStatus"></span>Status</p>
                                </CustomCard>
                                <CustomCard className="cardDesign mid">
                                    <h1 className="title">Coming soon</h1>
                                    <p className="status"><span className="colorStatus"></span>Status</p>
                                </CustomCard>
                                <CustomCard className="cardDesign mid">
                                    <h1 className="title">Coming soon</h1>
                                    <p className="status"><span className="colorStatus"></span>Status</p>
                                </CustomCard>
                                <CustomCard className="cardDesign mid">
                                    <h1 className="title">Coming soon</h1>
                                    <p className="status"><span className="colorStatus"></span>Status</p>
                                </CustomCard>
                                <CustomCard className="cardDesign end">
                                    <h1 className="title">Coming soon</h1>
                                    <p className="status"><span className="colorStatus"></span>Status</p>
                                </CustomCard>
                            </div>
                        </div>
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