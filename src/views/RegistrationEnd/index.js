import React, { useEffect } from "react";
import {Text} from "react-native"
import { Spinner, Container, Content, Grid, Item, Form, Picker, Button, Header, Left, Icon, Body, Title, Input, View } from "native-base";
import genericStyles from "../../styles";
import {
  PASSWORD_RECOVERY,
  REGISTRATION_BEGIN
} from "../../consts";

export default function RegistrationEnd({navigation}) {


  useEffect(() => {
    
  })
   

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
            <Title>Registro 2/2</Title>
          </Body>
      </Header>
      <Content contentContainerStyle={[genericStyles.centeredContent]}>
          
          <Grid style={[genericStyles.centeredGrid]}>
          <Form>
            <View style={{flex:1 , justifyContent: 'center',
                  alignItems: 'stretch',}}>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
              >
                <Picker.Item label="Red" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
            </View>
            <View style={{flex:1}}>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
              >
                <Picker.Item label="Zona filial" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
            </View>
            <View style={{flex:1}}>
            <Item>
              <Input placeholder="Clave" />
            </Item>
            </View>
            <View style={{flex:1}}>
            <Item last>
              <Input placeholder="Repetir clave" />
            </Item>
            </View>
            <View style={{flex:1}}>
            <Button light style={[ {backgroundColor: '#e75300'} , genericStyles.btnDefault]}>
                <Text style={genericStyles.textWhite}>Registrarme </Text>
            </Button>
            </View>
          </Form>
          </Grid>
      </Content>
    </Container>
  );
};
