import React, {useEffect, useState, Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AsyncStorage} from "react-native";
import {Container, Content, Text, Grid, Button} from "native-base";
import {login} from "../../redux/actions/authenticate";


import styles from "./style";
import genericStyles from "../../styles";
import {
    ACCESS_TOKEN,
    HOME
} from "../../consts";

export default function Login({navigation}) {
    const dispatch = useDispatch();

    const loginData = useSelector(state => state.authenticate.login);
    const error = useSelector(state => state.authenticate.error);

    const handleLoginPress = async () => {
        dispatch(login({}));
    };

    const setToken = async () => {
        try {
            await AsyncStorage.setItem(ACCESS_TOKEN, loginData);
            navigation.navigate(HOME);
        } catch (e) {
            console.error(e);
            alert('Ah ocurrido un error')
        }
    }

    useEffect(() => {
        if (loginData) {
            setToken();
        }
    });

    return (
        <Container>
            <Content
                contentContainerStyle={[genericStyles.centeredContent, styles.content]}
            >
                <Grid style={[genericStyles.centeredGrid, styles.grid]}>
                    <Text style={styles.title}>Bienvenidos!</Text>
                    <Text style={styles.subtitle}>Inicia sesion para continuar</Text>
                    <Button light style={styles.loginBtn} onPress={handleLoginPress}>
                        <Text>Log in </Text>
                    </Button>
                </Grid>
            </Content>
        </Container>
    );
}
