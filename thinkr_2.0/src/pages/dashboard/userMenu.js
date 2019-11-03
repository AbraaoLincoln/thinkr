import React, { useEffect } from 'react';
import UserImage from './userImage';

function UserMenu(props){

    const setUserStar = () => {
        let userDivStar = document.getElementById("userStar");
        let fullStar = '<i class="fas fa-star fa-2x"></i>';
        let halfStar = '<i class="fas fa-star-half-alt fa-2x"></i>';
        let emptyStar = '<i class="far fa-star fa-2x"></i>';
        let finalStars = fullStar + fullStar + halfStar + emptyStar + emptyStar;
        userDivStar.innerHTML = finalStars;
    }

    useEffect(() => {
        setUserStar();
    });

    const handleClikeBprojects = () => {
        props.history.push("projects");
    }

    const handleClikeCreateProjects = () => {
        props.history.push("/createProject");
    }

    return(
        <div className="divUserMenu">
            <div className="divUserInfo">
                <UserImage />                
                <p>Fulano Cicrano</p>
                <div className="userStars" id="userStar">
                </div>
            </div>
            <div className="dashboardUserMenu">
                <div className="dashboardUserMenuBtn">
                    <button>Perfil</button>
                    <button onClick={handleClikeCreateProjects}>Criar Projeto</button>
                    <button onClick={handleClikeBprojects}>Buscar Projetos</button>
                    <button>Configurações</button>
                </div>
            </div>
        </div>
    );
}

export default UserMenu;