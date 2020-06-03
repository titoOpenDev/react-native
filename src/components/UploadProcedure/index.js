import React, { useState, useEffect } from "react";
import { View, Button as NativeButton, ScrollView, TouchableOpacity, Switch, } from "react-native"
import { Header, Left, Body, Right, Icon, Title, Container, Content, Text, Grid, Button, Form, Item, Input, Card, CardItem, Picker } from "native-base";
import { TextInputMask} from 'react-native-masked-text';
import { RadioButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import MenuBar from '../MenuBar';

import {EMPTY_MESSAGE,
        MALE_GENDER,
        FEMALE_GENDER,
        WRONG_CUIL,
        EMPTY_CUIL,
        WRONG_CUIT,
        EMPTY_CUIT} from '../../consts';

import {validateCUIL, validateCUIT} from '../../utils';

export default function UploadProcedure({ navigation }) {

  const [state, setState] = useState({
    multipleCreate: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleSendForm = () =>{
    let errMssg = errorMssg();
    if(errMssg.length >0){
      alert(errMssg);
    }else{
      alert("Validación OK!!");
      //TODO: AGREGAR LOCIGA
    }
  }

  const [cuil, setCUIL] = useState("");
  const [cuit, setCUIT] = useState("");
  const [gender, setGender] = useState(MALE_GENDER);

  var _textInput, _textInput1;

  const handleChangeCUIT = (text) => {
    setCUIT(text);
  }

  const handleChangeCUIL = (text) => {
    setCUIL(text);
  }

  const errorMssg =() =>{
    if(!cuil.trim()){
      return EMPTY_CUIL;
    }
    if(!validateCUIL(cuil,gender)){
      return WRONG_CUIL;
    }
    if(!cuit.trim()){
      return EMPTY_CUIT;
    }
    if(!validateCUIT(cuil)){
      return WRONG_CUIT;
    }
    return EMPTY_MESSAGE;
  }

  // const handleShow = () => {
  // }

  // const handleHide = () => {
  // }

  return (
    <Container>
      <MenuBar onPress={() => navigation.openDrawer()} />
      <Content contentContainerStyle={{ flex: 1 }}>
        <View style={{ flex: 1, }}>
          <ScrollView style={{ flex: 1 }}>
            <Form style={{ margin: 24 }}>
              <Text style={{ marginBottom: 16, textAlign: 'center', fontWeight: 'bold' }}>INICIAR NUEVO TRAMITE</Text>
              <Item>
                <TextInputMask
                  type={'custom'}
                  options={{
                    mask: '99-99999999-9'
                    
                  }}
                  value={cuit}
                  onChangeText={text => handleChangeCUIT(text)}
                  placeholder = "Completa el CUIT"
                  style={{ margin: 5, fontSize: 17, justifyContent: 'flex-start', marginTop: 12, marginBottom: 12 }}
                />
                <TouchableOpacity>
                  <Entypo name='cross' size={24} color="gray" />
                </TouchableOpacity> 
              </Item>
              <Item>
                <Switch style={{ marginBottom: 16, marginTop: 16, }} />
                <Text>Alta multiple de la misma empresa</Text>
              </Item>
              <Item>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                    <Text>Sexo</Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', alignContent: 'flex-end', paddingRight: 16, }}>
                      <RadioButton
                        value={gender}
                        status={gender === MALE_GENDER ? 'checked' : 'unchecked'}
                        onPress={() => { setGender(MALE_GENDER) }}
                        color = {'red'}
                        uncheckedColor={'black'}
                      />
                      <Text>{MALE_GENDER}</Text>
                      <RadioButton
                        value={gender}
                        status={gender === FEMALE_GENDER ? 'checked' : 'unchecked'}
                        onPress={() => { setGender(FEMALE_GENDER) }}
                        color = {'red'}
                        uncheckedColor={'black'}
                      />
                    <Text>{FEMALE_GENDER}</Text>  
                  </View>
                </View>
              </Item>
              <Item>
                <TextInputMask
                  type={'custom'}
                  options={{
                    mask: '99-99999999-9'
                  }}
                  value={cuil}
                  onChangeText={text => handleChangeCUIL(text)}
                  placeholder = "Completa el CUIL"
                  style={{ margin: 5, fontSize: 17, justifyContent: 'flex-start', marginTop: 12, marginBottom: 12 }}
                />
              </Item>
              <Item last>
                <Card style={{ height: 200, flex: 1, alignItems: 'center', alignContent: 'center', justifyContent: 'center', borderColor: 'black' }}>
                  <CardItem>
                    <Body style={{ alignItems: 'center', }}>
                      <Ionicons name="md-add" size={24} color="black" />
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Body style={{ alignItems: 'center', }}>
                      <Text>Cargar una imagen</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Item>
              <Button warning style={{ margin: 10, backgroundColor: '#f16820', borderRadius: 4 }} onPress={() => { _textInput.setNativeProps({ height: '100%', width: '100%', opacity: 100 }); }}>
                <Text style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase', }}>comenzar tramite</Text>
              </Button>
              <Button dark bordered warning style={{ margin: 10, borderColor: '#f16820', borderRadius: 4 }} onPress={() => { _textInput1.setNativeProps({ height: '100%', width: '100%', opacity: 100 }); }}>
                <Text style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase', color: '#f16820', }}>tutorial: foto</Text>
              </Button>
              <Button light style={{ margin: 10, backgroundColor: 'gray', borderRadius: 4 }} onPress={handleSendForm}>
                <Text style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase', color: 'white', }}>enviar formulario</Text>
              </Button>
            </Form>
          </ScrollView>
          <TouchableOpacity ref={component => _textInput = component} style={{ flex: 1, backgroundColor: '#000000DD', position: 'absolute', left: 0, top: 0, height: 0, width: 0, opacity: 0 }} onPress={() => { _textInput.setNativeProps({ height: 0, width: 0, opacity: 0 }); }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
              <Text style={{ color: 'white', margin: 24, fontWeight: 'bold' }}>CÓMO UTILIZAR LA APP ASE</Text>
              <Text style={{ color: 'white', margin: 10, width: '75%' }}>1) Buscá la empresa por nombre o ASES</Text>
              <Text style={{ color: 'white', margin: 10, width: '75%' }}>2) Determiná si vas a cargar varias altas para la misma empresa</Text>
              <Text style={{ color: 'white', margin: 10, width: '75%' }}>3) Ingresá el CUIL de la persona</Text>
              <Text style={{ color: 'white', margin: 10, width: '75%' }}>4) Sacá o cargá una foto del formulario 01</Text>
              <Text style={{ color: 'white', margin: 10, width: '75%' }}>5) Determiná si vas a cargar varias altas para la misma empresa</Text>
              <Text style={{ color: 'white', margin: 16, width: '75%' }}>Otras funciones: Seguí el estado de tus trámites y consultá las</Text>
            </View>
            <View>
              <Button bordered full style={{ borderColor: 'white', margin: 16, borderRadius: 4 }} onPress={() => { _textInput.setNativeProps({ height: 0, width: 0, opacity: 0 }); }}>
                <Text style={{ color: 'white', textTransform: 'uppercase', fontWeight: 'bold' }}>volver</Text>
              </Button>
            </View>
          </TouchableOpacity>
          <TouchableOpacity ref={component => _textInput1 = component} style={{ flex: 1, backgroundColor: '#000000DD', position: 'absolute', left: 0, top: 0, height: 0, width: 0, opacity: 0 }} onPress={() => { _textInput.setNativeProps({ height: 0, width: 0, opacity: 0 }); }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
              <Text style={{ color: 'white', margin: 24, textAlign: 'center', fontWeight: 'bold' }}>RECOMENDACIONES PARA CAPTURAR LA FOTO DEL FORMULARIO</Text>
              <Text style={{ color: 'white', margin: 10, width: '75%' }}>1) Apoyá el formulario en una mesa</Text>
              <Text style={{ color: 'white', margin: 10, width: '75%' }}>2) Acomodá el formulario y la cámara de modo vertical</Text>
              <Text style={{ color: 'white', margin: 10, width: '75%' }}>3) Sostené la cámara con las dos manos y obtené la foto.</Text>
              <Text style={{ color: 'white', margin: 10, width: '75%' }}>En algunos teléfonos más avanzados, la cámara detecta si la foto está fuera de foco.</Text>
              <Text style={{ color: 'white', margin: 10, width: '75%' }}>4) Una vez obtenida, enviá el trámite y esperá la respuesta del sistema.</Text>
            </View>
            <View>
              <Button bordered full style={{ borderColor: 'white', margin: 16, borderRadius: 4 }} onPress={() => { _textInput1.setNativeProps({ height: 0, width: 0, opacity: 0 }); }}>
                <Text style={{ color: 'white', textTransform: 'uppercase', fontWeight: 'bold' }}>volver</Text>
              </Button>
            </View>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );

}