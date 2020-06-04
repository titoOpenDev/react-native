import React,{useState} from 'react';
import { ScrollView, View} from "react-native"
import {Container,Content,Form,Text,Item,Button} from 'native-base';
import { TextInputMask} from 'react-native-masked-text';

import MenuBar from '../../components/MenuBar/index';

import { EMPTY_CUIL,
         WRONG_CUIL,
         EMPTY_CUIT,
         WRONG_CUIT,
         EMPTY_MESSAGE } from '../../consts';

import {validateCUIL, validateCUIT} from '../../utils';

export default function ProspectConsults({navigation}){

    const [cuil, setCuil] = useState("");
    const [cuit, setCuit] = useState("");

    const handleChangeCUIT = (text) =>{
        setCuit(text);
    };

    const handleChangeCUIL = (text) =>{
        setCuil(text);
    };

    const handleConsult = () =>{
        let errMssg = errorMssg();
        if(errMssg.length>0){
            alert(errMssg);
        }else{
            alert('validacion Ok!!')
        }
    }

    const errorMssg =() =>{
        if(!cuil.trim()){
          return EMPTY_CUIL;
        }
        if(!validateCUIL(cuil)){
          return WRONG_CUIL;
        }
        if(!cuit.trim()){
          return EMPTY_CUIT;
        }
        if(!validateCUIT(cuit)){
          return WRONG_CUIT;
        }
        return EMPTY_MESSAGE;
      }

    return(
        <Container>
            <MenuBar onPress={() => navigation.openDrawer()} />
            <Content contentContainerStyle={{ flex: 1 }}>
                <View style={{ flex: 1, }}>
                    <ScrollView style={{ flex: 1 }}>
                        <Form style={{ margin: 24 }}>
                            <Text style={{ marginBottom: 16, textAlign: 'center', fontWeight: 'bold' }}>INICIAR CONSULTA PROSPECT</Text>
                            <Item>
                                <TextInputMask 
                                    type={'custom'}
                                    options={{
                                        mask: '99-99999999-9'
                                    }}
                                    value={cuit}
                                    onChangeText= {(text)=>{handleChangeCUIT(text)}}
                                    placeholder = "Completa el CUIT o nombre de la Empresa"
                                    style={{ margin: 5, fontSize: 17, justifyContent: 'flex-start', marginTop: 12, marginBottom: 12 }}
                                />
                            </Item>
                            <Item>
                                <TextInputMask
                                    type={'custom'}
                                    options={{
                                        mask: '99-99999999-9'
                                    }}
                                    value={cuil}
                                    onChangeText={text => handleChangeCUIL(text)}
                                    placeholder = "Completá el CUIL"
                                    style={{ margin: 5, fontSize: 17, justifyContent: 'flex-start', marginTop: 12, marginBottom: 12 }}
                                />
                            </Item>
                            <Button style={{ margin: 10, backgroundColor: '#f16820', borderRadius: 4 }} onPress={() => handleConsult()}>
                                <Text style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase' }}>CONSULTAR</Text>
                            </Button>
                        </Form>
                    </ScrollView>
                </View>
            </Content>
        </Container>
    );
}