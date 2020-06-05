import React, { useState, useEffect } from "react";
import { View, Button as NativeButton, ScrollView, TouchableOpacity, Switch, Image } from "react-native"
import { Body, Container, Content, Text, Toast, Button, Form, Item, Card, CardItem } from "native-base";
import { TextInputMask} from 'react-native-masked-text';
import { RadioButton } from 'react-native-paper';
import { Ionicons,AntDesign,Entypo } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { requestProcedure } from '../../redux/ducks/procedureDucks';
import { useDispatch } from "react-redux";

import MenuBar from '../MenuBar';

import {EMPTY_MESSAGE,
        MALE_GENDER,
        FEMALE_GENDER,
        WRONG_CUIL,
        EMPTY_CUIL,
        WRONG_CUIT,
        EMPTY_CUIT,
        PROCEDURE_SEND_SUCCESS,
        POSITION_BOTTOM,
        SUCCESS_TYPE,
        OK,
        WARNING} from '../../consts';

import {validateCUIL, validateCUIT} from '../../utils';

export default function UploadProcedure({ navigation }) {

  const dispatch = useDispatch();

  const [state, setState] = useState({multipleCreate: false});
  const [hasPermission, setHasPermission] = useState(null);
  const [photo, setPhoto] = useState({});
  const [cuil, setCUIL] = useState("");
  const [cuit, setCUIT] = useState("");
  const [gender, setGender] = useState(MALE_GENDER);
  const [creationDate, setCreationDate] = useState(new Date());
  const [errMssg, setErrMssg] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleSendForm = () => {
    //TODO: QUE HACE ESTO ??
    
  }
  
  const handleSendProcedure = () => {
    let mssg = errorMssg();
    if(mssg.length >0){
      setErrMssg(mssg);
    }else{
      const payload = { cuit , cuil , gender , creationDate };
      dispatch(requestProcedure(payload));

    //TODO: REEMPLAZAR POR MODAL-POPUP
    Toast.show({
      text: PROCEDURE_SEND_SUCCESS,
      buttonText: OK,
      position: POSITION_BOTTOM,
      type: SUCCESS_TYPE,
      duration: 3000
    })
    setCUIL(null);
    setCUIT(null);
    //setPhoto(null);
    }
  }
  
  var _textInput, _textInput1;

  const handleChangeCUIT = (text) => {
    setErrMssg("");
    setCUIT(text);
  }

  const handleChangeCUIL = (text) => {
    setErrMssg("");
    setCUIL(text);
  }

  const errorMssg =() =>{
    if(!cuit.trim()){
      return EMPTY_CUIT;
    }
    if(!validateCUIT(cuit)){
      return WRONG_CUIT;
    }
    if(!cuil.trim()){
      return EMPTY_CUIL;
    }
    if(!validateCUIL(cuil,gender)){
      return WRONG_CUIL;
    }
    return EMPTY_MESSAGE;
  }

   const pickImage = async () => {
    try {
      // ImagePicker.launchCameraAsync(options)

      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        aspect: [16, 9],
        quality: 1,
      });
      if (!result.cancelled) {
        setPhoto({ image: result });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  return (
    <Container>
      <MenuBar onPress={() => navigation.openDrawer()} />
      <Content contentContainerStyle={{ flex: 1 }}>
        <View style={{ flex: 1, }}>
          <ScrollView keyboardShouldPersistTaps = 'always' style={{ flex: 1 }}>
            <Form style={{ margin: 24 }}>
              <Text style={{ marginBottom: 16, textAlign: 'center', fontWeight: 'bold' }}>INICIAR NUEVO TRÁMITE</Text>
              <Item>
                <TextInputMask 
                  type={'custom'}
                  options={{
                    mask: '99-99999999-9'
                    
                  }}
                  value={cuit}
                  onChangeText={text => handleChangeCUIT(text)}
                  placeholder = "Completá el CUIT"
                  style={{ margin: 5, fontSize: 17, justifyContent: 'flex-start', marginTop: 12, marginBottom: 12 }}
                />
                <TouchableOpacity>
                  <Entypo name='cross' size={24} color="gray" />
                </TouchableOpacity> 
              </Item>
              <Item>
                <Switch style={{ marginBottom: 16, marginTop: 16, }} />
                <Text>Alta múltiple de la misma empresa</Text>
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
                  placeholder = "Completá el CUIL"
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
                    {
                      (photo.image)?
                      (<Image source={{uri: photo.image.uri}} style={{height: 200, width: null, flex: 1}}/>)
                      :
                      (<Text>No hay foto</Text>)
                    }
                  </CardItem>
                </Card>
              </Item>
              <Button warning style={{ margin: 10, backgroundColor: '#fff', borderRadius: 4, flexDirection: 'row'}} onPress={pickImage}>
                <AntDesign style={{flex: 1, textAlign: 'center'}} name="camera" size={24} color="black" />
                  {/* <Text style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase', color:'black'}}>cargar una imagen</Text> */}
              </Button>
              { 
                (errMssg.length >0) && (
                                          <>    
                                            <Text style={{ textAlign: 'center', fontWeight: 'bold',color:'red' }}>{WARNING}</Text>
                                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color:'red' }}>{errMssg}</Text>
                                          </>
                                       )
              } 
              
              <Button warning style={{ margin: 10, backgroundColor: '#f16820', borderRadius: 4 }} onPress={() => handleSendProcedure() }>
                <Text style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase', }}>comenzar trámite</Text>
              </Button>
              <Button dark bordered warning style={{ margin: 10, borderColor: '#f16820', borderRadius: 4 }} onPress={() => { _textInput1.setNativeProps({ height: '100%', width: '100%', opacity: 100 }); }}>
                <Text style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase', color: '#f16820', }}>tutorial: foto</Text>
              </Button>
              <Button disabled light style={{ margin: 10, backgroundColor: 'gray', borderRadius: 4 }} onPress={() => handleSendForm() }>
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
