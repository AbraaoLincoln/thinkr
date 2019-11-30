import React, {useState} from 'react';

function CardParticipate(props){
    const [state, setState] = useState({espcName: props.especialidade, qtdEspc: parseInt(props.qtd, 10)});
    var aux = props.qtd;
    const loadIcons = () => {
        // let div = document.getElementById("iconsParticipate");
        let iconNinja = <i class="fas fa-user-ninja fa-2x"></i>
        let iconUserFull = <i class="fas fa-user fa-2x"></i>;
        let iconUserEmpty = <i class="far fa-user fa-2x"></i>;
        let icons = []
        console.log(state.qtdEspc);
        if((state.qtdEspc) >= (aux * 10)){
            for(let i = 0; i < aux; i++){
                icons.push(iconNinja);
            }
            // div.innerHTML = icons;
            return icons;
        }else{
            for(let i = 0; i < state.qtdEspc; i++){
                icons.push(iconNinja);
            }
            // div.innerHTML = icons;
            return icons;
        }
    }

    const handleDelete = () => {
        // console.log("id inner: ", props.id);
        props.delete(props.id);
    }

    const changeEspcName = (e) => {
        let elem = e.target;
        setState({espcName: elem.value, qtdEspc: state.qtdEspc});
    }

    const showAddDeleteBtn = () => {
        let div = document.getElementById(`divTop${props.id}`);
        div.style.display = "flex";
    }

    const hiddenAddDeleteBtn = () => {
        let div = document.getElementById(`divTop${props.id}`);
        div.style.display = "none";
    }

    const addEpc = () => {
        setState({espcName: state.espc, qtdEspc: state.qtdEspc + 1});
    }

    const removeEpc = () => {
        if(state.qtdEspc > 0){
            setState({espcName: state.espc, qtdEspc: state.qtdEspc - 1})
        }
    }

    return(
        <div className="divCarP">
            {/* <h3>{props.especialidade}</h3> */}
            <input value={state.espcName} onChange={changeEspcName}/>
            <div id="iconsParticipate" onMouseOver={showAddDeleteBtn} onMouseOut={hiddenAddDeleteBtn}>
                <div id="divBottomIcons">{loadIcons()}</div>
                <div className="divTopIcons" id={`divTop${props.id}`}>
                    <i class="fas fa-minus-circle fa-2x btnRemove" id="btnR" onClick={removeEpc}></i>
                    <i class="fas fa-plus-circle fa-2x btnAdd" id="btnA" onClick={addEpc}></i>
                </div>
            </div>
            <div className="divBtnCardP">
                <div className="editOpc"><span className="spanX" onClick={handleDelete}>X</span> </div>
                <button>Quero Participar</button>
            </div>
        </div>
    )
}

export default CardParticipate;