import React from 'react';
import { Container, Content, Grid, Form, Text, Button, Item,Icon } from 'native-base';
import {useSelector} from 'react-redux';

import genericStyles from '../../styles';
import styles from './style';

import { requestExecutive } from '../../redux/ducks/executiveDucks';
import {ACCOUNT_ACTIVATION} from '../../consts';


export default function EmailNotification({navigation}){

    const firstName = useSelector(store => store.executive.firstName);
    const lastName = useSelector(store => store.executive.lastName);
    const cuil = useSelector(store => store.executive.cuil);
    const email = useSelector(store => store.executive.email);

    const handleSend = ()=>{
        const payload = { lastName, firstName, cuil, password, email, network, filialZone}
        dispatch(requestExecutive(payload));
        //TODO: A DONDE DEBERIA REDIRIGIRLO ??
    }

    const handleForwardPress = ()=>{
        navigation.navigate(ACCOUNT_ACTIVATION);
    }

    return(
        <Container>
            <Content contentContainerStyle={styles.content}>
                <Grid style={genericStyles.centeredGrid}>
                    {/* TODO: ESTO ES TEMPORAL, DSP SACARLO EL BUTTON */}
                    <Button
                        transparent
                        style={styles.forwardButton}
                        onPress={handleForwardPress}
                    >
                        <Icon
                            android="md-arrow-forward"
                            ios="ios-arrow-forward"
                            style={styles.forwardIcon}
                        />
                    </Button>
                    <Form style={genericStyles.form}>
                        <Text style={styles.subtitle}>E-MAIL DE REGISTRO ENVIADO</Text>
                        
                        <Item style={styles.item}>
                            <Text style={styles.textColor}> 
                                    Se envió un E-Mail satisfactoriamente
                                        a {email}.  
                            </Text>
                        </Item>
                        
                        <Item style={styles.item}>
                            <Text style={styles.textColor}>  
                                    Al cabo de unos 10 minutos como
                                    máximo deberías recibirlo. Este 
                                    contiene un link y código. Abrí el 
                                    contenido del E-mail con el celular en el
                                    que tenés instalada la aplicación.
                                </Text>
                        </Item>
                        
                        <Item style={styles.item}>
                            <Text style={styles.textColor}>  
                                Si no recibiste el E-Mail, solicitalo 
                                nuevamente. Y si no lo recibís 
                                contactate con el 4223-2233. 
                            </Text>
                        </Item>
                        
                        <Button  style={ genericStyles.btnDefault} bordered light onPress={() => handleSend()}>
                            <Text style={genericStyles.textWhite}>SOLICITAR NUEVO E-MAIL </Text>
                        </Button>
                    </Form>
                </Grid>
            </Content>
        </Container>
    )

};