import React from 'react';
import {
  Platform,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { Text,  Button, Form, Item, Input,  } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import Constants from "expo-constants";

import styles from './style';
import {LOGIN,UPDATE_PASSWORD_SUCCESS} from '../../consts';

export default function PasswordConfirm({navigation}){

    const { height } = Dimensions.get('window');

    const handleSaveNewPass = ()=>{

      alert(UPDATE_PASSWORD_SUCCESS);
      navigation.navigate(LOGIN);
    }

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
                    <Text style={{ textAlign: 'center', margin: 16, fontWeight: 'bold', }}>CREAR NUEVA CLAVE</Text>
                    <Text style={{ width: '75%', fontSize: 14 }}>Ingresá tu nueva CLAVE y confirmala</Text>
                  </View>
                  <Form style={{ margin: 24, }}>
                    <Item last>
                      <Input placeholder="NUEVA CLAVE"   />
                    </Item>
                    <Item last>
                      <Input placeholder="REPETIR CLAVE" />
                    </Item>
                  </Form>
                </View>
                <View style={{ flex: 0.1, justifyContent: 'flex-end', margin: 32, }}>
                  <Button style={{ backgroundColor: '#F16921', borderColor: '#f16820' }} onPress={handleSaveNewPass} >
                    <Text style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase' }}>GUARDAR NUEVA CLAVE</Text>
                  </Button>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
    );
};