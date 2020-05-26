import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UploadProcedure from '../UploadProcedure';
import NotificationFilters from '../../views/NotificationFilters'
import Login from '../../views/Login';
import { AntDesign } from '@expo/vector-icons'; 
import { Text } from 'native-base';
import LoadingPage from '../../views/LoadingPage';

export default function StackScreen() {

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName='loadingPage'>
      <Drawer.Screen name="loadingPage"
        options={({ navigation, route }) => ({
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null
        })}
        component={LoadingPage}
      />
      <Drawer.Screen name="login"
        options={({ navigation, route }) => ({
          drawerLabel: () => null
        })}
        component={Login}
      />
      <Drawer.Screen name="misTramites"
        options={({ navigation, route }) => ({
        title: 'Mis tramites'
        })}
        component={() => (<Text>Mis tramites</Text>)}
      />
      <Drawer.Screen name="consultaProspecto"
        component={() => (<Text>Mis Prospectos</Text>)}
        options={({ navigation, route }) => ({
          title: 'Consulta Prospectos'
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
      <Drawer.Screen name="calculadoraDeAportes"
        component={() => (<Text>Mis tramites</Text>)}
        options={({ navigation, route }) => ({
        title: 'Calculadora Aportes'
        })}
      component={() => (<Text>Calculadora de aportes</Text>)}
      />
      <Drawer.Screen name="salirDelSistema"
        options={({ navigation, route }) => ({
        title: 'Salir del sistema'
        })}
      component={() => (<Text>Salir de lsistema</Text>)}
      />
    </Drawer.Navigator>
  )
}