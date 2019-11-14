import React, {useState} from 'react';
import './style_createProject.css';

import CardParticipate from './cardParticipate';
import CardCreate from './cardParticipateForm';

function CreateProject(props){
    const [state, setState] = useState({textAreaHeight: 100, countEnter: 0});
    const [stateList, setStateList] = useState({qtd: 0, list: [], id: 0});
    // const [stateId, setStateId] = useState({id: 0});
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
            document.querySelector(".mainPage").style.height = `${state.textAreaHeight}%`
            setState({textAreaHeight: state.textAreaHeight + 4, countEnter: state.countEnter});
        }else if(lines.length <= (state.countEnter - 1)){
            elem.style.height = `${elem.scrollHeight - 30}px`;
            if(state.textAreaHeight > 100){
                document.querySelector(".mainPage").style.height = `${state.textAreaHeight - 3}%`;
                setState({textAreaHeight: state.textAreaHeight - 4, countEnter: state.countEnter - 1});
            }else{
                document.querySelector(".mainPage").style.height = `${state.textAreaHeight}%`;
            }
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
        newList.push({
            component: <CardParticipate especialidade={newItemList.espc} qtd={newItemList.qtd} delete={deleteCard} id={stateList.id}/>,
            id: stateList.id
            }
        )
        if((stateList.qtd + 1) >= 3){
            let h = document.querySelector(".divListRequire").clientHeight;
            document.querySelector(".divListRequire").style.height = `${h + 20}%`
        }
        setStateList({qtd: stateList.qtd + 1, list: newList, id: stateList.id + 1});
        console.log("qtd b: ", stateList.qtd);
        // setStateId({id: stateId.id + 1});
    }

    const deleteCard = (id) => {
        let newList = stateList.list;
        console.log(newList.length);
        // newList = newList.filter(
        //     (comp) => {
        //         console.log("id comp: ", comp.id)
        //         if(comp.id === id){
        //             console.log("id comp: ", comp.id)
        //             return false;
        //         }
        //         return false;
        //     }
        // )
        // let h = newList[0]
        // console.log("h: ", h.id)
        let newStateList = []
        for(let i = 0; i < newList.length; i++){
            let comp = newList[i];
            if(!(comp.id === id)){
                newStateList.push(comp);
            }
        }
        console.log("NSL: ", newStateList.length);
        console.log("qtd:", stateList.qtd)
        setStateList({qtd: newStateList.length, list: newStateList, id: stateList.id});
    }

    const genereteListRequire = () => {
        let cards = []
        // cards.push(<CardParticipate />)
        console.log("chamou", stateList.list.length);
        for(let i = 0; i < stateList.list.length; i++){
            cards.push(stateList.list[i].component);
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
                    {/* <section>
                        <textarea type="text" placeholder="Escreva aqui" className="inputParagraph" id="tA" onChange={checkScrollBar} onKeyDown={checkKey}/>
                    </section> */}
                    <textarea type="text" placeholder="Escreva aqui" className="inputParagraph" id="tA" onChange={checkScrollBar} onKeyDown={checkKey}/>
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