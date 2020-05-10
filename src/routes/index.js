import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { LOADING_PAGE, 
         LOGIN, 
         HOME, 
         PASSWORD_RECOVERY, 
         VALIDATION_RECOVERY, 
         REGISTRATION_BEGIN, 
         REGISTRATION_END } from "../consts";

import Login from "../views/Login";
import Home from "../views/Home";
import LoadingPage from "../views/LoadingPage";
import PasswordRecovery from "../views/PasswordRecovery";
import ValidationRecovery from "../views/ValidationRecovery";
import RegistrationBegin from "../views/RegistrationBegin";
import RegistrationEnd from "../views/RegistrationEnd";

const AppNavigator = createStackNavigator(
  {
    [LOADING_PAGE]: LoadingPage,
    [LOGIN]: Login,
    [HOME]: Home,
    [PASSWORD_RECOVERY] : PasswordRecovery,
    [VALIDATION_RECOVERY] : ValidationRecovery,
    [REGISTRATION_BEGIN] : RegistrationBegin,
    [REGISTRATION_END] : RegistrationEnd
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
