import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../../views/Login'
import RegistrationBegin from '../../views/RegistrationBegin'
import RegistrationEnd from '../../views/RegistrationEnd'
import ConfirmationScreen from '../../components/ConfirmationScreen'

export default ({navigation}) => {

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Login" screenOptions={{ gestureEnabled: false }}>
      <Drawer.Screen name="Login"
        options={({ navigation, route }) => ({
        title: 'Login',
        gestureEnabled: false,
        })}
        component={Login}
      />
      <Drawer.Screen name="RegistrationBegin"
        options={({ navigation, route }) => ({
        title: 'No tengo cuenta'
        })}
        component={RegistrationBegin}
      />
        <Drawer.Screen name="RegistrationEnd"
        options={({ navigation, route }) => ({
        title: 'Fin registracion'
        })}
        component={RegistrationEnd}
      />
      <Drawer.Screen name="salirDelSistema"
        options={({ navigation, route }) => ({
        title: 'Salir del Sistema'
        })}
        component={ConfirmationScreen}
      />
    </Drawer.Navigator>
  )
}