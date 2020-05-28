import React, { useEffect, useState } from "react";
import { Image, View, SafeAreaView, Dimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import { Container, Content, Button, Text, Form, Item, Input, Left, Header, Icon, Title, Body } from "native-base";
import genericStyles from "../../styles";
import styles from './style'
import { buildExecutive } from '../../redux/ducks/executiveDucks';
import { Ionicons } from '@expo/vector-icons';

import {
  LOGIN,
  HOME,
  PASSWORD_RECOVERY,
  REGISTRATION_BEGIN,
  REGISTRATION_END
} from "../../consts";
import { useDispatch } from "react-redux";


export default function RegistrationBegin({ navigation }) {

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [cuil, setCUIL] = useState("")

  useEffect(() => {

  });

  const handleChangeEmail = (text) => {
    setEmail(text);
  }

  const handleChangeFirstName = (text) => {
    setFirstName(text)
  }

  const handleChangeLastName = (text) => {
    setlastName(text);
  }

  const handleChangeCUIL = (text) => {
    setCUIL(text)
  }

  const handleNext = () => {

    const payload = { lastName, firstName, email, cuil }

    dispatch(buildExecutive(payload))
    navigation.navigate(REGISTRATION_END);
  }

  const handleGoBack = () => {
    navigation.goBack();
  }

  const { height } = Dimensions.get('window');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS == "ios" ? 50 : -100}>
        <ScrollView style={styles.scrollView}>
          <View style={{ minHeight: height }}>
            <View style={{ backgroundColor: '#7a7e7f', flex: 1, justifyContent: 'center', }}>
              <View style={{ alignItems: 'flex-start', alignContent: 'center', justifyContent: 'center', }}>
                <Ionicons style={{ marginLeft: 24 }} name="ios-arrow-back" size={24} color="white" onPress={handleGoBack} />
              </View>
              <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                <Image source={require('../../../assets/ase_nacional_imagen_app.png')} style={{ width: 180, height: 60 }} />
              </View>
            </View>
            <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignContent: 'center', }}>
              <View style={{ margin: 10 }}>
                <Text style={{ textAlign: 'center', margin: 10, }}>REGISTRO 1/2</Text>
                <Text style={{ textAlign: 'center', margin: 10, fontSize: 12 }}>Bienvenido a la App de ventas de ASE. Creando tu cuenta podras realizar las consultas, acelerar el proceso de alta de nuevos Afiliados enviando la info y obteniendo respuesta en pocos minutos</Text>
                <Text style={{ textAlign: 'center', margin: 10, fontSize: 12 }}>Registrate con unos pocos datos y comenza a disfrutar de los beneficios de ASE Ventas</Text>
                <Form>
                  <Item last>
                    <Input placeholder="CUIL" onChangeText={text => handleChangeCUIL(text)} maxLength={13} />
                  </Item>
                  <Item last>
                    <Input placeholder="Nombre" onChangeText={text => handleChangeFirstName(text)} />
                  </Item>
                  <Item last>
                    <Input placeholder="Apellido" onChangeText={text => handleChangeLastName(text)} />
                  </Item>
                  <Item last>
                    <Input placeholder="Email" onChangeText={text => handleChangeEmail(text)} />
                  </Item>
                </Form>
              </View>
              <View style={{ margin: 10, }}>
                <Button style={{ backgroundColor: '#F16921', margin: 10, }} onPress={handleNext}>
                  <Text style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase' }}>siguiente</Text>
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

