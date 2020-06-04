import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import UploadProcedure from '../UploadProcedure';
import NotificationFilters from '../../views/NotificationFilters'
import CalculatorResults from '../../views/CalculatorResults';
import Confirmation from '../ConfirmationScreen';
import { HOME_TITLE,
        NOTIFICATION_FILTERS_TITLE,
        CALCULATOR_RESULTS_TITLE,
        SYSTEM_LOGOUT_TITLE} from '../../consts';

export default ({navigation}) => {

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={UploadProcedure} 
        options={({ navigation, route }) => ({
        title: HOME_TITLE,
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
      <Drawer.Screen name="consultaProspecto"
        component={() => (<Text>Mis Prospectos</Text>)}
        options={({ navigation, route }) => ({
          title: 'Consulta Prospectos'
          })}
      />
      <Drawer.Screen name="NotificationFilters"
        component={NotificationFilters}
        options={({ navigation, route }) => ({
          title: NOTIFICATION_FILTERS_TITLE
        })}
      />
      <Drawer.Screen name="CalculatorResults"
        component={CalculatorResults}
        options={({ navigation, route }) => ({
        title: CALCULATOR_RESULTS_TITLE
        })}
      />
      <Drawer.Screen name="SystemLogout"
        options={({ navigation, route }) => ({
        title: SYSTEM_LOGOUT_TITLE
        })}
        component={Confirmation}
      />
    </Drawer.Navigator>
  )
}
