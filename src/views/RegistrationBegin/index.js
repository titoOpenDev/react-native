import React, { useEffect, useState } from "react";
import { Image, View} from "react-native";
import { Container, Content, Button, Text, Form, Item, 
        Input, Left, Header, Icon, Title, Body } from "native-base";
import genericStyles from "../../styles";
import styles from './style'
import {buildExecutive} from '../../redux/ducks/executiveDucks';

import {
  LOGIN,
  HOME,
  PASSWORD_RECOVERY,
  REGISTRATION_BEGIN,
  REGISTRATION_END
} from "../../consts";
import { useDispatch } from "react-redux";


export default function RegistrationBegin({navigation}) {

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [firstName , setFirstName] = useState("");
  const [lastName , setlastName] = useState("");
  const [cuil , setCUIL] = useState("")

  useEffect(() => {
   
  });

  const handleChangeEmail = (text) => {
      setEmail(text);
  }

  const handleChangeFirstName = (text) => {
      setFirstName(text)
  }

  const handleChangeLastName = (text) => {
      setlastName(text);
  }

  const handleChangeCUIL = (text) => {
        setCUIL(text)
  }

  const handleNext = () => {

    const payload = { lastName , firstName , email , cuil }

    dispatch(buildExecutive(payload))
    navigation.navigate(REGISTRATION_END);
  }

  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <Container>
        <Header>
          <Left>
            <Button onPress={ handleGoBack }>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Registro 1/2</Title>
          </Body>
      </Header>
      <Content>
     {/*  <View style={{flex: 1, flexDirection: 'column'}}> */}
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ecf0f1'}}>
          <Image source={require('../../../assets/ase_nacional_imagen_app.png')} 
                style={styles.img}/>
      </View>
      <View style={{flex:1,justifyContent: 'flex-start', alignItems:'center' , marginTop: 50 }}>
          <Text style={styles.message}>
            Bienvenido a la App de ventas de ASE. Creando 
            tu cuenta podras realizar las consultas, acelerar
            el proceso de alta de nuevos Afiliados enviando la 
            info y obteniendo respuesta en pocos minutos</Text>
      
          <Text style={[styles.message , {marginBottom : 30}]}>
            Registrate con unos pocos datos y comenza a disfrutar
            de los beneficios de ASE Ventas
          </Text>
          <Form style={genericStyles.form}>
                <Item last>
                    <Input placeholder="CUIL" onChangeText={text => handleChangeCUIL(text)} maxLength={13}/>
                </Item>
                <Item last>
                    <Input placeholder="Nombre" onChangeText={text => handleChangeFirstName(text)}/>
                </Item>
                <Item last>
                    <Input placeholder="Apellido" onChangeText={text => handleChangeLastName(text)}/>
                </Item>
                <Item last>
                    <Input placeholder="E-MAIL" onChangeText={text => handleChangeEmail(text)}/>
                </Item>
            </Form>
      </View>
      <View style={{flex:1,height: 100, justifyContent: 'flex-end', alignItems: 'center', marginTop: 20}}>
        <Button light style={[styles.loginBtn , genericStyles.btnDefault]} onPress={handleNext} > 
            <Text style={genericStyles.textWhite}>Siguiente </Text>
        </Button>
      </View>
     {/*  </View> */}
      </Content>
  </Container>
  );
};

