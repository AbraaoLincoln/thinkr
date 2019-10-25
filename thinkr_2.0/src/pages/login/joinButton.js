import React from 'react';

 
function joinSection(props) {

    const handleClick = () => {
        props.history.push("/join");
    }

    return(
        <div className="joinSection">
            <p>Ainda não faz parte do ThinkR ?</p>
            <button onClick={handleClick}>Cadastra-se</button>
        </div>
    )
}

export default joinSection;