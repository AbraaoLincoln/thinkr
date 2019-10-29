import React, {useEffect, useState} from 'react';
import './style_projects.css';

import ProjectResume from './projectDescription';

function Project(props){
    const [state, setState] = useState({numOfProjects: 0});
    var projectsToLoad = 8;

    const goHome = () => {
        props.history.push("/");
    }

    const goUserdashboard = () => {
        props.history.push("/dashboard");
    }

    const loadProjects = () => {
        // let display = document.querySelector(".displayPro1");
        let children = []
        let n = state.numOfProjects;
        for(let i = 0; i < projectsToLoad; i++){
            children.push(<ProjectResume id={n} />);
            n += 1;
        }
        // setState({numOfProjects: n});
        return children;
    }

    const loadMoreProjects = () => {
        console.log(projectsToLoad); 
        if(!document.body.scrollTop){
            // projectsToLoad += 1;
            // setState({numOfProjects: state.numOfProjects + 1, projects: state.projects.push(<ProjectResume id={10} />)});
        }
    }

    const t = () => {
        // setState({numOfProjects: 0, projects: loadProjects()});
        // window.addEventListener("scroll", loadMoreProjects, false);
    }

    useEffect(() => {t()});

    return(
        <div className="divMainProjetcs" onScroll={loadMoreProjects}>
            <header className="headerProjects">
                <h1 onClick={goHome}>ThinkR</h1>
                <div className="divSearch">
                    <input type="text" placeholder="nome do projeto"/>
                    <i class="fas fa-search"></i>
                </div>
                <p onClick={goUserdashboard}>User name</p>
            </header>
            <div className="mainProjetcs">
                <div className="displayProjects" id="displayPro1">
                    {loadProjects()}
                    {/* <ProjectResume id={0} /> */}
                    {/* {state.projects} */}
                </div>
            </div>
        </div>
    )
}

export default Project;