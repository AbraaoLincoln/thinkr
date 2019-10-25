import React, { useEffect } from 'react';
import './style_login.css';

import Background from './backgroundLogin';
import Form from './loginForm';
import Join from './joinButton';
import OptionLogin from './optionLogin';

function Login(){

    const faidInMenu = () => {
        setTimeout(startFad, 1000);
    }

    const startFad = () => {
        // document.querySelector(".mainContentLogin").style.transform = "scale(1)";
        document.querySelector(".innerClassBottom").style.transition = "none"; 
    }

    // useEffect(faidInMenu, []);

    return(
        <div className="mainDiv">
            <Background />
            <div id="mainContLogin" className="mainContentLogin">
                <div className="formButtonJoin">
                    <Form />
                    <Join />
                </div>
                <OptionLogin />
            </div>
        </div>
    );
}

export default Login;