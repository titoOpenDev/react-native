import React from 'react'
import ButtonAppBar from './ProfileScreen';

export const MyProcedureScreen = ({navigation}) => <ButtonAppBar navigation={navigation} name="Mis trámites" />
export const ProspectScreen = ({navigation}) => <ButtonAppBar navigation={navigation} name="Consulta de prospecto" />
export const CreateProcedureScreen = ({navigation}) => <ButtonAppBar navigation={navigation} name="Alta (nuevo trámite)" />
export const NotificationScreen = ({navigation}) => <ButtonAppBar navigation={navigation} name="Notificaciones" />
export const ContributionScreen = ({navigation}) => <ButtonAppBar navigation={navigation} name="Calculadora de aportes" />
export const ExitScreen = ({navigation}) => <ButtonAppBar navigation={navigation} name="Salir del sistema" />