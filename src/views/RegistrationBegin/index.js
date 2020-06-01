import React, { useEffect, useState } from "react";
import { Image, View, SafeAreaView, Dimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import {  Button, Text, Form, Item, Input } from "native-base";
import { RadioButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import styles from './style'

import { buildExecutive } from '../../redux/ducks/executiveDucks';

import {
  LOGIN,
  HOME,
  PASSWORD_RECOVERY,
  REGISTRATION_BEGIN,
  REGISTRATION_END,
  EMPTY_USER_SURNAME,
  EMPTY_USER_NAME,
  EMPTY_MESSAGE,
  EMPTY_USER_EMAIL,
  WRONG_FORMAT_EMAIL,
  MALE_GENDER,
  FEMALE_GENDER
} from "../../consts";
import { useDispatch } from "react-redux";


export default function RegistrationBegin({ navigation }) {

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [cuil, setCUIL] = useState("");

  const [gender, setGender] = useState(MALE_GENDER);

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
    let mssg = errorMssg();
    if(mssg){
      alert(mssg);
      return;
    }else{
      const payload = { lastName, firstName, email, cuil }
      dispatch(buildExecutive(payload))
      navigation.navigate(REGISTRATION_END);
    }
      
  }

  const handleGoBack = () => {
    navigation.goBack();
  }

  const errorMssg =() =>{
    if(!firstName.trim()){
        return EMPTY_USER_NAME;
    }
    if(!lastName.trim()){
        return EMPTY_USER_SURNAME;
    }
    if(!email.trim()){
      return EMPTY_USER_EMAIL;
    }if(!validateEmail()){
      return WRONG_FORMAT_EMAIL;
    }
    return EMPTY_MESSAGE;
  }

  const validateEmail= () => {
    let reg = /^\w+([\.-]?\w+)*@\w+(\.com\.ar)$/;
    return (reg.test(email) !== false);
  }

  const { height } = Dimensions.get('window');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS == "ios" ? 0 : -100}>
        <ScrollView style={{ flex: 1, }}>
          <View style={{ minHeight: 700 }}>
            <View style={{ backgroundColor: '#7a7e7f', justifyContent: 'center', minHeight: 200 }}>
              <View style={{ alignItems: 'flex-start', top: -20, }}>
                <Ionicons style={{ marginLeft: 24 }} name="ios-arrow-back" size={24} color="white" onPress={handleGoBack} />
              </View>
              <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                <Image source={require('../../../assets/ase_nacional_imagen_app.png')} style={{ width: 180, height: 60 }} />
              </View>
            </View>
            <View style={{ backgroundColor: 'white', flex: 1, alignContent: 'center', }}>
              <View style={{ margin: 10 }}>
                <Text style={{ textAlign: 'center', margin: 10, fontWeight: 'bold', }}>REGISTRO 1/2</Text>
                <Text style={{ margin: 10, fontSize: 12 }}>Bienvenido a la App de ventas de ASE. Creando tu cuenta podras realizar las consultas, acelerar el proceso de alta de nuevos Afiliados enviando la info y obteniendo respuesta en pocos minutos</Text>
                <Text style={{ margin: 10, fontSize: 12 }}>Registrate con unos pocos datos y comenza a disfrutar de los beneficios de ASE Ventas</Text>
                <Form>
                  <Item last>
                    <Text>Sexo</Text>
                    <RadioButton
                      value={gender}
                      status={gender === MALE_GENDER ? 'checked' : 'unchecked'}
                      onPress={() => { setGender(MALE_GENDER) }}
                      color = {'black'}
                      uncheckedColor={'red'}
                    />
                    <Text>{MALE_GENDER}</Text>
                    <RadioButton
                      value={gender}
                      status={gender === FEMALE_GENDER ? 'checked' : 'unchecked'}
                      onPress={() => { setGender(FEMALE_GENDER) }}
                      color = {'black'}
                      uncheckedColor={'red'}
                    />
                    <Text>{FEMALE_GENDER}</Text>  
                  </Item>
                  <Item last>
                    <Input placeholder="CUIL"  maxLength={13} onChangeText={text => handleChangeCUIL(text)} maxLength={13} />
                  </Item>
                  <Item last>
                    <Input placeholder="Nombre" maxLength={30}  onChangeText={text => handleChangeFirstName(text)} />
                  </Item>
                  <Item last>
                    <Input placeholder="Apellido" maxLength={30} onChangeText={text => handleChangeLastName(text)}/>
                  </Item>
                  <Item last>
                    <Input placeholder="Email" onChangeText={text => handleChangeEmail(text)} />
                  </Item>
                </Form>
              </View>
              <View style={{ margin: 10, }}>
                <Button style={{ backgroundColor: '#F16921', margin: 10, }} onPress={handleNext} >
                  <Text style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase'  }}>siguiente</Text>
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

