import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView, View, Platform, Dimensions } from "react-native";
import { Text, Button, Form, Item, Input } from "native-base";
import { login } from '../../redux/ducks/authenticateDucks';
import { Ionicons } from '@expo/vector-icons';

import { ERROR_MSSG } from '../../consts';
import styles from "./style";

import {
    PASSWORD_RECOVERY,
    REGISTRATION_BEGIN,
    EMPTY_PASSWORD,
    EMPTY_USERNAME,
    EMPTY_MESSAGE
} from "../../consts";

export default function Login({ navigation }) {
    const dispatch = useDispatch();
    
    const error = useSelector(store => store.authentication.error);

    const { height } = Dimensions.get('window');

    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [eye, setEye] = useState('md-eye')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMssg, setErrMssg] = useState('');

    useEffect(() => {
        if(error){
            alert(ERROR_MSSG)
            console.log(error);
        }
    },[error]);

    const handleLoginPress = async () => {
        let mssg = errorMssg();
        if(mssg.length >0){
            setErrMssg(mssg);
            return;
        }else{
            dispatch(login({username , password}));
        }
    };

    const errorMssg = () =>{
        if(!username.trim()){
            return EMPTY_USERNAME;
        }
        if(!password.trim()){
            return EMPTY_PASSWORD;
        }
        return EMPTY_MESSAGE;
    }

    const handleTouchableOpacity = async () => {
        const eyeName = secureTextEntry ? 'md-eye-off' : 'md-eye';
        setSecureTextEntry(!secureTextEntry);
        setEye(eyeName);
    }

    const handleChangeUsername = (text) => {
        setUsername(text);
        setErrMssg('');
    }

    const handleChangePassword = (text) => {
        setPassword(text);
        setErrMssg('');
    }

    const handleRegistry = () => {
        navigation.navigate(REGISTRATION_BEGIN);
    }

    const handlePasswordRecovery = () => {
        navigation.navigate(PASSWORD_RECOVERY);
    }

    return (
        <SafeAreaView  style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS == "ios" ? 50 : -100}>
                <ScrollView keyboardShouldPersistTaps = 'always' style={styles.scrollView} bounces={false}>
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
                            <View style={{ margin: 10 }}>
                                { 
                                    (errMssg.length >0) && (
                                                            <>    
                                                                <Text style={{ textAlign: 'center', fontWeight: 'bold',color:'red' }}>ATENCIÓN</Text>
                                                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color:'red' }}>{errMssg}</Text>
                                                            </>
                                                    )
                                } 
                                <Button warning style={{ margin: 10, backgroundColor: '#f16921' }} onPress={handleLoginPress}>
                                    <Text style={{ flex: 1, textAlign: 'center' }}>Iniciar sesión</Text>
                                </Button>
                                <Button light style={{ margin: 10, backgroundColor: 'gray' }} onPress={handleRegistry}>
                                    <Text style={{ color: 'white', flex: 1, textAlign: 'center' }}>No tengo cuenta</Text>
                                </Button>
                                <Button dark bordered warning style={{ margin: 10, borderColor: 'orange'}} onPress={handlePasswordRecovery}>
                                    <Text style={{ color: '#f16921', flex: 1, textAlign: 'center' }}>Olvidé mi clave</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
