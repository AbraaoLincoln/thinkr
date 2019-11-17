import React from 'react';
import './style_homepage.css';
import NavBar from '../../componets/navBar/navBar';
import MainContent from './mainContent';


function homePage(props){
    return(
        <div>
            <NavBar history={props.history}/>
            <MainContent />
        </div>
    )
}


export default homePage;