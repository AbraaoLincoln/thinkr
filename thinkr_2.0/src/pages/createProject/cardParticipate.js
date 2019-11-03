import React from 'react';

function CardParticipate(props){

    const loadIcons = () => {
        let div = document.getElementById("iconsParticipate");
        let iconNinja = <i class="fas fa-user-ninja fa-2x"></i>
        let iconUserFull = <i class="fas fa-user fa-2x"></i>;
        let iconUserEmpty = <i class="far fa-user fa-2x"></i>;
        let icons = []
        for(let i = 0; i < props.qtd; i++){
            icons.push(iconNinja);
        }
        // div.innerHTML = icons;
        return icons;
    }

    return(
        <div className="divCarP">
            <h3>{props.especialidade}</h3>
            <div id="iconsParticipate">
                {loadIcons()}
            </div>
            <button>Quero Participar</button>
        </div>
    )
}

export default CardParticipate;