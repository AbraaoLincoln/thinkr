import React from 'react';
import './style_dashboard.css';

import UserMenu from './userMenu';
import ProjectsInfo from './projectsInfo';
import MyProjects from './myProjects';

function Dashboard(props){
    return(
        <div className="mainDivDashBoard">
            <div className="divLeft">
                <UserMenu history={props.history}/>
            </div>
            <div className="divRight">
                <ProjectsInfo />
                <MyProjects />
            </div>
        </div>
    );
}

export default Dashboard;