import React, {useRef, useState} from 'react';
import IdleTimer from 'react-idle-timer';

import {eraseItem} from '../../utils'
import {ACCESS_TOKEN, LOGOUT_MESSAGE,LOGIN} from '../../consts';

//TODO: VER COMO HACER REDIRECT
export default function IdleContainer (){

    const idleRefTimer = useRef(null);
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const handlerIdle = async()=>{
        try{
            await eraseItem(ACCESS_TOKEN);
            setIsLoggedOut(true);
        }catch(error){
            console.log(error);
        }
    }

    return(
        <div>
            <IdleTimer ref={idleRefTimer} timeout= {600000} onIdle={handlerIdle}> </IdleTimer>
            {
                isLoggedOut && alert(LOGOUT_MESSAGE)
            }
        </div>
    );
};