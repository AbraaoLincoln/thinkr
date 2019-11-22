import React, {useState} from 'react';

function ProjectDescription(props){
   const [state, setState] = useState({showDescription: false});

    const handleClick = () => {
        if(!state.showDescription){
            document.getElementById(`projectSort${props.id}`).style.height = "30%";
            document.getElementById(`projectSort${props.id}`).style.border = "1px solid #11151C";
            document.getElementById(`title${props.id}`).style.height = "10%";
            document.getElementById(`title${props.id}`).style.marginTop = "2%";
            // document.getElementById(`projcDesc${props.id}`).style.display = "inline";
            setTimeout(showDescpt_cont, 500);
            setState({showDescription: true});
        }else{
            document.getElementById(`projectSort${props.id}`).style.height = "10%";
            document.getElementById(`projectSort${props.id}`).style.border = "none";
            document.getElementById(`title${props.id}`).style.height = "100%";
            document.getElementById(`title${props.id}`).style.marginTop = "0";
            document.getElementById(`projcDesc${props.id}`).style.display = "none";
            setState({showDescription: false});
        }
    }

    const showDescpt = () => {
        document.getElementById(`title${props.id}`).style.height = "10%";
        document.getElementById(`title${props.id}`).style.marginTop = "2%";
        setTimeout(showDescpt_cont, 1000);
        return <div className="projectSortDescription" id={`projcDesc${props.id}`}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur sint, in ipsum magni molestias perferendis et voluptates harum odio, tempora maxime quod minus ad incidunt cum ullam vero modi molestiae.</p>
                </div>
    }

    const showDescpt_cont = () => {
        document.getElementById(`projcDesc${props.id}`).style.display = "inline";
    }
    return(
        <div className="projectSort" id={`projectSort${props.id}`} onClick={handleClick}>
            <div className="projectSortTitle" id={`title${props.id}`}>
                <h3>Titulo do Projeto</h3>
                <div className="divFeedback">
                    <i class="fas fa-thumbs-up  iconLike"></i>
                    <i class="fas fa-thumbs-down iconDeslike"></i>
                </div>
            </div>
            <div className="projectSortDescription" id={`projcDesc${props.id}`}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur sint, in ipsum magni molestias perferendis et voluptates harum odio, tempora maxime quod minus ad incidunt cum ullam vero modi molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ducimus explicabo ipsa aut maiores asperiores, alias illum itaque sint recusandae voluptate ipsam? Quisquam sit iusto itaque eos nesciunt dolore dignissimos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae accusantium quisquam architecto nesciunt impedit. Iste minus aperiam aliquam natus beatae ipsum quia, nesciunt explicabo expedita suscipit accusantium omnis maxime laudantium!</p>
                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, iste?</p> */}
            </div>
            {/* {state.showDescription ? showDescpt() : ""} */}
            {/* <button>Ver Projeto</button> */}
        </div>
    )
}

export default ProjectDescription;