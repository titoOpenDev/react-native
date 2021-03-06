import React from 'react';
import UserInactivity from 'react-native-user-inactivity';
import {BackgroundTimer} from 'react-native-user-inactivity/lib/BackgroundTimer';

import {useDispatch,useSelector} from 'react-redux';
import {logOut} from '../../redux/ducks/authenticateDucks';

import {TIME_OUT_MESSAGE} from '../../consts';

//TODO: sacar el alert y meterlo en un pop up o algo mas customizado
export default function IdleContainer () {

    const dispatch = useDispatch();
    const isLoged = useSelector(store => store.authentication.loged);

    const handleTimeout =()=>{
        if(isLoged){
            alert(TIME_OUT_MESSAGE);
            dispatch(logOut());
        }
    }

    return(<UserInactivity style = {{backfaceVisibility:'hidden'}}
                timeForInactivity={600 * 1000} 
                timeoutHandler={BackgroundTimer} 
                onAction={(isActive) =>{ if(!isActive) handleTimeout()}}
           >
           </UserInactivity>)
}


