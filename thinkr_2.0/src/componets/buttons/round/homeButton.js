import React from 'react';
import './style_homeButton.css';

function HomeButton(props){

    const goHome = () => {
        props.history.push("/");
    }

    return(
        <div class="divHomeBtn" onClick={goHome}>
            <i class="fas fa-home"></i>
        </div>
    )
}

export default HomeButton;