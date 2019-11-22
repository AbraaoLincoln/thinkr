import React, { useState } from 'react';

function FormLogin(props) {

    const [state, setState] = useState({email: "", password: "senha", loginForm: true});

    const updateState = (event) => {
        let inputValue = event.target.value;
        let regexEmail = /^\w+[.-]?\w+?@[A-Za-z]+\.com$/;
        let regexEmailBr = /^\w+[.-]?\w+?@[A-Za-z]+\.com.br$/;
        setState({email: inputValue, password: "senha"});

        if(regexEmail.test(inputValue) || regexEmailBr.test(inputValue)){
            document.getElementById("email").style.outlineColor = "#124E78"
        }else{
            document.getElementById("email").style.outlineColor = "#BD1E1E"
        }
    }

    const handleClickEntra = () => {
        props.history.push("/dashboard");
    }

    const showForm = () => {
        if(state.loginForm){
            return  <form className="form" method="post">
                        <h2>Entrar</h2>
                        <div className="divInputForm">
                            <input type="text" name="email" placeholder="email" value={state.email} onChange={updateState} id="email"/>
                            <input type="password" name="senha" placeholder="senha" />
                            <button onClick={handleClickEntra}>Entrar</button>
                        </div>
                        <p>Esqueci minha senha.</p>
                    </form>
        }
    }

    return(
        <form className="form" method="post">
            <h2>Entrar</h2>
            <div className="divInputForm">
                <input type="text" name="email" placeholder="email" value={state.email} onChange={updateState} id="email"/>
                <input type="password" name="senha" placeholder="senha" />
                <button onClick={handleClickEntra}>Entrar</button>
            </div>
            <p>Esqueci minha senha.</p>
        </form>
    );
}

export default FormLogin;