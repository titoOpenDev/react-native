import styles from "./style";
import React, { useState, useEffect } from "react";
import {Text} from "react-native"
import { View, Form, Item, Input, Label, Body, ListItem, CheckBox, Button, Image, Container, Content, Textarea, Grid } from "native-base";
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import genericStyles from "../../styles";
export default function UploadProcedure ({...args}) {

  const [state, setState] = useState({
    multipleCreate: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Container>
      <Content contentContainerStyle={{flex: 1}}>
        <Grid style={[genericStyles.centeredGrid]}>
        <Form>
        <View style={{flex:2 , justifyContent: 'space-around',
                  alignItems: 'stretch',}}>
          <Item>
            <Input placeholder="Completá CUIT o Razon social" />
          </Item>
          <ListItem>
            <CheckBox checked={true} />
              <Body>
                <Text>  Alta múltiple misma empresa</Text>
              </Body>
          </ListItem>
          <Item last>
            <Input placeholder="Completá el CUIT" />
          </Item>
          </View >
          
          <View style={{flex:1}}>
            <Textarea rowSpan={5} bordered placeholder="Textarea" />
          </View>

          <View style={{flex:2 , 
                  alignItems: 'stretch',}}>
            <Button style={[ genericStyles.btnDefault, { backgroundColor: '#e75300'}]}>
              <Text style={genericStyles.textWhite}>TUTORIAL: FOTO AL FORMULARIO</Text>
            </Button>
            <Button transparent style={[ genericStyles.btnDefault , {borderColor: '#ecf0f1'}]}>
              <Text> COMENZAR TRAMITE </Text>
            </Button>
            <Button light style={[ genericStyles.btnDefault , { borderColor: '#e75300'}]}>
              <Text> ENVIAR FORMULARIO POR EMAIL </Text>
            </Button>
          </View>
        </Form>
        </Grid>
      </Content>
    </Container>
  );

}