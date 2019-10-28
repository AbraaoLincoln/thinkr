import React from 'react';

function formLogin(props) {

    const handleClickEntra = () => {
        props.history.push("/dashboard");
    }

    return(
        <form className="form" method="post">
            <h2>Entrar</h2>
            <div className="divInputForm">
                <input type="text" name="email" placeholder="email" />
                <input type="text" name="senha" placeholder="senha" />
                <button onClick={handleClickEntra}>Entrar</button>
            </div>
            <p>Esqueci minha senha.</p>
        </form>
    );
}

export default formLogin;