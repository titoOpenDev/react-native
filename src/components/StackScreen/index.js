import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UploadProcedure from '../UploadProcedure';
import { AntDesign } from '@expo/vector-icons'; 
import { Text } from 'native-base';
import {useSelector} from 'react-redux';

import NotificationFilters from '../../views/NotificationFilters'
import CalculatorResults from '../../views/CalculatorResults';
import Login from '../../views/Login';
import LoadingPage from '../../views/LoadingPage';

export default function  StackScreen (){

  const Drawer = createDrawerNavigator();

  const isLoged = useSelector(store => store.authentication.loged);

  return isLoged ? (
  <>  
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="misTramites"
          options={({ navigation, route }) => ({
          title: 'Alta (nuevo trámite)'
          })}
          component={() => (<Text>Mis tramites</Text>)}
        />
        <Drawer.Screen name="consultaProspecto"
          component={() => (<Text>Mis Prospectos</Text>)}
          options={({ navigation, route }) => ({
            title: 'Consulsta Prospectos'
            })}
        />
        <Drawer.Screen name="Home" component={UploadProcedure} 
          options={({ navigation, route }) => ({
          title: 'Alta (nuevo trámite)',
          headerRight: () => (
            <AntDesign name="infocirlceo"
              onPress={() => console.log('Info Button')}
              size={24} color="black" />
          ),
          headerLeft: () => (<AntDesign name="menufold" 
            onPress={() => console.log('Menu Button') }
            color="black" size={23} />
          )
          })}
        />
        <Drawer.Screen name="NotificationFilters"
          component={NotificationFilters}
          options={({ navigation, route }) => ({
            title: 'Notificaciones'
          })}
        />
        <Drawer.Screen name="CalculatorResults"
          component={CalculatorResults}
          options={({ navigation, route }) => ({
          title: 'Calculadora Aportes'
          })}
        />
        <Drawer.Screen name="salirDelSistema"
          options={({ navigation, route }) => ({
          title: 'Salir del sistema'
          })}
          component={() => (<Text>Salir de lsistema</Text>)}
        />
      </Drawer.Navigator>
    </>
  ):(
      <>
        <Drawer.Navigator initialRouteName="Login">
          <Drawer.Screen name="Login"
            options={({ navigation, route }) => ({
            title: 'Login'
            })}
          component={Login}
          />
        </Drawer.Navigator>
      </>
    )
}