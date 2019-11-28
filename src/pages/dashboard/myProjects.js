import React, { useEffect, useState} from 'react';

import ProjectInfo from './projectInfo';

function MyProjects(props){
    const [state, setState] = useState({qtdProjects: 8});

    const loadProjects = () => {
        let myProjects = [];

        for(let i = 0; i < state.qtdProjects; i++){
            myProjects.push(<ProjectInfo />);
        }
        return myProjects;
    }

    const checkScrollDiv = () => {
        if(state.qtdProjects > 9){
            // document.getElementById("div1").style.overflow = "auto";
            document.querySelector(".divMyProjects").style.overflow = "auto";
        }
    }

    useEffect(() => {checkScrollDiv()}, []);

    const isProjects = () => {
        if(state.qtdProjects > 0){
            return <div className="myProjectsGrid">
                        {loadProjects()}
                   </div>
        }else{
            return <div className="divBtnMyProjetcs">
                        <button onClick={handleClikeCreateProjects}>Criar Projeto</button>
                   </div>       
        }
    }

    const handleClikeCreateProjects = () => {
        props.history.push("/createProject");
    }

    return(
        <div className="divMyProjects">
            <h2>Meus Projetos</h2>
            {/* <div className="myProjectsGrid">
                {loadProjects()}
            </div> */}
            {isProjects()}
            {/* <div>
                {isProjects()}
            </div> */}
        </div>
    )
}

export default MyProjects;