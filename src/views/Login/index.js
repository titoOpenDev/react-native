import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView, View, Platform, Dimensions } from "react-native";
import { Container, Content, Text, Grid, Button, Form, Item, Input } from "native-base";
import { login } from '../../redux/ducks/authenticateDucks';
import { saveItem } from '../../utils';
import { Ionicons } from '@expo/vector-icons';

import { ERROR_MSSG } from '../../consts';
import styles from "./style";
import genericStyles from "../../styles";
import {
    ACCESS_TOKEN,
    LOGIN,
    HOME,
    PASSWORD_RECOVERY,
    REGISTRATION_BEGIN,
    NOTIFICATION_FILTERS,
    CALCULATOR_RESULTS
} from "../../consts";

export default function Login({ navigation }) {
    const dispatch = useDispatch();
    const loginData = useSelector(store => store.authentication.login);
    const error = useSelector(store => store.authentication.error);
    const loged = useSelector(store => store.authentication.loged);

    const { height } = Dimensions.get('window');

    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [eye, setEye] = useState('md-eye')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (loginData) { setToken(); }
        if (error) { alert(ERROR_MSSG); }
        if (loged) { navigation.navigate(HOME); }
    }, [loginData, error, loged]);

    const handleLoginPress = async () => {
        navigation.navigate(HOME);
        // dispatch(login({username , password}));
        // if(loginData) {
        //     navigation.navigate(HOME);
        // }else{
        //     alert(error)
        // }
    };

    const handleTouchableOpacity = async () => {
        const eyeName = secureTextEntry ? 'md-eye-off' : 'md-eye';
        setSecureTextEntry(!secureTextEntry);
        setEye(eyeName);
    }

    const handleChangeUsername = (text) => {
        setUsername(text);
    }

    const handleChangePassword = (text) => {
        const activated = text.length > 4 ? false : true;
        setDisabled(activated)
        setPassword(text)
    }

    const handleRegistry = () => {
        navigation.navigate(REGISTRATION_BEGIN);
    }

    const handlePasswordRecovery = () => {
        navigation.navigate(PASSWORD_RECOVERY);
    }

    const setToken = async () => {
        try {
            await saveItem(ACCESS_TOKEN, loginData);
            navigation.navigate(LOGIN);
        } catch (e) {
            console.error(e);
            alert('Ah ocurrido un error')
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS == "ios" ? 50 : -100}>
                <ScrollView style={styles.scrollView} bounces={false}>
                    <View style={{ backgroundColor: 'green', minHeight: height }}>
                        <View style={{ backgroundColor: '#7a7e7f', flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                            <Image source={require('../../../assets/ase_nacional_imagen_app.png')} style={{ width: 180, height: 60 }} />
                        </View>
                        <View style={{ backgroundColor: 'white', flex: 0.4, justifyContent: 'center', alignContent: 'center', }}>
                            <View style={{ margin: 10 }}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>INGRESO</Text>
                                <Form>
                                    <Item last>
                                        <Input placeholder="Usuario" onChangeText={text => handleChangeUsername(text)}/>
                                    </Item>
                                    <Item last>
                                        <Input placeholder="Clave" onChangeText={text => handleChangePassword(text)} secureTextEntry={secureTextEntry}/>
                                        <TouchableOpacity onPress={handleTouchableOpacity}>
                                            <Ionicons name={eye} size={24} color="gray" />
                                        </TouchableOpacity>
                                    </Item>
                                </Form>
                            </View>
                            <View style={{ margin: 10, }}>
                                <Button warning style={{ margin: 10, backgroundColor: '#f16921', }} onPress={handleLoginPress}>
                                    <Text style={{ flex: 1, textAlign: 'center' }}>Iniciar sesion</Text>
                                </Button>
                                <Button light style={{ margin: 10, backgroundColor: 'gray', }} onPress={handleRegistry}>
                                    <Text style={{ color: 'white', flex: 1, textAlign: 'center' }}>No tengo cuenta</Text>
                                </Button>
                                <Button dark bordered warning style={{ margin: 10, borderColor: 'orange'}} onPress={handlePasswordRecovery}>
                                    <Text style={{ color: '#f16921', flex: 1, textAlign: 'center' }}>Olvide mi clave</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
