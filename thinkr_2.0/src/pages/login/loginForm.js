import React, { useState } from 'react';

function FormLogin(props) {

    const [state, setState] = useState({email: "", password: "senha"});

    const updateState = (event) => {
        let inputValue = event.target.value;
        let regexEmail = /^\w+[.-]?\w+?@[A-Za-z]+\.com$/;
        let regexEmailBr = /^\w+[.-]?\w+?@[A-Za-z]+\.com.br$/;
        setState({email: inputValue, password: "senha"});
        // console.log(input);
        if(regexEmail.test(inputValue) || regexEmailBr.test(inputValue)){
            // console.log("email certo");
            document.getElementById("email").style.outlineColor = "#124E78"
        }else{
            // console.log("email errado");
            document.getElementById("email").style.outlineColor = "#BD1E1E"
        }
    }

    const handleClickEntra = () => {
        props.history.push("/dashboard");
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