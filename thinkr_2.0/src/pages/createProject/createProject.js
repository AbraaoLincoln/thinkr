import React, {useState} from 'react';
import './style_createProject.css';
import { stat } from 'fs';

function CreateProject(props){
    const [state, setState] = useState({textAreaHeight: 30, countEnter: 0});

    const checkScrollBar = () => {
        const elem = document.getElementById("tA");
        let lines = elem.value.split('\n');
        // console.log(lines);
        console.log(lines.length);
        if(elem.clientHeight < elem.scrollHeight){
            elem.style.height = `${state.textAreaHeight}vh`;
            setState({textAreaHeight: state.textAreaHeight + 10, countEnter: state.countEnter});
        }else if(lines.length <= (state.countEnter - 1)){
            elem.style.height = `${state.textAreaHeight == 20 ? state.textAreaHeight : state.textAreaHeight - 10}vh`;
            setState({textAreaHeight: state.textAreaHeight - 10, countEnter: state.countEnter - 1});
        }
    }

    const checkKey = (e) => {
        // console.log(e.keyCode);
        if(e.keyCode == 13){
            setState({textAreaHeight: state.textAreaHeight, countEnter: state.countEnter + 1});
        }
    }

    return(
        <div className="mainDivCreateProject">
            <div className="mainPage">
                <input type="text" placeholder="Titulo" className="inputTitulo"/>
                <p>Por: User name</p>
                <section>
                    <textarea type="text" placeholder="Escreva aqui" className="inputParagraph" id="tA" onChange={checkScrollBar} onKeyDown={checkKey}/>
                </section>
            </div>
        </div>
    )
}

export default CreateProject;