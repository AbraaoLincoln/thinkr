import React from 'react';
import lamp from '../../assets/art-artificial-intelligence-blackboard-2.jpg';

function mainContent(){
    return(
        <div className="mainContent-homepage">
            <img src={lamp} alt="lampada simbolo de ideia"/>
            <div className="text-mainContent">
                <h1>ThinkR</h1>
                <p>Um lugar para tornar suas ideias realidades.</p>
            </div>
        </div>
    )
}

export default mainContent;