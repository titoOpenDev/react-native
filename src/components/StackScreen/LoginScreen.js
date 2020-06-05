import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from '../../views/Login';
import RegistrationBegin from '../../views/RegistrationBegin';
import RegistrationEnd from '../../views/RegistrationEnd';
import ConfirmationScreen from '../../components/ConfirmationScreen';
import EmailNotification from '../../views/EmailNotification';
import KeyActivation from '../../views/KeyActivation';
import PasswordRecovery from '../../views/PasswordRecovery';
import PasswordConfirm from '../../views/PasswordConfirm';
import {LOGIN_TITLE,
  REGISTRATION_BEGIN_TITLE,
  REGISTRATION_END_TITLE,
  SYSTEM_LOGOUT_TITLE,
  EMAIL_NOTIFICATION_TITLE,
  KEY_ACTIVATION_TITLE,
  PASSWORD_RECOVERY_TITLE,
  PASSWORD_CONFIRM_TITLE} from '../../consts';

export default ({navigation}) => {

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Login" screenOptions={{ gestureEnabled: false }}>
      <Drawer.Screen name="Login"
        options={({ navigation, route }) => ({
        title: LOGIN_TITLE,
        gestureEnabled: false,
        })}
        component={Login}
      />
      <Drawer.Screen name="RegistrationBegin"
        options={({ navigation, route }) => ({
        title: REGISTRATION_BEGIN_TITLE
        })}
        component={RegistrationBegin}
      />
        <Drawer.Screen name="RegistrationEnd"
        options={({ navigation, route }) => ({
        title: REGISTRATION_END_TITLE
        })}
        component={RegistrationEnd}
      />
      <Drawer.Screen name="SystemLogout"
        options={({ navigation, route }) => ({
        title: SYSTEM_LOGOUT_TITLE
        })}
        component={ConfirmationScreen}
      />
      <Drawer.Screen name="EmailNotification"
        options={({ navigation, route }) => ({
        title: EMAIL_NOTIFICATION_TITLE
        })}
        component={EmailNotification}
      />
      <Drawer.Screen name="KeyActivation"
        options={({ navigation, route }) => ({
        title: KEY_ACTIVATION_TITLE
        })}
        component={KeyActivation}
      />
      <Drawer.Screen name="PasswordRecovery"
        options={({ navigation, route }) => ({
        title: PASSWORD_RECOVERY_TITLE
        })}
        component={PasswordRecovery}
      />
      <Drawer.Screen name="PasswordConfirm"
        options={({ navigation, route }) => ({
        title: PASSWORD_CONFIRM_TITLE
        })}
        component={PasswordConfirm}
      />
    </Drawer.Navigator>
  )
}