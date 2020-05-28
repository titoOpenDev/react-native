import React from 'react';
import { Container, Content, Grid, Form, Text, Button, Item } from 'native-base';
import {useSelector} from 'react-redux';

import genericStyles from '../../styles';
import styles from './style';

export default function EmailNotification({navigation}){

    const email = useSelector(store => store.executive.email);

    return(
        <Container>
            <Content contentContainerStyle={styles.content}>
                <Grid style={genericStyles.centeredGrid}>
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
                        
                        <Button  style={ genericStyles.btnDefault} bordered light>
                            <Text style={genericStyles.textWhite}>SOLICITAR NUEVO E-MAIL </Text>
                        </Button>
                    </Form>
                </Grid>
            </Content>
        </Container>
    )

};