import React, { useState, useEffect } from 'react';
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

import styles from './style';
import genericStyles from '../../styles';
import {REGISTRATION_END, LOGIN,PASSWORD_CONFIRM} from '../../consts';

export default function KeyActivation({route, navigation}){

    const [activationCode, setActivationCode] = useState('');
    const [disabled, setDisabled] = useState(true);

    const {sourceView} = route.params;

    const handleGoBack = () => {
        navigation.goBack();
      }

    const handleActivationCodeChange = code =>{
        if(code.trim().length > 0){
            setDisabled(false);
        }else{
            setDisabled(true);
        }
        setActivationCode(code);
    };

    const handleBttonEntry = () =>{
        //TODO: HAY QUE CREAR UN ACTION NUEVO 
        // PARA UNA NUEVA LLAMADA A OTRO SERVICIO DE LA API ??
        setActivationCode("");
        navigation.navigate(LOGIN);
    }

    const handleBttonValidateKey = () =>{
        //TODO: HAY QUE CREAR UN ACTION NUEVO 
        // PARA UNA NUEVA LLAMADA A OTRO SERVICIO DE LA API ??
        setActivationCode("");
        navigation.navigate(PASSWORD_CONFIRM);
    }

    const { height } = Dimensions.get('window');

    return(
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
                            {
                                (sourceView ===REGISTRATION_END) ?(
                                    <Text style={{ textAlign: 'center', margin: 16, fontWeight: 'bold', }}>ACTIVACIÓN DE CUENTA</Text>
                                ):(
                                    <Text style={{ textAlign: 'center', margin: 16, fontWeight: 'bold', }}>RECUPERO DE CLAVE</Text>
                                )
                            }
                                <Text style={{ width: '75%', fontSize: 14 }}> Si llegaste hasta esta pantalla es porque recibiste el link de activación de tu cuenta.</Text>
                                                                                
                                <Text style={{ margin: 16, width: '75%', fontSize: 14, }}>Ingresá el código de activación que te enviamos por E-Mail.</Text>
                            </View>
                            <Form style={{ margin: 24, }}>
                                <Item last>
                                    <Input value={activationCode} keyboardType="numeric" onChangeText = {handleActivationCodeChange} />
                                </Item>
                            </Form>
                        </View>
                        <View style={{ flex: 0.1, justifyContent: 'flex-end', margin: 32, }}>

                            {
                                (sourceView ===REGISTRATION_END) ?(
                                    <Button 
                                        onPress={() => handleBttonEntry()} 
                                        light  
                                        style={{ backgroundColor: '#F16921', borderColor: '#f16820' }}
                                        disabled={disabled}
                                    >
                                        <Text style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase' }} >INGRESAR </Text>
                                    </Button>
                                ):(
                                    <Button 
                                        onPress={() => handleBttonValidateKey()} 
                                        light  
                                        style={{ backgroundColor: '#F16921', borderColor: '#f16820' }}
                                        disabled={disabled}
                                    >
                                        <Text style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase' }} >VALIDAR CÓDIGO </Text>
                                    </Button>
                                )
                            }
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )

};