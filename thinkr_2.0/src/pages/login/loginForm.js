import React from 'react';

export default formLogin => {
    return(
        <form className="form" method="post">
            <h2>Entrar</h2>
            <div className="divInputForm">
                <input type="text" name="email" placeholder="email" />
                <input type="text" name="senha" placeholder="senha" />
                <button>Entrar</button>
            </div>
            <p>Esqueci minha senha.</p>
        </form>
    );
}