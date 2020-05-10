import React, { useEffect, useState } from "react";
import { Image} from "react-native";
import { Container, Content, Grid, Button, Text, Form, Item,Input, Left, Header, Icon, Title, Right, Body } from "native-base";
import genericStyles from "../../styles";
import styles from './style'

export default function PasswordRecovery({navigation}) {

  const [email, setEmail] = useState("")

  useEffect(() => {
   
  });

  const handleChangeEmail = (text) => {
      setEmail(text);
  }

  const handleSendEmail = () => {

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
              <Title>Recupero de clave</Title>
            </Body>
          </Header>
            <Content contentContainerStyle={styles.imageContainer}>
                <Image source={require('../../../assets/ase_nacional_imagen_app.png')} 
                    style={styles.img}/>
            </Content>
           
            <Content contentContainerStyle={{flex: 1}}>
                <Grid style={[genericStyles.centeredGrid , styles.grid]}>
                    <Text style={styles.message}>
                      Si ya tenés creada tu cuenta
                      y no recordas la clave
                      ingresá el E-Mail que usaste
                      durante la registracion
                      y presioná ENVIAR</Text>
                
                    <Text style={styles.message}>  
                      En instantes te enviaremos
                      una clave provisoria
                    </Text>
                </Grid>
            </Content>
            <Content contentContainerStyle={{flex:1}}>
                <Grid style={[genericStyles.centeredGrid , styles.grid , styles.spaceAround]}>
                    <Form style={genericStyles.form}>
                        <Item last>
                            <Input placeholder="E-MAIL" onChangeText={text => handleChangeEmail(text)}/>
                        </Item>
                    </Form>
                    <Button light style={[styles.loginBtn , genericStyles.btnDefault]} onPress={handleSendEmail}>
                        <Text style={genericStyles.textWhite}>Enviar </Text>
                    </Button>
                </Grid>
            </Content>
        </Container>
  );
};

