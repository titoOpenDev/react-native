import React, { useState } from 'react';
import {
  Platform,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Switch,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { Container, Content, Text, Grid, Button, Form, Item, Input, Card, CardItem, Picker } from "native-base";
import { Header, Left, Body, Right, Icon, Title } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

import styles from './style';
import genericStyles from '../../styles';

export default function AccountActivation({ navigation }) {

  const [activationCode, setActivationCode] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleActivationCodeChange = code => {
    if (code.trim().length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setActivationCode(code);
  };

  const handleBttonEntry = () => {
    //TODO: meterle logica
  }

  var _textInput;
  const { height } = Dimensions.get('window');

  return (
    <View style={{ flex: 1, }}>
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS == "ios" ? 0 : -100}>
        <ScrollView style={styles.scrollView}>
          <View style={{ minHeight: height-Constants.statusBarHeight }}>
            <View style={{ backgroundColor: '#7a7e7f', justifyContent: 'center', minHeight: 200, }}>
              <View style={{ alignItems: 'flex-start', top: -20, }}>
                <Ionicons style={{ marginLeft: 24 }} name="ios-arrow-back" size={24} color="white" />
              </View>
              <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                <Image source={require('../../../assets/ase_nacional_imagen_app.png')} style={{ width: 180, height: 60 }} />
              </View>
            </View>
            <View style={{ backgroundColor: 'white', flex: 1, alignContent: 'center', }}>
              <View style={{ flex: 1, alignContent: 'center', }}>
              <View style={{ margin: 10, alignItems: 'center' }}>
                <Text style={{ textAlign: 'center', margin: 10, fontWeight: 'bold', }}>ACTIVACIÓN DE CUENTA</Text>
                <Text style={{ width: '75%', margin: 10, fontSize: 14 }}>Si llegaste hasta esta pantalla es porque recibiste el link de activación de tu cuenta..</Text>
                <Text style={{ width: '75%', margin: 10, fontSize: 14 }}>Ingresá el código de activación que te enviamos por E-Mail.</Text>
              </View>
            </View>
            <View style={{ flex: 1, alignContent: 'center', margin: 16, }}>
                <Form>
                  <Item last>
                    <Input keyboardType="numeric" />
                  </Item>
                </Form>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', }}>
              <Button style={{ backgroundColor: '#F16921', margin: 32, }} onPress={() => { _textInput.setNativeProps({ height: '100%', width: '100%', opacity: 100 }); }}>
                <Text style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase' }}>siguiente</Text>
              </Button>
            </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
    <View ref={component => _textInput = component} style={{ flex: 1, backgroundColor: '#000000DD', position: 'absolute', left: 0, top: 0, height: '100%', width: '100%', }} onPress={() => { _textInput.setNativeProps({ height: 0, width: 0, opacity: 0 }); }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
          <View style={{ height: '75%', justifyContent: 'space-between', alignItems: 'center', alignContent: 'space-between' }}>
            <Image source={require('../../../assets/ase_nacional_imagen_app.png')} style={{ margin: 24, width: 180, height: 60 }} />
            <Text style={{ color: 'white', margin: 24 }}>EMAIL ENVIADO</Text>
            <Text style={{ color: 'white', margin: 24 }}>Se envio el mail a nombre@dominio</Text>
            <Text style={{ color: 'white', margin: 24 }}>En unos minutos</Text>
            <Text style={{ color: 'white', margin: 24 }}>Si no recibio</Text>
          </View>
        </View>
        <View>
          <Button bordered full style={{ borderColor: 'white', margin: 10 }} onPress={() => { _textInput.setNativeProps({ height: 0, width: 0, opacity: 0 }); }}>
            <Text style={{ color: 'white', textTransform: 'uppercase' }}>volver</Text>
          </Button>
        </View>
      </View>
    </View>
  );

};