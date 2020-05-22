import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UploadProcedure from '../UploadProcedure';
import NotificationFilters from '../../views/NotificationFilters'
import { AntDesign } from '@expo/vector-icons'; 
import { Text } from 'native-base';

export default function StackScreen() {

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Mis tŕamites'
        component={() => (<Text>Mis tramites</Text>)}
      />
      <Drawer.Screen 
        name='Consulta de Prospecto'
        component={() => (<Text>Prospecto</Text>)}
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
      <Drawer.Screen 
        name='Notificaciones'
        component={NotificationFilters}/>
       <Drawer.Screen name="calculadoraDeAportes"
        title='Calculadora de aportes'
        component={() => (<Text>Prospecto</Text>)}
      />
      <Drawer.Screen title="salirDelSistema"
        name='Salir del sistema'
        component={() => (<Text>Prospecto</Text>)}
      />
    </Drawer.Navigator>
  )
}