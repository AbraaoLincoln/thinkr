import React from 'react';
import './style_dashboard.css';

import UserMenu from './userMenu';

function Dashboard(props){
    return(
        <div className="mainDivDashBoard">
            <div className="divLeft">
                <UserMenu history={props.history}/>
            </div>
            <div className="divRight">

            </div>
        </div>
    );
}

export default Dashboard;