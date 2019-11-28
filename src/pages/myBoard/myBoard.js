import React from 'react';
import './style_myBorad.css';
import ProjectRecuit from './projectRecuit';

function MyBoard(props){

    const goHome = () => {
        props.history.push("/");
    }

    const goUserdashboard = () => {
        props.history.push("/dashboard");
    }

    const loadProjectBoard = () => {
        let projects = []

        for(let i = 0 ; i < 30; i++){
            projects.push(<ProjectRecuit />);
        }

        return projects;
    }

    return(
        <div>
            <header className="headerProjects">
                <h1 onClick={goHome}>ThinkR</h1>
                <p onClick={goUserdashboard} id="useNameProject">User name</p>
            </header>
            <div className="mainDivMyBoard">
                {/* <div className="divtest">
                    <p>asdasdasdasdsda</p>
                </div> */}
                {loadProjectBoard()}
            </div>
        </div>
    )
}

export default MyBoard;