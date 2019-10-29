import React from 'react';
import UserTeste  from '../../assets/userTeste.jpg';

export default UserImage => {

    // const chooserImage = () => {
    //     let result = Math.floor(Math.random() * 2);
    //     console.log(result)
    //     return result == 1 ? UserMan : UserWoman;
    //     // if(result == 1){
    //     //     return UserMan;
    //     // }else{
    //     //     return UserWoman;
    //     // }
    // }

    return(
        <div className="userImage">
            {/* <img src={(Math.floor(Math.random() * 2)) === 1 ? UserMan : UserWoman} alt="foto do usuario"/> */}
            <img src={UserTeste} alt="foto do usuario"/>
        </div>
    );
}