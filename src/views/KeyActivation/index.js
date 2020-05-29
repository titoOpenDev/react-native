import React, { useState, useEffect } from 'react';
import { Image, View} from "react-native";
import { Container, Grid, Form, Text, Item,Button,Input} from 'native-base';

import styles from './style';
import genericStyles from '../../styles';
import {REGISTRATION_END, LOGIN} from '../../consts';

export default function KeyActivation({route, navigation}){

    const [activationCode, setActivationCode] = useState('');
    const [disabled, setDisabled] = useState(true);

    const {sourceView} = route.params;

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
        navigation.navigate(LOGIN);
        setActivationCode("");
    }

    return(
        <Container>
             <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                <Image source={require('../../../assets/ase_nacional_imagen_app.png')} style={{ width: 180, height: 60 }} />
             </View>
             <Grid style={genericStyles.centeredGrid}>
                <Form style={genericStyles.form}>
                    {
                        (sourceView ===REGISTRATION_END) ?(
                            <Text style={styles.subtitle}>ACTIVACIÓN DE CUENTA</Text>
                        ):(
                            <Text style={styles.subtitle}>RECUPERO DE CLAVE</Text>
                        )
                    }
                    
                    <Item style={styles.item}>
                        <Text > 
                            Si llegaste hasta esta pantalla es porque recibiste el link
                            de activación de tu cuenta.
                        </Text>
                    </Item>
                    <Item style={styles.item}>
                        <Text > 
                            Ingresá el código de activación que te enviamos por
                            E-Mail.
                        </Text>
                    </Item>
                    <Item >
                        <Input 
                            value={activationCode} 
                            keyboardType="numeric"
                            onChangeText = {handleActivationCodeChange}
                        />
                    </Item>
                    
                    {
                        (sourceView ===REGISTRATION_END) ?(
                            <Button 
                                onPress={() => handleBttonEntry()} 
                                light  
                                style={[ {backgroundColor: '#e75300'} , genericStyles.btnDefault]}
                                disabled={disabled}
                            >
                                <Text style={genericStyles.textWhite} >INGRESAR </Text>
                            </Button>
                        ):(
                            <Button 
                                onPress={() => handleBttonValidateKey()} 
                                light  
                                style={[ {backgroundColor: '#e75300'} , genericStyles.btnDefault]}
                                disabled={disabled}
                            >
                                <Text style={genericStyles.textWhite} >VALIDAR CÓDIGO </Text>
                            </Button>
                        )
                    }
                </Form>
            </Grid>
        </Container>
    )

};