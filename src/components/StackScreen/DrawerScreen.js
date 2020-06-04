import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import UploadProcedure from '../UploadProcedure';
import NotificationFilters from '../../views/NotificationFilters'
import CalculatorResults from '../../views/CalculatorResults';
import Confirmation from '../ConfirmationScreen';
import { Text, StyleSheet } from "react-native";

export default ({navigation}) => {

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home">
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
        title: 'Cerrar sesión'
        })}
        component={Confirmation}
      />
    </Drawer.Navigator>
  )
}
