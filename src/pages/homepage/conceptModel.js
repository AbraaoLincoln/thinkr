import React, { useEffect } from 'react';

function ConceptModel(){

    const showSteps = (stepNum) => {

        if(stepNum <= 5){
            document.getElementById(`step${stepNum}`).style.transform =  "scale(1)";
            window.setTimeout(changeColorIcon, 1100, stepNum);
            window.setTimeout(showSteps, 1000, stepNum + 1);
        }
    }

    const changeColorIcon = (icon) => {
        switch(icon){
            case 1:
                document.getElementById(`iconStep1`).style.color = "#FFC914";
                break;
            case 2:
                // document.getElementById(`iconStep2`).style.color = "#FFC914";
                break;
            case 3:
                // document.getElementById(`iconStep3`).style.color = "#31E981";
                break;
            case 4:
                document.getElementById(`iconStep4`).style.color = "#124E78";
                break;
            case 5:
                document.getElementById(`iconStep5`).style.color = "#31E981";
                break;
        }
    }

    useEffect(() => {showSteps(1)}, []);


    return(
        <div className="divConceptModel" >
            <h2>O ThinkR é uma plataforma de desenvolvimento colaborativo, onde pessoas compartilham suas idieas e podem encontrar outras pessoas que estão dispostas a ajuda-la a tornar essa ideia realidade.</h2>
            <div className="divPaiSteps">
                <div className="stepsOut">
                    <div className="steps" id="step1">
                        <p>Você tem uma ideia.</p>
                        {/* <i class="far fa-lightbulb fa-2x"></i> */}
                        <i class="fas fa-lightbulb fa-2x" id="iconStep1"></i>
                    </div>
                </div>
                <div className="stepsOut">
                    <div className="steps" id="step2">
                        {/* <i class="far fa-list-alt"></i> */}
                        <p>Cria um card de divulgação.</p>
                        {/* <i class="far fa-list-alt fa-2x"></i> */}
                        <i class="fas fa-list-alt fa-2x" id="iconStep2"></i>
                        {/* <i class="fas fa-file-alt fa-2x"></i> */}
                    </div>
                </div>
                <div className="stepsOut">
                    <div className="steps" id="step3">
                        <p>Publica no seu quadro de projetos.</p>
                        <i class="fas fa-thumbtack fa-2x" id="iconStep3"></i>
                    </div>
                </div>
                <div className="stepsOut">
                    <div className="steps" id="step4">
                        {/* <i class="fas fa-user-plus"></i> */}
                        <p>Outros se juntam ao projeto.</p>
                        <i class="fas fa-user-plus fa-2x" id="iconStep4"></i>
                    </div>
                </div>
                <div className="stepsOut">
                    <div className="steps" id="step5">
                        <p>Inicia o desenvolvimento</p>
                        {/* <i class="fas fa-tasks fa-2x"></i> */}
                        <i class="fas fa-cogs fa-2x" id="iconStep5"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConceptModel;