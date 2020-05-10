import React, { useEffect, useState } from "react";
import { Image, View} from "react-native";
import { Container, Content, Button, Text, Form, Item, 
        Input, Left, Header, Icon, Title, Body } from "native-base";
import genericStyles from "../../styles";
import styles from './style'

export default function RegistrationBegin({navigation}) {

  const [email, setEmail] = useState("");
  const [nombreApellido , setNombreApellido] = useState("");
  const [CUIL , setCUIL] = useState("")

  useEffect(() => {
   
  });

  const handleChangeEmail = (text) => {
      setEmail(text);
  }

  const handleChangeNombreApellido = (text) => {
        setNombreApellido(text)
  }

  const handleChangeCUIL = (text) => {
        setCUIL(text)
  }

  const handleNext = () => {

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
      <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ecf0f1'}}>
          <Image source={require('../../../assets/ase_nacional_imagen_app.png')} 
                style={styles.img}/>
      </View>
      <View style={{flex:5,justifyContent: 'flex-start', alignItems:'center' }}>
          <Text style={styles.message}>
            Bienvenido a la App de ventas de ASE. Creando 
            tu cuenta podras realizar las consultas, acelerar
            el proceso de alta de nuevos Afiliados enviando la 
            info y obteniendo respuesta en pocos minutos</Text>
      
          <Text style={styles.message}>
            Registrate con unos pocos datos y comenza a disfrutar
            de los beneficios de ASE Ventas
          </Text>
          <Form style={genericStyles.form}>
                <Item last>
                    <Input placeholder="CUIL" onChangeText={text => handleChangeCUIL(text)} maxLength={13}/>
                </Item>
                <Item last>
                    <Input placeholder="Nombre y Apellido" onChangeText={text => handleChangeNombreApellido(text)}/>
                </Item>
                <Item last>
                    <Input placeholder="E-MAIL" onChangeText={text => handleChangeEmail(text)}/>
                </Item>
            </Form>
      </View>
      <View style={{flex:1,height: 100, justifyContent: 'center', alignItems: 'center'}}>
        <Button light style={[styles.loginBtn , genericStyles.btnDefault]} onPress={handleNext} > 
            <Text style={genericStyles.textWhite}>Siguiente </Text>
        </Button>
      </View>
      </View>
  </Container>
    






  );
};

