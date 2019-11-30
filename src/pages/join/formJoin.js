import React from 'react';

export default JoinForm => {
    return(
        <form action="" method="post" name="formJoin" className="formJoin">
                <div className="divPart divPartExpt">
                    <label htmlFor="nomeUsuario">Nome de Usuario:</label>
                    <input type="text" className="" placeholder="nome"/>
                </div>
                <div className="divPart">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" className="" placeholder="nome"/>
                    <label htmlFor="nome">Sobrenome:</label>
                    <input type="text" className="" placeholder="sobrenome"/>
                </div>
                <div className="divPart">
                    <label htmlFor="nome">E-mail:</label>
                    <input type="text" className="" placeholder="email"/>
                    <label htmlFor="nome">Confirmar email:</label>
                    <input type="text" className="" placeholder="confirmar email"/>
                </div>
                <div className="divPart">
                    <label htmlFor="nome">Senha:</label>
                    <input type="text" className="" placeholder="senha"/>
                    <label htmlFor="">Confirma senha:</label>
                    <input type="text" className="" placeholder="senha novamente"/>
                </div>
            <button className="btnCadastrar" >Criar Conta</button>
        </form>
    );
}