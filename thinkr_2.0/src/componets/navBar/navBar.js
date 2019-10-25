import React from 'react'
import './style_navBar.css'


function navBar(props){

    const handleEntar = () => {
        props.history.push("/login")
    }

    const handleCadastrar = () => {
        props.history.push("/join")
    }

    return(
        <div>
            <header className="headerNavBar">
                <h1>ThinkR</h1>
                <nav className="main-navbar">
                    <ul>
                        <li onClick={handleEntar}><span className="span-navabar">Entrar</span></li>
                        <li onClick={handleCadastrar}><span className="span-navabar">Cadastra-se</span></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}


export default navBar;