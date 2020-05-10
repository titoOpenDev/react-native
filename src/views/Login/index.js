import React, {useEffect, useState, Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AsyncStorage , Image, TouchableOpacity} from "react-native";
import {Container, Content, Text, Grid, Button, Form , Item , Input} from "native-base";
import {login} from '../../redux/ducks/authenticateDucks';
import { Ionicons } from '@expo/vector-icons'; 

import styles from "./style";
import genericStyles from "../../styles";
import {
    ACCESS_TOKEN,
    LOGIN,
    HOME,
    PASSWORD_RECOVERY,
    REGISTRATION_BEGIN
} from "../../consts";

export default function Login({navigation}) {
    const dispatch = useDispatch();
    const loginData = useSelector(store => store.authentication.login);
    const error = useSelector(store => store.authentication.error);
    
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [eye , setEye] = useState('md-eye')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [disabled , setDisabled] = useState(true);

    useEffect(() => {
        if (loginData) { setToken(); }
    });

    const handleLoginPress = async () => {
        dispatch(login({}));
        navigation.navigate(HOME);
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
            await AsyncStorage.setItem(ACCESS_TOKEN, loginData);
            navigation.navigate(LOGIN);
        } catch (e) {
            console.error(e);
            alert('Ah ocurrido un error')
        }
    }
    return (
        <Container>
            <Content contentContainerStyle={styles.wrapperImg}>
                <Image source={require('../../../assets/ase_nacional_imagen_app.png')} 
                    style={styles.img}/>
            </Content>

            <Content contentContainerStyle={[genericStyles.centeredContent, styles.content]}>
                <Grid style={[genericStyles.centeredGrid, styles.grid]}>
                    <Text style={styles.subtitle}>INGRESO</Text>
                    <Form style={genericStyles.form}>
                        <Item last>
                            <Input placeholder="Usuario" onChangeText={text => handleChangeUsername(text)}/>
                        </Item>
                        <Item last>
                            <Input placeholder="Clave" onChangeText={text => handleChangePassword(text)} secureTextEntry={secureTextEntry} />
                            <TouchableOpacity onPress={handleTouchableOpacity}>
                                <Ionicons name={eye} size={24} color="black" />
                            </TouchableOpacity>
                        </Item>
                    </Form>
                </Grid>
            </Content>
            <Content contentContainerStyle={[genericStyles.centeredContent, styles.content]}>
                <Grid style={[genericStyles.centeredGrid, styles.grid]}>
                    <Button light disabled={disabled} style={[styles.loginBtn , genericStyles.btnDefault]} onPress={handleLoginPress}>
                        <Text style={genericStyles.textWhite}>Iniciar sesión </Text>
                    </Button>
                    <Button onPress={handleRegistry} light style={[styles.logUpBtn , genericStyles.btnDefault]}>
                        <Text style={genericStyles.textBlack}>No tengo cuenta</Text>
                    </Button>
                    <Button onPress={handlePasswordRecovery} dark bordered warning style={[styles.losePasswordBtn , genericStyles.btnDefault]}>
                        <Text>Olvidé mi clave </Text>
                    </Button>
                </Grid>
            </Content>
        </Container>
    );
}
