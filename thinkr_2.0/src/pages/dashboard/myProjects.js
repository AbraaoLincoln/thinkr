import React from 'react';

import ProjectInfo from './projectInfo';

function MyProjects(props){

    const loadProjects = () => {
        let myProjects = []
        for(let i = 0; i < 8; i++){
            myProjects.push(<ProjectInfo />);
        }
        return myProjects;
    }

    return(
        <div className="divMyProjects">
            <h2>Meus Projetos</h2>
            <div className="myProjectsGrid">
                {loadProjects()}
            </div>
        </div>
    )
}

export default MyProjects;