import React from 'react';
import './style_join.css';

import FormJoin from './formJoin';
import HomeBtn  from '../../componets/buttons/round/homeButton';

function Join(props){
    return(
        <div className="joinPage">
            <FormJoin history={props.history}/>
            <HomeBtn  history={props.history}/>
        </div>
    );
}

export default Join;