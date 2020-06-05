import React, { useState, useEffect } from "react";
import {Text, Button as NativeButton} from "react-native";
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { View, Form, Item, Input, Label, Body, ListItem, CheckBox, Button, Image, Container, Content, Textarea, Grid } from "native-base";
import genericStyles from "../../styles";
import MenuBar from '../MenuBar'
import { uploadImage } from '../../redux/api';
import { AntDesign } from '@expo/vector-icons'; 
import { stringify } from "qs";

export default function UploadProcedure ({navigation}) {

  const [hasPermission, setHasPermission] = useState(null);
  const [photo, setPhoto] = useState({});

  const [state, setState] = useState({
    multipleCreate: false,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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

  const handleSubmit = async () => {
    try {
      uploadImage('http://192.168.1.39:3000/api/upload', 'post', photo.image.uri)
      .then((result) => {
        console.log('result: ', stringify(result));
      })
      .catch((e) => { console.log('request error: ', e);})
      // console.log('result: ', result);
    } catch (error) {
      // console.log('error: ', error);
    }
  }

  return (
    <Container>
      <MenuBar 
        onPress={() => navigation.openDrawer()}
      />
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
          
          <View style={{flex:1}} >
            <Textarea rowSpan={5} bordered placeholder="" onPress={pickImage}/>
          </View>

          <View style={{flex:2 , 
                  alignItems: 'stretch',}}>
            <Button style={[ genericStyles.btnDefault, { backgroundColor: '#fff'}]} onPress={pickImage}>
              <AntDesign name="camera" size={24} color="black" />
              <Text style={genericStyles.textBlack}>Cargar una imagen</Text>
            </Button>
            <Button style={[ genericStyles.btnDefault, { backgroundColor: '#e75300'}]}>
              <Text style={genericStyles.textWhite}>TUTORIAL: FOTO AL FORMULARIO</Text>
            </Button>
            <Button transparent style={[ genericStyles.btnDefault , {borderColor: '#ecf0f1'}]} onPress={handleSubmit}>
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