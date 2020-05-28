import React from 'react';
import {useSelector} from 'react-redux';

import DrawerScreen from './DrawerScreen';
import LoginScreen from './LoginScreen';

export default function StackScreen (){

  const isLoged = useSelector(store => store.authentication.loged);

  return (
    isLoged ? 
    (<DrawerScreen/>)
    :
    (<LoginScreen />)
  )
}