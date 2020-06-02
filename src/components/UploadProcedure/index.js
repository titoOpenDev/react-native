import React, { useState, useEffect } from "react";
import {Text, Button as NativeButton} from "react-native";
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { View, Form, Item, Input, Label, Body, ListItem, CheckBox, Button, Image, Container, Content, Textarea, Grid } from "native-base";
import genericStyles from "../../styles";
import MenuBar from '../MenuBar'
import { uploadImage } from '../../redux/api';
import Axios from "axios";

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
      // const result = await uploadImage('http://localhost:3000/api/upload','POST', photo)
      const photoOptions = {
        uri: photo.uri,
        type: 'image/png',
        name: photo.image.uri.substr(photo.image.uri.lastIndexOf('/') + 1)
      };
      // console.log('filename: ',  photo.image.uri.substr(photo.image.uri.lastIndexOf('/') + 1))
      // const form = new FormData();
      // form.append("ProfilePicture", photoOptions);
      // form.append('Content-Type', 'image/jpg');
      let form = new FormData();
      form.append('photo', {uri: photo.uri, name: photo.image.uri.substr(photo.image.uri.lastIndexOf('/') + 1),filename :photo.image.uri.substr(photo.image.uri.lastIndexOf('/') + 1),type: 'image/jpg'});
      form.append('Content-Type', 'image/jpg');
      Axios('http://192.168.1.39:3000/api/upload', {method:'POST', body: form})
      // fetch('http://localhost:3000/')
      // uploadImage('http://192.168.1.39:3000/api/upload','POST', photo)
      .then((result) => {
        console.log('response: ', result)
      })
      .catch((e) => {
        console.log('error nuevo: ', e);
      })
    } catch (error) {
      console.log('axios error: ', error);
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
            <Button style={[ genericStyles.btnDefault, { backgroundColor: '#e75300'}]} onPress={pickImage}>
              <Text style={genericStyles.textWhite}>Adjuntar Foto</Text>
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