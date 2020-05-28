import React, { useState, useEffect } from "react";
import { View, Button as NativeButton, ScrollView, TouchableOpacity, Switch, } from "react-native"
import { Header, Left, Body, Right, Icon, Title, Container, Content, Text, Grid, Button, Form, Item, Input, Card, CardItem, Picker } from "native-base";
import genericStyles from "../../styles";
import MenuBar from '../MenuBar'

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function UploadProcedure({ navigation }) {

  const [state, setState] = useState({
    multipleCreate: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  var _textInput;

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
              <Text style={{ textAlign: 'center', fontWeight: 'bold', margin: 24  }}>INCIAR NUEVO TRAMITE</Text>
              <Item>
                <Input placeholder="Completa el CUIT" />
                <TouchableOpacity>
                  <Entypo name='cross' size={24} color="gray" />
                </TouchableOpacity>
              </Item>
              <Item>
                <Switch style={{ marginBottom: 16, marginTop: 16, }} />
                <Text>Alta multiple de la misma empresa</Text>
              </Item>
              <Item last>
                <Input placeholder="Completa el CUIL" />
              </Item>
              <Item>
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
              <Button warning style={{ margin: 10, backgroundColor: '#f16820' }} onPress={() => { _textInput.setNativeProps({ height: '100%', width: '100%', opacity: 100 }); }}>
                <Text style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase', }}>comenzar tramite</Text>
              </Button>
              <Button dark bordered warning style={{ margin: 10, borderColor: '#f16820' }}>
                <Text style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase', color: '#f16820', }}>tutorial: foto</Text>
              </Button>
              <Button light style={{ margin: 10, backgroundColor: 'gray', }}>
                <Text style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase', color: 'white', }}>enviar formulario</Text>
              </Button>
            </Form>
          </ScrollView>
          <TouchableOpacity ref={component => _textInput = component} style={{ flex: 1, backgroundColor: '#000000bb', position: 'absolute', left: 0, top: 0, height: '100%', width: '100%', }} onPress={() => { _textInput.setNativeProps({ height: 0, width: 0, opacity: 0 }); }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
              <Text style={{ color: 'white', margin: 24 }}>CÓMO UTILIZAR LA APP ASE</Text>
              <Text style={{ color: 'white', margin: 24, width: '75%' }}>1) Buscá la empresa por nombre o ASES</Text>
              <Text style={{ color: 'white', margin: 24, width: '75%' }}>2) Determiná si vas a cargar varias altas para la misma empresa</Text>
            </View>
            <View>
              <Button bordered full style={{ borderColor: 'white', margin: 16 }} onPress={() => { _textInput.setNativeProps({ height: 0, width: 0, opacity: 0 }); }}>
                <Text style={{ color: 'white', textTransform: 'uppercase' }}>volver</Text>
              </Button>
            </View>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );

}