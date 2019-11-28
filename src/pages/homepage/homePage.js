import React from 'react';
import './style_homepage.css';
import NavBar from '../../componets/navBar/navBar';
import MainContent from './mainContent';
import ConceptModel from './conceptModel';


function homePage(props){
    return(
        <div>
            <NavBar history={props.history}/>
            <MainContent />
            <ConceptModel />
            <footer className="footerHomepage"><p>ThinkR &copy; 2019</p></footer>
        </div>
    )
}


export default homePage;