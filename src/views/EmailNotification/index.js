import React from 'react';
import {
    Image,
    View
} from 'react-native';
import { Container, Content, Text, Button, Icon } from 'native-base';
import { useSelector } from 'react-redux';

import styles from './style';

import { requestExecutive } from '../../redux/ducks/executiveDucks';
import { KEY_ACTIVATION  } from '../../consts';


export default function EmailNotification({ route, navigation }) {

    const email = useSelector(store => store.executive.email);

    const handleSend = () => {
        //TODO: SOLO CON EL EMAIL ALCANZA PARA HACER EL REQUEST ??
        const payload = { email }
        dispatch(requestExecutive(payload));
    }

    const handleForwardPress = () => {
        navigation.navigate(KEY_ACTIVATION, route.params);
    }

    return (
        <Container>
            <Content contentContainerStyle={styles.content}>
                {/* TODO: ESTO ES TEMPORAL, DSP SACARLO EL BUTTON */}
                <Button
                    transparent
                    style={styles.forwardButton}
                    onPress={handleForwardPress}>
                    <Icon
                        android="md-arrow-forward"
                        ios="ios-arrow-forward"
                        style={styles.forwardIcon}
                    />
                </Button>

                <View style={{ flex: 1, alignItems: 'center', }}>
                    <View style={{ width: '75%', height: '90%', justifyContent: 'space-between' }}>
                        <Image source={require('../../../assets/ase_nacional_imagen_app.png')} style={{ marginTop: 50, width: 180, height: 60, alignSelf: 'center', tintColor: 'white' }} />
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>E-MAIL DE REGISTRO ENVIADO</Text>
                        <Text style={{ color: 'white' }}>Se envió un E-Mail satisfactoriamente a {email}.</Text>
                        <Text style={{ color: 'white' }}>Al cabo de unos 10 minutos como máximo deberías recibirlo. Este contiene un link y código. Abrí el contenido del E-Mail con el celular en el que tenés instalada la aplicación.</Text>
                        <Text style={{ color: 'white' }}>Si no recibite el E-Mail, solicitalo nuevamente. Y si no lo recibís contactate con el 4223-2233.</Text>
                    </View>
                </View>

                <Button bordered full style={{ borderColor: 'white', margin: 24, borderRadius: 5, }} onPress={() => handleSend()}>
                    <Text style={{ color: 'white', textTransform: 'uppercase' }}>SOLICITAR NUEVO E-MAIL</Text>
                </Button>

            </Content>
        </Container>
    )

};