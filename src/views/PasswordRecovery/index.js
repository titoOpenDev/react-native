import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Platform,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
  View,
  KeyboardAvoidingView,
} from "react-native";
import {  Text, Button, Form, Item, Input } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import Constants from "expo-constants";

import styles from './style';

import {EMAIL_NOTIFICATION,WRONG_FORMAT_EMAIL, PASSWORD_RECOVERY} from '../../consts';
import {passwordRecovery} from '../../redux/ducks/executiveDucks';
import {validateEmail} from '../../utils';

export default function PasswordRecovery({ navigation }) {

  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);

  const error = useSelector(store=>store.executive.err);

  const dispatch = useDispatch();

  const handleChangeEmail = (text) => {
    if(text.trim()){
      setDisabled(false);
    }else{
      setDisabled(true);
    }
    setEmail(text);
  }

  const handleSendEmail = () => {
    //TODO: ALCANZA SOLO CON EL EMAIL ??
    if(validateEmail(email)){
      const payload = {email}
      dispatch(passwordRecovery(payload));
      setEmail("");
      let params= {};
      params.sourceView = PASSWORD_RECOVERY
      navigation.navigate(EMAIL_NOTIFICATION, params);
    }else{
      alert(WRONG_FORMAT_EMAIL);
    }
  }

  const handleGoBack = () => {
    navigation.goBack();
  }

  const { height } = Dimensions.get('window');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS == "ios" ? 0 : -100}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ minHeight: height-Constants.statusBarHeight }}>
            <View style={{ backgroundColor: '#7a7e7f', flex: 1, justifyContent: 'center', }}>
              <View style={{ alignItems: 'flex-start', top: -20 }}>
                <Ionicons style={{ marginLeft: 24 }} name="ios-arrow-back" size={24} color="white" onPress={ handleGoBack }/>
              </View>
              <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginBottom: 16, }}>
                <Image source={require('../../../assets/ase_nacional_imagen_app.png')} style={{ width: 180, height: 60 }} />
              </View>
            </View>
            <View style={{ flex: 0.1, justifyContent: 'center', alignContent: 'center', }}>
              <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                <Text style={{ textAlign: 'center', margin: 16, fontWeight: 'bold', }}>RECUPERO DE CLAVE</Text>
                <Text style={{ width: '75%', fontSize: 14 }}>Si ya tenés creada tu cuenta y no recordas la clave ingresá el E-Mail que usaste durante la registracion y presioná ENVIAR</Text>
                <Text style={{ margin: 16, width: '75%', fontSize: 14, }}>En instantes te enviaremos una clave provisoria</Text>
              </View>
              <Form style={{ margin: 24, }}>
                <Item last>
                  <Input placeholder="E-MAIL" onChangeText={text => handleChangeEmail(text)} value={email}/>
                </Item>
              </Form>
            </View>
            <View style={{ flex: 0.1, justifyContent: 'flex-end', margin: 32, }}>
              <Button style={{ backgroundColor: '#F16921', borderColor: '#f16820' }} onPress={handleSendEmail} disabled={disabled}>
                <Text style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase' }}>enviar</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

