import React, { useEffect, useState } from "react";
import { Image, View, SafeAreaView, Dimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import {  Button, Text, Form, Item, Input } from "native-base";
import { RadioButton } from 'react-native-paper';
import { TextInputMask} from 'react-native-masked-text';
import { Ionicons } from '@expo/vector-icons';

import styles from './style'

import { useDispatch } from "react-redux";

import { buildExecutive } from '../../redux/ducks/executiveDucks';
import {buildErrMssg} from '../../utils';

import {
  REGISTRATION_END,
  MALE_GENDER,
  FEMALE_GENDER,
  EMPTY_USER_NAME,
  EMPTY_USER_SURNAME,
  EMPTY_USER_EMAIL,
  WRONG_FORMAT_EMAIL,
  EMPTY_CUIL,
  WRONG_CUIL,
  WARNING
} from "../../consts";

export default function RegistrationBegin({ navigation }) {

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [cuil, setCUIL] = useState("");
  const [gender, setGender] = useState(MALE_GENDER);
  const [errMssg, setErrMssg] = useState("");

  useEffect(() => {

  });

  const handleChangeEmail = (text) => {
    setErrMssg("");
    setEmail(text);
  }

  const handleChangeFirstName = (text) => {
    setErrMssg("");
    setFirstName(text);
  }

  const handleChangeLastName = (text) => {
    setErrMssg("");
    setlastName(text);
  }

  const handleChangeCUIL = (text) => {
    setErrMssg("");
    setCUIL(text);
  }

  const handleNext = () => {
    let form = {cuil,firstName, lastName, email, gender};
    let mssg = buildErrMssg(form);
    if(mssg.length > 0){
      setErrMssg(mssg);
      return;
    }else{
      setErrMssg("");
      const payload = { lastName, firstName, email, cuil, gender };
      dispatch(buildExecutive(payload));
      navigation.navigate(REGISTRATION_END);
    }
  }

  const handleGoBack = () => {
    navigation.goBack();
  }

  const { height } = Dimensions.get('window');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS == "ios" ? 0 : -100}>
        <ScrollView keyboardShouldPersistTaps = 'always' style={{ flex: 1, }}>
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
                <Text style={{ margin: 10, fontSize: 12 }}>Bienvenido a la App de ventas de ASE. Creando tu cuenta podrás realizar las consultas, acelerar el proceso de alta de nuevos afiliados enviando la info y obteniendo respuesta en pocos minutos</Text>
                <Text style={{ margin: 10, fontSize: 12 }}>Registrate con unos pocos datos y comenzá a disfrutar de los beneficios de ASE Ventas</Text>
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
                    {
                      (errMssg === WRONG_CUIL || errMssg === EMPTY_CUIL) ? (
                            <>
                              <TextInputMask type={'custom'} options={{ mask: '99-99999999-9' }} value={cuil} onChangeText={text => handleChangeCUIL(text)} placeholder="CUIL" style={{ margin: 5, fontSize: 17, justifyContent: 'flex-start',width:'100%', height:'80%', marginTop: 12, marginBottom: 12, borderColor:'red', borderWidth:1 }} placeholderTextColor='dimgrey' />
                            </>
                        )
                        :(
                            <>
                              <TextInputMask type={'custom'} options={{ mask: '99-99999999-9' }} value={cuil} onChangeText={text => handleChangeCUIL(text)} placeholder="CUIL" style={{ margin: 5, fontSize: 17, justifyContent: 'flex-start',width:'100%', marginTop: 12, marginBottom: 12 }} placeholderTextColor='dimgrey' />
                            </>
                         )
                    }
                  </Item>
                  <Item last>
                  {
                    (errMssg === EMPTY_USER_NAME) ? (
                          <>
                            <Input placeholder="Nombre" value={firstName} maxLength={30} onChangeText={text => handleChangeFirstName(text)} style={{borderColor:'red',borderWidth:1}} />
                          </>
                      )
                      :(
                          <>
                            <Input placeholder="Nombre" value={firstName} maxLength={30} onChangeText={text => handleChangeFirstName(text)} />
                          </>
                       )
                  }
                  </Item>
                  <Item last>
                    {
                      (errMssg === EMPTY_USER_SURNAME) ? (
                          <>
                            <Input placeholder="Apellido" value={lastName} maxLength={30} onChangeText={text => handleChangeLastName(text)} style={{borderColor:'red',borderWidth:1}} />
                          </>
                        )
                       :(
                          <>
                            <Input placeholder="Apellido" value={lastName} maxLength={30} onChangeText={text => handleChangeLastName(text)} />
                          </>
                       )
                    }
                  </Item>
                  <Item last>
                    {
                      (errMssg === EMPTY_USER_EMAIL || errMssg === WRONG_FORMAT_EMAIL) ? (
                          <>
                            <Input placeholder="Email" value={email} onChangeText={text => handleChangeEmail(text)}  style={{borderColor:'red',borderWidth:1}}/>
                          </>
                        )
                       :(
                          <>
                            <Input placeholder="Email" value={email} onChangeText={text => handleChangeEmail(text)} />
                          </>
                       )
                    }
                  </Item>
                </Form>
              </View>
              <View style={{ margin: 10, }}>
                { 
                  (errMssg.length >0) && (
                                           <>    
                                            <Text style={{ textAlign: 'center', fontWeight: 'bold',color:'red' }}>{WARNING}</Text>
                                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color:'red' }}>{errMssg}</Text>
                                           </>
                                         )
                } 
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

