import React, { useEffect, useState } from "react";
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
} from "react-native";
import { Container, Content, Text, Grid, Button, Form, Item, Input, Card, CardItem, Picker } from "native-base";
import { Header, Left, Body, Right, Icon, Title } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import Constants from "expo-constants";

import genericStyles from "../../styles";

import styles from './style'

export default function PasswordRecovery({ navigation }) {

  const [email, setEmail] = useState("")

  useEffect(() => {

  });

  const handleChangeEmail = (text) => {
    setEmail(text);
  }

  const handleSendEmail = () => {

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
                  <Input placeholder="Clave" />
                </Item>
              </Form>
            </View>
            <View style={{ flex: 0.1, justifyContent: 'flex-end', margin: 32, }}>
              <Button style={{ backgroundColor: '#F16921', borderColor: '#f16820' }}>
                <Text style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase' }}>enviar</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

