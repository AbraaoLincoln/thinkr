import React, {useState} from 'react';
import './style_createProject.css';

import CardParticipate from './cardParticipate';
import CardCreate from './cardParticipateForm';

function CreateProject(props){
    const [state, setState] = useState({textAreaHeight: 30, countEnter: 0});
    const [stateList, setStateLis] = useState({qtd: 0, list: []});

    const goHome = () => {
        props.history.push("/");
    }

    const goUserdashboard = () => {
        props.history.push("/dashboard");
    }

    const checkScrollBar = () => {
        const elem = document.getElementById("tA");
        let lines = elem.value.split('\n');
        // console.log(lines);
        console.log(lines.length);
        console.log(elem.scrollHeight)
        if(elem.clientHeight < elem.scrollHeight){
            elem.style.height = `${elem.scrollHeight}px`;
            setState({textAreaHeight: state.textAreaHeight + 10, countEnter: state.countEnter});
        }else if(lines.length <= (state.countEnter - 1)){
            elem.style.height = `${elem.scrollHeight - 30}px`;
            setState({textAreaHeight: state.textAreaHeight - 10, countEnter: state.countEnter - 1});
        }
    }

    const checkKey = (e) => {
        // console.log(e.keyCode);
        if(e.keyCode == 13){
            setState({textAreaHeight: state.textAreaHeight, countEnter: state.countEnter + 1});
        }
    }

    const update = (newItemList) => {
        let newList = stateList.list;
        newList.push(<CardParticipate especialidade={newItemList.espc} qtd={newItemList.qtd}/>)
        if((stateList.qtd + 1) >= 3){
            let h = document.querySelector(".divListRequire").clientHeight;
            document.querySelector(".divListRequire").style.height = `${h + 20}%`
        }
        setStateLis({qtd: stateList.qtd + 1, list: newList});
    }

    const genereteListRequire = () => {
        let cards = []
        // cards.push(<CardParticipate />)
        for(let i = 0; i < stateList.qtd; i++){
            console.log("dsasdasd")
            cards.push(stateList.list[i]);
        }
        cards.push(<CardCreate setStateFather={update}/>)
        return cards;
    }


    return(
        <div>
            <header className="headerProjects">
                <h1 onClick={goHome}>ThinkR</h1>
                <p onClick={goUserdashboard}>User name</p>
            </header>
            <div className="mainDivCreateProject">
                <div className="mainPage">
                    <input type="text" placeholder="Titulo" className="inputTitulo"/>
                    <p>Por: User name</p>
                    <section>
                        <textarea type="text" placeholder="Escreva aqui" className="inputParagraph" id="tA" onChange={checkScrollBar} onKeyDown={checkKey}/>
                    </section>
                </div>
                <div className="divListRequire">
                    <h1>Especialistas</h1>
                    {genereteListRequire()}
                </div>
            </div>
        </div>
    )
}

export default CreateProject;