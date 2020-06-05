import React, {useState} from 'react';
import {Text} from 'react-native';
import { Container, Content, Grid, Item, Form, Picker, Button,  Icon,  Input } from 'native-base';
import { TextInputMask} from 'react-native-masked-text';

import genericStyles from '../../styles';
import styles from './style';
import MenuBar from '../../components/MenuBar';

import {validateCUIL,validateCUIT} from '../../utils';

export default function NotificationFilters({navigation}){

    const [cuit, setCuit] = useState("");
    const [cuil, setCuil] = useState(null); 
    const [procedureNumber, setProcedureNumber] = useState(null);
    const [workflow, setWorkflow] = useState("");


    const handleChangeCUIT = text =>{
        setCuit(text);
    };

    const handleChangeCUIL = text =>{
        setCuil(text);
    };

    const handleChangeProcedureNumber = value =>{
        setProcedureNumber(value);
    };

    const handleChangeWorkflow = text =>{
        setWorkflow(text);
    };

    return(
        <Container>
            {/* <Content contentContainerStyle={styles.wrapperImg}>
                <Image source={require('../../../assets/ase_nacional_imagen_app.png')} 
                    style={styles.img}/>
            </Content> */}
             <MenuBar 
                onPress={() => navigation.openDrawer()}
              />
            <Content contentContainerStyle={[styles.content]}>
                <Grid style={genericStyles.centeredGrid}>
                    <Form style={genericStyles.form}>
                        <Text style={styles.subtitle}>Aplicar Filtros en Notificaciones</Text>
                        <Item >
                            <TextInputMask
                                type={'custom'}
                                options={{
                                mask: '99-99999999-9'
                    
                                }}
                                value={cuit}
                                onChangeText={text => handleChangeCUIT(text)}
                                placeholder = "Por Cuit o Empresa"
                                placeholderTextColor = "white"
                                style={{ margin: 5, fontSize: 17, justifyContent: 'flex-start', marginTop: 12, marginBottom: 12 }}
                            />
                        </Item>
                        <Item >
                            <TextInputMask
                                type={'custom'}
                                options={{
                                mask: '99-99999999-9'
                                }}
                                value={cuil}
                                onChangeText={text => handleChangeCUIL(text)}
                                placeholder = "Por CUIL"
                                placeholderTextColor = "white"
                                style={{ margin: 5, fontSize: 17, justifyContent: 'flex-start', marginTop: 12, marginBottom: 12 }}
                            />
                        </Item >
                            <Text style={genericStyles.textWhite}>Estado</Text>   
                                    
                            <Item>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    // placeholder="Seleccionar..."
                                    // placeholderStyle={{ color: "#bfc6ea" }}
                                    // placeholderIconColor="#007aff"
                                    selectedValue={procedureNumber}
                                    onValueChange={handleChangeProcedureNumber}
                                >   
                                    <Picker.Item  label="Seleccionar..." value="key0" />
                                    <Picker.Item  label="Estado1" value="key1" />
                                    <Picker.Item  label="Estado2" value="key2" />
                                </Picker>
                            </Item>
                                <Text style={genericStyles.textWhite}>Por # de tramite</Text>
                            <Item  >
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    // placeholder="Seleccionar..."
                                    // placeholderStyle={{ color: "#bfc6ea" }}
                                    // placeholderIconColor="#007aff"
                                    selectedValue={workflow}
                                    onValueChange={handleChangeWorkflow}
                                >
                                    <Picker.Item  label="Seleccionar..." value="key0" />
                                    <Picker.Item  label="Tramite1" value="key1" />
                                    <Picker.Item  label="Tramite2" value="key2" />
                                </Picker>
                            </Item>
                            <Button light style={[ {backgroundColor: '#e75300'} , genericStyles.btnDefault]}>
                                <Text style={genericStyles.textWhite}>Aplicar Filtros </Text>
                            </Button>
                    </Form>
                </Grid>    
            </Content>   
        </Container>
    );
};