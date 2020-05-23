import React from 'react';
import UserInactivity from 'react-native-user-inactivity';
import {BackgroundTimer} from 'react-native-user-inactivity/lib/BackgroundTimer';
import { Container, Content} from "native-base";

import {useDispatch,useSelector} from 'react-redux';
import {logOut} from '../../redux/ducks/authenticateDucks';

import {LOGOUT_MESSAGE} from '../../consts';
import styles from "./style";

export default function IdleContainer ({Drawer}) {

    const dispatch = useDispatch();
    const isLoged = useSelector(store => store.authentication.loged);

    const handleTimeout =()=>{
        
        alert(LOGOUT_MESSAGE);
        if(isLoged){
            dispatch(logOut());
        }
    }

    return(
        <>
            <UserInactivity timeForInactivity={600000} timeoutHandler={BackgroundTimer} onAction={isActive => {if(!isActive) handleTimeout() }}></UserInactivity>
        </>
    )
}


