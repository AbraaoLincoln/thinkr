import React from 'react';
import './style_login.css';

import Background from './backgroundLogin';
import Form from './loginForm';
import Join from './joinButton';
import OptionLogin from './optionLogin';
import HomeBtn from './btnHome/homeButton';

function Login(props){
    return(
        <div style={{width: "100vw", height: "100vh"}}>
            <div className="mainDiv">
                <Background />
                <div id="mainContLogin" className="mainContentLogin">
                    <div className="formButtonJoin">
                        <Form />
                        <Join history={props.history}/>
                    </div>
                    <OptionLogin />
                </div>
            </div>
            <div className="divBtnHome">
                <HomeBtn history={props.history} />
            </div>
        </div>
    );
}

export default Login;