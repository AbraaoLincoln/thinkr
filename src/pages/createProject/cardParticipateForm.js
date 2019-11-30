import React, {useState, useEffect} from 'react';

function CardParticipateForm(props){
    const [state, setState] = useState({buttonPlus: true});
    var qtd = null;
    const toggleButton = () => {
        setState({buttonPlus: !state.buttonPlus});
    }

    const showForm = () => {
        return <form className="formCreate">
                    <input type="text" id="espName" placeholder="nome da especialidade"/>
                    <input type="number" id="espQtd" placeholder="quantidade"/>
                    <button onClick={addEpc}>Criar</button>
                </form>
    }

    const addEpc = () => {
        let newEspc = {
            espc: document.getElementById("espName").value,
            qtd: document.getElementById("espQtd").value
        }
        props.setStateFather(newEspc);
    }

    return(
        <div className="divCarCreate">
            {state.buttonPlus ? <button id="btnPlus" onClick={toggleButton}><i class="fas fa-plus"></i></button> : showForm()}
            {/* <button onClick={toggleButton}><i class="fas fa-plus"></i></button> */}
        </div>
    )
}

export default CardParticipateForm;