import React, { useEffect, useState } from "react";
import { Image, View, SafeAreaView, Dimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import {  Button, Text, Form, Item, Input } from "native-base";
import { RadioButton } from 'react-native-paper';
import { TextInputMask} from 'react-native-masked-text';
import { Ionicons } from '@expo/vector-icons';

import styles from './style'

import { useDispatch } from "react-redux";

import { buildExecutive } from '../../redux/ducks/executiveDucks';
import {validateEmail,validateCUIL} from '../../utils';

import {
  REGISTRATION_END,
  EMPTY_USER_SURNAME,
  EMPTY_USER_NAME,
  EMPTY_MESSAGE,
  EMPTY_USER_EMAIL,
  WRONG_FORMAT_EMAIL,
  MALE_GENDER,
  FEMALE_GENDER,
  WRONG_CUIL,
  EMPTY_CUIL
} from "../../consts";

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
    setCUIL(text);
  }

  const handleNext = () => {
    let mssg = errorMssg();
    if(mssg.length > 0){
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
    }
    if(!validateEmail(email)){
      return WRONG_FORMAT_EMAIL;
    }
    if(!cuil.trim()){
      return EMPTY_CUIL;
    }
    if(!validateCUIL(cuil,gender)){
      return WRONG_CUIL;
    }
    return EMPTY_MESSAGE;
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
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                      <Text>Sexo</Text>
                      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', alignContent: 'flex-end', paddingRight: 16, }}>
                        <RadioButton value={gender} status={gender === MALE_GENDER ? 'checked' : 'unchecked'} onPress={() => { setGender(MALE_GENDER) }} color={'red'} uncheckedColor={'black'} />
                        <Text>{MALE_GENDER}</Text>
                        <RadioButton value={gender} status={gender === FEMALE_GENDER ? 'checked' : 'unchecked'} onPress={() => { setGender(FEMALE_GENDER) }} color={'red'} uncheckedColor={'black'} />
                        <Text>{FEMALE_GENDER}</Text>
                      </View>
                    </View>
                  </Item>
                  <Item last>
                    <TextInputMask type={'custom'} options={{ mask: '99-99999999-9' }} value={cuil} onChangeText={text => handleChangeCUIL(text)} placeholder="CUIL" style={{ margin: 5, fontSize: 17, justifyContent: 'flex-start', marginTop: 12, marginBottom: 12 }} placeholderTextColor='dimgrey' />
                    {/* <Input placeholder="CUIL" value={cuil}  maxLength={13} onChangeText={text => handleChangeCUIL(text)} /> */}
                  </Item>
                  <Item last>
                    <Input placeholder="Nombre" value={firstName} maxLength={30} onChangeText={text => handleChangeFirstName(text)} />
                  </Item>
                  <Item last>
                    <Input placeholder="Apellido" value={lastName} maxLength={30} onChangeText={text => handleChangeLastName(text)} />
                  </Item>
                  <Item last>
                    <Input placeholder="Email" value={email} onChangeText={text => handleChangeEmail(text)} />
                  </Item>
                </Form>
              </View>
              <View style={{ margin: 10, }}>
                <Button style={{ backgroundColor: '#F16921', margin: 10, }} onPress={handleNext} >
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

